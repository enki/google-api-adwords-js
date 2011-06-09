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
 * @fileoverview Defines DeleteExperiment, a code example that deletes an
 * experiment.
 */

goog.provide('google.ads.adwords.examples.v201101.DeleteExperiment');

goog.require('google.ads.adwords.AdWordsService.v201101');
goog.require('google.ads.adwords.examples.ExampleBase');
goog.require('google.ads.adwords.v201101.Experiment');
goog.require('google.ads.adwords.v201101.ExperimentOperation');
goog.require('google.ads.adwords.v201101.ExperimentService');
goog.require('google.ads.adwords.v201101.ExperimentStatus');
goog.require('google.ads.adwords.v201101.Operator');

/**
 * This code example deletes an experiment. To get experiments, run
 * GetAllExperiments.js. To add an experiment, run AddExperiment.js.
 *
 * Tags: ExperimentService.mutate
 *
 * @extends google.ads.adwords.examples.ExampleBase
 * @constructor
 */

google.ads.adwords.examples.v201101.DeleteExperiment = function() {
  google.ads.adwords.examples.ExampleBase.call(this);
  this.description = 'This code example deletes an experiment. To get ' +
      'experiments, run GetAllExperiments.js. To add an experiment, run ' +
      'AddExperiment.js.';
};
goog.inherits(google.ads.adwords.examples.v201101.DeleteExperiment,
    google.ads.adwords.examples.ExampleBase);

/**
 * Runs the code example.
 *
 * @param {google.ads.adwords.AdWordsUser} user AdWords user running the code
 * example.
 * @param {function} callback the callback method to be called once this example
 * is complete.
 */
google.ads.adwords.examples.v201101.DeleteExperiment.prototype.run =
    function(user, callback) {
  // Get the ExperimentService.
  var experimentService = user.getService(
      google.ads.adwords.AdWordsService.v201101.ExperimentService);

  var experimentId = this._T('INSERT_EXPERIMENT_ID_HERE');

  // Set experiment's status to DELETED.
  var experiment = new google.ads.adwords.v201101.Experiment();
  experiment.id = experimentId;
  experiment.status = google.ads.adwords.v201101.ExperimentStatus.DELETED;

  // Create operation.
  var operation = new google.ads.adwords.v201101.ExperimentOperation();
  operation.operator = google.ads.adwords.v201101.Operator.SET;
  operation.operand = experiment;

  try {
    // Update experiment.
    experimentService.mutate([operation],
      goog.bind(function(retval) {
        // Display results.
        if (retval && retval.value) {
          for (var i = 0, len = retval.value.length; i < len; i++) {
            var tempExperiment = retval.value[i];
            this.writeOutput('Experiment with name = "%s" and id = "%d" was ' +
                'deleted.', tempExperiment.name, tempExperiment.id);
          }
        } else {
          this.writeOutput('No experiments were deleted.');
        }
        callback();
      }, this),
      goog.bind(function(soapException) {
        this.writeOutput('Failed to delete experiment. Soap Fault says "%s"',
            soapException.getInnerException().getFaultString());
        callback();
      }, this)
    );
  } catch (ex) {
    this.writeOutput('An exception occurred while running the code example.');
    callback();
  }
};
