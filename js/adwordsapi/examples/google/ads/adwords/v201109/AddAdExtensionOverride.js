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
 * @author api.davidtorres@gmail.com (David Torres)
 */

/**
 * @fileoverview Defines AddAdExtensionOverride, a code example that shows how
 *     to override a campaign ad extension.
 */

goog.provide('google.ads.adwords.examples.v201109.AddAdExtensionOverride');

goog.require('google.ads.adwords.AdWordsService.v201109');
goog.require('google.ads.adwords.examples.ExampleBase');
goog.require('google.ads.adwords.v201109.AdExtensionOverride');
goog.require('google.ads.adwords.v201109.AdExtensionOverrideOperation');
goog.require('google.ads.adwords.v201109.AdExtensionOverrideService');
goog.require('google.ads.adwords.v201109.Address');
goog.require('google.ads.adwords.v201109.GeoLocationService');
goog.require('google.ads.adwords.v201109.LocationExtension');
goog.require('google.ads.adwords.v201109.LocationExtensionSource');
goog.require('google.ads.adwords.v201109.Operator');

/**
 * This code example illustrates how to override a campaign ad extension.
 * To create an ad, run AddAds.js. To create a campaign ad extension, run
 * AddCampaignAdExtension.js.
 *
 * Tags: GeoLocationService.get, AdExtensionOverrideService.mutate
 *
 * @extends google.ads.adwords.examples.ExampleBase
 * @constructor
 */
google.ads.adwords.examples.v201109.AddAdExtensionOverride = function() {
  google.ads.adwords.examples.ExampleBase.call(this);
  this.description = 'This code example illustrates how to override a ' +
      'campaign ad extension. To create an ad, run AddAds.js. To create a ' +
      'campaign ad extension, run AddCampaignAdExtension.js.';
};
goog.inherits(google.ads.adwords.examples.v201109.AddAdExtensionOverride,
    google.ads.adwords.examples.ExampleBase);

/**
 * Runs the code example.
 *
 * @param {google.ads.adwords.AdWordsUser} user AdWords user running the code
 *     example.
 * @param {function} callback the callback method to be called once this example
 *     is complete.
 */
google.ads.adwords.examples.v201109.AddAdExtensionOverride.prototype.run =
    function(user, callback) {
  // Get the AdExtensionOverrideService.
  var adExtensionOverrideService = user.getService(
      google.ads.adwords.AdWordsService.v201109.AdExtensionOverrideService);

  var adId = this._T('INSERT_AD_ID_HERE');
  var campaignAdExtensionId = this._T('INSERT_CAMPAIGN_AD_EXTENSION_ID_HERE');

  var address = new google.ads.adwords.v201109.Address();
  address.streetAddress = '1600 Amphitheatre Parkway';
  address.cityName = 'Mountain View';
  address.provinceCode = 'CA';
  address.postalCode = '94043';
  address.countryCode = 'US';

  // Get the AdExtensionOverrideService.
  var geoLocationService = user.getService(
      google.ads.adwords.AdWordsService.v201109.GeoLocationService);

  var selector = new google.ads.adwords.v201109.GeoLocationSelector();
  selector.addresses = [address];
  try {
    geoLocationService.get(selector,
      goog.bind(function(geoLocations) {
        // Get geo locations.
        if (geoLocations) {
          // Display geo locations.
          var location = geoLocations[0];

          var extension = new google.ads.adwords.v201109.LocationExtension();
          extension.id = campaignAdExtensionId;
          extension.address = location.address;
          extension.geoPoint = location.geoPoint;
          extension.encodedLocation = location.encodedLocation;
          extension.source =
              google.ads.adwords.v201109.LocationExtensionSource.
                  ADWORDS_FRONTEND;
          extension.phoneNumber = '1-800-555-5556';

          var adOverride = new google.ads.adwords.v201109.AdExtensionOverride();
          adOverride.adExtension = extension;
          adOverride.adId = adId;

          var operation =
              new google.ads.adwords.v201109.AdExtensionOverrideOperation();
          operation.operator = google.ads.adwords.v201109.Operator.ADD;
          operation.operand = adOverride;

          adExtensionOverrideService.mutate([operation],
            goog.bind(function(retVal) {
              if (retVal && retVal.value && retVal.value.length > 0) {
                var adExtensionOverride = retVal.value[0];
                this.writeOutput('Overrode Ad Extension with id = "%d" in ' +
                    'Ad id = "%d"', adExtensionOverride.adExtension.id,
                    adExtensionOverride.adId);
              }
            }, this),
            goog.bind(function(soapException) {
              this.writeOutput('Failed to add ad extension overrides. Soap ' +
                  'Fault says "%s"', soapException.getInnerException().
                  getFaultString());
              callback();
            }, this)
          );
          callback();
        }
      }, this),
      goog.bind(function(soapException) {
        this.writeOutput('Failed to get geo locations. Soap Fault ' +
            'says "%s"', soapException.getInnerException().getFaultString());
        callback();
      }, this)
    );
  } catch (ex) {
    this.writeOutput('An exception occurred while running the code example.');
    callback();
  }
};
