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
 * @fileoverview Defines AuthTokenException, an exception class that represents
 *     an exception thrown by ClientLogin API.
 */

goog.provide('google.ads.common.AuthTokenException');

goog.require('google.ads.common.AdsException');

/**
 * An exception class that represents an exception thrown by ClientLogin API.
 *
 * @extends google.ads.common.AdsException
 * @constructor
 * @param {number} errorCode The error code associated with this Auth Exception.
 * @param {string} errorUrl The url that describes this error.
 * @param {string} captchaToken The token associated with the captcha, if a
 *     Require Captcha error is triggered.
 * @param {string} captchaUrl The url for the captcha. If Require Captcha error
 *     is triggered, then this url should be presented to the users to unlock
 *     their accounts.
 * @param {string?} message An optional error message for the exception.
 * @param {Object?} innerException If this exception was thrown in response to
 *     another exception, then you can wrap the original exception within this
 *     exception.
 */
google.ads.common.AuthTokenException = function(errorCode, info,
    errorUrl, captchaToken, captchaUrl, message, innerException) {
  google.ads.common.AdsException.call(this, message, innerException);

  /**
   * Authentication error code.
   * @type {string}
   * @private
   */
  this.errorCode_ = errorCode;

  /**
   * Authentication error info.
   * @type {string}
   * @private
   */
  this.info_ = info;

  /**
   * Error url.
   * @type {string}
   * @private
   */
  this.errorUrl_ = errorUrl;

  /**
   * Captcha token, populated in case a captcha challenge is needed to be
   * addressed.
   * @type {string}
   * @private
   */
  this.captchaToken_ = captchaToken;

  /**
   * Captcha Url.
   * @type {string}
   * @private
   */
  this.captchaUrl_ = captchaUrl;
};
goog.inherits(google.ads.common.AuthTokenException,
    google.ads.common.AdsException);

/**
 * Gets the error code.
 *
 * @return {number} The error code.
 */
google.ads.common.AuthTokenException.prototype.getErrorCode =
    function() {
  return this.errorCode_;
};

/**
 * Sets the error code.
 *
 * @param {string} errorCode The error code.
 */
google.ads.common.AuthTokenException.prototype.setErrorCode =
    function(errorCode) {
  this.errorCode_ = errorCode;
};

/**
 * Gets the error info.
 *
 * @return {number} The error info.
 */
google.ads.common.AuthTokenException.prototype.getInfo =
    function() {
  return this.info_;
};

/**
 * Sets the error info.
 *
 * @param {string} info The error info.
 */
google.ads.common.AuthTokenException.prototype.setInfo =
    function(info) {
  this.info_ = info;
};

/**
 * Gets the error url.
 *
 * @return {string} The error url.
 */
google.ads.common.AuthTokenException.prototype.getErrorUrl =
    function() {
  return this.errorUrl_;
};

/**
 * Sets the error url.
 *
 * @param {string} errorUrl The error url.
 */
google.ads.common.AuthTokenException.prototype.setErrorUrl =
    function(errorUrl) {
  this.errorUrl_ = errorUrl;
};

/**
 * Gets the captcha token.
 *
 * @return {string} The captcha token.
 */
google.ads.common.AuthTokenException.prototype.getCaptchaToken =
    function() {
  return this.captchaToken_;
};

/**
 * Sets the captcha token.
 *
 * @param {string} captchaToken The captcha token.
 */
google.ads.common.AuthTokenException.prototype.setCaptchaToken =
    function(captchaToken) {
  this.captchaToken_ = captchaToken;
};

/**
 * Gets the captcha url.
 *
 * @return {string} The captcha url.
 */
google.ads.common.AuthTokenException.prototype.getCaptchaUrl =
    function() {
  return this.captchaUrl_;
};

/**
 * Sets the captcha url.
 *
 * @param {string} captchaUrl The captcha url.
 */
google.ads.common.AuthTokenException.prototype.setCaptchaUrl =
    function(captchaUrl) {
  this.captchaToken_ = captchaUrl;
};
