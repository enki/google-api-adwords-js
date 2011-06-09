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
 * @fileoverview Defines AwApiLoader, a class in charge of loading data from the
 * AdWords API. Defines AwApiCache, a class used to cache results coming from
 * the API to avoid excessive API requests.
 */

goog.provide('google.ads.adwords.objstatsext.AwApiLoader');

goog.require('google.ads.adwords.User');
goog.require('google.ads.adwords.v201008.CampaignSelector');
goog.require('google.ads.adwords.v201008.CampaignService');
goog.require('google.system.net.HttpWebTransportForExtensions');

/**
 * Data loader in charge of communicating with the AdWords API using the
 * AdWords API Javascript Client Library.
 *
 * @param {object<string, string>} config Account settings.
 * @param {date} statsStartDate Statistics start date.
 * @param {date} statsEndDate Statistics end date.
 * @constructor
 */
google.ads.adwords.objstatsext.AwApiLoader =
    function(config, statsStartDate, statsEndDate) {
  this.CAMPAIGNS_CACHE_KEY = 'cm';
  this.AD_GROUPS_CACHE_KEY = 'ag';
  this.ADS_CACHE_KEY = 'ad';
  this.CRITERIA_CACHE_KEY = 'cr';

  if (config) {
    this.setConfig(config);
  }
  this.statsStartDate = statsStartDate;
  this.statsEndDate = statsEndDate;

  this.cache_ = new google.ads.adwords.objstatsext.AwApiCache();
};

/**
 * Sets the config of the data loader, the config is a map containing: email,
 * password, client id (either email or client customer id) and developer token.
 *
 * @param {object<string, string>} config Configuration settings.
 */
google.ads.adwords.objstatsext.AwApiLoader.prototype.setConfig =
    function(config) {
  this.awapiConfig = new google.ads.adwords.AppConfig();
  var settings = {
      Email: config.email,
      Password: config.password,
      DeveloperToken: config.developerToken,
      HttpWebTransport: 'google.system.net.HttpWebTransportForExtensions'
  };
  if (config.clientId.indexOf('@') >= 0) {
    settings.ClientEmail = config.clientId;
  } else {
    settings.ClientCustomerId = config.clientId;
  }
  this.awapiConfig.readSettings(settings);
  this.user = new google.ads.adwords.User(this.awapiConfig);
};

/**
 * Formats a data object in a string as expected by the API.
 *
 * @param {date} date Date to format.
 * @return {string} Date in format yyyyMMdd.
 * @private
 */
google.ads.adwords.objstatsext.AwApiLoader.prototype.formatAPIDate_ =
    function(date) {
  return $.datepicker.formatDate('yymmdd', date);
};

/**
 * Constructs a date range object used to define to constraint the statistics to
 * pull from the API.
 *
 * @return {google.ads.adwords.v201008.DateRange} A date range to include in the
 * statistics request.
 * @private
 */
google.ads.adwords.objstatsext.AwApiLoader.prototype.constructDateRange_ =
    function() {
  var dateRange = new google.ads.adwords.v201008.DateRange();
  dateRange.min = this.formatAPIDate_(this.statsStartDate);
  dateRange.max = this.formatAPIDate_(this.statsEndDate);
  return dateRange;
};

/**
 * Constructs a paging object based on the given offset and number of results
 * parameters to paginate between results.
 *
 * @param {number} offset The start index of the page.
 * @param {number} numberResults of results to pull.
 * @return {google.ads.adwords.v201008.Paging} A paging object.
 * @private
 */
google.ads.adwords.objstatsext.AwApiLoader.prototype.constructPaging_ =
    function(offset, numberResults) {
  var paging = new google.ads.adwords.v201008.Paging();
  paging.startIndex = offset;
  paging.numberResults = numberResults;

  return paging;
};

/**
 * Formats money in microunits as returned by the API to a human readable
 * format.
 *
 * @param {number} money Money in micrunits.
 * @return {number} Money in a two decimals format.
 * @private
 */
google.ads.adwords.objstatsext.AwApiLoader.prototype.formatMoney_ =
    function(money) {
  return Math.round(money.microAmount / 10000) / 100;
};

/**
 * Formats a number with two decimal values only.
 *
 * @param {number} value A value with N number of decimals.
 * @return {number} A number with 2 decimal values.
 * @private
 */
google.ads.adwords.objstatsext.AwApiLoader.prototype.formatDecimal_ =
    function(value) {
  return Math.round(value * 100) / 100;
};

