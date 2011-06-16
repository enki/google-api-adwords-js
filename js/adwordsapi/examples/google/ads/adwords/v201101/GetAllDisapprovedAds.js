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
 * @fileoverview Defines GetAllDisapprovedAds, a code example that gets all
 *     the disapproved ads in a given campaign.
 */

goog.provide('google.ads.adwords.examples.v201101.GetAllDisapprovedAds');

goog.require('google.ads.adwords.AdWordsService.v201101');
goog.require('google.ads.adwords.examples.ExampleBase');
goog.require('google.ads.adwords.v201101.AdGroupAd');
goog.require('google.ads.adwords.v201101.AdGroupAdService');
goog.require('google.ads.adwords.v201101.AdGroupAdStatus');
goog.require('google.ads.adwords.v201101.Predicate');
goog.require('google.ads.adwords.v201101.PredicateOperator');
goog.require('google.ads.adwords.v201101.Selector');
goog.require('google.ads.adwords.v201101.TextAd');

/**
 * This code example retrieves all the disapproved ads in a given campaign.
 *
 * Tags: AdGroupAdService.get
 *
 * @extends google.ads.adwords.examples.ExampleBase
 * @constructor
 */
google.ads.adwords.examples.v201101.GetAllDisapprovedAds = function() {
  google.ads.adwords.examples.ExampleBase.call(this);
  this.description = 'This code example retrieves all the disapproved ads ' +
      'in a given campaign.';
};
goog.inherits(google.ads.adwords.examples.v201101.GetAllDisapprovedAds,
    google.ads.adwords.examples.ExampleBase);

/**
 * Runs the code example.
 *
 * @param {google.ads.adwords.AdWordsUser} user AdWords user running the code
 *     example.
 * @param {function} callback the callback method to be called once this example
 *     is complete.
 */
google.ads.adwords.examples.v201101.GetAllDisapprovedAds.prototype.run =
    function(user, callback) {
  // Get the AdGroupAdService.
  var adGroupAdService = user.getService(
      google.ads.adwords.AdWordsService.v201101.AdGroupAdService);

  var campaignId = this._T('INSERT_CAMPAIGN_ID_HERE');

  // Create a selector.
  var selector = new google.ads.adwords.v201101.Selector();
  selector.fields = ['Id', 'CreativeApprovalStatus', 'DisapprovalReasons'];

  // Create a filter.
  var predicate = new google.ads.adwords.v201101.Predicate();
  predicate.operator = google.ads.adwords.v201101.PredicateOperator.EQUALS;
  predicate.field = 'CampaignId';
  predicate.values = [campaignId];

  selector.predicates = [predicate];

  try {
    // Get all disapproved ads.
    adGroupAdService.get(selector,
      goog.bind(function(page) {
        var hasDisapprovedAds = false;
        if (page && page.entries && page.entries.length > 0) {
          for (var i = 0, len = page.entries.length; i < len; i++) {
            var adGroupAdValue = page.entries[i];
            if (adGroupAdValue.ad.approvalStatus ==
                google.ads.adwords.v201101.AdApprovalStatus.DISAPPROVED) {
              hasDisapprovedAds = true;
              this.writeOutput('Ad id "%s" has been disapproved for the ' +
                  'following reason(s):', adGroupAdValue.ad.id);
              for (var j = 0, len1 = adGroupAdValue.ad.disapprovalReasons.
                  length; j < len1; j++) {
                this.writeOutput('--%s', adGroupAdValue.ad.
                    disapprovalReasons[j]);
              }
            }
          }
        }
        if (!hasDisapprovedAds) {
          this.writeOutput('No disapproved ads were found.');
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
