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
 * @fileoverview Defines AddCampaign, a code example that adds a campaign.
 */

goog.provide('google.ads.adwords.examples.v201008.AddCampaign');

goog.require('google.ads.adwords.AdWordsService.v201008');
goog.require('google.ads.adwords.examples.ExampleBase');
goog.require('google.ads.adwords.v201008.Budget');
goog.require('google.ads.adwords.v201008.BudgetBudgetDeliveryMethod');
goog.require('google.ads.adwords.v201008.BudgetBudgetPeriod');
goog.require('google.ads.adwords.v201008.Campaign');
goog.require('google.ads.adwords.v201008.CampaignOperation');
goog.require('google.ads.adwords.v201008.CampaignService');
goog.require('google.ads.adwords.v201008.CampaignStatus');
goog.require('google.ads.adwords.v201008.ManualCPC');
goog.require('google.ads.adwords.v201008.Money');
goog.require('google.ads.adwords.v201008.Operator');

/**
 * This code example adds a campaign. To get campaigns, run GetAllCampaigns.js.
 *
 * Tags: CampaignService.mutate
 *
 * @extends google.ads.adwords.examples.ExampleBase
 * @constructor
 */
google.ads.adwords.examples.v201008.AddCampaign = function() {
  google.ads.adwords.examples.ExampleBase.call(this);
  this.description = 'This code example adds a campaign. To get campaigns, ' +
      'run GetAllCampaigns.js';
};
goog.inherits(google.ads.adwords.examples.v201008.AddCampaign,
    google.ads.adwords.examples.ExampleBase);

/**
 * Runs the code example.
 *
 * @param {google.ads.adwords.AdWordsUser} user AdWords user running the code
 * example.
 * @param {function} callback the callback method to be called once this example
 * is complete.
 */
google.ads.adwords.examples.v201008.AddCampaign.prototype.run =
    function(user, callback) {
  // Get the CampaignService.
  var campaignService = user.getService(
      google.ads.adwords.AdWordsService.v201008.CampaignService);

  // Create campaign.
  var campaign = new google.ads.adwords.v201008.Campaign();
  campaign.name = 'Interplanetary Cruise #' + this.getTimeStamp();
  campaign.status = google.ads.adwords.v201008.CampaignStatus.PAUSED;
  campaign.biddingStrategy = new google.ads.adwords.v201008.ManualCPC();

  var budget = new google.ads.adwords.v201008.Budget();
  budget.period = google.ads.adwords.v201008.BudgetBudgetPeriod.DAILY;
  budget.deliveryMethod =
      google.ads.adwords.v201008.BudgetBudgetDeliveryMethod.STANDARD;
  budget.amount = new google.ads.adwords.v201008.Money();
  budget.amount.microAmount = 50000000;

  campaign.budget = budget;

  var operation = new google.ads.adwords.v201008.CampaignOperation();
  operation.operator = google.ads.adwords.v201008.Operator.ADD;
  operation.operand = campaign;

  try {
    campaignService.mutate([operation],
      goog.bind(function(retval) {
        if (retval && retval.value) {
          for (var i = 0, len = retval.value.length; i < len; i++) {
            var campaignValue = retval.value[i];
            this.writeOutput('Campaign with name = "%s" and id = "%s" was ' +
                'added.', campaignValue.name, campaignValue.id);
          }
        }
        callback();
      }, this),
      goog.bind(function(soapException) {
        this.writeOutput('Failed to create campaign(s). Soap Fault says "%s"',
            soapException.getInnerException().getFaultString());
        callback();
      }, this)
    );
  } catch (ex) {
    this.writeOutput('An exception occurred while running the code example.');
    callback();
  }
};
