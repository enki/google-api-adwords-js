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
 * @fileoverview Defines GetRelatedKeywords, a code example that retrieves
 * keywords that are related to a given keyword.
 */

goog.provide('google.ads.adwords.examples.v201008.GetRelatedKeywords');

goog.require('google.ads.adwords.AdWordsService.v201008');
goog.require('google.ads.adwords.examples.ExampleBase');
goog.require('google.ads.adwords.v201008.AttributeType');
goog.require('google.ads.adwords.v201008.IdeaType');
goog.require('google.ads.adwords.v201008.Keyword');
goog.require('google.ads.adwords.v201008.KeywordMatchType');
goog.require('google.ads.adwords.v201008.Operator');
goog.require('google.ads.adwords.v201008.Paging');
goog.require('google.ads.adwords.v201008.RelatedToKeywordSearchParameter');
goog.require('google.ads.adwords.v201008.RequestType');
goog.require('google.ads.adwords.v201008.TargetingIdeaSelector');
goog.require('google.ads.adwords.v201008.TargetingIdeaService');

/**
 * This code example retrieves keywords that are related to a given keyword.
 *
 * Tags: TargetingIdeaService.get
 *
 * @constructor
 */
google.ads.adwords.examples.v201008.GetRelatedKeywords = function() {
  google.ads.adwords.examples.ExampleBase.call(this);
  this.description = 'This code example retrieves keywords that are related ' +
      'to a given keyword.';
};
goog.inherits(google.ads.adwords.examples.v201008.GetRelatedKeywords,
    google.ads.adwords.examples.ExampleBase);

/**
 * Runs the code example.
 *
 * @param {google.ads.adwords.AdWordsUser} user AdWords user running the code
 * example.
 * @param {function} callback the callback method to be called once this example
 * is complete.
 */
google.ads.adwords.examples.v201008.GetRelatedKeywords.prototype.run =
    function(user, callback) {
  // Get the TargetingIdeaService.
  var targetingIdeaService = user.getService(
      google.ads.adwords.AdWordsService.v201008.TargetingIdeaService);

  var keywordText = 'space cruise';

  var keyword = new google.ads.adwords.v201008.Keyword();
  keyword.text = keywordText;
  keyword.matchType = google.ads.adwords.v201008.KeywordMatchType.EXACT;

  var searchParameter =
      new google.ads.adwords.v201008.RelatedToKeywordSearchParameter();
  searchParameter.keywords = [keyword];

  var selector = new google.ads.adwords.v201008.TargetingIdeaSelector();
  selector.searchParameters = [searchParameter];
  selector.ideaType = google.ads.adwords.v201008.IdeaType.KEYWORD;
  selector.requestType = google.ads.adwords.v201008.RequestType.IDEAS;

  var paging = new google.ads.adwords.v201008.Paging();
  paging.startIndex = 0;
  paging.numberResults = 10;

  selector.paging = paging;

  try {
    targetingIdeaService.get(selector,
      goog.bind(function(retval) {
        if (retval && retval.entries) {
          this.writeOutput('There are a total of %s keywords related to ' +
              '"%s". The first %d entries are displayed below: \n',
              retval.totalNumEntries, keywordText, retval.entries.length);


          for (var i = 0, len = retval.entries.length; i < len; i++) {
            var idea = retval.entries[i];
            for (var j = 0, len1 = idea.data.length; j < len1; j++) {
              var entry = idea.data[j];
              if (entry.key == google.ads.adwords.v201008.AttributeType.
                  KEYWORD) {
                var kwdAttribute = entry.value;
                this.writeOutput('Related keyword with text = "%s" and match ' +
                    'type = "%s" was found.', kwdAttribute.value.text,
                    kwdAttribute.value.matchType);
              }
            }
          }
        } else {
          this.writeOutput('No related keywords were found for your keyword.');
        }
        callback();
      }, this),
      goog.bind(function(soapException) {
        this.writeOutput('Failed to get related keywords. Soap Fault says "%s"',
            soapException.getInnerException().getFaultString());

        callback();
      }, this)
    );
  } catch (ex) {
    this.writeOutput('An exception occurred while running the code example.');
    callback();
  }
};
