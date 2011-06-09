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
 */

/**
 * @fileoverview Defines ExampleBase, the base class for all code examples.
 */

goog.provide('google.ads.adwords.examples.ExampleBase');

goog.require('goog.string');
goog.require('goog.string.format');

/**
 * Base class for all code examples.
 *
 * @constructor
 */
google.ads.adwords.examples.ExampleBase = function() {
  this.description = '';
  this.output = '';
};

/**
 * Runs the code example.
 *
 * @param {google.ads.adwords.AdWordsUser} user AdWords user running the code
 * example.
 * @param {function} callback the callback method to be called once this example
 * is complete.
 */
google.ads.adwords.examples.ExampleBase.prototype.run =
    function(user, callback) {
};

/**
 * Reads an input from the user.
 *
 * @param {string} message The prompt to display.
 * @return {string} The user input.
 */
google.ads.adwords.examples.ExampleBase.prototype._T = function(message) {
  return prompt(message, '');
};

/**
 * Generates a unique number.
 *
 * @return {string} The current timestamp as a string.
 */
google.ads.adwords.examples.ExampleBase.prototype.getTimeStamp = function() {
  return goog.string.createUniqueString();
};

/**
 * Performs sprintf-like conversion, ie. puts the values in a template.
 * DO NOT use it instead of built-in conversions in simple cases such as
 * 'Cost: %.2f' as it would introduce unneccessary latency oposed to
 * 'Cost: ' + cost.toFixed(2).
 *
 * @param {string} formatString Template string containing % specifiers.
 * @param {...string|number} var_args Values formatString is to be filled with.
 */
google.ads.adwords.examples.ExampleBase.prototype.writeOutput = function(
    formatString, var_args) {
  this.output += goog.string.format.apply(this, arguments) + '\n';
};
