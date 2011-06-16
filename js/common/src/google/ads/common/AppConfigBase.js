// Copyright 2011, Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     HTTP://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @author api.anash@gmail.com (Anash P. Oommen)
 */

/**
 * @fileoverview Defines AppConfigBase, the base class for all configuration
 *     readers.
 */

goog.provide('google.ads.common.AppConfigBase');

goog.require('google.system.net.HttpWebTransportSettings');

/**
 * Reads the configuration keys from the configuration files.
 *
 * @constructor
 */
google.ads.common.AppConfigBase = function() {

  /**
   * Proxy URL key constant.
   * @type {string}
   * @private
   */
  this.PROXY_URL_ = 'ProxyUrl';

  /**
   * Library short name to be attached to the user agent.
   * @type {string}
   * @private
   */
  this.shortName_ = null;

  /**
   * Web Transport key constant.
   * @type {string}
   * @private
   */
  this.HTTP_WEBTRANSPORT_ = 'HttpWebTransport';

  /**
   * Web transport class name.
   * @type {string}
   * @private
   */
  this.HTTPWebTransport_ = null;

  /**
   * Web Transport settings key constant.
   * @type {string}
   * @private
   */
  this.HTTP_WEBTRANSPORT_SETTINGS_ = 'HttpWebTransportSettings';

  /**
   * Web transport settings map.
   * @type {Object<String, String>}
   * @private
   */
  this.HTTPWebTransportSettings_ = null;
};

/**
 * Gets the HTTP web transport.
 *
 * @return {string} The HTTP web transport provider name.
 */
google.ads.common.AppConfigBase.prototype.getHttpWebTransport = function() {
  return this.HTTPWebTransport_;
};

/**
 * Sets the HTTP web transport.
 *
 * @param {string} HTTPWebTransport The HTTP web transport provider name.
 */
google.ads.common.AppConfigBase.prototype.setHttpWebTransport =
    function(HTTPWebTransport) {
  this.HTTPWebTransport_ = HTTPWebTransport;
};

/**
 * Gets the HTTP web transport settings.
 *
 * @return {string} The HTTP web transport settings.
 */
google.ads.common.AppConfigBase.prototype.getHttpWebTransportSettings =
    function() {
  return this.HTTPWebTransportSettings_;
};

/**
 * Sets the HTTP web transport.
 *
 * @param {string} HTTPWebTransportSettings The HTTP web transport settings.
 */
google.ads.common.AppConfigBase.prototype.setHttpWebTransportSettings =
    function(HTTPWebTransportSettings) {
  this.HTTPWebTransportSettings_ = HTTPWebTransportSettings;
};

/**
 * Gets the short name for the library.
 *
 * @return {string} The short name for the library.
 */
google.ads.common.AppConfigBase.prototype.getShortName = function() {
  return this.shortName_;
};

/**
 * Gets a signature string for the library.
 *
 * @return {string} The signature string for the library.
 */
google.ads.common.AppConfigBase.prototype.getSignature = function() {
  return this.getShortName() + '-' + this.getVersion();
};

/**
 * Gets the library version.
 *
 * @return {string} The library version.
 */
google.ads.common.AppConfigBase.prototype.getVersion = function() {
  return this.getShortName() + '-' +
      google.system.core.Runtime.getInstance().getVersion();
};

/**
 * Reads the settings from configuration file.
 *
 * @param {Array} settings Settings to be read and set.
 */
google.ads.common.AppConfigBase.prototype.readSettings = function(
    settings) {
  this.setHttpWebTransport(settings[this.HTTP_WEBTRANSPORT_] ||
      this.getHttpWebTransport());
  this.setHttpWebTransportSettings(
      new google.system.net.HttpWebTransportSettings(
          settings[this.HTTP_WEBTRANSPORT_SETTINGS_] || {}));
};

/**
 * Retrieves a configuration value based on its name.
 * @param {string} key The name of the configuration property.
 * @return {?object} The value or null if does not exists.
 */
google.ads.common.AppConfigBase.prototype.getConfigValue = function(key) {
  var getter = 'get' + key.substr(0, 1).toUpperCase() + key.substr(1);
  if (this[getter] != null) {
    return this[getter]();
  }
  return null;
};

/**
 * Sets a configuration property based on its name.
 * @param {string} key The name of the configuration property.
 * @param {string} newValue New value to set.
 * @return {object} The old value or null if didn't exists.
 */
google.ads.common.AppConfigBase.prototype.setConfigValue = function(
    key, newValue) {
  var oldValue;
  var getter = 'get' + key.substr(0, 1).toUpperCase() + key.substr(1);
  var setter = 'set' + key.substr(0, 1).toUpperCase() + key.substr(1);
  if (this[getter] != null && this[setter] != null) {
    oldValue = this[getter]();
    this[setter](newValue);
  }
  return oldValue;
};