/**
 * Retrieves a campaign object giving its id. Pre-fetches a full page of results
 * using the latest recorded page range, it does so it can take advantage of
 * the caching mechanisms and ensure less API calls.
 *
 * @param {number} campaignId Campaign id to retrieve.
 * @param {function(google.ads.adwords.v201008.Campaign)} callback Callback
 * function to be called.
 * @param {function(exception)} errorCallback Error callback to be called in
 * case a communication problem has occurred.
 */
google.ads.adwords.objstatsext.AwApiLoader.prototype.getCampaign =
    function(campaignId, callback, errorCallback) {
  this.getCampaigns(this.campaignsLastRequestParameters_.offset,
      this.campaignsLastRequestParameters_.numberResults,
      goog.bind(function(page) {
        if (page && page.entries) {
          for (var i = 0, len = page.entries.length; i < len; i++) {
            if (page.entries[i].id == campaignId) {
              return callback(page.entries[i]);
            }
          }
        }
        callback(null);
      }, this), errorCallback);
};

/**
 * Retrieves a page (based on given offset and number results) of campaigns.
 * It uses a cache to avoid unnecessary API requests.
 *
 * @param {number} offset Starting index of results.
 * @param {number} numberResults Total entries to retrieve.
 * @param {function(google.ads.adwords.v201008.CampaignPage)} callback Function
 * to receive the page of results.
 * @param {function(exception)} errorCallback Function to be called in case of
 * a communication problem.
 */
google.ads.adwords.objstatsext.AwApiLoader.prototype.getCampaigns =
    function(offset, numberResults, callback, errorCallback) {
  var cacheKey = this.CAMPAIGNS_CACHE_KEY + '-' +
      this.statsStartDate.getTime() + '-' + this.statsEndDate.getTime() + '-' +
      offset + '-' + numberResults;

  var cachedResults = this.cache_.getObject(cacheKey);
  if (cachedResults) {
    callback(cachedResults);
    return;
  }

  this.campaignsLastRequestParameters_ = {
      offset: offset,
      numberResults: numberResults
  };

  var campaignService = this.user.getService(
      google.ads.adwords.AdWordsService.v201008.CampaignService);

  var selector = new google.ads.adwords.v201008.CampaignSelector();
  selector.campaignStatuses =
      [google.ads.adwords.v201008.CampaignStatus.ACTIVE,
       google.ads.adwords.v201008.CampaignStatus.PAUSED];
  selector.statsSelector = new google.ads.adwords.v201008.StatsSelector();
  selector.statsSelector.dateRange = this.constructDateRange_();
  selector.paging = this.constructPaging_(offset, numberResults);

  campaignService.get(selector, goog.bind(function(results) {
    if (results.entries) {
      results.entries.forEach(goog.bind(function(campaign) {
        campaign.budget.amount.value =
            this.formatMoney_(campaign.budget.amount);
        campaign.campaignStats.cost.value =
            this.formatMoney_(campaign.campaignStats.cost);
      }, this));
    } else {
      results.entries = [];
    }
    this.cache_.setObject(cacheKey, results);
    callback(results);
  }, this), goog.bind(function(exception) {
    errorCallback(exception);
  }, this));
};

/**
 * Retrieves and ad group given its id. Pre-fetches a full page of results
 * using the latest recorded page range, it does so it can take advantage of
 * the caching mechanisms and ensure less API calls.
 *
 * @param {number} adGroupId Id of the ad group to retrieve.
 * @param {function(google.ads.adwords.v201008.AdGroup)} callback Function to
 * be called with the ad group.
 * @param {function(exception)} errorCallback Function to be called in case a
 * communication error has occurred.
 */
google.ads.adwords.objstatsext.AwApiLoader.prototype.getAdGroup =
    function(adGroupId, callback, errorCallback) {
  this.getAdGroups(this.adGroupsLastRequestParameters_.campaignId,
      this.adGroupsLastRequestParameters_.offset,
      this.adGroupsLastRequestParameters_.numberResults,
      goog.bind(function(page) {
        if (page && page.entries) {
          for (var i = 0, len = page.entries.length; i < len; i++) {
            if (page.entries[i].id == adGroupId) {
              return callback(page.entries[i]);
            }
          }
        }
        callback(null);
      }, this), errorCallback);
};

