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
 * @fileoverview Defines ApiException, a custom exception class for
 * wrapping AdWords API SOAP exceptions.
 */

goog.provide('google.ads.adwords.ApiException');

goog.require('google.ads.adwords.Exception');

/**
 * A custom exception class for wrapping AdWords API SOAP exceptions.
 *
 * @extends google.ads.adwords.Exception
 * @constructor
 * @param {Object} apiException The original ApiException object from
 * AdWords API.
 * @param {string?} message An optional error message for the exception.
 * @param {Object?} innerException If this exception was thrown in response to
 * another exception, then you can wrap the original exception within this
 * exception.
 */
google.ads.adwords.ApiException = function(apiException, message,
    innerException) {
  google.ads.adwords.Exception.call(this, message, innerException);
  this.apiException = apiException;
};
goog.inherits(google.ads.adwords.ApiException, google.ads.adwords.Exception);

/**
 * Gets the ApiException object.
 *
 * @return {Object} The ApiException object from AdWords API.
 */
google.ads.adwords.ApiException.prototype.getApiException = function() {
  return this.apiException;
};
