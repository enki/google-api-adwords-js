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
 * @fileoverview Defines GetReportFields, a code example that gets report
 *     fields.
 */

goog.provide('google.ads.adwords.examples.v201008.GetReportFields');

goog.require('google.ads.adwords.AdWordsService.v201008');
goog.require('google.ads.adwords.examples.ExampleBase');
goog.require('google.ads.adwords.v201008.ReportDefinitionService');

/**
 * This code example gets report fields.
 *
 * Tags: ReportDefinitionService.getReportFields
 *
 * @extends google.ads.adwords.examples.ExampleBase
 * @constructor
 */
google.ads.adwords.examples.v201008.GetReportFields = function() {
  google.ads.adwords.examples.ExampleBase.call(this);
  /**
  * Example description.
  * @type {string}
  */
  this.description = 'This code example gets report fields.';
};
goog.inherits(google.ads.adwords.examples.v201008.GetReportFields,
    google.ads.adwords.examples.ExampleBase);

/**
 * Runs the code example.
 *
 * @param {google.ads.adwords.AdWordsUser} user AdWords user running the code
 *     example.
 * @param {function} callback the callback method to be called once this example
 *     is complete.
 */
google.ads.adwords.examples.v201008.GetReportFields.prototype.run =
    function(user, callback) {
  // Get the ReportDefinitionService.
  var reportDefinitionService = user.getService(
      google.ads.adwords.AdWordsService.v201008.ReportDefinitionService);

  var reportType = this._T('INSERT_REPORT_TYPE_HERE');

  try {
    // Get report fields.
    reportDefinitionService.getReportFields(reportType,
      goog.bind(function(reportDefinitionFields) {
        if (reportDefinitionFields && reportDefinitionFields.length > 0) {
          // Display report fields.
          this.writeOutput('The report type "%s" contains the following ' +
              'fields:', reportType);

          for (var i = 0, len = reportDefinitionFields.length; i < len; i++) {
            var reportDefinitionField = reportDefinitionFields[i];
            var output = goog.string.format('- %s (%s)',
                reportDefinitionField.fieldName,
                reportDefinitionField.fieldType);
            if (reportDefinitionField.enumValues) {
              output += goog.string.format(' := [%s]',
                  reportDefinitionField.enumValues.join(', '));
            }
            this.writeOutput(output);
          }
        } else {
          this.writeOutput('This report type has no fields.');
        }
        callback();
      }, this),
      goog.bind(function(soapException) {
        this.writeOutput('Failed to retrieve report fields. Soap Fault says ' +
            '"%s"', soapException.getInnerException().getFaultString());
        callback();
      }, this)
    );
  } catch (ex) {
    this.writeOutput('An exception occurred while running the code example.');
    callback();
  }
};
