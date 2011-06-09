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
 * @fileoverview Defines AddKeywordsPerformanceReportDefinition, a code example
 * that adds a keywords performance report.
 */

goog.provide('google.ads.adwords.examples.v201101.AddKeywordsPerformanceReportDefinition');

goog.require('google.ads.adwords.AdWordsService.v201101');
goog.require('google.ads.adwords.examples.ExampleBase');
goog.require('google.ads.adwords.v201101.DateRange');
goog.require('google.ads.adwords.v201101.DownloadFormat');
goog.require('google.ads.adwords.v201101.Operator');
goog.require('google.ads.adwords.v201101.Predicate');
goog.require('google.ads.adwords.v201101.PredicateOperator');
goog.require('google.ads.adwords.v201101.ReportDefinition');
goog.require('google.ads.adwords.v201101.ReportDefinitionDateRangeType');
goog.require('google.ads.adwords.v201101.ReportDefinitionOperation');
goog.require('google.ads.adwords.v201101.ReportDefinitionReportType');
goog.require('google.ads.adwords.v201101.ReportDefinitionService');
goog.require('google.ads.adwords.v201101.Selector');

/**
 * This code example adds a keywords performance report. To get ad groups,
 * run GetAllAdGroups.js. To get report fields, run GetReportFields.js.
 *
 * Tags: ReportDefinitionService.mutate
 *
 * @extends google.ads.adwords.examples.ExampleBase
 * @constructor
 */
google.ads.adwords.examples.v201101.AddKeywordsPerformanceReportDefinition =
    function() {
  google.ads.adwords.examples.ExampleBase.call(this);
  this.description = 'This code example adds a keywords performance report. ' +
      'To get ad groups, run GetAllAdGroups.js. To get report fields, run ' +
      'GetReportFields.js.';
};
goog.inherits(
    google.ads.adwords.examples.v201101.AddKeywordsPerformanceReportDefinition,
    google.ads.adwords.examples.ExampleBase);

/**
 * Runs the code example.
 *
 * @param {google.ads.adwords.AdWordsUser} user AdWords user running the code
 * example.
 * @param {function} callback the callback method to be called once this example
 * is complete.
 */
google.ads.adwords.examples.v201101.AddKeywordsPerformanceReportDefinition.
    prototype.run = function(user, callback) {
  // Get the ReportDefinitionService.
  var reportDefinitionService = user.getService(
      google.ads.adwords.AdWordsService.v201101.ReportDefinitionService);

  var adGroupId = this._T('INSERT_AD_GROUP_ID_HERE');
  var startDate = this._T('INSERT_START_DATE_HERE');
  var endDate = this._T('INSERT_END_DATE_HERE');

  // Create ad group predicate.
  var adGroupPredicate = new google.ads.adwords.v201101.Predicate();
  adGroupPredicate.field = 'AdGroupId';
  adGroupPredicate.operator =
      google.ads.adwords.v201101.PredicateOperator.EQUALS;
  adGroupPredicate.values = [adGroupId];

  // Create selector.
  var selector = new google.ads.adwords.v201101.Selector();
  selector.fields = ['AdGroupId', 'Id', 'KeywordText', 'KeywordMatchType',
      'Impressions', 'Clicks', 'Cost'];
  selector.predicates = [adGroupPredicate];
  selector.dateRange = new google.ads.adwords.v201101.DateRange();
  selector.dateRange.min = startDate;
  selector.dateRange.max = endDate;

  // Create report definition.
  var reportDefinition = new google.ads.adwords.v201101.ReportDefinition();
  reportDefinition.reportName = 'Keywords performance report #' +
      this.getTimeStamp();
  reportDefinition.dateRangeType =
      google.ads.adwords.v201101.ReportDefinitionDateRangeType.CUSTOM_DATE;
  reportDefinition.reportType = google.ads.adwords.v201101.
      ReportDefinitionReportType.KEYWORDS_PERFORMANCE_REPORT;
  reportDefinition.downloadFormat =
      google.ads.adwords.v201101.DownloadFormat.XML;
  reportDefinition.selector = selector;

  // Create operations.
  var operation = new google.ads.adwords.v201101.ReportDefinitionOperation();
  operation.operand = reportDefinition;
  operation.operator = google.ads.adwords.v201101.Operator.ADD;

  try {
    // Add report definition.
    reportDefinitionService.mutate([operation],
      goog.bind(function(result) {
        // Display report definitions.
        if (result && result.length > 0) {
          this.writeOutput('Report definition with name "%s" and id "%d" ' +
              'was added.', result[0].reportName, result[0].id);
        } else {
          this.writeOutput('No report definitions were added.');
        }
        callback();
      }, this),
      goog.bind(function(soapException) {
        this.writeOutput('Failed to create keyword performance report. Soap ' +
            'Fault says "%s"', soapException.getInnerException().
            getFaultString());
        callback();
      }, this)
    );
  } catch (ex) {
    this.writeOutput('An exception occurred while running the code example.');
    callback();
  }
};
