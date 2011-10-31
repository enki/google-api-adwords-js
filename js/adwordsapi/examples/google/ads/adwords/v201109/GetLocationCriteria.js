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
 * @fileoverview Defines GetLocationCriteria, a code example that
 * gets location criteria by name.
 */

goog.provide('google.ads.adwords.examples.v201109.GetLocationCriteria');

goog.require('google.ads.adwords.AdWordsService.v201109');
goog.require('google.ads.adwords.examples.ExampleBase');
goog.require('google.ads.adwords.v201109.LocationCriterionService');
goog.require('google.ads.adwords.v201109.Predicate');
goog.require('google.ads.adwords.v201109.PredicateOperator');
goog.require('google.ads.adwords.v201109.Selector');

/**
 * This example gets location criteria by name.
 *
 * Tags: LocationCriterionSerivce.get
 *
 * @extends google.ads.adwords.examples.ExampleBase
 * @constructor
 */
google.ads.adwords.examples.v201109.GetLocationCriteria = function() {
  google.ads.adwords.examples.ExampleBase.call(this);
  this.description = 'This example gets location criteria by name.';
};
goog.inherits(google.ads.adwords.examples.v201109.GetLocationCriteria,
    google.ads.adwords.examples.ExampleBase);

/**
 * Runs the code example.
 *
 * @param {google.ads.adwords.AdWordsUser} user AdWords user running the code
 *     example.
 * @param {function} callback the callback method to be called once this example
 *     is complete.
 */
google.ads.adwords.examples.v201109.GetLocationCriteria.prototype.run =
    function(user, callback) {

  // Get the LocationCriterionService.
  var locationCriterionService = user.getService(
      google.ads.adwords.AdWordsService.v201109.LocationCriterionService);

  // Create a selector.
  var selector = new google.ads.adwords.v201109.Selector();
  selector.fields = ['Id', 'LocationName', 'CanonicalName',
                     'DisplayType', 'ParentLocations', 'Reach'];

  // Set conditions.
  var predicate1 = new google.ads.adwords.v201109.Predicate();
  predicate1.field = 'LocationName';
  predicate1.operator = google.ads.adwords.v201109.PredicateOperator.IN;
  predicate1.values = ['Paris', 'Quebec', 'Spain', 'Deutschland'];

  var predicate2 = new google.ads.adwords.v201109.Predicate();
  predicate2.field = 'Locale';
  predicate2.operator = google.ads.adwords.v201109.PredicateOperator.EQUALS;
  predicate2.values = ['en'];

  selector.predicates = [predicate1, predicate2];

  try {
    locationCriterionService.get(selector,
      goog.bind(function(locationCriteria) {
        if (locationCriteria) {
          for (var i = 0; i < locationCriteria.length; i++) {
            var locationCriterion = locationCriteria[i];
            var location = locationCriterion.location;
            var parentLocationsOutput = [];

            if (location.parentLocations) {
              var parentLocations = location.parentLocations;
              for (var j = 0; j < parentLocations.length; j++) {
                var parentLocation = parentLocations[j];
                parentLocationsOutput.push(parentLocation.locationName + ' (' +
                    parentLocation.displayType + ')');
              }
            }
            this.writeOutput('The search term "%s" returned the location "%s"' +
                ' of type "%s" with parent locations "%s" and reach "%s".',
                locationCriterion.searchTerm, location.locationName,
                location.displayType, parentLocationsOutput.join(", "),
                locationCriterion.reach);
          }
        } else {
          this.writeOutput('No location criteria found.');
        }
        callback();
      }, this),
      goog.bind(function(soapException) {
        this.writeOutput('Failed to get criteria. Soap Fault says "%s"',
            soapException.getInnerException().getFaultString());
        callback();
      }, this)
    );
  } catch (ex) {
    this.writeOutput('An exception occurred while running the code example.');
    callback();
  }
};
