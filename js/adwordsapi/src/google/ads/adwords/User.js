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
 * @fileoverview Defines AdWordsUser, a class that represents an AdWords
 * API user.
 */

goog.provide('google.ads.adwords.User');

goog.require('google.ads.adwords.AppConfig');
goog.require('google.ads.common.AdsUser');

/**
 * Service creation params for AdWords API family of services.
 *
 * @param {google.ads.adwords.AppConfig} config AdWords configuration
 * properties.
 * @extends google.ads.common.AdsUser
 * @constructor
 */
google.ads.adwords.User = function(config) {
  if (config == null) {
    config = new google.ads.adwords.AppConfig();
  }
  google.ads.common.AdsUser.call(this, config,
      google.ads.adwords.ServiceRegistry.getInstance());
};
goog.inherits(google.ads.adwords.User, google.ads.common.AdsUser);
