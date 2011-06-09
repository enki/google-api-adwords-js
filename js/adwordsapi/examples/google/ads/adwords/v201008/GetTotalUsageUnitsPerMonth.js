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
 * @fileoverview Defines GetTotalUsageUnitsPerMonth, a code example that
 * retrieves the total number of API units for this entire month that can be
 * used by the developer token being used to make this call.
 */

goog.provide('google.ads.adwords.examples.v201008.GetTotalUsageUnitsPerMonth');

goog.require('google.ads.adwords.AdWordsService.v201008');
goog.require('google.ads.adwords.examples.ExampleBase');
goog.require('google.ads.adwords.v201008.ApiUsageType');
goog.require('google.ads.adwords.v201008.InfoSelector');
goog.require('google.ads.adwords.v201008.InfoService');

/**
 * This code example retrieves the total number of API units for this entire
 * month that can be used by the developer token being used to make
 * this call.
 *
 * Tags: InfoService.get
 *
 * @extends google.ads.adwords.examples.ExampleBase
 * @constructor
 */

google.ads.adwords.examples.v201008.GetTotalUsageUnitsPerMonth =
    function() {
  google.ads.adwords.examples.ExampleBase.call(this);
  this.description = 'This code example retrieves the total number of API ' +
      'units for this entire month that can be used by the developer token ' +
      'being used to make this call.';
};
goog.inherits(
    google.ads.adwords.examples.v201008.GetTotalUsageUnitsPerMonth,
    google.ads.adwords.examples.ExampleBase);

/**
 * Runs the code example.
 *
 * @param {google.ads.adwords.AdWordsUser} user AdWords user running the code
 * example.
 * @param {function} callback the callback method to be called once this example
 * is complete.
 */
google.ads.adwords.examples.v201008.GetTotalUsageUnitsPerMonth.prototype.
    run = function(user, callback) {
  // Get the InfoService.
  var infoService = user.getService(
      google.ads.adwords.AdWordsService.v201008.InfoService);

  var selector = new google.ads.adwords.v201008.InfoSelector();
  selector.apiUsageType = google.ads.adwords.v201008.ApiUsageType.
      TOTAL_USAGE_API_UNITS_PER_MONTH;

  try {
    infoService.get(selector,
      goog.bind(function(info) {
        if (info) {
          this.writeOutput('The total number of API units available this ' +
              'month is "%d".', info.cost);
        }
        callback();
      }, this),
      goog.bind(function(soapException) {
        this.writeOutput('Failed to get available api units. Soap Fault ' +
            'says "%s"', soapException.getInnerException().getFaultString());
        callback();
      }, this)
    );
  } catch (ex) {
    this.writeOutput('An exception occurred while running the code example.');
    callback();
  }
};
