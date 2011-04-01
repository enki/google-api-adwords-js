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
 * @fileoverview Defines GetConversionOptimizerEligibility, a code example that
 * shows how to check if a campaign is eligible for conversion optimizer.
 */

goog.provide('google.ads.adwords.examples.v201008.GetConversionOptimizerEligibility');

goog.require('google.ads.adwords.AdWordsService.v201008');
goog.require('google.ads.adwords.examples.ExampleBase');
goog.require('google.ads.adwords.v201008.CampaignSelector');
goog.require('google.ads.adwords.v201008.CampaignService');
goog.require('google.ads.adwords.v201008.ExperimentOperation');
goog.require('google.ads.adwords.v201008.ExperimentStatus');
goog.require('google.ads.adwords.v201008.Operator');

/**
 * This code example shows how to check if a campaign is eligible for
 * conversion optimizer.
 *
 * Tags: CampaignService.get
 *
 * @constructor
 */
google.ads.adwords.examples.v201008.GetConversionOptimizerEligibility =
    function() {
  google.ads.adwords.examples.ExampleBase.call(this);
  this.description = 'This code example shows how to check if a campaign is ' +
      'eligible for conversion optimizer.';
};
goog.inherits(
    google.ads.adwords.examples.v201008.GetConversionOptimizerEligibility,
    google.ads.adwords.examples.ExampleBase);

/**
 * Runs the code example.
 *
 * @param {google.ads.adwords.AdWordsUser} user AdWords user running the code
 * example.
 * @param {function} callback the callback method to be called once this example
 * is complete.
 */
google.ads.adwords.examples.v201008.GetConversionOptimizerEligibility.prototype.
    run = function(user, callback) {
  // Get the CampaignService.
  var campaignService = user.getService(
      google.ads.adwords.AdWordsService.v201008.CampaignService);

  var campaignId = this._T('INSERT_CAMPAIGN_ID_HERE');

  var selector = new google.ads.adwords.v201008.CampaignSelector();
  selector.ids = [campaignId];

  try {
    campaignService.get(selector,
      goog.bind(function(page) {
        if (page && page.entries && page.entries.length > 0) {
          var campaign = page.entries[0];
          if (campaign.conversionOptimizerEligibility.eligible == true) {
            this.writeOutput('Campaign with id = "%d" is eligible to use ' +
                'conversion optimizer.', campaign.id);
          } else {
            for (var i = 0, len = campaign.conversionOptimizerEligibility.
                rejectionReasons.length; i < len; i++) {
              var reason = campaign.conversionOptimizerEligibility.
                  rejectionReasons[i];
              this.writeOutput('Campaign with id = "%d" is not eligible to ' +
                  'use conversion optimizer for reason "%s".',
                  campaign.id, reason);
            }
          }
        } else {
          this.writeOutput('No campaigns were found.');
        }
        callback();
      }, this),
      goog.bind(function(soapException) {
        this.writeOutput('Failed to get conversion optimizer eligibility. ' +
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
