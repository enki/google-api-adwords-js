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
 * @fileoverview Defines GetAllAds, a code example that gets
 *     all ads given an existing ad group.
 */

goog.provide('google.ads.adwords.examples.v201008.GetAllAds');

goog.require('google.ads.adwords.AdWordsService.v201008');
goog.require('google.ads.adwords.examples.ExampleBase');
goog.require('google.ads.adwords.v201008.AdGroupAd');
goog.require('google.ads.adwords.v201008.AdGroupAdSelector');
goog.require('google.ads.adwords.v201008.AdGroupAdService');
goog.require('google.ads.adwords.v201008.AdGroupAdStatus');
goog.require('google.ads.adwords.v201008.TextAd');

/**
 * This code example retrieves all ads given an existing ad group. To add
 * ads to an existing ad group, run AddAds.js.
 *
 * Tags: AdGroupAdService.get
 *
 * @extends google.ads.adwords.examples.ExampleBase
 * @constructor
 */
google.ads.adwords.examples.v201008.GetAllAds = function() {
  google.ads.adwords.examples.ExampleBase.call(this);
  /**
  * Example description.
  * @type {string}
  */
  this.description = 'This code example retrieves all ads given an existing' +
  ' ad group. To add ads to an existing ad group, run AddAds.js.';
};
goog.inherits(google.ads.adwords.examples.v201008.GetAllAds,
    google.ads.adwords.examples.ExampleBase);

/**
 * Runs the code example.
 *
 * @param {google.ads.adwords.AdWordsUser} user AdWords user running the code
 *     example.
 * @param {function} callback the callback method to be called once this example
 *     is complete.
 */
google.ads.adwords.examples.v201008.GetAllAds.prototype.run =
    function(user, callback) {
  // Get the AdGroupAdService.
  var adGroupAdService = user.getService(
      google.ads.adwords.AdWordsService.v201008.AdGroupAdService);

  var adGroupId = this._T('INSERT_ADGROUP_ID_HERE');

  // Create a selector and set the filters.
  var selector = new google.ads.adwords.v201008.AdGroupAdSelector();
  selector.adGroupIds = [adGroupId];
  // By default disabled ads aren't returned by the selector. To return them
  // include the DISABLED status in the statuses field.
  selector.statuses = [
      google.ads.adwords.v201008.AdGroupAdStatus.ENABLED,
      google.ads.adwords.v201008.AdGroupAdStatus.PAUSED,
      google.ads.adwords.v201008.AdGroupAdStatus.DISABLED
  ];

  try {
    // Delete ad.
    adGroupAdService.get(selector,
      goog.bind(function(page) {
        if (page && page.entries && page.entries.length > 0) {
          for (var i = 0, len = page.entries.length; i < len; i++) {
            var adGroupAdValue = page.entries[i];
            this.writeOutput('Ad id is "%s" and status is "%s".',
                adGroupAdValue.ad.id, adGroupAdValue.status);
          }
        } else {
          this.writeOutput('No ads were found.');
        }
        callback();
      }, this),
      goog.bind(function(soapException) {
        this.writeOutput('Failed to get ads(s). Soap Fault says "%s"',
            soapException.getInnerException().getFaultString());
        callback();
      }, this)
    );
  } catch (ex) {
    this.writeOutput('An exception occurred while running the code example.');
    callback();
  }
};
