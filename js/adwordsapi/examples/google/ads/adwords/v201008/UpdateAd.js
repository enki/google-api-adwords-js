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
 * @fileoverview Defines UpdateAd, a code example that updates an ad's
 *     status given an existing ad group and ad.
 */

goog.provide('google.ads.adwords.examples.v201008.UpdateAd');

goog.require('google.ads.adwords.AdWordsService.v201008');
goog.require('google.ads.adwords.examples.ExampleBase');
goog.require('google.ads.adwords.v201008.Ad');
goog.require('google.ads.adwords.v201008.AdGroupAd');
goog.require('google.ads.adwords.v201008.AdGroupAdOperation');
goog.require('google.ads.adwords.v201008.AdGroupAdService');
goog.require('google.ads.adwords.v201008.Operator');

/**
 * This code example updates an ad's status given an existing ad group and ad.
 *
 * Tags: AdGroupAdService.mutate
 *
 * @extends google.ads.adwords.examples.ExampleBase
 * @constructor
 */
google.ads.adwords.examples.v201008.UpdateAd = function() {
  google.ads.adwords.examples.ExampleBase.call(this);
  /**
  * Example description.
  * @type {string}
  */
  this.description = 'This code example updates an ad\'s status given an ' +
      'existing ad group and ad.';
};
goog.inherits(google.ads.adwords.examples.v201008.UpdateAd,
    google.ads.adwords.examples.ExampleBase);

/**
 * Runs the code example.
 *
 * @param {google.ads.adwords.AdWordsUser} user AdWords user running the code
 *     example.
 * @param {function} callback the callback method to be called once this example
 *     is complete.
 */
google.ads.adwords.examples.v201008.UpdateAd.prototype.run =
    function(user, callback) {
  // Get the AdGroupAdService.
  var adGroupAdService = user.getService(
      google.ads.adwords.AdWordsService.v201008.AdGroupAdService);

  var adGroupId = this._T('INSERT_ADGROUP_ID_HERE');
  var adId = this._T('INSERT_AD_ID_HERE');
  var status = this._T('INSERT_AD_GROUP_AD_STATUS_HERE');

  // Update your Ad.
  var adGroupAd = new google.ads.adwords.v201008.AdGroupAd();
  adGroupAd.status = status;
  adGroupAd.adGroupId = adGroupId;

  adGroupAd.ad = new google.ads.adwords.v201008.Ad();
  adGroupAd.ad.id = adId;

  var operation = new google.ads.adwords.v201008.AdGroupAdOperation();
  operation.operator = google.ads.adwords.v201008.Operator.SET;
  operation.operand = adGroupAd;

  try {
    adGroupAdService.mutate([operation],
      goog.bind(function(retval) {
        if (retval && retval.value && retval.value.length > 0) {
          for (var i = 0, len = retval.value.length; i < len; i++) {
            var adGroupAdValue = retval.value[i];
            this.writeOutput('Status of ad with id "%s" was set to "%s"',
                adGroupAdValue.ad.id, adGroupAdValue.status);
          }
        } else {
          this.writeOutput('No ads were updated.');
        }
        callback();
      }, this),
      goog.bind(function(soapException) {
        this.writeOutput('Failed to update ads(s). Soap Fault says "%s"',
            soapException.getInnerException().getFaultString());
        callback();
      }, this)
    );
  } catch (ex) {
    this.writeOutput('An exception occurred while running the code example.');
    callback();
  }
};
