// Copyright 2011, Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @author api.davidtorres@gmail.com (David Torres)
 */

/**
 * @fileoverview Defines UIManager, main class that manages all UI interactions.
 */

goog.require('google.ads.adwords.objstatsext.AwApiLoader');
goog.require('google.ads.adwords.objstatsext.SettingsLoader');

goog.provide('google.ads.adwords.objstatsext.UIManager');

/**
 * Provides all the logic of interaction with the extension UI.
 * @constructor
 */
google.ads.adwords.objstatsext.UIManager = function() {

  // Constants.
  this.EMAIL_EXPR_ = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.(?:[A-Z]{2}|com|org|net|edu|gov|mil|biz|info|mobi|name|aero|asia|jobs|museum)$/i;
  this.PER_PAGE_ = 10;
  this.STATS_VIEW = 0;
  this.GRAPH_VIEW = 1;
  this.VIEW_ANIMATION_DELAY = 500;
  this.ALL_CAMPAIGNS_VIEW = 0;
  this.CAMPAIGN_VIEW = 1;
  this.AD_GROUP_VIEW = 2;

  // Data adapters.
  this.awApiLoader_ = new google.ads.adwords.objstatsext.AwApiLoader();
  this.settingsLoader = new google.ads.adwords.objstatsext.SettingsLoader();

  // Date pickers defaults.
  this.toDate = this.getToday_();
  this.fromDate = this.getToday_();
  this.fromDate.setDate(this.toDate.getDate() - 7);

  // Crumbtrail initialization.
  this.crumbtrailElements_ = [{
    label: 'All Campaigns',
    action: 'uiManager.goToAllCampaigns()'
  }];

  // View data structures & defaults.
  this.allCampaignsView_ = {
    viewName: this.ALL_CAMPAIGNS_VIEW,
    viewState: this.STATS_VIEW,
    loading: false,
    dataTableViews: {
      campaignsDataTable: {
        page: 1,
        data: [],
        resultsTable: 'campaignsResult',
        loadingView: 'campaignsLoading',
        paginationSection: 'campaignsPagination',
        dataRowTemplate: 'campaignRowTemplate',
        countersSection: 'allCampaignsCounters',
        previousLink: 'previousCampaigns',
        nextLink: 'nextCampaigns',
        dataAdapterGet: goog.bind(this.awApiLoader_.getCampaigns,
            this.awApiLoader_),
        graphRenderer: goog.bind(this.renderAllCampaignsGraph_, this)
      }
    }
  };
  this.campaignView_ = {
    viewName: this.CAMPAIGN_VIEW,
    viewState: this.STATS_VIEW,
    loading: false,
    campaign: null,
    dataTableViews: {
      adGroupsDataTable: {
        page: 1,
        data: [],
        resultsTable: 'adGroupsResult',
        loadingView: 'adGroupsLoading',
        paginationSection: 'adGroupsPagination',
        dataRowTemplate: 'adGroupRowTemplate',
        countersSection: 'adGroupsCounters',
        previousLink: 'previousAdGroups',
        nextLink: 'nextAdGroups',
        dataAdapterGet: null,
        graphRenderer: goog.bind(this.renderAdGroupsGraph_, this)
      }
    }
  };
  this.adGroupView_ = {
    viewName: this.AD_GROUP_VIEW,
    viewState: this.STATS_VIEW,
    loading: false,
    adGroup: null,
    dataTableViews: {
      adsDataTable: {
        page: 1,
        data: [],
        resultsTable: 'adsResult',
        loadingView: 'adsLoading',
        paginationSection: 'adsPagination',
        dataRowTemplate: 'adsRowTemplate',
        countersSection: 'adCounters',
        previousLink: 'previousAds',
        nextLink: 'nextAds',
        dataAdapterGet: null,
        graphRenderer: goog.bind(this.renderAdsGraph_, this)
      },
      criteriaDataTable: {
        page: 1,
        data: [],
        resultsTable: 'criteriaResult',
        loadingView: 'criteriaLoading',
        paginationSection: 'criteriaPagination',
        dataRowTemplate: 'criteriaRowTemplate',
        countersSection: 'criteriaCounters',
        previousLink: 'previousCriteria',
        nextLink: 'nextCriteria',
        dataAdapterGet: null,
        graphRenderer: goog.bind(this.renderCriteriaGraph_, this)
      }
    }
  };
  this.currentView_ = this.allCampaignsView_;
};

