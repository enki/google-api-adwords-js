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
 * @fileoverview Lists all the services available through this library.
 */

goog.provide('google.ads.adwords.ServiceRegistry');

goog.require('google.ads.adwords.ServiceSignature');
goog.require('google.ads.common.ServiceRegistry');

/**
 * Lists all the services available through this library.
 *
 * @constructor
 * @extends google.ads.common.ServiceRegistry
 */
google.ads.adwords.ServiceRegistry = function() {
  google.ads.common.ServiceRegistry.call(this);
};
goog.inherits(google.ads.adwords.ServiceRegistry,
    google.ads.common.ServiceRegistry);

/**
 * Retrieves a singleton instance of this class.
 *
 * @return {google.ads.adwords.ServiceRegistry} the instance.
 */
google.ads.adwords.ServiceRegistry.getInstance = function() {
  if (!google.ads.adwords.ServiceRegistry.instance_) {
    google.ads.adwords.ServiceRegistry.instance_ =
       new google.ads.adwords.ServiceRegistry();
  }
  return google.ads.adwords.ServiceRegistry.instance_;
};

/**
 * Creates a service creation parameter for defining an AdWords service.
 *
 * @param {string} version Service version.
 * @param {string} groupName Group name.
 * @param {string} serviceName Service name.
 * @param {object} factoryClass The factory class.
 * @return {google.ads.adwords.ServiceRegistrySignature} A service
 *     creation parameter defining this service.
 */
google.ads.adwords.ServiceRegistry.prototype.registerServiceFactory = function(
    version, groupName, serviceName, factoryClass) {

  var signature = new google.ads.adwords.ServiceSignature(version, groupName,
      serviceName);
  var namespace = 'google.ads.adwords.AdWordsService.' + version;
  try {
    // Make the closure compiler happy.
    var pfnProvides = goog.provide;
    pfnProvides(namespace);
  } catch (e) { }
  var ns = goog.getObjectByName(namespace);
  ns[serviceName] = signature;

  google.ads.common.ServiceRegistry.prototype.registerServiceFactory.call(this,
      signature, factoryClass);

  return signature;
};
