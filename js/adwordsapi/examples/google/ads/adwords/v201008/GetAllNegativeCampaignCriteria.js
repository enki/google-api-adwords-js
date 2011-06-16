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
 * @fileoverview Defines GetAllNegativeCampaignCriteria, a code example that
 *     gets all negative campaign criteria in an account.
 */

goog.provide('google.ads.adwords.examples.v201008.GetAllNegativeCampaignCriteria');

goog.require('google.ads.adwords.AdWordsService.v201008');
goog.require('google.ads.adwords.examples.ExampleBase');
goog.require('google.ads.adwords.v201008.CampaignCriterionSelector');
goog.require('google.ads.adwords.v201008.CampaignCriterionService');
goog.require('google.ads.adwords.v201008.Keyword');
goog.require('google.ads.adwords.v201008.Placement');

/**
 * This code example retrieves all negative campaign criteria in an account.
 * To add a negative campaign criterion, run AddNegativeCampaignCriterion.js.
 *
 * Tags: CampaignCriterionService.get
 *
 * @extends google.ads.adwords.examples.ExampleBase
 * @constructor
 */
google.ads.adwords.examples.v201008.GetAllNegativeCampaignCriteria =
    function() {
  google.ads.adwords.examples.ExampleBase.call(this);
  /**
  * Example description.
  * @type {string}
  */
  this.description = 'This code example retrieves all negative campaign ' +
      'criteria in an account. To add a negative campaign criterion, run ' +
      'AddNegativeCampaignCriterion.js.';
};
goog.inherits(
    google.ads.adwords.examples.v201008.GetAllNegativeCampaignCriteria,
    google.ads.adwords.examples.ExampleBase);

/**
 * Runs the code example.
 *
 * @param {google.ads.adwords.AdWordsUser} user AdWords user running the code
 *     example.
 * @param {function} callback the callback method to be called once this example
 *     is complete.
 */
google.ads.adwords.examples.v201008.GetAllNegativeCampaignCriteria.prototype.
    run = function(user, callback) {
  // Get the CampaignCriterionService.
  var campaignCriterionService = user.getService(
      google.ads.adwords.AdWordsService.v201008.CampaignCriterionService);

  var selector = new google.ads.adwords.v201008.CampaignCriterionSelector();

  try {
    campaignCriterionService.get(selector,
      goog.bind(function(page) {
        if (page && page.entries && page.entries.length > 0) {
          for (var i = 0, len = page.entries.length; i < len; i++) {
            var campaignCriterion = page.entries[i];
            var criterion = campaignCriterion.criterion;
            if (criterion instanceof google.ads.adwords.v201008.Keyword) {
              this.writeOutput('Negative keyword campaign criterion with ' +
                  'campaign ID = "%d", criterion ID = "%d", and text = "%s" ' +
                  'was found.', campaignCriterion.campaignId, criterion.id,
                  criterion.text);
            } else if (criterion instanceof
                google.ads.adwords.v201008.Placement) {
              this.writeOutput('Negative placement campaign criterion with ' +
                  'campaign ID = "%d", criterion ID = "%d" and url = "%s" ' +
                  'was found.', campaignCriterion.campaignId, criterion.id,
                  criterion.url);
            } else {
              this.writeOutput('Negative campaign criterion with campaign ' +
                  'ID = "%d", criterion ID = "%d" and type = "%s" was found.',
                  campaignCriterion.campaignId, criterion.id,
                  criterion.criterionType);
            }
          }
        } else {
          this.writeOutput('No negative campaign criteria were found.');
        }
        callback();
      }, this),
      goog.bind(function(soapException) {
        this.writeOutput('Failed to retrieve all negative campaign criteria. ' +
            'Soap Fault says "%s"',
            soapException.getInnerException().getFaultString());
        callback();
      }, this)
    );
  } catch (ex) {
    this.writeOutput('An exception occurred while running the code example.');
    callback();
  }
};
