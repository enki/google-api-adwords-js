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
 * @fileoverview Defines GetClientCustomerId, a code example that illustrates
 * how to find a client customer ID for a client email.
 */

goog.provide('google.ads.adwords.examples.v201109.GetClientCustomerId');

goog.require('google.ads.adwords.AdWordsService.v201109');
goog.require('google.ads.adwords.examples.ExampleBase');
goog.require('google.ads.adwords.v201109.ApiUsageType');
goog.require('google.ads.adwords.v201109.DateRange');
goog.require('google.ads.adwords.v201109.InfoSelector');
goog.require('google.ads.adwords.v201109.InfoService');
goog.require('google.ads.adwords.v201109.Operator');

/**
 * This example illustrates how to find a client customer ID for a client email.
 * We recommend to use this script as a one off to convert your identifiers to
 * IDs and store them for future use.
 *
 * Tags: InfoService.get
 *
 * @extends google.ads.adwords.examples.ExampleBase
 * @constructor
 */
google.ads.adwords.examples.v201109.GetClientCustomerId = function() {
  google.ads.adwords.examples.ExampleBase.call(this);
  this.description = 'This example illustrates how to find a client customer ' +
      'ID for a client email. We recommend to use this script as a one off ' +
      'to convert your identifiers to IDs and store them for future use.';
};
goog.inherits(google.ads.adwords.examples.v201109.GetClientCustomerId,
    google.ads.adwords.examples.ExampleBase);

/**
 * Runs the code example.
 *
 * @param {google.ads.adwords.AdWordsUser} user AdWords user running the code
 *     example.
 * @param {function} callback the callback method to be called once this example
 *     is complete.
 */
google.ads.adwords.examples.v201109.GetClientCustomerId.prototype.run =
    function(user, callback) {
  // Get the InfoService.
  var infoService = user.getService(
      google.ads.adwords.AdWordsService.v201109.InfoService);

  var clientEmail = this._T('INSERT_EMAIL_ADDRESS_HERE');

  var selector = new google.ads.adwords.v201109.InfoSelector();
  selector.clientEmails = [clientEmail];
  selector.apiUsageType =
      google.ads.adwords.v201109.ApiUsageType.UNIT_COUNT_FOR_CLIENTS;
  selector.dateRange = new google.ads.adwords.v201109.DateRange();
  selector.dateRange.min = this.now();
  selector.dateRange.max = this.now();
  selector.includeSubAccounts = true;

  try {
    infoService.get(selector,
      goog.bind(function(info) {
        if (info && info.apiUsageRecords) {
          for (var i = 0; i < info.apiUsageRecords.length; i++) {
            var record = info.apiUsageRecords[i];
            this.writeOutput('Found record with client email "%s" and ID %s.',
                record.clientEmail, record.clientCustomerId);
          }
        } else {
          this.writeOutput('No record found record that matches client email ' +
              '"%s"', clientEmail);
        }
      callback();
      }, this),
      goog.bind(function(soapException) {
        this.writeOutput('Failed to get client id. Soap Fault ' +
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
 * Gets now date as a string of the format yyyymmdd.
 *
 * @return {string} yesterday's date as a string of the format yyyymmdd.
 */
google.ads.adwords.examples.v201109.GetClientCustomerId.prototype.now =
    function() {
  var currentTime = new Date();
  var month = currentTime.getMonth() + 1;
  var day = currentTime.getDate();
  var year = currentTime.getFullYear();
  return goog.string.format('%d%02d%02d', year, month, day);
};
