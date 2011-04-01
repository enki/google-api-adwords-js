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
 * @fileoverview Defines GetAllAdExtensionOverrides, a code example that
 * illustrates how to retrieve all the ad extension overrides for an existing
 * campaign.
 */

goog.provide('google.ads.adwords.examples.v201008.GetAllAdExtensionOverrides');

goog.require('google.ads.adwords.AdWordsService.v201008');
goog.require('google.ads.adwords.examples.ExampleBase');
goog.require('google.ads.adwords.v201008.AdExtensionOverrideService');
goog.require('google.ads.adwords.v201008.Experiment');
goog.require('google.ads.adwords.v201008.ExperimentOperation');
goog.require('google.ads.adwords.v201008.ExperimentStatus');
goog.require('google.ads.adwords.v201008.Operator');

/**
 * This code example illustrates how to retrieve all the ad extension
 * overrides for an existing campaign. To create an ad extension override
 * run AddAdExtensionOverride.js.
 *
 * Tags: AdExtensionOverrideService.get
 *
 * @constructor
 */

google.ads.adwords.examples.v201008.GetAllAdExtensionOverrides = function() {
  google.ads.adwords.examples.ExampleBase.call(this);
  this.description = 'This code example illustrates how to retrieve all the ' +
      'ad extension overrides for an existing campaign. To create an ad ' +
      'extension override run AddAdExtensionOverride.js.';
};
goog.inherits(google.ads.adwords.examples.v201008.GetAllAdExtensionOverrides,
    google.ads.adwords.examples.ExampleBase);

/**
 * Runs the code example.
 *
 * @param {google.ads.adwords.AdWordsUser} user AdWords user running the code
 * example.
 * @param {function} callback the callback method to be called once this example
 * is complete.
 */
google.ads.adwords.examples.v201008.GetAllAdExtensionOverrides.prototype.run =
    function(user, callback) {
  // Get the AdExtensionOverrideService.
  var adExtensionOverrideService = user.getService(
      google.ads.adwords.AdWordsService.v201008.AdExtensionOverrideService);

  var campaignId = this._T('INSERT_CAMPAIGN_ID_HERE');

  var selector = new google.ads.adwords.v201008.AdExtensionOverrideSelector();
  selector.campaignIds = [campaignId];

  try {
    adExtensionOverrideService.get(selector,
      goog.bind(function(result) {
        if (result && result.entries) {
          this.writeOutput('Campaign id "%d" has %d ad extension override(s).',
              campaignId, result.entries.length);
          for (var i = 0, len = result.entries.length; i < len; i++) {
            var adExtensionOverride = result.entries[i];
            this.writeOutput('  Ad extension override has id = "%d" and is ' +
                'for ad id = "%d".', adExtensionOverride.adId,
                adExtensionOverride.adExtension.id);
          }
        } else {
          this.writeOutput('No ad extension overrides found for campaign ' +
              'id = "%s".', campaignId);
        }
        callback();
      }, this),
      goog.bind(function(soapException) {
        this.writeOutput('Failed to get all ad extension overrides. Soap ' +
            'Fault says "%s"',
            soapException.getInnerException().getFaultString());
        callback();
      }, this)
    );
  } catch (ex) {
    this.writeOutput('An exception occurred while running the code example.');
    callback();
  }
};
