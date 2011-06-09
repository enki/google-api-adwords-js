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
 * @fileoverview Defines DeleteAd, a code example that deletes an ad using the
 * 'REMOVE' operator.
 */

goog.provide('google.ads.adwords.examples.v201101.DeleteAd');

goog.require('google.ads.adwords.AdWordsService.v201101');
goog.require('google.ads.adwords.examples.ExampleBase');
goog.require('google.ads.adwords.v201101.AdGroupAd');
goog.require('google.ads.adwords.v201101.AdGroupAdOperation');
goog.require('google.ads.adwords.v201101.AdGroupAdService');
goog.require('google.ads.adwords.v201101.Operator');
goog.require('google.ads.adwords.v201101.TextAd');

/**
 * This code example deletes an ad using the 'REMOVE' operator. To get ads,
 * run GetAllAds.js.
 *
 * Tags: AdGroupAdService.mutate
 *
 * @extends google.ads.adwords.examples.ExampleBase
 * @constructor
 */
google.ads.adwords.examples.v201101.DeleteAd = function() {
  google.ads.adwords.examples.ExampleBase.call(this);
  this.description = 'This code example deletes an ad using the "REMOVE" ' +
      'operator. To get ads, run GetAllAds.js.';
};
goog.inherits(google.ads.adwords.examples.v201101.DeleteAd,
    google.ads.adwords.examples.ExampleBase);

/**
 * Runs the code example.
 *
 * @param {google.ads.adwords.AdWordsUser} user AdWords user running the code
 * example.
 * @param {function} callback the callback method to be called once this example
 * is complete.
 */
google.ads.adwords.examples.v201101.DeleteAd.prototype.run =
    function(user, callback) {
  // Get the AdGroupAdService.
  var adGroupAdService = user.getService(
      google.ads.adwords.AdWordsService.v201101.AdGroupAdService);

  var adGroupId = this._T('INSERT_ADGROUP_ID_HERE');
  var adId = this._T('INSERT_AD_ID_HERE');

  // Create base class ad to avoid setting type specific fields.
  var ad = new google.ads.adwords.v201101.Ad();
  ad.id = adId;

  // Create ad group ad.
  var adGroupAd = new google.ads.adwords.v201101.AdGroupAd();
  adGroupAd.adGroupId = adGroupId;
  adGroupAd.ad = ad;

  // Create operations.
  var operation = new google.ads.adwords.v201101.AdGroupAdOperation();
  operation.operand = adGroupAd;
  operation.operator = google.ads.adwords.v201101.Operator.REMOVE;

  try {
    // Delete ad.
    adGroupAdService.mutate([operation],
      goog.bind(function(retval) {
        if (retval && retval.value) {
          for (var i = 0, len = retval.value.length; i < len; i++) {
            var adGroupAdValue = retval.value[i];
            this.writeOutput('Ad with id = "%s" and type = "%s" ' +
                'was deleted.', adGroupAdValue.ad.id, adGroupAdValue.ad.AdType);
          }
        }
        callback();
      }, this),
      goog.bind(function(soapException) {
        this.writeOutput('Failed to delete ads(s). Soap Fault says "%s"',
            soapException.getInnerException().getFaultString());
        callback();
      }, this)
    );
  } catch (ex) {
    this.writeOutput('An exception occurred while running the code example.');
    callback();
  }
};
