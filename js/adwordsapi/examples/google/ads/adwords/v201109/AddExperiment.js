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
 * @fileoverview Defines AddExperiment, a code example that creates an
 *     experiment.
 */

goog.provide('google.ads.adwords.examples.v201109.AddExperiment');

goog.require('google.ads.adwords.AdWordsService.v201109');
goog.require('google.ads.adwords.examples.ExampleBase');
goog.require('google.ads.adwords.v201109.AdGroup');
goog.require('google.ads.adwords.v201109.AdGroupCriterionOperation');
goog.require('google.ads.adwords.v201109.AdGroupCriterionService');
goog.require('google.ads.adwords.v201109.AdGroupExperimentData');
goog.require('google.ads.adwords.v201109.AdGroupOperation');
goog.require('google.ads.adwords.v201109.AdGroupService');
goog.require('google.ads.adwords.v201109.BidMultiplier');
goog.require('google.ads.adwords.v201109.BiddableAdGroupCriterion');
goog.require('google.ads.adwords.v201109.BiddableAdGroupCriterionExperimentData');
goog.require('google.ads.adwords.v201109.Criterion');
goog.require('google.ads.adwords.v201109.Experiment');
goog.require('google.ads.adwords.v201109.ExperimentDeltaStatus');
goog.require('google.ads.adwords.v201109.ExperimentOperation');
goog.require('google.ads.adwords.v201109.ExperimentService');
goog.require('google.ads.adwords.v201109.ManualCPCAdGroupCriterionExperimentBidMultiplier');
goog.require('google.ads.adwords.v201109.ManualCPCAdGroupExperimentBidMultipliers');
goog.require('google.ads.adwords.v201109.Operator');

/**
 * This code example creates an experiment using a query percentage of 10,
 * which defines what fraction of auctions should go to the control split
 * (90%) vs. the experiment split (10%), then adds experimental bid changes
 * for criteria and ad groups. To get campaigns, run GetAllCampaigns.js.
 * To get ad groups, run GetAllAdGroups.js. To get criteria, run
 * GetAllAdGroupCriteria.js.
 *
 * Tags: ExperimentService.mutate
 *
 * @extends google.ads.adwords.examples.ExampleBase
 * @constructor
 */
google.ads.adwords.examples.v201109.AddExperiment = function() {
  google.ads.adwords.examples.ExampleBase.call(this);
  this.description = 'This code example creates an experiment using a query ' +
      'percentage of 10, which defines what fraction of auctions should go ' +
      'to the control split (90%) vs. the experiment split (10%), then adds ' +
      'experimental bid changes for criteria and ad groups. To get ' +
      'campaigns, run GetAllCampaigns.js. To get ad groups, run ' +
      'GetAllAdGroups.cs. To get criteria, run GetAllAdGroupCriteria.js.';
};
goog.inherits(google.ads.adwords.examples.v201109.AddExperiment,
    google.ads.adwords.examples.ExampleBase);

/**
 * Runs the code example.
 *
 * @param {google.ads.adwords.AdWordsUser} user AdWords user running the code
 *     example.
 * @param {function} callback the callback method to be called once this example
 *     is complete.
 */
