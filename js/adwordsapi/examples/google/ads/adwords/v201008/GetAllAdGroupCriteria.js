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
 * @fileoverview Defines GetAllAdGroupCriteria, a code example that gets all
 * ad group criteria in an account.
 */

goog.provide('google.ads.adwords.examples.v201008.GetAllAdGroupCriteria');

goog.require('google.ads.adwords.AdWordsService.v201008');
goog.require('google.ads.adwords.examples.ExampleBase');
goog.require('google.ads.adwords.v201008.AdGroupCriterionSelector');
goog.require('google.ads.adwords.v201008.AdGroupCriterionService');
goog.require('google.ads.adwords.v201008.Keyword');
goog.require('google.ads.adwords.v201008.NegativeAdGroupCriterion');
goog.require('google.ads.adwords.v201008.Placement');

/**
 * This code example gets all ad group criteria in an account. To add ad
 * group criteria, run AddAdGroupCriteria.js.
 *
 * Tags: AdGroupCriterionService.get
 *
 * @extends google.ads.adwords.examples.ExampleBase
 * @constructor
 */
google.ads.adwords.examples.v201008.GetAllAdGroupCriteria = function() {
  google.ads.adwords.examples.ExampleBase.call(this);
  this.description = 'This code example gets all ad group criteria in an ' +
      'account. To add ad group criteria, run AddAdGroupCriteria.js.';
};
goog.inherits(google.ads.adwords.examples.v201008.GetAllAdGroupCriteria,
    google.ads.adwords.examples.ExampleBase);

/**
 * Runs the code example.
 *
 * @param {google.ads.adwords.AdWordsUser} user AdWords user running the code
 * example.
 * @param {function} callback the callback method to be called once this example
 * is complete.
 */
google.ads.adwords.examples.v201008.GetAllAdGroupCriteria.prototype.run =
    function(user, callback) {
  // Get the AdGroupCriterionService.
  var adGroupCriterionService = user.getService(
      google.ads.adwords.AdWordsService.v201008.AdGroupCriterionService);

  var selector = new google.ads.adwords.v201008.AdGroupCriterionSelector();

  try {
    adGroupCriterionService.get(selector,
      goog.bind(function(page) {
        if (page && page.entries && page.entries.length > 0) {
          // Display ad group criteria.
          for (var i = 0, len = page.entries.length; i < len; i++) {
            var adGroupCriterion = page.entries[i];
            var isNegative = (adGroupCriterion instanceof google.ads.adwords.
                v201008.NegativeAdGroupCriterion);
            var criterion = adGroupCriterion.criterion;
            if (criterion instanceof google.ads.adwords.v201008.Keyword) {
              if (isNegative) {
                this.writeOutput('Negative keyword ad group criterion with ' +
                    'ad group ID = "%s", criterion ID = "%s", and text = ' +
                    '"%s" was found.', adGroupCriterion.adGroupId, criterion.id,
                    criterion.text);
              } else {
                this.writeOutput('Keyword ad group criterion with ad group ' +
                    'ID = "%s", criterion ID = "%s", text = "%s" and ' +
                    'matchType = "%s" was found.', adGroupCriterion.adGroupId,
                    criterion.id, criterion.text, criterion.matchType);
              }
            } else if (criterion instanceof google.ads.adwords.v201008.
                Placement) {
              if (isNegative) {
                this.writeOutput('Negative placement ad group criterion ' +
                    'with ad group ID = "%s", criterion ID = "%s" and url ' +
                    '= "%s" was found.', adGroupCriterion.adGroupId,
                    criterion.id, criterion.url);
              } else {
                this.writeOutput('Placement ad group criterion with ad ' +
                    'group ID = "%s", criterion ID = "%s" and url = "%s"' +
                    ' was found.', adGroupCriterion.adGroupId, criterion.id,
                    criterion.url);
              }
            }
          }
        } else {
          this.writeOutput('No ad group criteria found.');
        }
        callback();
      }, this),
      goog.bind(function(soapException) {
        this.writeOutput('Failed to get ad group criteria. Soap Fault ' +
            'says "%s"', soapException.getInnerException().getFaultString());
        callback();
      }, this)
    );
  } catch (ex) {
    this.writeOutput('An exception occurred while running the code example.');
    callback();
  }
};
