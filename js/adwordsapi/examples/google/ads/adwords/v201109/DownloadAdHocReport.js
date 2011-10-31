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
 * @fileoverview Defines DownloadReport, a code example that gets and
 * downloads a report from a report definition.
 */

goog.provide('google.ads.adwords.examples.v201109.DownloadAdHocReport');

goog.require('google.ads.adwords.AdWordsService.v201109');
goog.require('google.ads.adwords.AppConfig');
goog.require('google.ads.adwords.examples.ExampleBase');
goog.require('google.system.net.HttpWebTransportFactory');

/**
 * This example downloads an ad hoc report.
 *
 * @extends google.ads.adwords.examples.ExampleBase
 * @constructor
 */
google.ads.adwords.examples.v201109.DownloadAdHocReport =
    function() {
  google.ads.adwords.examples.ExampleBase.call(this);
  this.description = 'This example downloads an ad hoc report.';
};
goog.inherits(
    google.ads.adwords.examples.v201109.DownloadAdHocReport,
    google.ads.adwords.examples.ExampleBase);

/**
 * Runs the code example.
 *
 * @param {google.ads.adwords.AdWordsUser} user AdWords user running the code
 *     example.
 * @param {function} callback the callback method to be called once this example
 *     is complete.
 */
google.ads.adwords.examples.v201109.DownloadAdHocReport.
    prototype.run = function(user, callback) {
  var downloadUrl =
      'https://adwords.google.com/api/adwords/reportdownload/v201109';

  var config = new google.ads.adwords.AppConfig();
  var authToken = new google.ads.common.AuthToken(config, 'adwords',
      config.getEmail(), config.getPassword());

  authToken.getToken(
    goog.bind(function(token) {
      var request = google.system.net.HttpWebTransportFactory.create(
          config.getHttpWebTransport(), config.getHttpWebTransportSettings());
      var headers = [
        'Authorization: GoogleLogin auth=' + token,
        'returnMoneyInMicros: true'
      ];

      // Create ad group predicate.
      var statusPredicate = new google.ads.adwords.v201109.Predicate();
      statusPredicate.field = 'Status';
      statusPredicate.operator =
          google.ads.adwords.v201109.PredicateOperator.IN;
      statusPredicate.values = ['ENABLED', 'PAUSED'];

      // Create selector.
      var selector = new google.ads.adwords.v201109.Selector();
      selector.fields = ['CampaignId', 'Id', 'Name', 'Impressions', 'Clicks',
                         'Cost'];
      selector.predicates = [statusPredicate];

      // Create report definition.
      var reportDefinition = new google.ads.adwords.v201109.ReportDefinition();
      reportDefinition.reportName = 'Ad group performance report #' +
          this.getTimeStamp();
      reportDefinition.dateRangeType =
          google.ads.adwords.v201109.ReportDefinitionDateRangeType.LAST_7_DAYS;
      reportDefinition.reportType = google.ads.adwords.v201109.
          ReportDefinitionReportType.ADGROUP_PERFORMANCE_REPORT;
      reportDefinition.downloadFormat =
          google.ads.adwords.v201109.DownloadFormat.CSV;
      reportDefinition.includeZeroImpressions = false;
      reportDefinition.selector = selector;

      var content = '__rdxml=' + encodeURIComponent(
          reportDefinition.serializeToString('reportDefinition'));

      request.send(downloadUrl, 'POST', content, headers, 0,
        goog.bind(function(reportCsv) {
          if (window.console) {
            window.console.log(reportCsv);
          }
          this.writeOutput('Report csv written to console.');
          callback();
        }, this),
        goog.bind(function(response) {
          this.writeOutput('Failed to download report');
          callback();
        }, this)
      );
    }, this),
    goog.bind(function(error) {
      this.writeOutput('Failed to get authToken.');
      callback();
    }, this)
  );
};
