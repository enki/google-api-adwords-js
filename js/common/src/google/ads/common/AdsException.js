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
 * @fileoverview Defines AdsClient, the base class for all exceptions thrown
 *     by the library related to an Ads API call.
 */

goog.provide('google.ads.common.AdsException');

goog.require('google.system.core.Exception');

/**
 * Base class for all exceptions thrown by the library related to an Ads API
 * call.
 *
 * @extends google.system.core.Exception
 * @constructor
 * @param {string?} message An optional error message for the exception.
 * @param {Object?} innerException If this exception was thrown in response to
 *     another exception, then you can wrap the original exception within this
 *     exception.
 */
google.ads.common.AdsException = function(message, innerException) {
  google.system.core.Exception.call(this, message, innerException);
};
goog.inherits(google.ads.common.AdsException, google.system.core.Exception);
