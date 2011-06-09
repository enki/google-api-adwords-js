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
 * @author api.davidtorres@gmail.com (David Torres)
 */

/**
 * @fileoverview Defines SettingsLoader, used to manage the extension settings.
 */

goog.provide('google.ads.adwords.objstatsext.SettingsLoader');

/**
 * SettingsLoader class in charge of loading and saving extension settings to
 * localStorage.
 */
google.ads.adwords.objstatsext.SettingsLoader = function() {
};

/**
 * Retrieves the account configuration.
 *
 * @return {Object.<string, string>} The configuration map.
 */
google.ads.adwords.objstatsext.SettingsLoader.prototype.getConfig = function() {
  return this.getSettings().config;
};

/**
 * Saves the given account configuration to localStorage.
 *
 * @param {Object.<string, string>} config The configuration map.
 */
google.ads.adwords.objstatsext.SettingsLoader.prototype.saveConfig =
    function(config) {
  var settings = this.getSettings();
  settings.config = config;
  this.saveSettings(settings);
};

/**
 * Retrieves the extension settings from localStorage.
 *
 * @return {Object.<string, string>} a map of settings.
 */
google.ads.adwords.objstatsext.SettingsLoader.prototype.getSettings =
    function() {
  var settingsJSON = localStorage.getItem('awapi-object-stats');
  var settings;
  if (!settingsJSON) {
    settings = {config: {
      email: '',
      password: '',
      clientId: '',
      developerToken: ''
    }};
    this.saveSettings(settings);
  } else {
    settings = JSON.parse(settingsJSON);
  }
  return settings;
};

/**
 * Saves the given extension settings to localStorage.
 *
 * @param {Object.<string, string>} settings The settings map.
 */
google.ads.adwords.objstatsext.SettingsLoader.prototype.saveSettings =
    function(settings) {
  localStorage.setItem('awapi-object-stats', JSON.stringify(settings));
};