// UI Initialization.

/**
 * Method that initializes the UI widgets.
 * To be called when the page DOM is ready to be updated.
 */
google.ads.adwords.objstatsext.UIManager.prototype.init = function() {

  // Enabling ad group view tabs.
  $('#adGroupTabs').tabs();

  // Enabling stats date pickers and logic.
  $('#fromDate').datepicker({
    onClose: goog.bind(this.dateChanged_, this)
  });
  $('#toDate').datepicker({
    onClose: goog.bind(this.dateChanged_, this)
  });
  $('#fromDate').val(this.formatDate_(this.fromDate));
  $('#toDate').val(this.formatDate_(this.toDate));

  // Render initial crumbtrail state.
  this.renderCrumbtrail();

  if (!this.settingsLoader.getConfig().email) {
    $('#extensionBody').hide();
    $('#settingsErrorAlert').hide();
    $('#settingAlerts').show();
    $('#missingSettingsAlert').show();
  } else {
    this.awApiLoader_.setConfig(this.settingsLoader.getConfig());
    this.awApiLoader_.statsStartDate = this.fromDate;
    this.awApiLoader_.statsEndDate = this.toDate;
    setTimeout(goog.bind(this.renderAllCampaigns_, this), 10);
  }
};

// Campaign view methods.

/**
 * Renders current page of all campaigns view.
 *
 * @private
 */
google.ads.adwords.objstatsext.UIManager.prototype.renderAllCampaigns_ =
    function() {

  // Noop if campaign is already loading.
  if (this.allCampaignsView_.loading) {
    return;
  }

  this.switchToStats();

  // Set state as loading to avoid repeated loads.
  this.allCampaignsView_.loading = true;

  // Set table view parameters and load it.
  this.updateDataTable_(this.allCampaignsView_,
      this.allCampaignsView_.dataTableViews.campaignsDataTable);
};

/**
 * Renders current page of all campaigns graph.
 *
 * @param {Array} campaigns Campaigns to use for rendering the graph.
 * @private
 */
google.ads.adwords.objstatsext.UIManager.prototype.renderAllCampaignsGraph_ =
  function(campaigns) {
  if (google.visualization && google.visualization.DataTable) {
    var data = new google.visualization.DataTable();

    data.addColumn('string', 'Campaign');
    data.addColumn('number', 'Impressions');
    data.addColumn('number', 'Clicks');
    data.addColumn('number', 'Conversions');

    data.addRows(campaigns.length);

    for (var j = 0; j < campaigns.length; ++j) {
      data.setValue(j, 0, campaigns[j].name);
      data.setValue(j, 1, campaigns[j].campaignStats.impressions);
      data.setValue(j, 2, campaigns[j].campaignStats.clicks);
      data.setValue(j, 3, campaigns[j].campaignStats.conversions);
    }

    // Create and draw the visualization.
    new google.visualization.BarChart(
        document.getElementById('campaignsGraph')).draw(data,
            {title: 'Campaign Statistics', width: 479, height: 330,
             hAxis: {logScale: true}});
  } else {
    this.showGraphUnavailableError_(document.getElementById('campaignsGraph'));
  }
};

/**
 * Action handler to jump to next page of campaigns in the all campaigns view.
 */
google.ads.adwords.objstatsext.UIManager.prototype.nextCampaigns = function() {
  this.allCampaignsView_.dataTableViews.campaignsDataTable.page++;
  this.renderAllCampaigns_();
};

/**
 * Action handler to jump to the previous page of campaigns in the all
 * campaigns view.
 */
