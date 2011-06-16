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
 * @fileoverview Defines RequestHeader, the Soap Request header for AdWords
 *     API services.
 */

goog.provide('google.ads.adwords.RequestHeader');

goog.require('google.system.soap.Object');
goog.require('google.system.soap.ObjectType');

/**
 * Soap Request header for AdWords API services.
 *
 * @constructor
 */
google.ads.adwords.RequestHeader = function() {
  google.system.soap.Object.call(this);
};
var type = google.system.soap.ObjectType.defineType(null,
    'google.ads.adwords.RequestHeader', false);

type.addProperty('authToken', 'string', 'authToken', false, true);
type.addProperty('clientCustomerId', 'string', 'clientCustomerId', false, true);
type.addProperty('clientEmail', 'string', 'clientEmail', false, true);
type.addProperty('developerToken', 'string', 'developerToken', false, true);
type.addProperty('userAgent', 'string', 'userAgent', false, true);
type.addProperty('validateOnly', 'boolean', 'validateOnly', false, true);
type.addProperty('partialFailure', 'boolean', 'partialFailure', false, true);
