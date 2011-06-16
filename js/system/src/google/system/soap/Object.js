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
 *
 * @fileoverview Defines a SOAP object class.
 */

goog.provide('google.system.soap.Object');

goog.require('goog.json');

/**
 * Represents a SOAP Object.
 * Contains the logic to serialize and de-serialize the object and its
 * properties. It is meant to be inherited and not directly instantiated.
 *
 * @constructor
 */
google.system.soap.Object = function() {
};

/**
 * Retains the ObjectType of the object.
 *
 * @type google.system.soap.ObjectType
 * @private
 */
google.system.soap.Object.prototype.type_ = null;

/**
 * Retrieves the {google.system.soap.ObjectType} associated to this object.
 *
 * @return {google.system.soap.ObjectType} The associated type.
 */
google.system.soap.Object.prototype.getType = function() {
  return this.type_;
};

/**
 * Method that de-serializes a SOAP object.
 * @param {Node} node Node that contains the object data.
 * @param {google.system.soap.Nametable} xmlnt Namespace table.
 */
google.system.soap.Object.prototype.deserialize = function(node, xmlnt) {
  for (var i = 0; i < node.childNodes.length; i++) {
    var nodeName = this.getNodeName_(node.childNodes[i]);
    var propertyName = this.getDeserializationFieldName_(nodeName);
    if (!propertyName) {
      continue;
    }
    var availableType = this.getTypeAsPerXsiType_(xmlnt, node.childNodes[i],
        this.getType().getNamespace());
    if (!goog.isNull(availableType)) {
      availableType = goog.getObjectByName(availableType);
      if (!goog.isNull(availableType)) {
        availableType = new availableType();
      }
    } else {
      var property = this.getType().getPropertyByName(propertyName);
      if (!property.isSystem()) {
        var propertyFullClassName = property.getFullClassName();
        availableType = goog.getObjectByName(propertyFullClassName);
        if (!goog.isNull(availableType)) {
          availableType = new availableType();
        }
      }
    }

    var propertyValue = null;
    if (!goog.isNull(availableType) && !availableType.getType().isEnum()) {
      availableType.deserialize(node.childNodes[i], xmlnt);
      propertyValue = availableType;
    } else {
      // we have two possibilities - either we don't know the type of this
      // property, or this is a system type. In either case, trying to parse
      // as json with a fallback is a safe bet.
      try {
        propertyValue = goog.json.parse(goog.dom.getTextContent(
            node.childNodes[i]));
      } catch (err) {
        propertyValue = goog.dom.getTextContent(node.childNodes[i]);
      }
    }

    var property = this.getType().getPropertyByName(propertyName);
    var currentPropertyValue = this[property.getGetterName()](this);
    if (property.isArray()) {
      if (currentPropertyValue == null) {
        currentPropertyValue = [];
      }
      currentPropertyValue.push(propertyValue);
    } else {
      currentPropertyValue = propertyValue;
    }
    this[property.getSetterName()](currentPropertyValue);
  }
};

/**
 * Method that serializes a SOAP Object into XML.
 *
 * @param {Document} doc Current XML document to append.
 * @param {google.system.soap.Nametable} xmlnt Namespace table.
 * @param {Node} parentNode Root of the XML document.
 * @param {string} parentNamespace Current parent namespace.
 */
google.system.soap.Object.prototype.serialize = function(
    doc, xmlnt, parentNode, parentNamespace) {
  var defaultNs = this.getSerializationNamespace_(parentNamespace);
  var nodePrefix = xmlnt.getPrefixFromNamespace(defaultNs);
  var propertyName = null;
  var allProperties = this.getType().getProperties();
  for (var i = 0; i < allProperties.length; i++) {
    var property = allProperties[i];

    var propertyValue = this[property.getGetterName()](this);
    if (propertyValue == null) {
      continue;
    }

    if (property.isArray()) {
      for (var j = 0; j < propertyValue.length; j++) {
        var childNode = this.serializeProperty_(doc, xmlnt, defaultNs,
            nodePrefix, property.getName(), propertyValue[j]);
        parentNode.appendChild(childNode);
      }
    } else {
      var childNode = this.serializeProperty_(doc, xmlnt, defaultNs, nodePrefix,
          property.getName(), propertyValue);
      parentNode.appendChild(childNode);
    }
  }
};

// Serialization helper methods.

/**
 * Retrieves the node name for a given a property within an object.
 *
 * @param {string} propertyName Property name.
 * @param {*} propertyValue Property value.
 * @return {string} The node name.
 * @private
 */
google.system.soap.Object.prototype.getSerializationNodeNameForProperty_ =
    function(propertyName, propertyValue) {
  var property = this.getType().getPropertyByName(propertyName);
  var xmlElementsMapping = property.getXmlElementNameMapping();

  if (!goog.isArray(xmlElementsMapping)) {
    return xmlElementsMapping;
  }

  for (var i = 0, elementMapping;
      elementMapping = xmlElementsMapping[i]; i++) {
    if (!goog.isNull(elementMapping.elementName) &&
        !goog.isNull(elementMapping.className)) {
      var desiredType = goog.getObjectByName(elementMapping.className);
      if (!goog.isNull(desiredType)) {
        if (propertyValue instanceof desiredType) {
          return elementMapping.elementName;
        }
      }
    } else {
      return elementMapping.elementName;
    }
  }
  return propertyName;
};

