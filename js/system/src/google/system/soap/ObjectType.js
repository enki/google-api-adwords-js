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
 * @fileoverview Defines Type, a class to store the type of a
 *     google.system.soap.Object.
 */

goog.provide('google.system.soap.ObjectType');

goog.require('google.system.soap.Object');
goog.require('google.system.soap.ObjectProperty');

/**
 * Represents a SOAP Object Type.
 * Contains that metadata that conforms a SOAP Object, like its properties,
 * XmlNamespace, etc.
 *
 * @param {string} xmlNamespace XML namespace of the object.
 * @param {string} fullClassName Full class name of the this object type.
 * @param {string} isEnum True if the object is of type enum.
 * @param {string?} baseFullClassName Base class name if this type inherits
 *     from other, this constructor takes cares automatically of the object
 *     inheritance if this type is provided, if not it makes the class name
 *     inherit from google.system.soap.Object.
 * @constructor
 */
google.system.soap.ObjectType = function(xmlNamespace, fullClassName, isEnum,
    baseFullClassName) {

  /**
   * XML namespace of the object.
   * @type {string}
   * @private
   */
  this.xmlNamespace_ = xmlNamespace;

  /**
   * Full object classname (E.g. google.ads.adwords.v201003.Campaign).
   * @type {string}
   * @private
   */
  this.fullClassName_ = fullClassName;

  /**
   * If it's an enumeration type.
   * @type {boolean}
   * @private
   */
  this.isEnum_ = isEnum;

  /**
   * List of this type properties.
   * @type {Array.<google.system.soap.ObjectProperty>}
   * @private
   */
  this.properties_ = [];

  if (fullClassName != 'google.system.soap.Object') {
    this.baseFullClassName_ = baseFullClassName ? baseFullClassName :
        'google.system.soap.Object';
  }
  var classObject = goog.getObjectByName(this.fullClassName_);
  if (goog.isNull(classObject)) {
    throw new google.system.core.Exception('nonexistent fullClassName: ' +
        fullClassName + ' provided');
  }
  if (fullClassName != 'google.system.soap.Object') {
    var baseClassObject = goog.getObjectByName(this.baseFullClassName_);
    if (goog.isNull(baseClassObject)) {
      throw new google.system.core.Exception('nonexistent baseFullClassName: ' +
          this.baseFullClassName_ + ' provided');
    }
    goog.inherits(classObject, baseClassObject);
  }
  classObject.prototype['type_'] = this;
};

/**
 * Static utility method to define a type in the system.
 *
 * @param {string} xmlNamespace Namespace of the type.
 * @param {string} fullClassName Type full class name
 *     (E.g. google.ads.adwords.v201008.Campaign).
 * @param {boolean} isEnum True if it represent an enumeration.
 * @param {?string} baseFullClassName Base type full name, defaults to
 *     'google.system.soap.Object'.
 * @return {google.system.soap.ObjectType} The new object type.
 */
google.system.soap.ObjectType.defineType = function(
    xmlNamespace, fullClassName, isEnum, baseFullClassName) {
  return new google.system.soap.ObjectType(xmlNamespace, fullClassName, isEnum,
      baseFullClassName);
};

/**
 * Retrieves the type XML namespace.
 *
 * @return {string} The type xml namespace.
 */
google.system.soap.ObjectType.prototype.getXmlNamespace = function() {
  return this.xmlNamespace_;
};

/**
 * Retrieves the type full class name.
 *
 * @return {string} The type full class name.
 */
google.system.soap.ObjectType.prototype.getFullClassName = function() {
  return this.fullClassName_;
};

/**
 * Retrieves the type class name, not including the namespace. So for example
 * a type with class name 'com.google.ads.ClassA' it will return 'ClassA'.
 *
 * @return {string} The type class name.
 */
google.system.soap.ObjectType.prototype.getClassName = function() {
  var nameArray = this.fullClassName_.split('.');
  return nameArray[nameArray.length - 1];
};

/**
 * Retrieves the type class namespace. So for example
 * a type with class name 'com.google.ads.ClassA' it will return
 * 'com.google.ads'.
 *
 * @return {string} The class namespace.
 */
