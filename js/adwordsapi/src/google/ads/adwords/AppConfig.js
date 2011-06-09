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
 * @author api.davidtorres@gmail.com (David Torres)
 */

/**
 * @fileoverview Defines AdWordsAppConfig, a class that reads the configuration
 * keys for AdWords.
 */

goog.provide('google.ads.adwords.AppConfig');

goog.require('google.ads.common.AppConfigBase');

/**
 * This class reads the configuration keys for AdWords.
 *
 * @extends google.ads.common.AppConfigBase
 * @constructor
 */
google.ads.adwords.AppConfig = function() {
  google.ads.common.AppConfigBase.call(this);

  this.authToken_ = null;
  this.email_ = null;
  this.password_ = null;
  this.clientEmail_ = null;
  this.clientCustomerId_ = null;
  this.developerToken_ = null;
  this.userAgent_ = null;
  this.legacyAdWordsApiServer_ = this.DEFAULT_LEGACY_ADWORDSAPI_SERVER_;
  this.adWordsApiServer_ = this.DEFAULT_ADWORDSAPI_SERVER_;

  var runtimeConfig = google.system.core.Runtime.getInstance().getConfig();
  if (runtimeConfig && runtimeConfig['AdWordsApi']) {
    this.readSettings(google.system.core.Runtime.getInstance().
        getConfig()['AdWordsApi']);
  }
};
goog.inherits(google.ads.adwords.AppConfig, google.ads.common.AppConfigBase);

/**
 * Key name for authToken.
 * @private
 */
google.ads.adwords.AppConfig.prototype.AUTHTOKEN_ = 'AuthToken';

/**
 * Key name for email.
 * @private
 */
google.ads.adwords.AppConfig.prototype.EMAIL_ = 'Email';

/**
 * Key name for password.
 * @private
 */
google.ads.adwords.AppConfig.prototype.PASSWORD_ = 'Password';

/**
 * Key name for clientEmail.
 * @private
 */
google.ads.adwords.AppConfig.prototype.CLIENT_EMAIL_ =
    'ClientEmail';

/**
 * Key name for clientCustomerId.
 * @private
 */
google.ads.adwords.AppConfig.prototype.CLIENT_CUSTOMER_ID_ =
    'ClientCustomerId';

/**
 * Key name for developerToken.
 * @private
 */
google.ads.adwords.AppConfig.prototype.DEVELOPER_TOKEN_ =
    'DeveloperToken';

/**
 * Key name for userAgent.
 * @private
 */
google.ads.adwords.AppConfig.prototype.USER_AGENT_ = 'UserAgent';

/**
 * Key name for adWordsApiServer.
 * @private
 */
google.ads.adwords.AppConfig.prototype.ADWORDSAPI_SERVER_ =
    'AdWordsApiServer';

/**
 * Key name for adWordsApiServer.
 * @private
 */
google.ads.adwords.AppConfig.prototype.
    DEFAULT_LEGACY_ADWORDSAPI_SERVER_ = 'https://adwords.google.com';

/**
 * Default value for legacyAdWordsApiServer.
 * @private
 */
google.ads.adwords.AppConfig.prototype.
    DEFAULT_ADWORDSAPI_SERVER_ = 'https://adwords.google.com';

/**
 * Gets the auth token.
 *
 * @return {string} The auth token.
 */
google.ads.adwords.AppConfig.prototype.getAuthToken =
    function() {
  return this.authToken_;
};

/**
 * Sets the auth token.
 *
 * @param {string} authToken The auth token.
 */
google.ads.adwords.AppConfig.prototype.setAuthToken =
    function(authToken) {
  this.authToken_ = authToken;
};

/**
 * Gets the email.
 *
 * @return {string} The email.
 */
google.ads.adwords.AppConfig.prototype.getEmail =
    function() {
  return this.email_;
};

/**
 * Sets the email.
 *
 * @param {string} email The email.
 */
