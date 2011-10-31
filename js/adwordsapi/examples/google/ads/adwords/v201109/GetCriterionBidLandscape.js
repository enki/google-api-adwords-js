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
 * @author api.davidtorres@gmail.com (David Torres)
 */

/**
 * @fileoverview Defines GetCriterionBidLandscape, a code example that gets a
 *     bid landscape for an ad group and a criterion.
 */

goog.provide('google.ads.adwords.examples.v201109.GetCriterionBidLandscape');

goog.require('google.ads.adwords.AdWordsService.v201109');
goog.require('google.ads.adwords.examples.ExampleBase');
goog.require('google.ads.adwords.v201109.DataService');

/**
 * This code example gets a bid landscape for an ad group and a criterion.
 * To get ad groups, run GetAllAdGroups.js. To get criteria, run
 * GetAllAdGroupCriteria.js.
 *
 * Tags: BidLandscapeService.getBidLandscape
 *
 * @extends google.ads.adwords.examples.ExampleBase
 * @constructor
 */
google.ads.adwords.examples.v201109.GetCriterionBidLandscape = function() {
  google.ads.adwords.examples.ExampleBase.call(this);
  this.description = 'This code example gets a bid landscape for an ad group' +
      ' and a criterion. To get ad groups, run GetAllAdGroups.js. To get ' +
      'criteria, run GetAllAdGroupCriteria.js.';
};
goog.inherits(google.ads.adwords.examples.v201109.GetCriterionBidLandscape,
    google.ads.adwords.examples.ExampleBase);

/**
 * Runs the code example.
 *
 * @param {google.ads.adwords.AdWordsUser} user AdWords user running the code
 *     example.
 * @param {function} callback the callback method to be called once this example
 *     is complete.
 */
google.ads.adwords.examples.v201109.GetCriterionBidLandscape.prototype.run =
    function(user, callback) {
  // Get the BidLandscapeService.
  var dataService = user.getService(
      google.ads.adwords.AdWordsService.v201109.DataService);

  var adGroupId = this._T('INSERT_ADGROUP_ID_HERE');
  var criterionId = this._T('INSERT_CRITERION_ID_HERE');

  // Create the selector.
  var selector = new google.ads.adwords.v201109.Selector();
  selector.fields = ['AdGroupId', 'CriterionId', 'StartDate', 'EndDate', 'Bid',
      'LocalClicks', 'LocalCost', 'MarginalCpc', 'LocalImpressions'];

  // Create the filters.
  var adGroupPredicate = new google.ads.adwords.v201109.Predicate();
  adGroupPredicate.field = 'AdGroupId';
  adGroupPredicate.operator = google.ads.adwords.v201109.PredicateOperator.IN;
  adGroupPredicate.values = [adGroupId];

  var criterionPredicate = new google.ads.adwords.v201109.Predicate();
  criterionPredicate.field = 'CriterionId';
  criterionPredicate.operator = google.ads.adwords.v201109.PredicateOperator.IN;
  criterionPredicate.values = [criterionId];

  selector.predicates = [adGroupPredicate, criterionPredicate];

  try {
    // Get bid landscape for ad group criteria.
    dataService.getCriterionBidLandscape(selector,
      goog.bind(function(bidLandscapes) {
        // Display bid landscapes.
        if (bidLandscapes && bidLandscapes.length > 0) {
          for (var i = 0, len = bidLandscapes.length; i < len; i++) {
            var bidLandscape = bidLandscapes[i];
            if (bidLandscape instanceof google.ads.adwords.v201109.
                CriterionBidLandscape) {
              var message = goog.string.format('Found criterion bid landscape' +
                  ' with ad group id "%d", criterion id "%d", start date ' +
                  '"%s", end date "%s", and landscape points:\n',
                  bidLandscape.adGroupId, bidLandscape.criterionId,
                  bidLandscape.startDate, bidLandscape.endDate);

              for (var j = 0, len1 = bidLandscape.landscapePoints.length;
                  j < len1; j++) {
                var bidLandscapePoint = bidLandscape.landscapePoints[j];
                message += goog.string.format(' - bid: %d => clicks: %d, ' +
                    'cost: %d, marginalCpc: %d, impressions: %d',
                    bidLandscapePoint.bid.microAmount, bidLandscapePoint.clicks,
                    bidLandscapePoint.cost.microAmount,
                    bidLandscapePoint.marginalCpc.microAmount,
                    bidLandscapePoint.impressions);
              }
              this.writeOutput(message);
            }
          }
        } else {
          this.writeOutput('No criterion bid landscapes were found.');
        }
        callback();
      }, this),
      goog.bind(function(soapException) {
        this.writeOutput('Failed to get criterion bid landscape. Soap Fault ' +
            'says "%s"', soapException.getInnerException().getFaultString());
        callback();
      }, this)
    );
  } catch (ex) {
    this.writeOutput('An exception occurred while running the code example.');
    callback();
  }
};
