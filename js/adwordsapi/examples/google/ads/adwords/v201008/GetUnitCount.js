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
 * @fileoverview Defines GetUnitCount, a code example that retrieves the
 * number of API units recorded for the developer token being used to make
 * this call over the given date range.
 */

goog.provide('google.ads.adwords.examples.v201008.GetUnitCount');

goog.require('google.ads.adwords.AdWordsService.v201008');
goog.require('google.ads.adwords.examples.ExampleBase');
goog.require('google.ads.adwords.v201008.ApiUsageType');
goog.require('google.ads.adwords.v201008.DateRange');
goog.require('google.ads.adwords.v201008.InfoSelector');
goog.require('google.ads.adwords.v201008.InfoService');
goog.require('google.ads.adwords.v201008.Operator');
goog.require('google.ads.adwords.v201008.RequestHeader');

/**
 * This code example retrieves the number of API units recorded for the
 * developer token being used to make this call over the given date range.
 *
 * Tags: InfoService.get
 *
 * @constructor
 */
google.ads.adwords.examples.v201008.GetUnitCount = function() {
  google.ads.adwords.examples.ExampleBase.call(this);
  this.description = 'This code example retrieves the number of API units ' +
      'recorded for the developer token being used to make this call over ' +
      'the given date range.';
};
goog.inherits(google.ads.adwords.examples.v201008.GetUnitCount,
    google.ads.adwords.examples.ExampleBase);

/**
 * Runs the code example.
 *
 * @param {google.ads.adwords.AdWordsUser} user AdWords user running the code
 * example.
 * @param {function} callback the callback method to be called once this example
 * is complete.
 */
google.ads.adwords.examples.v201008.GetUnitCount.prototype.run =
    function(user, callback) {
  // Get the InfoService.
  var infoService = user.getService(
      google.ads.adwords.AdWordsService.v201008.InfoService);

  infoService.requestHeader = new google.ads.adwords.v201008.RequestHeader();
  infoService.requestHeader.clientEmail = null;

  // To get results for a different date range, set startDate and endDates to
  // appropriate values.
  var startDate = this.getStartOfMonth();
  var endDate = this.getYesterday();

  var selector = new google.ads.adwords.v201008.InfoSelector();
  selector.apiUsageType =
      google.ads.adwords.v201008.ApiUsageType.UNIT_COUNT;
  selector.dateRange = new google.ads.adwords.v201008.DateRange();
  selector.dateRange.min = startDate;
  selector.dateRange.max = endDate;

  try {
    infoService.get(selector,
      goog.bind(function(info) {
        if (info) {
          this.writeOutput('The total number of API units consumed during ' +
              '"%s" to "%s" is %d".', startDate, endDate, info.cost);
        }
        callback();
      }, this),
      goog.bind(function(soapException) {
        this.writeOutput('Failed to get unit cost. Soap Fault ' +
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
google.ads.adwords.examples.v201008.GetUnitCount.prototype.getYesterday =
    function() {
  var currentTime = new Date();
  currentTime.setDate(currentTime.getDate() - 1);
  var month = currentTime.getMonth() + 1;
  var day = currentTime.getDate();
  var year = currentTime.getFullYear();

  return goog.string.format('%d%02d%02d', year, month, day);
};

/**
 * Gets first day of the current month as a string of the format yyyymmdd.
 *
 * @return {string} first day of current month as a string of the format
 * yyyymmdd.
 */
google.ads.adwords.examples.v201008.GetUnitCount.prototype.
    getStartOfMonth = function() {
  var currentTime = new Date();
  currentTime.setDate(1);
  var month = currentTime.getMonth() + 1;
  var day = currentTime.getDate();
  var year = currentTime.getFullYear();
  return goog.string.format('%d%02d%02d', year, month, day);
};