google.ads.adwords.AppConfig.prototype.setEmail =
    function(email) {
  this.email_ = email;
  this.authToken_ = null;
};

/**
 * Gets the password.
 *
 * @return {string} The password.
 */
google.ads.adwords.AppConfig.prototype.getPassword =
    function() {
  return this.password_;
};

/**
 * Sets the password.
 *
 * @param {string} password The password.
 */
google.ads.adwords.AppConfig.prototype.setPassword =
    function(password) {
  this.password_ = password;
  this.authToken_ = null;
};

/**
 * Gets the client email.
 *
 * @return {string} The client email.
 */
google.ads.adwords.AppConfig.prototype.getClientEmail =
    function() {
  return this.clientEmail_;
};

/**
 * Sets the client email.
 *
 * @param {string} clientEmail The client email.
 */
google.ads.adwords.AppConfig.prototype.setClientEmail =
    function(clientEmail) {
  this.clientEmail_ = clientEmail;
};

/**
 * Gets the client customer id.
 *
 * @return {string} The client customer id.
 */
google.ads.adwords.AppConfig.prototype.getClientCustomerId =
    function() {
  return this.clientCustomerId_;
};

/**
 * Sets the client customer id.
 *
 * @param {string} clientCustomerId The client customer id.
 */
google.ads.adwords.AppConfig.prototype.setClientCustomerId =
    function(clientCustomerId) {
  this.clientCustomerId_ = clientCustomerId;
};

/**
 * Gets the developer token.
 *
 * @return {string} The developer token.
 */
google.ads.adwords.AppConfig.prototype.getDeveloperToken =
    function() {
  return this.developerToken_;
};

/**
 * Sets the developer token.
 *
 * @param {string} developerToken The developer token.
 */
google.ads.adwords.AppConfig.prototype.setDeveloperToken =
    function(developerToken) {
  this.developerToken_ = developerToken;
};

/**
 * Gets the user agent.
 *
 * @return {string} The user agent.
 */
google.ads.adwords.AppConfig.prototype.getUserAgent =
    function() {
  return this.userAgent_;
};

/**
 * Sets the user agent.
 *
 * @param {string} userAgent The user agent.
 */
google.ads.adwords.AppConfig.prototype.setUserAgent =
    function(userAgent) {
  this.userAgent_ = userAgent;
};

/**
 * Gets the adwords api server url.
 *
 * @return {string} The adwords api server url.
 */
google.ads.adwords.AppConfig.prototype.getAdWordsApiServer =
    function() {
  return this.adWordsApiServer_;
};

/**
 * Sets the adwords api server url.
 *
 * @param {string} adWordsApiServer The adwords api server url.
 */
google.ads.adwords.AppConfig.prototype.setAdWordsApiServer =
    function(adWordsApiServer) {
  this.adWordsApiServer_ = adWordsApiServer;
};

/**
 * Reads the settings from configuration file.
 *
 * @param {string} settings Setting array to read from.
 */
google.ads.adwords.AppConfig.prototype.readSettings = function(
    settings) {
  google.ads.common.AppConfigBase.prototype.readSettings.call(this,
      settings);
  this.setEmail(settings[this.EMAIL_] || this.getEmail());
  this.setPassword(settings[this.PASSWORD_] || this.getPassword());
  this.setClientEmail(settings[this.CLIENT_EMAIL_] || this.getClientEmail());
  this.setClientCustomerId(settings[this.CLIENT_CUSTOMER_ID_] ||
      this.getClientCustomerId());
  this.setDeveloperToken(settings[this.DEVELOPER_TOKEN_] ||
      this.getDeveloperToken());
  this.setAuthToken(settings[this.AUTHTOKEN_] || this.getAuthToken());
  this.setUserAgent(settings[this.USER_AGENT_] || this.getUserAgent());
  this.setAdWordsApiServer(settings[this.ADWORDSAPI_SERVER_] ||
      this.getAdWordsApiServer());
};
