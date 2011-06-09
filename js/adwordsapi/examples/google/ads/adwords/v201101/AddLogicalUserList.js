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
 * @fileoverview Defines AddLogicalUserList, a code example that shows how to
 * create a logical user list.
 */

goog.provide('google.ads.adwords.examples.v201101.AddLogicalUserList');

goog.require('google.ads.adwords.AdWordsService.v201101');
goog.require('google.ads.adwords.examples.ExampleBase');
goog.require('google.ads.adwords.v201101.LogicalUserList');
goog.require('google.ads.adwords.v201101.LogicalUserListOperand');
goog.require('google.ads.adwords.v201101.Operator');
goog.require('google.ads.adwords.v201101.SizeRange');
goog.require('google.ads.adwords.v201101.UserInterest');
goog.require('google.ads.adwords.v201101.UserListConversionType');
goog.require('google.ads.adwords.v201101.UserListLogicalRule');
goog.require('google.ads.adwords.v201101.UserListLogicalRuleOperator');
goog.require('google.ads.adwords.v201101.UserListMembershipStatus');
goog.require('google.ads.adwords.v201101.UserListOperation');
goog.require('google.ads.adwords.v201101.UserListService');

/**
 * This code example illustrates how to create a logical user list.
 *
 * Tags: UserListService.mutate
 *
 * @extends google.ads.adwords.examples.ExampleBase
 * @constructor
 */
google.ads.adwords.examples.v201101.AddLogicalUserList = function() {
  google.ads.adwords.examples.ExampleBase.call(this);
  this.description = 'This code example illustrates how to create a logical ' +
      'user list.';
};
goog.inherits(google.ads.adwords.examples.v201101.AddLogicalUserList,
    google.ads.adwords.examples.ExampleBase);

/**
 * Runs the code example.
 *
 * @param {google.ads.adwords.AdWordsUser} user AdWords user running the code
 * example.
 * @param {function} callback the callback method to be called once this example
 * is complete.
 */
google.ads.adwords.examples.v201101.AddLogicalUserList.prototype.run =
    function(user, callback) {
  // Get the UserListService.
  var userListService = user.getService(
      google.ads.adwords.AdWordsService.v201101.UserListService);

  var userList = new google.ads.adwords.v201101.LogicalUserList();
  userList.name = 'Mars cruise customers #' + this.getTimeStamp();
  userList.description = 'A list of mars cruise customers in the last year.';
  userList.status = google.ads.adwords.v201101.UserListMembershipStatus.OPEN;
  userList.membershipLifeSpan = 365;

  // Make an UserInterest group for Travel > Cruises & Charters. See
  // http://code.google.com/apis/adwords/docs/appendix/verticals.html for
  // various verticals and their ids.
  var interest = new google.ads.adwords.v201101.UserInterest();
  interest.name = 'Mars cruise interest group';
  interest.id = 206;

  var userListOperand = new google.ads.adwords.v201101.LogicalUserListOperand();
  userListOperand.item = interest;

  var rule = new google.ads.adwords.v201101.UserListLogicalRule();
  rule.operator = google.ads.adwords.v201101.UserListLogicalRuleOperator.NONE;
  rule.ruleOperands = [userListOperand];
  userList.rules = [rule];

  operation = new google.ads.adwords.v201101.UserListOperation();
  operation.operand = userList;
  operation.operator = google.ads.adwords.v201101.Operator.ADD;

  try {
    // Add user list.
    userListService.mutate([operation],
      goog.bind(function(retval) {
        if (retval && retval.value && retval.value.length > 0) {
          for (var i = 0, len = retval.value.length; i < len; i++) {
            var valueUserList = retval.value[i];
            this.writeOutput('Logical user list with name "%s" and id %d ' +
                'was added.', valueUserList.name, valueUserList.id);
          }
        } else {
          this.writeOutput('No logical user lists were added.');
        }
        callback();
      }, this),
      goog.bind(function(soapException) {
        this.writeOutput('Failed to get add logical user list. Soap Fault ' +
            'says "%s"', soapException.getInnerException().getFaultString());
        callback();
      }, this)
    );
  } catch (ex) {
    this.writeOutput('An exception occurred while running the code example.');
    callback();
  }
};
