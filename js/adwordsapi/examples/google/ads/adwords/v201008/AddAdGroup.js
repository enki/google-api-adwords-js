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
 * @fileoverview Defines AddAdGroup, a code example that shows how to create
 * an ad group.
 */

goog.provide('google.ads.adwords.examples.v201008.AddAdGroup');

goog.require('google.ads.adwords.AdWordsService.v201008');
goog.require('google.ads.adwords.examples.ExampleBase');
goog.require('google.ads.adwords.v201008.AdGroup');
goog.require('google.ads.adwords.v201008.AdGroupOperation');
goog.require('google.ads.adwords.v201008.AdGroupService');
goog.require('google.ads.adwords.v201008.AdGroupStatus');
goog.require('google.ads.adwords.v201008.Bid');
goog.require('google.ads.adwords.v201008.ManualCPCAdGroupBids');
goog.require('google.ads.adwords.v201008.Money');
goog.require('google.ads.adwords.v201008.Operator');

/**
 * This code example shows how to create an ad group. To create a campaign,
 * run AddCampaign.js.
 *
 * Tags: AdGroupService.mutate
 *
 * @extends google.ads.adwords.examples.ExampleBase
 * @constructor
 */
google.ads.adwords.examples.v201008.AddAdGroup = function() {
  google.ads.adwords.examples.ExampleBase.call(this);
  this.description = 'This code example shows how to create an ad group. ' +
      'To create a campaign, run AddCampaign.js.';
};
goog.inherits(google.ads.adwords.examples.v201008.AddAdGroup,
    google.ads.adwords.examples.ExampleBase);

/**
 * Runs the code example.
 *
 * @param {google.ads.adwords.AdWordsUser} user AdWords user running the code
 * example.
 * @param {function} callback the callback method to be called once this example
 * is complete.
 */
google.ads.adwords.examples.v201008.AddAdGroup.prototype.run =
    function(user, callback) {
  // Get the AdGroupService.
  var adGroupService = user.getService(
      google.ads.adwords.AdWordsService.v201008.AdGroupService);

  var campaignId = this._T('INSERT_CAMPAIGN_ID_HERE');

  var adGroup = new google.ads.adwords.v201008.AdGroup();
  adGroup.name = 'Earth to Mars Cruises #' + this.getTimeStamp();
  adGroup.status = google.ads.adwords.v201008.AdGroupStatus.ENABLED;
  adGroup.campaignId = campaignId;

  var bids = new google.ads.adwords.v201008.ManualCPCAdGroupBids();
  var keywordMaxCpc = new google.ads.adwords.v201008.Bid();
  keywordMaxCpc.amount = new google.ads.adwords.v201008.Money();
  keywordMaxCpc.amount.microAmount = 10000000;
  bids.keywordMaxCpc = keywordMaxCpc;

  adGroup.bids = bids;

  var operation = new google.ads.adwords.v201008.AdGroupOperation();
  operation.operator = google.ads.adwords.v201008.Operator.ADD;
  operation.operand = adGroup;

  try {
    adGroupService.mutate([operation],
      goog.bind(function(retval) {
        if (retval && retval.value) {
          for (var i = 0, len = retval.value.length; i < len; i++) {
            var adGroupValue = retval.value[i];
            this.writeOutput('Ad group with id = "%s" and name = "%s" was ' +
                'created.', adGroupValue.id, adGroupValue.name);
          }
        }
        callback();
      }, this),
      goog.bind(function(soapException) {
        this.writeOutput('Failed to create ad group(s). Soap Fault says "%s"',
            soapException.getInnerException().getFaultString());
        callback();
      }, this)
    );
  } catch (ex) {
    this.writeOutput('An exception occurred while running the code example.');
    callback();
  }
};
