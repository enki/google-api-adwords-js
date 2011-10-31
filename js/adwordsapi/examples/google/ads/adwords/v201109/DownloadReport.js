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
 *     downloads a report from a report definition.
 */

goog.provide('google.ads.adwords.examples.v201109.DownloadReport');

goog.require('google.ads.adwords.AdWordsService.v201109');
goog.require('google.ads.adwords.AppConfig');
goog.require('google.ads.adwords.examples.ExampleBase');
goog.require('google.system.net.HttpWebTransportFactory');

/**
 * This code example gets and downloads a report from a report definition.
 * To get a report definition, run AddKeywordsPerformanceReportDefinition.js.
 * Currently, there is only production support for report download.
 *
 * @extends google.ads.adwords.examples.ExampleBase
 * @constructor
 */
google.ads.adwords.examples.v201109.DownloadReport =
    function() {
  google.ads.adwords.examples.ExampleBase.call(this);
  this.description = 'This code example gets and downloads a report from a ' +
      'report definition. To get a report definition, run ' +
      'AddKeywordsPerformanceReportDefinition.js. Currently, there is only ' +
      'production support for report download.';
};
goog.inherits(
    google.ads.adwords.examples.v201109.DownloadReport,
    google.ads.adwords.examples.ExampleBase);

/**
 * Runs the code example.
 *
 * @param {google.ads.adwords.AdWordsUser} user AdWords user running the code
 *     example.
 * @param {function} callback the callback method to be called once this example
 *     is complete.
 */
google.ads.adwords.examples.v201109.DownloadReport.
    prototype.run = function(user, callback) {
  var reportDefinitionId = this._T('INSERT_REPORT_DEFINITION_ID_HERE');

  var downloadUrl = 'https://adwords.google.com/api/adwords/reportdownload?' +
      '__rd=' + reportDefinitionId;

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

      if (request) {
        request.send(downloadUrl, 'GET', null, headers, 0,
          goog.bind(function(reportXml) {
            if (window.console) {
              window.console.log(reportXml);
            }
            this.writeOutput('Report xml written to console.');
            callback();
          }, this),
          goog.bind(function(response) {
            this.writeOutput('Failed to download report');
            callback();
          }, this)
        );
      }
    }, this),
    goog.bind(function(error) {
      this.writeOutput('Failed to get authToken.');
      callback();
    }, this)
  );
};
