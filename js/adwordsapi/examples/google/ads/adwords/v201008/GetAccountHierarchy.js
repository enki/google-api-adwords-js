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
 * @fileoverview Defines GetAccountHierarchy, a code example that illustrates
 * how to retrieve the account hierarchy under an account.
 */

goog.provide('google.ads.adwords.examples.v201008.GetAccountHierarchy');

goog.require('google.ads.adwords.AdWordsService.v201008');
goog.require('google.ads.adwords.examples.ExampleBase');
goog.require('google.ads.adwords.v201008.AdExtensionOverride');
goog.require('google.ads.adwords.v201008.RequestHeader');
goog.require('google.ads.adwords.v201008.ServiceType');
goog.require('google.ads.adwords.v201008.ServicedAccountSelector');
goog.require('google.ads.adwords.v201008.ServicedAccountService');

/**
 * This code example illustrates how to retrieve the account hierarchy under
 * an account.
 *
 * Tags: ServicedAccountService.get
 *
 * @constructor
 */
google.ads.adwords.examples.v201008.GetAccountHierarchy = function() {
  google.ads.adwords.examples.ExampleBase.call(this);
  this.description = 'This code example illustrates how to retrieve the ' +
      'account hierarchy under an account.';
};
goog.inherits(google.ads.adwords.examples.v201008.GetAccountHierarchy,
    google.ads.adwords.examples.ExampleBase);

/**
 * Runs the code example.
 *
 * @param {google.ads.adwords.AdWordsUser} user AdWords user running the code
 * example.
 * @param {function} callback the callback method to be called once this example
 * is complete.
 */
google.ads.adwords.examples.v201008.GetAccountHierarchy.prototype.run =
    function(user, callback) {
  // Get the ServicedAccountService.
  var servicedAccountService = user.getService(
      google.ads.adwords.AdWordsService.v201008.ServicedAccountService);

  servicedAccountService.requestHeader =
      new google.ads.adwords.v201008.RequestHeader();
  servicedAccountService.requestHeader.clientEmail = null;

  var selector = new google.ads.adwords.v201008.ServicedAccountSelector();
  selector.serviceTypes = [
    google.ads.adwords.v201008.ServiceType.UI_AND_API,
    google.ads.adwords.v201008.ServiceType.API_ONLY
  ];
  selector.enablePaging = false;

  try {
    servicedAccountService.get(selector,
      goog.bind(function(graph) {
        if (graph && graph.accounts) {
          // Display the accounts.
          this.writeOutput('There are %d customers under this account ' +
              'hierarchy.', graph.accounts.length);
          for (var i = 0, len = graph.accounts.length; i < len; i++) {
            var account = graph.accounts[i];
            this.writeOutput('%d) Customer id: %s, Login email: %s, Company ' +
                'name: %s, IsMCC: %s', i + 1, account.customerId,
                account.login, account.companyName, account.canManageClients);
          }

          // Display the links.
          for (var j = 0, len1 = graph.links.length; j < len1; j++) {
            var link = graph.links[j];
            this.writeOutput('There is a %s link of type %s from %s to %s',
                link.typeOfLink, link.serviceType, link.managerId.id,
                link.clientId.id);
          }
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
