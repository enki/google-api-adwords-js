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
 * @fileoverview Defines UpdateAdGroup, a code example that updates an ad group,
 * setting its status to 'PAUSED'.
 */

goog.provide('google.ads.adwords.examples.v201008.UpdateAdGroup');

goog.require('google.ads.adwords.AdWordsService.v201008');
goog.require('google.ads.adwords.examples.ExampleBase');
goog.require('google.ads.adwords.v201008.AdGroup');
goog.require('google.ads.adwords.v201008.AdGroupOperation');
goog.require('google.ads.adwords.v201008.AdGroupService');
goog.require('google.ads.adwords.v201008.AdGroupStatus');
goog.require('google.ads.adwords.v201008.Operator');

/**
 * This code example illustrates how to update an ad group, setting its
 * status to 'PAUSED'. To create an ad group, run AddAdGroup.js.
 *
 * Tags: AdGroupService.mutate
 *
 * @constructor
 */
google.ads.adwords.examples.v201008.UpdateAdGroup = function() {
  google.ads.adwords.examples.ExampleBase.call(this);
  this.description = 'This code example illustrates how to update an ad ' +
    'group, setting its status to "PAUSED". To create an ad group, run ' +
    'AddAdGroup.js.';
};
goog.inherits(google.ads.adwords.examples.v201008.UpdateAdGroup,
    google.ads.adwords.examples.ExampleBase);

/**
 * Runs the code example.
 *
 * @param {google.ads.adwords.AdWordsUser} user AdWords user running the code
 * example.
 * @param {function} callback the callback method to be called once this example
 * is complete.
 */
google.ads.adwords.examples.v201008.UpdateAdGroup.prototype.run =
    function(user, callback) {
  // Get the AdGroupService.
  var adGroupService = user.getService(
      google.ads.adwords.AdWordsService.v201008.AdGroupService);

  var adGroupId = this._T('INSERT_AD_GROUP_ID_HERE');

  var adGroup = new google.ads.adwords.v201008.AdGroup();
  adGroup.status = google.ads.adwords.v201008.AdGroupStatus.PAUSED;
  adGroup.id = adGroupId;

  var operation = new google.ads.adwords.v201008.AdGroupOperation();
  operation.operator = google.ads.adwords.v201008.Operator.SET;
  operation.operand = adGroup;

  try {
    adGroupService.mutate([operation],
      goog.bind(function(retval) {
        if (retval && retval.value) {
          for (var i = 0, len = retval.value.length; i < len; i++) {
            var adGroupValue = retval.value[i];
            this.writeOutput('Ad group with id = "%s" was successfully paused.',
                adGroupValue.id);
          }
        }
        callback();
      }, this),
      goog.bind(function(soapException) {
        this.writeOutput('Failed to update ad group(s). Soap Fault says "%s"',
            soapException.getInnerException().getFaultString());
        callback();
      }, this)
    );
  } catch (ex) {
    this.writeOutput('An exception occurred while running the code example.');
    callback();
  }
};
