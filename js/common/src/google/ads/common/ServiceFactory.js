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
 * @fileoverview Defines ServiceFactory, interface to a factory which can
 * create a particular group of services.
 */

goog.provide('google.ads.common.ServiceFactory');

/**
 * Interface to a factory which can create a particular group of services.
 *
 * @param {google.ads.adwords.AppConfig} config AdWords configuration
 * properties.
 * @constructor
 */
google.ads.common.ServiceFactory = function(config) {
  this.config_ = config;
};

/**
 * Gets a configuration reader suitable for this factory.
 *
 * @return {google.ads.common.AppConfigBase} The config reader.
 */
google.ads.common.ServiceFactory.prototype.getAppConfig = function() {
  return this.config_;
};

/**
 * Create a service object.
 *
 * @param {google.ads.common.ServiceSignature} signature Signature of
 * the service being created.
 * @param {string} serverUrl The server to which the
 * API calls should be made.
 * @return {google.system.soap.Service} An instance of the desired
 * service type.
 */
google.ads.common.ServiceFactory.prototype.createService = function(
    signature, serverUrl) {
  return null;
};
