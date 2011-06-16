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
 * @fileoverview Defines ResponseHeader, the Soap Response header for AdWords
 *     API services.
 */

goog.provide('google.ads.adwords.ResponseHeader');

goog.require('google.system.soap.Object');

/**
 * Soap Response header for AdWords API services.
 *
 * @param {string} version Version of the API.
 * @constructor
 */
google.ads.adwords.ResponseHeader = function(version) {
  google.system.soap.Object.call(this);

  /**
   * API version.
   * @type {string}
   * @private
   */
  this.version_ = version;
};
var type = google.system.soap.ObjectType.defineType(null,
    'google.ads.adwords.ResponseHeader', false);

type.addProperty('requestId', 'string', 'requestId', false, true);
type.addProperty('operations', 'integer', 'operations', false, true);
type.addProperty('responseTime', 'integer', 'responseTime', false, true);
type.addProperty('units', 'integer', 'units', false, true);
