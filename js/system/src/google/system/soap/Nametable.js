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
 * @fileoverview Defines a google.system.soap.Nametable class.
 */

goog.provide('google.system.soap.Nametable');

/**
 * Creates a new name table that holds prefixes and namespaces for a given
 * services.
 * @constructor
 */
google.system.soap.Nametable = function() {

  /**
   * Default SOAP XML namespaces table.
   * @type {Array}
   * @private
   */
  this.xmlnt_ = {
    'soap': 'http://schemas.xmlsoap.org/soap/envelope/',
    'xsi': 'http://www.w3.org/2001/XMLSchema-instance',
    'xsd': 'http://www.w3.org/2001/XMLSchema'
  };

  /**
   * Service defined XML namespaces.
   * @type {Array}
   * @private
   */
  this.localxmlnt_ = {};
};

/**
 * Retrieves the list of local namespaces.
 * @return {Array.<Object>} An array of all registered local namespaces.
 */
google.system.soap.Nametable.prototype.getLocalNamespaces = function() {
  return this.localxmlnt_;
};

/**
 * Returns a SOAP XML namespace given its prefix.
 * @param {string} prefix Prefix of the namespace.
 * @return {string} Namespace.
 */
google.system.soap.Nametable.prototype.getNamespaceFromPrefix = function(
    prefix) {
  var retVal = this.xmlnt_[prefix];
  if (retVal == null) {
    retVal = this.localxmlnt_[prefix];
  }
  return retVal;
};

/**
 * Retrieves the prefix of a given SOAP XML namespace.
 * @param {string} namespace Namespace.
 * @return {?string} Its prefix or null if not found.
 */
google.system.soap.Nametable.prototype.getPrefixFromNamespace = function(
    namespace) {
  for (var prefix in this.xmlnt_) {
    if (this.xmlnt_[prefix] == namespace) {
      return prefix;
    }
  }

  for (var prefix in this.localxmlnt_) {
    if (this.localxmlnt_[prefix] == namespace) {
      return prefix;
    }
  }
  return null;
};
