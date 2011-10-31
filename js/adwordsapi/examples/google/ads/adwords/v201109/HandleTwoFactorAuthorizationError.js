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
 * @fileoverview Defines HandleTwoFactorAuthorizationError, a code example that
 * illustrates how to handle 2 factor authorization errors.
 */

goog.provide('google.ads.adwords.examples.v201109.HandleTwoFactorAuthorizationError');

goog.require('google.ads.adwords.AdWordsService.v201109');
goog.require('google.ads.adwords.AppConfig');
goog.require('google.ads.adwords.examples.ExampleBase');
goog.require('google.system.net.HttpWebTransportFactory');

/**
 * This code example illustrates how to handle 2 factor authorization errors.
 *
 * @extends google.ads.adwords.examples.ExampleBase
 * @constructor
 */
google.ads.adwords.examples.v201109.HandleTwoFactorAuthorizationError =
    function() {
  google.ads.adwords.examples.ExampleBase.call(this);
  this.description = 'This code example illustrates how to handle 2 factor ' +
      'authorization errors.';
};
goog.inherits(
    google.ads.adwords.examples.v201109.HandleTwoFactorAuthorizationError,
    google.ads.adwords.examples.ExampleBase);

/**
 * Runs the code example.
 *
 * @param {google.ads.adwords.AdWordsUser} user AdWords user running the code
 *     example.
 * @param {function} callback the callback method to be called once this example
 *     is complete.
 */
google.ads.adwords.examples.v201109.HandleTwoFactorAuthorizationError.
    prototype.run = function(user, callback) {

  var config = new google.ads.adwords.AppConfig();
  config.setEmail('2steptester@gmail.com');
  config.setPassword('testaccount');
  var authToken = new google.ads.common.AuthToken(config, 'adwords',
      config.getEmail(), config.getPassword());

  authToken.getToken(
    goog.bind(function(token) {
      this.writeOutput('Retrieved auth token = %s for user %s.', token,
          config.getEmail());
    }, this),
    goog.bind(function(error) {
      if (error.getInfo() == 'InvalidSecondFactor') {
        this.writeOutput('The user has enabled two factor authentication in ' +
            'this account. Have the user generate an application-specific ' +
            'password to make calls against the AdWords API. See ' +
             'http://adwordsapi.blogspot.com/2011/02/authentication-changes-' +
             'with-2-step.html for more details');
      } else {
        this.writeOutput('Invalid credentials');
      }
      callback();
    }, this)
  );
};
