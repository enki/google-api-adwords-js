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
 * @fileoverview Defines UpdateAdGroupCriterion, a code example that updates
 *     the bid of an ad group criterion.
 */

goog.provide('google.ads.adwords.examples.v201008.UpdateAdGroupCriterion');

goog.require('google.ads.adwords.AdWordsService.v201008');
goog.require('google.ads.adwords.examples.ExampleBase');
goog.require('google.ads.adwords.v201008.AdGroupCriterionOperation');
goog.require('google.ads.adwords.v201008.AdGroupCriterionService');
goog.require('google.ads.adwords.v201008.Bid');
goog.require('google.ads.adwords.v201008.BiddableAdGroupCriterion');
goog.require('google.ads.adwords.v201008.Criterion');
goog.require('google.ads.adwords.v201008.ManualCPCAdGroupCriterionBids');
goog.require('google.ads.adwords.v201008.Money');
goog.require('google.ads.adwords.v201008.Operator');

/**
 * This code example updates the bid of an ad group criterion. To get
 * ad group criteria, run GetAllAdGroupCriteria.js.
 *
 * Tags: AdGroupCriterionService.mutate
 *
 * @extends google.ads.adwords.examples.ExampleBase
 * @constructor
 */
google.ads.adwords.examples.v201008.UpdateAdGroupCriterion = function() {
  google.ads.adwords.examples.ExampleBase.call(this);
  /**
  * Example description.
  * @type {string}
  */
  this.description = 'This code example updates the bid of an ad group ' +
      'criterion. To get ad group criteria, run GetAllAdGroupCriteria.js.';
};
goog.inherits(google.ads.adwords.examples.v201008.UpdateAdGroupCriterion,
    google.ads.adwords.examples.ExampleBase);

/**
 * Runs the code example.
 *
 * @param {google.ads.adwords.AdWordsUser} user AdWords user running the code
 *     example.
 * @param {function} callback the callback method to be called once this example
 *     is complete.
 */
google.ads.adwords.examples.v201008.UpdateAdGroupCriterion.prototype.run =
    function(user, callback) {
  // Get the AdGroupCriterionService.
  var adGroupCriterionService = user.getService(
      google.ads.adwords.AdWordsService.v201008.AdGroupCriterionService);

  var adGroupId = this._T('INSERT_AD_GROUP_ID_HERE');
  var criterionId = this._T('INSERT_CRITERION_ID_HERE');

  var criterion = new google.ads.adwords.v201008.Criterion();
  criterion.id = criterionId;

  // Create ad group criterion.
  var biddableAdGroupCriterion =
      new google.ads.adwords.v201008.BiddableAdGroupCriterion();
  biddableAdGroupCriterion.adGroupId = adGroupId;
  biddableAdGroupCriterion.criterion = criterion;

  // Create bids.
  var bids = new google.ads.adwords.v201008.ManualCPCAdGroupCriterionBids();
  bids.maxCpc = new google.ads.adwords.v201008.Bid();
  bids.maxCpc.amount = new google.ads.adwords.v201008.Money();
  bids.maxCpc.amount.microAmount = 10000;

  biddableAdGroupCriterion.bids = bids;

  // Create operations.
  var operation = new google.ads.adwords.v201008.AdGroupCriterionOperation();
  operation.operator = google.ads.adwords.v201008.Operator.SET;
  operation.operand = biddableAdGroupCriterion;

  try {
    adGroupCriterionService.mutate([operation],
      goog.bind(function(retval) {
        if (retval && retval.value) {
          for (var i = 0, len = retval.value.length; i < len; i++) {
            var adGroupCriterion = retval.value[i];
            var bidAmount = 0;
            // This check is not really necessary here, but it shows how you
            // can write code to check the type of a field and take action
            // accordingly.
            if (adGroupCriterion instanceof google.ads.adwords.v201008.
                BiddableAdGroupCriterion) {
              bidAmount = adGroupCriterion.bids.maxCpc.amount.microAmount;
            }

            this.writeOutput('Ad group criterion with ad group id = "%s", ' +
                'criterion id = "%s" and type = "%s" was updated with bid ' +
                'amount = "%s" micros.',
                adGroupCriterion.adGroupId, adGroupCriterion.criterion.id,
                adGroupCriterion.criterion.CriterionType, bidAmount);
          }
        } else {
          this.writeOutput('No ad group criteria were updated.\n');
        }
        callback();
      }, this),
      goog.bind(function(soapException) {
        this.writeOutput('Failed to update ad group criteria. Soap Fault ' +
            'says "%s"', soapException.getInnerException().getFaultString());
        callback();
      }, this)
    );
  } catch (ex) {
    this.writeOutput('An exception occurred while running the code example.');
    callback();
  }
};
