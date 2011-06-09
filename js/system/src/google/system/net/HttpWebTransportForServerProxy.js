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
 * @fileoverview Defines HttpWebTransportForServerProxy, a wrapper that uses a
 * server proxy for making HTTP calls.
 */

goog.provide('google.system.net.HttpWebTransportForServerProxy');

goog.require('goog.net.XhrIo');
goog.require('google.system.net.HttpWebTransport');

/**
 * This class defines a wrapper that uses a server proxy for making HTTP calls.
 *
 * @param {google.system.net.HttpWebTransportSettings} settings Setting to be
 * applied.
 * @extends google.system.net.HttpWebTransport
 * @constructor
 */
google.system.net.HttpWebTransportForServerProxy = function(settings) {
  google.system.net.HttpWebTransport.call(this, settings);
};
goog.inherits(google.system.net.HttpWebTransportForServerProxy,
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
google.system.net.HttpWebTransportForServerProxy.prototype.send = function(url,
    method, content, headers, timeoutInterval, onSuccess, onFailure) {
  content = 'params=' + encodeURIComponent(content) +
      '&method=' + method + '&url=' + encodeURIComponent(url) + '&headers=' +
      encodeURIComponent(goog.json.serialize(headers));
  url = this.getSettings().getSetting('ProxyUrl');

  goog.net.XhrIo.send(url, goog.bind(
    function(event) {
      var success = event.target.isSuccess();
      var status = event.target.getStatus();
      var response = event.target.getResponseText();
      if (success && status == 200) {
        if (onSuccess) {
          onSuccess(response);
        }
      } else {
        if (onFailure) {
          onFailure(response);
        }
      }
    }, this),
    'POST', content, headers, timeoutInterval
  );
};
