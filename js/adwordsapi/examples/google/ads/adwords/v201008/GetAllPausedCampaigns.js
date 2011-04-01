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
 * @fileoverview Defines GetAllPausedCampaigns, a code example that gets all
 * paused campaigns.
 */

goog.provide('google.ads.adwords.examples.v201008.GetAllPausedCampaigns');

goog.require('google.ads.adwords.AdWordsService.v201008');
goog.require('google.ads.adwords.examples.ExampleBase');
goog.require('google.ads.adwords.v201008.CampaignSelector');
goog.require('google.ads.adwords.v201008.CampaignService');
goog.require('google.ads.adwords.v201008.CampaignStatus');

/**
 * This code example gets all paused campaigns. To add a campaign, run
 * AddCampaign.js.
 *
 * Tags: CampaignService.get
 *
 * @constructor
 */
google.ads.adwords.examples.v201008.GetAllPausedCampaigns = function() {
  google.ads.adwords.examples.ExampleBase.call(this);
  this.description = 'This code example gets all paused campaigns. To add a ' +
      'campaign, run AddCampaign.js.';
};
goog.inherits(google.ads.adwords.examples.v201008.GetAllPausedCampaigns,
    google.ads.adwords.examples.ExampleBase);

/**
 * Runs the code example.
 *
 * @param {google.ads.adwords.AdWordsUser} user AdWords user running the code
 * example.
 * @param {function} callback the callback method to be called once this example
 * is complete.
 */
google.ads.adwords.examples.v201008.GetAllPausedCampaigns.prototype.run =
    function(user, callback) {
  // Get the CampaignService.
  var campaignService = user.getService(
      google.ads.adwords.AdWordsService.v201008.CampaignService);

  var selector = new google.ads.adwords.v201008.CampaignSelector();
  selector.campaignStatuses =
      [google.ads.adwords.v201008.CampaignStatus.PAUSED];

  try {
    campaignService.get(selector,
      goog.bind(function(page) {
        if (page && page.entries && page.entries.length > 0) {
          for (var i = 0, len = page.entries.length; i < len; i++) {
            var campaignValue = page.entries[i];
            this.writeOutput('Paused campaign with id = "%s", name = "%s" ' +
                'and status = "%s" was found.', campaignValue.id,
                campaignValue.name, campaignValue.status);
          }
        } else {
          this.writeOutput('No paused campaigns were found.');
        }
        callback();
      }, this),
      goog.bind(function(soapException) {
        this.writeOutput('Failed to get campaign(s). Soap Fault says "%s"',
            soapException.getInnerException().getFaultString());
        callback();
      }, this)
    );
  } catch (ex) {
    this.writeOutput('An exception occurred while running the code example.');
    callback();
  }
};
