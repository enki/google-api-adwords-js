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
 * @fileoverview Defines all the code examples supported in the library.
 */

goog.provide('google.ads.adwords.examples.Program');

goog.require('google.ads.adwords.User');
goog.require('google.ads.adwords.examples.v201008.AddAdExtensionOverride');
goog.require('google.ads.adwords.examples.v201008.AddAdGroup');
goog.require('google.ads.adwords.examples.v201008.AddAdGroupCriteria');
goog.require('google.ads.adwords.examples.v201008.AddAds');
goog.require('google.ads.adwords.examples.v201008.AddCampaign');
goog.require('google.ads.adwords.examples.v201008.AddCampaignAdExtension');
goog.require('google.ads.adwords.examples.v201008.AddExperiment');
goog.require('google.ads.adwords.examples.v201008.AddKeywordsPerformanceReportDefinition');
goog.require('google.ads.adwords.examples.v201008.AddLogicalUserList');
goog.require('google.ads.adwords.examples.v201008.AddNegativeCampaignCriterion');
goog.require('google.ads.adwords.examples.v201008.AddSiteLinks');
goog.require('google.ads.adwords.examples.v201008.AddUserList');
goog.require('google.ads.adwords.examples.v201008.CheckCampaigns');
goog.require('google.ads.adwords.examples.v201008.DeleteAd');
goog.require('google.ads.adwords.examples.v201008.DeleteAdGroup');
goog.require('google.ads.adwords.examples.v201008.DeleteAdGroupCriterion');
goog.require('google.ads.adwords.examples.v201008.DeleteBulkMutateJob');
goog.require('google.ads.adwords.examples.v201008.DeleteCampaign');
goog.require('google.ads.adwords.examples.v201008.DeleteExperiment');
goog.require('google.ads.adwords.examples.v201008.DeleteSiteLinks');
goog.require('google.ads.adwords.examples.v201008.DeleteUserList');
goog.require('google.ads.adwords.examples.v201008.DownloadReport');
goog.require('google.ads.adwords.examples.v201008.GetAccountHierarchy');
goog.require('google.ads.adwords.examples.v201008.GetAllAccountChanges');
goog.require('google.ads.adwords.examples.v201008.GetAllActiveAdGroupCriteria');
goog.require('google.ads.adwords.examples.v201008.GetAllAdExtensionOverrides');
goog.require('google.ads.adwords.examples.v201008.GetAllAdGroupCriteria');
goog.require('google.ads.adwords.examples.v201008.GetAllAdGroups');
goog.require('google.ads.adwords.examples.v201008.GetAllAds');
goog.require('google.ads.adwords.examples.v201008.GetAllBulkMutateJobs');
goog.require('google.ads.adwords.examples.v201008.GetAllCampaignAdExtensions');
goog.require('google.ads.adwords.examples.v201008.GetAllCampaignTargets');
goog.require('google.ads.adwords.examples.v201008.GetAllCampaigns');
goog.require('google.ads.adwords.examples.v201008.GetAllDisapprovedAds');
goog.require('google.ads.adwords.examples.v201008.GetAllExperiments');
goog.require('google.ads.adwords.examples.v201008.GetAllImages');
goog.require('google.ads.adwords.examples.v201008.GetAllNegativeCampaignCriteria');
goog.require('google.ads.adwords.examples.v201008.GetAllPausedCampaigns');
goog.require('google.ads.adwords.examples.v201008.GetAllReportDefinitions');
goog.require('google.ads.adwords.examples.v201008.GetAllUserLists');
goog.require('google.ads.adwords.examples.v201008.GetAllVideos');
goog.require('google.ads.adwords.examples.v201008.GetCampaign');
goog.require('google.ads.adwords.examples.v201008.GetCampaignAlerts');
goog.require('google.ads.adwords.examples.v201008.GetConversionOptimizerEligibility');
goog.require('google.ads.adwords.examples.v201008.GetCriterionBidLandscape');
goog.require('google.ads.adwords.examples.v201008.GetGeoLocationInfo');
goog.require('google.ads.adwords.examples.v201008.GetMethodCost');
goog.require('google.ads.adwords.examples.v201008.GetOperationCount');
goog.require('google.ads.adwords.examples.v201008.GetRelatedKeywords');
goog.require('google.ads.adwords.examples.v201008.GetRelatedPlacements');
goog.require('google.ads.adwords.examples.v201008.GetReportFields');
goog.require('google.ads.adwords.examples.v201008.GetTotalUsageUnitsPerMonth');
goog.require('google.ads.adwords.examples.v201008.GetTrafficEstimates');
goog.require('google.ads.adwords.examples.v201008.GetUnitCount');
goog.require('google.ads.adwords.examples.v201008.HandlePartialFailures');
goog.require('google.ads.adwords.examples.v201008.PerformBulkMutateJob');
goog.require('google.ads.adwords.examples.v201008.PromoteExperiment');
goog.require('google.ads.adwords.examples.v201008.SetAdParams');
goog.require('google.ads.adwords.examples.v201008.SetCampaignTargets');
goog.require('google.ads.adwords.examples.v201008.UpdateAd');
goog.require('google.ads.adwords.examples.v201008.UpdateAdGroup');
goog.require('google.ads.adwords.examples.v201008.UpdateAdGroupCriterion');
goog.require('google.ads.adwords.examples.v201008.UpdateCampaign');
goog.require('google.ads.adwords.examples.v201008.UpdateUserList');
goog.require('google.ads.adwords.examples.v201101.AddAdExtensionOverride');
goog.require('google.ads.adwords.examples.v201101.AddAdGroup');
goog.require('google.ads.adwords.examples.v201101.AddAdGroupCriteria');
goog.require('google.ads.adwords.examples.v201101.AddAds');
goog.require('google.ads.adwords.examples.v201101.AddCampaign');
goog.require('google.ads.adwords.examples.v201101.AddCampaignAdExtension');
goog.require('google.ads.adwords.examples.v201101.AddExperiment');
goog.require('google.ads.adwords.examples.v201101.AddKeywordsPerformanceReportDefinition');
goog.require('google.ads.adwords.examples.v201101.AddLogicalUserList');
goog.require('google.ads.adwords.examples.v201101.AddNegativeCampaignCriterion');
goog.require('google.ads.adwords.examples.v201101.AddSiteLinks');
goog.require('google.ads.adwords.examples.v201101.AddUserList');
goog.require('google.ads.adwords.examples.v201101.CheckCampaigns');
goog.require('google.ads.adwords.examples.v201101.DeleteAd');
goog.require('google.ads.adwords.examples.v201101.DeleteAdGroup');
goog.require('google.ads.adwords.examples.v201101.DeleteAdGroupCriterion');
goog.require('google.ads.adwords.examples.v201101.DeleteBulkMutateJob');
goog.require('google.ads.adwords.examples.v201101.DeleteCampaign');
goog.require('google.ads.adwords.examples.v201101.DeleteExperiment');
goog.require('google.ads.adwords.examples.v201101.DeleteSiteLinks');
goog.require('google.ads.adwords.examples.v201101.DeleteUserList');
goog.require('google.ads.adwords.examples.v201101.DownloadReport');
goog.require('google.ads.adwords.examples.v201101.GetAccountHierarchy');
goog.require('google.ads.adwords.examples.v201101.GetAllAccountChanges');
goog.require('google.ads.adwords.examples.v201101.GetAllActiveAdGroupCriteria');
goog.require('google.ads.adwords.examples.v201101.GetAllAdExtensionOverrides');
goog.require('google.ads.adwords.examples.v201101.GetAllAdGroupCriteria');
goog.require('google.ads.adwords.examples.v201101.GetAllAdGroups');
goog.require('google.ads.adwords.examples.v201101.GetAllAds');
goog.require('google.ads.adwords.examples.v201101.GetAllBulkMutateJobs');
goog.require('google.ads.adwords.examples.v201101.GetAllCampaignAdExtensions');
goog.require('google.ads.adwords.examples.v201101.GetAllCampaignTargets');
goog.require('google.ads.adwords.examples.v201101.GetAllCampaigns');
goog.require('google.ads.adwords.examples.v201101.GetAllDisapprovedAds');
goog.require('google.ads.adwords.examples.v201101.GetAllExperiments');
goog.require('google.ads.adwords.examples.v201101.GetAllImages');
goog.require('google.ads.adwords.examples.v201101.GetAllNegativeCampaignCriteria');
goog.require('google.ads.adwords.examples.v201101.GetAllPausedCampaigns');
goog.require('google.ads.adwords.examples.v201101.GetAllReportDefinitions');
goog.require('google.ads.adwords.examples.v201101.GetAllUserLists');
goog.require('google.ads.adwords.examples.v201101.GetAllVideos');
goog.require('google.ads.adwords.examples.v201101.GetCampaign');
goog.require('google.ads.adwords.examples.v201101.GetCampaignAlerts');
goog.require('google.ads.adwords.examples.v201101.GetConversionOptimizerEligibility');
goog.require('google.ads.adwords.examples.v201101.GetCriterionBidLandscape');
goog.require('google.ads.adwords.examples.v201101.GetGeoLocationInfo');
goog.require('google.ads.adwords.examples.v201101.GetMethodCost');
goog.require('google.ads.adwords.examples.v201101.GetOperationCount');
goog.require('google.ads.adwords.examples.v201101.GetRelatedKeywords');
goog.require('google.ads.adwords.examples.v201101.GetRelatedPlacements');
goog.require('google.ads.adwords.examples.v201101.GetReportFields');
goog.require('google.ads.adwords.examples.v201101.GetTotalUsageUnitsPerMonth');
goog.require('google.ads.adwords.examples.v201101.GetTrafficEstimates');
goog.require('google.ads.adwords.examples.v201101.GetUnitCount');
goog.require('google.ads.adwords.examples.v201101.HandlePartialFailures');
goog.require('google.ads.adwords.examples.v201101.PerformBulkMutateJob');
goog.require('google.ads.adwords.examples.v201101.PromoteExperiment');
goog.require('google.ads.adwords.examples.v201101.SetAdParams');
goog.require('google.ads.adwords.examples.v201101.SetCampaignTargets');
goog.require('google.ads.adwords.examples.v201101.UpdateAd');
goog.require('google.ads.adwords.examples.v201101.UpdateAdGroup');
goog.require('google.ads.adwords.examples.v201101.UpdateAdGroupCriterion');
goog.require('google.ads.adwords.examples.v201101.UpdateCampaign');
goog.require('google.ads.adwords.examples.v201101.UpdateUserList');

