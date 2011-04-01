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
 * @fileoverview Defines ArgumentNullException.
 */

goog.provide('google.system.core.ArgumentNullException');

goog.require('google.system.core.Exception');

/**
 * An exception that is thrown by a method when a null value is passed into
 * it as an argument, and the method doesn't accept null as a value for that
 * argument.
 *
 * @constructor
 * @param {string} argumentName The name of argument that had a null value.
 * @param {string?} message An optional error message for the exception.
 * @param {Object?} innerException If this exception was thrown in response to
 * another exception, then you can wrap the original exception within this
 * exception.
 */
google.system.core.ArgumentNullException = function(argumentName,
    message, innerException) {
  google.system.core.Exception.call(this, message, innerException);
  this.argumentName_ = argumentName;
};
goog.inherits(google.system.core.ArgumentNullException,
    google.system.core.Exception);

/**
 * Gets the argument name associated with thie exception.
 *
 * @return {string} The argument name.
 */
google.system.core.ArgumentNullException.prototype.getArgumentName =
    function() {
  return this.argumentName_;
};
