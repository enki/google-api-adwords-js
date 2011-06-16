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
 * @fileoverview Defines GetCampaignAlerts, a code example that illustrates
 *     how to retrieve campaign alerts for a user.
 */

goog.provide('google.ads.adwords.examples.v201101.GetCampaignAlerts');

goog.require('google.ads.adwords.AdWordsService.v201101');
goog.require('google.ads.adwords.examples.ExampleBase');
goog.require('google.ads.adwords.v201101.AlertQuery');
goog.require('google.ads.adwords.v201101.AlertSelector');
goog.require('google.ads.adwords.v201101.AlertService');
goog.require('google.ads.adwords.v201101.AlertSeverity');
goog.require('google.ads.adwords.v201101.AlertType');
goog.require('google.ads.adwords.v201101.ClientSpec');
goog.require('google.ads.adwords.v201101.FilterSpec');
goog.require('google.ads.adwords.v201101.Paging');
goog.require('google.ads.adwords.v201101.TriggerTimeSpec');

/**
 * This code example illustrates how to retrieve campaign alerts for a user.
 * The alerts are restricted to a maximum of 10 entries.
 *
 * Tags: AlertService.get
 *
 * @extends google.ads.adwords.examples.ExampleBase
 * @constructor
 */
google.ads.adwords.examples.v201101.GetCampaignAlerts = function() {
  google.ads.adwords.examples.ExampleBase.call(this);
  this.description = 'This code example illustrates how to retrieve campaign' +
      ' alerts for a user. The alerts are restricted to a maximum of ' +
      '10 entries.';
};
goog.inherits(google.ads.adwords.examples.v201101.GetCampaignAlerts,
    google.ads.adwords.examples.ExampleBase);

/**
 * Runs the code example.
 *
 * @param {google.ads.adwords.AdWordsUser} user AdWords user running the code
 *     example.
 * @param {function} callback the callback method to be called once this example
 *     is complete.
 */
google.ads.adwords.examples.v201101.GetCampaignAlerts.prototype.run =
    function(user, callback) {
  // Get the AlertService.
  var alertService = user.getService(
      google.ads.adwords.AdWordsService.v201101.AlertService);

  // Create the alert query.
  var query = new google.ads.adwords.v201101.AlertQuery();
  query.filterSpec = google.ads.adwords.v201101.FilterSpec.ALL;
  query.clientSpec = google.ads.adwords.v201101.ClientSpec.ALL;
  query.triggerTimeSpec = google.ads.adwords.v201101.TriggerTimeSpec.ALL_TIME;
  query.severities = [
    google.ads.adwords.v201101.AlertSeverity.GREEN,
    google.ads.adwords.v201101.AlertSeverity.YELLOW,
    google.ads.adwords.v201101.AlertSeverity.RED
  ];
  query.types = [
    google.ads.adwords.v201101.AlertType.CAMPAIGN_ENDING,
    google.ads.adwords.v201101.AlertType.CAMPAIGN_ENDED
  ];

  // Create the selector.
  var selector = new google.ads.adwords.v201101.AlertSelector();
  selector.query = query;
  selector.paging = new google.ads.adwords.v201101.Paging();
  selector.paging.startIndex = 0;
  selector.paging.numberResults = 10;

  try {
    alertService.get(selector,
      goog.bind(function(page) {
        if (page && page.entries && page.entries.length > 0) {
          this.writeOutput('Retrieved %d alerts out of %d.',
              page.entries.length, page.totalNumEntries);
          for (var i = 0, len = page.entries.length; i < len; i++) {
            var alert = page.entries[i];
            this.writeOutput('%d) Customer Id is %d, Alert type is "%s", ' +
                'severity is %s', i + 1, alert.clientCustomerId,
                alert.alertType, alert.alertSeverity);
            for (var j = 0, len1 = alert.details.length; j < len1; j++) {
              this.writeOutput('  - Triggered at %s',
                  alert.details[j].triggerTime);
            }
          }
        } else {
          this.writeOutput('No alerts were found.');
        }
        callback();
      }, this),
      goog.bind(function(soapException) {
        this.writeOutput('Failed to get alerts. Soap Fault says "%s"',
            soapException.getInnerException().getFaultString());
        callback();
      }, this)
    );
  } catch (ex) {
    this.writeOutput('An exception occurred while running the code example.');
    callback();
  }
};
