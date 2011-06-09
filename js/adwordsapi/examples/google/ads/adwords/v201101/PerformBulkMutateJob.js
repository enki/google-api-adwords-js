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
 * @fileoverview Defines PerformBulkMutateJob, a code example that shows how to
 * add ads and keywords using the BulkMutateJobService.
 */

goog.provide('google.ads.adwords.examples.v201101.PerformBulkMutateJob');

goog.require('google.ads.adwords.AdWordsService.v201101');
goog.require('google.ads.adwords.examples.ExampleBase');
goog.require('google.ads.adwords.v201101.AdGroupAd');
goog.require('google.ads.adwords.v201101.AdGroupAdOperation');
goog.require('google.ads.adwords.v201101.AdGroupCriterionOperation');
goog.require('google.ads.adwords.v201101.BiddableAdGroupCriterion');
goog.require('google.ads.adwords.v201101.BulkMutateJob');
goog.require('google.ads.adwords.v201101.BulkMutateJobSelector');
goog.require('google.ads.adwords.v201101.BulkMutateJobService');
goog.require('google.ads.adwords.v201101.BulkMutateRequest');
goog.require('google.ads.adwords.v201101.EntityId');
goog.require('google.ads.adwords.v201101.EntityIdType');
goog.require('google.ads.adwords.v201101.JobOperation');
goog.require('google.ads.adwords.v201101.Keyword');
goog.require('google.ads.adwords.v201101.KeywordMatchType');
goog.require('google.ads.adwords.v201101.OperationStream');
goog.require('google.ads.adwords.v201101.Operator');
goog.require('google.ads.adwords.v201101.TextAd');

/**
 * This code example shows how to add ads and keywords using the
 * BulkMutateJobService.
 *
 * Tags: BulkMutateJobService.mutate
 *
 * @extends google.ads.adwords.examples.ExampleBase
 * @constructor
 */

google.ads.adwords.examples.v201101.PerformBulkMutateJob =
    function() {
  google.ads.adwords.examples.ExampleBase.call(this);
  this.description = 'This code example shows how to add ads and keywords ' +
      'using the BulkMutateJobService.';
};
goog.inherits(
    google.ads.adwords.examples.v201101.PerformBulkMutateJob,
    google.ads.adwords.examples.ExampleBase);

/**
 * Runs the code example.
 *
 * @param {google.ads.adwords.AdWordsUser} user AdWords user running the code
 * example.
 * @param {function} callback the callback method to be called once this example
 * is complete.
 */
