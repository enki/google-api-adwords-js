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
 * @fileoverview Defines UpdateCampaign, a code example that updates a campaign.
 */

goog.provide('google.ads.adwords.examples.v201109.UpdateCampaign');

goog.require('google.ads.adwords.AdWordsService.v201109');
goog.require('google.ads.adwords.examples.ExampleBase');
goog.require('google.ads.adwords.v201109.Budget');
goog.require('google.ads.adwords.v201109.BudgetBudgetDeliveryMethod');
goog.require('google.ads.adwords.v201109.Campaign');
goog.require('google.ads.adwords.v201109.CampaignOperation');
goog.require('google.ads.adwords.v201109.CampaignService');
goog.require('google.ads.adwords.v201109.Operator');

/**
 * This code example updates a campaign. To get campaigns, run
 * GetAllCampaigns.js.
 *
 * Tags: CampaignService.mutate
 *
 * @extends google.ads.adwords.examples.ExampleBase
 * @constructor
 */
google.ads.adwords.examples.v201109.UpdateCampaign = function() {
  google.ads.adwords.examples.ExampleBase.call(this);
  this.description = 'This code example updates a campaign. To get ' +
      'campaigns, run GetAllCampaigns.js.';
};
goog.inherits(google.ads.adwords.examples.v201109.UpdateCampaign,
    google.ads.adwords.examples.ExampleBase);

/**
 * Runs the code example.
 *
 * @param {google.ads.adwords.AdWordsUser} user AdWords user running the code
 *     example.
 * @param {function} callback the callback method to be called once this example
 *     is complete.
 */
google.ads.adwords.examples.v201109.UpdateCampaign.prototype.run =
    function(user, callback) {
  // Get the CampaignService.
  var campaignService = user.getService(
      google.ads.adwords.AdWordsService.v201109.CampaignService);

  var campaignId = this._T('INSERT_CAMPAIGN_ID_HERE');

  // Create campaign with updated budget.
  var campaign = new google.ads.adwords.v201109.Campaign();
  campaign.id = campaignId;

  var budget = new google.ads.adwords.v201109.Budget();
  budget.deliveryMethod = google.ads.adwords.v201109.
      BudgetBudgetDeliveryMethod.ACCELERATED;
  campaign.budget = budget;

  // Create operation.
  var operation = new google.ads.adwords.v201109.CampaignOperation();
  operation.operator = google.ads.adwords.v201109.Operator.SET;
  operation.operand = campaign;

  try {
    campaignService.mutate([operation],
      goog.bind(function(retval) {
        if (retval && retval.value && retval.value.length > 0) {
          for (var i = 0, len = retval.value.length; i < len; i++) {
            var campaignValue = retval.value[i];
            this.writeOutput('Campaign with name = "%s" and id = "%s" was ' +
                'updated.', campaignValue.name, campaignValue.id);
          }
        } else {
          this.writeOutput('No campaigns were updated.');
        }
        callback();
      }, this),
      goog.bind(function(soapException) {
        this.writeOutput('Failed to update campaign(s). Soap Fault says "%s"',
            soapException.getInnerException().getFaultString());
        callback();
      }, this)
    );
  } catch (ex) {
    this.writeOutput('An exception occurred while running the code example.');
    callback();
  }
};
