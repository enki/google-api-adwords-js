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
 * @fileoverview Defines PerformMutateJob, a code example that shows how to
 * add keywords using the MutateJobService.
 */

goog.provide('google.ads.adwords.examples.v201109.PerformMutateJob');

goog.require('google.ads.adwords.AdWordsService.v201109');
goog.require('google.ads.adwords.examples.ExampleBase');
goog.require('google.ads.adwords.v201109.AdGroupAdOperation');
goog.require('google.ads.adwords.v201109.AdGroupCriterionOperation');
goog.require('google.ads.adwords.v201109.BiddableAdGroupCriterion');
goog.require('google.ads.adwords.v201109.BulkMutateJobPolicy');
goog.require('google.ads.adwords.v201109.BulkMutateJobSelector');
goog.require('google.ads.adwords.v201109.Keyword');
goog.require('google.ads.adwords.v201109.KeywordMatchType');
goog.require('google.ads.adwords.v201109.MutateJobService');

/**
 * This code example shows how to add ads and keywords using the
 * MutateJobService.
 *
 * Tags: MutateJobService.mutate
 *
 * @extends google.ads.adwords.examples.ExampleBase
 * @constructor
 */

google.ads.adwords.examples.v201109.PerformMutateJob =
    function() {
  google.ads.adwords.examples.ExampleBase.call(this);
  this.description = 'This code example shows how to add ads and keywords ' +
      'using the MutateJobService.';
};
goog.inherits(
    google.ads.adwords.examples.v201109.PerformMutateJob,
    google.ads.adwords.examples.ExampleBase);

/**
 * Time between every status fetch.
 * @type number
 * @const
 */
google.ads.adwords.examples.v201109.PerformMutateJob.prototype.RETRY_INTERVAL =
    30000;

/**
 * Maximum number of retries for fetching status before give up.
 * @type number
 * @const
 */
google.ads.adwords.examples.v201109.PerformMutateJob.prototype.RETRIES_COUNT =
    30;

/**
 * Number of keywords to create.
 * @type number
 * @const
 */
google.ads.adwords.examples.v201109.PerformMutateJob.prototype.KEYWORD_NUMBER =
    100;

/**
 * Runs the code example.
 *
 * @param {google.ads.adwords.AdWordsUser} user AdWords user running the code
 *     example.
 * @param {function} callback the callback method to be called once this example
 *     is complete.
 */
google.ads.adwords.examples.v201109.PerformMutateJob.prototype.
    run = function(user, callback) {
  // Get the BulkMutateJobService.
  var mutateJobService = user.getService(
      google.ads.adwords.AdWordsService.v201109.MutateJobService);

  var adGroupId = this._T('INSERT_ADGROUP_ID_HERE');

  // Create AdGroupCriterionOperations to add keywords.
  var adGroupCriterionOperations = [];

  for (var i = 0; i < this.KEYWORD_NUMBER; i++) {
    var keyword = new google.ads.adwords.v201109.Keyword();
    keyword.text = goog.string.format('mars cruise %d', i);
    if (Math.floor(Math.random() * 11) == 0) {
      keyword.text += '!!!';
    }
    keyword.matchType = google.ads.adwords.v201109.KeywordMatchType.BROAD;

    var criterion = new google.ads.adwords.v201109.BiddableAdGroupCriterion();
    criterion.adGroupId = adGroupId;
    criterion.criterion = keyword;

    var adGroupCriterionOperation =
        new google.ads.adwords.v201109.AdGroupCriterionOperation();
    adGroupCriterionOperation.operator =
        google.ads.adwords.v201109.Operator.ADD;

    adGroupCriterionOperation.operand = criterion;
    adGroupCriterionOperations[i] = adGroupCriterionOperation;
  }

  // You can specify up to 3 job IDs that must successfully complete before this
  // job can be processed.
  var policy = new google.ads.adwords.v201109.BulkMutateJobPolicy();
  policy.prerequisiteJobIds = [];

  var self = this;

  // Call mutate to create a new job.
  try {
    mutateJobService.mutate(adGroupCriterionOperations, policy,
      goog.bind(function(bulkJob) {
        var bulkJobId = bulkJob.id;
        self.writeOutput('Job ID %d was created successfully.', bulkJobId);

        // Creating selector to retrieve job status and wait for it to complete.
        var retries = 0;
        var callbackFunction = goog.bind(function() {
          var selector = new google.ads.adwords.v201109.BulkMutateJobSelector();
          selector.jobIds = [bulkJobId];
          var completed = false;
          var job;

          mutateJobService.get(selector, goog.bind(function(allJobs) {
            if (allJobs && allJobs.length > 0) {
              job = allJobs[0];
              if (job.status ==
                  google.ads.adwords.v201109.BasicJobStatus.COMPLETED) {
                self.writeOutput('Job finished with status "%s".', job.status);
                completed = true;
              } else if (job.status ==
                  google.ads.adwords.v201109.BasicJobStatus.FAILED) {
                self.writeOutput('Job failed with reason "%s".',
                    job.statusResponse.failureReason);
              } else if (retries < self.RETRIES_COUNT) {
                self.writeOutput('Current status is "%s", waiting %d to' +
                    'retry...', var_args);
                setTimeout(callbackFunction(), self.RETRY_INTERVAL);
              }
            }
            if (completed) {
              mutateJobService.getResult(selector,
                goog.bind(function(resultResponse) {
                  var results = resultResponse.simpleMutateResult.results;
                  if (results) {
                    for (var i = 0, len = results.length; i < len; i++) {
                      var result = results[i];
                      if (result.placeHolder) {
                        self.writeOutput('Operation [%d] - FAILED', i);
                      } else {
                        self.writeOutput('Operation [%d] - SUCCEEDED', i);
                      }
                    }
                  }
                  var errors = resultResponse.simpleMutateResult.errors;
                  if (errors) {
                    for (var i = 0, len = errors.length; i < len; i++) {
                      var error = errors[i];
                      self.writeOutput('Error, reason: "%s", trigger: "%s", ' +
                          'field path: %s', error.reason, error.trigger,
                          error.fieldPath);
                    }
                  }
                }, this), goog.bind(function(soapException) {
                  this.writeOutput('Failed to get job result. Soap Fault ' +
                      'says "%s"', soapException.getInnerException().
                      getFaultString());
                  callback();
                }, this));
            } else {
              this.writeOutput('Job failed to complete after %d retries',
                  self.RETRY_COUNT);
            }
          }), goog.bind(function(soapException) {
              this.writeOutput('Failed to get job status. Soap Fault says "%s"',
                  soapException.getInnerException().getFaultString());
              callback();
            }, this));
          }, this);

        setTimeout(callbackFunction(), self.RETRY_INTERVAL);

      }, this), goog.bind(function(soapException) {
        this.writeOutput('"Failed to create job. Soap Fault says "%s"',
            soapException.getInnerException().getFaultString());
        callback();
      }, this));
  } catch (ex) {
    this.writeOutput('An exception occurred while running the code example.');
    callback();
  }
};
