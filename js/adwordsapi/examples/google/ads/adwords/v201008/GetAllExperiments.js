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
 * @author api.anash@gmail.com (Anash P. Oommen)
 */

/**
 * @fileoverview Defines GetAllExperiments, a code example that gets all
 * experiments in a campaign.
 */

goog.provide('google.ads.adwords.examples.v201008.GetAllExperiments');

goog.require('google.ads.adwords.AdWordsService.v201008');
goog.require('google.ads.adwords.examples.ExampleBase');
goog.require('google.ads.adwords.v201008.ExperimentSelector');
goog.require('google.ads.adwords.v201008.ExperimentService');

/**
 * This code example gets all experiments in a campaign. To add an experiment,
 * run AddExperiment.js. To get campaigns, run GetAllCampaigns.js.
 *
 * Tags: ExperimentService.get
 *
 * @extends google.ads.adwords.examples.ExampleBase
 * @constructor
 */
google.ads.adwords.examples.v201008.GetAllExperiments = function() {
  google.ads.adwords.examples.ExampleBase.call(this);
  this.description = 'This code example gets all experiments in a campaign. ' +
      'To add an experiment, run AddExperiment.js. To get campaigns, run ' +
      'GetAllCampaigns.js.';
};
goog.inherits(google.ads.adwords.examples.v201008.GetAllExperiments,
    google.ads.adwords.examples.ExampleBase);

/**
 * Runs the code example.
 *
 * @param {google.ads.adwords.AdWordsUser} user AdWords user running the code
 * example.
 * @param {function} callback the callback method to be called once this example
 * is complete.
 */
google.ads.adwords.examples.v201008.GetAllExperiments.prototype.run =
    function(user, callback) {
  // Get the ExperimentService.
  var experimentService = user.getService(
      google.ads.adwords.AdWordsService.v201008.ExperimentService);

  var campaignId = this._T('INSERT_CAMPAIGN_ID_HERE');

  // Create selector.
  var selector = new google.ads.adwords.v201008.ExperimentSelector();
  selector.campaignIds = [campaignId];
  selector.includeStats = true;

  try {
    // Get all experiments.
    experimentService.get(selector,
      goog.bind(function(page) {
        // Display results.
        if (page && page.entries) {
          for (var i = 0, len = page.entries.length; i < len; i++) {
            var experiment = page.entries[i];
            var stats = experiment.experimentSummaryStats;
            this.writeOutput('Experiment with name = "%s", id = "%d" and ' +
                'control id = "%d" was found and it includes %d ad group(s) ' +
                'and %d criteria.', experiment.name, experiment.id,
                experiment.controlId, stats.adGroupsCount,
                stats.adGroupCriteriaCount);
          }
        } else {
          this.writeOutput('No experiments were found.');
        }
        callback();
      }, this),
      goog.bind(function(soapException) {
        this.writeOutput('Failed to get add user list. Soap Fault ' +
            'says "%s"', soapException.getInnerException().getFaultString());
        callback();
      }, this)
    );
  } catch (ex) {
    this.writeOutput('An exception occurred while running the code example.');
    callback();
  }
};