google.ads.adwords.examples.v201109.AddExperiment.prototype.run =
    function(user, callback) {
  // Get the ExperimentService.
  var experimentService = user.getService(
      google.ads.adwords.AdWordsService.v201109.ExperimentService);

  // Get the AdGroupService.
  var adGroupService = user.getService(
      google.ads.adwords.AdWordsService.v201109.AdGroupService);

  // Get the AdGroupCriterionService.
  var adGroupCriterionService = user.getService(
      google.ads.adwords.AdWordsService.v201109.AdGroupCriterionService);

  var campaignId = this._T('INSERT_CAMPAIGN_ID_HERE');
  var adGroupId = this._T('INSERT_AD_GROUP_ID_HERE');
  var criterionId = this._T('INSERT_CRITERION_ID_HERE');

  // Create experiment.
  var experiment = new google.ads.adwords.v201109.Experiment();
  experiment.campaignId = campaignId;
  experiment.name = 'Interplanetary Cruise #' + this.getTimeStamp();
  experiment.queryPercentage = 10;
  experiment.startDateTime = this.getToday();

  // Create operation.
  var experimentOperation =
      new google.ads.adwords.v201109.ExperimentOperation();
  experimentOperation.operator = google.ads.adwords.v201109.Operator.ADD;
  experimentOperation.operand = experiment;

  try {
    // Add experiment.
    experimentService.mutate([experimentOperation],
      goog.bind(function(experimentRetVal) {
        if (experimentRetVal && experimentRetVal.value &&
            experimentRetVal.value.length > 0) {
          var tempExperiment = experimentRetVal.value[0];
          this.writeOutput('Experiment with name = "%s" and id = "%d" was ' +
              'added.', tempExperiment.name, tempExperiment.id);
          var experimentId = tempExperiment.id;

          // Set ad group for the experiment.
          var adGroup = new google.ads.adwords.v201109.AdGroup();
          adGroup.id = adGroupId;

          // Create experiment bid multiplier rule that will modify ad group bid
          // for the experiment.
          var adGroupBidMultiplier = new google.ads.adwords.v201109.
              ManualCPCAdGroupExperimentBidMultipliers();
          adGroupBidMultiplier.maxCpcMultiplier =
              new google.ads.adwords.v201109.BidMultiplier();
          adGroupBidMultiplier.maxCpcMultiplier.multiplier = 1.5;

          // Set experiment data to the ad group.
          var adGroupExperimentData =
              new google.ads.adwords.v201109.AdGroupExperimentData();
          adGroupExperimentData.experimentId = experimentId;
          adGroupExperimentData.experimentDeltaStatus =
              google.ads.adwords.v201109.ExperimentDeltaStatus.MODIFIED;
          adGroupExperimentData.experimentBidMultipliers = adGroupBidMultiplier;

          adGroup.experimentData = adGroupExperimentData;

          // Create operation.
          var adGroupOperation =
              new google.ads.adwords.v201109.AdGroupOperation();
          adGroupOperation.operand = adGroup;
          adGroupOperation.operator = google.ads.adwords.v201109.Operator.SET;

          // Update ad group.
          adGroupService.mutate([adGroupOperation],
            goog.bind(function(retval) {
              // Display results.
              if (retval && retval.value) {
                for (var i = 0, len = retval.value.length; i < len; i++) {
                  var tempAdGroup = retval.value[i];
                  this.writeOutput('Ad group with name = "%s", id = "%d" ' +
                      'and status = "%s" was updated for the experiment.',
                      tempAdGroup.name, tempAdGroup.id, tempAdGroup.status);
                }
              } else {
                this.writeOutput('No ad groups were updated.');
              }

              // Set ad group criteria for the experiment.
              var criterion = new google.ads.adwords.v201109.Criterion();
              criterion.id = criterionId;

              var adGroupCriterion =
                  new google.ads.adwords.v201109.BiddableAdGroupCriterion();
              adGroupCriterion.adGroupId = adGroupId;
              adGroupCriterion.criterion = criterion;

              // Create experiment bid multiplier rule that will modify
              // criterion bid for the experiment.
              var bidMultiplier = new google.ads.adwords.v201109.
                  ManualCPCAdGroupCriterionExperimentBidMultiplier();
              bidMultiplier.maxCpcMultiplier =
                  new google.ads.adwords.v201109.BidMultiplier();
              bidMultiplier.maxCpcMultiplier.multiplier = 1.5;

              // Set experiment data to the criterion.
              var adGroupCriterionExperimentData = new google.ads.adwords.
                  v201109.BiddableAdGroupCriterionExperimentData();
              adGroupCriterionExperimentData.experimentId = experimentId;
              adGroupCriterionExperimentData.experimentDeltaStatus =
                  google.ads.adwords.v201109.ExperimentDeltaStatus.MODIFIED;
              adGroupCriterionExperimentData.experimentBidMultiplier =
                  bidMultiplier;

              adGroupCriterion.experimentData = adGroupCriterionExperimentData;

              // Create operation.
              var adGroupCriterionOperation =
                  new google.ads.adwords.v201109.AdGroupCriterionOperation();
              adGroupCriterionOperation.operand = adGroupCriterion;
              adGroupCriterionOperation.operator =
                  google.ads.adwords.v201109.Operator.SET;

              // Update ad group criteria.
              adGroupCriterionService.mutate([adGroupCriterionOperation],
                goog.bind(function(adGroupCriterionRetVal) {
                  // Display results.
                  if (adGroupCriterionRetVal && adGroupCriterionRetVal.value) {
                    for (var i = 0, len = adGroupCriterionRetVal.value.length;
                        i < len; i++) {
                      var tempAgc = adGroupCriterionRetVal.value[i];
                      this.writeOutput('Ad group criterion with ad group id =' +
                          ' "%d", criterion id = "%d" and type = "%s" was ' +
                          'updated for the experiment.',
                          tempAgc.adGroupId, tempAgc.criterion.id,
                          tempAgc.criterion.criterionType);
                    }
                  } else {
                    this.writeOutput('No ad group criteria were updated.');
                  }
                  callback();
                }, this),
                goog.bind(function(soapException) {
                  this.writeOutput('Failed to update ad group criterion. ' +
                      'Soap Fault says "%s"',
                      soapException.getInnerException().getFaultString());
                  callback();
                }, this)
              );
              callback();
            }, this),
            goog.bind(function(soapException) {
              this.writeOutput('Failed to update ad group.Soap Fault says "%s"',
                  soapException.getInnerException().getFaultString());
              callback();
            }, this)
          );
        } else {
          this.writeOutput('No experiments were added.');
        }
        callback();
      }, this),
      goog.bind(function(soapException) {
        this.writeOutput('Failed to add experiment. Soap Fault says "%s"',
            soapException.getInnerException().getFaultString());
        callback();
      }, this)
    );
  } catch (ex) {
    this.writeOutput('An exception occurred while running the code example.');
    callback();
  }
};

/**
 * Gets today's date as a string of the format yyyymmdd hhmmss.
 *
 * @return {string} today's date as a string of the format yyyymmdd hhmmss.
 */
google.ads.adwords.examples.v201109.AddExperiment.prototype.getToday =
    function() {
  var currentTime = new Date();
  var month = currentTime.getMonth() + 1;
  var day = currentTime.getDate();
  var year = currentTime.getFullYear();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();

  return goog.string.format('%d%02d%02d %02d%02d%02d', year, month, day,
      hours, minutes, seconds);
};
