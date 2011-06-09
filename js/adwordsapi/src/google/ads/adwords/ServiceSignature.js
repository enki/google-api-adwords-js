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
 * @fileoverview Defines AdWordsServiceFactory, that provides service creation
 * params for AdWords API family of services.
 */

goog.provide('google.ads.adwords.ServiceSignature');

goog.require('goog.string.format');
goog.require('google.ads.common.ServiceSignature');
goog.require('google.system.soap.ServiceType');

/**
 * Service creation params for AdWords API family of services.
 *
 * @param {string} version Service version.
 * @param {string} groupName The group name.
 * @param {string} serviceName Service name.
 * @extends google.ads.common.ServiceSignature
 * @constructor
 */
google.ads.adwords.ServiceSignature = function(version, groupName,
    serviceName) {
  google.ads.common.ServiceSignature.call(this, version, serviceName,
      google.ads.common.ServiceSignature.SupportedProtocols.SOAP);
  this.groupName = groupName;
};
goog.inherits(google.ads.adwords.ServiceSignature,
    google.ads.common.ServiceSignature);

/**
 * Gets the group name.
 *
 * @return {string} The group name.
 */
google.ads.adwords.ServiceSignature.prototype.getGroupName =
    function() {
  return this.groupName;
};

/**
 * Gets the type of service.
 *
 * @return {google.system.soap.ServiceType} The service type.
 */
google.ads.adwords.ServiceSignature.prototype.getServiceType =
    function() {
  return google.system.soap.ServiceType.getServiceTypeByName(
      goog.string.format('google.ads.adwords.%s.%s', this.getVersion(),
          this.getServiceName()));
};
