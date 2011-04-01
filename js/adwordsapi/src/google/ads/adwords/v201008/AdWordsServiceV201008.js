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
 * @fileoverview Registers all services of v201008.
 */
goog.provide('google.ads.adwords.AdWordsService.v201008');

goog.require('google.ads.adwords.ServiceFactory');
goog.require('google.ads.adwords.ServiceRegistry');

/**
 * Initializes this services module.
 */
google.ads.adwords.AdWordsService.v201008.init = function() {
  var registry = google.ads.adwords.ServiceRegistry.getInstance();
  var factoryClass = goog.getObjectByName('google.ads.adwords.ServiceFactory');

  registry.registerServiceFactory('v201008', 'cm', 'AdExtensionOverrideService',
      factoryClass);
  registry.registerServiceFactory('v201008', 'cm', 'AdGroupAdService',
      factoryClass);
  registry.registerServiceFactory('v201008', 'cm', 'AdGroupCriterionService',
      factoryClass);
  registry.registerServiceFactory('v201008', 'cm', 'AdGroupService',
      factoryClass);
  registry.registerServiceFactory('v201008', 'cm', 'AdParamService',
      factoryClass);
  registry.registerServiceFactory('v201008', 'mcm', 'AlertService',
      factoryClass);
  registry.registerServiceFactory('v201008', 'cm', 'BidLandscapeService',
      factoryClass);
  registry.registerServiceFactory('v201008', 'job', 'BulkMutateJobService',
      factoryClass);
  registry.registerServiceFactory('v201008', 'cm', 'CampaignAdExtensionService',
      factoryClass);
  registry.registerServiceFactory('v201008', 'cm', 'CampaignCriterionService',
      factoryClass);
  registry.registerServiceFactory('v201008', 'cm', 'CampaignService',
      factoryClass);
  registry.registerServiceFactory('v201008', 'cm', 'CampaignTargetService',
      factoryClass);
  registry.registerServiceFactory('v201008', 'ch', 'CustomerSyncService',
      factoryClass);
  registry.registerServiceFactory('v201008', 'cm', 'ExperimentService',
      factoryClass);
  registry.registerServiceFactory('v201008', 'cm', 'GeoLocationService',
      factoryClass);
  registry.registerServiceFactory('v201008', 'info', 'InfoService',
      factoryClass);
  registry.registerServiceFactory('v201008', 'cm', 'MediaService',
      factoryClass);
  registry.registerServiceFactory('v201008', 'cm', 'ReportDefinitionService',
      factoryClass);
  registry.registerServiceFactory('v201008', 'mcm', 'ServicedAccountService',
      factoryClass);
  registry.registerServiceFactory('v201008', 'o', 'TargetingIdeaService',
      factoryClass);
  registry.registerServiceFactory('v201008', 'o', 'TrafficEstimatorService',
      factoryClass);
  registry.registerServiceFactory('v201008', 'cm', 'UserListService',
      factoryClass);
};

google.ads.adwords.AdWordsService.v201008.init();
