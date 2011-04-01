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
 * @fileoverview Defines GetRelatedPlacements, a code example that retrieves
 * urls that have content keywords related to a given website.
 */

goog.provide('google.ads.adwords.examples.v201008.GetRelatedPlacements');

goog.require('google.ads.adwords.AdWordsService.v201008');
goog.require('google.ads.adwords.examples.ExampleBase');
goog.require('google.ads.adwords.v201008.AttributeType');
goog.require('google.ads.adwords.v201008.IdeaType');
goog.require('google.ads.adwords.v201008.Paging');
goog.require('google.ads.adwords.v201008.RelatedToUrlSearchParameter');
goog.require('google.ads.adwords.v201008.RequestType');
goog.require('google.ads.adwords.v201008.TargetingIdeaSelector');
goog.require('google.ads.adwords.v201008.TargetingIdeaService');

/**
 * This code example retrieves urls that have content keywords related to a
 * given website.
 *
 * Tags: TargetingIdeaService.get
 *
 * @constructor
 */
google.ads.adwords.examples.v201008.GetRelatedPlacements = function() {
  google.ads.adwords.examples.ExampleBase.call(this);
  this.description = 'This code example retrieves urls that have content ' +
      'keywords related to a given website.';
};
goog.inherits(google.ads.adwords.examples.v201008.GetRelatedPlacements,
    google.ads.adwords.examples.ExampleBase);

/**
 * Runs the code example.
 *
 * @param {google.ads.adwords.AdWordsUser} user AdWords user running the code
 * example.
 * @param {function} callback the callback method to be called once this example
 * is complete.
 */
google.ads.adwords.examples.v201008.GetRelatedPlacements.prototype.run =
    function(user, callback) {
  // Get the TargetingIdeaService.
  var targetingIdeaService = user.getService(
      google.ads.adwords.AdWordsService.v201008.TargetingIdeaService);

  var urlText = 'mars.google.com';

  var searchParameter =
      new google.ads.adwords.v201008.RelatedToUrlSearchParameter();
  searchParameter.urls = [urlText];
  searchParameter.includeSubUrls = false;

  var selector = new google.ads.adwords.v201008.TargetingIdeaSelector();
  selector.searchParameters = [searchParameter];
  selector.ideaType = google.ads.adwords.v201008.IdeaType.PLACEMENT;
  selector.requestType = google.ads.adwords.v201008.RequestType.IDEAS;

  var paging = new google.ads.adwords.v201008.Paging();
  paging.startIndex = 0;
  paging.numberResults = 10;

  selector.paging = paging;

  try {
    targetingIdeaService.get(selector,
      goog.bind(function(page) {
        if (page && page.entries) {
          this.writeOutput('There are a total of %s urls with content ' +
              'keywords related to "%s". The first %d entries are displayed ' +
              'below:', page.totalNumEntries, urlText, page.entries.length);

          for (var i = 0, len = page.entries.length; i < len; i++) {
            var idea = page.entries[i];
            for (var j = 0, len1 = idea.data.length; j < len1; j++) {
              var entry = idea.data[j];
              if (entry.key == google.ads.adwords.v201008.AttributeType.
                  PLACEMENT) {
                var placementAttribute = entry.value;
                this.writeOutput('Related content keywords were found at ' +
                    '"%s".', placementAttribute.value.url);
              }
            }
          }
        } else {
          this.writeOutput('No urls with content keywords related to your ' +
              'url were found.');
        }
        callback();
      }, this),
      goog.bind(function(soapException) {
        this.writeOutput('Failed to get related placements. Soap Fault ' +
            'says "%s"', soapException.getInnerException().getFaultString());
        callback();
      }, this)
    );
  } catch (ex) {
    this.writeOutput('An exception occurred while running the code example.');
    callback();
  }
};
