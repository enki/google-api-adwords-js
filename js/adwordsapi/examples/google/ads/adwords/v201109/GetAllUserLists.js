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
 * @fileoverview Defines GetAllUserLists, a code example that gets all the user
 *     lists for an account.
 */

goog.provide('google.ads.adwords.examples.v201109.GetAllUserLists');

goog.require('google.ads.adwords.AdWordsService.v201109');
goog.require('google.ads.adwords.examples.ExampleBase');
goog.require('google.ads.adwords.v201109.Selector');
goog.require('google.ads.adwords.v201109.UserListService');

/**
 * This code example illustrates how to retrieve all the user lists for
 * an account. To add a user list run AddUserList.js.
 *
 * Tags: UserListService.get
 *
 * @extends google.ads.adwords.examples.ExampleBase
 * @constructor
 */
google.ads.adwords.examples.v201109.GetAllUserLists = function() {
  google.ads.adwords.examples.ExampleBase.call(this);
  this.description = 'This code example illustrates how to retrieve all the ' +
      'user lists for an account. To add a user list run AddUserList.js.';
};
goog.inherits(google.ads.adwords.examples.v201109.GetAllUserLists,
    google.ads.adwords.examples.ExampleBase);

/**
 * Runs the code example.
 *
 * @param {google.ads.adwords.AdWordsUser} user AdWords user running the code
 *     example.
 * @param {function} callback the callback method to be called once this example
 *     is complete.
 */
google.ads.adwords.examples.v201109.GetAllUserLists.prototype.run =
    function(user, callback) {
  // Get the UserListService.
  var userListService = user.getService(
      google.ads.adwords.AdWordsService.v201109.UserListService);

  var selector = new google.ads.adwords.v201109.Selector();
  selector.fields = ['Id', 'Name', 'Status', 'Size'];

  try {
    userListService.get(selector,
      goog.bind(function(page) {
        if (page && page.entries && page.entries.length > 0) {
          for (var i = 0, len = page.entries.length; i < len; i++) {
            var userList = page.entries[i];
            this.writeOutput('User list name is "%s", id is "%d", status is ' +
                '"%s" and number of users is %d.', userList.name, userList.id,
                userList.status, userList.size);
          }
        } else {
          this.writeOutput('No user lists were found.');
        }
      callback();
      }, this),
      goog.bind(function(soapException) {
        this.writeOutput('Failed to get user lists. Soap Fault ' +
            'says "%s"', soapException.getInnerException().getFaultString());
        callback();
      }, this)
    );
  } catch (ex) {
    this.writeOutput('An exception occurred while running the code example.');
    callback();
  }
};
