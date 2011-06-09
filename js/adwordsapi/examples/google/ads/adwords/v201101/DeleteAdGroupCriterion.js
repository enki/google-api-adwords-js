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
 * @fileoverview Defines DeleteAdGroupCriterion, a code example that deletes an
 * ad group criterion using the 'REMOVE operator.
 */

goog.provide('google.ads.adwords.examples.v201101.DeleteAdGroupCriterion');

goog.require('google.ads.adwords.AdWordsService.v201101');
goog.require('google.ads.adwords.examples.ExampleBase');
goog.require('google.ads.adwords.v201101.AdGroupCriterionOperation');
goog.require('google.ads.adwords.v201101.AdGroupCriterionService');
goog.require('google.ads.adwords.v201101.BiddableAdGroupCriterion');
goog.require('google.ads.adwords.v201101.Keyword');
goog.require('google.ads.adwords.v201101.KeywordMatchType');
goog.require('google.ads.adwords.v201101.Operator');

/**
 * This code example deletes an ad group criterion using the 'REMOVE'
 * operator. To get ad group criteria, run GetAllAdGroupCriteria.js.
 *
 * Tags: AdGroupCriterionService.mutate
 *
 * @extends google.ads.adwords.examples.ExampleBase
 * @constructor
 */

google.ads.adwords.examples.v201101.DeleteAdGroupCriterion = function() {
  google.ads.adwords.examples.ExampleBase.call(this);
  this.description = 'This code example deletes an ad group criterion using ' +
      'the "REMOVE" operator. To get ad group criteria, run ' +
      'GetAllAdGroupCriteria.js.';
};
goog.inherits(google.ads.adwords.examples.v201101.DeleteAdGroupCriterion,
    google.ads.adwords.examples.ExampleBase);

/**
 * Runs the code example.
 *
 * @param {google.ads.adwords.AdWordsUser} user AdWords user running the code
 * example.
 * @param {function} callback the callback method to be called once this example
 * is complete.
 */
google.ads.adwords.examples.v201101.DeleteAdGroupCriterion.prototype.run =
    function(user, callback) {
  // Get the AdGroupCriterionService.
  var adGroupCriterionService = user.getService(
      google.ads.adwords.AdWordsService.v201101.AdGroupCriterionService);

  var adGroupId = this._T('INSERT_AD_GROUP_ID_HERE');
  var criterionId = this._T('INSERT_CRITERION_ID_HERE');

  // Create base class criterion to avoid setting keyword and placement specific
  // fields.
  var criterion = new google.ads.adwords.v201101.Criterion();
  criterion.id = criterionId;

  // Create ad group criterion.
  var adGroupCriterion =
      new google.ads.adwords.v201101.BiddableAdGroupCriterion();
  adGroupCriterion.adGroupId = adGroupId;
  adGroupCriterion.criterion = criterion;

  // Create operations.
  var operation = new google.ads.adwords.v201101.AdGroupCriterionOperation();
  operation.operand = adGroupCriterion;
  operation.operator = google.ads.adwords.v201101.Operator.REMOVE;

  try {
    adGroupCriterionService.mutate([operation],
      goog.bind(function(retval) {
        if (retval && retval.value) {
          for (var i = 0, len = retval.value.length; i < len; i++) {
            var adGroupCriterion = retval.value[i];
            this.writeOutput('Ad group criterion with ad group id = "%s", ' +
                'criterion id = "%s" and type = "%s" was deleted.',
                adGroupCriterion.adGroupId, adGroupCriterion.criterion.id,
                adGroupCriterion.criterion.CriterionType);
          }
        } else {
          this.writeOutput('No ad group criteria were deleted.\n');
        }
        callback();
      }, this),
      goog.bind(function(soapException) {
        this.writeOutput('Failed to delete ad group criteria. Soap Fault ' +
            'says "%s"', soapException.getInnerException().getFaultString());
        callback();
      }, this)
    );
  } catch (ex) {
    this.writeOutput('An exception occurred while running the code example.');
    callback();
  }
};
