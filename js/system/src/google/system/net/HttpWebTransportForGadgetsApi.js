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
 * @fileoverview Defines HttpWebTransport, a wrapper that uses Google Gadgets
 *     API for making for making HTTP calls.
 */

goog.provide('google.system.net.HttpWebTransportForGadgetsApi');

goog.require('google.system.net.HttpWebTransport');

/**
 * This class defines a wrapper that uses Google Gadgets API for making for
 * making HTTP calls.
 *
 * @param {google.system.net.HttpWebTransportSettings} settings Settings to be
 *     applied.
 * @extends google.system.net.HttpWebTransport
 * @constructor
 */
google.system.net.HttpWebTransportForGadgetsApi = function(settings) {
  google.system.net.HttpWebTransport.call(this, settings);
};
goog.inherits(google.system.net.HttpWebTransportForGadgetsApi,
    google.system.net.HttpWebTransport);

/**
 * Sends a request to the requested server.
 *
 * @param {string} url The url to make the request to.
 * @param {string} method The HTTP method.
 * @param {Object} content The data to send to servers.
 * @param {Object} headers The HTTP headers.
 * @param {number} timeoutInterval The timeout interval.
 * @param {function} onSuccess The callback for success.
 * @param {function} onFailure The callback for failure.
 */
google.system.net.HttpWebTransportForGadgetsApi.prototype.send = function(url,
    method, content, headers, timeoutInterval, onSuccess, onFailure) {
  var params = {};
  params[gadgets.io.RequestParameters.METHOD] = method;
  params[gadgets.io.RequestParameters.POST_DATA] = content;
  params[gadgets.io.RequestParameters.HEADERS] = headers;

  gadgets.io.makeRequest(url, goog.bind(function(response) {
    if (!response.errors.length) {
      onSuccess(response.text);
    } else {
      onFailure(response.text);
    }
  }, this), params);
};