google.ads.adwords.objstatsext.UIManager.prototype.previousCampaigns =
    function() {
  if (this.allCampaignsView_.dataTableViews.campaignsDataTable.page == 1) {
    return;
  }
  this.allCampaignsView_.dataTableViews.campaignsDataTable.page--;
  this.renderAllCampaigns_();
};

/**
 * Crumbtrail navigation handler to jump to the all campaigns view.
 */
google.ads.adwords.objstatsext.UIManager.prototype.goToAllCampaigns =
    function() {
  this.crumbtrailElements_ = [{
    label: 'All Campaigns',
    action: 'uiManager.goToAllCampaigns()'
  }];
  this.renderCrumbtrail();
  $('#sectionsSlider').clearQueue();
  $('#sectionsSlider').animate({left: '0px'}, this.VIEW_ANIMATION_DELAY);
  this.currentView_ = this.allCampaignsView_;
  this.renderAllCampaigns_();
};

/**
 * Action handler to select a campaign and jump to the campaign details view.
 *
 * @param {number} campaignId Campaign id to be loaded.
 */
google.ads.adwords.objstatsext.UIManager.prototype.selectCampaign =
    function(campaignId) {
  $('#sectionsSlider').clearQueue();
  $('#sectionsSlider').animate({left: '-500px'}, this.VIEW_ANIMATION_DELAY);
  this.pushToCrumbtrail_({label: 'Campaign ' + campaignId,
      action: 'uiManager.backToCampaign(' + campaignId + ')'});
  this.currentView_ = this.campaignView_;
  this.renderCampaign_(campaignId);
};

// Campaign detail view methods.

/**
 * Render the campaign details view. Which includes the ad groups table
 * associated to the campaign.
 *
 * @param {string} campaignId Campaign id.
 * @private
 */
google.ads.adwords.objstatsext.UIManager.prototype.renderCampaign_ =
    function(campaignId) {

  // Noop if campaign is already loading.
  if (this.campaignView_.loading) {
    return;
  }

  if (!campaignId) {
    // Just refreshing campaign id didn't change.
    if (this.campaignView_.campaign) {
      campaignId = this.campaignView_.campaign.id;
    } else {
      return;
    }
  }

  this.switchToStats();

  // Set state as loading to avoid repeated loads.
  this.campaignView_.loading = true;

  // Loads the campaign from the adapter in case dates change so stats need to
  // be updated.
  this.awApiLoader_.getCampaign(campaignId, goog.bind(function(campaign) {
    this.campaignView_.campaign = campaign;

    // Update campaign information.
    $('#campaignName').html(this.campaignView_.campaign.name);
    $('#campaignBudget').text(this.campaignView_.campaign.budget.amount.value);
    $('#campaignClicks').text(this.campaignView_.campaign.campaignStats.clicks);
    $('#campaignImpressions').text(this.campaignView_.campaign.campaignStats.
        impressions);
    $('#campaignCost').text(this.campaignView_.campaign.campaignStats.cost.
        value);
    $('#campaignConversions').text(this.campaignView_.campaign.campaignStats.
        conversions);
  }, this), goog.bind(this.handleError_, this));

  // Set table view parameters and load it.
  this.campaignView_.dataTableViews.adGroupsDataTable.dataAdapterGet =
      goog.bind(this.awApiLoader_.getAdGroups, this.awApiLoader_, campaignId);
  this.updateDataTable_(this.campaignView_,
      this.campaignView_.dataTableViews.adGroupsDataTable);
};

/**
 * Renders the campaign details graph based on the current page of ad group
 * data.
 *
 * @param {Array} adGroups The list of ad group statistics to be graphed.
 * @private
 */
