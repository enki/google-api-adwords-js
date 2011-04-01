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
 * @fileoverview Defines SOAPHeaderServiceListener, a service listener in
 * charge of injecting AdWords API SOAP headers before a request gets sent
 * to the servers.
 */

goog.provide('google.ads.adwords.SOAPHeaderServiceListener');

goog.require('google.ads.adwords.RequestHeader');
goog.require('google.system.soap.ServiceListener');

/**
 * A service listener in charge of injecting AdWords API SOAP headers
 * before a request gets sent to the servers.
 *
 * @param {google.ads.adwords.AppConfig} config AdWords configuration
 * properties.
 * @constructor
 */
google.ads.adwords.SOAPHeaderServiceListener = function(
    config) {
  google.system.soap.ServiceListener.call(this);
  this.config_ = config;
};
goog.inherits(google.ads.adwords.SOAPHeaderServiceListener,
    google.system.soap.ServiceListener);

/**
 * Called on before serialization, sets all AdWords API required headers from
 * config and then requests an auth token if required.
 *
 * @param {google.system.soap.SoapService} service Service object been invoked.
 * @param {string} methodName Name of the method.
 * @param {Array.<Object>} parameterValues Parameters passed to the method.
 * @param {function} successCallback Function to be called in case of sucesss.
 * @param {function(google.system.core.Exception)} failureCallback Function to
 * be called in case of an error occurred, an exception is expected by the
 * function.
 */
google.ads.adwords.SOAPHeaderServiceListener.prototype.beforeSerialize =
    function(service, methodName, parameterValues, successCallback,
        failureCallback) {
  this.makeRequestHeader_(service, this.config_, goog.bind(this.setHeader_,
      this, service, successCallback, failureCallback));
};

/**
 * Sets the header in the service object. Used as a callback from retrieving
 * the auth token.
 *
 * @param {google.system.soap.SoapService} service Service object been invoked.
 * @param {function} successCallback Function to be called in case of sucesss.
 * @param {function(google.system.core.Exception)} failureCallback Function to
 * call in case of a error, expects an exception to be passed to it.
 * @param {google.ads.adwords.RequestHeader} header Header to be set.
 * @private
 */
google.ads.adwords.SOAPHeaderServiceListener.prototype.setHeader_ = function(
    service, successCallback, failureCallback, header) {
  if (service.setRequestHeader != null) {
    service.setRequestHeader(header);
  }
  successCallback();
};

/**
 * Make a request header given a config.
 *
 * @param {google.system.soap.SoapService} service Service object been invoked.
 * @param {Object.<string, string>} config A dictionary of configuration,
 * parameters.
 * @param {function} callback A function to be called with the generated
 * RequestHeader object, to be injected in the called service.
 * @private
 */
google.ads.adwords.SOAPHeaderServiceListener.prototype.makeRequestHeader_ =
    function(service, config, callback) {
  var headers = this.readHeadersFromConfig_(config);
  var requestHeader = service.requestHeader;
  if (requestHeader == null) {
    var fullType = service.getType().getPropertyByName('requestHeader').
        getFullClassName();
    availableType = goog.getObjectByName(fullType);
    if (availableType != null) {
      requestHeader = new availableType();
    }
  }

  for (var key in headers) {
    var setter = 'set' + key.substr(0, 1).toUpperCase() + key.substr(1);
    var getter = 'get' + key.substr(0, 1).toUpperCase() + key.substr(1);

    // Respect any values set by the user, even if it is a null.
    if (requestHeader[getter] && typeof requestHeader[getter](headers[key]) !=
        'undefined') {
      continue;
    }

    if (requestHeader[setter] != null) {
      requestHeader[setter](headers[key]);
    }
  }

  if (headers['authToken'] == null) {
    var tokenGen = new google.ads.common.AuthToken(
        config, 'adwords', config.getEmail(), config.getPassword());
    tokenGen.getToken(function(token) {
      config.setConfigValue('authToken', token);
      requestHeader.setAuthToken(token);
      callback(requestHeader);
    });
  } else {
    callback(requestHeader);
  }
};

/**
 * Reads the headers from Application configuration.
 *
 * @param {google.ads.common.AppConfigBase} config The configuration
 * class.
 * @return {Object.<string, string>} An object, with key-value pairs as
 * headername, headervalue.
 * @private
 */
google.ads.adwords.SOAPHeaderServiceListener.prototype.readHeadersFromConfig_ =
    function(config) {
  var configHeaders = {};
  var headerKeys = ['authToken', 'email', 'password', 'clientCustomerId',
      'clientEmail', 'developerToken', 'applicationToken', 'userAgent'];

  for (var i = 0; i < headerKeys.length; i++) {
    var value = config.getConfigValue(headerKeys[i]);
    if (!goog.string.isEmptySafe(value)) {
      configHeaders[headerKeys[i]] = value;
    }
  }
  return configHeaders;
};
