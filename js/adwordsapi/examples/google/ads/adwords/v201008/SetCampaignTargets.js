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
 * @fileoverview Defines SetCampaignTargets, a code example that adds geo,
 * language, and network targeting to an existing campaign.
 */

goog.provide('google.ads.adwords.examples.v201008.SetCampaignTargets');

goog.require('google.ads.adwords.AdWordsService.v201008');
goog.require('google.ads.adwords.examples.ExampleBase');
goog.require('google.ads.adwords.v201008.CampaignTargetOperation');
goog.require('google.ads.adwords.v201008.CampaignTargetService');
goog.require('google.ads.adwords.v201008.CountryTarget');
goog.require('google.ads.adwords.v201008.GeoTargetList');
goog.require('google.ads.adwords.v201008.LanguageTarget');
goog.require('google.ads.adwords.v201008.LanguageTargetList');
goog.require('google.ads.adwords.v201008.NetworkCoverageType');
goog.require('google.ads.adwords.v201008.NetworkTarget');
goog.require('google.ads.adwords.v201008.NetworkTargetList');
goog.require('google.ads.adwords.v201008.Operator');

/**
 * This code example adds geo, language, and network targeting to an
 * existing campaign. To get a campaign, run GetAllCampaigns.js.
 *
 * Tags: CampaignTargetService.mutate
 *
 * @extends google.ads.adwords.examples.ExampleBase
 * @constructor
 */
google.ads.adwords.examples.v201008.SetCampaignTargets = function() {
  google.ads.adwords.examples.ExampleBase.call(this);
  this.description = 'This code example adds geo, language, and network ' +
      'targeting to an existing campaign. To get a campaign, run ' +
      'GetAllCampaigns.js.';
};
goog.inherits(google.ads.adwords.examples.v201008.SetCampaignTargets,
    google.ads.adwords.examples.ExampleBase);

/**
 * Runs the code example.
 *
 * @param {google.ads.adwords.AdWordsUser} user AdWords user running the code
 * example.
 * @param {function} callback the callback method to be called once this example
 * is complete.
 */
google.ads.adwords.examples.v201008.SetCampaignTargets.prototype.run =
    function(user, callback) {
  // Get the CampaignTargetService.

  var campaignTargetService = user.getService(
      google.ads.adwords.AdWordsService.v201008.CampaignTargetService);

  var campaignId = this._T('INSERT_CAMPAIGN_ID_HERE');

  // Create language targets.
  var langTargetList = new google.ads.adwords.v201008.LanguageTargetList();
  langTargetList.campaignId = campaignId;

  var langTarget1 = new google.ads.adwords.v201008.LanguageTarget();
  langTarget1.languageCode = 'en';

  var langTarget2 = new google.ads.adwords.v201008.LanguageTarget();
  langTarget2.languageCode = 'ja';

  langTargetList.targets = [langTarget1, langTarget2];

  // Create language target set operation.
  var langTargetOperation =
      new google.ads.adwords.v201008.CampaignTargetOperation();
  langTargetOperation.operator = google.ads.adwords.v201008.Operator.SET;
  langTargetOperation.operand = langTargetList;

  // Create geo targets.
  var geoTargetList = new google.ads.adwords.v201008.GeoTargetList();
  geoTargetList.campaignId = campaignId;

  var geoTarget1 = new google.ads.adwords.v201008.CountryTarget();
  geoTarget1.countryCode = 'US';

  var geoTarget2 = new google.ads.adwords.v201008.CountryTarget();
  geoTarget2.countryCode = 'JP';

  // Create geo target set operation.
  var geoTargetOperation =
      new google.ads.adwords.v201008.CampaignTargetOperation();
  geoTargetOperation.operator = google.ads.adwords.v201008.Operator.SET;
  geoTargetOperation.operand = geoTargetList;

  // Create network targets.
  var networkTargetList = new google.ads.adwords.v201008.NetworkTargetList();
  networkTargetList.campaignId = campaignId;

  // Specifying GOOGLE_SEARCH is necessary if you want to target
  // SEARCH_NETWORK.
  var networkTarget1 = new google.ads.adwords.v201008.NetworkTarget();
  networkTarget1.networkCoverageType =
      google.ads.adwords.v201008.NetworkCoverageType.GOOGLE_SEARCH;

  var networkTarget2 = new google.ads.adwords.v201008.NetworkTarget();
  networkTarget2.networkCoverageType =
      google.ads.adwords.v201008.NetworkCoverageType.SEARCH_NETWORK;

  networkTargetList.targets = [networkTarget1, networkTarget2];

  // Create network target set operation.
  var networkTargetOperation =
      new google.ads.adwords.v201008.CampaignTargetOperation();
  networkTargetOperation.operator = google.ads.adwords.v201008.Operator.SET;
  networkTargetOperation.operand = networkTargetList;

  try {
    campaignTargetService.mutate(
      [geoTargetOperation, langTargetOperation, networkTargetOperation],
      goog.bind(function(retval) {
        // Display campaign targets.
        if (retval && retval.value && retval.value.length > 0) {
          for (var i = 0, len = retval.value.length; i < len; i++) {
            var targetList = retval.value[i];
            this.writeOutput('Campaign target of type "%s" was set to ' +
                'Campaign with id = "%s".', targetList.TargetListType,
                targetList.campaignId);
          }
        } else {
          this.writeOutput('No campaign target(s) were set.');
        }
        callback();
      }, this),
      goog.bind(function(soapException) {
        this.writeOutput('Failed to set campaign target(s). Soap Fault says ' +
            '"%s"', soapException.getInnerException().getFaultString());
        callback();
      }, this)
    );
  } catch (ex) {
    this.writeOutput('An exception occurred while running the code example.');
    callback();
  }
};
