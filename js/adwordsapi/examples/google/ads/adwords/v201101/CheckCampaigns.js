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
 * @fileoverview Defines CheckCampaigns, a code example that shows how to use
 * the validateOnly header to validate an API request.
 */

goog.provide('google.ads.adwords.examples.v201101.CheckCampaigns');

goog.require('google.ads.adwords.AdWordsService.v201101');
goog.require('google.ads.adwords.RequestHeader');
goog.require('google.ads.adwords.examples.ExampleBase');
goog.require('google.ads.adwords.v201101.Budget');
goog.require('google.ads.adwords.v201101.BudgetBudgetDeliveryMethod');
goog.require('google.ads.adwords.v201101.BudgetBudgetPeriod');
goog.require('google.ads.adwords.v201101.Campaign');
goog.require('google.ads.adwords.v201101.CampaignOperation');
goog.require('google.ads.adwords.v201101.CampaignService');
goog.require('google.ads.adwords.v201101.CampaignStatus');
goog.require('google.ads.adwords.v201101.ManualCPC');
goog.require('google.ads.adwords.v201101.Money');
goog.require('google.ads.adwords.v201101.Operator');
goog.require('google.ads.adwords.v201101.RequestHeader');

/**
 * This code example shows how to use the validateOnly header to validate
 * an API request. No objects will be created, but exceptions will
 * still be thrown.
 *
 * Tags: CampaignService.mutate
 *
 * @extends google.ads.adwords.examples.ExampleBase
 * @constructor
 */
google.ads.adwords.examples.v201101.CheckCampaigns = function() {
  google.ads.adwords.examples.ExampleBase.call(this);
  this.description = 'This code example shows how to use the validateOnly ' +
      'header to validate an API request. No objects will be created, but ' +
      'exceptions will still be thrown.';
};
goog.inherits(google.ads.adwords.examples.v201101.CheckCampaigns,
    google.ads.adwords.examples.ExampleBase);

/**
 * Runs the code example.
 *
 * @param {google.ads.adwords.AdWordsUser} user AdWords user running the code
 * example.
 * @param {function} callback the callback method to be called once this example
 * is complete.
 */
google.ads.adwords.examples.v201101.CheckCampaigns.prototype.run =
    function(user, callback) {
  // Get the CampaignService.
  var campaignService = user.getService(
      google.ads.adwords.AdWordsService.v201101.CampaignService);

  // Turn on the validation mode.
  campaignService.requestHeader =
      new google.ads.adwords.v201101.RequestHeader();
  campaignService.requestHeader.validateOnly = true;

  // Create the good campaign.
  var goodCampaign = new google.ads.adwords.v201101.Campaign();
  goodCampaign.name = 'Interplanetary Cruise #' + this.getTimeStamp();
  goodCampaign.status = google.ads.adwords.v201101.CampaignStatus.PAUSED;
  goodCampaign.biddingStrategy = new google.ads.adwords.v201101.ManualCPC();

  var budget = new google.ads.adwords.v201101.Budget();
  budget.period = google.ads.adwords.v201101.BudgetBudgetPeriod.DAILY;
  budget.deliveryMethod =
      google.ads.adwords.v201101.BudgetBudgetDeliveryMethod.STANDARD;
  budget.amount = new google.ads.adwords.v201101.Money();
  budget.amount.microAmount = 50000000;

  goodCampaign.budget = budget;

  var operation = new google.ads.adwords.v201101.CampaignOperation();
  operation.operator = google.ads.adwords.v201101.Operator.ADD;
  operation.operand = goodCampaign;

  try {
    campaignService.mutate([operation],
      goog.bind(function(retval) {
        // Since validation is ON, result will be null.
        this.writeOutput('Campaign request validated successfully.');

        // Create the bad campaign.
        var badCampaign = new google.ads.adwords.v201101.Campaign();
        badCampaign.name = 'Campaign #' + this.getTimeStamp();
        badCampaign.status = google.ads.adwords.v201101.CampaignStatus.PAUSED;
        badCampaign.budget = budget;

        // Provide an invalid bidding strategy that will cause an exception
        // during validation. The error thrown is
        // RequiredError.REQUIRED @ operations[0].operand.biddingStrategy.
        badCampaign.biddingStrategy = null;

        operation = new google.ads.adwords.v201101.CampaignOperation();
        operation.operator = google.ads.adwords.v201101.Operator.ADD;
        operation.operand = badCampaign;

        campaignService.mutate([operation],
          goog.bind(function(retval) {
            this.writeOutput('Campaign request validated successfully.');
            callback();
          }, this),
          goog.bind(function(soapException) {
            // This block will be hit if there is a validation error from the
            // server.
            this.writeOutput('There were validation error(s) while adding ' +
                'campaigns.');

            if (soapException.apiException) {
              for (var i = 0; i < soapException.apiException.errors.length;
                  i++) {
                var error = soapException.apiException.errors[i];
                this.writeOutput('--Error type is "%s" and fieldPath is "%s".',
                    error.ApiErrorType, error.fieldPath);
              }
            }

            callback();
          }, this)
        );
      }, this),
      goog.bind(function(soapException) {
        // This block will be hit if there is a validation error from the
        // server.
        this.writeOutput('There were validation error(s) while adding ' +
            'campaigns.');

        if (soapException.apiException) {
          for (var i = 0, len = soapException.apiException.errors.length;
              i < len; i++) {
            var error = soapException.apiException.errors[i];
            this.writeOutput('--Error type is "%s" and fieldPath is "%s".',
                error.ApiErrorType, error.fieldPath);
          }
        }
        callback();
      }, this)
    );
  } catch (ex) {
    this.writeOutput('An exception occurred while running the code example.');
    callback();
  }
};
