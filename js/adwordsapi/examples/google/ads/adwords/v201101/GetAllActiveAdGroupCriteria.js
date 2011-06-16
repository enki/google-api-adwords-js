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
 * @fileoverview Defines GetAllActiveAdGroupCriteria, a code example that gets
 *     all active ad group criteria in an ad group.
 */

goog.provide('google.ads.adwords.examples.v201101.GetAllActiveAdGroupCriteria');

goog.require('google.ads.adwords.AdWordsService.v201101');
goog.require('google.ads.adwords.examples.ExampleBase');
goog.require('google.ads.adwords.v201101.AdGroupCriterionService');
goog.require('google.ads.adwords.v201101.Keyword');
goog.require('google.ads.adwords.v201101.Placement');
goog.require('google.ads.adwords.v201101.Predicate');
goog.require('google.ads.adwords.v201101.Selector');
goog.require('google.ads.adwords.v201101.UserStatus');

/**
 * This code example gets all active ad group criteria in an ad group. To
 * add ad group criteria, run AddAdGroupCriteria.js. To get ad groups in an
 * account, run GetAllAdGroups.js.
 *
 * Tags: AdGroupCriterionService.get
 *
 * @extends google.ads.adwords.examples.ExampleBase
 * @constructor
 */

google.ads.adwords.examples.v201101.GetAllActiveAdGroupCriteria = function() {
  google.ads.adwords.examples.ExampleBase.call(this);
  this.description = 'This code example gets all active ad group criteria ' +
      'in an ad group. To add ad group criteria, run AddAdGroupCriteria.js. ' +
      'To get ad groups in an account, run GetAllAdGroups.js.';
};
goog.inherits(google.ads.adwords.examples.v201101.GetAllActiveAdGroupCriteria,
    google.ads.adwords.examples.ExampleBase);

/**
 * Runs the code example.
 *
 * @param {google.ads.adwords.AdWordsUser} user AdWords user running the code
 *     example.
 * @param {function} callback the callback method to be called once this example
 *     is complete.
 */
google.ads.adwords.examples.v201101.GetAllActiveAdGroupCriteria.prototype.run =
    function(user, callback) {
  // Get the AdGroupCriterionService.
  var adGroupCriterionService = user.getService(
      google.ads.adwords.AdWordsService.v201101.AdGroupCriterionService);

  var adGroupId = this._T('INSERT_ADGROUP_ID_HERE');

  // Create a selector.
  var selector = new google.ads.adwords.v201101.Selector();
  selector.fields = ['Id', 'AdGroupId', 'KeywordText', 'Status',
      'KeywordMatchType', 'PlacementUrl'];

  // Set filter conditions.
  var adGroupPredicate = new google.ads.adwords.v201101.Predicate();
  adGroupPredicate.field = 'AdGroupId';
  adGroupPredicate.operator = google.ads.adwords.v201101.PredicateOperator.IN;
  adGroupPredicate.values = [adGroupId];

  var statusPredicate = new google.ads.adwords.v201101.Predicate();
  statusPredicate.field = 'Status';
  statusPredicate.operator =
      google.ads.adwords.v201101.PredicateOperator.EQUALS;
  statusPredicate.values = [google.ads.adwords.v201101.UserStatus.ACTIVE];

  selector.predicates = [adGroupPredicate, statusPredicate];

  try {
    adGroupCriterionService.get(selector,
      goog.bind(function(page) {
        if (page && page.entries && page.entries.length > 0) {
          // Display ad group criteria.
          for (var i = 0, len = page.entries.length; i < len; i++) {
            var adGroupCriterion = page.entries[i];
            var criterion = adGroupCriterion.criterion;
            if (criterion instanceof google.ads.adwords.v201101.Keyword) {
              this.writeOutput('Keyword ad group criterion with ad group ' +
                  'ID = "%s", criterion ID = "%s", text = "%s" and ' +
                  'matchType = "%s" was found.', adGroupCriterion.adGroupId,
                  criterion.id, criterion.text, criterion.matchType);
            } else if (criterion instanceof google.ads.adwords.v201101.
                Placement) {
              this.writeOutput('Placement ad group criterion with ad ' +
                  'group ID = "%s", criterion ID = "%s" and url = "%s"' +
                  ' was found.', adGroupCriterion.adGroupId, criterion.id,
                  criterion.url);
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
