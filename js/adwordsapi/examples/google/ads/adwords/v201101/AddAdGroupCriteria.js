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
 * @fileoverview Defines AddAdGroupCriteria, a code example that adds a keyword
 * and a placement to an ad group.
 */

goog.provide('google.ads.adwords.examples.v201101.AddAdGroupCriteria');

goog.require('google.ads.adwords.AdWordsService.v201101');
goog.require('google.ads.adwords.examples.ExampleBase');
goog.require('google.ads.adwords.v201101.AdGroupCriterionOperation');
goog.require('google.ads.adwords.v201101.AdGroupCriterionService');
goog.require('google.ads.adwords.v201101.BiddableAdGroupCriterion');
goog.require('google.ads.adwords.v201101.Keyword');
goog.require('google.ads.adwords.v201101.KeywordMatchType');
goog.require('google.ads.adwords.v201101.Operator');

/**
 * This code example adds a keyword and a placement to an ad group. To get
 * ad groups, run GetAllAdGroups.js.
 *
 * Tags: AdGroupCriterionService.mutate
 *
 * @extends google.ads.adwords.examples.ExampleBase
 * @constructor
 */

google.ads.adwords.examples.v201101.AddAdGroupCriteria = function() {
  google.ads.adwords.examples.ExampleBase.call(this);
  this.description = 'This code example adds a keyword and a placement to an ' +
      'ad group. To get ad groups, run GetAllAdGroups.js.';
};
goog.inherits(google.ads.adwords.examples.v201101.AddAdGroupCriteria,
    google.ads.adwords.examples.ExampleBase);

/**
 * Runs the code example.
 *
 * @param {google.ads.adwords.AdWordsUser} user AdWords user running the code
 * example.
 * @param {function} callback the callback method to be called once this example
 * is complete.
 */
google.ads.adwords.examples.v201101.AddAdGroupCriteria.prototype.run =
    function(user, callback) {
  // Get the AdGroupCriterionService.
  var adGroupCriterionService = user.getService(
      google.ads.adwords.AdWordsService.v201101.AdGroupCriterionService);

  var adGroupId = this._T('INSERT_AD_GROUP_ID_HERE');

  // Create keyword.
  var keyword = new google.ads.adwords.v201101.Keyword();
  keyword.text = 'mars cruise';
  keyword.matchType = google.ads.adwords.v201101.KeywordMatchType.BROAD;

  // Create biddable ad group criterion.
  var keywordCriterion =
      new google.ads.adwords.v201101.BiddableAdGroupCriterion();
  keywordCriterion.adGroupId = adGroupId;
  keywordCriterion.criterion = keyword;

  // Create placement.
  var placement = new google.ads.adwords.v201101.Placement();
  placement.url = 'http://mars.google.com';

  // Create biddable ad group criterion.
  var placementCriterion =
      new google.ads.adwords.v201101.BiddableAdGroupCriterion();
  placementCriterion.adGroupId = adGroupId;
  placementCriterion.criterion = placement;

  // Create operations.
  var keywordOperation =
      new google.ads.adwords.v201101.AdGroupCriterionOperation();
  keywordOperation.operator = google.ads.adwords.v201101.Operator.ADD;
  keywordOperation.operand = keywordCriterion;

  var placementOperation =
      new google.ads.adwords.v201101.AdGroupCriterionOperation();
  placementOperation.operator = google.ads.adwords.v201101.Operator.ADD;
  placementOperation.operand = placementCriterion;

  try {
    adGroupCriterionService.mutate([keywordOperation, placementOperation],
      goog.bind(function(retval) {
        if (retval && retval.value) {
          for (var i = 0, len = retval.value.length; i < len; i++) {
            var adGroupCriterion = retval.value[i];
            this.writeOutput('Ad group criterion with ad group id = "%s", ' +
                'criterion id = "%s" and type = "%s" was created.',
                adGroupCriterion.adGroupId, adGroupCriterion.criterion.id,
                adGroupCriterion.criterion.CriterionType);
          }
        } else {
          this.writeOutput('No ad group criteria were added.\n');
        }
        callback();
      }, this),
      goog.bind(function(soapException) {
        this.writeOutput('"Failed to create ad group criteria. Soap Fault ' +
            'says "%s"', soapException.getInnerException().getFaultString());
        callback();
      }, this)
    );
  } catch (ex) {
    this.writeOutput('An exception occurred while running the code example.');
    callback();
  }
};
