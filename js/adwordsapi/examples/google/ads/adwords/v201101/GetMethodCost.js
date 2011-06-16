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
 * @fileoverview Defines GetMethodCost, a code example that retrieves the
 *     cost, in API units per operation, of the given method on a specific date
 *     for the developer token being used to make this call.
 */

goog.provide('google.ads.adwords.examples.v201101.GetMethodCost');

goog.require('google.ads.adwords.AdWordsService.v201101');
goog.require('google.ads.adwords.examples.ExampleBase');
goog.require('google.ads.adwords.v201101.ApiUsageType');
goog.require('google.ads.adwords.v201101.DateRange');
goog.require('google.ads.adwords.v201101.InfoSelector');
goog.require('google.ads.adwords.v201101.InfoService');
goog.require('google.ads.adwords.v201101.Operator');

/**
 * This code example retrieves the cost, in API units per operation, of the
 * given method on a specific date for the developer token being used to
 * make this call.
 *
 * Tags: InfoService.get
 *
 * @extends google.ads.adwords.examples.ExampleBase
 * @constructor
 */
google.ads.adwords.examples.v201101.GetMethodCost = function() {
  google.ads.adwords.examples.ExampleBase.call(this);
  this.description = 'This code example retrieves the cost, in API units per' +
      ' operation, of the given method on a specific date for the developer ' +
      'token being used to make this call.';
};
goog.inherits(google.ads.adwords.examples.v201101.GetMethodCost,
    google.ads.adwords.examples.ExampleBase);

/**
 * Runs the code example.
 *
 * @param {google.ads.adwords.AdWordsUser} user AdWords user running the code
 *     example.
 * @param {function} callback the callback method to be called once this example
 *     is complete.
 */
google.ads.adwords.examples.v201101.GetMethodCost.prototype.run =
    function(user, callback) {
  // Get the InfoService.
  var infoService = user.getService(
      google.ads.adwords.AdWordsService.v201101.InfoService);

  var selector = new google.ads.adwords.v201101.InfoSelector();

  var serviceName = 'AdGroupService';
  var methodName = 'mutate';
  var operator = google.ads.adwords.v201101.Operator.SET;
  var yesterdayText = this.getYesterday();

  var selector = new google.ads.adwords.v201101.InfoSelector();
  selector.apiUsageType = google.ads.adwords.v201101.ApiUsageType.METHOD_COST;
  selector.dateRange = new google.ads.adwords.v201101.DateRange();
  selector.dateRange.min = yesterdayText;
  selector.dateRange.max = yesterdayText;
  selector.serviceName = serviceName;
  selector.methodName = methodName;
  selector.operator = operator;

  try {
    infoService.get(selector,
      goog.bind(function(info) {
        if (info) {
          this.writeOutput('The cost of "%s.%s.%s" on %s is %d API units.',
              serviceName, methodName, operator, yesterdayText, info.cost);
        }
      callback();
      }, this),
      goog.bind(function(soapException) {
        this.writeOutput('Failed to get method cost. Soap Fault ' +
            'says "%s"', soapException.getInnerException().getFaultString());
        callback();
      }, this)
    );
  } catch (ex) {
    this.writeOutput('An exception occurred while running the code example.');
    callback();
  }
};

/**
 * Gets yesterday's date as a string of the format yyyymmdd.
 *
 * @return {string} yesterday's date as a string of the format yyyymmdd.
 */
google.ads.adwords.examples.v201101.GetMethodCost.prototype.getYesterday =
    function() {
  var currentTime = new Date();
  currentTime.setDate(currentTime.getDate() - 1);
  var month = currentTime.getMonth() + 1;
  var day = currentTime.getDate();
  var year = currentTime.getFullYear();
  return goog.string.format('%d%02d%02d', year, month, day);
};
