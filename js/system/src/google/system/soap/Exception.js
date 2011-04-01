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
 * @fileoverview Defines a SOAP Exception, a generic exception thrown when a
 * SOAP call fails.
 */

goog.provide('google.system.soap.Exception');

goog.require('google.system.core.Exception');

/**
 * A generic exception thrown when a SOAP call fails.
 *
 * @constructor
 * @param {string} faultCode The fault code for this SOAP Exception.
 * @param {string} faultString The fault string for this SOAP Exception.
 * @param {string} detail The detail for this SOAP Exception.
 * @param {?string} message An optional error message for the exception.
 * @param {?Object} innerException If this exception was thrown in response to
 * another exception, then you can wrap the original exception within this
 * exception.
 */
google.system.soap.Exception = function(faultCode, faultString,
    detail, message, innerException) {
  google.system.core.Exception.call(this, message, innerException);
  this.faultCode_ = faultCode;
  this.faultString_ = faultString;
  this.detail_ = detail;
};
goog.inherits(google.system.soap.Exception, google.system.core.Exception);

/**
 * Get the SOAP fault code.
 *
 * @return {string} The SOAP fault code.
 */
google.system.core.Exception.prototype.getFaultCode = function() {
  return this.faultCode_;
};

/**
 * Get the SOAP fault string.
 *
 * @return {string} The SOAP fault string.
 */
google.system.core.Exception.prototype.getFaultString = function() {
  return this.faultString_;
};

/**
 * Get the SOAP fault detail.
 *
 * @return {string} The SOAP fault detail.
 */
google.system.core.Exception.prototype.getDetail = function() {
  return this.detail_;
};
