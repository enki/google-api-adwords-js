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
 * @fileoverview Defines GetAllCampaignAdExtensions, a code example that gets
 *     all Ad Extensions in a campaign.
 */

goog.provide('google.ads.adwords.examples.v201101.GetAllCampaignAdExtensions');

goog.require('google.ads.adwords.AdWordsService.v201101');
goog.require('google.ads.adwords.examples.ExampleBase');
goog.require('google.ads.adwords.v201101.CampaignAdExtensionService');
goog.require('google.ads.adwords.v201101.OrderBy');
goog.require('google.ads.adwords.v201101.Predicate');
goog.require('google.ads.adwords.v201101.PredicateOperator');
goog.require('google.ads.adwords.v201101.Selector');
goog.require('google.ads.adwords.v201101.SortOrder');

/**
 * This code example shows how to retrieve all Ad Extensions in a campaign.
 * To create a Campaign Ad Extension, run AddCampaignAdExtensionOverride.js.
 *
 * Tags: CampaignAdExtensionService.get
 *
 * @extends google.ads.adwords.examples.ExampleBase
 * @constructor
 */
google.ads.adwords.examples.v201101.GetAllCampaignAdExtensions = function() {
  google.ads.adwords.examples.ExampleBase.call(this);
  this.description = 'This code example shows how to retrieve all Ad ' +
      'Extensions in a Campaign. To create a Campaign Ad Extension, run ' +
      'AddCampaignAdExtensionOverride.js.';
};
goog.inherits(google.ads.adwords.examples.v201101.GetAllCampaignAdExtensions,
    google.ads.adwords.examples.ExampleBase);

/**
 * Runs the code example.
 *
 * @param {google.ads.adwords.AdWordsUser} user AdWords user running the code
 *     example.
 * @param {function} callback the callback method to be called once this example
 *     is complete.
 */
google.ads.adwords.examples.v201101.GetAllCampaignAdExtensions.prototype.run =
    function(user, callback) {
  // Get the CampaignAdExtensionService.
  var campaignExtensionService = user.getService(
      google.ads.adwords.AdWordsService.v201101.CampaignAdExtensionService);

  var campaignId = this._T('INSERT_CAMPAIGN_ID_HERE');

  // Create a selector.
  var selector = new google.ads.adwords.v201101.Selector();
  selector.fields = ['AdExtensionId', 'Status'];

  // Create the filtering conditions.
  var campaignPredicate = new google.ads.adwords.v201101.Predicate();
  campaignPredicate.operator =
      google.ads.adwords.v201101.PredicateOperator.EQUALS;
  campaignPredicate.field = 'CampaignId';
  campaignPredicate.values = [campaignId];

  selector.predicates = [campaignPredicate];

  // Specify the sort order.
  var orderBy = new google.ads.adwords.v201101.OrderBy();
  orderBy.field = 'AdExtensionId';
  orderBy.sortOrder = google.ads.adwords.v201101.SortOrder.ASCENDING;
  selector.ordering = [orderBy];

  try {
    campaignExtensionService.get(selector,
      goog.bind(function(page) {
        if (page && page.entries && page.entries.length > 0) {
          this.writeOutput('Retrieved "%d" out of "%s" entries.',
              page.entries.length, page.totalNumEntries);
          for (var i = 0, len = page.entries.length; i < len; i++) {
            var campaignExtension = page.entries[i];
            this.writeOutput('Campaign ad extension id is "%s" and status ' +
                'is "%s".', campaignExtension.adExtension.id,
                campaignExtension.status);
          }
        } else {
          this.writeOutput('No campaign ad extensions were found.');
        }
        callback();
      }, this),
      goog.bind(function(soapException) {
        this.writeOutput('Failed to add campaign ad extension. Soap Fault ' +
          'says "%s"', soapException.getInnerException().getFaultString());
        callback();
      }, this)
    );
  } catch (ex) {
    this.writeOutput('An exception occurred while running the code example.');
    callback();
  }
};
