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
 * @fileoverview Defines SetAdParams, a code example that illustrates how to
 *     create a text ad with ad parameters.
 */

goog.provide('google.ads.adwords.examples.v201008.SetAdParams');

goog.require('google.ads.adwords.AdWordsService.v201008');
goog.require('google.ads.adwords.examples.ExampleBase');
goog.require('google.ads.adwords.v201008.AdGroupAd');
goog.require('google.ads.adwords.v201008.AdGroupAdOperation');
goog.require('google.ads.adwords.v201008.AdGroupAdService');
goog.require('google.ads.adwords.v201008.AdGroupAdStatus');
goog.require('google.ads.adwords.v201008.AdParam');
goog.require('google.ads.adwords.v201008.AdParamOperation');
goog.require('google.ads.adwords.v201008.AdParamService');
goog.require('google.ads.adwords.v201008.Operator');
goog.require('google.ads.adwords.v201008.TextAd');

/**
 * This code example illustrates how to create a text ad with ad parameters.
 * To add an ad group, run AddAdGroup.js. To add an ad group criterion,
 * run AddAdGroupCriterion.js.
 *
 * Tags: AdGroupAdService.mutate, AdParamService.mutate
 *
 * @extends google.ads.adwords.examples.ExampleBase
 * @constructor
 */
google.ads.adwords.examples.v201008.SetAdParams = function() {
  google.ads.adwords.examples.ExampleBase.call(this);
  /**
  * Example description.
  * @type {string}
  */
  this.description = 'This code example illustrates how to create a text ad ' +
      'with ad parameters. To add an ad group, run AddAdGroup.js. To add an ' +
      'ad group criterion, run AddAdGroupCriterion.js.';
};
goog.inherits(google.ads.adwords.examples.v201008.SetAdParams,
    google.ads.adwords.examples.ExampleBase);

/**
 * Runs the code example.
 *
 * @param {google.ads.adwords.AdWordsUser} user AdWords user running the code
 *     example.
 * @param {function} callback the callback method to be called once this example
 *     is complete.
 */
google.ads.adwords.examples.v201008.SetAdParams.prototype.run =
    function(user, callback) {
  // Get the AdGroupAdService.
  var adGroupAdService = user.getService(
      google.ads.adwords.AdWordsService.v201008.AdGroupAdService);

  // Get the AdParamService.
  var adParamService = user.getService(
      google.ads.adwords.AdWordsService.v201008.AdParamService);

  var adGroupId = this._T('INSERT_AD_GROUP_ID_HERE');
  var criterionId = this._T('INSERT_CRITERION_ID_HERE');

  var textAd = new google.ads.adwords.v201008.TextAd();
  textAd.url = 'http://www.example.com';
  textAd.displayUrl = 'example.com';
  textAd.headline = ' Mars Cruises';
  textAd.description1 = 'Low-gravity fun for {param1:cheap}.';
  textAd.description2 = 'Only {param2:a few} seats left!';

  var adOperand = new google.ads.adwords.v201008.AdGroupAd();
  adOperand.adGroupId = adGroupId;
  adOperand.status = google.ads.adwords.v201008.AdGroupAdStatus.ENABLED;
  adOperand.ad = textAd;

  var adOperation = new google.ads.adwords.v201008.AdGroupAdOperation();
  adOperation.operand = adOperand;
  adOperation.operator = google.ads.adwords.v201008.Operator.ADD;

  try {
    adGroupAdService.mutate([adOperation],
      goog.bind(function(retval) {
        if (retval && retval.value && retval.value.length > 0) {
          this.writeOutput('Text ad id %d was successfully added.',
              retval.value[0].ad.id);

          // Prepare for setting ad parameters.
          var priceParam = new google.ads.adwords.v201008.AdParam();
          priceParam.adGroupId = adGroupId;
          priceParam.criterionId = criterionId;
          priceParam.paramIndex = 1;
          priceParam.insertionText = '$100';

          var priceOperation =
              new google.ads.adwords.v201008.AdParamOperation();
          priceOperation.operator = google.ads.adwords.v201008.Operator.SET;
          priceOperation.operand = priceParam;

          var seatParam = new google.ads.adwords.v201008.AdParam();
          seatParam.adGroupId = adGroupId;
          seatParam.criterionId = criterionId;
          seatParam.paramIndex = 2;
          seatParam.insertionText = '50';

          var seatOperation = new google.ads.adwords.v201008.AdParamOperation();
          seatOperation.operator = google.ads.adwords.v201008.Operator.SET;
          seatOperation.operand = seatParam;

          adParamService.mutate([priceOperation, seatOperation],
            goog.bind(function(newAdParams) {
              if (newAdParams != null) {
                this.writeOutput('Ad parameters were successfully updated.');
              } else {
                this.writeOutput('No ad parameters were set.');
              }
              callback();
            }, this),
            goog.bind(function(soapException) {
              this.writeOutput('Failed to add adparams. Soap Fault says "%s"',
                  soapException.getInnerException().getFaultString());
              callback();
            }, this)
          );
        } else {
          this.writeOutput('No ads were created.');
          callback();
          return;
        }
      }, this),
      goog.bind(function(soapException) {
        this.writeOutput('Failed to add ads. Soap Fault says "%s"',
            soapException.getInnerException().getFaultString());
        callback();
      }, this)
    );
  } catch (ex) {
    this.writeOutput('An exception occurred while running the code example.');
    callback();
  }
};
