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
 * @fileoverview Defines AdsClient, a common base type for Ads services.
 */

goog.provide('google.ads.common.AuthToken');

goog.require('google.ads.common.AdsException');
goog.require('google.ads.common.AuthTokenErrorCode');
goog.require('google.ads.common.AuthTokenException');
goog.require('google.ads.common.CommonErrorMessages');

goog.require('google.system.core.ArgumentNullException');
goog.require('google.system.net.HttpWebTransportFactory');

/**
 * This class wraps the ClientLogin API. See
 * http://code.google.com/apis/accounts/docs/AuthForInstalledApps.html
 * for details.
 *
 * @param {AppConfigBase} config Configuration.
 * @param {string} service Service name.
 * @param {string} email Email address.
 * @param {string} password Password.
 * @constructor
 */
google.ads.common.AuthToken = function(config, service, email,
    password) {
  if (goog.isNull(config)) {
    throw new google.system.core.ArgumentNullException('config');
  }

  /**
   * Service name to include in the request.
   * @type {string}
   * @private
   */
  this.service_ = service;

  /**
   * Account email address.
   * @type {string}
   * @private
   */
  this.email_ = email;

  /**
   * Account password.
   * @type {string}
   * @private
   */
  this.password_ = password;

  /**
   * Library configuration. Used to obtain the library configured Http
   * transport.
   * @type {string}
   * @private
   */
  this.config_ = config;

  /**
   * Source to report request the token.
   * @type {string}
   * @private
   */
  this.SOURCE_ = 'Google-' + this.config_.getSignature();
};

/**
 * Url endpoint for ClientLogin API.
 *
 * @private
 */
google.ads.common.AuthToken.prototype.URL_ =
    'https://www.google.com/accounts/ClientLogin';

/**
 * The prefix to be appended for captcha urls.
 *
 * @private
 */
google.ads.common.AuthToken.prototype.CAPTCHA_URL_PREFIX_ =
    'http://www.google.com/accounts/';

/**
 * Account type to be used with ClientLogin API.
 *
 * @private
 */
google.ads.common.AuthToken.prototype.ACCOUNT_TYPE_ = 'GOOGLE';

/**
 * Obtains a ClientLogin token for use with various Ads APIs.
 *
 * @param {function} onSuccess Callback function to be invoked in case of
 *     success. The authtoken gets passed to the function.
 * @param {function} onError Callback function to be invoked in case of
 *     error. The authentication exception is passed to the function.
 */
google.ads.common.AuthToken.prototype.getToken = function(
    onSuccess, onError) {
  var postParams =
    'accountType=' + encodeURIComponent(this.ACCOUNT_TYPE_) +
    '&Email=' + encodeURIComponent(this.email_) +
    '&Passwd=' + encodeURIComponent(this.password_) +
    '&service=' + encodeURIComponent(this.service_) +
    '&source=' + encodeURIComponent(this.SOURCE_);

  var transport = google.system.net.HttpWebTransportFactory.create(
      this.config_.getHttpWebTransport(),
      this.config_.getHttpWebTransportSettings());

  if (!goog.isNull(transport)) {
    transport.send(this.URL_, 'POST', postParams, null, 0, goog.bind(
        function(response) {
          var objResponse = this.parseResponse_(response);
          if (onSuccess != null) {
            onSuccess(objResponse['Auth']);
          }
        }, this),
        goog.bind(function(response) {
          var authException = this.extractException_(response);
          if (onError != null) {
            onError(authException);
          }
        }, this)
    );
  } else {
    onError(new google.ads.common.AdsException('Can\'t instanciate web ' +
        'transport ' + this.config_.getHttpWebTransport()));
  }
};

/**
 * Extracts a ClientLogin failure and wraps it into an AuthTokenException.
 *
 * @param {string} response The Http web response.
 * @return {google.ads.common.AuthTokenException} An AuthTokenException
 *     that corresponds to the parsed error response.
 * @private
 */
google.ads.common.AuthToken.prototype.extractException_ = function(
    response) {
  var tblResponse = this.parseResponse_(response);
  var url = tblResponse['Url'];
  var errCode = tblResponse['Error'];
  var info = tblResponse['Info'];
  var captchaToken = tblResponse['CaptchaToken'];
  var captchaUrl = this.CAPTCHA_URL_PREFIX_ + tblResponse['CaptchaUrl'];

  return new google.ads.common.AuthTokenException(errCode, info, url,
      captchaToken, captchaUrl,
      google.ads.common.CommonErrorMessages.AuthTokenLoginFailed);
};

/**
 * Parses a ClientLogin response into a hashtable.
 *
 * @param {string} response The Http web response.
 * @return {Object} The parsed response as an object.
 * @private
 */
google.ads.common.AuthToken.prototype.parseResponse_ = function(
    response) {
  var tblResponse = {};
  var splits = response.split('\n');
  for (var i = 0; i < splits.length; i++) {
    var subsplits = splits[i].split('=', 2);
    if (subsplits.length == 2) {
      tblResponse[subsplits[0]] = subsplits[1];
    }
  }
  return tblResponse;
};
