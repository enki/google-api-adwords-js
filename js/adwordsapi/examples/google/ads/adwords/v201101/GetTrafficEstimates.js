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
 * @fileoverview Defines GetTrafficEstimates, a code example that gets
 * keyword traffic estimates.
 */

goog.provide('google.ads.adwords.examples.v201101.GetTrafficEstimates');

goog.require('google.ads.adwords.AdWordsService.v201101');
goog.require('google.ads.adwords.examples.ExampleBase');
goog.require('google.ads.adwords.v201101.AdGroupEstimateRequest');
goog.require('google.ads.adwords.v201101.CampaignEstimateRequest');
goog.require('google.ads.adwords.v201101.CountryTarget');
goog.require('google.ads.adwords.v201101.Keyword');
goog.require('google.ads.adwords.v201101.KeywordEstimateRequest');
goog.require('google.ads.adwords.v201101.KeywordMatchType');
goog.require('google.ads.adwords.v201101.LanguageTarget');
goog.require('google.ads.adwords.v201101.Money');
goog.require('google.ads.adwords.v201101.TrafficEstimatorSelector');
goog.require('google.ads.adwords.v201101.TrafficEstimatorService');

/**
 * This code example gets keyword traffic estimates.
 *
 * Tags: TrafficEstimatorService.get
 *
 * @extends google.ads.adwords.examples.ExampleBase
 * @constructor
 */
google.ads.adwords.examples.v201101.GetTrafficEstimates = function() {
  google.ads.adwords.examples.ExampleBase.call(this);
  this.description = 'This code example gets keyword traffic estimates.';
};
goog.inherits(google.ads.adwords.examples.v201101.GetTrafficEstimates,
    google.ads.adwords.examples.ExampleBase);

/**
 * Runs the code example.
 *
 * @param {google.ads.adwords.AdWordsUser} user AdWords user running the code
 * example.
 * @param {function} callback the callback method to be called once this example
 * is complete.
 */
google.ads.adwords.examples.v201101.GetTrafficEstimates.prototype.run =
    function(user, callback) {
  // Get the TrafficEstimatorService.
  var trafficEstimatorService = user.getService(
      google.ads.adwords.AdWordsService.v201101.TrafficEstimatorService);

  // Create keywords. Up to 2000 keywords can be passed in a single request.
  var keyword1 = new google.ads.adwords.v201101.Keyword();
  keyword1.text = 'mars cruise';
  keyword1.matchType = google.ads.adwords.v201101.KeywordMatchType.BROAD;

  var keyword2 = new google.ads.adwords.v201101.Keyword();
  keyword2.text = 'cheap cruise';
  keyword2.matchType = google.ads.adwords.v201101.KeywordMatchType.PHRASE;

  var keyword3 = new google.ads.adwords.v201101.Keyword();
  keyword3.text = 'cruise';
  keyword3.matchType = google.ads.adwords.v201101.KeywordMatchType.EXACT;

  var keywords = [keyword1, keyword2, keyword3];

  // Create a keyword estimate request for each keyword.
  var keywordEstimateRequests = [];

  for (var i = 0, len = keywords.length; i < len; i++) {
    var keywordEstimateRequest =
        new google.ads.adwords.v201101.KeywordEstimateRequest();
    keywordEstimateRequest.keyword = keywords[i];
    keywordEstimateRequests.push(keywordEstimateRequest);
  }

  // Create ad group estimate requests.
  var adGroupEstimateRequest =
      new google.ads.adwords.v201101.AdGroupEstimateRequest();
  adGroupEstimateRequest.keywordEstimateRequests = keywordEstimateRequests;
  adGroupEstimateRequest.maxCpc = new google.ads.adwords.v201101.Money();
  adGroupEstimateRequest.maxCpc.microAmount = 1000000;

  // Create campaign estimate requests.
  var campaignEstimateRequest =
      new google.ads.adwords.v201101.CampaignEstimateRequest();
  campaignEstimateRequest.adGroupEstimateRequests = [adGroupEstimateRequest];

  var countryTarget = new google.ads.adwords.v201101.CountryTarget();
  countryTarget.countryCode = 'US';

  var languageTarget = new google.ads.adwords.v201101.LanguageTarget();
  languageTarget.languageCode = 'en';

  campaignEstimateRequest.targets = [countryTarget, languageTarget];

  // Create selector.
  var selector = new google.ads.adwords.v201101.TrafficEstimatorSelector();
  selector.campaignEstimateRequests = [campaignEstimateRequest];

  try {
    // Get traffic estimates.
    trafficEstimatorService.get(selector,
      goog.bind(function(result) {
        // Display traffic estimates.
        if (result && result.campaignEstimates &&
            result.campaignEstimates.length > 0) {
          var campaignEstimate = result.campaignEstimates[0];
          if (campaignEstimate.adGroupEstimates &&
              campaignEstimate.adGroupEstimates.length > 0) {
            var adGroupEstimate = campaignEstimate.adGroupEstimates[0];
            if (adGroupEstimate.keywordEstimates) {
              for (var i = 0, len = adGroupEstimate.keywordEstimates.length;
                  i < len; i++) {
                var keyword = keywordEstimateRequests[i].keyword;
                var keywordEstimate = adGroupEstimate.keywordEstimates[i];

                // Find the mean of the min and max values.
                var meanAverageCpc =
                    (keywordEstimate.min.averageCpc.microAmount +
                        keywordEstimate.max.averageCpc.microAmount) / 2;
                var meanAveragePosition =
                    (keywordEstimate.min.averagePosition +
                        keywordEstimate.max.averagePosition) / 2;
                var meanClicks = (keywordEstimate.min.clicksPerDay +
                    keywordEstimate.max.clicksPerDay) / 2;
                var meanTotalCost =
                    (keywordEstimate.min.totalCost.microAmount +
                        keywordEstimate.max.totalCost.microAmount) / 2;

                this.writeOutput('Results for the keyword with text = "%s" ' +
                    'and match type = "%s":', keyword.text, keyword.matchType);
                this.writeOutput('  Estimated average CPC: %d', meanAverageCpc);
                this.writeOutput('  Estimated ad position: %f',
                    meanAveragePosition);
                this.writeOutput('  Estimated daily clicks: %d', meanClicks);
                this.writeOutput('  Estimated daily cost: %d', meanTotalCost);
              }
            }
          }
        } else {
          this.writeOutput('No traffic estimates were returned.');
        }
        callback();
      }, this),
      goog.bind(function(soapException) {
        this.writeOutput('Failed to get traffic estimates. Soap Fault ' +
            'says "%s"', soapException.getInnerException().getFaultString());
        callback();
      }, this)
    );
  } catch (ex) {
    this.writeOutput('An exception occurred while running the code example.');
    callback();
  }
};
