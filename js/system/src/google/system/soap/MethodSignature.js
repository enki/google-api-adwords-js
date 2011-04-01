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
 * @fileoverview Defines a SOAP method signature class.
 */

goog.provide('google.system.soap.MethodSignature');

/**
 * Represents a SOAP Service method.
 * Contains the metadata associated to a service method, like its XML namespace,
 * parameters, etc.
 *
 * @param {string} requestNamespace Xml namespace of the request of this
 * service method.
 * @param {string} responseNamespace Xml namespace of the response of this
 * service method.
 * @param {string} methodUse Use either literal or encoded.
 * @param {string} parameterStyle Either wrapped or non-wrapped.
 * @param {string} returnXmlElement Xml namespace of the response of this
 * service method.
 * @param {Object} returnTypeDefinition A definition of the return type as
 * follows {className: className, isArray: [true|false],
 * isSystem: [true|false]}.
 * @param {Array.<Object>} headers An array of header
 * definitions, every headers is defined as follows {direction: [in|out],
 * propertyName: propertyName}.
 * @param {Array.<Object>} parameters An array of parameter
 * definitions, every parameter is defined as follows {className: className,
 * isArray: [true|false], isSystem: [true|false], propertyName: name,
 * xmlElementName: xmlName}.
 * @constructor
 */
google.system.soap.MethodSignature = function(requestNamespace,
    responseNamespace, methodUse, parameterStyle, returnXmlElement,
    returnTypeDefinition, headers, parameters) {
  this.requestNamespace_ = requestNamespace;
  this.responseNamespace_ = responseNamespace;
  this.use_ = methodUse;
  this.parameterStyle_ = parameterStyle;
  this.returnXmlElement_ = returnXmlElement;
  this.returnTypeDefinition_ = returnTypeDefinition;
  this.parameters_ = parameters || [];
  this.headers_ = headers || [];
};

/**
 * Returns the request namespace configured from the service method.
 *
 * @return {string} The request namespace of the method.
 */
google.system.soap.MethodSignature.prototype.getRequestNamespace = function() {
  return this.requestNamespace_;
};

/**
 * Returns the response namespace configured from the service method.
 *
 * @return {string} The response namespace of the method.
 */
google.system.soap.MethodSignature.prototype.getResponseNamespace = function() {
  return this.responseNamespace_;
};

/**
 * Returns the method use type configuration, either literal or encoded.
 *
 * @return {string} The method use.
 */
google.system.soap.MethodSignature.prototype.getUse = function() {
  return this.use_;
};

/**
 * Returns the method parameter style, either wrapped or non-wrapped.
 *
 * @return {string} The method parameter style.
 */
google.system.soap.MethodSignature.prototype.getParameterStyle = function() {
  return this.parameterStyle_;
};

/**
 * Returns the method parameter style, either wrapped or non-wrapped.
 *
 * @return {string} The method parameter style.
 */
google.system.soap.MethodSignature.prototype.getReturnXmlElement = function() {
  return this.returnXmlElement_;
};

/**
 * Returns the method expected return type definition. A return type definition
 * is of the form {className: className, isArray: [true|false],
 * isSystem: [true|false]}.
 *
 * @return {Object} The return type definition.
 */
google.system.soap.MethodSignature.prototype.getReturnTypeDefinition =
    function() {
  return this.returnTypeDefinition_;
};

/**
 * Retrieves a cloned array of this method headers.
 *
 * @return {Array.<Object>} An array of the service configured header
 * definitions.
 */
google.system.soap.MethodSignature.prototype.getHeaders = function() {
  return goog.array.clone(this.headers_);
};

/**
 * Retrieves a cloned array of this method parameters.
 *
 * @return {Array.<Object>} An array of the method configured parameters.
 */
google.system.soap.MethodSignature.prototype.getParameters = function() {
  return goog.array.clone(this.parameters_);
};

/**
 * Retrieves a parameter by its name.
 *
 * @param {string} name Name of the requested parameter.
 * @return {Array.<Object>} The requested parameter definition or null if does
 * not exists.
 */
google.system.soap.MethodSignature.prototype.getParameterByName = function(
    name) {
  for (var i = 0, parameter; parameter = this.parameters_[i]; i++) {
    if (parameter.name == name) {
      return parameter;
    }
  }
};

/**
 * Adds a header to the list of expected headers for this service method.
 *
 * @param {string} propertyName Property within the service that holds the
 * header object.
 * @param {?string} direction Direction of the header either 'in' for headers
 * going to the server or 'out' for headers coming from the server. If not
 * supplied, 'in' will be used.
 */
google.system.soap.MethodSignature.prototype.addHeader = function(propertyName,
    direction) {
  this.headers_.push({direction: (direction || 'in'),
      propertyName: propertyName});
};

/**
 * Add a parameter to the list of parameters expected by this service.
 *
 * @param {string} className Full class name of the parameter.
 * @param {boolean} isArray True if it is expected to be an array, false
 * otherwise.
 * @param {boolean} isSystem True if it is system kind of property, false
 * otherwise.
 * @param {string} name Parameter name.
 * @param {string} xmlElementName Name of XML how to serialize this property.
 */
google.system.soap.MethodSignature.prototype.addParameter = function(className,
    isArray, isSystem, name, xmlElementName) {
  this.parameters_.push({className: className, isArray: isArray,
      isSystem: isSystem, name: name, xmlElementName: xmlElementName});
};
