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
 * @author api.davidtorres@gmail.com (David Torres)
 */

/**
 * @fileoverview Registers all services of v201109.
 */
goog.provide('google.ads.adwords.AdWordsService.v201109');

goog.require('google.ads.adwords.ServiceFactory');
goog.require('google.ads.adwords.ServiceRegistry');

/**
 * Initializes this services module.
 */
google.ads.adwords.AdWordsService.v201109.init = function() {
  var registry = google.ads.adwords.ServiceRegistry.getInstance();
  var factoryClass = goog.getObjectByName('google.ads.adwords.ServiceFactory');

  registry.registerServiceFactory('v201109', 'cm', 'AdExtensionOverrideService',
      factoryClass);
  registry.registerServiceFactory('v201109', 'cm', 'AdGroupAdService',
      factoryClass);
  registry.registerServiceFactory('v201109', 'cm', 'AdGroupCriterionService',
      factoryClass);
  registry.registerServiceFactory('v201109', 'cm', 'AdGroupService',
      factoryClass);
  registry.registerServiceFactory('v201109', 'cm', 'AdParamService',
      factoryClass);
  registry.registerServiceFactory('v201109', 'mcm', 'AlertService',
      factoryClass);
  registry.registerServiceFactory('v201109', 'job', 'BulkMutateJobService',
      factoryClass);
  registry.registerServiceFactory('v201109', 'o', 'BulkOpportunityService',
      factoryClass);
  registry.registerServiceFactory('v201109', 'cm', 'CampaignAdExtensionService',
      factoryClass);
  registry.registerServiceFactory('v201109', 'cm', 'CampaignCriterionService',
      factoryClass);
  registry.registerServiceFactory('v201109', 'cm', 'CampaignService',
      factoryClass);
  registry.registerServiceFactory('v201109', 'cm', 'CampaignTargetService',
      factoryClass);
  registry.registerServiceFactory('v201109', 'cm', 'ConstantDataService',
      factoryClass);
  registry.registerServiceFactory('v201109', 'cm', 'ConversionTrackerService',
      factoryClass);
  registry.registerServiceFactory('v201109', 'ch', 'CustomerSyncService',
      factoryClass);
  registry.registerServiceFactory('v201109', 'cm', 'DataService',
      factoryClass);
  registry.registerServiceFactory('v201109', 'cm', 'ExperimentService',
      factoryClass);
  registry.registerServiceFactory('v201109', 'cm', 'GeoLocationService',
      factoryClass);
  registry.registerServiceFactory('v201109', 'info', 'InfoService',
      factoryClass);
  registry.registerServiceFactory('v201109', 'cm', 'LocationCriterionService',
      factoryClass);
  registry.registerServiceFactory('v201109', 'cm', 'MediaService',
      factoryClass);
  registry.registerServiceFactory('v201109', 'cm', 'MutateJobService',
      factoryClass);
  registry.registerServiceFactory('v201109', 'cm', 'ReportDefinitionService',
      factoryClass);
  registry.registerServiceFactory('v201109', 'mcm', 'ServicedAccountService',
      factoryClass);
  registry.registerServiceFactory('v201109', 'o', 'TargetingIdeaService',
      factoryClass);
  registry.registerServiceFactory('v201109', 'o', 'TrafficEstimatorService',
      factoryClass);
  registry.registerServiceFactory('v201109', 'cm', 'UserListService',
      factoryClass);
};

google.ads.adwords.AdWordsService.v201109.init();
