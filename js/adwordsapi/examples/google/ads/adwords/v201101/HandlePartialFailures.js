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
 * @fileoverview Defines HandlePartialFailures, a code example that shows how
 * to handle partial failures.
 */

goog.provide('google.ads.adwords.examples.v201101.HandlePartialFailures');

goog.require('google.ads.adwords.AdWordsService.v201101');
goog.require('google.ads.adwords.examples.ExampleBase');
goog.require('google.ads.adwords.v201101.AdGroupCriterionOperation');
goog.require('google.ads.adwords.v201101.AdGroupCriterionService');
goog.require('google.ads.adwords.v201101.BiddableAdGroupCriterion');
goog.require('google.ads.adwords.v201101.Keyword');
goog.require('google.ads.adwords.v201101.KeywordMatchType');
goog.require('google.ads.adwords.v201101.Operator');
goog.require('google.ads.adwords.v201101.RequestHeader');

/**
 * This code example demonstrates how to handle partial failures.
 *
 * Tags: AdGroupCriterionService.mutate
 *
 * @extends google.ads.adwords.examples.ExampleBase
 * @constructor
 */

google.ads.adwords.examples.v201101.HandlePartialFailures =
    function() {
  google.ads.adwords.examples.ExampleBase.call(this);
  this.description = 'This code example demonstrates how to handle partial' +
      ' failures.';
};
goog.inherits(google.ads.adwords.examples.v201101.HandlePartialFailures,
    google.ads.adwords.examples.ExampleBase);

/**
 * Runs the code example.
 *
 * @param {google.ads.adwords.AdWordsUser} user AdWords user running the code
 * example.
 * @param {function} callback the callback method to be called once this example
 * is complete.
 */
google.ads.adwords.examples.v201101.HandlePartialFailures.prototype.
    run = function(user, callback) {
  // Get the AdGroupCriterionService.
  var adGroupCriterionService = user.getService(
      google.ads.adwords.AdWordsService.v201101.AdGroupCriterionService);

  // Set partial failure mode for the service.
  adGroupCriterionService.requestHeader =
      new google.ads.adwords.v201101.RequestHeader();
  adGroupCriterionService.requestHeader.partialFailure = true;

  var adGroupId = this._T('INSERT_ADGROUP_ID_HERE');

  var operations = [];

  // Create keywords.
  var keywords = ['mars cruise', 'inv@lid cruise', 'venus cruise',
      'b(a)d keyword cruise'];

  for (var i = 0, len = keywords.length; i < len; i++) {
    var keywordText = keywords[i];

    // Create keyword.
    var keyword = new google.ads.adwords.v201101.Keyword();
    keyword.text = keywordText;
    keyword.matchType = google.ads.adwords.v201101.KeywordMatchType.BROAD;

    // Create biddable ad group criterion.
    var keywordBiddableAdGroupCriterion =
        new google.ads.adwords.v201101.BiddableAdGroupCriterion();
    keywordBiddableAdGroupCriterion.adGroupId = adGroupId;
    keywordBiddableAdGroupCriterion.criterion = keyword;

    // Create operation.
    var keywordAdGroupCriterionOperation =
        new google.ads.adwords.v201101.AdGroupCriterionOperation();
    keywordAdGroupCriterionOperation.operand = keywordBiddableAdGroupCriterion;
    keywordAdGroupCriterionOperation.operator =
        google.ads.adwords.v201101.Operator.ADD;
    operations.push(keywordAdGroupCriterionOperation);
  }

  try {
    // Add ad group criteria.
    adGroupCriterionService.mutate(operations,
      goog.bind(function(result) {
        // Display results.
        if (result && result.value) {
          for (var i = 0, len = result.value.length; i < len; i++) {
            var adGroupCriterionResult = result.value[i];
            if (adGroupCriterionResult.criterion) {
              this.writeOutput('Ad group criterion with ad group id "%d", ' +
                  'criterion id "%d", and keyword %s" was added.',
                  adGroupCriterionResult.adGroupId,
                  adGroupCriterionResult.criterion.id,
                  adGroupCriterionResult.criterion.text);
            }
          }
        } else {
          this.writeOutput('No ad group criteria were added.');
        }

        if (result && result.partialFailureErrors) {
          for (var i = 0, len = partialFailureErrors.length; i < len; i++) {
            var apiError = result.partialFailureErrors[i];
            var operationIndex = this.getOperationIndex(apiError.fieldPath);
            if (operationIndex != -1) {
              var adGroupCriterion = operations[operationIndex].operand;
              this.writeOutput('Ad group criterion with ad group id "%d" and ' +
                  'keyword "%s" triggered a failure for the following ' +
                  'reason: "%s".', adGroupCriterion.adGroupId,
                  adGroupCriterion.criterion.text, apiError.errorString);
            } else {
              this.writeOutput('A failure for the following reason: "%s" has ' +
                  'occurred.', apiError.errorString);
            }
          }
        }
        callback();
      }, this),
      goog.bind(function(soapException) {
        this.writeOutput('Failed to handle partial failures. Soap Fault ' +
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
 * Gets the operation index from fieldPath.
 *
 * @param {string} fieldPath The fieldPath string returned by the server.
 * example.
 * @return {int} The operation index or -1 if the index cannot be retrieved.
 */
google.ads.adwords.examples.v201101.HandlePartialFailures.prototype.
    getOperationIndex = function(fieldPath) {
  var parts = fieldPath.split('.');

  if (parts.length > 0 && goog.string.startsWith(parts[0], 'operations[')) {
    return parseInt(parts[0].replace('operations[', '').replace(']', ''));
  }
  return -1;
};
