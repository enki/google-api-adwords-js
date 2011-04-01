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
 * @fileoverview Defines AdWordsServiceFactory, the factory class for all
 * AdWords API services.
 */

goog.provide('google.ads.adwords.ServiceFactory');

goog.require('goog.string.format');

goog.require('google.ads.adwords.AppConfig');
goog.require('google.ads.adwords.RequestHeader');
goog.require('google.ads.adwords.SOAPHeaderServiceListener');
goog.require('google.ads.adwords.ServiceSignature');
goog.require('google.ads.common.AuthToken');
goog.require('google.ads.common.ServiceFactory');
goog.require('google.ads.common.ServiceFactory');
goog.require('google.system.core.ArgumentNullException');
goog.require('google.system.core.InvalidCastException');
goog.require('google.system.net.HttpWebTransportFactory');

/**
 * The factory class for all AdWords API services.
 *
 * @param {google.ads.adwords.AppConfig} config AdWords configuration
 * properties.
 * @constructor
 */
google.ads.adwords.ServiceFactory = function(config) {
  google.ads.common.ServiceFactory.call(this, config);
  this.defaultListeners_ = [google.ads.adwords.SOAPHeaderServiceListener];
};
goog.inherits(google.ads.adwords.ServiceFactory,
    google.ads.common.ServiceFactory);

/**
 * Gets a useragent string that can be used with the library.
 *
 * @return {string} The useragent string to be used with the library.
 */
google.ads.adwords.ServiceFactory.prototype.getUseragent =
    function() {
  return this.config_.getSignature() + '|' + this.config_.getUserAgent();
};

/**
 * Create a service object.
 *
 * @param {google.ads.common.ServiceSignature} signature Signature of
 * the service being created.
 * @param {string} serverUrl The server to which the API calls should be made.
 * @return {google.system.soap.Service} An instance of the desired
 * service type.
 */
google.ads.adwords.ServiceFactory.prototype.createService = function(
    signature, serverUrl) {
  if (serverUrl == null) {
    serverUrl = this.config_.getAdWordsApiServer();
  }

  if (signature == null) {
    throw new google.system.core.ArgumentNullException('signature');
  }

  if (!(signature instanceof google.ads.adwords.ServiceSignature)) {
    throw new google.system.core.InvalidCastException(
        goog.string.format(google.ads.adwords.AdWordsErrorMessages.
            SignatureIsOfWrongType, 'google.ads.adwords.ServiceSignature'));
  }
  var serviceType =
      goog.getObjectByName(signature.getServiceType().getFullClassName());
  var service = new serviceType();

  service.setHttpWebTransport(google.system.net.HttpWebTransportFactory.create(
      this.config_.getHttpWebTransport(),
      this.config_.getHttpWebTransportSettings()));

  for (var i = 0; i < this.defaultListeners_.length; i++) {
    var listener = this.defaultListeners_[i];
    service.registerListener(new listener(this.getAppConfig()));
  }

  service.setUrl(goog.string.format('%s/api/adwords/%s/%s/%s', serverUrl,
        signature.getGroupName(), signature.getVersion(),
        signature.getServiceName()));

  return service;
};