google.ads.adwords.objstatsext.UIManager.prototype.renderAdGroupsGraph_ =
    function(adGroups) {
  if (google.visualization && google.visualization.DataTable) {
    var data = new google.visualization.DataTable();

    data.addColumn('string', 'AdGroup');
    data.addColumn('number', 'Imp.');
    data.addColumn('number', 'Clicks');
    data.addColumn('number', 'Conv.');
    data.addColumn('number', 'Cost');
    data.addColumn('number', 'Avg. Pos.');

    data.addRows(adGroups.length);

    for (var j = 0; j < adGroups.length; ++j) {
      data.setValue(j, 0, adGroups[j].name);
      data.setValue(j, 1, adGroups[j].stats.impressions);
      data.setValue(j, 2, adGroups[j].stats.clicks);
      data.setValue(j, 3, adGroups[j].stats.conversions);
      data.setValue(j, 4, adGroups[j].stats.cost.value);
      data.setValue(j, 5, adGroups[j].stats.averagePosition);
    }

    // Create and draw the visualization.
    new google.visualization.BarChart(document.getElementById('adGroupsGraph')).
        draw(data,
             {title: 'Ad Group Statistics',
              width: 479, height: 330, hAxis: {logScale: true}}
        );
  } else {
    this.showGraphUnavailableError_(document.getElementById('adGroupsGraph'));
  }
};

/**
 * Action handler to jump to next page of ad groups.
 */
google.ads.adwords.objstatsext.UIManager.prototype.nextAdGroups = function() {
  this.campaignView_.dataTableViews.adGroupsDataTable.page++;
  this.renderCampaign_();
};

/**
 * Action handler to jump to previous page of ad groups.
 */
google.ads.adwords.objstatsext.UIManager.prototype.previousAdGroups =
    function() {
  if (this.campaignView_.dataTableViews.adGroupsDataTable.page == 1) {
    return;
  }
  this.campaignView_.dataTableViews.adGroupsDataTable.page--;
  this.renderCampaign_();
};

/**
 * Returns the campaign detail view.
 *
 * @param {number} campaignId Campaign id to render.
 */
google.ads.adwords.objstatsext.UIManager.prototype.backToCampaign =
    function(campaignId) {
  $('#sectionsSlider').clearQueue();
  $('#sectionsSlider').animate({left: '-500px'}, this.VIEW_ANIMATION_DELAY);
  this.popFromCrumbtrail_();
  this.currentView_ = this.campaignView_;
  this.renderCampaign_();
};

/**
 * Action handler to select an ad group and jump to the ad group detail view.
 *
 * @param {number} adGroupId Selected ad group id.
 */
google.ads.adwords.objstatsext.UIManager.prototype.selectAdGroup =
    function(adGroupId) {
  $('#sectionsSlider').clearQueue();
  $('#sectionsSlider').animate({left: '-1000px'}, this.VIEW_ANIMATION_DELAY);
  this.pushToCrumbtrail_({label: 'AdGroup ' + adGroupId});
  this.currentView_ = this.adGroupView_;
  this.renderAdGroup_(adGroupId);
};

// AdGroup detail view methods.

/**
 * Renders a selected ad group detail view, including its associated tables of
 * ads and criteria.
 *
 * @param {number} adGroupId Selected ad group id.
 * @private
 */
google.ads.adwords.objstatsext.UIManager.prototype.renderAdGroup_ =
  function(adGroupId) {

  // Noop if ad group is already loading.
  if (this.adGroupView_.loading) {
    return;
  }

  if (!adGroupId) {
    // Just refreshing campaign id didn't change.
    if (this.adGroupView_.adGroup) {
      adGroupId = this.adGroupView_.adGroup.id;
    } else {
      return;
    }
  }

  this.switchToStats();

  // Set state as loading to avoid repeated loads.
  this.adGroupView_.loading = true;

  // Loads the ad group from the adapter in case dates changed so stats need to
  // be refreshed.
  this.awApiLoader_.getAdGroup(adGroupId, goog.bind(function(adGroup) {
    this.adGroupView_.adGroup = adGroup;

    // Update ad group information.
    $('#adGroupName').text(adGroup.name);
    $('#adGroupBid').text(adGroup.bid);
    $('#adGroupClicks').text(adGroup.stats.clicks);
    $('#adGroupImpressions').text(adGroup.stats.impressions);
    $('#adGroupCost').text(adGroup.stats.cost.value);
    $('#adGroupConversions').text(adGroup.stats.conversions);
  }, this), goog.bind(this.handleError_, this));

  // Set table view parameters and load it.
  this.adGroupView_.dataTableViews.adsDataTable.dataAdapterGet =
      goog.bind(this.awApiLoader_.getAds, this.awApiLoader_, adGroupId);
  this.updateDataTable_(this.adGroupView_,
      this.adGroupView_.dataTableViews.adsDataTable);

  this.adGroupView_.dataTableViews.criteriaDataTable.dataAdapterGet =
      goog.bind(this.awApiLoader_.getCriteria, this.awApiLoader_, adGroupId);
  this.updateDataTable_(this.adGroupView_,
      this.adGroupView_.dataTableViews.criteriaDataTable);
};

