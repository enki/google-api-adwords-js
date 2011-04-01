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
 * @fileoverview Defines AdsUser, a class that represents an Ads API user.
 */

goog.provide('google.ads.common.AdsUser');

goog.require('goog.array');
goog.require('goog.string.format');
goog.require('google.ads.common.ServiceSignature');
goog.require('google.system.core.ArgumentNullException');

/**
 * Represents an Ads API user.
 *
 * @param {google.ads.adwords.AppConfig} config AdWords configuration
 * properties.
 * @param {google.ads.adwords.AppConfig} serviceRegistry Service
 * registry the user will use to retrieve registered services.
 * @constructor
 */
google.ads.common.AdsUser = function(config, serviceRegistry) {
  this.listeners_ = [];
  this.serviceFactoryMap_ = {};
  this.config_ = config;
  this.serviceRegistry_ = serviceRegistry;
};

/**
 * Checks the registry for the factory register to a given service signature
 * and then instanciate the factory in case of necessary and returns it.
 *
 * @param {google.ads.common.ServiceSignature} serviceSignature The service
 * signature to look up.
 * @return {google.ads.common.ServiceFactory} The instanciated factory.
 * @private
 */
google.ads.common.AdsUser.prototype.getServiceFactory_ = function(
    serviceSignature) {
  var factoryClass =
      this.serviceRegistry_.getServiceFactoryClass(serviceSignature);
  if (factoryClass && !this.serviceFactoryMap_[factoryClass]) {
    this.serviceFactoryMap_[factoryClass] = new factoryClass(this.config_);
  }
  return this.serviceFactoryMap_[factoryClass];
};

/**
 * Creates an object of the requested type of service.
 *
 * @param {string} serviceSignature Signature of the service being requested.
 * @param {string} serverUrl The server url for Ads service.
 * @return {google.system.soap.Service} An object of the requested
 * type of service. The caller should cast this object to the desired type.
 */
google.ads.common.AdsUser.prototype.getService = function(
    serviceSignature, serverUrl) {
  if (serviceSignature == null) {
    throw new google.system.core.ArgumentNullException('serviceSignature');
  }
  var factory = this.getServiceFactory_(serviceSignature);
  if (!factory) {
    throw new ArgumentException(goog.string.format(
        Google.Api.Ads.Common.CommonErrorMessages.
            UnregisteredServiceTypeRequested,
        serviceSignature.getServiceName()));
  }
  return factory.createService(serviceSignature, serverUrl);
};

/**
 * Registers a new SOAP listener that will chained to every service obtained
 * by this user.
 *
 * @param {google.system.soap.ServiceListener} listener Listener to be
 * registered.
 */
google.ads.common.AdsUser.prototype.registerListener = function(
    listener) {
  this.listeners_.push(listener);
};

/**
 * Removes a listener from this user.
 *
 * @param {google.system.soap.ServiceListener} listener Listener to be removed.
 * @return {boolean} True if the listener was found and removed, false
 * otherwise.
 */
google.ads.common.AdsUser.prototype.removeListener = function(
    listener) {
  return goog.array.remove(this.listeners_, listener);
};

/**
 * Retrieves all registered listeners of this user.
 * @return {Array.<google.system.soap.ServiceListener>} A list of listeners.
 */
google.ads.common.AdsUser.prototype.getListeners = function() {
  return goog.array.clone(this.listeners_);
};

/**
 * Retrieves the user configuration.
 *
 * @return {google.ads.common.AppConfigBase} The configuration.
 */
google.ads.common.AdsUser.prototype.getConfig = function() {
  return this.config_;
};
