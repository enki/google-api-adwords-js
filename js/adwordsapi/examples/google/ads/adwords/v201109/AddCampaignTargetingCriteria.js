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
 * @fileoverview Defines AddCampaignTargetingCriteria, a code example that adds
 * language, location criteria to a campaign.
 */

goog.provide(
    'google.ads.adwords.examples.v201109.AddCampaignTargetingCriteria');

goog.require('google.ads.adwords.AdWordsService.v201109');
goog.require('google.ads.adwords.examples.ExampleBase');
goog.require('google.ads.adwords.v201109.CampaignCriterion');
goog.require('google.ads.adwords.v201109.CampaignCriterionOperation');
goog.require('google.ads.adwords.v201109.CampaignCriterionService');
goog.require('google.ads.adwords.v201109.Language');
goog.require('google.ads.adwords.v201109.Operator');
goog.require('google.ads.adwords.v201109.Platform');

/**
 * This example adds various types of targeting criteria to a campaign. To get
 * campaigns, run GetAllCampaigns.js.
 *
 * Tags: CampaignCriterionService.mutate
 *
 * @extends google.ads.adwords.examples.ExampleBase
 * @constructor
 */
google.ads.adwords.examples.v201109.AddCampaignTargetingCriteria = function() {
  google.ads.adwords.examples.ExampleBase.call(this);
  this.description = 'This example adds various types of targeting criteria ' +
      'to a campaign. To get campaigns, run GetAllCampaigns.js.';
};
goog.inherits(google.ads.adwords.examples.v201109.AddCampaignTargetingCriteria,
    google.ads.adwords.examples.ExampleBase);

/**
 * Runs the code example.
 *
 * @param {google.ads.adwords.AdWordsUser} user AdWords user running the code
 *     example.
 * @param {function} callback the callback method to be called once this example
 *     is complete.
 */
google.ads.adwords.examples.v201109.AddCampaignTargetingCriteria.prototype.run =
    function(user, callback) {
  // Get the CampaignTargetService.
  var campaignCriterionService = user.getService(
      google.ads.adwords.AdWordsService.v201109.CampaignCriterionService);

  var campaignId = this._T('INSERT_CAMPAIGN_ID_HERE');

  var criteria = [];

  // Create languages. The IDs can be found in the documentation or retrieved
  // with the ConstantDataService.
  var english = new google.ads.adwords.v201109.Language();
  english.id = 1000;
  criteria.push(english);
  var spanish = new google.ads.adwords.v201109.Language();
  spanish.id = 1003;
  criteria.push(spanish);

  // Create platforms. The IDs can be found in the documentation.
  var mobile = new google.ads.adwords.v201109.Platform();
  mobile.id = 30001;
  criteria.push(mobile);
  var tablets = new google.ads.adwords.v201109.Platform();
  tablets.id = 30002;
  criteria.push(tablets);

  var operations = [];
  goog.array.forEach(criteria, function(criterion) {
    var operation = new google.ads.adwords.v201109.CampaignCriterionOperation();
    operation.operator = google.ads.adwords.v201109.Operator.ADD;
    operation.operand = new google.ads.adwords.v201109.CampaignCriterion();
    operation.operand.campaignId = campaignId;
    operation.operand.criterion = criterion;
    operations.push(operation);
  });

  try {
    campaignCriterionService.mutate(
      operations,
      goog.bind(function(retval) {
        // Display campaign criteria.
        if (retval && retval.value && retval.value.length > 0) {
          for (var i = 0, len = retval.value.length; i < len; i++) {
            var campaignCriterion = retval.value[i];
            this.writeOutput('Campaign criterion with id "%s", criterion id' +
                '"%s" and type %s was added.', campaignCriterion.campaignId,
                campaignCriterion.criterion.id,
                campaignCriterion.criterion.type);
          }
        } else {
          this.writeOutput('No campaign criteria were added.');
        }
        callback();
      }, this),
      goog.bind(function(soapException) {
        this.writeOutput('Failed to set campaign criteria. Soap Fault says ' +
            '"%s"', soapException.getInnerException().getFaultString());
        callback();
      }, this)
    );
  } catch (ex) {
    this.writeOutput('An exception occurred while running the code example.');
    callback();
  }
};
