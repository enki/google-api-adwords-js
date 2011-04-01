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
 * @fileoverview Defines AdWords Service, the base class for all SOAP services
 * supported by this library.
 */

goog.provide('google.ads.common.Service');

goog.require('google.system.soap.Service');

/**
 * The base class for all SOAP services supported by this library. Must be
 * subclassed and getCustomException_ implemented.
 *
 * @constructor
 */
google.ads.common.Service = function() {
  google.system.soap.Service.call(this);
};
goog.inherits(google.ads.common.Service, google.system.soap.Service);

/**
 * Overriden soap.Service method to handle ads specific exceptions.
 *
 * @param {string} methodName Name of the method in the service that is been
 * invoked.
 * @param {Object.<String,Object>} parameterValues Parameters passed to the
 * method.
 * @param {function(google.system.soap.Object)} successCallback Callback
 * function to be invoked if the request finalizes successfully, the
 * de-serialized SOAP Object gets passed to the callback.
 * @param {function(google.system.soap.Object)} failureCallback Callback
 * function to be invoked if the request finalizes with an error, the
 * de-serialized SOAP Exception gets passed to the callback.
 */
google.ads.common.Service.prototype.invoke = function(methodName,
    parameterValues, successCallback, failureCallback) {
  var service = this;
  google.system.soap.Service.prototype.invoke.call(service, methodName,
      parameterValues, function(retval) {
        successCallback(retval);
      },
      function(soapException) {
        failureCallback(service.getCustomException_(soapException));
      });
};

/**
 * Gets a custom exception that wraps the SOAP exception thrown
 * by the server. Meant to be overriden by the specific product service class.
 *
 * @param {google.system.soap.SoapException} ex The SOAP exception.
 * @return {google.system.core.Exception} A custom exception object
 * that wraps the SOAP exception. The exact type depends on what the overriding
 * service deserializes the fault xml into.
 * @private
 */
google.ads.common.Service.prototype.getCustomException_ =
    function(ex) {
  return ex;
};