/**
 * Renders the graph of ads statistics based on a given list of ads.
 *
 * @param {Array} ads List of ads statistics to be graphed.
 * @private
 */
google.ads.adwords.objstatsext.UIManager.prototype.renderAdsGraph_ =
    function(ads) {

  if (google.visualization && google.visualization.DataTable) {
    var data = new google.visualization.DataTable();

    data.addColumn('string', 'Ad');
    data.addColumn('number', 'Imp.');
    data.addColumn('number', 'Clicks');
    data.addColumn('number', 'Conv.');
    data.addColumn('number', 'Cost');
    data.addColumn('number', 'Avg. Pos.');

    data.addRows(ads.length);

    for (var j = 0; j < ads.length; ++j) {
      data.setValue(j, 0, ads[j].typeTitle);
      data.setValue(j, 1, ads[j].stats.impressions);
      data.setValue(j, 2, ads[j].stats.clicks);
      data.setValue(j, 3, ads[j].stats.conversions);
      data.setValue(j, 4, ads[j].stats.cost.value);
      data.setValue(j, 5, ads[j].stats.averagePosition);
    }

    // Create and draw the visualization.
    new google.visualization.BarChart(document.getElementById('adsGraph')).
      draw(data, {title: 'Ad Statistics',
          width: 440, height: 270, hAxis: {logScale: true, minValue: 0}});
  } else {
    this.showGraphUnavailableError_(document.getElementById('adsGraph'));
  }
};

/**
 * Renders the graph of ads statistics based on a given list of criteria.
 *
 * @param {Array} criteria List of criteria statistics to be graphed.
 * @private
 */
google.ads.adwords.objstatsext.UIManager.prototype.renderCriteriaGraph_ =
    function(criteria) {
  if (google.visualization && google.visualization.DataTable) {
    var data = new google.visualization.DataTable();

    data.addColumn('string', 'Criteria');
    data.addColumn('number', 'Imp.');
    data.addColumn('number', 'Clicks');
    data.addColumn('number', 'Conv.');

    data.addRows(criteria.length);

    for (var j = 0; j < criteria.length; ++j) {
      data.setValue(j, 0, criteria[j].typeTitle);
      data.setValue(j, 1, criteria[j].stats.impressions);
      data.setValue(j, 2, criteria[j].stats.clicks);
      data.setValue(j, 3, criteria[j].stats.conversions);
    }

    // Create and draw the visualization.
    new google.visualization.BarChart(document.getElementById('criteriaGraph')).
      draw(data, {title: 'Criteria Statistics',
          width: 440, height: 270, hAxis: {logScale: true}});
  } else {
    this.showGraphUnavailableError_(document.getElementById('criteriaGraph'));
  }
};

/**
 * Action handler to render next page of ads.
 */
google.ads.adwords.objstatsext.UIManager.prototype.nextAds = function() {
  this.adGroupView_.dataTableViews.adsDataTable.page++;
  this.renderAdGroup_();
};

/**
 * Action handler to render previous page of ads.
 */
google.ads.adwords.objstatsext.UIManager.prototype.previousAds = function() {
  if (this.adGroupView_.dataTableViews.adsDataTable.page == 1) {
    return;
  }
  this.adGroupView_.dataTableViews.adsDataTable.page--;
  this.renderAdGroup_();
};

