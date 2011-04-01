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
 * @fileoverview Defines a SOAP object property class.
 */

goog.provide('google.system.soap.ObjectProperty');

/**
 * Represents a SOAP Object Property.
 * Contains that metadata that conforms a SOAP Object property, like its
 * name, xml element names mapping, etc.
 *
 * @param {string} name Name of the property.
 * @param {string} fullClassName Full class name of the property.
 * @param {(string|Object.<string, string>)} xmlElementNameMapping In general
 * this maps to a simple xmlElement name unless, it is a choice type of SOAP
 * element where multiple xml element names can be defined depending on the
 * type of the value to be serialized, so it can take the form of
 * [{elementName: 'element', className: 'fullClassName'}, ...].
 * @param {boolean} isArray True if is an array type of property, false
 * otherwise.
 * @param {boolean} isSystem True if is a system kind of property, false
 * otherwise.
 * @constructor
 */
google.system.soap.ObjectProperty = function(name, fullClassName,
    xmlElementNameMapping, isArray, isSystem) {
  this.name_ = name;
  this.fullClassName_ = fullClassName;
  this.xmlElementNameMapping_ = xmlElementNameMapping;
  this.isArray_ = isArray;
  this.isSystem_ = isSystem;
};

/**
 * Retrieves the name of the property.
 *
 * @return {string} Name of the property.
 */
google.system.soap.ObjectProperty.prototype.getName = function() {
  return this.name_;
};

/**
 * Retrieves the full class name of the property.
 *
 * @return {string} Full class name.
 */
google.system.soap.ObjectProperty.prototype.getFullClassName = function() {
  return this.fullClassName_;
};

/**
 * Retrieves the {google.system.soap.ObjectType} of the property.
 *
 * @return {google.system.soap.ObjectType} The property type.
 */
google.system.soap.ObjectProperty.prototype.getType = function() {
  return goog.getObjectByName(this.fullClassName_).prototype.getType();
};

/**
 * Retrieves the property XML element name mapping.
 *
 * @return {(string|Array.<Object>)} The property XML element name mapping.
 */
google.system.soap.ObjectProperty.prototype.getXmlElementNameMapping =
    function() {
  return this.xmlElementNameMapping_;
};

/**
 * Retrieves if the property if of array type.
 *
 * @return {boolean} True if is of an array type, false otherwise.
 */
google.system.soap.ObjectProperty.prototype.isArray = function() {
  return this.isArray_;
};

/**
 * Retrieves if the property if of system type.
 *
 * @return {boolean} True if is of an system type, false otherwise.
 */
google.system.soap.ObjectProperty.prototype.isSystem = function() {
  return this.isSystem_;
};

/**
 * Retrieves the getter name of the property. Follows the code style conventions
 * to construct the getter name, E.g. a property named test will have its getter
 * named getTest.
 *
 * @return {string} Name of the getter function.
 */
google.system.soap.ObjectProperty.prototype.getGetterName = function() {
  // the property named type is reserved.
  var variableName = (this.name_ === 'type') ? 'type$' : this.name_;

  return 'get' + variableName.substring(0, 1).toUpperCase() +
      variableName.substring(1, variableName.length);
};

/**
 * Retrieves the setter name of the property. Follows the code style conventions
 * to construct the setter name, E.g. a property named test will have its setter
 * named setTest.
 *
 * @return {string} Name of the setter function.
 */
google.system.soap.ObjectProperty.prototype.getSetterName = function() {
  // the property named type is reserved.
  var variableName = (this.name_ === 'type') ? 'type$' : this.name_;

  return 'set' + variableName.substring(0, 1).toUpperCase() +
      variableName.substring(1, variableName.length);
};
