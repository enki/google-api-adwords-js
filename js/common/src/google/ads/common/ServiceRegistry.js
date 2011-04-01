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
 * @fileoverview Serves as a registry of all the services available and its
 * factories.
 */

goog.provide('google.ads.common.ServiceRegistry');

goog.require('google.ads.common.ServiceSignature');

/**
 * Base class to service registries.
 *
 * @constructor
 */
google.ads.common.ServiceRegistry = function() {
   this.serviceFactories_ = [];
};

/**
 * Registers a new service factory.
 *
 * @param {google.ads.common.ServiceSignature} signature Signature of the
 * service to register.
 * @param {object} factoryClass The factory class in charge to create the
 * service.
 */
google.ads.common.ServiceRegistry.prototype.registerServiceFactory =
    function(signature, factoryClass) {
  this.serviceFactories_[signature.getId()] = {
      signature: signature, factoryClass: factoryClass };
};

/**
 * Gets all service signatures registered.
 *
 * @return {Array.<google.ads.common.ServiceSignature>} The registered service
 * signatures.
 */
google.ads.common.ServiceRegistry.prototype.getServiceSignatures = function() {
  var ret = [];
  for (var key in this.serviceFactories_) {
    var entry = this.serviceFactories_[key];
    ret.push(entry.signature);
  }
  return ret;
};

/**
 * Gets all service signatures registered.
 *
 * @return {Array.<google.ads.common.ServiceSignature>} The registered service
 * signatures.
 */
google.ads.common.ServiceRegistry.prototype.getServiceFactories = function() {
  var filterFn = function(entry, i, arr) {
    return goog.array.indexOf(entry.factoryClassname, arr) <= -1;
  };
  return goog.array.filter(this.serviceFactories_, filterFn);
};

/**
 * Returns a service factory given its signature.
 *
 * @param {google.ads.common.ServiceSignature|string} signature Either the
 * service signature object or the signature id.
 * @return {object|null} The registered service factory class or null if not
 * found.
 */
google.ads.common.ServiceRegistry.prototype.getServiceFactoryClass = function(
    signature) {
  var entry;
  if (signature instanceof google.ads.common.ServiceSignature) {
    entry = this.serviceFactories_[signature.getId()];
  } else {
    entry = this.serviceFactories_[signature];
  }
  return entry ? entry.factoryClass : null;
};
