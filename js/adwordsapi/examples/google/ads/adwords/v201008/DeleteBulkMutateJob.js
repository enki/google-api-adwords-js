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
 * @fileoverview Defines DeleteBulkMutateJob, a code example that deletes a
 * bulk mutate job using the 'REMOVE' operator.
 */

goog.provide('google.ads.adwords.examples.v201008.DeleteBulkMutateJob');

goog.require('google.ads.adwords.AdWordsService.v201008');
goog.require('google.ads.adwords.examples.ExampleBase');
goog.require('google.ads.adwords.v201008.BulkMutateJob');
goog.require('google.ads.adwords.v201008.BulkMutateJobService');
goog.require('google.ads.adwords.v201008.JobOperation');
goog.require('google.ads.adwords.v201008.Operator');

/**
 * This code example deletes a bulk mutate job using the 'REMOVE' operator.
 * Jobs may only deleted if they are in the 'PENDING' state and have not
 * yet receieved all of their request parts. To get bulk mutate jobs,
 * run GetAllBulkMutateJobs.js.
 *
 * Tags: BulkMutateJobService.mutate
 *
 * @extends google.ads.adwords.examples.ExampleBase
 * @constructor
 */

google.ads.adwords.examples.v201008.DeleteBulkMutateJob =
    function() {
  google.ads.adwords.examples.ExampleBase.call(this);
  this.description = 'This code example deletes a bulk mutate job using the ' +
      '"REMOVE" operator. Jobs may only deleted if they are in the "PENDING"' +
      ' state and have not yet receieved all of their request parts. To get ' +
      'bulk mutate jobs, run GetAllBulkMutateJobs.js.';
};
goog.inherits(google.ads.adwords.examples.v201008.DeleteBulkMutateJob,
    google.ads.adwords.examples.ExampleBase);

/**
 * Runs the code example.
 *
 * @param {google.ads.adwords.AdWordsUser} user AdWords user running the code
 * example.
 * @param {function} callback the callback method to be called once this example
 * is complete.
 */
google.ads.adwords.examples.v201008.DeleteBulkMutateJob.prototype.
    run = function(user, callback) {
  // Get the BulkMutateJobService.
  var bulkMutateJobService = user.getService(
      google.ads.adwords.AdWordsService.v201008.BulkMutateJobService);

  var bulkMutateJobId = this._T('INSERT_BULK_MUTATE_JOB_ID_HERE');

  // Create BulkMutateJob.
  var bulkMutateJob = new google.ads.adwords.v201008.BulkMutateJob();
  bulkMutateJob.id = bulkMutateJobId;

  // Create operation.
  var operation = new google.ads.adwords.v201008.JobOperation();
  operation.operand = bulkMutateJob;
  operation.operator = google.ads.adwords.v201008.Operator.REMOVE;

  try {
    // Delete bulk mutate job.
    bulkMutateJobService.mutate(operation,
      goog.bind(function(bulkMutateJob) {
        // Display bulk mutate jobs.
        if (bulkMutateJob) {
          this.writeOutput('Bulk mutate job with id "%d" was deleted.',
              bulkMutateJob.id);
        } else {
          this.writeOutput('No bulk mutate jobs were deleted.');
        }
        callback();
      }, this),
      goog.bind(function(soapException) {
        this.writeOutput('Failed to get delete bulk mutate job. Soap Fault ' +
            'says "%s"', soapException.getInnerException().getFaultString());
        callback();
      }, this)
    );
  } catch (ex) {
    this.writeOutput('An exception occurred while running the code example.');
    callback();
  }
};
