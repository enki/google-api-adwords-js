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
 * @fileoverview Defines ServiceSignature, an API signature object. This class
 * is used as a support class to assist AdsUser in creating a service object.
 */

goog.provide('google.ads.common.ServiceSignature');

/**
 * Defines an API signature object. This class is used as a support class
 * to assist AdsUser in creating a service object.
 *
 * @constructor
 * @param {string} version Service version.
 * @param {string} serviceName Service name.
 * @param {string} protocol The supported protocol.
 */
google.ads.common.ServiceSignature = function(version, serviceName, protocol) {
  this.version = version;
  this.serviceName = serviceName;
  this.protocol = protocol;
};

/**
 * The various protocols supported by the library.
 */
google.ads.common.ServiceSignature.SupportedProtocols = {
  SOAP: 'SOAP'
};

/**
 * Gets a unique id to distinguish the service represented by this signature
 * object.
 *
 * @return {string} The id.
 */
google.ads.common.ServiceSignature.prototype.getId = function() {
  return this.version + '.' + this.serviceName;
};

/**
 * Gets the service version.
 *
 * @return {string} The service version.
 */
google.ads.common.ServiceSignature.prototype.getVersion = function() {
  return this.version;
};

/**
 * Gets the service name.
 *
 * @return {string} The service name.
 */
google.ads.common.ServiceSignature.prototype.getServiceName =
    function() {
  return this.serviceName;
};

/**
 * Gets the type of service.
 *
 * @return {google.system.soap.ServiceType} The service type.
 */
 google.ads.common.ServiceSignature.prototype.getServiceType =
    function() {
   return null;
};

/**
 * Gets the supported protocol.
 *
 * @return {string} The supported protocol.
 */
 google.ads.common.ServiceSignature.prototype.getSupportedProtocol =
    function() {
  return this.protocol;
};