/**
 * Defines all the code examples supported in the library.
 *
 * @param {string} divId The div to which example outputs should be written to.
 *
 * @constructor
 */
google.ads.adwords.examples.Program = function(divId) {
  this.user = new google.ads.adwords.User(null);
  this.examples = {};
  this.divId = divId;

  // v201101 examples.
  this.examples['v201101.AddAdExtensionOverride'] =
      'v201101.AddAdExtensionOverride';
  this.examples['v201101.AddAdGroup'] = 'v201101.AddAdGroup';
  this.examples['v201101.AddAdGroupCriteria'] = 'v201101.AddAdGroupCriteria';
  this.examples['v201101.AddAds'] = 'v201101.AddAds';
  this.examples['v201101.AddCampaign'] = 'v201101.AddCampaign';
  this.examples['v201101.AddCampaignAdExtension'] =
      'v201101.AddCampaignAdExtension';
  this.examples['v201101.AddExperiment'] = 'v201101.AddExperiment';
  this.examples['v201101.AddKeywordsPerformanceReportDefinition'] =
   'v201101.AddKeywordsPerformanceReportDefinition';
  this.examples['v201101.AddLogicalUserList'] = 'v201101.AddLogicalUserList';
  this.examples['v201101.AddNegativeCampaignCriterion'] =
   'v201101.AddNegativeCampaignCriterion';
  this.examples['v201101.AddSiteLinks'] = 'v201101.AddSiteLinks';
  this.examples['v201101.AddUserList'] = 'v201101.AddUserList';
  this.examples['v201101.CheckCampaigns'] = 'v201101.CheckCampaigns';
  this.examples['v201101.DeleteAd'] = 'v201101.DeleteAd';
  this.examples['v201101.DeleteAdGroup'] = 'v201101.DeleteAdGroup';
  this.examples['v201101.DeleteAdGroupCriterion'] =
   'v201101.DeleteAdGroupCriterion';
  this.examples['v201101.DeleteBulkMutateJob'] = 'v201101.DeleteBulkMutateJob';
  this.examples['v201101.DeleteCampaign'] = 'v201101.DeleteCampaign';
  this.examples['v201101.DeleteExperiment'] = 'v201101.DeleteExperiment';
  this.examples['v201101.DeleteSiteLinks'] = 'v201101.DeleteSiteLinks';
  this.examples['v201101.DeleteUserList'] = 'v201101.DeleteUserList';
  this.examples['v201101.DownloadReport'] = 'v201101.DownloadReport';
  this.examples['v201101.GetAccountHierarchy'] = 'v201101.GetAccountHierarchy';
  this.examples['v201101.GetAllAccountChanges'] =
      'v201101.GetAllAccountChanges';
  this.examples['v201101.GetAllActiveAdGroupCriteria'] =
      'v201101.GetAllActiveAdGroupCriteria';
  this.examples['v201101.GetAllAdExtensionOverrides'] =
      'v201101.GetAllAdExtensionOverrides';
  this.examples['v201101.GetAllAdGroupCriteria'] =
      'v201101.GetAllAdGroupCriteria';
  this.examples['v201101.GetAllAdGroups'] = 'v201101.GetAllAdGroups';
  this.examples['v201101.GetAllAds'] = 'v201101.GetAllAds';
  this.examples['v201101.GetAllBulkMutateJobs'] =
      'v201101.GetAllBulkMutateJobs';
  this.examples['v201101.GetAllCampaignAdExtensions'] =
      'v201101.GetAllCampaignAdExtensions';
  this.examples['v201101.GetAllCampaigns'] = 'v201101.GetAllCampaigns';
  this.examples['v201101.GetAllCampaignTargets'] =
      'v201101.GetAllCampaignTargets';
  this.examples['v201101.GetAllDisapprovedAds'] =
      'v201101.GetAllDisapprovedAds';
  this.examples['v201101.GetAllExperiments'] = 'v201101.GetAllExperiments';
  this.examples['v201101.GetAllImages'] = 'v201101.GetAllImages';
  this.examples['v201101.GetAllPausedCampaigns'] =
      'v201101.GetAllPausedCampaigns';
  this.examples['v201101.GetAllReportDefinitions'] =
      'v201101.GetAllReportDefinitions';
  this.examples['v201101.GetAllUserLists'] = 'v201101.GetAllUserLists';
  this.examples['v201101.GetAllVideos'] = 'v201101.GetAllVideos';
  this.examples['v201101.GetCampaign'] = 'v201101.GetCampaign';
  this.examples['v201101.GetCampaignAlerts'] = 'v201101.GetCampaignAlerts';
  this.examples['v201101.GetConversionOptimizerEligibility'] =
      'v201101.GetConversionOptimizerEligibility';
  this.examples['v201101.GetCriterionBidLandscape'] =
      'v201101.GetCriterionBidLandscape';
  this.examples['v201101.GetGeoLocationInfo'] = 'v201101.GetGeoLocationInfo';
  this.examples['v201101.GetMethodCost'] = 'v201101.GetMethodCost';
  this.examples['v201101.GetAllNegativeCampaignCriteria'] =
      'v201101.GetAllNegativeCampaignCriteria';
  this.examples['v201101.GetOperationCount'] = 'v201101.GetOperationCount';
  this.examples['v201101.GetRelatedKeywords'] = 'v201101.GetRelatedKeywords';
  this.examples['v201101.GetRelatedPlacements'] =
      'v201101.GetRelatedPlacements';
  this.examples['v201101.GetReportFields'] = 'v201101.GetReportFields';
  this.examples['v201101.GetTotalUsageUnitsPerMonth'] =
      'v201101.GetTotalUsageUnitsPerMonth';
  this.examples['v201101.GetTrafficEstimates'] = 'v201101.GetTrafficEstimates';
  this.examples['v201101.GetUnitCount'] = 'v201101.GetUnitCount';
  this.examples['v201101.HandlePartialFailures'] =
      'v201101.HandlePartialFailures';
  this.examples['v201101.PerformBulkMutateJob'] =
      'v201101.PerformBulkMutateJob';
  this.examples['v201101.PromoteExperiment'] = 'v201101.PromoteExperiment';
  this.examples['v201101.SetAdParams'] = 'v201101.SetAdParams';
  this.examples['v201101.SetCampaignTargets'] = 'v201101.SetCampaignTargets';
  this.examples['v201101.UpdateAd'] = 'v201101.UpdateAd';
  this.examples['v201101.UpdateAdGroup'] = 'v201101.UpdateAdGroup';
  this.examples['v201101.UpdateAdGroupCriterion'] =
      'v201101.UpdateAdGroupCriterion';
  this.examples['v201101.UpdateCampaign'] = 'v201101.UpdateCampaign';
  this.examples['v201101.UpdateUserList'] = 'v201101.UpdateUserList';

    // v201008 examples.
  this.examples['v201008.AddAdExtensionOverride'] =
      'v201008.AddAdExtensionOverride';
  this.examples['v201008.AddAdGroup'] = 'v201008.AddAdGroup';
  this.examples['v201008.AddAdGroupCriteria'] = 'v201008.AddAdGroupCriteria';
  this.examples['v201008.AddAds'] = 'v201008.AddAds';
  this.examples['v201008.AddCampaign'] = 'v201008.AddCampaign';
  this.examples['v201008.AddCampaignAdExtension'] =
      'v201008.AddCampaignAdExtension';
  this.examples['v201008.AddExperiment'] = 'v201008.AddExperiment';
  this.examples['v201008.AddKeywordsPerformanceReportDefinition'] =
   'v201008.AddKeywordsPerformanceReportDefinition';
  this.examples['v201008.AddLogicalUserList'] = 'v201008.AddLogicalUserList';
  this.examples['v201008.AddNegativeCampaignCriterion'] =
   'v201008.AddNegativeCampaignCriterion';
  this.examples['v201008.AddSiteLinks'] = 'v201008.AddSiteLinks';
  this.examples['v201008.AddUserList'] = 'v201008.AddUserList';
  this.examples['v201008.CheckCampaigns'] = 'v201008.CheckCampaigns';
  this.examples['v201008.DeleteAd'] = 'v201008.DeleteAd';
  this.examples['v201008.DeleteAdGroup'] = 'v201008.DeleteAdGroup';
  this.examples['v201008.DeleteAdGroupCriterion'] =
   'v201008.DeleteAdGroupCriterion';
  this.examples['v201008.DeleteBulkMutateJob'] = 'v201008.DeleteBulkMutateJob';
  this.examples['v201008.DeleteCampaign'] = 'v201008.DeleteCampaign';
  this.examples['v201008.DeleteExperiment'] = 'v201008.DeleteExperiment';
  this.examples['v201008.DeleteSiteLinks'] = 'v201008.DeleteSiteLinks';
  this.examples['v201008.DeleteUserList'] = 'v201008.DeleteUserList';
  this.examples['v201008.DownloadReport'] = 'v201008.DownloadReport';
  this.examples['v201008.GetAccountHierarchy'] = 'v201008.GetAccountHierarchy';
  this.examples['v201008.GetAllAccountChanges'] =
      'v201008.GetAllAccountChanges';
  this.examples['v201008.GetAllActiveAdGroupCriteria'] =
      'v201008.GetAllActiveAdGroupCriteria';
  this.examples['v201008.GetAllAdExtensionOverrides'] =
      'v201008.GetAllAdExtensionOverrides';
  this.examples['v201008.GetAllAdGroupCriteria'] =
      'v201008.GetAllAdGroupCriteria';
  this.examples['v201008.GetAllAdGroups'] = 'v201008.GetAllAdGroups';
  this.examples['v201008.GetAllAds'] = 'v201008.GetAllAds';
  this.examples['v201008.GetAllBulkMutateJobs'] =
      'v201008.GetAllBulkMutateJobs';
  this.examples['v201008.GetAllCampaignAdExtensions'] =
      'v201008.GetAllCampaignAdExtensions';
  this.examples['v201008.GetAllCampaigns'] = 'v201008.GetAllCampaigns';
  this.examples['v201008.GetAllCampaignTargets'] =
      'v201008.GetAllCampaignTargets';
  this.examples['v201008.GetAllDisapprovedAds'] =
      'v201008.GetAllDisapprovedAds';
  this.examples['v201008.GetAllExperiments'] = 'v201008.GetAllExperiments';
  this.examples['v201008.GetAllImages'] = 'v201008.GetAllImages';
  this.examples['v201008.GetAllPausedCampaigns'] =
      'v201008.GetAllPausedCampaigns';
  this.examples['v201008.GetAllReportDefinitions'] =
      'v201008.GetAllReportDefinitions';
  this.examples['v201008.GetAllUserLists'] = 'v201008.GetAllUserLists';
  this.examples['v201008.GetAllVideos'] = 'v201008.GetAllVideos';
  this.examples['v201008.GetCampaign'] = 'v201008.GetCampaign';
  this.examples['v201008.GetCampaignAlerts'] = 'v201008.GetCampaignAlerts';
  this.examples['v201008.GetConversionOptimizerEligibility'] =
      'v201008.GetConversionOptimizerEligibility';
  this.examples['v201008.GetCriterionBidLandscape'] =
      'v201008.GetCriterionBidLandscape';
  this.examples['v201008.GetGeoLocationInfo'] = 'v201008.GetGeoLocationInfo';
  this.examples['v201008.GetMethodCost'] = 'v201008.GetMethodCost';
  this.examples['v201008.GetAllNegativeCampaignCriteria'] =
      'v201008.GetAllNegativeCampaignCriteria';
  this.examples['v201008.GetOperationCount'] = 'v201008.GetOperationCount';
  this.examples['v201008.GetRelatedKeywords'] = 'v201008.GetRelatedKeywords';
  this.examples['v201008.GetRelatedPlacements'] =
      'v201008.GetRelatedPlacements';
  this.examples['v201008.GetReportFields'] = 'v201008.GetReportFields';
  this.examples['v201008.GetTotalUsageUnitsPerMonth'] =
      'v201008.GetTotalUsageUnitsPerMonth';
  this.examples['v201008.GetTrafficEstimates'] = 'v201008.GetTrafficEstimates';
  this.examples['v201008.GetUnitCount'] = 'v201008.GetUnitCount';
  this.examples['v201008.HandlePartialFailures'] =
      'v201008.HandlePartialFailures';
  this.examples['v201008.PerformBulkMutateJob'] =
      'v201008.PerformBulkMutateJob';
  this.examples['v201008.PromoteExperiment'] = 'v201008.PromoteExperiment';
  this.examples['v201008.SetAdParams'] = 'v201008.SetAdParams';
  this.examples['v201008.SetCampaignTargets'] = 'v201008.SetCampaignTargets';
  this.examples['v201008.UpdateAd'] = 'v201008.UpdateAd';
  this.examples['v201008.UpdateAdGroup'] = 'v201008.UpdateAdGroup';
  this.examples['v201008.UpdateAdGroupCriterion'] =
      'v201008.UpdateAdGroupCriterion';
  this.examples['v201008.UpdateCampaign'] = 'v201008.UpdateCampaign';
  this.examples['v201008.UpdateUserList'] = 'v201008.UpdateUserList';
};

/**
 * Runs a code example.
 *
 * @param {string} key The unique key for identifying code example.
 */
google.ads.adwords.examples.Program.prototype.run = function(key) {
  var type = goog.getObjectByName('google.ads.adwords.examples.' +
      this.examples[key]);
  var example = new type();
  var results = (this.divId) ? document.getElementById('results') : null;
  if (results) {
    results.innerHTML = example.description + '\n\n';
  } else {
    alert(example.description);
  }
  example.run(this.user, function() {
    if (results) {
      results.innerHTML += example.output;
    } else {
      alert(example.output);
    }
  });
};