google.ads.adwords.examples.v201101.PerformBulkMutateJob.prototype.
    run = function(user, callback) {
  // Get the BulkMutateJobService.
  var bulkMutateJobService = user.getService(
      google.ads.adwords.AdWordsService.v201101.BulkMutateJobService);

  var campaignId = this._T('INSERT_CAMPAIGN_ID_HERE');
  var adGroupId = this._T('INSERT_ADGROUP_ID_HERE');

  // Create an AdGroupAdOperation to add a text ad.
  var adGroupAdOperation = new google.ads.adwords.v201101.AdGroupAdOperation();
  adGroupAdOperation.operator = google.ads.adwords.v201101.Operator.ADD;

  var textAd = new google.ads.adwords.v201101.TextAd();
  textAd.headline = 'Luxury Cruise to Mars';
  textAd.description1 = 'Visit the Red Planet in style.';
  textAd.description2 = 'Low-gravity fun for everyone!';
  textAd.displayUrl = 'www.example.com';
  textAd.url = 'http://www.example.com';

  var adGroupAd = new google.ads.adwords.v201101.AdGroupAd();
  adGroupAd.adGroupId = adGroupId;
  adGroupAd.ad = textAd;

  adGroupAdOperation.operand = adGroupAd;

  // Add that operation into the first stream.
  var adOpStream = new google.ads.adwords.v201101.OperationStream();

  adOpStream.scopingEntityId = new google.ads.adwords.v201101.EntityId();
  adOpStream.scopingEntityId.type =
      google.ads.adwords.v201101.EntityIdType.CAMPAIGN_ID;
  adOpStream.scopingEntityId.value = campaignId;

  adOpStream.operations = [adGroupAdOperation];

  // Create AdGroupCriterionOperations to add keywords.
  var adGroupCriterionOperations = [];

  for (var i = 0; i < 100; i++) {
    var keyword = new google.ads.adwords.v201101.Keyword();
    keyword.text = goog.string.format('mars cruise %d', i);
    keyword.matchType = google.ads.adwords.v201101.KeywordMatchType.BROAD;

    var criterion = new google.ads.adwords.v201101.BiddableAdGroupCriterion();
    criterion.adGroupId = adGroupId;
    criterion.criterion = keyword;

    var adGroupCriterionOperation =
        new google.ads.adwords.v201101.AdGroupCriterionOperation();
    adGroupCriterionOperation.operator =
        google.ads.adwords.v201101.Operator.ADD;

    adGroupCriterionOperation.operand = criterion;
    adGroupCriterionOperations[i] = adGroupCriterionOperation;
  }

  // Add those operation into the second stream.
  var keywordOpStream = new google.ads.adwords.v201101.OperationStream();

  keywordOpStream.scopingEntityId = new google.ads.adwords.v201101.EntityId();
  keywordOpStream.scopingEntityId.type =
      google.ads.adwords.v201101.EntityIdType.CAMPAIGN_ID;
  keywordOpStream.scopingEntityId.value = campaignId;

  keywordOpStream.operations = adGroupCriterionOperations;

  // Create a job.

  // a. Create a bulk job object.
  var bulkJobId = 0;
  var bulkJob = new google.ads.adwords.v201101.BulkMutateJob();
  bulkJob.numRequestParts = 2;

  // b. Create a part of the job.
  var bulkRequest1 = new google.ads.adwords.v201101.BulkMutateRequest();
  bulkRequest1.partIndex = 0;
  bulkRequest1.operationStreams = [adOpStream];
  bulkJob.request = bulkRequest1;

  // c. Create job operation.
  var jobOperation1 = new google.ads.adwords.v201101.JobOperation();
  jobOperation1.operator = google.ads.adwords.v201101.Operator.ADD;
  jobOperation1.operand = bulkJob;

  // d. Call mutate().
  try {
    bulkMutateJobService.mutate(jobOperation1,
      goog.bind(function(bulkJob) {
        bulkJobId = bulkJob.id;
        // Similarly, create the next part of the job.

        // Note: since we already created a job earlier, this time we modify it.
        bulkJob = new google.ads.adwords.v201101.BulkMutateJob();
        bulkJob.id = bulkJobId;

        var bulkRequest2 = new google.ads.adwords.v201101.BulkMutateRequest();
        bulkRequest2.partIndex = 1;
        bulkRequest2.operationStreams = [keywordOpStream];
        bulkJob.request = bulkRequest2;

        var jobOperation2 = new google.ads.adwords.v201101.JobOperation();
        jobOperation2.operator = google.ads.adwords.v201101.Operator.SET;
        jobOperation2.operand = bulkJob;

        bulkMutateJobService.mutate(jobOperation2,
          goog.bind(function(bulkJob) {
            bulkJobId = bulkJob.id;
            var callbackFunction = goog.bind(function() {
              var selector =
                  new google.ads.adwords.v201101.BulkMutateJobSelector();
              selector.jobIds = [bulkJobId];

              var completed = false;

              bulkMutateJobService.get(selector,
                goog.bind(function(allJobs) {
                  if (allJobs && allJobs.length > 0) {
                    if (allJobs[0].status ==
                        google.ads.adwords.v201101.BasicJobStatus.COMPLETED ||
                        allJobs[0].status ==
                        google.ads.adwords.v201101.BasicJobStatus.FAILED) {
                      bulkJob = allJobs[0];
                      completed = true;
                    } else {
                      setTimeout(callbackFunction(), 5000);
                    }
                  }
                  if (completed) {
                    if (bulkJob.status ==
                        google.ads.adwords.v201101.BasicJobStatus.COMPLETED) {
                      // Retrieve the job parts.
                      for (var i = 0; i < bulkJob.numRequestParts; i++) {
                        var selector = new google.ads.adwords.v201101.
                            BulkMutateJobSelector();
                        selector.jobIds = [bulkJobId];
                        selector.resultPartIndex = i;

                        bulkMutateJobService.get(selector,
                          goog.bind(function(allJobParts) {
                            for (var i = 0, len = allJobParts.length; i < len;
                                i++) {
                              var jobPart = allJobParts[i];
                              this.writeOutput('Part %d/%d of job "%d" has ' +
                                  'successfully completed.',
                                  jobPart.result.partIndex + 1,
                                  bulkJob.numRequestParts, jobPart.id);
                            }
                            callback();
                          }, this),
                          goog.bind(function(soapException) {
                            this.writeOutput('"Failed to get bulkjob part. ' +
                                'Soap Fault says "%s"',
                                soapException.getInnerException().
                                getFaultString());
                            callback();
                          }, this)
                        );
                      }
                      this.writeOutput('Job completed successfully!');
                    } else {
                      this.writeOutput('Job could not be completed.');
                    }
                    callback();
                  }
                }, this),
                goog.bind(function(soapException) {
                  this.writeOutput('"Failed to get bulkjob. Soap Fault ' +
                      'says "%s"', soapException.getInnerException().
                      getFaultString());
                  callback();
                }, this)
              );
            }, this);
            setTimeout(callbackFunction(), 5000);
          }, this),
          goog.bind(function(soapException) {
            this.writeOutput('"Failed to update bulkjob. Soap Fault says "%s"',
                soapException.getInnerException().getFaultString());
            callback();
          }, this)
        );
      }, this),
      goog.bind(function(soapException) {
        this.writeOutput('"Failed to create bulkjob. Soap Fault says "%s"',
            soapException.getInnerException().getFaultString());
        callback();
      }, this)
    );
  } catch (ex) {
    this.writeOutput('An exception occurred while running the code example.');
    callback();
  }
};
