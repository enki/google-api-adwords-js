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
 * @fileoverview Defines GetAllBulkMutateJobs, a code example that
 * gets all bulk mutate jobs in the account.
 */

goog.provide('google.ads.adwords.examples.v201008.GetAllBulkMutateJobs');

goog.require('google.ads.adwords.AdWordsService.v201008');
goog.require('google.ads.adwords.examples.ExampleBase');
goog.require('google.ads.adwords.v201008.ApiUsageType');
goog.require('google.ads.adwords.v201008.BulkMutateJobSelector');
goog.require('google.ads.adwords.v201008.BulkMutateJobService');

/**
 * This code example gets all bulk mutate jobs in the account. To add a
 * bulk mutate job, run PerformBulkMutateJob.js.
 *
 * Tags: BulkMutateJobService.get
 *
 * @extends google.ads.adwords.examples.ExampleBase
 * @constructor
 */

google.ads.adwords.examples.v201008.GetAllBulkMutateJobs =
    function() {
  google.ads.adwords.examples.ExampleBase.call(this);
  this.description = 'This code example gets all bulk mutate jobs in the ' +
      'account. To add a bulk mutate job, run PerformBulkMutateJob.js.';
};
goog.inherits(
    google.ads.adwords.examples.v201008.GetAllBulkMutateJobs,
    google.ads.adwords.examples.ExampleBase);

/**
 * Runs the code example.
 *
 * @param {google.ads.adwords.AdWordsUser} user AdWords user running the code
 * example.
 * @param {function} callback the callback method to be called once this example
 * is complete.
 */
google.ads.adwords.examples.v201008.GetAllBulkMutateJobs.prototype.
    run = function(user, callback) {
  // Get the BulkMutateJobService.
  var bulkMutateJobService = user.getService(
      google.ads.adwords.AdWordsService.v201008.BulkMutateJobService);

  // Create selector.
  var selector = new google.ads.adwords.v201008.BulkMutateJobSelector();
  selector.includeStats = true;

  try {
    // Get all bulk mutate jobs.
    bulkMutateJobService.get(selector,
      goog.bind(function(bulkMutateJobs) {
        // Display bulk mutate jobs.
        if (bulkMutateJobs) {
          for (var i = 0, len = bulkMutateJobs.length; i < len; i++) {
            var bulkMutateJob = bulkMutateJobs[i];
            this.writeOutput('Bulk mutate job with id "%d" and status "%s" ' +
                'was found.', bulkMutateJob.id, bulkMutateJob.status);

            if (bulkMutateJob.status == google.ads.adwords.v201008.
                BasicJobStatus.PENDING) {
              this.writeOutput('  Total parts: %d, parts received: %d.',
                  bulkMutateJob.numRequestParts,
                  bulkMutateJob.numRequestPartsReceived);
            } else if (bulkMutateJob.status == google.ads.adwords.v201008.
                BasicJobStatus.PROCESSING) {
              this.writeOutput('  Percent complete: %d.',
                  bulkMutateJob.stats.progressPercent);
            } else if (bulkMutateJob.status == google.ads.adwords.v201008.
                BasicJobStatus.COMPLETED) {
              this.writeOutput('  Total operations: %d, failed: %d, ' +
                  'unprocessed: %d.', bulkMutateJob.stats.numOperations,
                  bulkMutateJob.stats.numFailedOperations,
                  bulkMutateJob.stats.numUnprocessedOperations);
            } else if (bulkMutateJob.status == google.ads.adwords.v201008.
                BasicJobStatus.FAILED) {
                  this.writeOutput('  Failure reason: %s.',
                      bulkMutateJob.failureReason.Item);
            }
          }
        } else {
          this.writeOutput('No bulk mutate jobs were found.');
        }
        callback();
      }, this),
      goog.bind(function(soapException) {
        this.writeOutput('Failed to get all bulk mutate jobs. Soap Fault ' +
            'says "%s"', soapException.getInnerException().getFaultString());
        callback();
      }, this)
    );
  } catch (ex) {
    this.writeOutput('An exception occurred while running the code example.');
    callback();
  }
};
