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
 * @fileoverview Defines DeleteUserList, a code example that deletes a user
 * list by setting the status to 'CLOSED'.
 */

goog.provide('google.ads.adwords.examples.v201101.DeleteUserList');

goog.require('google.ads.adwords.AdWordsService.v201101');
goog.require('google.ads.adwords.examples.ExampleBase');
goog.require('google.ads.adwords.v201101.Operator');
goog.require('google.ads.adwords.v201101.RemarketingUserList');
goog.require('google.ads.adwords.v201101.UserListConversionType');
goog.require('google.ads.adwords.v201101.UserListMembershipStatus');
goog.require('google.ads.adwords.v201101.UserListOperation');
goog.require('google.ads.adwords.v201101.UserListService');

/**
 * This code example deletes a user list by setting the status to 'CLOSED'.
 * To get user lists, run GetAllUserLists.js.
 *
 * Tags: UserListService.mutate
 *
 * @extends google.ads.adwords.examples.ExampleBase
 * @constructor
 */
google.ads.adwords.examples.v201101.DeleteUserList = function() {
  google.ads.adwords.examples.ExampleBase.call(this);
  this.description = 'This code example deletes a user list by setting the ' +
      'status to "CLOSED". To get user lists, run GetAllUserLists.js.';
};
goog.inherits(google.ads.adwords.examples.v201101.DeleteUserList,
    google.ads.adwords.examples.ExampleBase);

/**
 * Runs the code example.
 *
 * @param {google.ads.adwords.AdWordsUser} user AdWords user running the code
 * example.
 * @param {function} callback the callback method to be called once this example
 * is complete.
 */
google.ads.adwords.examples.v201101.DeleteUserList.prototype.run =
    function(user, callback) {
  // Get the UserListService.
  var userListService = user.getService(
      google.ads.adwords.AdWordsService.v201101.UserListService);

  var userListId = this._T('INSERT_USER_LIST_ID_HERE');

  var userList = new google.ads.adwords.v201101.UserList();
  userList.id = userListId;
  userList.status = google.ads.adwords.v201101.UserListMembershipStatus.CLOSED;

  var operation = new google.ads.adwords.v201101.UserListOperation();
  operation.operand = userList;
  operation.operator = google.ads.adwords.v201101.Operator.SET;

  try {
    // Delete user list.
    var retval = userListService.mutate([operation],
      goog.bind(function(retval) {
        if (retval && retval.value && retval.value.length > 0) {
          var tempUserList = retval.value[0];
          this.writeOutput('User list with name "%s" and id %d was deleted ' +
              '(closed).', tempUserList.name, tempUserList.id);
        } else {
          this.writeOutput('No user lists were deleted (closed).');
        }
        callback();
      }, this),
      goog.bind(function(soapException) {
        this.writeOutput('Failed to close user list. Soap Fault says "%s"',
            soapException.getInnerException().getFaultString());
        callback();
      }, this)
    );
  } catch (ex) {
    this.writeOutput('An exception occurred while running the code example.');
    callback();
  }
};