/**
 * Retrieves a page (based on given offset and number results) of ad groups.
 * It uses a cache to avoid unnecessary API requests.
 *
 * @param {number} campaignId Campaign id containing the requested ad groups.
 * @param {number} offset Starting index of results.
 * @param {number} numberResults Total entries to retrieve.
 * @param {function(google.ads.adwords.v201008.AdGroupPage)} callback Function
 * to receive the page of results.
 * @param {function(exception)} errorCallback Function to be called in case of
 * a communication problem.
 */
google.ads.adwords.objstatsext.AwApiLoader.prototype.getAdGroups =
    function(campaignId, offset, numberResults, callback, errorCallback) {
  var cacheKey = this.AD_GROUPS_CACHE_KEY + '-' +
    this.statsStartDate.getTime() + '-' + this.statsEndDate.getTime() + '-' +
    campaignId + '-' + offset + '-' + numberResults;

  var cachedResults = this.cache_.getObject(cacheKey);
  if (cachedResults) {
    callback(cachedResults);
    return;
  }

  this.adGroupsLastRequestParameters_ = {
    offset: offset,
    numberResults: numberResults,
    campaignId: campaignId
  };

  var adGroupService = this.user.getService(
      google.ads.adwords.AdWordsService.v201008.AdGroupService);

  var selector = new google.ads.adwords.v201008.AdGroupSelector();
  selector.adGroupStatuses =
      [google.ads.adwords.v201008.AdGroupStatus.ENABLED,
       google.ads.adwords.v201008.AdGroupStatus.PAUSED];
  selector.campaignIds = [campaignId];
  selector.statsSelector = new google.ads.adwords.v201008.StatsSelector();
  selector.statsSelector.dateRange = this.constructDateRange_();
  selector.paging = this.constructPaging_(offset, numberResults);

  adGroupService.get(selector, goog.bind(function(results) {
    if (results.entries) {
      results.entries.forEach(goog.bind(function(adGroup) {
        switch (adGroup.bids.adGroupBidsType) {
        case 'ManualCPMAdGroupBids':
          adGroup.bid = this.formatMoney_(adGroup.bids.maxCpm.amount);
          break;
        case 'ManualCPCAdGroupBids':
          adGroup.bid = this.formatMoney_(adGroup.bids.keywordMaxCpc.amount);
          break;
        default:
          adGroup.bid = 'NA';
        }
        adGroup.stats.cost.value =
            this.formatMoney_(adGroup.stats.cost);
        adGroup.stats.averagePosition =
            this.formatDecimal_(adGroup.stats.averagePosition);
      }, this));
      this.cache_.setObject(cacheKey, results);
    } else {
      results.entries = [];
    }
    callback(results);
  }, this), goog.bind(function(exception) {
    errorCallback(exception);
  }, this));
};

/**
 * Retrieves a page (based on given offset and number results) of ads.
 * It uses a cache to avoid unnecessary API requests.
 *
 * @param {number} adGroupId Ad group id containing the requested ads.
 * @param {number} offset Starting index of results.
 * @param {number} numberResults Total entries to retrieve.
 * @param {function(google.ads.adwords.v201008.AdPage)} callback Function
 * to receive the page of results.
 * @param {function(exception)} errorCallback Function to be called in case of
 * a communication problem.
 */