google.system.soap.ObjectType.prototype.getNamespace = function() {
  var i = this.fullClassName_.lastIndexOf('.');
  i = i > 0 ? i : 0;
  return this.fullClassName_.substring(0, i);
};

/**
 * Returns is the type is an enum or not.
 *
 * @return {boolean} True if the type is an enum or false otherwise.
 */
google.system.soap.ObjectType.prototype.isEnum = function() {
  return this.isEnum_;
};

/**
 * Retrieves the type full class name.
 *
 * @return {string} The full class name.
 */
google.system.soap.ObjectType.prototype.getBaseFullClassName = function() {
  return this.baseFullClassName_;
};

/**
 * Retrieves the base {google.system.soap.ObjectType} of this type.
 *
 * @return {google.system.soap.ObjectType} The base type.
 */
google.system.soap.ObjectType.prototype.getBaseType = function() {
  if (this.baseFullClassName_) {
    return goog.getObjectByName(this.baseFullClassName_).prototype.getType();
  }
};

/**
 * Adds a property to the object type definition.
 *
 * @param {string} name Name of the property, getters and setters will be
 *     generated based on this.
 * @param {string} propertyFullClassName Full classname that maps the property
 *     unless is a system property where possible values can be
 *     [boolean|integer|string].
 * @param {(string|Object.<string, string>)} xmlElementNameMapping In general
 *     this maps to a simple xmlElement name unless, it is a choice type of SOAP
 *     element where multiple xml element names can be defined depending on the
 *     type of the value to be serialiazed, so it can take the form of
 *     [{elementName: 'element', className: 'fullClassName'}, ...].
 * @param {boolean} isArray True if is an array type of property, false
 *     otherwise.
 * @param {boolean} isSystem True if is a system kind of property, false
 *     otherwise.
 * @return {google.system.soap.ObjectProperty} The new property.
 */
google.system.soap.ObjectType.prototype.addProperty = function(
    name, propertyFullClassName, xmlElementNameMapping, isArray, isSystem) {

  var property = new google.system.soap.ObjectProperty(name,
      propertyFullClassName, xmlElementNameMapping, isArray, isSystem);

  if (goog.isNull(this.getPropertyByName(name, true))) {
    this.properties_.push(property);
    var classType = goog.getObjectByName(this.fullClassName_);
    if (!goog.isNull(classType)) {
      classType.prototype[property.getSetterName()] = function(value) {
        this[name] = value;
      };
      classType.prototype[property.getGetterName()] = function() {
        return this[name];
      };
    }
  }

  return property;
};

/**
 * Retrieves the list of properties tied to this type.
 *
 * @param {boolean?} ignoreInheritance If true it will only look at this type
 *     direct property and not follow the inherentance path.
 * @return {Array.<google.system.soap.ObjectProperty>} The list of properties.
 */
google.system.soap.ObjectType.prototype.getProperties = function(
    ignoreInheritance) {
  var properties = [];

  if (!ignoreInheritance) {
    var tempType = this;
    while (tempType != null) {
      for (var i = 0; i < tempType.properties_.length; i++) {
        properties.push(tempType.properties_[i]);
      }
      tempType = tempType.getBaseType();
    }
  } else {
    properties = goog.array.clone(this.properties_);
  }

  return properties;
};

/**
 * Retrieves a property by its name.
 *
 * @param {string} name Name of the property to retrieve.
 * @param {boolean} ignoreInheritance If true it will only look at this type
 *     direct property and not follow the inheritance path.
 * @return {google.system.soap.ObjectProperty} The property or null if not
 *     property was found.
 */
google.system.soap.ObjectType.prototype.getPropertyByName = function(name,
    ignoreInheritance) {
  var properties = this.getProperties(ignoreInheritance);
  for (var i = 0; i < properties.length; i++) {
    if (properties[i].getName() == name) {
      return properties[i];
    }
  }
  return null;
};

//Define system types.
google.system.soap.ObjectType.defineType('', 'google.system.soap.Object',
    false);