/**
 * Action handler to render next page of criteria.
 */
google.ads.adwords.objstatsext.UIManager.prototype.nextCriteria = function() {
  this.adGroupView_.dataTableViews.criteriaDataTable.page++;
  this.renderAdGroup_();
};

/**
 * Action handler to render next page of criteria.
 */
google.ads.adwords.objstatsext.UIManager.prototype.previousCriteria =
    function() {
  if (this.adGroupView_.dataTableViews.criteriaDataTable.page == 1) {
    return;
  }
  this.adGroupView_.dataTableViews.criteriaDataTable.page--;
  this.renderAdGroup_();
};

// UI update methods.

/**
 * Updates a table of statistics.
 *
 * @param {Object} view View configuration to which the table belongs.
 * @param {Object} dataTableView Table view configuration to be updated.
 * @private
 */
google.ads.adwords.objstatsext.UIManager.prototype.updateDataTable_ =
    function(view, dataTableView) {

  var resultsTable = $(document.getElementById(dataTableView.resultsTable));
  var loadingView = $(document.getElementById(dataTableView.loadingView));
  var rowTemplate = $(document.getElementById(dataTableView.dataRowTemplate));
  var paginationSection =
      $(document.getElementById(dataTableView.paginationSection));
  var countersSection =
      $(document.getElementById(dataTableView.countersSection));
  var previousLink = $(document.getElementById(dataTableView.previousLink));
  var nextLink = $(document.getElementById(dataTableView.nextLink));

  // UI widgets visibility.
  resultsTable.hide();
  loadingView.show();
  paginationSection.hide();

  // Load campaigns logic.
  var offset = this.calculateOffset_(dataTableView);
  var resultsHandler = goog.bind(function(data) {

    dataTableView.data = data;

    // UI widgets update.
    resultsTable.empty();
    rowTemplate.tmpl(data.entries).appendTo(resultsTable);
    loadingView.hide();

    // Calculating and updating bottom counters and navigation links.
    this.updateTableCounters_(data, dataTableView, countersSection,
        previousLink, nextLink);

    // UI widgets visibility.
    resultsTable.show();
    paginationSection.show();
    view.loading = false;

    // Render ad groups graph in background.
    var rendererFn = goog.bind(dataTableView.graphRenderer, this, data.entries);
    setTimeout(rendererFn, 100);
  }, this);
  var errorsHandler = goog.bind(this.handleError_, this);
  dataTableView.dataAdapterGet(offset, this.PER_PAGE_, resultsHandler,
      errorsHandler);
};

/**
 * Updates a table view bottom counter and navigation links.
 *
 * @param {Object} results Page of entries retrieved from the API.
 * @param {Object} viewState Table view state (holds properties like current
   page).
 * @param {DOMObject} counters The page object to be updated.
 * @param {DOMObject} previous The page previous link to be updated.
 * @param {DOMObject} next The page next link to be updated.
 * @private
 */
google.ads.adwords.objstatsext.UIManager.prototype.updateTableCounters_ =
    function(results, viewState, counters, previous, next) {
  var first = this.calculateOffset_(viewState);
  var last = first + this.PER_PAGE_ > results.totalNumEntries ?
      results.totalNumEntries : first + this.PER_PAGE_;
  first++;
  counters.empty();
  $('#countersTemplate').tmpl({first: first, last: last,
      total: results.totalNumEntries}).appendTo(counters);

  previous.hide();
  next.hide();
  if (viewState.page > 1) {
    previous.show();
  }
  if (last < results.totalNumEntries) {
    next.show();
  }
};

/**
 * Adds an entry to the navigation crumbtrail.
 *
 * @param {Object.<string, string>} elem Crumbtrail entry to push.
 * @private
 */
google.ads.adwords.objstatsext.UIManager.prototype.pushToCrumbtrail_ =
    function(elem) {
  this.crumbtrailElements_.push(elem);
  this.renderCrumbtrail();
};

