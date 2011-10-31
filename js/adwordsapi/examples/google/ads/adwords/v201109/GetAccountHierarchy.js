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
 * @fileoverview Defines GetAccountHierarchy, a code example that illustrates
 * how to retrieve the account hierarchy under an account.
 */

goog.provide('google.ads.adwords.examples.v201109.GetAccountHierarchy');

goog.require('google.ads.adwords.AdWordsService.v201109');
goog.require('google.ads.adwords.examples.ExampleBase');
goog.require('google.ads.adwords.v201109.AdExtensionOverride');
goog.require('google.ads.adwords.v201109.RequestHeader');
goog.require('google.ads.adwords.v201109.ServicedAccountSelector');
goog.require('google.ads.adwords.v201109.ServicedAccountService');

/**
 * This code example illustrates how to retrieve the account hierarchy under
 * an account.
 *
 * Tags: ServicedAccountService.get
 *
 * @extends google.ads.adwords.examples.ExampleBase
 * @constructor
 */
google.ads.adwords.examples.v201109.GetAccountHierarchy = function() {
  google.ads.adwords.examples.ExampleBase.call(this);
  this.description = 'This code example illustrates how to retrieve the ' +
      'account hierarchy under an account.';
};
goog.inherits(google.ads.adwords.examples.v201109.GetAccountHierarchy,
    google.ads.adwords.examples.ExampleBase);

/**
 * Runs the code example.
 *
 * @param {google.ads.adwords.AdWordsUser} user AdWords user running the code
 *     example.
 * @param {function} callback the callback method to be called once this example
 *     is complete.
 */
google.ads.adwords.examples.v201109.GetAccountHierarchy.prototype.run =
    function(user, callback) {
  // Get the ServicedAccountService.
  user.getConfig().setClientCustomerId(null);
  var servicedAccountService = user.getService(
      google.ads.adwords.AdWordsService.v201109.ServicedAccountService);

  servicedAccountService.requestHeader =
      new google.ads.adwords.v201109.RequestHeader();

  var selector = new google.ads.adwords.v201109.ServicedAccountSelector();
  selector.enablePaging = false;

  try {
    servicedAccountService.get(selector,
      goog.bind(function(graph) {
        if (graph && graph.accounts) {
          // Create map from customer id to parent and child links.
          var childLinks = [];
          var parentLinks = [];
          goog.array.forEach(graph.links, function(link) {
            if (childLinks[link.managerId.id] == null) {
              childLinks[link.managerId.id] = [];
            }
            childLinks[link.managerId.id].push(link);
            if (parentLinks[link.managerId.id] == null) {
              parentLinks[link.clientId.id] = [];
            }
            parentLinks[link.clientId.id].push(link);
          });
          // Create map from customer id to account and find root account.
          var accounts = [];
          var rootAccount = null;
          goog.array.forEach(graph.accounts, function(account) {
            accounts[account.customerId] = account;
            if (!parentLinks[account.customerId]) {
              rootAccount = account;
            }
          });
          // Display account tree.
          var displayTree =
              goog.bind(function(account, link, accounts, links, depth) {
            var output = new Array(depth * 2).join('-') + '%s, %s';
            if (link) {
              output += ' (%s, %s)';
            }
            if (!link) {
              this.writeOutput(output, account.login, account.customerId);
            } else {
              this.writeOutput(output, account.login, account.customerId,
                  link.typeOfLink, link.descriptiveName);
            }
            if (links[account.customerId] != null) {
              goog.array.forEach(links[account.customerId],
                  function(childLink) {
                var childAccount = accounts[childLink.clientId.id];
                displayTree(childAccount, childLink, accounts, links,
                    depth + 1);
              });
            }
          }, this);
          displayTree(rootAccount, null, accounts, childLinks, 0);
        }
        callback();
      }, this),
      goog.bind(function(soapException) {
        this.writeOutput('Failed to get account hierarchy. Soap Fault ' +
            'says "%s"', soapException.getInnerException().getFaultString());
        callback();
      }, this)
    );
  } catch (ex) {
    this.writeOutput('An exception occurred while running the code example.');
    callback();
  }
};
