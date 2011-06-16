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
 * @fileoverview Defines google.system.soap.ServiceType class.
 */

goog.provide('google.system.soap.ServiceType');

goog.require('google.system.soap.MethodSignature');
goog.require('google.system.soap.ObjectType');

/**
 * Represents a SOAP Service Type.
 * Contains that metadata that conforms a SOAP Object, like its properties,
 * XmlNamespace, etc.
 *
 * @param {string} xmlNamespace Xml namespace of the service.
 * @param {string} fullClassName Full class name of the service.
 * @param {string} fullBaseClassName Full class name of the base class for the
 *     service.
 * @extends google.system.soap.ObjectType
 * @constructor
 */
google.system.soap.ServiceType = function(xmlNamespace, fullClassName,
    fullBaseClassName) {
  google.system.soap.ObjectType.call(this, xmlNamespace, fullClassName, false,
      fullBaseClassName);

  /**
   * Service list of methods.
   * @type {Array.<google.system.soap.MethodSignature>}
   * @private
   */
  this.methods_ = [];
};
goog.inherits(google.system.soap.ServiceType, google.system.soap.ObjectType);

/**
 * Utility static method to define a service.
 *
 * @param {string} xmlNamespace XML namespace.
 * @param {string} fullClassName Full class name of the service.
 * @param {string} fullBaseClassName Full class name of the base class for
 *     the service.
 * @return {google.system.soap.ServiceType} The new service type.
 */
google.system.soap.ServiceType.defineService = function(
    xmlNamespace, fullClassName, fullBaseClassName) {
  return new google.system.soap.ServiceType(xmlNamespace, fullClassName,
      fullBaseClassName);
};

/**
 * Utility static method to retrieve the {google.system.soap.ServiceType}
 * associated to a given class name.
 *
 * @param {string} fullClassName The full class name.
 * @return {google.system.soap.ServiceType} Returns the service type.
 */
google.system.soap.ServiceType.getServiceTypeByName = function(fullClassName) {
  var serviceClass = goog.getObjectByName(fullClassName);
  return serviceClass ? serviceClass.prototype.getType() : null;
};

/**
 * Adds a method to the service definition.
 *
 * @param {string} methodName The method name.
 * @param {string} requestNamespace The method request namespace.
 * @param {string} responseNamespace The method response namespace.
 * @param {string} use The use of the method literal/encoded.
 * @param {string} parameterStyle The parameter style wrapped or non-wrapped.
 * @param {string} returnXmlElement The XML element to start the deserialization
 *     with.
 * @param {Object} returnTypeDefinition The return definition type.
 * @param {Array} headers The Headers configured for the service.
 * @param {Array} parameters The parameters that the service takes.
 * @return {google.system.soap.MethodSignature} The created method signature.
 */
google.system.soap.ServiceType.prototype.addMethod = function(
    methodName, requestNamespace, responseNamespace, use, parameterStyle,
    returnXmlElement, returnTypeDefinition, headers, parameters) {
  var method = new google.system.soap.MethodSignature(requestNamespace,
      responseNamespace, use, parameterStyle, returnXmlElement,
      returnTypeDefinition, headers, parameters);
  this.methods_[methodName] = method;
  return method;
};

/**
 * Retrieves all the service methods.
 *
 * @return {Array.<google.system.soap.MethodSignature>} The service methods.
 */
google.system.soap.ServiceType.prototype.getMethods = function() {
  return goog.array.clone(this.methods_);
};

/**
 * Retrieves a method given a name.
 *
 * @param {string} name The name of the method to find.
 * @return {google.system.soap.MethodSignature} The service method signature.
 */
google.system.soap.ServiceType.prototype.getMethodByName = function(name) {
  return this.methods_[name];
};
