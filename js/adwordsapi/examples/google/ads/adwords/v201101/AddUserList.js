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
 * @fileoverview Defines AddUserList, a code example that shows how to create
 *     a user list.
 */

goog.provide('google.ads.adwords.examples.v201101.AddUserList');

goog.require('google.ads.adwords.AdWordsService.v201101');
goog.require('google.ads.adwords.examples.ExampleBase');
goog.require('google.ads.adwords.v201101.Operator');
goog.require('google.ads.adwords.v201101.Predicate');
goog.require('google.ads.adwords.v201101.PredicateOperator');
goog.require('google.ads.adwords.v201101.RemarketingUserList');
goog.require('google.ads.adwords.v201101.Selector');
goog.require('google.ads.adwords.v201101.UserListConversionType');
goog.require('google.ads.adwords.v201101.UserListMembershipStatus');
goog.require('google.ads.adwords.v201101.UserListOperation');
goog.require('google.ads.adwords.v201101.UserListService');

/**
 * This code example illustrates how to create a user list.
 *
 * Tags: UserListService.mutate
 *
 * @extends google.ads.adwords.examples.ExampleBase
 * @constructor
 */
google.ads.adwords.examples.v201101.AddUserList = function() {
  google.ads.adwords.examples.ExampleBase.call(this);
  this.description = 'This code example illustrates how to create a user list.';
};
goog.inherits(google.ads.adwords.examples.v201101.AddUserList,
    google.ads.adwords.examples.ExampleBase);

/**
 * Runs the code example.
 *
 * @param {google.ads.adwords.AdWordsUser} user AdWords user running the code
 *     example.
 * @param {function} callback the callback method to be called once this example
 *     is complete.
 */
google.ads.adwords.examples.v201101.AddUserList.prototype.run =
    function(user, callback) {
  // Get the UserListService.
  var userListService = user.getService(
      google.ads.adwords.AdWordsService.v201101.UserListService);

  // Get the ConversionTrackerService.
  var conversionTrackerService = user.getService(
      google.ads.adwords.AdWordsService.v201101.ConversionTrackerService);


  var userList = new google.ads.adwords.v201101.RemarketingUserList();
  userList.name = 'Mars cruise customers #' + this.getTimeStamp();
  userList.description = 'A list of mars cruise customers in the last year.';
  userList.status = google.ads.adwords.v201101.UserListMembershipStatus.OPEN;
  userList.membershipLifeSpan = 365;

  var conversionType = new google.ads.adwords.v201101.UserListConversionType();
  conversionType.name = userList.name;
  userList.conversionTypes = [conversionType];

  var operation = new google.ads.adwords.v201101.UserListOperation();
  operation.operand = userList;
  operation.operator = google.ads.adwords.v201101.Operator.ADD;

  try {
    // Add user list.
    userListService.mutate([operation],
      goog.bind(function(retval) {
        if (retval && retval.value && retval.value.length > 0) {
          userLists = retval.value;
          // Get all conversion snippets
          var conversionIds = [];
          for (var i = 0; i < userLists.length; i++) {
            if (userLists[i].conversionTypes != null) {
              for (var j = 0; j < userLists[i].conversionTypes.length; j++) {
                conversionIds.push('' + userLists[i].conversionTypes[j].id);
              }
            }
          }

          var conversionsMap = {};

          if (conversionIds.length > 0) {
            // Create selector.
            var conversionTypePredicate =
                new google.ads.adwords.v201101.Predicate();
            conversionTypePredicate.field = 'Id';
            conversionTypePredicate.operator =
                google.ads.adwords.v201101.PredicateOperator.IN;
            conversionTypePredicate.values = conversionIds;

            var selector = new google.ads.adwords.v201101.Selector();
            selector.fields = ['Id'];
            selector.predicates = [conversionTypePredicate];

            // Get all conversion trackers.
            conversionTrackerService.get(selector, goog.bind(function(page) {
              if (page != null && page.entries != null) {
                for (var i = 0; i < page.entries.length; i++) {
                  var tracker = page.entries[i];
                  conversionsMap[tracker.id] = tracker;
                }
              }

              // Display results.
              for (var i = 0; i < userLists.length; i++) {
                var tempUserList = userLists[i];
                this.writeOutput('User list with name \'%s\' and id \'%s\' ' +
                    'was added.', tempUserList.name, tempUserList.id);

                // Display user list associated conversion code snippets.
                if (tempUserList.conversionTypes != null) {
                  for (var j = 0; j < tempUserList.conversionTypes.length;
                      j++) {
                    var tempConversionType = tempUserList.conversionTypes[j];
                    var conversionTracker =
                        conversionsMap[tempConversionType.id];
                    this.writeOutput('Conversion type code snippet ' +
                        'associated to the list:\n%s\n',
                        conversionTracker.snippet);
                  }
                }
              }
              callback();
            }, this), goog.bind(function(soapException) {
              this.writeOutput('Failed to get conversion tracker snippet. ' +
                  'Soap Fault says "%s"', soapException.getInnerException().
                    getFaultString());
              callback();
            }, this));
          }
        } else {
          this.writeOutput('No user lists were added.');
        }
        callback();
      }, this),
      goog.bind(function(soapException) {
        this.writeOutput('Failed to get add user list. Soap Fault ' +
            'says "%s"', soapException.getInnerException().getFaultString());
        callback();
      }, this)
    );
  } catch (ex) {
    this.writeOutput('An exception occurred while running the code example.');
    callback();
  }
};
