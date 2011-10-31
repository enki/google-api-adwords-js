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
goog.require('google.ads.adwords.examples.v201109.AddAdExtensionOverride');
goog.require('google.ads.adwords.examples.v201109.AddAdGroup');
goog.require('google.ads.adwords.examples.v201109.AddAdGroupCriteria');
goog.require('google.ads.adwords.examples.v201109.AddAds');
goog.require('google.ads.adwords.examples.v201109.AddCampaign');
goog.require('google.ads.adwords.examples.v201109.AddCampaignAdExtension');
goog.require('google.ads.adwords.examples.v201109.AddCampaignTargetingCriteria');
goog.require('google.ads.adwords.examples.v201109.AddExperiment');
goog.require('google.ads.adwords.examples.v201109.AddLogicalUserList');
goog.require('google.ads.adwords.examples.v201109.AddNegativeCampaignCriterion');
goog.require('google.ads.adwords.examples.v201109.AddSiteLinks');
goog.require('google.ads.adwords.examples.v201109.AddUserList');
goog.require('google.ads.adwords.examples.v201109.CheckCampaigns');
goog.require('google.ads.adwords.examples.v201109.DeleteAd');
goog.require('google.ads.adwords.examples.v201109.DeleteAdGroup');
goog.require('google.ads.adwords.examples.v201109.DeleteAdGroupCriterion');
goog.require('google.ads.adwords.examples.v201109.DeleteBulkMutateJob');
goog.require('google.ads.adwords.examples.v201109.DeleteCampaign');
goog.require('google.ads.adwords.examples.v201109.DeleteExperiment');
goog.require('google.ads.adwords.examples.v201109.DeleteSiteLinks');
goog.require('google.ads.adwords.examples.v201109.DeleteUserList');
goog.require('google.ads.adwords.examples.v201109.DownloadAdHocReport');
goog.require('google.ads.adwords.examples.v201109.DownloadReport');
goog.require('google.ads.adwords.examples.v201109.GetAccountHierarchy');
goog.require('google.ads.adwords.examples.v201109.GetAllAccountChanges');
goog.require('google.ads.adwords.examples.v201109.GetAllActiveAdGroupCriteria');
goog.require('google.ads.adwords.examples.v201109.GetAllAdExtensionOverrides');
goog.require('google.ads.adwords.examples.v201109.GetAllAdGroupCriteria');
goog.require('google.ads.adwords.examples.v201109.GetAllAdGroups');
goog.require('google.ads.adwords.examples.v201109.GetAllAds');
goog.require('google.ads.adwords.examples.v201109.GetAllBulkMutateJobs');
goog.require('google.ads.adwords.examples.v201109.GetAllCampaignAdExtensions');
goog.require('google.ads.adwords.examples.v201109.GetAllCampaignTargets');
goog.require('google.ads.adwords.examples.v201109.GetAllCampaigns');
goog.require('google.ads.adwords.examples.v201109.GetAllCarriers');
goog.require('google.ads.adwords.examples.v201109.GetAllDisapprovedAds');
goog.require('google.ads.adwords.examples.v201109.GetAllExperiments');
goog.require('google.ads.adwords.examples.v201109.GetAllImages');
goog.require('google.ads.adwords.examples.v201109.GetAllLanguages');
goog.require('google.ads.adwords.examples.v201109.GetAllNegativeCampaignCriteria');
goog.require('google.ads.adwords.examples.v201109.GetAllPausedCampaigns');
goog.require('google.ads.adwords.examples.v201109.GetAllReportDefinitions');
goog.require('google.ads.adwords.examples.v201109.GetAllUserLists');
goog.require('google.ads.adwords.examples.v201109.GetAllVideos');
goog.require('google.ads.adwords.examples.v201109.GetCampaign');
goog.require('google.ads.adwords.examples.v201109.GetCampaignAlerts');
goog.require('google.ads.adwords.examples.v201109.GetClientCustomerId');
goog.require('google.ads.adwords.examples.v201109.GetConversionOptimizerEligibility');
goog.require('google.ads.adwords.examples.v201109.GetCriterionBidLandscape');
goog.require('google.ads.adwords.examples.v201109.GetGeoLocationInfo');
goog.require('google.ads.adwords.examples.v201109.GetMethodCost');
goog.require('google.ads.adwords.examples.v201109.GetLocationCriteria');
goog.require('google.ads.adwords.examples.v201109.GetOperationCount');
goog.require('google.ads.adwords.examples.v201109.GetRelatedKeywords');
goog.require('google.ads.adwords.examples.v201109.GetRelatedPlacements');
goog.require('google.ads.adwords.examples.v201109.GetReportFields');
goog.require('google.ads.adwords.examples.v201109.GetTotalUsageUnitsPerMonth');
goog.require('google.ads.adwords.examples.v201109.GetTrafficEstimates');
goog.require('google.ads.adwords.examples.v201109.GetUnitCount');
goog.require('google.ads.adwords.examples.v201109.HandlePartialFailures');
goog.require('google.ads.adwords.examples.v201109.HandleTwoFactorAuthorizationError');
goog.require('google.ads.adwords.examples.v201109.PerformBulkMutateJob');
goog.require('google.ads.adwords.examples.v201109.PerformMutateJob');
goog.require('google.ads.adwords.examples.v201109.PromoteExperiment');
goog.require('google.ads.adwords.examples.v201109.SetAdParams');
goog.require('google.ads.adwords.examples.v201109.UpdateAd');
goog.require('google.ads.adwords.examples.v201109.UpdateAdGroup');
goog.require('google.ads.adwords.examples.v201109.UpdateAdGroupCriterion');
goog.require('google.ads.adwords.examples.v201109.UpdateCampaign');
goog.require('google.ads.adwords.examples.v201109.UpdateUserList');

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

  // v201109 examples.
  this.examples['v201109.AddAdExtensionOverride'] =
      'v201109.AddAdExtensionOverride';
  this.examples['v201109.AddAdGroup'] = 'v201109.AddAdGroup';
  this.examples['v201109.AddAdGroupCriteria'] = 'v201109.AddAdGroupCriteria';
  this.examples['v201109.AddAds'] = 'v201109.AddAds';
  this.examples['v201109.AddCampaign'] = 'v201109.AddCampaign';
  this.examples['v201109.AddCampaignAdExtension'] =
      'v201109.AddCampaignAdExtension';
  this.examples['v201109.AddCampaignTargetingCriteria'] =
      'v201109.AddCampaignTargetingCriteria';
  this.examples['v201109.AddExperiment'] = 'v201109.AddExperiment';
  this.examples['v201109.AddLogicalUserList'] = 'v201109.AddLogicalUserList';
  this.examples['v201109.AddNegativeCampaignCriterion'] =
      'v201109.AddNegativeCampaignCriterion';
  this.examples['v201109.AddSiteLinks'] = 'v201109.AddSiteLinks';
  this.examples['v201109.AddUserList'] = 'v201109.AddUserList';
  this.examples['v201109.CheckCampaigns'] = 'v201109.CheckCampaigns';
  this.examples['v201109.DeleteAd'] = 'v201109.DeleteAd';
  this.examples['v201109.DeleteAdGroup'] = 'v201109.DeleteAdGroup';
  this.examples['v201109.DeleteAdGroupCriterion'] =
      'v201109.DeleteAdGroupCriterion';
  this.examples['v201109.DeleteBulkMutateJob'] = 'v201109.DeleteBulkMutateJob';
  this.examples['v201109.DeleteCampaign'] = 'v201109.DeleteCampaign';
  this.examples['v201109.DeleteExperiment'] = 'v201109.DeleteExperiment';
  this.examples['v201109.DeleteSiteLinks'] = 'v201109.DeleteSiteLinks';
  this.examples['v201109.DeleteUserList'] = 'v201109.DeleteUserList';
  this.examples['v201109.DownloadAdHocReport'] = 'v201109.DownloadAdHocReport';
  this.examples['v201109.DownloadReport'] = 'v201109.DownloadReport';
  this.examples['v201109.GetAccountHierarchy'] = 'v201109.GetAccountHierarchy';
  this.examples['v201109.GetAllAccountChanges'] =
      'v201109.GetAllAccountChanges';
  this.examples['v201109.GetAllActiveAdGroupCriteria'] =
      'v201109.GetAllActiveAdGroupCriteria';
  this.examples['v201109.GetAllAdExtensionOverrides'] =
      'v201109.GetAllAdExtensionOverrides';
  this.examples['v201109.GetAllAdGroupCriteria'] =
      'v201109.GetAllAdGroupCriteria';
  this.examples['v201109.GetAllAdGroups'] = 'v201109.GetAllAdGroups';
  this.examples['v201109.GetAllAds'] = 'v201109.GetAllAds';
  this.examples['v201109.GetAllBulkMutateJobs'] =
      'v201109.GetAllBulkMutateJobs';
  this.examples['v201109.GetAllCampaignAdExtensions'] =
      'v201109.GetAllCampaignAdExtensions';
  this.examples['v201109.GetAllCampaigns'] = 'v201109.GetAllCampaigns';
  this.examples['v201109.GetAllCampaignTargets'] =
      'v201109.GetAllCampaignTargets';
  this.examples['v201109.GetAllCarriers'] = 'v201109.GetAllCarriers';
  this.examples['v201109.GetAllDisapprovedAds'] =
      'v201109.GetAllDisapprovedAds';
  this.examples['v201109.GetAllExperiments'] = 'v201109.GetAllExperiments';
  this.examples['v201109.GetAllImages'] = 'v201109.GetAllImages';
  this.examples['v201109.GetAllLanguages'] = 'v201109.GetAllLanguages';
  this.examples['v201109.GetAllPausedCampaigns'] =
      'v201109.GetAllPausedCampaigns';
  this.examples['v201109.GetAllReportDefinitions'] =
      'v201109.GetAllReportDefinitions';
  this.examples['v201109.GetAllUserLists'] = 'v201109.GetAllUserLists';
  this.examples['v201109.GetAllVideos'] = 'v201109.GetAllVideos';
  this.examples['v201109.GetCampaign'] = 'v201109.GetCampaign';
  this.examples['v201109.GetCampaignAlerts'] = 'v201109.GetCampaignAlerts';
  this.examples['v201109.GetClientCustomerId'] = 'v201109.GetClientCustomerId';
  this.examples['v201109.GetConversionOptimizerEligibility'] =
      'v201109.GetConversionOptimizerEligibility';
  this.examples['v201109.GetCriterionBidLandscape'] =
      'v201109.GetCriterionBidLandscape';
  this.examples['v201109.GetGeoLocationInfo'] = 'v201109.GetGeoLocationInfo';
  this.examples['v201109.GetLocationCriteria'] = 'v201109.GetLocationCriteria';
  this.examples['v201109.GetMethodCost'] = 'v201109.GetMethodCost';
  this.examples['v201109.GetAllNegativeCampaignCriteria'] =
      'v201109.GetAllNegativeCampaignCriteria';
  this.examples['v201109.GetOperationCount'] = 'v201109.GetOperationCount';
  this.examples['v201109.GetRelatedKeywords'] = 'v201109.GetRelatedKeywords';
  this.examples['v201109.GetRelatedPlacements'] =
      'v201109.GetRelatedPlacements';
  this.examples['v201109.GetReportFields'] = 'v201109.GetReportFields';
  this.examples['v201109.GetTotalUsageUnitsPerMonth'] =
      'v201109.GetTotalUsageUnitsPerMonth';
  this.examples['v201109.GetTrafficEstimates'] = 'v201109.GetTrafficEstimates';
  this.examples['v201109.GetUnitCount'] = 'v201109.GetUnitCount';
  this.examples['v201109.HandlePartialFailures'] =
      'v201109.HandlePartialFailures';
  this.examples['v201109.HandleTwoFactorAuthorizationError'] =
      'v201109.HandleTwoFactorAuthorizationError';
  this.examples['v201109.PerformBulkMutateJob'] =
      'v201109.PerformBulkMutateJob';
  this.examples['v201109.PerformMutateJob'] = 'v201109.PerformMutateJob';
  this.examples['v201109.PromoteExperiment'] = 'v201109.PromoteExperiment';
  this.examples['v201109.SetAdParams'] = 'v201109.SetAdParams';
  this.examples['v201109.UpdateAd'] = 'v201109.UpdateAd';
  this.examples['v201109.UpdateAdGroup'] = 'v201109.UpdateAdGroup';
  this.examples['v201109.UpdateAdGroupCriterion'] =
      'v201109.UpdateAdGroupCriterion';
  this.examples['v201109.UpdateCampaign'] = 'v201109.UpdateCampaign';
  this.examples['v201109.UpdateUserList'] = 'v201109.UpdateUserList';

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
  if (results) {
    results.innerHTML += 'Running...\n';
  }
  example.run(this.user, function() {
    if (results) {
      results.innerHTML += example.output;
    } else {
      alert(example.output);
    }
  });
};
