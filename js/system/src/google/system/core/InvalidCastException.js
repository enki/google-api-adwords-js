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
 * @fileoverview Defines InvalidCastException.
 */

goog.provide('google.system.core.InvalidCastException');

goog.require('google.system.core.Exception');

/**
 * An exception that is thrown by a method when an argument of wrong type is
 * passed into it as an argument.
 *
 * @extends google.system.core.Exception
 * @constructor
 * @param {string?} message An optional error message for the exception.
 * @param {Object?} innerException If this exception was thrown in response to
 *     another exception, then you can wrap the original exception within this
 *     exception.
 */
google.system.core.InvalidCastException = function(message,
    innerException) {
  google.system.core.Exception.call(this, message, innerException);
};
goog.inherits(google.system.core.InvalidCastException,
    google.system.core.Exception);
