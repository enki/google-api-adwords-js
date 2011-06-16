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
 * @fileoverview Defines AddCampaignAdExtension, a code example that shows how
 *     to add an Ad Extension to an existing campaign.
 */

goog.provide('google.ads.adwords.examples.v201101.AddCampaignAdExtension');

goog.require('google.ads.adwords.AdWordsService.v201101');
goog.require('google.ads.adwords.examples.ExampleBase');
goog.require('google.ads.adwords.v201101.Address');
goog.require('google.ads.adwords.v201101.CampaignAdExtension');
goog.require('google.ads.adwords.v201101.CampaignAdExtensionOperation');
goog.require('google.ads.adwords.v201101.CampaignAdExtensionService');
goog.require('google.ads.adwords.v201101.CampaignAdExtensionStatus');
goog.require('google.ads.adwords.v201101.GeoLocationSelector');
goog.require('google.ads.adwords.v201101.GeoLocationService');
goog.require('google.ads.adwords.v201101.LocationExtension');
goog.require('google.ads.adwords.v201101.LocationExtensionSource');

/**
 * This code example shows how to add an Ad Extension to an existing
 * campaign. To create a campaign, run AddCampaign.js.
 *
 * Tags: GeoLocationService.get, CampaignAdExtensionService.mutate
 *
 * @extends google.ads.adwords.examples.ExampleBase
 * @constructor
 */
google.ads.adwords.examples.v201101.AddCampaignAdExtension = function() {
  google.ads.adwords.examples.ExampleBase.call(this);
  this.description = 'This code example shows how to add an Ad Extension to ' +
  'an existing campaign. To create a campaign, run AddCampaign.js.';
};
goog.inherits(google.ads.adwords.examples.v201101.AddCampaignAdExtension,
    google.ads.adwords.examples.ExampleBase);

/**
 * Runs the code example.
 *
 * @param {google.ads.adwords.AdWordsUser} user AdWords user running the code
 *     example.
 * @param {function} callback the callback method to be called once this example
 *     is complete.
 */
google.ads.adwords.examples.v201101.AddCampaignAdExtension.prototype.run =
    function(user, callback) {
  // Get the CampaignAdExtensionService.
  var campaignExtensionService = user.getService(
      google.ads.adwords.AdWordsService.v201101.CampaignAdExtensionService);

  var campaignId = this._T('INSERT_CAMPAIGN_ID_HERE');

  // Add location 1: 1600 Amphitheatre Pkwy, Mountain View, US.
  var address1 = new google.ads.adwords.v201101.Address();
  address1.streetAddress = '1600 Amphitheatre Parkway';
  address1.cityName = 'Mountain View';
  address1.provinceCode = 'CA';
  address1.postalCode = '94043';
  address1.countryCode = 'US';

  // Add location 2: 38 avenue de l'Op�ra, 75002 Paris, FR
  var address2 = new google.ads.adwords.v201101.Address();
  address2.streetAddress = "38 avenue de l'Op�ra";
  address2.cityName = 'Paris';
  address2.postalCode = '75002';
  address2.countryCode = 'FR';

  var geoService = user.getService(
      google.ads.adwords.AdWordsService.v201101.GeoLocationService);

  var selector = new google.ads.adwords.v201101.GeoLocationSelector();
  selector.addresses = [address1, address2];

  try {
    geoService.get(selector,
      goog.bind(function(retval) {
        var operations = [];
        for (var i = 0, len = retval.value.length; i < len; i++) {
          var location = retval[i];
          var locationExtension =
              new google.ads.adwords.v201101.LocationExtension();
          locationExtension.address = location.address;
          locationExtension.geoPoint = location.geoPoint;
          locationExtension.encodedLocation = location.encodedLocation;
          locationExtension.source = google.ads.adwords.v201101.
              LocationExtensionSource.ADWORDS_FRONTEND;

          var extension = new google.ads.adwords.v201101.CampaignAdExtension();
          extension.campaignId = campaignId;
          extension.status = google.ads.adwords.v201101.
              CampaignAdExtensionStatus.ACTIVE;
          extension.adExtension = locationExtension;

          var operation =
              new google.ads.adwords.v201101.CampaignAdExtensionOperation();
          operation.operator = google.ads.adwords.v201101.Operator.ADD;
          operation.operand = extension;

          operations.push(operation);
        }

        campaignExtensionService.mutate(operations, goog.bind(function(retval) {
          if (retval && retval.value && retval.value.length > 0) {
            for (var i = 0, len = retval.value.length; i < len; i++) {
              var campaignExtension = retval.value[i];
              this.writeOutput('Created a campaign ad extension with id = ' +
                  '"%s" and status = "%s"', campaignExtension.adExtension.id,
                  campaignExtension.status);
            }
          } else {
            this.writeOutput('No campaign ad extensions were added.');
          }
          callback();
        }, this),
        goog.bind(function(soapException) {
          this.writeOutput('Failed to add campaign ad extension. Soap Fault ' +
            'says "%s"', soapException.getInnerException().getFaultString());
          callback();

        }, this));
      }, this),
      goog.bind(function(soapException) {
        this.writeOutput('Failed to retrieve geo location(s). Soap Fault ' +
            'says "%s"', soapException.getInnerException().getFaultString());
        callback();
      }, this)
    );
  } catch (ex) {
    this.writeOutput('An exception occurred while running the code example.');
    callback();
  }
};
