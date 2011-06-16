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
 * @fileoverview Defines GetAllCampaignTargets, a code example that gets all
 *     campaign targets.
 */

goog.provide('google.ads.adwords.examples.v201008.GetAllCampaignTargets');

goog.require('google.ads.adwords.AdWordsService.v201008');
goog.require('google.ads.adwords.examples.ExampleBase');
goog.require('google.ads.adwords.v201008.CampaignTargetSelector');
goog.require('google.ads.adwords.v201008.CampaignTargetService');

/**
 * This code example gets all campaign targets. To set a campaign target,
 * run SetCampaignTargets.js.
 *
 * Tags: CampaignTargetService.get
 *
 * @extends google.ads.adwords.examples.ExampleBase
 * @constructor
 */
google.ads.adwords.examples.v201008.GetAllCampaignTargets = function() {
  google.ads.adwords.examples.ExampleBase.call(this);
  /**
  * Example description.
  * @type {string}
  */
  this.description = 'This code example adds geo, language, and network ' +
      'targeting to an existing campaign. To get a campaign, run ' +
      'GetAllCampaigns.js.';
};
goog.inherits(google.ads.adwords.examples.v201008.GetAllCampaignTargets,
    google.ads.adwords.examples.ExampleBase);

/**
 * Runs the code example.
 *
 * @param {google.ads.adwords.AdWordsUser} user AdWords user running the code
 *     example.
 * @param {function} callback the callback method to be called once this example
 *     is complete.
 */
google.ads.adwords.examples.v201008.GetAllCampaignTargets.prototype.run =
    function(user, callback) {
  // Get the CampaignTargetService.
  var campaignTargetService = user.getService(
      google.ads.adwords.AdWordsService.v201008.CampaignTargetService);

  var selector = new google.ads.adwords.v201008.CampaignTargetSelector();

  try {
    campaignTargetService.get(selector,
      goog.bind(function(page) {
        // Display campaign targets.
        if (page && page.entries && page.entries.length > 0) {
          for (var i = 0, len = page.entries.length; i < len; i++) {
            var targetList = page.entries[i];
            this.writeOutput('Campaign target of type "%s" was found for ' +
                'Campaign with id = "%s".', targetList.targetListType,
                targetList.campaignId);
          }
        } else {
          this.writeOutput('No campaign target(s) were found.');
        }
        callback();
      }, this),
      goog.bind(function(soapException) {
        this.writeOutput('Failed to get campaign target(s). Soap Fault ' +
            'says "%s"', soapException.getInnerException().getFaultString());
        callback();
      }, this)
    );
  } catch (ex) {
    this.writeOutput('An exception occurred while running the code example.');
    callback();
  }
};
