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
 * @fileoverview Defines Runtime, an object that provide runtime services.
 */

goog.provide('google.system.core.Runtime');

goog.require('google.system.core.Exception');

/**
 * A singleton class that represents the runtime. This class keeps track of
 * things like the version, config, the list of available types, etc.
 *
 * @constructor
 */
google.system.core.Runtime = function() {

  /**
   * System configuration. Of the form:
   * {
   *   moduleName: {
   *     property: value
   *   }
   * }
   * @type {Object.<String, Object>}
   * @private
   */
  this.config_ = {};
};

/**
 * The only instance of runtime.
 *
 * @private
 */
google.system.core.Runtime.theInstance_ =
    new google.system.core.Runtime();

/**
 * The runtime version.
 *
 * @private
 */
google.system.core.Runtime.prototype.version_ = '1.0.1';

/**
 * Gets the runtime instance.
 *
 * @return {google.system.core.Runtime} The singleton instance of
 *     Runtime.
 * @constructor
 */
google.system.core.Runtime.getInstance = function() {
  return google.system.core.Runtime.theInstance_;
};

/**
 * Gets the runtime config.
 *
 * @return {Object} The runtime configuration.
 */
google.system.core.Runtime.prototype.getConfig = function() {
  return this.config_;
};

/**
 * Sets the runtime config.
 *
 * @param {Object} config The runtime config.
 */
google.system.core.Runtime.prototype.setConfig = function(config) {
  this.config_ = config;
};

/**
 * Gets the runtime version.
 *
 * @return {string} The runtime version, of the form major.minor.revision.
 */
google.system.core.Runtime.prototype.getVersion = function() {
  return this.version_;
};

/**
 * Sets the runtime version.
 *
 * @param {string} version The runtime version of the form major.minor.revision.
 */
google.system.core.Runtime.prototype.setVersion = function(version) {
  this.version_ = version;
};
