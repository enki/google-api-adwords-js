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
 * @fileoverview Defines GetAllAdGroups, a code example that gets all the ad
 *     groups for a campaign.
 */

goog.provide('google.ads.adwords.examples.v201008.GetAllAdGroups');

goog.require('google.ads.adwords.AdWordsService.v201008');
goog.require('google.ads.adwords.examples.ExampleBase');
goog.require('google.ads.adwords.v201008.AdGroupSelector');
goog.require('google.ads.adwords.v201008.AdGroupService');

/**
 * This code example illustrates how to retrieve all the ad groups for a
 * campaign. To create an ad group, run AddAdGroup.js.
 *
 * Tags: AdGroupService.get
 *
 * @extends google.ads.adwords.examples.ExampleBase
 * @constructor
 */
google.ads.adwords.examples.v201008.GetAllAdGroups = function() {
  google.ads.adwords.examples.ExampleBase.call(this);
  /**
  * Example description.
  * @type {string}
  */
  this.description = 'This code example illustrates how to retrieve all the ' +
      'ad groups for a campaign. To create an ad group, run AddAdGroup.js.';
};
goog.inherits(google.ads.adwords.examples.v201008.GetAllAdGroups,
    google.ads.adwords.examples.ExampleBase);

/**
 * Runs the code example.
 *
 * @param {google.ads.adwords.AdWordsUser} user AdWords user running the code
 *     example.
 * @param {function} callback the callback method to be called once this example
 *     is complete.
 */
google.ads.adwords.examples.v201008.GetAllAdGroups.prototype.run =
    function(user, callback) {
  // Get the AdGroupService.
  var adGroupService = user.getService(
      google.ads.adwords.AdWordsService.v201008.AdGroupService);

  var campaignId = this._T('INSERT_CAMPAIGN_ID_HERE');

  var adGroupSelector = new google.ads.adwords.v201008.AdGroupSelector();
  adGroupSelector.campaignIds = [campaignId];

  try {
    adGroupService.get(adGroupSelector,
      goog.bind(function(page) {
        if (page && page.entries && page.entries.length > 0) {
          this.writeOutput('Campaign #%s has %d ad group(s).', campaignId,
              page.entries.length);
          for (var i = 0, len = page.entries.length; i < len; i++) {
            var adGroupValue = page.entries[i];
            this.writeOutput('--Ad group name is "%s" and id is "%s"',
                adGroupValue.name, adGroupValue.id);
          }
        } else {
          this.writeOutput('This campaign has no ad groups.');
        }
        callback();
      }, this),
      goog.bind(function(soapException) {
        this.writeOutput('Failed to get ad group(s). Soap Fault says "%s"',
            soapException.getInnerException().getFaultString());
        callback();
      }, this)
    );
  } catch (ex) {
    this.writeOutput('An exception occurred while running the code example.');
    callback();
  }
};