/**
 * Pops an entry from the navigation crumbtrail.
 * @private
 */
google.ads.adwords.objstatsext.UIManager.prototype.popFromCrumbtrail_ =
    function() {
  if (this.crumbtrailElements_.length == 1) {
    return;
  }
  this.crumbtrailElements_.pop();
  this.renderCrumbtrail();
};

/**
 * Renders the crumbtrail.
 */
google.ads.adwords.objstatsext.UIManager.prototype.renderCrumbtrail =
    function() {
  var htmlCode = '';
  for (var i = 0, len = this.crumbtrailElements_.length; i < len; i++) {
    var crumbTrailElement = this.crumbtrailElements_[i].label;
    if (i < len - 1 && this.crumbtrailElements_[i].action) {
      crumbTrailElement = '<a href="javascript:' +
          this.crumbtrailElements_[i].action + '">' + crumbTrailElement +
              '</a>';
    }
    htmlCode += (i != 0 ? ' &gt; ' : '') + crumbTrailElement;
  }
  $('#crumbtrail').html(htmlCode);
};

/**
 * Action handler to switch to the graph mode of the current view.
 */
google.ads.adwords.objstatsext.UIManager.prototype.switchToGraph = function() {
  this.currentView_.viewState = this.GRAPH_VIEW;
  switch (this.currentView_.viewName) {
  case this.ALL_CAMPAIGNS_VIEW:
    this.transition_('#campaignsTable', '#campaignsGraph');
    break;
  case this.CAMPAIGN_VIEW:
    this.transition_('#adGroupsTable', '#adGroupsGraph');
    break;
  case this.AD_GROUP_VIEW:
    this.transition_('#adsTable', '#adsGraph');
    this.transition_('#criteriaTable', '#criteriaGraph');
    break;
  }
};

/**
 * Action handler to switch to the stats mode of the current view.
 */
google.ads.adwords.objstatsext.UIManager.prototype.switchToStats = function() {
  this.currentView_.viewState = this.STATS_VIEW;
  switch (this.currentView_.viewName) {
  case this.ALL_CAMPAIGNS_VIEW:
    this.transition_('#campaignsGraph', '#campaignsTable');
    break;
  case this.CAMPAIGN_VIEW:
    this.transition_('#adGroupsGraph', '#adGroupsTable');
    break;
  case this.AD_GROUP_VIEW:
    this.transition_('#adsGraph', '#adsTable');
    this.transition_('#criteriaGraph', '#criteriaTable');
    break;
  }
};

/**
 * Handles a transition between graph and stats mode, based on opacity.
 *
 * @param {DOMObject} section1 Transition from.
 * @param {DOMObject} section2 Transition to.
 * @private
 */
google.ads.adwords.objstatsext.UIManager.prototype.transition_ =
    function(section1, section2) {
  $(section2).show();
  $(section1).animate({opacity: 0}, this.VIEW_ANIMATION_DELAY, 'linear',
      function() {
        $(section1).hide();
      });
  $(section2).animate({opacity: 1}, this.VIEW_ANIMATION_DELAY);
};

// UI Others.

/**
 * Handles any runtime API errors, including credentials errors. Displays
 * errors message boxes in the UI.
 *
 * @param {Object} exception API exception.
 * @private
 */
google.ads.adwords.objstatsext.UIManager.prototype.handleError_ =
    function(exception) {
  this.currentView_.loading = false;

  $('#extensionBody').hide();
  if (exception.getInnerException() instanceof
      google.ads.common.AuthTokenException) {
    $('#settingAlerts').show();
    $('#settingsErrorAlert').show();
    $('#settingsErrorMessage').html(exception.getMessage());
  } else {
    $('#errors').show();
    $('#generalErrorAlert').show();
    $('#generalErrorDetail').hide();
    exception = exception.getApiException() ? exception.getApiException() :
        exception;
    $('#generalErrorMessage').html(exception.getMessage());
    if (exception.getDetail()) {
      $('#generalErrorDetail').html(exception.getDetail());
      $('#generalErrorDetail').show();
    }
  }
};