/**
 * Serializes a SOAP Object property.
 *
 * @param {Document} doc The XML document over which is been serialized.
 * @param {google.system.soap.SoapNametable} xmlnt XML namespace table.
 * @param {string} namespace Namespace.
 * @param {string} prefix Namespace prefix.
 * @param {string} name Element name.
 * @param {string} value Element value.
 * @return {Node} The new node.
 * @private
 */
google.system.soap.Object.prototype.serializeProperty_ = function(
    doc, xmlnt, namespace, prefix, name, value) {
  var nodeName = this.getSerializationNodeNameForProperty_(name, value);
  var node = doc.createElement(prefix + ':' + nodeName);
  if (value instanceof google.system.soap.Object) {
    if (!goog.isNull(value.getType().getBaseType())) {
      // The prefix for the object may not be the same as prefix of the node.
      // e.g.
      // <o:targets xsi:type="cm:CountryTarget">
      //   <cm:countryCode>US</cm:countryCode>
      // </o:targets>
      var typePrefix = xmlnt.getPrefixFromNamespace(
          value.getSerializationNamespace_(namespace));

      node.setAttribute('xsi:type', typePrefix + ':' +
          value.getType().getClassName());
    }
    value.serialize(doc, xmlnt, node, namespace);
  } else {
    goog.dom.setTextContent(node, value);
  }
  return node;
};

/**
 * Retrieves the xsi prefix for an XML node.
 *
 * @param {Node} childNode The node to get its xsi type.
 * @param {google.system.soap.Nametable} xmlnt The namespace table.
 * @return {string} The prefix if any or empty string.
 * @private
 */
google.system.soap.Object.prototype.getXsiPrefixForNode_ = function(
    childNode, xmlnt) {
  var node = childNode;
  var requiredNs = xmlnt.getNamespaceFromPrefix('xsi');

  while (!goog.isNull(this.getNodeName_(node))) {
    var foundNs = false;
    var xsiPrefix;
    for (var i = 0; i < node.attributes.length; i++) {
      if (node.attributes[i].prefix == 'xmlns') {
        if (node.attributes[i].nodeValue == requiredNs) {
          xsiPrefix = this.getNodeName_(node.attributes[i]) + ':';
          foundNs = true;
          break;
        }
      } else if (node.attributes[i].prefix == null &&
          this.getNodeName_(node.attributes[i]) == 'xmlns') {
        if (node.attributes[i].nodeValue == requiredNs) {
          xsiPrefix = '';
          foundNs = true;
          break;
        }
      }
    }
    if (foundNs) {
      return xsiPrefix;
    } else {
      node = node.parentNode;
    }
  }
  return null;
};

/**
 * Returns an SOAP Object type given its XML xsi type.
 *
 * @param {google.system.soap.SoapNametable} xmlnt XML namespace table.
 * @param {Node} childNode Child node containing the xsi type.
 * @param {string} namespace Element namespace.
 * @return {google.system.code.Type} The type of the object.
 * @private
 */
google.system.soap.Object.prototype.getTypeAsPerXsiType_ = function(
    xmlnt, childNode, namespace) {
  var xsiPrefix = '';
  var xsiType = null;

  var xsiPrefix = this.getXsiPrefixForNode_(childNode, xmlnt);
  if (xsiPrefix == null) {
    // we walked all the way to the root without finding any xsi namespace.
    return null;
  }
  var xsiTypeNodeName = xsiPrefix + 'type';

  for (var i = 0; i < childNode.attributes.length; i++) {
    if (childNode.attributes[i].nodeName == xsiTypeNodeName) {
      xsiType = childNode.attributes[i].nodeValue;
      break;
    }
  }

  if (!goog.isNull(xsiType)) {
    var splits = xsiType.split(':');
    if (splits.length == 2) {
      xsiType = (namespace == '') ? splits[1] : namespace + '.' + splits[1];
    } else {
      xsiType = (namespace == '') ? splits[0] : namespace + '.' + splits[0];
    }
  }
  return xsiType;
};

/**
 * Retrieves the serialization namespace of a given SOAP object.
 *
 * @param {string} currentNamespace Current namespace.
 * @return {string} Object serialization namespace.
 * @private
 */
google.system.soap.Object.prototype.getSerializationNamespace_ = function(
    currentNamespace) {
  var xmlns = this.getType().getXmlNamespace();
  return xmlns || currentNamespace;
};

/**
 * Retrieves the SOAP object property name of a given nodeName.
 *
 * @param {string} nodeName Name of the node.
 * @return {string} The object property name.
 * @private
 */
google.system.soap.Object.prototype.getDeserializationFieldName_ = function(
    nodeName) {
  var allProperties = this.getType().getProperties();
  for (var i = 0; i < allProperties.length; i++) {
    var propertyName = allProperties[i].getName();
    var xmlElementMapping = allProperties[i].getXmlElementNameMapping();
    if (goog.isArray(xmlElementMapping)) {
      for (var j = 0; j < xmlElementMapping.length; j++) {
        if (xmlElementMapping[j].elementName == nodeName) {
          return propertyName;
        }
      }
    } else if (xmlElementMapping == nodeName || propertyName == nodeName) {
      return propertyName;
    }
  }
  return null;
};

/**
 * Retrieves an xml node's name in a browser-independent manner.
 *
 * @param {Node} node An XML node.
 * @return {string} The name of the node.
 * @private
 */
google.system.soap.Object.prototype.getNodeName_ = function(node) {
  // IE stores nodename in node.baseName, whereas Firefox, Chrome and related
  // browsers store them in node.localName.
  var nodeName = node.localName || node.baseName;
  if (nodeName == null || nodeName == '') {
    return null;
  } else {
    return nodeName;
  }
};