google.ads.adwords.objstatsext.AwApiLoader.prototype.getAds =
    function(adGroupId, offset, numberResults, callback, errorCallback) {
  var cacheKey = this.ADS_CACHE_KEY + '-' +
    this.statsStartDate.getTime() + '-' + this.statsEndDate.getTime() + '-' +
    adGroupId + '-' + offset + '-' + numberResults;

  var cachedResults = this.cache_.getObject(cacheKey);
  if (cachedResults) {
    callback(cachedResults);
    return;
  }

  this.adsLastRequestParameters_ = {
    offset: offset,
    numberResults: numberResults,
    adGroupId: adGroupId
  };

  var adGroupAdService = this.user.getService(
      google.ads.adwords.AdWordsService.v201008.AdGroupAdService);

  var selector = new google.ads.adwords.v201008.AdGroupAdSelector();
  selector.adGroupStatuses =
      [google.ads.adwords.v201008.AdGroupAdStatus.ENABLED,
       google.ads.adwords.v201008.AdGroupAdStatus.PAUSED];
  selector.adGroupIds = [adGroupId];
  selector.statsSelector = new google.ads.adwords.v201008.StatsSelector();
  selector.statsSelector.dateRange = this.constructDateRange_();
  selector.paging = this.constructPaging_(offset, numberResults);

  adGroupAdService.get(selector, goog.bind(function(results) {
    if (results.entries) {
      results.entries.forEach(goog.bind(function(adGroupAd) {
        adGroupAd.typeTitle = adGroupAd.ad.adType;
        // It is also possible to check for ad type by using instanceof as
        // for example:
        // adGroupAd.ad instanceof google.ads.adwords.v201008.TextAd
        switch (adGroupAd.ad.adType) {
        case 'TextAd':
          adGroupAd.typeTitle += ' / ' + adGroupAd.ad.headline;
          break;
        case 'ProductAd':
          adGroupAd.typeTitle += ' / ' + adGroupAd.ad.promotionLine;
          break;
        case 'MobileAd':
          adGroupAd.typeTitle += ' / ' + adGroupAd.ad.headline;
          break;
        case 'RichMediaAd':
          adGroupAd.typeTitle += ' / ' + adGroupAd.ad.name;
          break;
        case 'ImageAd':
          adGroupAd.typeTitle += ' / ' + adGroupAd.ad.name;
          break;
        case 'LocalBusinessAd':
          adGroupAd.typeTitle += ' / ' + adGroupAd.ad.fullBusinessName;
          break;
        case 'TemplateAd':
          adGroupAd.typeTitle += ' / ' + adGroupAd.ad.name;
          break;
        }
        adGroupAd.stats.cost.value =
            this.formatMoney_(adGroupAd.stats.cost);
        adGroupAd.stats.averagePosition =
            this.formatDecimal_(adGroupAd.stats.averagePosition);
      }, this));
      this.cache_.setObject(cacheKey, results);
    } else {
      results.entries = [];
    }
    callback(results);
  }, this), goog.bind(function(exception) {
    errorCallback(exception);
  }, this));
};

/**
 * Retrieves a page (based on given offset and number results) of biddable
 * criteria. It uses a cache to avoid unnecessary API requests.
 *
 * @param {number} adGroupId Ad group id containing the requested criteria.
 * @param {number} offset Starting index of results.
 * @param {number} numberResults Total entries to retrieve.
 * @param {function(google.ads.adwords.v201008.CriterionPage)} callback Function
 * to receive the page of results.
 * @param {function(exception)} errorCallback Function to be called in case of
 * a communication problem.
 */
google.ads.adwords.objstatsext.AwApiLoader.prototype.getCriteria =
    function(adGroupId, offset, numberResults, callback, errorCallback) {
  var cacheKey = this.CRITERIA_CACHE_KEY + '-' +
    this.statsStartDate.getTime() + '-' + this.statsEndDate.getTime() + '-' +
    adGroupId + '-' + offset + '-' + numberResults;

  var cachedResults = this.cache_.getObject(cacheKey);
  if (cachedResults) {
    callback(cachedResults);
    return;
  }

  this.criteriaLastRequestParameters_ = {
    offset: offset,
    numberResults: numberResults,
    adGroupId: adGroupId
  };

  var criteriaService = this.user.getService(
      google.ads.adwords.AdWordsService.v201008.AdGroupCriterionService);

  var selector = new google.ads.adwords.v201008.AdGroupCriterionSelector();
  selector.adGroupStatuses =
      [google.ads.adwords.v201008.AdGroupStatus.ENABLED,
       google.ads.adwords.v201008.AdGroupStatus.PAUSED];
  selector.idFilters =
      [new google.ads.adwords.v201008.AdGroupCriterionIdFilter()];
  selector.criterionUse = google.ads.adwords.v201008.CriterionUse.BIDDABLE;
  selector.idFilters[0].adGroupId = adGroupId;
  selector.statsSelector = new google.ads.adwords.v201008.StatsSelector();
  selector.statsSelector.dateRange = this.constructDateRange_();
  selector.paging = this.constructPaging_(offset, numberResults);

  criteriaService.get(selector, goog.bind(function(results) {
    if (results.entries) {
      results.entries.forEach(goog.bind(function(adGroupCriterion) {
        adGroupCriterion.typeTitle = adGroupCriterion.criterion.criterionType;
        switch (adGroupCriterion.criterion.criterionType) {
        case 'CriterionUserInterest':
          adGroupCriterion.typeTitle += ' / ' +
              adGroupCriterion.criterion.userInterestName;
          break;
        case 'CriterionUserList':
          adGroupCriterion.typeTitle += ' / ' +
              adGroupCriterion.criterion.userListName;
          break;
        case 'Keyword':
          adGroupCriterion.typeTitle += ' / ' + adGroupCriterion.criterion.text;
          break;
        case 'Placement':
          adGroupCriterion.typeTitle += ' / ' + adGroupCriterion.criterion.url;
          break;
        case 'Product':
          adGroupCriterion.typeTitle += ' / ' + adGroupCriterion.criterion.text;
          break;
        }
        switch (adGroupCriterion.bids.adGroupCriterionBidsType) {
        case 'BudgetOptimizerAdGroupCriterionBids':
          adGroupCriterion.bid =
              this.formatMoney_(adGroupCriterion.bids.proxyBid.amount);
          break;
        case 'ManualCPMAdGroupCriterionBids':
          adGroupCriterion.bid =
              this.formatMoney_(adGroupCriterion.bids.maxCpm.amount);
          break;
        case 'ManualCPCAdGroupCriterionBids':
          adGroupCriterion.bid =
              this.formatMoney_(adGroupCriterion.bids.maxCpc.amount);
          break;
        default:
          adGroupCriterion.bid = 'NA';
        }
        adGroupCriterion.stats.cost.value =
            this.formatMoney_(adGroupCriterion.stats.cost);
        adGroupCriterion.stats.averagePosition =
            this.formatDecimal_(adGroupCriterion.stats.averagePosition);
      }, this));
      this.cache_.setObject(cacheKey, results);
    } else {
      results.entries = [];
    }
    callback(results);
  }, this), goog.bind(function(exception) {
    errorCallback(exception);
  }, this));
};