/**
 * Retries reloading the UI.
 * @private
 */
google.ads.adwords.objstatsext.UIManager.prototype.closeError_ =
    function() {
  window.location.reload(1);
};

/**
 * Show an error in the graph area when a graph can't be rendered, usually
 * because the graph API couldn't be loaded.
 *
 * @param {DOMObject} errorArea Graph page area.
 * @private
 */
google.ads.adwords.objstatsext.UIManager.prototype.showGraphUnavailableError_ =
    function(errorArea) {
  $(errorArea).text('');
  $(errorArea).html('<div class="graphUnavailableError">' +
      'Graphs are unavailable, try reloading the extension.</div>');
};

/**
 * Action handler to open the settings page of the extension.
 */
google.ads.adwords.objstatsext.UIManager.prototype.openSettings = function() {
  chrome.tabs.create({url: chrome.extension.getURL('options.html')});
};


// Utility methods.

/**
 * Calculates the offset of the given table view state.
 *
 * @param {Object} tableViewState Table view state.
 * @return {Number} Calculated page offset.
 * @private
 */
google.ads.adwords.objstatsext.UIManager.prototype.calculateOffset_ =
    function(tableViewState) {
  return (tableViewState.page - 1) * this.PER_PAGE_;
};

/**
 * Handles the update of statistic date range, triggers a refresh of data
 * when necessary.
 * @private
 */
google.ads.adwords.objstatsext.UIManager.prototype.dateChanged_ =
    function() {

  var fromDate = $('#fromDate').datepicker('getDate');
  var toDate = $('#toDate').datepicker('getDate');
  var datesChanged = false;

  if (fromDate.getTime() > toDate.getTime()) {
    $('#fromDate').val(this.formatDate_(this.fromDate));
    $('#toDate').val(this.formatDate_(this.toDate));
  } else {
    if (fromDate && fromDate.getTime() != this.fromDate.getTime()) {
      this.fromDate = fromDate;
      datesChanged = true;
    } else {
      $('#fromDate').val(this.formatDate_(this.fromDate));
    }
    if (toDate && toDate.getTime() != this.toDate.getTime()) {
      this.toDate = toDate;
      datesChanged = true;
    } else {
      $('#toDate').val(this.formatDate_(this.toDate));
    }
  }

  if (datesChanged) {
    this.awApiLoader_.statsStartDate = this.fromDate;
    this.awApiLoader_.statsEndDate = this.toDate;

    switch (this.currentView_.viewName) {
    case this.ALL_CAMPAIGNS_VIEW:
      this.renderAllCampaigns_();
      break;
    case this.CAMPAIGN_VIEW:
      this.renderCampaign_();
      break;
    case this.AD_GROUP_VIEW:
      this.renderAdGroup_();
      break;
    }
  }

};

/**
 * Retrieves today date with no time (time set to 00:00:00:00).
 *
 * @return {Date} A new date with hours:min:sec:ms set to 00:00:00:00.
 * @private
 */
google.ads.adwords.objstatsext.UIManager.prototype.getToday_ = function() {
  var date = new Date();
  date.setHours(0, 0, 0, 0);
  return date;
};

/**
 * Formats a date to US standard format mm/dd/yyyy.
 *
 * @param {Date} date Date to be formated.
 * @return {string} Data formatted.
 * @private
 */
google.ads.adwords.objstatsext.UIManager.prototype.formatDate_ =
    function(date) {
  return $.datepicker.formatDate('mm/dd/yy', date);
};

/**
 * Parses a date as feeded by the date selector in US standard mm/dd/yyyy
 * format.
 *
 * @param {string} dateStr Date in format mm/dd/yyyy.
 * @return {Date} Parsed date, null if it can't be parsed.
 * @private
 */
google.ads.adwords.objstatsext.UIManager.prototype.parseDate_ =
    function(dateStr) {
  return $.datepicker.parseDate('mm/dd/yy', dateStr);
};

