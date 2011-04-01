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
 * @fileoverview Defines Exception.
 */

goog.provide('google.system.core.Exception');

/**
 * This class is the base class for all exceptions defined by the library.
 *
 * @constructor
 * @param {string?} message An optional error message for the exception.
 * @param {Object?} innerException If this exception was thrown in response to
 * another exception, then you can wrap the original exception within this
 * exception.
 */
google.system.core.Exception = function(message, innerException) {
  this.message_ = message;
  this.innerException_ = innerException;
};

/**
 * Get the exception message.
 *
 * @return {string|null} The exception message if set.
 */
google.system.core.Exception.prototype.getMessage = function() {
  return this.message_;
};

/**
 * Get the inner exception.
 *
 * @return {object|null} The inner exception of Exception type if set.
 */
google.system.core.Exception.prototype.getInnerException = function() {
  return this.innerException_;
};
