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
 * @fileoverview Defines AddAds, a code example that adds a text ad to a given
 * ad group.
 */

goog.provide('google.ads.adwords.examples.v201101.AddAds');

goog.require('google.ads.adwords.AdWordsService.v201101');
goog.require('google.ads.adwords.examples.ExampleBase');
goog.require('google.ads.adwords.v201101.AdGroupAd');
goog.require('google.ads.adwords.v201101.AdGroupAdOperation');
goog.require('google.ads.adwords.v201101.AdGroupAdService');
goog.require('google.ads.adwords.v201101.Operator');
goog.require('google.ads.adwords.v201101.TextAd');

/**
 * This code example adds a text ad to a given ad group. To get ad group,
 * run GetAllAdGroups.js.
 *
 * Tags: AdGroupAdService.mutate
 *
 * @extends google.ads.adwords.examples.ExampleBase
 * @constructor
 */
google.ads.adwords.examples.v201101.AddAds = function() {
  google.ads.adwords.examples.ExampleBase.call(this);
  this.description = 'This code example adds a text ad to a given ad group. ' +
      'To get ad_group, run GetAllAdGroups.js.';
};
goog.inherits(google.ads.adwords.examples.v201101.AddAds,
    google.ads.adwords.examples.ExampleBase);

/**
 * Runs the code example.
 *
 * @param {google.ads.adwords.AdWordsUser} user AdWords user running the code
 * example.
 * @param {function} callback the callback method to be called once this example
 * is complete.
 */
google.ads.adwords.examples.v201101.AddAds.prototype.run =
    function(user, callback) {
  // Get the AdGroupAdService.
  var adGroupAdService = user.getService(
      google.ads.adwords.AdWordsService.v201101.AdGroupAdService);

  var adGroupId = this._T('INSERT_ADGROUP_ID_HERE');

  // Create your text ad.
  var textAd = new google.ads.adwords.v201101.TextAd();
  textAd.headline = 'Luxury Cruise to Mars';
  textAd.description1 = 'Visit the Red Planet in style.';
  textAd.description2 = 'Low-gravity fun for everyone!';
  textAd.displayUrl = 'www.example.com';
  textAd.url = 'http://www.example.com';

  var textadGroupAd = new google.ads.adwords.v201101.AdGroupAd();
  textadGroupAd.adGroupId = adGroupId;
  textadGroupAd.ad = textAd;

  var operation = new google.ads.adwords.v201101.AdGroupAdOperation();
  operation.operator = google.ads.adwords.v201101.Operator.ADD;
  operation.operand = textadGroupAd;

  try {
    adGroupAdService.mutate([operation],
      goog.bind(function(retval) {
        if (retval && retval.value) {
          for (var i = 0, len = retval.value.length; i < len; i++) {
            var adGroupAdValue = retval.value[i];
            this.writeOutput('New ad with id = "%s" and displayUrl = "%s" ' +
                'was created.', adGroupAdValue.ad.id,
                adGroupAdValue.ad.displayUrl);
          }
        }
        callback();
      }, this),
      goog.bind(function(soapException) {
        this.writeOutput('Failed to create ads(s). Soap Fault says "%s"',
            soapException.getInnerException().getFaultString());
        callback();
      }, this)
    );
  } catch (ex) {
    this.writeOutput('An exception occurred while running the code example.');
    callback();
  }
};
