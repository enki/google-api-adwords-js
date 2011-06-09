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
 * @fileoverview Defines PromoteExperiment, a code example that promotes
 * an experiment.
 */

goog.provide('google.ads.adwords.examples.v201008.PromoteExperiment');

goog.require('google.ads.adwords.AdWordsService.v201008');
goog.require('google.ads.adwords.examples.ExampleBase');
goog.require('google.ads.adwords.v201008.Experiment');
goog.require('google.ads.adwords.v201008.ExperimentOperation');
goog.require('google.ads.adwords.v201008.ExperimentService');
goog.require('google.ads.adwords.v201008.ExperimentStatus');
goog.require('google.ads.adwords.v201008.Operator');

/**
 * This code example promotes an experiment, which permanently applies all the
 * experiment changes made to its related ad groups, criteria and ads. To get
 * experiments, run GetAllExperiments.js.
 *
 * Tags: ExperimentService.mutate
 *
 * @extends google.ads.adwords.examples.ExampleBase
 * @constructor
 */
google.ads.adwords.examples.v201008.PromoteExperiment = function() {
  google.ads.adwords.examples.ExampleBase.call(this);
  this.description = 'This code example promotes an experiment, which ' +
      'permanently applies all the experiment changes made to its related ' +
      'ad groups, criteria and ads. To get experiments, run ' +
      'GetAllExperiments.js.';
};
goog.inherits(google.ads.adwords.examples.v201008.PromoteExperiment,
    google.ads.adwords.examples.ExampleBase);

/**
 * Runs the code example.
 *
 * @param {google.ads.adwords.AdWordsUser} user AdWords user running the code
 * example.
 * @param {function} callback the callback method to be called once this example
 * is complete.
 */
google.ads.adwords.examples.v201008.PromoteExperiment.prototype.run =
    function(user, callback) {
  // Get the ExperimentService.
  var experimentService = user.getService(
      google.ads.adwords.AdWordsService.v201008.ExperimentService);

  var experimentId = this._T('INSERT_EXPERIMENT_ID_HERE');

      // Set experiment's status to PROMOTED.
  var experiment = new google.ads.adwords.v201008.Experiment();
  experiment.id = experimentId;
  experiment.status = google.ads.adwords.v201008.ExperimentStatus.PROMOTED;

  // Create operation.
  var operation = new google.ads.adwords.v201008.ExperimentOperation();
  operation.operator = google.ads.adwords.v201008.Operator.SET;
  operation.operand = experiment;

  try {
    // Update experiment.
    experimentService.mutate([operation],
      goog.bind(function(retval) {
        // Display results.
        if (retval && retval.value) {
          for (var i = 0, len = retval.value.length; i < len; i++) {
            var valueExperiment = retval.value[i];
            this.writeOutput('Experiment with name = "%s" and id = "%d" was ' +
                'promoted.', valueExperiment.name, valueExperiment.id);
          }
        } else {
          this.writeOutput('No experiments were promoted.');
        }
        callback();
      }, this),
      goog.bind(function(soapException) {
        this.writeOutput('Failed to promote experiment. Soap Fault ' +
            'says "%s"', soapException.getInnerException().getFaultString());
        callback();
      }, this)
    );
  } catch (ex) {
    this.writeOutput('An exception occurred while running the code example.');
    callback();
  }
};
