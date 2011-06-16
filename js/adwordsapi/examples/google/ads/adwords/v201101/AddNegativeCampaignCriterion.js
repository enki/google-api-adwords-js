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
 * @fileoverview Defines AddNegativeCampaignCriterion, a code example that
 *     creates a new negative campaign criterion.
 */

goog.provide('google.ads.adwords.examples.v201101.AddNegativeCampaignCriterion');

goog.require('google.ads.adwords.AdWordsService.v201101');
goog.require('google.ads.adwords.examples.ExampleBase');
goog.require('google.ads.adwords.v201101.CampaignCriterionOperation');
goog.require('google.ads.adwords.v201101.CampaignCriterionService');
goog.require('google.ads.adwords.v201101.Keyword');
goog.require('google.ads.adwords.v201101.KeywordMatchType');
goog.require('google.ads.adwords.v201101.NegativeCampaignCriterion');
goog.require('google.ads.adwords.v201101.Operator');

/**
 * This code example creates a new negative campaign criterion. To create
 * campaign, run AddCampaign.js.
 *
 * Tags: CampaignCriterionService.mutate
 *
 * @extends google.ads.adwords.examples.ExampleBase
 * @constructor
 */
google.ads.adwords.examples.v201101.AddNegativeCampaignCriterion = function() {
  google.ads.adwords.examples.ExampleBase.call(this);
  this.description = 'This code example creates a new negative campaign ' +
      'criterion. To create campaign, run AddCampaign.js.';
};
goog.inherits(google.ads.adwords.examples.v201101.AddNegativeCampaignCriterion,
    google.ads.adwords.examples.ExampleBase);

/**
 * Runs the code example.
 *
 * @param {google.ads.adwords.AdWordsUser} user AdWords user running the code
 *     example.
 * @param {function} callback the callback method to be called once this example
 *     is complete.
 */
google.ads.adwords.examples.v201101.AddNegativeCampaignCriterion.prototype.run =
    function(user, callback) {
  // Get the CampaignCriterionService.
  var campaignCriterionService = user.getService(
      google.ads.adwords.AdWordsService.v201101.CampaignCriterionService);

  var campaignId = this._T('INSERT_CAMPAIGN_ID_HERE');

  var negativeCriterion =
      new google.ads.adwords.v201101.NegativeCampaignCriterion();
  negativeCriterion.campaignId = campaignId;

  var keyword = new google.ads.adwords.v201101.Keyword();
  keyword.matchType = google.ads.adwords.v201101.KeywordMatchType.BROAD;
  keyword.text = 'jupiter cruise';

  negativeCriterion.criterion = keyword;

  var operation = new google.ads.adwords.v201101.CampaignCriterionOperation();
  operation.operator = google.ads.adwords.v201101.Operator.ADD;
  operation.operand = negativeCriterion;

  try {
    campaignCriterionService.mutate([operation],
      goog.bind(function(retVal) {
        if (retVal && retVal.value) {
          for (var i = 0, len = retval.value.length; i < len; i++) {
            var campaignCriterion = retVal.value[i];
            var tempKeyword = campaignCriterion.criterion;

            this.writeOutput('New negative campaign criterion with id = "%s" ' +
                'and text = "%s" was added to campaign with id = "%d".',
                tempKeyword.id, tempKeyword.text,
                campaignCriterion.campaignId);
          }
        } else {
          this.writeOutput('No negative campaign criterion was added.');
        }
        callback();
      }, this),
      goog.bind(function(soapException) {
        this.writeOutput('Failed to add negative campaign criterion. Soap ' +
            'Fault says "%s"', soapException.getInnerException().
            getFaultString());
        callback();
      }, this)
    );
  } catch (ex) {
    this.writeOutput('An exception occurred while running the code example.');
    callback();
  }
};
