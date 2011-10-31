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
 * @fileoverview Defines GetGeoLocationInfo, a code example that gets geo
 *     location information for addresses.
 */

goog.provide('google.ads.adwords.examples.v201109.GetGeoLocationInfo');

goog.require('google.ads.adwords.AdWordsService.v201109');
goog.require('google.ads.adwords.examples.ExampleBase');
goog.require('google.ads.adwords.v201109.Address');
goog.require('google.ads.adwords.v201109.GeoLocationSelector');
goog.require('google.ads.adwords.v201109.GeoLocationService');
goog.require('google.ads.adwords.v201109.InvalidGeoLocation');

/**
 * This code example gets geo location information for addresses.
 *
 * Tags: GeoLocationService.get
 *
 * @extends google.ads.adwords.examples.ExampleBase
 * @constructor
 */
google.ads.adwords.examples.v201109.GetGeoLocationInfo = function() {
  google.ads.adwords.examples.ExampleBase.call(this);
  this.description = 'This code example gets geo location information for' +
      ' addresses.';
};
goog.inherits(google.ads.adwords.examples.v201109.GetGeoLocationInfo,
    google.ads.adwords.examples.ExampleBase);

/**
 * Runs the code example.
 *
 * @param {google.ads.adwords.AdWordsUser} user AdWords user running the code
 *     example.
 * @param {function} callback the callback method to be called once this example
 *     is complete.
 */
google.ads.adwords.examples.v201109.GetGeoLocationInfo.prototype.run =
    function(user, callback) {
  // Get the GeoLocationService.
  var geoLocationService = user.getService(
      google.ads.adwords.AdWordsService.v201109.GeoLocationService);

  var address1 = new google.ads.adwords.v201109.Address();
  address1.streetAddress = '1600 Amphitheatre Parkway';
  address1.cityName = 'Mountain View';
  address1.provinceCode = 'CA';
  address1.postalCode = '94043';
  address1.countryCode = 'US';

  var address2 = new google.ads.adwords.v201109.Address();
  address2.streetAddress = '76 Ninth Avenue';
  address2.cityName = 'New York';
  address2.provinceCode = 'NY';
  address2.postalCode = '10011';
  address2.countryCode = 'US';

  // In order to type unicode addresses like these, make sure your js file is
  // also encoded in UTF-8 without BOM, since calcdeps.py support UTT-8 encoding
  // with BOM.
  var address3 = new google.ads.adwords.v201109.Address();
  address3.streetAddress = '五四大街1号, Beijing东城区';
  address3.countryCode = 'CN';

  // Create selector.
  var selector = new google.ads.adwords.v201109.GeoLocationSelector();
  selector.addresses = [address1, address2, address3];

  try {
    geoLocationService.get(selector,
      goog.bind(function(geoLocations) {
        // Get geo locations.
        if (geoLocations) {
          // Display geo locations.
          for (var i = 0, len = geoLocations.length; i < len; i++) {
            var geoLocation = geoLocations[i];
            if (!(geoLocation instanceof google.ads.adwords.v201109.
                InvalidGeoLocation)) {
              this.writeOutput('Address %s has latitude %d and longitude %d.',
                  geoLocation.address.streetAddress,
                  geoLocation.geoPoint.latitudeInMicroDegrees,
                  geoLocation.geoPoint.longitudeInMicroDegrees);
            } else {
              this.writeOutput('Invalid geo location returned.');
            }
          }
        } else {
          this.writeOutput('No geo locations were returned.');
        }
      callback();
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
