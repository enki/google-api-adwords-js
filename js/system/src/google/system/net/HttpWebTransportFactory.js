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
 * @fileoverview Defines HttpWebTransportFactory, a factory for creating
 *     HttpWebTransport.
 */

goog.provide('google.system.net.HttpWebTransportFactory');

/**
 * Factory for HttpWebTransport kind of objects.
 *
 * @constructor
 */
google.system.net.HttpWebTransportFactory = function() {
};

/**
 * Constructs a new HttpWebTransport object given its name and settings.
 *
 * @param {string} transportName Name of the provider.
 * @param {google.system.net.HttpWebTransportSettings} settings Settings to be
 *     applied.
 * @return {?google.system.net.HttpWebTransport} A new transport object
 *     already configured or null if not provided was found.
 */
google.system.net.HttpWebTransportFactory.create = function(transportName,
    settings) {
  var xhrProvider = goog.getObjectByName(transportName);

  if (!goog.isNull(xhrProvider)) {
    return new xhrProvider(settings);
  } else {
    return null;
  }
};