goog.provide('google.ads.adwords.objstatsext.AwApiCache');

/**
 * Class that implements a simple cache based on the age of the entries and
 * a max defined cache size. The cache reduces it size by 10% when reaches
 * it maximum size, using an LRU algorithm.
 *
 * @param {number?} cacheSize Max cache size.
 * @param {number?} entryLifeSpan Entries lifespan in seconds.
 * @constructor
 */
google.ads.adwords.objstatsext.AwApiCache =
    function(cacheSize, entryLifeSpan) {
  this.INVALIDATION_LIFESPAN = cacheSize ? cacheSize : 300;
  this.MAX_CACHE_SIZE = entryLifeSpan ? entryLifeSpan : 50;

  this.cacheByTime_ = [];
  this.cacheByKey_ = [];
  this.cacheSize_ = 0;
};

/**
 * Sets an object into the cache. Triggers an asynchronous cache cleanup if
 * notices the cache have reached its max size.
 *
 * @param {string} key Key of the entry.
 * @param {Object} object Entry to put in cache.
 */
google.ads.adwords.objstatsext.AwApiCache.prototype.setObject =
    function(key, object) {
  var cacheEntry = {
    object: object,
    timestamp: (new Date().getTime()),
    key: key
  };
  this.cacheByTime_.push(cacheEntry);
  this.cacheByKey_[key] = cacheEntry;
  this.cacheSize_++;
  if (this.cacheSize_ > this.MAX_CACHE_SIZE) {
    setTimeout(goog.bind(this.cleanCache_(), this), 10);
  }
};

/**
 * Implements the cache cleaning logic, reduces the size of the cache by 10%
 * by leaving the most recent entries.
 * @private
 */
google.ads.adwords.objstatsext.AwApiCache.prototype.cleanCache_ = function() {
  var toDelete = this.cacheSize_ - Math.round(this.MAX_CACHE_SIZE * .1);
  for (var i = 0; i < toDelete; i++) {
    var cacheEntry = this.cacheByTime_[i];
    if (cacheEntry) {
      this.cacheByTime_.splice(i, 1);
      var idx = this.cacheByKey_[cacheEntry.key];
      if (idx >= 0) {
        delete this.cacheByKey_[cacheEntry.key];
      }
      this.cacheSize--;
    } else {
      return;
    }
  }
};

/**
 * Retrieves an object from cache given its key.
 *
 * @param {string} key Cache key.
 * @return {object} The object in cache, null if not found.
 */
google.ads.adwords.objstatsext.AwApiCache.prototype.getObject = function(key) {
  var cacheEntry = this.cacheByKey_[key];
  if (cacheEntry && (new Date()).getTime() - cacheEntry.timestamp <
      this.INVALIDATION_LIFESPAN * 1000) {
    return cacheEntry.object;
  } else {
    var idx = this.cacheByTime_.indexOf(cacheEntry);
    if (idx >= 0) {
      this.cacheByTime_.splice(idx, 1);
      delete this.cacheByKey_[key];
      this.cacheSize_--;
    }
    return null;
  }
};
