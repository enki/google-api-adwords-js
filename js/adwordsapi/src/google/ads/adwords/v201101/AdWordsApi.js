goog.provide('google.ads.adwords.v201101');

goog.require('google.system.soap.Object');
goog.require('google.system.soap.ObjectType');
goog.require('google.ads.adwords.Service');
goog.require('google.system.soap.ServiceType');
goog.require('google.ads.adwords.RequestHeader');
goog.require('google.ads.adwords.ResponseHeader');
goog.require('google.ads.adwords.v201101.SoapNametable');

goog.provide('google.ads.adwords.v201101.CampaignCriterionService');
goog.provide('google.ads.adwords.v201101.ListReturnValue');
goog.provide('google.ads.adwords.v201101.CampaignCriterionReturnValue');
goog.provide('google.ads.adwords.v201101.CampaignCriterion');
goog.provide('google.ads.adwords.v201101.Criterion');
goog.provide('google.ads.adwords.v201101.Vertical');
goog.provide('google.ads.adwords.v201101.CriterionUserList');
goog.provide('google.ads.adwords.v201101.CriterionUserListMembershipStatus');
goog.provide('google.ads.adwords.v201101.CriterionUserInterest');
goog.provide('google.ads.adwords.v201101.Product');
goog.provide('google.ads.adwords.v201101.ProductCondition');
goog.provide('google.ads.adwords.v201101.ProductConditionOperand');
goog.provide('google.ads.adwords.v201101.Placement');
goog.provide('google.ads.adwords.v201101.Keyword');
goog.provide('google.ads.adwords.v201101.KeywordMatchType');
goog.provide('google.ads.adwords.v201101.ContentLabel');
goog.provide('google.ads.adwords.v201101.ContentLabelType');
goog.provide('google.ads.adwords.v201101.NegativeCampaignCriterion');
goog.provide('google.ads.adwords.v201101.Operation');
goog.provide('google.ads.adwords.v201101.Operator');
goog.provide('google.ads.adwords.v201101.CampaignCriterionOperation');
goog.provide('google.ads.adwords.v201101.Page');
goog.provide('google.ads.adwords.v201101.CampaignCriterionPage');
goog.provide('google.ads.adwords.v201101.Paging');
goog.provide('google.ads.adwords.v201101.OrderBy');
goog.provide('google.ads.adwords.v201101.SortOrder');
goog.provide('google.ads.adwords.v201101.DateRange');
goog.provide('google.ads.adwords.v201101.Predicate');
goog.provide('google.ads.adwords.v201101.PredicateOperator');
goog.provide('google.ads.adwords.v201101.Selector');
goog.provide('google.ads.adwords.v201101.ApiError');
goog.provide('google.ads.adwords.v201101.SizeLimitError');
goog.provide('google.ads.adwords.v201101.SizeLimitErrorReason');
goog.provide('google.ads.adwords.v201101.SelectorError');
goog.provide('google.ads.adwords.v201101.SelectorErrorReason');
goog.provide('google.ads.adwords.v201101.RequiredError');
goog.provide('google.ads.adwords.v201101.RequiredErrorReason');
goog.provide('google.ads.adwords.v201101.RequestError');
goog.provide('google.ads.adwords.v201101.RequestErrorReason');
goog.provide('google.ads.adwords.v201101.ReadOnlyError');
goog.provide('google.ads.adwords.v201101.ReadOnlyErrorReason');
goog.provide('google.ads.adwords.v201101.RateExceededError');
goog.provide('google.ads.adwords.v201101.RateExceededErrorReason');
goog.provide('google.ads.adwords.v201101.RangeError');
goog.provide('google.ads.adwords.v201101.RangeErrorReason');
goog.provide('google.ads.adwords.v201101.QuotaCheckError');
goog.provide('google.ads.adwords.v201101.QuotaCheckErrorReason');
goog.provide('google.ads.adwords.v201101.PagingError');
goog.provide('google.ads.adwords.v201101.PagingErrorReason');
goog.provide('google.ads.adwords.v201101.OperatorError');
goog.provide('google.ads.adwords.v201101.OperatorErrorReason');
goog.provide('google.ads.adwords.v201101.OperationAccessDenied');
goog.provide('google.ads.adwords.v201101.OperationAccessDeniedReason');
goog.provide('google.ads.adwords.v201101.NullError');
goog.provide('google.ads.adwords.v201101.NullErrorReason');
goog.provide('google.ads.adwords.v201101.NotWhitelistedError');
goog.provide('google.ads.adwords.v201101.NotWhitelistedErrorReason');
goog.provide('google.ads.adwords.v201101.NotEmptyError');
goog.provide('google.ads.adwords.v201101.NotEmptyErrorReason');
goog.provide('google.ads.adwords.v201101.NewEntityCreationError');
goog.provide('google.ads.adwords.v201101.NewEntityCreationErrorReason');
goog.provide('google.ads.adwords.v201101.InternalApiError');
goog.provide('google.ads.adwords.v201101.InternalApiErrorReason');
goog.provide('google.ads.adwords.v201101.EntityNotFound');
goog.provide('google.ads.adwords.v201101.EntityNotFoundReason');
goog.provide('google.ads.adwords.v201101.EntityCountLimitExceeded');
goog.provide('google.ads.adwords.v201101.EntityCountLimitExceededReason');
goog.provide('google.ads.adwords.v201101.CampaignCriterionLimitExceeded');
goog.provide('google.ads.adwords.v201101.CampaignCriterionLimitExceededCriteriaLimitType');
goog.provide('google.ads.adwords.v201101.DistinctError');
goog.provide('google.ads.adwords.v201101.DistinctErrorReason');
goog.provide('google.ads.adwords.v201101.DatabaseError');
goog.provide('google.ads.adwords.v201101.DatabaseErrorReason');
goog.provide('google.ads.adwords.v201101.CriterionError');
goog.provide('google.ads.adwords.v201101.CriterionErrorReason');
goog.provide('google.ads.adwords.v201101.ClientTermsError');
goog.provide('google.ads.adwords.v201101.ClientTermsErrorReason');
goog.provide('google.ads.adwords.v201101.CampaignCriterionError');
goog.provide('google.ads.adwords.v201101.CampaignCriterionErrorReason');
goog.provide('google.ads.adwords.v201101.AuthorizationError');
goog.provide('google.ads.adwords.v201101.AuthorizationErrorReason');
goog.provide('google.ads.adwords.v201101.AuthenticationError');
goog.provide('google.ads.adwords.v201101.AuthenticationErrorReason');
goog.provide('google.ads.adwords.v201101.ApplicationException');
goog.provide('google.ads.adwords.v201101.ApiException');
goog.provide('google.ads.adwords.v201101.CampaignService');
goog.provide('google.ads.adwords.v201101.CampaignReturnValue');
goog.provide('google.ads.adwords.v201101.Campaign');
goog.provide('google.ads.adwords.v201101.CampaignStatus');
goog.provide('google.ads.adwords.v201101.ServingStatus');
goog.provide('google.ads.adwords.v201101.Budget');
goog.provide('google.ads.adwords.v201101.BudgetBudgetPeriod');
goog.provide('google.ads.adwords.v201101.ComparableValue');
goog.provide('google.ads.adwords.v201101.NumberValue');
goog.provide('google.ads.adwords.v201101.LongValue');
goog.provide('google.ads.adwords.v201101.DoubleValue');
goog.provide('google.ads.adwords.v201101.BudgetBudgetDeliveryMethod');
goog.provide('google.ads.adwords.v201101.BiddingStrategy');
goog.provide('google.ads.adwords.v201101.BudgetOptimizer');
goog.provide('google.ads.adwords.v201101.PercentCPA');
goog.provide('google.ads.adwords.v201101.ManualCPM');
goog.provide('google.ads.adwords.v201101.ManualCPC');
goog.provide('google.ads.adwords.v201101.PositionPreference');
goog.provide('google.ads.adwords.v201101.ConversionOptimizer');
goog.provide('google.ads.adwords.v201101.PricingModel');
goog.provide('google.ads.adwords.v201101.ConversionOptimizerBidType');
goog.provide('google.ads.adwords.v201101.ConversionDeduplicationMode');
goog.provide('google.ads.adwords.v201101.ConversionOptimizerEligibility');
goog.provide('google.ads.adwords.v201101.ConversionOptimizerEligibilityRejectionReason');
goog.provide('google.ads.adwords.v201101.Stats');
goog.provide('google.ads.adwords.v201101.StatsNetwork');
goog.provide('google.ads.adwords.v201101.AdServingOptimizationStatus');
goog.provide('google.ads.adwords.v201101.FrequencyCap');
goog.provide('google.ads.adwords.v201101.TimeUnit');
goog.provide('google.ads.adwords.v201101.Level');
goog.provide('google.ads.adwords.v201101.Setting');
goog.provide('google.ads.adwords.v201101.RealTimeBiddingSetting');
goog.provide('google.ads.adwords.v201101.GeoTargetTypeSetting');
goog.provide('google.ads.adwords.v201101.GeoTargetTypeSettingPositiveGeoTargetType');
goog.provide('google.ads.adwords.v201101.GeoTargetTypeSettingNegativeGeoTargetType');
goog.provide('google.ads.adwords.v201101.NetworkSetting');
goog.provide('google.ads.adwords.v201101.Bid');
goog.provide('google.ads.adwords.v201101.AdGroupBids');
goog.provide('google.ads.adwords.v201101.ManualCPMAdGroupBids');
goog.provide('google.ads.adwords.v201101.ManualCPCAdGroupBids');
goog.provide('google.ads.adwords.v201101.ConversionOptimizerAdGroupBids');
goog.provide('google.ads.adwords.v201101.BudgetOptimizerAdGroupBids');
goog.provide('google.ads.adwords.v201101.PercentCPAAdGroupBids');
goog.provide('google.ads.adwords.v201101.BiddingTransition');
goog.provide('google.ads.adwords.v201101.ConversionOptimizerBiddingTransition');
goog.provide('google.ads.adwords.v201101.CampaignOperation');
goog.provide('google.ads.adwords.v201101.CampaignPage');
goog.provide('google.ads.adwords.v201101.TargetError');
goog.provide('google.ads.adwords.v201101.TargetErrorReason');
goog.provide('google.ads.adwords.v201101.StringLengthError');
goog.provide('google.ads.adwords.v201101.StringLengthErrorReason');
goog.provide('google.ads.adwords.v201101.StatsQueryError');
goog.provide('google.ads.adwords.v201101.StatsQueryErrorReason');
goog.provide('google.ads.adwords.v201101.SettingError');
goog.provide('google.ads.adwords.v201101.SettingErrorReason');
goog.provide('google.ads.adwords.v201101.RejectedError');
goog.provide('google.ads.adwords.v201101.RejectedErrorReason');
goog.provide('google.ads.adwords.v201101.QuotaError');
goog.provide('google.ads.adwords.v201101.QuotaErrorReason');
goog.provide('google.ads.adwords.v201101.DateError');
goog.provide('google.ads.adwords.v201101.DateErrorReason');
goog.provide('google.ads.adwords.v201101.CampaignError');
goog.provide('google.ads.adwords.v201101.CampaignErrorReason');
goog.provide('google.ads.adwords.v201101.BudgetError');
goog.provide('google.ads.adwords.v201101.BudgetErrorReason');
goog.provide('google.ads.adwords.v201101.BiddingTransitionError');
goog.provide('google.ads.adwords.v201101.BiddingTransitionErrorReason');
goog.provide('google.ads.adwords.v201101.BiddingError');
goog.provide('google.ads.adwords.v201101.BiddingErrorReason');
goog.provide('google.ads.adwords.v201101.CampaignTargetService');
goog.provide('google.ads.adwords.v201101.CampaignTargetReturnValue');
goog.provide('google.ads.adwords.v201101.TargetList');
goog.provide('google.ads.adwords.v201101.PlatformTargetList');
goog.provide('google.ads.adwords.v201101.PlatformType');
goog.provide('google.ads.adwords.v201101.Target');
goog.provide('google.ads.adwords.v201101.GeoTarget');
goog.provide('google.ads.adwords.v201101.ProximityTarget');
goog.provide('google.ads.adwords.v201101.GeoPoint');
goog.provide('google.ads.adwords.v201101.ProximityTargetDistanceUnits');
goog.provide('google.ads.adwords.v201101.Address');
goog.provide('google.ads.adwords.v201101.ProvinceTarget');
goog.provide('google.ads.adwords.v201101.PolygonTarget');
goog.provide('google.ads.adwords.v201101.MetroTarget');
goog.provide('google.ads.adwords.v201101.CountryTarget');
goog.provide('google.ads.adwords.v201101.CityTarget');
goog.provide('google.ads.adwords.v201101.DemographicTarget');
goog.provide('google.ads.adwords.v201101.GenderTarget');
goog.provide('google.ads.adwords.v201101.GenderTargetGender');
goog.provide('google.ads.adwords.v201101.AgeTarget');
goog.provide('google.ads.adwords.v201101.AgeTargetAge');
goog.provide('google.ads.adwords.v201101.MobileTarget');
goog.provide('google.ads.adwords.v201101.MobilePlatformTarget');
goog.provide('google.ads.adwords.v201101.MobileCarrierTarget');
goog.provide('google.ads.adwords.v201101.LanguageTarget');
goog.provide('google.ads.adwords.v201101.AdScheduleTarget');
goog.provide('google.ads.adwords.v201101.DayOfWeek');
goog.provide('google.ads.adwords.v201101.MinuteOfHour');
goog.provide('google.ads.adwords.v201101.NetworkTargetList');
goog.provide('google.ads.adwords.v201101.MobileTargetList');
goog.provide('google.ads.adwords.v201101.LanguageTargetList');
goog.provide('google.ads.adwords.v201101.GeoTargetList');
goog.provide('google.ads.adwords.v201101.DemographicTargetList');
goog.provide('google.ads.adwords.v201101.AdScheduleTargetList');
goog.provide('google.ads.adwords.v201101.CampaignTargetOperation');
goog.provide('google.ads.adwords.v201101.CampaignTargetPage');
goog.provide('google.ads.adwords.v201101.CampaignTargetSelector');
goog.provide('google.ads.adwords.v201101.RegionCodeError');
goog.provide('google.ads.adwords.v201101.RegionCodeErrorReason');
goog.provide('google.ads.adwords.v201101.ConversionTrackerService');
goog.provide('google.ads.adwords.v201101.ConversionTrackerReturnValue');
goog.provide('google.ads.adwords.v201101.ConversionTracker');
goog.provide('google.ads.adwords.v201101.ConversionTrackerStatus');
goog.provide('google.ads.adwords.v201101.ConversionTrackerCategory');
goog.provide('google.ads.adwords.v201101.ConversionTrackerStats');
goog.provide('google.ads.adwords.v201101.AdWordsConversionTracker');
goog.provide('google.ads.adwords.v201101.AdWordsConversionTrackerMarkupLanguage');
goog.provide('google.ads.adwords.v201101.AdWordsConversionTrackerHttpProtocol');
goog.provide('google.ads.adwords.v201101.AdWordsConversionTrackerTextFormat');
goog.provide('google.ads.adwords.v201101.ConversionTrackerOperation');
goog.provide('google.ads.adwords.v201101.NoStatsPage');
goog.provide('google.ads.adwords.v201101.ConversionTrackerPage');
goog.provide('google.ads.adwords.v201101.ConversionTrackingError');
goog.provide('google.ads.adwords.v201101.ConversionTrackingErrorReason');
goog.provide('google.ads.adwords.v201101.CustomerSyncService');
goog.provide('google.ads.adwords.v201101.AdGroupChangeData');
goog.provide('google.ads.adwords.v201101.ChangeStatus');
goog.provide('google.ads.adwords.v201101.CampaignChangeData');
goog.provide('google.ads.adwords.v201101.CustomerChangeData');
goog.provide('google.ads.adwords.v201101.DateTimeRange');
goog.provide('google.ads.adwords.v201101.CustomerSyncSelector');
goog.provide('google.ads.adwords.v201101.CustomerSyncError');
goog.provide('google.ads.adwords.v201101.CustomerSyncErrorReason');
goog.provide('google.ads.adwords.v201101.DataService');
goog.provide('google.ads.adwords.v201101.BidLandscapeLandscapePoint');
goog.provide('google.ads.adwords.v201101.DataEntry');
goog.provide('google.ads.adwords.v201101.BidLandscape');
goog.provide('google.ads.adwords.v201101.CriterionBidLandscape');
goog.provide('google.ads.adwords.v201101.AdGroupBidLandscape');
goog.provide('google.ads.adwords.v201101.AdGroupBidLandscapeType');
goog.provide('google.ads.adwords.v201101.CriterionBidLandscapePage');
goog.provide('google.ads.adwords.v201101.AdGroupBidLandscapePage');
goog.provide('google.ads.adwords.v201101.DataError');
goog.provide('google.ads.adwords.v201101.DataErrorReason');
goog.provide('google.ads.adwords.v201101.ExperimentService');
goog.provide('google.ads.adwords.v201101.ExperimentReturnValue');
goog.provide('google.ads.adwords.v201101.Experiment');
goog.provide('google.ads.adwords.v201101.ExperimentStatus');
goog.provide('google.ads.adwords.v201101.ExperimentServingStatus');
goog.provide('google.ads.adwords.v201101.ExperimentSummaryStats');
goog.provide('google.ads.adwords.v201101.ExperimentOperation');
goog.provide('google.ads.adwords.v201101.ExperimentPage');
goog.provide('google.ads.adwords.v201101.ExperimentServiceError');
goog.provide('google.ads.adwords.v201101.ExperimentServiceErrorReason');
goog.provide('google.ads.adwords.v201101.GeoLocationService');
goog.provide('google.ads.adwords.v201101.GeoLocation');
goog.provide('google.ads.adwords.v201101.InvalidGeoLocation');
goog.provide('google.ads.adwords.v201101.GeoLocationSelector');
goog.provide('google.ads.adwords.v201101.GeoLocationError');
goog.provide('google.ads.adwords.v201101.GeoLocationErrorReason');
goog.provide('google.ads.adwords.v201101.InfoService');
goog.provide('google.ads.adwords.v201101.ApiUsageRecord');
goog.provide('google.ads.adwords.v201101.ApiUsageInfo');
goog.provide('google.ads.adwords.v201101.InfoSelector');
goog.provide('google.ads.adwords.v201101.ApiUsageType');
goog.provide('google.ads.adwords.v201101.ApiUsageError');
goog.provide('google.ads.adwords.v201101.ApiUsageErrorReason');
goog.provide('google.ads.adwords.v201101.MediaService');
goog.provide('google.ads.adwords.v201101.Media_Size_StringMapEntry');
goog.provide('google.ads.adwords.v201101.MediaSize');
goog.provide('google.ads.adwords.v201101.Dimensions');
goog.provide('google.ads.adwords.v201101.Media_Size_DimensionsMapEntry');
goog.provide('google.ads.adwords.v201101.Media');
goog.provide('google.ads.adwords.v201101.MediaMediaType');
goog.provide('google.ads.adwords.v201101.MediaMimeType');
goog.provide('google.ads.adwords.v201101.Video');
goog.provide('google.ads.adwords.v201101.Image');
goog.provide('google.ads.adwords.v201101.Audio');
goog.provide('google.ads.adwords.v201101.MediaPage');
goog.provide('google.ads.adwords.v201101.VideoError');
goog.provide('google.ads.adwords.v201101.VideoErrorReason');
goog.provide('google.ads.adwords.v201101.MediaError');
goog.provide('google.ads.adwords.v201101.MediaErrorReason');
goog.provide('google.ads.adwords.v201101.ImageError');
goog.provide('google.ads.adwords.v201101.ImageErrorReason');
goog.provide('google.ads.adwords.v201101.AudioError');
goog.provide('google.ads.adwords.v201101.AudioErrorReason');
goog.provide('google.ads.adwords.v201101.AdExtensionOverrideService');
goog.provide('google.ads.adwords.v201101.AdExtensionOverrideReturnValue');
goog.provide('google.ads.adwords.v201101.AdExtensionOverride');
goog.provide('google.ads.adwords.v201101.AdExtension');
goog.provide('google.ads.adwords.v201101.LocationSyncExtension');
goog.provide('google.ads.adwords.v201101.ProductExtension');
goog.provide('google.ads.adwords.v201101.ProductConditionAndGroup');
goog.provide('google.ads.adwords.v201101.SitelinksExtension');
goog.provide('google.ads.adwords.v201101.Sitelink');
goog.provide('google.ads.adwords.v201101.MobileExtension');
goog.provide('google.ads.adwords.v201101.LocationExtension');
goog.provide('google.ads.adwords.v201101.LocationExtensionSource');
goog.provide('google.ads.adwords.v201101.OverrideInfo');
goog.provide('google.ads.adwords.v201101.LocationOverrideInfo');
goog.provide('google.ads.adwords.v201101.LocationOverrideInfoRadiusUnits');
goog.provide('google.ads.adwords.v201101.AdExtensionOverrideStatus');
goog.provide('google.ads.adwords.v201101.AdExtensionOverrideApprovalStatus');
goog.provide('google.ads.adwords.v201101.AdExtensionOverrideStats');
goog.provide('google.ads.adwords.v201101.AdExtensionOverrideOperation');
goog.provide('google.ads.adwords.v201101.AdExtensionOverridePage');
goog.provide('google.ads.adwords.v201101.AdExtensionOverrideSelector');
goog.provide('google.ads.adwords.v201101.AdExtensionOverrideError');
goog.provide('google.ads.adwords.v201101.AdExtensionOverrideErrorReason');
goog.provide('google.ads.adwords.v201101.ReportDefinitionService');
goog.provide('google.ads.adwords.v201101.ReportDefinitionOperation');
goog.provide('google.ads.adwords.v201101.ReportDefinition');
goog.provide('google.ads.adwords.v201101.ReportDefinitionReportType');
goog.provide('google.ads.adwords.v201101.ReportDefinitionDateRangeType');
goog.provide('google.ads.adwords.v201101.DownloadFormat');
goog.provide('google.ads.adwords.v201101.ClientSelector');
goog.provide('google.ads.adwords.v201101.EnumValuePair');
goog.provide('google.ads.adwords.v201101.ReportDefinitionField');
goog.provide('google.ads.adwords.v201101.ReportDefinitionPage');
goog.provide('google.ads.adwords.v201101.ReportDefinitionSelector');
goog.provide('google.ads.adwords.v201101.ReportDefinitionError');
goog.provide('google.ads.adwords.v201101.ReportDefinitionErrorReason');
goog.provide('google.ads.adwords.v201101.CollectionSizeError');
goog.provide('google.ads.adwords.v201101.CollectionSizeErrorReason');
goog.provide('google.ads.adwords.v201101.ServicedAccountService');
goog.provide('google.ads.adwords.v201101.CustomerId');
goog.provide('google.ads.adwords.v201101.Link');
goog.provide('google.ads.adwords.v201101.ServiceType');
goog.provide('google.ads.adwords.v201101.LinkType');
goog.provide('google.ads.adwords.v201101.Account');
goog.provide('google.ads.adwords.v201101.ServicedAccountGraph');
goog.provide('google.ads.adwords.v201101.ServicedAccountSelector');
goog.provide('google.ads.adwords.v201101.ServicedAccountError');
goog.provide('google.ads.adwords.v201101.ServicedAccountErrorReason');
goog.provide('google.ads.adwords.v201101.TargetingIdeaService');
goog.provide('google.ads.adwords.v201101.WebpageDescriptor');
goog.provide('google.ads.adwords.v201101.MonthlySearchVolume');
goog.provide('google.ads.adwords.v201101.Range');
goog.provide('google.ads.adwords.v201101.InStreamAdInfo');
goog.provide('google.ads.adwords.v201101.AdFormatSpec');
goog.provide('google.ads.adwords.v201101.SiteConstantsAdFormat');
goog.provide('google.ads.adwords.v201101.Attribute');
goog.provide('google.ads.adwords.v201101.WebpageDescriptorAttribute');
goog.provide('google.ads.adwords.v201101.StringAttribute');
goog.provide('google.ads.adwords.v201101.PlacementTypeAttribute');
goog.provide('google.ads.adwords.v201101.SiteConstantsPlacementType');
goog.provide('google.ads.adwords.v201101.PlacementAttribute');
goog.provide('google.ads.adwords.v201101.OpportunityIdeaTypeAttribute');
goog.provide('google.ads.adwords.v201101.OpportunityIdeaType');
goog.provide('google.ads.adwords.v201101.MonthlySearchVolumeAttribute');
goog.provide('google.ads.adwords.v201101.MoneyAttribute');
goog.provide('google.ads.adwords.v201101.LongRangeAttribute');
goog.provide('google.ads.adwords.v201101.LongAttribute');
goog.provide('google.ads.adwords.v201101.KeywordAttribute');
goog.provide('google.ads.adwords.v201101.IntegerSetAttribute');
goog.provide('google.ads.adwords.v201101.IntegerAttribute');
goog.provide('google.ads.adwords.v201101.InStreamAdInfoAttribute');
goog.provide('google.ads.adwords.v201101.IdeaTypeAttribute');
goog.provide('google.ads.adwords.v201101.IdeaType');
goog.provide('google.ads.adwords.v201101.DoubleAttribute');
goog.provide('google.ads.adwords.v201101.CriterionAttribute');
goog.provide('google.ads.adwords.v201101.BooleanAttribute');
goog.provide('google.ads.adwords.v201101.BidLandscapeAttribute');
goog.provide('google.ads.adwords.v201101.AdFormatSpecListAttribute');
goog.provide('google.ads.adwords.v201101.Type_AttributeMapEntry');
goog.provide('google.ads.adwords.v201101.AttributeType');
goog.provide('google.ads.adwords.v201101.TargetingIdea');
goog.provide('google.ads.adwords.v201101.TargetingIdeaPage');
goog.provide('google.ads.adwords.v201101.LongComparisonOperation');
goog.provide('google.ads.adwords.v201101.DoubleComparisonOperation');
goog.provide('google.ads.adwords.v201101.SearchParameter');
goog.provide('google.ads.adwords.v201101.SeedAdGroupIdSearchParameter');
goog.provide('google.ads.adwords.v201101.SearchShareSearchParameter');
goog.provide('google.ads.adwords.v201101.RelatedToUrlSearchParameter');
goog.provide('google.ads.adwords.v201101.RelatedToKeywordSearchParameter');
goog.provide('google.ads.adwords.v201101.PlacementTypeSearchParameter');
goog.provide('google.ads.adwords.v201101.LanguageTargetSearchParameter');
goog.provide('google.ads.adwords.v201101.KeywordMatchTypeSearchParameter');
goog.provide('google.ads.adwords.v201101.KeywordCategoryIdSearchParameter');
goog.provide('google.ads.adwords.v201101.IncludeAdultContentSearchParameter');
goog.provide('google.ads.adwords.v201101.IdeaTextMatchesSearchParameter');
goog.provide('google.ads.adwords.v201101.MatchAction');
goog.provide('google.ads.adwords.v201101.GlobalMonthlySearchesSearchParameter');
goog.provide('google.ads.adwords.v201101.ExcludedKeywordSearchParameter');
goog.provide('google.ads.adwords.v201101.DeviceTypeSearchParameter');
goog.provide('google.ads.adwords.v201101.DeviceType');
goog.provide('google.ads.adwords.v201101.CountryTargetSearchParameter');
goog.provide('google.ads.adwords.v201101.CompetitionSearchParameter');
goog.provide('google.ads.adwords.v201101.CompetitionSearchParameterLevel');
goog.provide('google.ads.adwords.v201101.AverageTargetedMonthlySearchesSearchParameter');
goog.provide('google.ads.adwords.v201101.AdTypeSearchParameter');
goog.provide('google.ads.adwords.v201101.SiteConstantsAdType');
goog.provide('google.ads.adwords.v201101.AdShareSearchParameter');
goog.provide('google.ads.adwords.v201101.TargetingIdeaSelector');
goog.provide('google.ads.adwords.v201101.RequestType');
goog.provide('google.ads.adwords.v201101.PolicyViolationErrorPart');
goog.provide('google.ads.adwords.v201101.PolicyViolationKey');
goog.provide('google.ads.adwords.v201101.PolicyViolationError');
goog.provide('google.ads.adwords.v201101.CriterionPolicyError');
goog.provide('google.ads.adwords.v201101.AdGroupCriterionLimitExceeded');
goog.provide('google.ads.adwords.v201101.AdGroupCriterionLimitExceededCriteriaLimitType');
goog.provide('google.ads.adwords.v201101.AdGroupCriterionError');
goog.provide('google.ads.adwords.v201101.AdGroupCriterionErrorReason');
goog.provide('google.ads.adwords.v201101.TargetingIdeaError');
goog.provide('google.ads.adwords.v201101.TargetingIdeaErrorReason');
goog.provide('google.ads.adwords.v201101.MatchesRegexError');
goog.provide('google.ads.adwords.v201101.MatchesRegexErrorReason');
goog.provide('google.ads.adwords.v201101.CurrencyCodeError');
goog.provide('google.ads.adwords.v201101.CurrencyCodeErrorReason');
goog.provide('google.ads.adwords.v201101.TrafficEstimatorService');
goog.provide('google.ads.adwords.v201101.StatsEstimate');
goog.provide('google.ads.adwords.v201101.Estimate');
goog.provide('google.ads.adwords.v201101.CampaignEstimate');
goog.provide('google.ads.adwords.v201101.AdGroupEstimate');
goog.provide('google.ads.adwords.v201101.KeywordEstimate');
goog.provide('google.ads.adwords.v201101.TrafficEstimatorResult');
goog.provide('google.ads.adwords.v201101.EstimateRequest');
goog.provide('google.ads.adwords.v201101.CampaignEstimateRequest');
goog.provide('google.ads.adwords.v201101.AdGroupEstimateRequest');
goog.provide('google.ads.adwords.v201101.KeywordEstimateRequest');
goog.provide('google.ads.adwords.v201101.TrafficEstimatorSelector');
goog.provide('google.ads.adwords.v201101.IdError');
goog.provide('google.ads.adwords.v201101.IdErrorReason');
goog.provide('google.ads.adwords.v201101.EntityAccessDenied');
goog.provide('google.ads.adwords.v201101.EntityAccessDeniedReason');
goog.provide('google.ads.adwords.v201101.TrafficEstimatorError');
goog.provide('google.ads.adwords.v201101.TrafficEstimatorErrorReason');
goog.provide('google.ads.adwords.v201101.UserListService');
goog.provide('google.ads.adwords.v201101.UserListReturnValue');
goog.provide('google.ads.adwords.v201101.UserList');
goog.provide('google.ads.adwords.v201101.UserListMembershipStatus');
goog.provide('google.ads.adwords.v201101.AccessReason');
goog.provide('google.ads.adwords.v201101.AccountUserListStatus');
goog.provide('google.ads.adwords.v201101.SizeRange');
goog.provide('google.ads.adwords.v201101.UserListType');
goog.provide('google.ads.adwords.v201101.RemarketingUserList');
goog.provide('google.ads.adwords.v201101.UserListConversionType');
goog.provide('google.ads.adwords.v201101.UserListConversionTypeCategory');
goog.provide('google.ads.adwords.v201101.LogicalUserList');
goog.provide('google.ads.adwords.v201101.UserListLogicalRule');
goog.provide('google.ads.adwords.v201101.UserListLogicalRuleOperator');
goog.provide('google.ads.adwords.v201101.LogicalUserListOperand');
goog.provide('google.ads.adwords.v201101.UserInterest');
goog.provide('google.ads.adwords.v201101.ExternalRemarketingUserList');
goog.provide('google.ads.adwords.v201101.UserListOperation');
goog.provide('google.ads.adwords.v201101.UserListPage');
goog.provide('google.ads.adwords.v201101.UserListError');
goog.provide('google.ads.adwords.v201101.UserListErrorReason');
goog.provide('google.ads.adwords.v201101.AdGroupAdService');
goog.provide('google.ads.adwords.v201101.AdGroupAdReturnValue');
goog.provide('google.ads.adwords.v201101.AdGroupAd');
goog.provide('google.ads.adwords.v201101.Ad');
goog.provide('google.ads.adwords.v201101.AdApprovalStatus');
goog.provide('google.ads.adwords.v201101.TemplateAd');
goog.provide('google.ads.adwords.v201101.AdUnionId');
goog.provide('google.ads.adwords.v201101.TempAdUnionId');
goog.provide('google.ads.adwords.v201101.TemplateElement');
goog.provide('google.ads.adwords.v201101.TemplateElementField');
goog.provide('google.ads.adwords.v201101.TemplateElementFieldType');
goog.provide('google.ads.adwords.v201101.ImageAd');
goog.provide('google.ads.adwords.v201101.MobileImageAd');
goog.provide('google.ads.adwords.v201101.MarkupLanguageType');
goog.provide('google.ads.adwords.v201101.RichMediaAd');
goog.provide('google.ads.adwords.v201101.ThirdPartyRedirectAd');
goog.provide('google.ads.adwords.v201101.VideoType');
goog.provide('google.ads.adwords.v201101.TextAd');
goog.provide('google.ads.adwords.v201101.ProductAd');
goog.provide('google.ads.adwords.v201101.MobileAd');
goog.provide('google.ads.adwords.v201101.DeprecatedAd');
goog.provide('google.ads.adwords.v201101.DeprecatedAdType');
goog.provide('google.ads.adwords.v201101.AdGroupAdExperimentData');
goog.provide('google.ads.adwords.v201101.ExperimentDeltaStatus');
goog.provide('google.ads.adwords.v201101.ExperimentDataStatus');
goog.provide('google.ads.adwords.v201101.AdGroupAdStatus');
goog.provide('google.ads.adwords.v201101.AdStats');
goog.provide('google.ads.adwords.v201101.ExemptionRequest');
goog.provide('google.ads.adwords.v201101.AdGroupAdOperation');
goog.provide('google.ads.adwords.v201101.AdGroupAdPage');
goog.provide('google.ads.adwords.v201101.AdGroupAdCountLimitExceeded');
goog.provide('google.ads.adwords.v201101.AdGroupAdError');
goog.provide('google.ads.adwords.v201101.AdGroupAdErrorReason');
goog.provide('google.ads.adwords.v201101.AdError');
goog.provide('google.ads.adwords.v201101.AdErrorReason');
goog.provide('google.ads.adwords.v201101.AdGroupCriterionService');
goog.provide('google.ads.adwords.v201101.AdGroupCriterionReturnValue');
goog.provide('google.ads.adwords.v201101.AdGroupCriterion');
goog.provide('google.ads.adwords.v201101.CriterionUse');
goog.provide('google.ads.adwords.v201101.NegativeAdGroupCriterion');
goog.provide('google.ads.adwords.v201101.BiddableAdGroupCriterion');
goog.provide('google.ads.adwords.v201101.UserStatus');
goog.provide('google.ads.adwords.v201101.SystemServingStatus');
goog.provide('google.ads.adwords.v201101.ApprovalStatus');
goog.provide('google.ads.adwords.v201101.AdGroupCriterionBids');
goog.provide('google.ads.adwords.v201101.PercentCPAAdGroupCriterionBids');
goog.provide('google.ads.adwords.v201101.BidSource');
goog.provide('google.ads.adwords.v201101.ManualCPMAdGroupCriterionBids');
goog.provide('google.ads.adwords.v201101.ManualCPCAdGroupCriterionBids');
goog.provide('google.ads.adwords.v201101.PositionPreferenceAdGroupCriterionBids');
goog.provide('google.ads.adwords.v201101.ConversionOptimizerAdGroupCriterionBids');
goog.provide('google.ads.adwords.v201101.BudgetOptimizerAdGroupCriterionBids');
goog.provide('google.ads.adwords.v201101.BiddableAdGroupCriterionExperimentData');
goog.provide('google.ads.adwords.v201101.AdGroupCriterionExperimentBidMultiplier');
goog.provide('google.ads.adwords.v201101.ManualCPCAdGroupCriterionExperimentBidMultiplier');
goog.provide('google.ads.adwords.v201101.BidMultiplier');
goog.provide('google.ads.adwords.v201101.MultiplierSource');
goog.provide('google.ads.adwords.v201101.QualityInfo');
goog.provide('google.ads.adwords.v201101.AdGroupCriterionOperation');
goog.provide('google.ads.adwords.v201101.AdGroupCriterionPage');
goog.provide('google.ads.adwords.v201101.AdGroupService');
goog.provide('google.ads.adwords.v201101.AdGroupReturnValue');
goog.provide('google.ads.adwords.v201101.AdGroup');
goog.provide('google.ads.adwords.v201101.AdGroupStatus');
goog.provide('google.ads.adwords.v201101.AdGroupExperimentData');
goog.provide('google.ads.adwords.v201101.AdGroupExperimentBidMultipliers');
goog.provide('google.ads.adwords.v201101.ManualCPMAdGroupExperimentBidMultipliers');
goog.provide('google.ads.adwords.v201101.ManualCPCAdGroupExperimentBidMultipliers');
goog.provide('google.ads.adwords.v201101.AdGroupOperation');
goog.provide('google.ads.adwords.v201101.AdGroupPage');
goog.provide('google.ads.adwords.v201101.AdGroupServiceError');
goog.provide('google.ads.adwords.v201101.AdGroupServiceErrorReason');
goog.provide('google.ads.adwords.v201101.AdParamService');
goog.provide('google.ads.adwords.v201101.AdParamOperation');
goog.provide('google.ads.adwords.v201101.AdParam');
goog.provide('google.ads.adwords.v201101.AdParamPage');
goog.provide('google.ads.adwords.v201101.AdParamSelector');
goog.provide('google.ads.adwords.v201101.AdParamPolicyError');
goog.provide('google.ads.adwords.v201101.AdParamError');
goog.provide('google.ads.adwords.v201101.AdParamErrorReason');
goog.provide('google.ads.adwords.v201101.AlertService');
goog.provide('google.ads.adwords.v201101.Detail');
goog.provide('google.ads.adwords.v201101.Alert');
goog.provide('google.ads.adwords.v201101.AlertSeverity');
goog.provide('google.ads.adwords.v201101.AlertType');
goog.provide('google.ads.adwords.v201101.AlertPage');
goog.provide('google.ads.adwords.v201101.AlertQuery');
goog.provide('google.ads.adwords.v201101.ClientSpec');
goog.provide('google.ads.adwords.v201101.FilterSpec');
goog.provide('google.ads.adwords.v201101.TriggerTimeSpec');
goog.provide('google.ads.adwords.v201101.AlertSelector');
goog.provide('google.ads.adwords.v201101.AlertError');
goog.provide('google.ads.adwords.v201101.AlertErrorReason');
goog.provide('google.ads.adwords.v201101.BulkMutateJobService');
goog.provide('google.ads.adwords.v201101.Operand');
goog.provide('google.ads.adwords.v201101.CampaignAdExtensionStats');
goog.provide('google.ads.adwords.v201101.CampaignAdExtension');
goog.provide('google.ads.adwords.v201101.CampaignAdExtensionStatus');
goog.provide('google.ads.adwords.v201101.CampaignAdExtensionApprovalStatus');
goog.provide('google.ads.adwords.v201101.Job');
goog.provide('google.ads.adwords.v201101.JobContext');
goog.provide('google.ads.adwords.v201101.ApiErrorReason');
goog.provide('google.ads.adwords.v201101.AdExtensionErrorReason');
goog.provide('google.ads.adwords.v201101.BulkMutateJobErrorReason');
goog.provide('google.ads.adwords.v201101.CampaignAdExtensionErrorReason');
goog.provide('google.ads.adwords.v201101.JobErrorReason');
goog.provide('google.ads.adwords.v201101.PolicyViolationErrorReason');
goog.provide('google.ads.adwords.v201101.QuotaExceededErrorReason');
goog.provide('google.ads.adwords.v201101.JobStats');
goog.provide('google.ads.adwords.v201101.BulkMutateJobStats');
goog.provide('google.ads.adwords.v201101.BillingSummary');
goog.provide('google.ads.adwords.v201101.BulkMutateJob');
goog.provide('google.ads.adwords.v201101.BulkMutateJobPolicy');
goog.provide('google.ads.adwords.v201101.BulkMutateRequest');
goog.provide('google.ads.adwords.v201101.OperationStream');
goog.provide('google.ads.adwords.v201101.EntityId');
goog.provide('google.ads.adwords.v201101.EntityIdType');
goog.provide('google.ads.adwords.v201101.JobOperation');
goog.provide('google.ads.adwords.v201101.CampaignAdExtensionOperation');
goog.provide('google.ads.adwords.v201101.BasicJobStatus');
goog.provide('google.ads.adwords.v201101.JobEvent');
goog.provide('google.ads.adwords.v201101.BulkMutateResult');
goog.provide('google.ads.adwords.v201101.OperationStreamResult');
goog.provide('google.ads.adwords.v201101.OperationResult');
goog.provide('google.ads.adwords.v201101.UnprocessedResult');
goog.provide('google.ads.adwords.v201101.ReturnValueResult');
goog.provide('google.ads.adwords.v201101.LostResult');
goog.provide('google.ads.adwords.v201101.FailureResult');
goog.provide('google.ads.adwords.v201101.JobError');
goog.provide('google.ads.adwords.v201101.CampaignAdExtensionError');
goog.provide('google.ads.adwords.v201101.BulkMutateJobError');
goog.provide('google.ads.adwords.v201101.AdExtensionError');
goog.provide('google.ads.adwords.v201101.BatchFailureResult');
goog.provide('google.ads.adwords.v201101.JobSelector');
goog.provide('google.ads.adwords.v201101.BulkMutateJobSelector');
goog.provide('google.ads.adwords.v201101.BulkOpportunityService');
goog.provide('google.ads.adwords.v201101.OpportunityAttribute_AttributeMapEntry');
goog.provide('google.ads.adwords.v201101.OpportunityAttributeType');
goog.provide('google.ads.adwords.v201101.OpportunityIdea');
goog.provide('google.ads.adwords.v201101.Opportunity');
goog.provide('google.ads.adwords.v201101.BulkOpportunityPage');
goog.provide('google.ads.adwords.v201101.BulkOpportunitySelector');
goog.provide('google.ads.adwords.v201101.OpportunityError');
goog.provide('google.ads.adwords.v201101.OpportunityErrorReason');
goog.provide('google.ads.adwords.v201101.BulkOpportunityServiceError');
goog.provide('google.ads.adwords.v201101.BulkOpportunityServiceErrorReason');
goog.provide('google.ads.adwords.v201101.CampaignAdExtensionService');
goog.provide('google.ads.adwords.v201101.CampaignAdExtensionReturnValue');
goog.provide('google.ads.adwords.v201101.CampaignAdExtensionPage');
goog.provide('google.ads.adwords.v201101.Money');
goog.provide('google.ads.adwords.v201101.CampaignStats');
goog.provide('google.ads.adwords.v201101.PlatformTarget');
goog.provide('google.ads.adwords.v201101.BulkMutateJobEvent');
goog.provide('google.ads.adwords.v201101.RequestHeader');
goog.provide('google.ads.adwords.v201101.ResponseHeader');

(
  function(namespace) {
    $nst = namespace;
    $nso = goog.getObjectByName($nst);
    $sot = 'google.system.soap.Object';
    $soo = goog.getObjectByName($sot);
    $sst = 'google.ads.adwords.Service';
    $sso = goog.getObjectByName($sst);
    $dtf = function (xmlNamespace, className, isEnum, baseClassName) {
      var type = google.system.soap.ObjectType.defineType(xmlNamespace, className,
          isEnum, baseClassName);
      return {
        'type': type,
        'prop': goog.bind(type.addProperty, type)
      };
    };
    $dsf = function (xmlNamespace, className) {
      var serviceType = google.system.soap.ServiceType.defineService(xmlNamespace,
          className, $sst);
      return {
        'type': type,
        'prop': goog.bind(serviceType.addProperty, serviceType),
        'meth': goog.bind(serviceType.addMethod, serviceType)
      };
    };
$nso.CampaignCriterionService = function() {
  $sso.call(this);
  this.nametable_ = new google.ads.adwords.v201101.SoapNametable();
};

$ref = $dsf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.CampaignCriterionService');
$ref.prop('requestHeader', $nst + '.RequestHeader', 'RequestHeader', false, false);
$ref.prop('responseHeader', $nst + '.ResponseHeader', 'ResponseHeader', false, false);
$ref.meth(
  'get',
  'https://adwords.google.com/api/adwords/cm/v201101',
  'https://adwords.google.com/api/adwords/cm/v201101',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.CampaignCriterionPage', isArray: false, isSystem: false},
  [{propertyName: 'responseHeader', direction: 'out'}, {propertyName: 'requestHeader', direction: 'in'}],
  [{className: $nst + '.Selector', isArray: false, isSystem: false, name: 'serviceSelector', xmlElementName: 'serviceSelector'}]
);
$ref.meth(
  'mutate',
  'https://adwords.google.com/api/adwords/cm/v201101',
  'https://adwords.google.com/api/adwords/cm/v201101',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.CampaignCriterionReturnValue', isArray: false, isSystem: false},
  [{propertyName: 'responseHeader', direction: 'out'}, {propertyName: 'requestHeader', direction: 'in'}],
  [{className: $nst + '.CampaignCriterionOperation', isArray: true, isSystem: false, name: 'operations', xmlElementName: 'operations'}]
);

$nso.CampaignCriterionService.prototype.get = function(serviceSelector, onsuccess, onfailure) {
  this.invoke.call(this, 'get', [serviceSelector], onsuccess, onfailure);
};

$nso.CampaignCriterionService.prototype.mutate = function(operations, onsuccess, onfailure) {
  this.invoke.call(this, 'mutate', [operations], onsuccess, onfailure);
};

$nso.ListReturnValue = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ListReturnValue', false, $sot);
$ref.prop('listReturnValueType', 'string', 'ListReturnValue.Type', false, true);

$nso.CampaignCriterionReturnValue = function() {
  $nso.ListReturnValue.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.CampaignCriterionReturnValue', false, $nst + '.ListReturnValue');
$ref.prop('value', $nst + '.CampaignCriterion', 'value', true, false);

$nso.CampaignCriterion = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.CampaignCriterion', false, $sot);
$ref.prop('campaignId', 'integer', 'campaignId', false, true);
$ref.prop('criterion', $nst + '.Criterion', 'criterion', false, false);
$ref.prop('campaignCriterionType', 'string', 'CampaignCriterion.Type', false, true);

$nso.Criterion = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.Criterion', false, $sot);
$ref.prop('id', 'integer', 'id', false, true);
$ref.prop('criterionType', 'string', 'Criterion.Type', false, true);

$nso.Vertical = function() {
  $nso.Criterion.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.Vertical', false, $nst + '.Criterion');
$ref.prop('path', 'string', 'path', true, true);

$nso.CriterionUserList = function() {
  $nso.Criterion.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.CriterionUserList', false, $nst + '.Criterion');
$ref.prop('userListId', 'integer', 'userListId', false, true);
$ref.prop('userListName', 'string', 'userListName', false, true);
$ref.prop('userListMembershipStatus', $nst + '.CriterionUserListMembershipStatus', 'userListMembershipStatus', false, false);

$nso.CriterionUserListMembershipStatus = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.CriterionUserListMembershipStatus', true, $sot);

$nso.CriterionUserListMembershipStatus.OPEN = 'OPEN';
$nso.CriterionUserListMembershipStatus.CLOSED = 'CLOSED';

$nso.CriterionUserInterest = function() {
  $nso.Criterion.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.CriterionUserInterest', false, $nst + '.Criterion');
$ref.prop('userInterestId', 'integer', 'userInterestId', false, true);
$ref.prop('userInterestName', 'string', 'userInterestName', false, true);

$nso.Product = function() {
  $nso.Criterion.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.Product', false, $nst + '.Criterion');
$ref.prop('conditions', $nst + '.ProductCondition', 'conditions', true, false);
$ref.prop('text', 'string', 'text', false, true);

$nso.ProductCondition = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ProductCondition', false, $sot);
$ref.prop('argument', 'string', 'argument', false, true);
$ref.prop('operand', $nst + '.ProductConditionOperand', 'operand', false, false);

$nso.ProductConditionOperand = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ProductConditionOperand', false, $sot);
$ref.prop('operand', 'string', 'operand', false, true);

$nso.Placement = function() {
  $nso.Criterion.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.Placement', false, $nst + '.Criterion');
$ref.prop('url', 'string', 'url', false, true);

$nso.Keyword = function() {
  $nso.Criterion.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.Keyword', false, $nst + '.Criterion');
$ref.prop('text', 'string', 'text', false, true);
$ref.prop('matchType', $nst + '.KeywordMatchType', 'matchType', false, false);

$nso.KeywordMatchType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.KeywordMatchType', true, $sot);

$nso.KeywordMatchType.EXACT = 'EXACT';
$nso.KeywordMatchType.PHRASE = 'PHRASE';
$nso.KeywordMatchType.BROAD = 'BROAD';

$nso.ContentLabel = function() {
  $nso.Criterion.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ContentLabel', false, $nst + '.Criterion');
$ref.prop('contentLabelType', $nst + '.ContentLabelType', 'contentLabelType', false, false);

$nso.ContentLabelType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ContentLabelType', true, $sot);

$nso.ContentLabelType.ADULTISH = 'ADULTISH';
$nso.ContentLabelType.AFE = 'AFE';
$nso.ContentLabelType.BELOW_THE_FOLD = 'BELOW_THE_FOLD';
$nso.ContentLabelType.CONFLICT = 'CONFLICT';
$nso.ContentLabelType.DP = 'DP';
$nso.ContentLabelType.EMBEDDED_VIDEO = 'EMBEDDED_VIDEO';
$nso.ContentLabelType.GAMES = 'GAMES';
$nso.ContentLabelType.JACKASS = 'JACKASS';
$nso.ContentLabelType.PROFANITY = 'PROFANITY';
$nso.ContentLabelType.UGC_FORUMS = 'UGC_FORUMS';
$nso.ContentLabelType.UGC_IMAGES = 'UGC_IMAGES';
$nso.ContentLabelType.UGC_SOCIAL = 'UGC_SOCIAL';
$nso.ContentLabelType.UGC_VIDEOS = 'UGC_VIDEOS';
$nso.ContentLabelType.SIRENS = 'SIRENS';
$nso.ContentLabelType.TRAGEDY = 'TRAGEDY';
$nso.ContentLabelType.VIDEO = 'VIDEO';

$nso.NegativeCampaignCriterion = function() {
  $nso.CampaignCriterion.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.NegativeCampaignCriterion', false, $nst + '.CampaignCriterion');

$nso.Operation = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.Operation', false, $sot);
$ref.prop('operator', $nst + '.Operator', 'operator', false, false);
$ref.prop('operationType', 'string', 'Operation.Type', false, true);

$nso.Operator = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.Operator', true, $sot);

$nso.Operator.ADD = 'ADD';
$nso.Operator.REMOVE = 'REMOVE';
$nso.Operator.SET = 'SET';

$nso.CampaignCriterionOperation = function() {
  $nso.Operation.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.CampaignCriterionOperation', false, $nst + '.Operation');
$ref.prop('operand', $nst + '.CampaignCriterion', 'operand', false, false);

$nso.Page = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.Page', false, $sot);
$ref.prop('totalNumEntries', 'integer', 'totalNumEntries', false, true);
$ref.prop('pageType', 'string', 'Page.Type', false, true);

$nso.CampaignCriterionPage = function() {
  $nso.Page.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.CampaignCriterionPage', false, $nst + '.Page');
$ref.prop('entries', $nst + '.CampaignCriterion', 'entries', true, false);

$nso.Paging = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.Paging', false, $sot);
$ref.prop('startIndex', 'integer', 'startIndex', false, true);
$ref.prop('numberResults', 'integer', 'numberResults', false, true);

$nso.OrderBy = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.OrderBy', false, $sot);
$ref.prop('field', 'string', 'field', false, true);
$ref.prop('sortOrder', $nst + '.SortOrder', 'sortOrder', false, false);

$nso.SortOrder = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.SortOrder', true, $sot);

$nso.SortOrder.ASCENDING = 'ASCENDING';
$nso.SortOrder.DESCENDING = 'DESCENDING';

$nso.DateRange = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.DateRange', false, $sot);
$ref.prop('min', 'string', 'min', false, true);
$ref.prop('max', 'string', 'max', false, true);

$nso.Predicate = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.Predicate', false, $sot);
$ref.prop('field', 'string', 'field', false, true);
$ref.prop('operator', $nst + '.PredicateOperator', 'operator', false, false);
$ref.prop('values', 'string', 'values', true, true);

$nso.PredicateOperator = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.PredicateOperator', true, $sot);

$nso.PredicateOperator.EQUALS = 'EQUALS';
$nso.PredicateOperator.NOT_EQUALS = 'NOT_EQUALS';
$nso.PredicateOperator.IN = 'IN';
$nso.PredicateOperator.NOT_IN = 'NOT_IN';
$nso.PredicateOperator.GREATER_THAN = 'GREATER_THAN';
$nso.PredicateOperator.GREATER_THAN_EQUALS = 'GREATER_THAN_EQUALS';
$nso.PredicateOperator.LESS_THAN = 'LESS_THAN';
$nso.PredicateOperator.LESS_THAN_EQUALS = 'LESS_THAN_EQUALS';
$nso.PredicateOperator.STARTS_WITH = 'STARTS_WITH';
$nso.PredicateOperator.STARTS_WITH_IGNORE_CASE = 'STARTS_WITH_IGNORE_CASE';
$nso.PredicateOperator.CONTAINS = 'CONTAINS';
$nso.PredicateOperator.CONTAINS_IGNORE_CASE = 'CONTAINS_IGNORE_CASE';
$nso.PredicateOperator.DOES_NOT_CONTAIN = 'DOES_NOT_CONTAIN';
$nso.PredicateOperator.DOES_NOT_CONTAIN_IGNORE_CASE = 'DOES_NOT_CONTAIN_IGNORE_CASE';
$nso.PredicateOperator.UNKNOWN = 'UNKNOWN';

$nso.Selector = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.Selector', false, $sot);
$ref.prop('fields', 'string', 'fields', true, true);
$ref.prop('predicates', $nst + '.Predicate', 'predicates', true, false);
$ref.prop('dateRange', $nst + '.DateRange', 'dateRange', false, false);
$ref.prop('ordering', $nst + '.OrderBy', 'ordering', true, false);
$ref.prop('paging', $nst + '.Paging', 'paging', false, false);

$nso.ApiError = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ApiError', false, $sot);
$ref.prop('fieldPath', 'string', 'fieldPath', false, true);
$ref.prop('trigger', 'string', 'trigger', false, true);
$ref.prop('errorString', 'string', 'errorString', false, true);
$ref.prop('apiErrorType', 'string', 'ApiError.Type', false, true);

$nso.SizeLimitError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.SizeLimitError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.SizeLimitErrorReason', 'reason', false, false);

$nso.SizeLimitErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.SizeLimitErrorReason', true, $sot);

$nso.SizeLimitErrorReason.REQUEST_SIZE_LIMIT_EXCEEDED = 'REQUEST_SIZE_LIMIT_EXCEEDED';
$nso.SizeLimitErrorReason.RESPONSE_SIZE_LIMIT_EXCEEDED = 'RESPONSE_SIZE_LIMIT_EXCEEDED';
$nso.SizeLimitErrorReason.UNKNOWN = 'UNKNOWN';

$nso.SelectorError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.SelectorError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.SelectorErrorReason', 'reason', false, false);

$nso.SelectorErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.SelectorErrorReason', true, $sot);

$nso.SelectorErrorReason.INVALID_FIELD_NAME = 'INVALID_FIELD_NAME';
$nso.SelectorErrorReason.MISSING_FIELDS = 'MISSING_FIELDS';
$nso.SelectorErrorReason.OPERATOR_DOES_NOT_SUPPORT_MULTIPLE_VALUES = 'OPERATOR_DOES_NOT_SUPPORT_MULTIPLE_VALUES';
$nso.SelectorErrorReason.INVALID_PREDICATE_ENUM_VALUE = 'INVALID_PREDICATE_ENUM_VALUE';
$nso.SelectorErrorReason.MISSING_PREDICATE_OPERATOR = 'MISSING_PREDICATE_OPERATOR';
$nso.SelectorErrorReason.MISSING_PREDICATE_VALUES = 'MISSING_PREDICATE_VALUES';
$nso.SelectorErrorReason.INVALID_PREDICATE_FIELD_NAME = 'INVALID_PREDICATE_FIELD_NAME';
$nso.SelectorErrorReason.INVALID_PREDICATE_OPERATOR = 'INVALID_PREDICATE_OPERATOR';
$nso.SelectorErrorReason.INVALID_FIELD_SELECTION = 'INVALID_FIELD_SELECTION';
$nso.SelectorErrorReason.INVALID_PREDICATE_VALUE = 'INVALID_PREDICATE_VALUE';
$nso.SelectorErrorReason.UNKNOWN_ERROR = 'UNKNOWN_ERROR';

$nso.RequiredError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.RequiredError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.RequiredErrorReason', 'reason', false, false);

$nso.RequiredErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.RequiredErrorReason', true, $sot);

$nso.RequiredErrorReason.REQUIRED = 'REQUIRED';

$nso.RequestError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.RequestError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.RequestErrorReason', 'reason', false, false);

$nso.RequestErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.RequestErrorReason', true, $sot);

$nso.RequestErrorReason.UNKNOWN = 'UNKNOWN';
$nso.RequestErrorReason.INVALID_INPUT = 'INVALID_INPUT';

$nso.ReadOnlyError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ReadOnlyError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.ReadOnlyErrorReason', 'reason', false, false);

$nso.ReadOnlyErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ReadOnlyErrorReason', true, $sot);

$nso.ReadOnlyErrorReason.READ_ONLY = 'READ_ONLY';

$nso.RateExceededError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.RateExceededError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.RateExceededErrorReason', 'reason', false, false);
$ref.prop('rateName', 'string', 'rateName', false, true);
$ref.prop('rateScope', 'string', 'rateScope', false, true);
$ref.prop('retryAfterSeconds', 'integer', 'retryAfterSeconds', false, true);

$nso.RateExceededErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.RateExceededErrorReason', true, $sot);

$nso.RateExceededErrorReason.RATE_EXCEEDED = 'RATE_EXCEEDED';

$nso.RangeError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.RangeError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.RangeErrorReason', 'reason', false, false);

$nso.RangeErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.RangeErrorReason', true, $sot);

$nso.RangeErrorReason.TOO_LOW = 'TOO_LOW';
$nso.RangeErrorReason.TOO_HIGH = 'TOO_HIGH';

$nso.QuotaCheckError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.QuotaCheckError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.QuotaCheckErrorReason', 'reason', false, false);

$nso.QuotaCheckErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.QuotaCheckErrorReason', true, $sot);

$nso.QuotaCheckErrorReason.INVALID_TOKEN_HEADER = 'INVALID_TOKEN_HEADER';
$nso.QuotaCheckErrorReason.ACCOUNT_DELINQUENT = 'ACCOUNT_DELINQUENT';
$nso.QuotaCheckErrorReason.ACCOUNT_INACCESSIBLE = 'ACCOUNT_INACCESSIBLE';
$nso.QuotaCheckErrorReason.ACCOUNT_INACTIVE = 'ACCOUNT_INACTIVE';
$nso.QuotaCheckErrorReason.INCOMPLETE_SIGNUP = 'INCOMPLETE_SIGNUP';
$nso.QuotaCheckErrorReason.INCOMPLETE_SIGNUP_LATEST_ADWORDS_API_TNC_NOT_AGREED = 'INCOMPLETE_SIGNUP_LATEST_ADWORDS_API_TNC_NOT_AGREED';
$nso.QuotaCheckErrorReason.INCOMPLETE_SIGNUP_NO_BILLING_INFO = 'INCOMPLETE_SIGNUP_NO_BILLING_INFO';
$nso.QuotaCheckErrorReason.INCOMPLETE_SIGNUP_USER_INFO_MISSING = 'INCOMPLETE_SIGNUP_USER_INFO_MISSING';
$nso.QuotaCheckErrorReason.INCOMPLETE_SIGNUP_USER_INFO_PENDING = 'INCOMPLETE_SIGNUP_USER_INFO_PENDING';
$nso.QuotaCheckErrorReason.INCOMPLETE_SIGNUP_USER_INFO_REJECTED = 'INCOMPLETE_SIGNUP_USER_INFO_REJECTED';
$nso.QuotaCheckErrorReason.MONTHLY_BUDGET_REACHED = 'MONTHLY_BUDGET_REACHED';
$nso.QuotaCheckErrorReason.QUOTA_EXCEEDED = 'QUOTA_EXCEEDED';

$nso.PagingError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.PagingError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.PagingErrorReason', 'reason', false, false);

$nso.PagingErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.PagingErrorReason', true, $sot);

$nso.PagingErrorReason.START_INDEX_CANNOT_BE_NEGATIVE = 'START_INDEX_CANNOT_BE_NEGATIVE';
$nso.PagingErrorReason.NUMBER_OF_RESULTS_CANNOT_BE_NEGATIVE = 'NUMBER_OF_RESULTS_CANNOT_BE_NEGATIVE';
$nso.PagingErrorReason.UNKNOWN = 'UNKNOWN';

$nso.OperatorError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.OperatorError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.OperatorErrorReason', 'reason', false, false);

$nso.OperatorErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.OperatorErrorReason', true, $sot);

$nso.OperatorErrorReason.OPERATOR_NOT_SUPPORTED = 'OPERATOR_NOT_SUPPORTED';

$nso.OperationAccessDenied = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.OperationAccessDenied', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.OperationAccessDeniedReason', 'reason', false, false);

$nso.OperationAccessDeniedReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.OperationAccessDeniedReason', true, $sot);

$nso.OperationAccessDeniedReason.ACTION_NOT_PERMITTED = 'ACTION_NOT_PERMITTED';
$nso.OperationAccessDeniedReason.ADD_OPERATION_NOT_PERMITTED = 'ADD_OPERATION_NOT_PERMITTED';
$nso.OperationAccessDeniedReason.REMOVE_OPERATION_NOT_PERMITTED = 'REMOVE_OPERATION_NOT_PERMITTED';
$nso.OperationAccessDeniedReason.SET_OPERATION_NOT_PERMITTED = 'SET_OPERATION_NOT_PERMITTED';
$nso.OperationAccessDeniedReason.MUTATE_ACTION_NOT_PERMITTED_FOR_CLIENT = 'MUTATE_ACTION_NOT_PERMITTED_FOR_CLIENT';
$nso.OperationAccessDeniedReason.UNKNOWN = 'UNKNOWN';

$nso.NullError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.NullError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.NullErrorReason', 'reason', false, false);

$nso.NullErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.NullErrorReason', true, $sot);

$nso.NullErrorReason.NULL_CONTENT = 'NULL_CONTENT';

$nso.NotWhitelistedError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.NotWhitelistedError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.NotWhitelistedErrorReason', 'reason', false, false);

$nso.NotWhitelistedErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.NotWhitelistedErrorReason', true, $sot);

$nso.NotWhitelistedErrorReason.CUSTOMER_NOT_WHITELISTED_FOR_API = 'CUSTOMER_NOT_WHITELISTED_FOR_API';

$nso.NotEmptyError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.NotEmptyError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.NotEmptyErrorReason', 'reason', false, false);

$nso.NotEmptyErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.NotEmptyErrorReason', true, $sot);

$nso.NotEmptyErrorReason.EMPTY_LIST = 'EMPTY_LIST';

$nso.NewEntityCreationError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.NewEntityCreationError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.NewEntityCreationErrorReason', 'reason', false, false);

$nso.NewEntityCreationErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.NewEntityCreationErrorReason', true, $sot);

$nso.NewEntityCreationErrorReason.CANNOT_SET_ID_FOR_ADD = 'CANNOT_SET_ID_FOR_ADD';

$nso.InternalApiError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.InternalApiError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.InternalApiErrorReason', 'reason', false, false);

$nso.InternalApiErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.InternalApiErrorReason', true, $sot);

$nso.InternalApiErrorReason.UNEXPECTED_INTERNAL_API_ERROR = 'UNEXPECTED_INTERNAL_API_ERROR';
$nso.InternalApiErrorReason.UNKNOWN = 'UNKNOWN';

$nso.EntityNotFound = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.EntityNotFound', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.EntityNotFoundReason', 'reason', false, false);

$nso.EntityNotFoundReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.EntityNotFoundReason', true, $sot);

$nso.EntityNotFoundReason.INVALID_ID = 'INVALID_ID';

$nso.EntityCountLimitExceeded = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.EntityCountLimitExceeded', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.EntityCountLimitExceededReason', 'reason', false, false);
$ref.prop('enclosingId', 'string', 'enclosingId', false, true);
$ref.prop('limit', 'integer', 'limit', false, true);

$nso.EntityCountLimitExceededReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.EntityCountLimitExceededReason', true, $sot);

$nso.EntityCountLimitExceededReason.ACCOUNT_LIMIT = 'ACCOUNT_LIMIT';
$nso.EntityCountLimitExceededReason.CAMPAIGN_LIMIT = 'CAMPAIGN_LIMIT';
$nso.EntityCountLimitExceededReason.ADGROUP_LIMIT = 'ADGROUP_LIMIT';
$nso.EntityCountLimitExceededReason.ADGROUP_TEXT_AD_LIMIT = 'ADGROUP_TEXT_AD_LIMIT';
$nso.EntityCountLimitExceededReason.ADGROUP_DISPLAY_AD_LIMIT = 'ADGROUP_DISPLAY_AD_LIMIT';
$nso.EntityCountLimitExceededReason.UNKNOWN = 'UNKNOWN';

$nso.CampaignCriterionLimitExceeded = function() {
  $nso.EntityCountLimitExceeded.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.CampaignCriterionLimitExceeded', false, $nst + '.EntityCountLimitExceeded');
$ref.prop('limitType', $nst + '.CampaignCriterionLimitExceededCriteriaLimitType', 'limitType', false, false);

$nso.CampaignCriterionLimitExceededCriteriaLimitType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.CampaignCriterionLimitExceededCriteriaLimitType', true, $sot);

$nso.CampaignCriterionLimitExceededCriteriaLimitType.CAMPAIGN_CRITERIA = 'CAMPAIGN_CRITERIA';
$nso.CampaignCriterionLimitExceededCriteriaLimitType.CAMPAIGN_NEGATIVE_KEYWORD = 'CAMPAIGN_NEGATIVE_KEYWORD';
$nso.CampaignCriterionLimitExceededCriteriaLimitType.CAMPAIGN_NEGATIVE_WEBSITE = 'CAMPAIGN_NEGATIVE_WEBSITE';

$nso.DistinctError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.DistinctError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.DistinctErrorReason', 'reason', false, false);

$nso.DistinctErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.DistinctErrorReason', true, $sot);

$nso.DistinctErrorReason.DUPLICATE_ELEMENT = 'DUPLICATE_ELEMENT';
$nso.DistinctErrorReason.DUPLICATE_TYPE = 'DUPLICATE_TYPE';

$nso.DatabaseError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.DatabaseError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.DatabaseErrorReason', 'reason', false, false);

$nso.DatabaseErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.DatabaseErrorReason', true, $sot);

$nso.DatabaseErrorReason.CONCURRENT_MODIFICATION = 'CONCURRENT_MODIFICATION';
$nso.DatabaseErrorReason.PERMISSION_DENIED = 'PERMISSION_DENIED';
$nso.DatabaseErrorReason.CAMPAIGN_PRODUCT_NOT_SUPPORTED = 'CAMPAIGN_PRODUCT_NOT_SUPPORTED';
$nso.DatabaseErrorReason.DUPLICATE_KEY = 'DUPLICATE_KEY';
$nso.DatabaseErrorReason.DATABASE_ERROR = 'DATABASE_ERROR';
$nso.DatabaseErrorReason.UNKNOWN = 'UNKNOWN';

$nso.CriterionError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.CriterionError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.CriterionErrorReason', 'reason', false, false);

$nso.CriterionErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.CriterionErrorReason', true, $sot);

$nso.CriterionErrorReason.CONCRETE_TYPE_REQUIRED = 'CONCRETE_TYPE_REQUIRED';
$nso.CriterionErrorReason.INVALID_EXCLUDED_CATEGORY = 'INVALID_EXCLUDED_CATEGORY';
$nso.CriterionErrorReason.INVALID_KEYWORD_TEXT = 'INVALID_KEYWORD_TEXT';
$nso.CriterionErrorReason.KEYWORD_TEXT_TOO_LONG = 'KEYWORD_TEXT_TOO_LONG';
$nso.CriterionErrorReason.KEYWORD_HAS_TOO_MANY_WORDS = 'KEYWORD_HAS_TOO_MANY_WORDS';
$nso.CriterionErrorReason.KEYWORD_HAS_INVALID_CHARS = 'KEYWORD_HAS_INVALID_CHARS';
$nso.CriterionErrorReason.INVALID_PLACEMENT_URL = 'INVALID_PLACEMENT_URL';
$nso.CriterionErrorReason.INVALID_USER_LIST = 'INVALID_USER_LIST';
$nso.CriterionErrorReason.INVALID_USER_INTEREST = 'INVALID_USER_INTEREST';
$nso.CriterionErrorReason.INVALID_FORMAT_FOR_PLACEMENT_URL = 'INVALID_FORMAT_FOR_PLACEMENT_URL';
$nso.CriterionErrorReason.PLACEMENT_URL_IS_TOO_LONG = 'PLACEMENT_URL_IS_TOO_LONG';
$nso.CriterionErrorReason.PLACEMENT_URL_HAS_ILLEGAL_CHAR = 'PLACEMENT_URL_HAS_ILLEGAL_CHAR';
$nso.CriterionErrorReason.PLACEMENT_URL_HAS_MULTIPLE_SITES_IN_LINE = 'PLACEMENT_URL_HAS_MULTIPLE_SITES_IN_LINE';
$nso.CriterionErrorReason.PLACEMENT_IS_NOT_AVAILABLE_FOR_TARGETING_OR_EXCLUSION = 'PLACEMENT_IS_NOT_AVAILABLE_FOR_TARGETING_OR_EXCLUSION';
$nso.CriterionErrorReason.INVALID_VERTICAL_PATH = 'INVALID_VERTICAL_PATH';
$nso.CriterionErrorReason.CANNOT_EXCLUDE_CRITERIA_TYPE = 'CANNOT_EXCLUDE_CRITERIA_TYPE';
$nso.CriterionErrorReason.INVALID_PRODUCT_FILTER = 'INVALID_PRODUCT_FILTER';
$nso.CriterionErrorReason.PRODUCT_FILTER_TOO_LONG = 'PRODUCT_FILTER_TOO_LONG';
$nso.CriterionErrorReason.UNKNOWN = 'UNKNOWN';

$nso.ClientTermsError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ClientTermsError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.ClientTermsErrorReason', 'reason', false, false);

$nso.ClientTermsErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ClientTermsErrorReason', true, $sot);

$nso.ClientTermsErrorReason.INCOMPLETE_SIGNUP_CURRENT_ADWORDS_TNC_NOT_AGREED = 'INCOMPLETE_SIGNUP_CURRENT_ADWORDS_TNC_NOT_AGREED';

$nso.CampaignCriterionError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.CampaignCriterionError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.CampaignCriterionErrorReason', 'reason', false, false);

$nso.CampaignCriterionErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.CampaignCriterionErrorReason', true, $sot);

$nso.CampaignCriterionErrorReason.CRITERIA_QUOTA_EXCEEDED = 'CRITERIA_QUOTA_EXCEEDED';
$nso.CampaignCriterionErrorReason.CONCRETE_TYPE_REQUIRED = 'CONCRETE_TYPE_REQUIRED';
$nso.CampaignCriterionErrorReason.ID_FILTERS_HAVE_DIFF_FIELDS_SET = 'ID_FILTERS_HAVE_DIFF_FIELDS_SET';
$nso.CampaignCriterionErrorReason.INVALID_EXCLUDED_CATEGORY = 'INVALID_EXCLUDED_CATEGORY';
$nso.CampaignCriterionErrorReason.INVALID_KEYWORD_TEXT = 'INVALID_KEYWORD_TEXT';
$nso.CampaignCriterionErrorReason.INVALID_PLACEMENT_URL = 'INVALID_PLACEMENT_URL';
$nso.CampaignCriterionErrorReason.INVALID_VERTICAL_PATH = 'INVALID_VERTICAL_PATH';
$nso.CampaignCriterionErrorReason.CANNOT_EXCLUDE_CRITERIA_TYPE = 'CANNOT_EXCLUDE_CRITERIA_TYPE';
$nso.CampaignCriterionErrorReason.TOO_MANY_OPERTAIONS = 'TOO_MANY_OPERTAIONS';
$nso.CampaignCriterionErrorReason.UNKNOWN = 'UNKNOWN';

$nso.AuthorizationError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AuthorizationError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.AuthorizationErrorReason', 'reason', false, false);

$nso.AuthorizationErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AuthorizationErrorReason', true, $sot);

$nso.AuthorizationErrorReason.UNABLE_TO_AUTHORIZE = 'UNABLE_TO_AUTHORIZE';
$nso.AuthorizationErrorReason.NO_ADWORDS_ACCOUNT_FOR_CUSTOMER = 'NO_ADWORDS_ACCOUNT_FOR_CUSTOMER';
$nso.AuthorizationErrorReason.USER_PERMISSION_DENIED = 'USER_PERMISSION_DENIED';
$nso.AuthorizationErrorReason.EFFECTIVE_USER_PERMISSION_DENIED = 'EFFECTIVE_USER_PERMISSION_DENIED';
$nso.AuthorizationErrorReason.USER_HAS_READONLY_PERMISSION = 'USER_HAS_READONLY_PERMISSION';
$nso.AuthorizationErrorReason.NO_CUSTOMER_FOUND = 'NO_CUSTOMER_FOUND';

$nso.AuthenticationError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AuthenticationError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.AuthenticationErrorReason', 'reason', false, false);

$nso.AuthenticationErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AuthenticationErrorReason', true, $sot);

$nso.AuthenticationErrorReason.AUTHENTICATION_FAILED = 'AUTHENTICATION_FAILED';
$nso.AuthenticationErrorReason.CLIENT_CUSTOMER_ID_IS_REQUIRED = 'CLIENT_CUSTOMER_ID_IS_REQUIRED';
$nso.AuthenticationErrorReason.CLIENT_EMAIL_REQUIRED = 'CLIENT_EMAIL_REQUIRED';
$nso.AuthenticationErrorReason.CLIENT_CUSTOMER_ID_INVALID = 'CLIENT_CUSTOMER_ID_INVALID';
$nso.AuthenticationErrorReason.CLIENT_EMAIL_INVALID = 'CLIENT_EMAIL_INVALID';
$nso.AuthenticationErrorReason.CLIENT_EMAIL_FAILED_TO_AUTHENTICATE = 'CLIENT_EMAIL_FAILED_TO_AUTHENTICATE';
$nso.AuthenticationErrorReason.CUSTOMER_NOT_FOUND = 'CUSTOMER_NOT_FOUND';
$nso.AuthenticationErrorReason.GOOGLE_ACCOUNT_DELETED = 'GOOGLE_ACCOUNT_DELETED';
$nso.AuthenticationErrorReason.GOOGLE_ACCOUNT_COOKIE_INVALID = 'GOOGLE_ACCOUNT_COOKIE_INVALID';
$nso.AuthenticationErrorReason.FAILED_TO_AUTHENTICATE_GOOGLE_ACCOUNT = 'FAILED_TO_AUTHENTICATE_GOOGLE_ACCOUNT';
$nso.AuthenticationErrorReason.GOOGLE_ACCOUNT_USER_AND_ADS_USER_MISMATCH = 'GOOGLE_ACCOUNT_USER_AND_ADS_USER_MISMATCH';
$nso.AuthenticationErrorReason.LOGIN_COOKIE_REQUIRED = 'LOGIN_COOKIE_REQUIRED';
$nso.AuthenticationErrorReason.NOT_ADS_USER = 'NOT_ADS_USER';
$nso.AuthenticationErrorReason.OAUTH_TOKEN_INVALID = 'OAUTH_TOKEN_INVALID';
$nso.AuthenticationErrorReason.OAUTH_TOKEN_EXPIRED = 'OAUTH_TOKEN_EXPIRED';
$nso.AuthenticationErrorReason.OAUTH_TOKEN_DISABLED = 'OAUTH_TOKEN_DISABLED';
$nso.AuthenticationErrorReason.OAUTH_TOKEN_REVOKED = 'OAUTH_TOKEN_REVOKED';
$nso.AuthenticationErrorReason.OAUTH_TOKEN_HEADER_INVALID = 'OAUTH_TOKEN_HEADER_INVALID';
$nso.AuthenticationErrorReason.LOGIN_COOKIE_INVALID = 'LOGIN_COOKIE_INVALID';
$nso.AuthenticationErrorReason.FAILED_TO_RETRIEVE_LOGIN_COOKIE = 'FAILED_TO_RETRIEVE_LOGIN_COOKIE';
$nso.AuthenticationErrorReason.USER_ID_INVALID = 'USER_ID_INVALID';

$nso.ApplicationException = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ApplicationException', false, $sot);
$ref.prop('message', 'string', 'message', false, true);
$ref.prop('applicationExceptionType', 'string', 'ApplicationException.Type', false, true);

$nso.ApiException = function() {
  $nso.ApplicationException.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ApiException', false, $nst + '.ApplicationException');
$ref.prop('errors', $nst + '.ApiError', 'errors', true, false);

$nso.CampaignService = function() {
  $sso.call(this);
  this.nametable_ = new google.ads.adwords.v201101.SoapNametable();
};

$ref = $dsf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.CampaignService');
$ref.prop('requestHeader', $nst + '.RequestHeader', 'RequestHeader', false, false);
$ref.prop('responseHeader', $nst + '.ResponseHeader', 'ResponseHeader', false, false);
$ref.meth(
  'get',
  'https://adwords.google.com/api/adwords/cm/v201101',
  'https://adwords.google.com/api/adwords/cm/v201101',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.CampaignPage', isArray: false, isSystem: false},
  [{propertyName: 'responseHeader', direction: 'out'}, {propertyName: 'requestHeader', direction: 'in'}],
  [{className: $nst + '.Selector', isArray: false, isSystem: false, name: 'serviceSelector', xmlElementName: 'serviceSelector'}]
);
$ref.meth(
  'mutate',
  'https://adwords.google.com/api/adwords/cm/v201101',
  'https://adwords.google.com/api/adwords/cm/v201101',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.CampaignReturnValue', isArray: false, isSystem: false},
  [{propertyName: 'responseHeader', direction: 'out'}, {propertyName: 'requestHeader', direction: 'in'}],
  [{className: $nst + '.CampaignOperation', isArray: true, isSystem: false, name: 'operations', xmlElementName: 'operations'}]
);

$nso.CampaignService.prototype.get = function(serviceSelector, onsuccess, onfailure) {
  this.invoke.call(this, 'get', [serviceSelector], onsuccess, onfailure);
};

$nso.CampaignService.prototype.mutate = function(operations, onsuccess, onfailure) {
  this.invoke.call(this, 'mutate', [operations], onsuccess, onfailure);
};

$nso.CampaignReturnValue = function() {
  $nso.ListReturnValue.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.CampaignReturnValue', false, $nst + '.ListReturnValue');
$ref.prop('value', $nst + '.Campaign', 'value', true, false);

$nso.Campaign = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.Campaign', false, $sot);
$ref.prop('id', 'integer', 'id', false, true);
$ref.prop('name', 'string', 'name', false, true);
$ref.prop('status', $nst + '.CampaignStatus', 'status', false, false);
$ref.prop('servingStatus', $nst + '.ServingStatus', 'servingStatus', false, false);
$ref.prop('startDate', 'string', 'startDate', false, true);
$ref.prop('endDate', 'string', 'endDate', false, true);
$ref.prop('budget', $nst + '.Budget', 'budget', false, false);
$ref.prop('biddingStrategy', $nst + '.BiddingStrategy', 'biddingStrategy', false, false);
$ref.prop('conversionOptimizerEligibility', $nst + '.ConversionOptimizerEligibility', 'conversionOptimizerEligibility', false, false);
$ref.prop('campaignStats', $nst + '.CampaignStats', 'campaignStats', false, false);
$ref.prop('adServingOptimizationStatus', $nst + '.AdServingOptimizationStatus', 'adServingOptimizationStatus', false, false);
$ref.prop('frequencyCap', $nst + '.FrequencyCap', 'frequencyCap', false, false);
$ref.prop('settings', $nst + '.Setting', 'settings', true, false);
$ref.prop('networkSetting', $nst + '.NetworkSetting', 'networkSetting', false, false);

$nso.CampaignStatus = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.CampaignStatus', true, $sot);

$nso.CampaignStatus.ACTIVE = 'ACTIVE';
$nso.CampaignStatus.DELETED = 'DELETED';
$nso.CampaignStatus.PAUSED = 'PAUSED';

$nso.ServingStatus = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ServingStatus', true, $sot);

$nso.ServingStatus.SERVING = 'SERVING';
$nso.ServingStatus.NONE = 'NONE';
$nso.ServingStatus.ENDED = 'ENDED';
$nso.ServingStatus.PENDING = 'PENDING';
$nso.ServingStatus.SUSPENDED = 'SUSPENDED';

$nso.Budget = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.Budget', false, $sot);
$ref.prop('period', $nst + '.BudgetBudgetPeriod', 'period', false, false);
$ref.prop('amount', $nst + '.Money', 'amount', false, false);
$ref.prop('deliveryMethod', $nst + '.BudgetBudgetDeliveryMethod', 'deliveryMethod', false, false);

$nso.BudgetBudgetPeriod = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.BudgetBudgetPeriod', true, $sot);

$nso.BudgetBudgetPeriod.DAILY = 'DAILY';
$nso.BudgetBudgetPeriod.MONTHLY = 'MONTHLY';

$nso.ComparableValue = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ComparableValue', false, $sot);
$ref.prop('comparableValueType', 'string', 'ComparableValue.Type', false, true);

$nso.NumberValue = function() {
  $nso.ComparableValue.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.NumberValue', false, $nst + '.ComparableValue');

$nso.LongValue = function() {
  $nso.NumberValue.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.LongValue', false, $nst + '.NumberValue');
$ref.prop('number', 'integer', 'number', false, true);

$nso.DoubleValue = function() {
  $nso.NumberValue.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.DoubleValue', false, $nst + '.NumberValue');
$ref.prop('number', 'double', 'number', false, true);

$nso.BudgetBudgetDeliveryMethod = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.BudgetBudgetDeliveryMethod', true, $sot);

$nso.BudgetBudgetDeliveryMethod.STANDARD = 'STANDARD';
$nso.BudgetBudgetDeliveryMethod.ACCELERATED = 'ACCELERATED';

$nso.BiddingStrategy = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.BiddingStrategy', false, $sot);
$ref.prop('biddingStrategyType', 'string', 'BiddingStrategy.Type', false, true);

$nso.BudgetOptimizer = function() {
  $nso.BiddingStrategy.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.BudgetOptimizer', false, $nst + '.BiddingStrategy');
$ref.prop('enhancedCpcEnabled', 'boolean', 'enhancedCpcEnabled', false, true);
$ref.prop('bidCeiling', $nst + '.Money', 'bidCeiling', false, false);

$nso.PercentCPA = function() {
  $nso.BiddingStrategy.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.PercentCPA', false, $nst + '.BiddingStrategy');

$nso.ManualCPM = function() {
  $nso.BiddingStrategy.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ManualCPM', false, $nst + '.BiddingStrategy');

$nso.ManualCPC = function() {
  $nso.BiddingStrategy.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ManualCPC', false, $nst + '.BiddingStrategy');
$ref.prop('enhancedCpcEnabled', 'boolean', 'enhancedCpcEnabled', false, true);
$ref.prop('positionPreference', $nst + '.PositionPreference', 'positionPreference', false, false);

$nso.PositionPreference = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.PositionPreference', true, $sot);

$nso.PositionPreference.ON = 'ON';
$nso.PositionPreference.OFF = 'OFF';

$nso.ConversionOptimizer = function() {
  $nso.BiddingStrategy.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ConversionOptimizer', false, $nst + '.BiddingStrategy');
$ref.prop('pricingModel', $nst + '.PricingModel', 'pricingModel', false, false);
$ref.prop('conversionOptimizerBidType', $nst + '.ConversionOptimizerBidType', 'conversionOptimizerBidType', false, false);
$ref.prop('deduplicationMode', $nst + '.ConversionDeduplicationMode', 'deduplicationMode', false, false);

$nso.PricingModel = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.PricingModel', true, $sot);

$nso.PricingModel.CLICKS = 'CLICKS';
$nso.PricingModel.IMPRESSIONS = 'IMPRESSIONS';
$nso.PricingModel.CONVERSIONS = 'CONVERSIONS';

$nso.ConversionOptimizerBidType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ConversionOptimizerBidType', true, $sot);

$nso.ConversionOptimizerBidType.TARGET_CPA = 'TARGET_CPA';
$nso.ConversionOptimizerBidType.MAX_CPA = 'MAX_CPA';

$nso.ConversionDeduplicationMode = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ConversionDeduplicationMode', true, $sot);

$nso.ConversionDeduplicationMode.ONE_PER_CLICK = 'ONE_PER_CLICK';
$nso.ConversionDeduplicationMode.MANY_PER_CLICK = 'MANY_PER_CLICK';

$nso.ConversionOptimizerEligibility = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ConversionOptimizerEligibility', false, $sot);
$ref.prop('eligible', 'boolean', 'eligible', false, true);
$ref.prop('rejectionReasons', $nst + '.ConversionOptimizerEligibilityRejectionReason', 'rejectionReasons', true, false);

$nso.ConversionOptimizerEligibilityRejectionReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ConversionOptimizerEligibilityRejectionReason', true, $sot);

$nso.ConversionOptimizerEligibilityRejectionReason.CAMPAIGN_IS_NOT_ACTIVE = 'CAMPAIGN_IS_NOT_ACTIVE';
$nso.ConversionOptimizerEligibilityRejectionReason.NOT_CPC_CAMPAIGN = 'NOT_CPC_CAMPAIGN';
$nso.ConversionOptimizerEligibilityRejectionReason.CONVERSION_TRACKING_NOT_ENABLED = 'CONVERSION_TRACKING_NOT_ENABLED';
$nso.ConversionOptimizerEligibilityRejectionReason.NOT_ENOUGH_CONVERSIONS = 'NOT_ENOUGH_CONVERSIONS';
$nso.ConversionOptimizerEligibilityRejectionReason.UNKNOWN = 'UNKNOWN';

$nso.Stats = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.Stats', false, $sot);
$ref.prop('startDate', 'string', 'startDate', false, true);
$ref.prop('endDate', 'string', 'endDate', false, true);
$ref.prop('network', $nst + '.StatsNetwork', 'network', false, false);
$ref.prop('clicks', 'integer', 'clicks', false, true);
$ref.prop('impressions', 'integer', 'impressions', false, true);
$ref.prop('cost', $nst + '.Money', 'cost', false, false);
$ref.prop('averagePosition', 'double', 'averagePosition', false, true);
$ref.prop('averageCpc', $nst + '.Money', 'averageCpc', false, false);
$ref.prop('averageCpm', $nst + '.Money', 'averageCpm', false, false);
$ref.prop('ctr', 'double', 'ctr', false, true);
$ref.prop('conversions', 'integer', 'conversions', false, true);
$ref.prop('conversionRate', 'double', 'conversionRate', false, true);
$ref.prop('costPerConversion', $nst + '.Money', 'costPerConversion', false, false);
$ref.prop('conversionsManyPerClick', 'integer', 'conversionsManyPerClick', false, true);
$ref.prop('conversionRateManyPerClick', 'double', 'conversionRateManyPerClick', false, true);
$ref.prop('costPerConversionManyPerClick', $nst + '.Money', 'costPerConversionManyPerClick', false, false);
$ref.prop('viewThroughConversions', 'integer', 'viewThroughConversions', false, true);
$ref.prop('totalConvValue', 'integer', 'totalConvValue', false, true);
$ref.prop('valuePerConv', 'double', 'valuePerConv', false, true);
$ref.prop('valuePerConvManyPerClick', 'double', 'valuePerConvManyPerClick', false, true);
$ref.prop('invalidClicks', 'integer', 'invalidClicks', false, true);
$ref.prop('invalidClickRate', 'double', 'invalidClickRate', false, true);
$ref.prop('statsType', 'string', 'Stats.Type', false, true);

$nso.StatsNetwork = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.StatsNetwork', true, $sot);

$nso.StatsNetwork.SEARCH = 'SEARCH';
$nso.StatsNetwork.GOOGLE_SEARCH = 'GOOGLE_SEARCH';
$nso.StatsNetwork.SEARCH_NETWORK = 'SEARCH_NETWORK';
$nso.StatsNetwork.CONTENT = 'CONTENT';
$nso.StatsNetwork.CONTENT_KEYWORD_BID = 'CONTENT_KEYWORD_BID';
$nso.StatsNetwork.CONTENT_PLACEMENT_BID = 'CONTENT_PLACEMENT_BID';
$nso.StatsNetwork.ALL = 'ALL';
$nso.StatsNetwork.UNKNOWN = 'UNKNOWN';

$nso.AdServingOptimizationStatus = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AdServingOptimizationStatus', true, $sot);

$nso.AdServingOptimizationStatus.OPTIMIZE = 'OPTIMIZE';
$nso.AdServingOptimizationStatus.ROTATE = 'ROTATE';
$nso.AdServingOptimizationStatus.UNAVAILABLE = 'UNAVAILABLE';

$nso.FrequencyCap = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.FrequencyCap', false, $sot);
$ref.prop('impressions', 'integer', 'impressions', false, true);
$ref.prop('timeUnit', $nst + '.TimeUnit', 'timeUnit', false, false);
$ref.prop('level', $nst + '.Level', 'level', false, false);

$nso.TimeUnit = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.TimeUnit', true, $sot);

$nso.TimeUnit.MINUTE = 'MINUTE';
$nso.TimeUnit.HOUR = 'HOUR';
$nso.TimeUnit.DAY = 'DAY';
$nso.TimeUnit.WEEK = 'WEEK';
$nso.TimeUnit.MONTH = 'MONTH';
$nso.TimeUnit.LIFETIME = 'LIFETIME';

$nso.Level = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.Level', true, $sot);

$nso.Level.CREATIVE = 'CREATIVE';
$nso.Level.ADGROUP = 'ADGROUP';
$nso.Level.CAMPAIGN = 'CAMPAIGN';
$nso.Level.UNKNOWN = 'UNKNOWN';

$nso.Setting = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.Setting', false, $sot);
$ref.prop('settingType', 'string', 'Setting.Type', false, true);

$nso.RealTimeBiddingSetting = function() {
  $nso.Setting.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.RealTimeBiddingSetting', false, $nst + '.Setting');
$ref.prop('optIn', 'boolean', 'optIn', false, true);

$nso.GeoTargetTypeSetting = function() {
  $nso.Setting.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.GeoTargetTypeSetting', false, $nst + '.Setting');
$ref.prop('positiveGeoTargetType', $nst + '.GeoTargetTypeSettingPositiveGeoTargetType', 'positiveGeoTargetType', false, false);
$ref.prop('negativeGeoTargetType', $nst + '.GeoTargetTypeSettingNegativeGeoTargetType', 'negativeGeoTargetType', false, false);

$nso.GeoTargetTypeSettingPositiveGeoTargetType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.GeoTargetTypeSettingPositiveGeoTargetType', true, $sot);

$nso.GeoTargetTypeSettingPositiveGeoTargetType.DONT_CARE = 'DONT_CARE';
$nso.GeoTargetTypeSettingPositiveGeoTargetType.AREA_OF_INTEREST = 'AREA_OF_INTEREST';
$nso.GeoTargetTypeSettingPositiveGeoTargetType.LOCATION_OF_PRESENCE = 'LOCATION_OF_PRESENCE';

$nso.GeoTargetTypeSettingNegativeGeoTargetType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.GeoTargetTypeSettingNegativeGeoTargetType', true, $sot);

$nso.GeoTargetTypeSettingNegativeGeoTargetType.DONT_CARE = 'DONT_CARE';
$nso.GeoTargetTypeSettingNegativeGeoTargetType.LOCATION_OF_PRESENCE = 'LOCATION_OF_PRESENCE';

$nso.NetworkSetting = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.NetworkSetting', false, $sot);
$ref.prop('targetGoogleSearch', 'boolean', 'targetGoogleSearch', false, true);
$ref.prop('targetSearchNetwork', 'boolean', 'targetSearchNetwork', false, true);
$ref.prop('targetContentNetwork', 'boolean', 'targetContentNetwork', false, true);
$ref.prop('targetContentContextual', 'boolean', 'targetContentContextual', false, true);
$ref.prop('targetPartnerSearchNetwork', 'boolean', 'targetPartnerSearchNetwork', false, true);

$nso.Bid = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.Bid', false, $sot);
$ref.prop('amount', $nst + '.Money', 'amount', false, false);

$nso.AdGroupBids = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AdGroupBids', false, $sot);
$ref.prop('adGroupBidsType', 'string', 'AdGroupBids.Type', false, true);

$nso.ManualCPMAdGroupBids = function() {
  $nso.AdGroupBids.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ManualCPMAdGroupBids', false, $nst + '.AdGroupBids');
$ref.prop('maxCpm', $nst + '.Bid', 'maxCpm', false, false);

$nso.ManualCPCAdGroupBids = function() {
  $nso.AdGroupBids.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ManualCPCAdGroupBids', false, $nst + '.AdGroupBids');
$ref.prop('keywordMaxCpc', $nst + '.Bid', 'keywordMaxCpc', false, false);
$ref.prop('keywordContentMaxCpc', $nst + '.Bid', 'keywordContentMaxCpc', false, false);
$ref.prop('siteMaxCpc', $nst + '.Bid', 'siteMaxCpc', false, false);
$ref.prop('enhancedCpcEnabled', 'boolean', 'enhancedCpcEnabled', false, true);

$nso.ConversionOptimizerAdGroupBids = function() {
  $nso.AdGroupBids.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ConversionOptimizerAdGroupBids', false, $nst + '.AdGroupBids');
$ref.prop('targetCpa', $nst + '.Bid', 'targetCpa', false, false);
$ref.prop('conversionOptimizerBidType', $nst + '.ConversionOptimizerBidType', 'conversionOptimizerBidType', false, false);
$ref.prop('deduplicationMode', $nst + '.ConversionDeduplicationMode', 'deduplicationMode', false, false);

$nso.BudgetOptimizerAdGroupBids = function() {
  $nso.AdGroupBids.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.BudgetOptimizerAdGroupBids', false, $nst + '.AdGroupBids');
$ref.prop('proxyKeywordMaxCpc', $nst + '.Bid', 'proxyKeywordMaxCpc', false, false);
$ref.prop('proxySiteMaxCpc', $nst + '.Bid', 'proxySiteMaxCpc', false, false);
$ref.prop('enhancedCpcEnabled', 'boolean', 'enhancedCpcEnabled', false, true);

$nso.PercentCPAAdGroupBids = function() {
  $nso.AdGroupBids.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.PercentCPAAdGroupBids', false, $nst + '.AdGroupBids');
$ref.prop('percentCpa', 'integer', 'percentCpa', false, true);

$nso.BiddingTransition = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.BiddingTransition', false, $sot);
$ref.prop('targetBiddingStrategy', $nst + '.BiddingStrategy', 'targetBiddingStrategy', false, false);
$ref.prop('explicitAdGroupBids', $nst + '.AdGroupBids', 'explicitAdGroupBids', false, false);
$ref.prop('biddingTransitionType', 'string', 'BiddingTransition.Type', false, true);

$nso.ConversionOptimizerBiddingTransition = function() {
  $nso.BiddingTransition.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ConversionOptimizerBiddingTransition', false, $nst + '.BiddingTransition');
$ref.prop('useSavedBids', 'boolean', 'useSavedBids', false, true);

$nso.CampaignOperation = function() {
  $nso.Operation.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.CampaignOperation', false, $nst + '.Operation');
$ref.prop('biddingTransition', $nst + '.BiddingTransition', 'biddingTransition', false, false);
$ref.prop('operand', $nst + '.Campaign', 'operand', false, false);

$nso.CampaignPage = function() {
  $nso.Page.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.CampaignPage', false, $nst + '.Page');
$ref.prop('totalBudget', $nst + '.Budget', 'totalBudget', false, false);
$ref.prop('entries', $nst + '.Campaign', 'entries', true, false);

$nso.TargetError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.TargetError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.TargetErrorReason', 'reason', false, false);

$nso.TargetErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.TargetErrorReason', true, $sot);

$nso.TargetErrorReason.AD_SCHEDULE_ADVANCED_INCOMPATIBLE_WITH_CONVERSION_OPTIMIZER = 'AD_SCHEDULE_ADVANCED_INCOMPATIBLE_WITH_CONVERSION_OPTIMIZER';
$nso.TargetErrorReason.AD_SCHEDULE_BID_MULTIPLIER_MALFORMED = 'AD_SCHEDULE_BID_MULTIPLIER_MALFORMED';
$nso.TargetErrorReason.AD_SCHEDULE_BID_MULTIPLIER_TOO_BIG = 'AD_SCHEDULE_BID_MULTIPLIER_TOO_BIG';
$nso.TargetErrorReason.AD_SCHEDULE_BID_MULTIPLIER_TOO_SMALL = 'AD_SCHEDULE_BID_MULTIPLIER_TOO_SMALL';
$nso.TargetErrorReason.AD_SCHEDULE_BID_MULTIPLIER_TOO_MANY_FRACTION_DIGITS = 'AD_SCHEDULE_BID_MULTIPLIER_TOO_MANY_FRACTION_DIGITS';
$nso.TargetErrorReason.AD_SCHEDULE_EXCEEDED_INTERVALS_PER_DAY_LIMIT = 'AD_SCHEDULE_EXCEEDED_INTERVALS_PER_DAY_LIMIT';
$nso.TargetErrorReason.AD_SCHEDULE_EXCEEDS_PAST_END_OF_WEEK = 'AD_SCHEDULE_EXCEEDS_PAST_END_OF_WEEK';
$nso.TargetErrorReason.AD_SCHEDULE_INCOMPATIBILITY = 'AD_SCHEDULE_INCOMPATIBILITY';
$nso.TargetErrorReason.AD_SCHEDULE_INCOMPATIBLE_WITH_BUDGET_OPTIMIZER = 'AD_SCHEDULE_INCOMPATIBLE_WITH_BUDGET_OPTIMIZER';
$nso.TargetErrorReason.AD_SCHEDULE_INTERVAL_CANNOT_SPAN_MULTIPLE_DAYS = 'AD_SCHEDULE_INTERVAL_CANNOT_SPAN_MULTIPLE_DAYS';
$nso.TargetErrorReason.AD_SCHEDULE_INVALID_DAY_OF_THE_WEEK = 'AD_SCHEDULE_INVALID_DAY_OF_THE_WEEK';
$nso.TargetErrorReason.AD_SCHEDULE_INVALID_TIME_INTERVAL = 'AD_SCHEDULE_INVALID_TIME_INTERVAL';
$nso.TargetErrorReason.AD_SCHEDULE_NO_INTERVALS_WHILE_ENABLED = 'AD_SCHEDULE_NO_INTERVALS_WHILE_ENABLED';
$nso.TargetErrorReason.AD_SCHEDULE_NOT_MULTIPLE_OF_15_MINUTES = 'AD_SCHEDULE_NOT_MULTIPLE_OF_15_MINUTES';
$nso.TargetErrorReason.AD_SCHEDULE_TIME_INTERVALS_OVERLAP = 'AD_SCHEDULE_TIME_INTERVALS_OVERLAP';
$nso.TargetErrorReason.CANNOT_EXCLUDE_CITY = 'CANNOT_EXCLUDE_CITY';
$nso.TargetErrorReason.CANNOT_EXCLUDE_IF_NOT_TARGETED = 'CANNOT_EXCLUDE_IF_NOT_TARGETED';
$nso.TargetErrorReason.CANNOT_EXCLUDE_METRO = 'CANNOT_EXCLUDE_METRO';
$nso.TargetErrorReason.CANNOT_EXCLUDE_PROVINCE = 'CANNOT_EXCLUDE_PROVINCE';
$nso.TargetErrorReason.CANNOT_OPT_OUT_GOOGLE_SEARCH_WHILE_BID_TO_POSITION_ENABLE = 'CANNOT_OPT_OUT_GOOGLE_SEARCH_WHILE_BID_TO_POSITION_ENABLE';
$nso.TargetErrorReason.CANNOT_TARGET_AGE_WITHOUT_GENDER = 'CANNOT_TARGET_AGE_WITHOUT_GENDER';
$nso.TargetErrorReason.CANNOT_TARGET_CITY = 'CANNOT_TARGET_CITY';
$nso.TargetErrorReason.CANNOT_TARGET_CONTENT_CONTEXTUAL_WITHOUT_CONTENT_NETWORK = 'CANNOT_TARGET_CONTENT_CONTEXTUAL_WITHOUT_CONTENT_NETWORK';
$nso.TargetErrorReason.CANNOT_TARGET_COUNTRY = 'CANNOT_TARGET_COUNTRY';
$nso.TargetErrorReason.CANNOT_TARGET_COVERAGE = 'CANNOT_TARGET_COVERAGE';
$nso.TargetErrorReason.CANNOT_TARGET_GENDER_WITHOUT_AGE = 'CANNOT_TARGET_GENDER_WITHOUT_AGE';
$nso.TargetErrorReason.CANNOT_TARGET_GOOGLE_SEARCH_FOR_CPM_CAMPAIGN = 'CANNOT_TARGET_GOOGLE_SEARCH_FOR_CPM_CAMPAIGN';
$nso.TargetErrorReason.CANNOT_TARGET_LANGUAGE = 'CANNOT_TARGET_LANGUAGE';
$nso.TargetErrorReason.CANNOT_TARGET_METRO = 'CANNOT_TARGET_METRO';
$nso.TargetErrorReason.CANNOT_TARGET_MOBILE_CARRIER = 'CANNOT_TARGET_MOBILE_CARRIER';
$nso.TargetErrorReason.CANNOT_TARGET_PROVINCE = 'CANNOT_TARGET_PROVINCE';
$nso.TargetErrorReason.CANNOT_TARGET_SEARCH_SYNDICATION_WITHOUT_GOOGLE_SEARCH = 'CANNOT_TARGET_SEARCH_SYNDICATION_WITHOUT_GOOGLE_SEARCH';
$nso.TargetErrorReason.CANNOT_TARGET_SYNDICATABLE_TYPES = 'CANNOT_TARGET_SYNDICATABLE_TYPES';
$nso.TargetErrorReason.CANNOT_TARGET_THE_SAME_TARGET_LIST_TYPE_MULTIPLE_TIMES = 'CANNOT_TARGET_THE_SAME_TARGET_LIST_TYPE_MULTIPLE_TIMES';
$nso.TargetErrorReason.DEMOGRAPHIC_BID_MODIFIER_SHOULD_BE_IN_BETWEEN_0_AND_500 = 'DEMOGRAPHIC_BID_MODIFIER_SHOULD_BE_IN_BETWEEN_0_AND_500';
$nso.TargetErrorReason.INVALID_CITY_CODE = 'INVALID_CITY_CODE';
$nso.TargetErrorReason.INVALID_CITYNAME_LENGTH = 'INVALID_CITYNAME_LENGTH';
$nso.TargetErrorReason.INVALID_EXCLUDED_POLYGON_TARGET = 'INVALID_EXCLUDED_POLYGON_TARGET';
$nso.TargetErrorReason.INVALID_EXCLUDED_PROXIMITY_TARGET = 'INVALID_EXCLUDED_PROXIMITY_TARGET';
$nso.TargetErrorReason.INVALID_LANGUAGE_CODE = 'INVALID_LANGUAGE_CODE';
$nso.TargetErrorReason.INVALID_LATITUDE = 'INVALID_LATITUDE';
$nso.TargetErrorReason.INVALID_LONGITUDE = 'INVALID_LONGITUDE';
$nso.TargetErrorReason.INVALID_METRO_CODE = 'INVALID_METRO_CODE';
$nso.TargetErrorReason.INVALID_MOBILE_CARRIER = 'INVALID_MOBILE_CARRIER';
$nso.TargetErrorReason.INVALID_MOBILE_PLATFORM = 'INVALID_MOBILE_PLATFORM';
$nso.TargetErrorReason.INVALID_POSTALCODE_LENGTH = 'INVALID_POSTALCODE_LENGTH';
$nso.TargetErrorReason.INVALID_PROVINCE_CODE = 'INVALID_PROVINCE_CODE';
$nso.TargetErrorReason.INVALID_PROXIMITY_RADIUS = 'INVALID_PROXIMITY_RADIUS';
$nso.TargetErrorReason.INVALID_REGIONCODE_LENGTH = 'INVALID_REGIONCODE_LENGTH';
$nso.TargetErrorReason.INVALID_REGIONNAME_LENGTH = 'INVALID_REGIONNAME_LENGTH';
$nso.TargetErrorReason.INVALID_STREETADDRESS_LENGTH = 'INVALID_STREETADDRESS_LENGTH';
$nso.TargetErrorReason.MULTIPLE_OCCURRENCES_OF_SAME_TARGET = 'MULTIPLE_OCCURRENCES_OF_SAME_TARGET';
$nso.TargetErrorReason.POLYGON_DUPLICATE_VERTICES = 'POLYGON_DUPLICATE_VERTICES';
$nso.TargetErrorReason.POLYGON_EDGES_INTERSECT = 'POLYGON_EDGES_INTERSECT';
$nso.TargetErrorReason.POLYGON_TOO_FEW_VERTICES = 'POLYGON_TOO_FEW_VERTICES';
$nso.TargetErrorReason.POLYGON_TOO_MANY_VERTICES = 'POLYGON_TOO_MANY_VERTICES';
$nso.TargetErrorReason.POLYGON_TOO_LARGE = 'POLYGON_TOO_LARGE';
$nso.TargetErrorReason.TARGET_IS_ENCLOSED_BY_ANOTHER_TARGET = 'TARGET_IS_ENCLOSED_BY_ANOTHER_TARGET';
$nso.TargetErrorReason.TARGET_IS_EXCLUDED_BY_ANOTHER_TARGET = 'TARGET_IS_EXCLUDED_BY_ANOTHER_TARGET';
$nso.TargetErrorReason.TARGETING_VALIDATION_FAILED = 'TARGETING_VALIDATION_FAILED';
$nso.TargetErrorReason.TARGETING_CROSS_COUNTRY_REGIONAL = 'TARGETING_CROSS_COUNTRY_REGIONAL';
$nso.TargetErrorReason.TARGETING_EXCLUSION_NOT_SUPPORTED = 'TARGETING_EXCLUSION_NOT_SUPPORTED';
$nso.TargetErrorReason.TARGETING_INCOMPATIBLE_LOCATION_TYPES = 'TARGETING_INCOMPATIBLE_LOCATION_TYPES';
$nso.TargetErrorReason.TARGETING_NOT_SUPPORTED = 'TARGETING_NOT_SUPPORTED';
$nso.TargetErrorReason.TARGETING_TOO_MANY_REGIONS = 'TARGETING_TOO_MANY_REGIONS';
$nso.TargetErrorReason.TOO_MANY_EXCLUDED_LOCATIONS = 'TOO_MANY_EXCLUDED_LOCATIONS';
$nso.TargetErrorReason.TOO_MANY_TARGETED_LOCATIONS = 'TOO_MANY_TARGETED_LOCATIONS';
$nso.TargetErrorReason.WARNING_MAY_NOW_REQUIRE_CHINESE_APPROVAL = 'WARNING_MAY_NOW_REQUIRE_CHINESE_APPROVAL';
$nso.TargetErrorReason.WARNING_NOW_REQUIRES_CHINESE_APPROVAL = 'WARNING_NOW_REQUIRES_CHINESE_APPROVAL';
$nso.TargetErrorReason.WARNING_NOW_TARGETS_CHINA = 'WARNING_NOW_TARGETS_CHINA';
$nso.TargetErrorReason.WARNING_NOW_TARGETS_CHINESE = 'WARNING_NOW_TARGETS_CHINESE';
$nso.TargetErrorReason.TARGET_ERROR = 'TARGET_ERROR';

$nso.StringLengthError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.StringLengthError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.StringLengthErrorReason', 'reason', false, false);

$nso.StringLengthErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.StringLengthErrorReason', true, $sot);

$nso.StringLengthErrorReason.TOO_SHORT = 'TOO_SHORT';
$nso.StringLengthErrorReason.TOO_LONG = 'TOO_LONG';

$nso.StatsQueryError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.StatsQueryError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.StatsQueryErrorReason', 'reason', false, false);

$nso.StatsQueryErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.StatsQueryErrorReason', true, $sot);

$nso.StatsQueryErrorReason.DATE_NOT_IN_VALID_RANGE = 'DATE_NOT_IN_VALID_RANGE';

$nso.SettingError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.SettingError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.SettingErrorReason', 'reason', false, false);

$nso.SettingErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.SettingErrorReason', true, $sot);

$nso.SettingErrorReason.DUPLICATE_SETTING_TYPE = 'DUPLICATE_SETTING_TYPE';
$nso.SettingErrorReason.SETTING_TYPE_IS_NOT_AVAILABLE = 'SETTING_TYPE_IS_NOT_AVAILABLE';
$nso.SettingErrorReason.SETTING_TYPE_IS_NOT_COMPATIBLE_WITH_CAMPAIGN = 'SETTING_TYPE_IS_NOT_COMPATIBLE_WITH_CAMPAIGN';
$nso.SettingErrorReason.UNKNOWN = 'UNKNOWN';

$nso.RejectedError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.RejectedError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.RejectedErrorReason', 'reason', false, false);

$nso.RejectedErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.RejectedErrorReason', true, $sot);

$nso.RejectedErrorReason.UNKNOWN_VALUE = 'UNKNOWN_VALUE';

$nso.QuotaError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.QuotaError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.QuotaErrorReason', 'reason', false, false);
$ref.prop('limit', 'integer', 'limit', false, true);

$nso.QuotaErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.QuotaErrorReason', true, $sot);

$nso.QuotaErrorReason.TOO_MANY_ADGROUPS_PER_CAMPAIGN = 'TOO_MANY_ADGROUPS_PER_CAMPAIGN';
$nso.QuotaErrorReason.TOO_MANY_CAMPAIGNS_PER_ACCOUNT = 'TOO_MANY_CAMPAIGNS_PER_ACCOUNT';
$nso.QuotaErrorReason.TOO_MANY_CONVERSION_TYPES_PER_ACCOUNT = 'TOO_MANY_CONVERSION_TYPES_PER_ACCOUNT';
$nso.QuotaErrorReason.TOO_MANY_KEYWORDS_PER_ADGROUP = 'TOO_MANY_KEYWORDS_PER_ADGROUP';
$nso.QuotaErrorReason.TOO_MANY_KEYWORDS_PER_CAMPAIGN = 'TOO_MANY_KEYWORDS_PER_CAMPAIGN';
$nso.QuotaErrorReason.TOO_MANY_KEYWORDS_PER_CUSTOMER = 'TOO_MANY_KEYWORDS_PER_CUSTOMER';
$nso.QuotaErrorReason.TOO_MANY_SITES_PER_ADGROUP = 'TOO_MANY_SITES_PER_ADGROUP';
$nso.QuotaErrorReason.TOO_MANY_SITES_PER_CAMPAIGN = 'TOO_MANY_SITES_PER_CAMPAIGN';
$nso.QuotaErrorReason.TOO_MANY_CRITERIA_PER_ACCOUNT = 'TOO_MANY_CRITERIA_PER_ACCOUNT';
$nso.QuotaErrorReason.UNKNOWN = 'UNKNOWN';

$nso.DateError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.DateError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.DateErrorReason', 'reason', false, false);

$nso.DateErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.DateErrorReason', true, $sot);

$nso.DateErrorReason.INVALID_FIELD_VALUES_IN_DATE = 'INVALID_FIELD_VALUES_IN_DATE';
$nso.DateErrorReason.INVALID_STRING_DATE = 'INVALID_STRING_DATE';
$nso.DateErrorReason.INVALID_STRING_DATE_RANGE = 'INVALID_STRING_DATE_RANGE';
$nso.DateErrorReason.INVALID_STRING_DATE_TIME = 'INVALID_STRING_DATE_TIME';
$nso.DateErrorReason.EARLIER_THAN_MINIMUM_DATE = 'EARLIER_THAN_MINIMUM_DATE';
$nso.DateErrorReason.LATER_THAN_MAXIMUM_DATE = 'LATER_THAN_MAXIMUM_DATE';
$nso.DateErrorReason.DATE_RANGE_MINIMUM_DATE_LATER_THAN_MAXIMUM_DATE = 'DATE_RANGE_MINIMUM_DATE_LATER_THAN_MAXIMUM_DATE';
$nso.DateErrorReason.DATE_RANGE_MINIMUM_AND_MAXIMUM_DATES_BOTH_NULL = 'DATE_RANGE_MINIMUM_AND_MAXIMUM_DATES_BOTH_NULL';

$nso.CampaignError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.CampaignError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.CampaignErrorReason', 'reason', false, false);

$nso.CampaignErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.CampaignErrorReason', true, $sot);

$nso.CampaignErrorReason.AFTER_MAXIMUM_ALLOWABLE_DATE = 'AFTER_MAXIMUM_ALLOWABLE_DATE';
$nso.CampaignErrorReason.CANNOT_GO_BACK_TO_INCOMPLETE = 'CANNOT_GO_BACK_TO_INCOMPLETE';
$nso.CampaignErrorReason.CANNOT_MODIFY_START_DATE_IF_ALREADY_STARTED = 'CANNOT_MODIFY_START_DATE_IF_ALREADY_STARTED';
$nso.CampaignErrorReason.CANNOT_SET_ACCELERATED_DELIVERY_FOR_BUDGET_OPTIMIZER_CAMPAIGN = 'CANNOT_SET_ACCELERATED_DELIVERY_FOR_BUDGET_OPTIMIZER_CAMPAIGN';
$nso.CampaignErrorReason.CANNOT_SET_DATE_TO_PAST = 'CANNOT_SET_DATE_TO_PAST';
$nso.CampaignErrorReason.CANNOT_SET_POSITION_PREFERENCE_IF_NOT_SEARCH_TARGETED = 'CANNOT_SET_POSITION_PREFERENCE_IF_NOT_SEARCH_TARGETED';
$nso.CampaignErrorReason.CURRENCY_NOT_VALID_FOR_ACCOUNT = 'CURRENCY_NOT_VALID_FOR_ACCOUNT';
$nso.CampaignErrorReason.DUPLICATE_CAMPAIGN_NAME = 'DUPLICATE_CAMPAIGN_NAME';
$nso.CampaignErrorReason.INCOMPATIBLE_CAMPAIGN_FIELD = 'INCOMPATIBLE_CAMPAIGN_FIELD';
$nso.CampaignErrorReason.INVALID_CAMPAIGN_NAME = 'INVALID_CAMPAIGN_NAME';
$nso.CampaignErrorReason.INVALID_AD_SERVING_OPTIMIZATION_STATUS = 'INVALID_AD_SERVING_OPTIMIZATION_STATUS';
$nso.CampaignErrorReason.KEYWORD_QUOTA_EXCEEDED = 'KEYWORD_QUOTA_EXCEEDED';
$nso.CampaignErrorReason.MAX_IMPRESSIONS_NOT_IN_RANGE = 'MAX_IMPRESSIONS_NOT_IN_RANGE';
$nso.CampaignErrorReason.START_DATE_AFTER_END_DATE = 'START_DATE_AFTER_END_DATE';
$nso.CampaignErrorReason.TIME_UNIT_NOT_SUPPORTED = 'TIME_UNIT_NOT_SUPPORTED';
$nso.CampaignErrorReason.USE_BIDDING_TRANSITION_FIELD_INSTEAD_TO_SWITCH_BIDDING_STRATEGY = 'USE_BIDDING_TRANSITION_FIELD_INSTEAD_TO_SWITCH_BIDDING_STRATEGY';
$nso.CampaignErrorReason.CANNOT_CHANGE_CAMPAIGN_TYPE = 'CANNOT_CHANGE_CAMPAIGN_TYPE';
$nso.CampaignErrorReason.INVALID_OPERATION_IF_SERVING_STATUS_HAS_ENDED = 'INVALID_OPERATION_IF_SERVING_STATUS_HAS_ENDED';
$nso.CampaignErrorReason.CANNOT_CHANGE_TV_CAMPAIGN = 'CANNOT_CHANGE_TV_CAMPAIGN';
$nso.CampaignErrorReason.CANNOT_ADD_CAMPAIGN_WITH_CONVERSION_OPTIMIZER_BIDDING_STRATEGY = 'CANNOT_ADD_CAMPAIGN_WITH_CONVERSION_OPTIMIZER_BIDDING_STRATEGY';
$nso.CampaignErrorReason.FREQUENCY_CAP_TIME_UNIT_CANNOT_BE_NULL = 'FREQUENCY_CAP_TIME_UNIT_CANNOT_BE_NULL';
$nso.CampaignErrorReason.FREQUENCY_CAP_LEVEL_CANNOT_BE_NULL = 'FREQUENCY_CAP_LEVEL_CANNOT_BE_NULL';
$nso.CampaignErrorReason.CANNOT_SET_BUDGET = 'CANNOT_SET_BUDGET';
$nso.CampaignErrorReason.UNKNOWN = 'UNKNOWN';

$nso.BudgetError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.BudgetError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.BudgetErrorReason', 'reason', false, false);

$nso.BudgetErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.BudgetErrorReason', true, $sot);

$nso.BudgetErrorReason.BUDGET_ERROR = 'BUDGET_ERROR';
$nso.BudgetErrorReason.BUDGET_PERIOD_NOT_AVAILABLE = 'BUDGET_PERIOD_NOT_AVAILABLE';
$nso.BudgetErrorReason.MONEY_AMOUNT_IN_WRONG_CURRENCY = 'MONEY_AMOUNT_IN_WRONG_CURRENCY';
$nso.BudgetErrorReason.MONEY_AMOUNT_LESS_THAN_CURRENCY_MINIMUM_CPC = 'MONEY_AMOUNT_LESS_THAN_CURRENCY_MINIMUM_CPC';
$nso.BudgetErrorReason.MONEY_AMOUNT_LESS_THAN_MAXIMUM_AD_GROUP_CPM = 'MONEY_AMOUNT_LESS_THAN_MAXIMUM_AD_GROUP_CPM';
$nso.BudgetErrorReason.MONEY_AMOUNT_LESS_THAN_MAXIMUM_SITE_CPM = 'MONEY_AMOUNT_LESS_THAN_MAXIMUM_SITE_CPM';
$nso.BudgetErrorReason.MONEY_AMOUNT_LESS_THAN_MINIMUM_AD_GROUP_CPC = 'MONEY_AMOUNT_LESS_THAN_MINIMUM_AD_GROUP_CPC';
$nso.BudgetErrorReason.MONEY_AMOUNT_LESS_THAN_MINIMUM_CRITERIA_CPC = 'MONEY_AMOUNT_LESS_THAN_MINIMUM_CRITERIA_CPC';
$nso.BudgetErrorReason.MONEY_AMOUNT_TOO_LARGE = 'MONEY_AMOUNT_TOO_LARGE';
$nso.BudgetErrorReason.NEGATIVE_MONEY_AMOUNT = 'NEGATIVE_MONEY_AMOUNT';
$nso.BudgetErrorReason.NON_MULTIPLE_OF_MINIMUM_CURRENCY_UNIT = 'NON_MULTIPLE_OF_MINIMUM_CURRENCY_UNIT';
$nso.BudgetErrorReason.INVALID_BUDGET_SCHEDULE = 'INVALID_BUDGET_SCHEDULE';

$nso.BiddingTransitionError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.BiddingTransitionError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.BiddingTransitionErrorReason', 'reason', false, false);

$nso.BiddingTransitionErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.BiddingTransitionErrorReason', true, $sot);

$nso.BiddingTransitionErrorReason.BID_TO_POSITION_ENABLED = 'BID_TO_POSITION_ENABLED';
$nso.BiddingTransitionErrorReason.BIDDING_STRATEGY_NOT_AVAILABLE_FOR_ACCOUNT_TYPE = 'BIDDING_STRATEGY_NOT_AVAILABLE_FOR_ACCOUNT_TYPE';
$nso.BiddingTransitionErrorReason.BUDGET_OPTIMIZER_IS_ENABLED = 'BUDGET_OPTIMIZER_IS_ENABLED';
$nso.BiddingTransitionErrorReason.CONVERSION_OPTIMIZER_IS_ENABLED = 'CONVERSION_OPTIMIZER_IS_ENABLED';
$nso.BiddingTransitionErrorReason.CONVERSION_TRACKING_NOT_ENABLED = 'CONVERSION_TRACKING_NOT_ENABLED';
$nso.BiddingTransitionErrorReason.CONVERSION_TRACKING_NOT_AVAILABLE_FOR_ACCOUNT_TYPE = 'CONVERSION_TRACKING_NOT_AVAILABLE_FOR_ACCOUNT_TYPE';
$nso.BiddingTransitionErrorReason.USE_POSITION_PREFERENCE_IN_MANUALCPC_INSTEAD_TO_DISABLE_POSITION_PREFERENCE = 'USE_POSITION_PREFERENCE_IN_MANUALCPC_INSTEAD_TO_DISABLE_POSITION_PREFERENCE';
$nso.BiddingTransitionErrorReason.INVALID_BID = 'INVALID_BID';
$nso.BiddingTransitionErrorReason.CANNOT_SET_EXPLICIT_BID = 'CANNOT_SET_EXPLICIT_BID';
$nso.BiddingTransitionErrorReason.EXPLICIT_BID_REQUIRED_FOR_TRANSITION = 'EXPLICIT_BID_REQUIRED_FOR_TRANSITION';
$nso.BiddingTransitionErrorReason.EXPLICIT_BID_TYPE_DOES_NOT_MATCH_CAMPAIGN_BIDDING_STRATEGY = 'EXPLICIT_BID_TYPE_DOES_NOT_MATCH_CAMPAIGN_BIDDING_STRATEGY';
$nso.BiddingTransitionErrorReason.MISSING_REQUIRED_BID = 'MISSING_REQUIRED_BID';
$nso.BiddingTransitionErrorReason.INVALID_STATUS = 'INVALID_STATUS';
$nso.BiddingTransitionErrorReason.IS_CPM_CAMPAIGN = 'IS_CPM_CAMPAIGN';
$nso.BiddingTransitionErrorReason.IS_PERCENT_CPA_CAMPAIGN = 'IS_PERCENT_CPA_CAMPAIGN';
$nso.BiddingTransitionErrorReason.NOT_THE_PREVIOUS_BIDDING_STRATEGY = 'NOT_THE_PREVIOUS_BIDDING_STRATEGY';
$nso.BiddingTransitionErrorReason.NOT_ENOUGH_CONVERSION_DATA = 'NOT_ENOUGH_CONVERSION_DATA';
$nso.BiddingTransitionErrorReason.NOT_ENOUGH_CONVERSIONS = 'NOT_ENOUGH_CONVERSIONS';
$nso.BiddingTransitionErrorReason.OPTED_IN_SEARCH = 'OPTED_IN_SEARCH';
$nso.BiddingTransitionErrorReason.PROXY_BIDDING_ON = 'PROXY_BIDDING_ON';
$nso.BiddingTransitionErrorReason.SITE_REMNANT_RESERVATION_ALLOWED = 'SITE_REMNANT_RESERVATION_ALLOWED';
$nso.BiddingTransitionErrorReason.TRANSITION_TO_ITSELF = 'TRANSITION_TO_ITSELF';
$nso.BiddingTransitionErrorReason.UNKNOWN_BIDDING_STRATEGY = 'UNKNOWN_BIDDING_STRATEGY';
$nso.BiddingTransitionErrorReason.UNSUPPORTED_TRANSITION = 'UNSUPPORTED_TRANSITION';
$nso.BiddingTransitionErrorReason.VCG_ENABLED = 'VCG_ENABLED';
$nso.BiddingTransitionErrorReason.BIDDING_TRANSITION_FAILED = 'BIDDING_TRANSITION_FAILED';
$nso.BiddingTransitionErrorReason.ACCELERATED_DELIVERY_NOT_SUPPORTED_FOR_BUDGET_OPTIMIZER = 'ACCELERATED_DELIVERY_NOT_SUPPORTED_FOR_BUDGET_OPTIMIZER';
$nso.BiddingTransitionErrorReason.HAS_ACTIVE_EXPERIMENT = 'HAS_ACTIVE_EXPERIMENT';
$nso.BiddingTransitionErrorReason.INCOMPATIBLE_WITH_CAMPAIGN_SETTING = 'INCOMPATIBLE_WITH_CAMPAIGN_SETTING';

$nso.BiddingError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.BiddingError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.BiddingErrorReason', 'reason', false, false);

$nso.BiddingErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.BiddingErrorReason', true, $sot);

$nso.BiddingErrorReason.BID_AMOUNT_REQUIRED = 'BID_AMOUNT_REQUIRED';
$nso.BiddingErrorReason.BID_INCOMPATIBLE_WITH_ADGROUP = 'BID_INCOMPATIBLE_WITH_ADGROUP';
$nso.BiddingErrorReason.BID_UNIVERSAL_CRITERIA_EXPECTED = 'BID_UNIVERSAL_CRITERIA_EXPECTED';
$nso.BiddingErrorReason.BIDS_DO_NOT_FULFILL_SPEC = 'BIDS_DO_NOT_FULFILL_SPEC';
$nso.BiddingErrorReason.BID_TOO_SMALL = 'BID_TOO_SMALL';
$nso.BiddingErrorReason.BID_TOO_BIG = 'BID_TOO_BIG';
$nso.BiddingErrorReason.BID_TOO_MANY_FRACTIONAL_DIGITS = 'BID_TOO_MANY_FRACTIONAL_DIGITS';
$nso.BiddingErrorReason.NETWORK_NOT_OVERRIDEABLE = 'NETWORK_NOT_OVERRIDEABLE';
$nso.BiddingErrorReason.NON_POSITIVE_BID = 'NON_POSITIVE_BID';
$nso.BiddingErrorReason.CURRENCY_MISMATCH = 'CURRENCY_MISMATCH';
$nso.BiddingErrorReason.BID_TOO_HIGH_FOR_DAILY_BUDGET = 'BID_TOO_HIGH_FOR_DAILY_BUDGET';
$nso.BiddingErrorReason.BID_TOO_HIGH_FOR_MONTHLY_BUDGET = 'BID_TOO_HIGH_FOR_MONTHLY_BUDGET';
$nso.BiddingErrorReason.ADGROUPS_DO_NOT_MATCH_CONSTRAINT = 'ADGROUPS_DO_NOT_MATCH_CONSTRAINT';
$nso.BiddingErrorReason.NETWORK_SETTINGS_DO_NOT_SUPPORT_TRANSITION = 'NETWORK_SETTINGS_DO_NOT_SUPPORT_TRANSITION';
$nso.BiddingErrorReason.UNSUPPORTED_STYLE_TRANSITION = 'UNSUPPORTED_STYLE_TRANSITION';
$nso.BiddingErrorReason.UNSUPPORTED_PROXY_BIDDER_STRATEGY_TRANSITION = 'UNSUPPORTED_PROXY_BIDDER_STRATEGY_TRANSITION';
$nso.BiddingErrorReason.TRANSITION_DOES_NOT_SUPPORT_OPTION = 'TRANSITION_DOES_NOT_SUPPORT_OPTION';
$nso.BiddingErrorReason.TRANSITION_DOES_NOT_SUPPORT_GOAL = 'TRANSITION_DOES_NOT_SUPPORT_GOAL';
$nso.BiddingErrorReason.PROXY_BIDDER_STRATEGY_INCOMPATIBLE_WITH_STYLE = 'PROXY_BIDDER_STRATEGY_INCOMPATIBLE_WITH_STYLE';
$nso.BiddingErrorReason.GOAL_DOES_NOT_FULFILL_SPEC = 'GOAL_DOES_NOT_FULFILL_SPEC';
$nso.BiddingErrorReason.GOAL_VALIDATION_FAILED = 'GOAL_VALIDATION_FAILED';
$nso.BiddingErrorReason.UNSUPPORTED_STYLE = 'UNSUPPORTED_STYLE';
$nso.BiddingErrorReason.BAD_BID_COMBINATION = 'BAD_BID_COMBINATION';
$nso.BiddingErrorReason.CANNOT_TARGET_UNIVERSE = 'CANNOT_TARGET_UNIVERSE';
$nso.BiddingErrorReason.NO_DESTINATION_URL_SPECIFIED = 'NO_DESTINATION_URL_SPECIFIED';
$nso.BiddingErrorReason.NO_EFFECTIVE_BID = 'NO_EFFECTIVE_BID';
$nso.BiddingErrorReason.CRITERION_NOT_TARGETED = 'CRITERION_NOT_TARGETED';
$nso.BiddingErrorReason.CANNOT_EXCLUDE_DEFAULT = 'CANNOT_EXCLUDE_DEFAULT';
$nso.BiddingErrorReason.CANNOT_TARGET_AND_EXCLUDE = 'CANNOT_TARGET_AND_EXCLUDE';
$nso.BiddingErrorReason.ILLEGAL_URL = 'ILLEGAL_URL';
$nso.BiddingErrorReason.BID_TO_POSITION_NOT_ENABLED = 'BID_TO_POSITION_NOT_ENABLED';
$nso.BiddingErrorReason.POSITION_PREFERENCE_NOT_ENABLED = 'POSITION_PREFERENCE_NOT_ENABLED';
$nso.BiddingErrorReason.POSITION_PREFERENCE_NOT_SUPPORTED_FOR_CRITERIA_TYPE = 'POSITION_PREFERENCE_NOT_SUPPORTED_FOR_CRITERIA_TYPE';
$nso.BiddingErrorReason.PREFERRED_POSITION_OUT_OF_RANGE = 'PREFERRED_POSITION_OUT_OF_RANGE';
$nso.BiddingErrorReason.BOTTOM_POSITION_OUT_OF_RANGE = 'BOTTOM_POSITION_OUT_OF_RANGE';
$nso.BiddingErrorReason.PREFERRED_POSITION_CANNOT_BE_HIGHER_THAN_BOTTOM = 'PREFERRED_POSITION_CANNOT_BE_HIGHER_THAN_BOTTOM';
$nso.BiddingErrorReason.CAMPAIGN_ALREADY_SET = 'CAMPAIGN_ALREADY_SET';
$nso.BiddingErrorReason.PROXY_NOT_ENABLED = 'PROXY_NOT_ENABLED';
$nso.BiddingErrorReason.CANNOT_UPDATE_SITE_BIDS_WHILE_PROXY_BIDDING = 'CANNOT_UPDATE_SITE_BIDS_WHILE_PROXY_BIDDING';
$nso.BiddingErrorReason.MUST_EXCLUDE_0_TO_17_WITH_OTHER_AGE_EXCLUSIONS = 'MUST_EXCLUDE_0_TO_17_WITH_OTHER_AGE_EXCLUSIONS';
$nso.BiddingErrorReason.AUCTION_STRATEGY_INCOMPATIBLE_WITH_PROXY_BIDDER = 'AUCTION_STRATEGY_INCOMPATIBLE_WITH_PROXY_BIDDER';
$nso.BiddingErrorReason.CAMPAIGN_MUST_HAVE_A_BUDGET_TO_ENABLE_BUDGET_OPTIMIZER = 'CAMPAIGN_MUST_HAVE_A_BUDGET_TO_ENABLE_BUDGET_OPTIMIZER';
$nso.BiddingErrorReason.CANNOT_SET_CONTENT_BID_WITHOUT_SETTING_KEYWORD_MAX_CPC_AS_WELL = 'CANNOT_SET_CONTENT_BID_WITHOUT_SETTING_KEYWORD_MAX_CPC_AS_WELL';
$nso.BiddingErrorReason.CANNOT_CREATE_CAMPAIGN_WITH_CONVERSION_OPTIMIZER = 'CANNOT_CREATE_CAMPAIGN_WITH_CONVERSION_OPTIMIZER';
$nso.BiddingErrorReason.PAY_PER_CONVERSION_NOT_AVAILABLE_FOR_CUSTOMER = 'PAY_PER_CONVERSION_NOT_AVAILABLE_FOR_CUSTOMER';
$nso.BiddingErrorReason.PAY_PER_CONVERSION_NOT_ALLOWED_WITH_TARGET_CPA = 'PAY_PER_CONVERSION_NOT_ALLOWED_WITH_TARGET_CPA';
$nso.BiddingErrorReason.PAY_PER_CONVERSION_NOT_ALLOWED_WITH_MANY_PER_CLICK = 'PAY_PER_CONVERSION_NOT_ALLOWED_WITH_MANY_PER_CLICK';
$nso.BiddingErrorReason.TARGET_CPA_NOT_AVAILABLE_FOR_CUSTOMER = 'TARGET_CPA_NOT_AVAILABLE_FOR_CUSTOMER';
$nso.BiddingErrorReason.MANY_PER_CLICK_NOT_AVAILABLE_FOR_CUSTOMER = 'MANY_PER_CLICK_NOT_AVAILABLE_FOR_CUSTOMER';
$nso.BiddingErrorReason.CANNOT_SET_SITE_MAX_CPC = 'CANNOT_SET_SITE_MAX_CPC';
$nso.BiddingErrorReason.BID_ERROR = 'BID_ERROR';

$nso.CampaignTargetService = function() {
  $sso.call(this);
  this.nametable_ = new google.ads.adwords.v201101.SoapNametable();
};

$ref = $dsf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.CampaignTargetService');
$ref.prop('requestHeader', $nst + '.RequestHeader', 'RequestHeader', false, false);
$ref.prop('responseHeader', $nst + '.ResponseHeader', 'ResponseHeader', false, false);
$ref.meth(
  'get',
  'https://adwords.google.com/api/adwords/cm/v201101',
  'https://adwords.google.com/api/adwords/cm/v201101',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.CampaignTargetPage', isArray: false, isSystem: false},
  [{propertyName: 'responseHeader', direction: 'out'}, {propertyName: 'requestHeader', direction: 'in'}],
  [{className: $nst + '.CampaignTargetSelector', isArray: false, isSystem: false, name: 'selector', xmlElementName: 'selector'}]
);
$ref.meth(
  'mutate',
  'https://adwords.google.com/api/adwords/cm/v201101',
  'https://adwords.google.com/api/adwords/cm/v201101',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.CampaignTargetReturnValue', isArray: false, isSystem: false},
  [{propertyName: 'responseHeader', direction: 'out'}, {propertyName: 'requestHeader', direction: 'in'}],
  [{className: $nst + '.CampaignTargetOperation', isArray: true, isSystem: false, name: 'operations', xmlElementName: 'operations'}]
);

$nso.CampaignTargetService.prototype.get = function(selector, onsuccess, onfailure) {
  this.invoke.call(this, 'get', [selector], onsuccess, onfailure);
};

$nso.CampaignTargetService.prototype.mutate = function(operations, onsuccess, onfailure) {
  this.invoke.call(this, 'mutate', [operations], onsuccess, onfailure);
};

$nso.CampaignTargetReturnValue = function() {
  $nso.ListReturnValue.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.CampaignTargetReturnValue', false, $nst + '.ListReturnValue');
$ref.prop('value', $nst + '.TargetList', 'value', true, false);

$nso.TargetList = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.TargetList', false, $sot);
$ref.prop('campaignId', 'integer', 'campaignId', false, true);
$ref.prop('targetListType', 'string', 'TargetList.Type', false, true);

$nso.PlatformTargetList = function() {
  $nso.TargetList.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.PlatformTargetList', false, $nst + '.TargetList');
$ref.prop('targets', $nst + '.PlatformTarget', 'targets', true, false);

$nso.PlatformType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.PlatformType', true, $sot);

$nso.PlatformType.DESKTOP = 'DESKTOP';
$nso.PlatformType.HIGH_END_MOBILE = 'HIGH_END_MOBILE';
$nso.PlatformType.UNKNOWN = 'UNKNOWN';

$nso.Target = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.Target', false, $sot);
$ref.prop('targetType', 'string', 'Target.Type', false, true);

$nso.GeoTarget = function() {
  $nso.Target.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.GeoTarget', false, $nst + '.Target');
$ref.prop('excluded', 'boolean', 'excluded', false, true);

$nso.ProximityTarget = function() {
  $nso.GeoTarget.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ProximityTarget', false, $nst + '.GeoTarget');
$ref.prop('geoPoint', $nst + '.GeoPoint', 'geoPoint', false, false);
$ref.prop('radiusDistanceUnits', $nst + '.ProximityTargetDistanceUnits', 'radiusDistanceUnits', false, false);
$ref.prop('radiusInUnits', 'double', 'radiusInUnits', false, true);
$ref.prop('address', $nst + '.Address', 'address', false, false);
$ref.prop('allowServiceOfAddress', 'boolean', 'allowServiceOfAddress', false, true);

$nso.GeoPoint = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.GeoPoint', false, $sot);
$ref.prop('latitudeInMicroDegrees', 'integer', 'latitudeInMicroDegrees', false, true);
$ref.prop('longitudeInMicroDegrees', 'integer', 'longitudeInMicroDegrees', false, true);

$nso.ProximityTargetDistanceUnits = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ProximityTargetDistanceUnits', true, $sot);

$nso.ProximityTargetDistanceUnits.KILOMETERS = 'KILOMETERS';
$nso.ProximityTargetDistanceUnits.MILES = 'MILES';

$nso.Address = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.Address', false, $sot);
$ref.prop('streetAddress', 'string', 'streetAddress', false, true);
$ref.prop('streetAddress2', 'string', 'streetAddress2', false, true);
$ref.prop('cityName', 'string', 'cityName', false, true);
$ref.prop('provinceCode', 'string', 'provinceCode', false, true);
$ref.prop('provinceName', 'string', 'provinceName', false, true);
$ref.prop('postalCode', 'string', 'postalCode', false, true);
$ref.prop('countryCode', 'string', 'countryCode', false, true);

$nso.ProvinceTarget = function() {
  $nso.GeoTarget.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ProvinceTarget', false, $nst + '.GeoTarget');
$ref.prop('provinceCode', 'string', 'provinceCode', false, true);

$nso.PolygonTarget = function() {
  $nso.GeoTarget.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.PolygonTarget', false, $nst + '.GeoTarget');
$ref.prop('vertices', $nst + '.GeoPoint', 'vertices', true, false);

$nso.MetroTarget = function() {
  $nso.GeoTarget.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.MetroTarget', false, $nst + '.GeoTarget');
$ref.prop('metroCode', 'string', 'metroCode', false, true);

$nso.CountryTarget = function() {
  $nso.GeoTarget.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.CountryTarget', false, $nst + '.GeoTarget');
$ref.prop('countryCode', 'string', 'countryCode', false, true);

$nso.CityTarget = function() {
  $nso.GeoTarget.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.CityTarget', false, $nst + '.GeoTarget');
$ref.prop('cityName', 'string', 'cityName', false, true);
$ref.prop('provinceCode', 'string', 'provinceCode', false, true);
$ref.prop('countryCode', 'string', 'countryCode', false, true);

$nso.DemographicTarget = function() {
  $nso.Target.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.DemographicTarget', false, $nst + '.Target');
$ref.prop('bidModifier', 'integer', 'bidModifier', false, true);

$nso.GenderTarget = function() {
  $nso.DemographicTarget.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.GenderTarget', false, $nst + '.DemographicTarget');
$ref.prop('gender', $nst + '.GenderTargetGender', 'gender', false, false);

$nso.GenderTargetGender = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.GenderTargetGender', true, $sot);

$nso.GenderTargetGender.MALE = 'MALE';
$nso.GenderTargetGender.FEMALE = 'FEMALE';

$nso.AgeTarget = function() {
  $nso.DemographicTarget.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AgeTarget', false, $nst + '.DemographicTarget');
$ref.prop('age', $nst + '.AgeTargetAge', 'age', false, false);

$nso.AgeTargetAge = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AgeTargetAge', true, $sot);

$nso.AgeTargetAge.AGE_0_17 = 'AGE_0_17';
$nso.AgeTargetAge.AGE_18_24 = 'AGE_18_24';
$nso.AgeTargetAge.AGE_25_34 = 'AGE_25_34';
$nso.AgeTargetAge.AGE_35_44 = 'AGE_35_44';
$nso.AgeTargetAge.AGE_45_54 = 'AGE_45_54';
$nso.AgeTargetAge.AGE_55_64 = 'AGE_55_64';
$nso.AgeTargetAge.AGE_65_PLUS = 'AGE_65_PLUS';

$nso.MobileTarget = function() {
  $nso.Target.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.MobileTarget', false, $nst + '.Target');

$nso.MobilePlatformTarget = function() {
  $nso.MobileTarget.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.MobilePlatformTarget', false, $nst + '.MobileTarget');
$ref.prop('platformName', 'string', 'platformName', false, true);

$nso.MobileCarrierTarget = function() {
  $nso.MobileTarget.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.MobileCarrierTarget', false, $nst + '.MobileTarget');
$ref.prop('carrierName', 'string', 'carrierName', false, true);
$ref.prop('countryCode', 'string', 'countryCode', false, true);

$nso.LanguageTarget = function() {
  $nso.Target.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.LanguageTarget', false, $nst + '.Target');
$ref.prop('languageCode', 'string', 'languageCode', false, true);

$nso.AdScheduleTarget = function() {
  $nso.Target.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AdScheduleTarget', false, $nst + '.Target');
$ref.prop('dayOfWeek', $nst + '.DayOfWeek', 'dayOfWeek', false, false);
$ref.prop('startHour', 'integer', 'startHour', false, true);
$ref.prop('startMinute', $nst + '.MinuteOfHour', 'startMinute', false, false);
$ref.prop('endHour', 'integer', 'endHour', false, true);
$ref.prop('endMinute', $nst + '.MinuteOfHour', 'endMinute', false, false);
$ref.prop('bidMultiplier', 'double', 'bidMultiplier', false, true);

$nso.DayOfWeek = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.DayOfWeek', true, $sot);

$nso.DayOfWeek.MONDAY = 'MONDAY';
$nso.DayOfWeek.TUESDAY = 'TUESDAY';
$nso.DayOfWeek.WEDNESDAY = 'WEDNESDAY';
$nso.DayOfWeek.THURSDAY = 'THURSDAY';
$nso.DayOfWeek.FRIDAY = 'FRIDAY';
$nso.DayOfWeek.SATURDAY = 'SATURDAY';
$nso.DayOfWeek.SUNDAY = 'SUNDAY';

$nso.MinuteOfHour = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.MinuteOfHour', true, $sot);

$nso.MinuteOfHour.ZERO = 'ZERO';
$nso.MinuteOfHour.FIFTEEN = 'FIFTEEN';
$nso.MinuteOfHour.THIRTY = 'THIRTY';
$nso.MinuteOfHour.FORTY_FIVE = 'FORTY_FIVE';

$nso.NetworkTargetList = function() {
  $nso.TargetList.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.NetworkTargetList', false, $nst + '.TargetList');

$nso.MobileTargetList = function() {
  $nso.TargetList.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.MobileTargetList', false, $nst + '.TargetList');
$ref.prop('targets', $nst + '.MobileTarget', 'targets', true, false);

$nso.LanguageTargetList = function() {
  $nso.TargetList.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.LanguageTargetList', false, $nst + '.TargetList');
$ref.prop('targets', $nst + '.LanguageTarget', 'targets', true, false);

$nso.GeoTargetList = function() {
  $nso.TargetList.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.GeoTargetList', false, $nst + '.TargetList');
$ref.prop('targets', $nst + '.GeoTarget', 'targets', true, false);

$nso.DemographicTargetList = function() {
  $nso.TargetList.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.DemographicTargetList', false, $nst + '.TargetList');
$ref.prop('targets', $nst + '.DemographicTarget', 'targets', true, false);

$nso.AdScheduleTargetList = function() {
  $nso.TargetList.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AdScheduleTargetList', false, $nst + '.TargetList');
$ref.prop('targets', $nst + '.AdScheduleTarget', 'targets', true, false);

$nso.CampaignTargetOperation = function() {
  $nso.Operation.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.CampaignTargetOperation', false, $nst + '.Operation');
$ref.prop('operand', $nst + '.TargetList', 'operand', false, false);

$nso.CampaignTargetPage = function() {
  $nso.Page.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.CampaignTargetPage', false, $nst + '.Page');
$ref.prop('entries', $nst + '.TargetList', 'entries', true, false);

$nso.CampaignTargetSelector = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.CampaignTargetSelector', false, $sot);
$ref.prop('campaignIds', 'integer', 'campaignIds', true, true);
$ref.prop('dummy', 'string', 'dummy', false, true);

$nso.RegionCodeError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.RegionCodeError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.RegionCodeErrorReason', 'reason', false, false);

$nso.RegionCodeErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.RegionCodeErrorReason', true, $sot);

$nso.RegionCodeErrorReason.INVALID_REGION_CODE = 'INVALID_REGION_CODE';

$nso.ConversionTrackerService = function() {
  $sso.call(this);
  this.nametable_ = new google.ads.adwords.v201101.SoapNametable();
};

$ref = $dsf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ConversionTrackerService');
$ref.prop('requestHeader', $nst + '.RequestHeader', 'RequestHeader', false, false);
$ref.prop('responseHeader', $nst + '.ResponseHeader', 'ResponseHeader', false, false);
$ref.meth(
  'get',
  'https://adwords.google.com/api/adwords/cm/v201101',
  'https://adwords.google.com/api/adwords/cm/v201101',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.ConversionTrackerPage', isArray: false, isSystem: false},
  [{propertyName: 'responseHeader', direction: 'out'}, {propertyName: 'requestHeader', direction: 'in'}],
  [{className: $nst + '.Selector', isArray: false, isSystem: false, name: 'serviceSelector', xmlElementName: 'serviceSelector'}]
);
$ref.meth(
  'mutate',
  'https://adwords.google.com/api/adwords/cm/v201101',
  'https://adwords.google.com/api/adwords/cm/v201101',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.ConversionTrackerReturnValue', isArray: false, isSystem: false},
  [{propertyName: 'responseHeader', direction: 'out'}, {propertyName: 'requestHeader', direction: 'in'}],
  [{className: $nst + '.ConversionTrackerOperation', isArray: true, isSystem: false, name: 'operations', xmlElementName: 'operations'}]
);

$nso.ConversionTrackerService.prototype.get = function(serviceSelector, onsuccess, onfailure) {
  this.invoke.call(this, 'get', [serviceSelector], onsuccess, onfailure);
};

$nso.ConversionTrackerService.prototype.mutate = function(operations, onsuccess, onfailure) {
  this.invoke.call(this, 'mutate', [operations], onsuccess, onfailure);
};

$nso.ConversionTrackerReturnValue = function() {
  $nso.ListReturnValue.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ConversionTrackerReturnValue', false, $nst + '.ListReturnValue');
$ref.prop('value', $nst + '.ConversionTracker', 'value', true, false);

$nso.ConversionTracker = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ConversionTracker', false, $sot);
$ref.prop('id', 'integer', 'id', false, true);
$ref.prop('name', 'string', 'name', false, true);
$ref.prop('status', $nst + '.ConversionTrackerStatus', 'status', false, false);
$ref.prop('category', $nst + '.ConversionTrackerCategory', 'category', false, false);
$ref.prop('stats', $nst + '.ConversionTrackerStats', 'stats', false, false);
$ref.prop('viewthroughLookbackWindow', 'integer', 'viewthroughLookbackWindow', false, true);
$ref.prop('viewthroughConversionDeDupSearch', 'boolean', 'viewthroughConversionDeDupSearch', false, true);
$ref.prop('isProductAdsChargeable', 'boolean', 'isProductAdsChargeable', false, true);
$ref.prop('productAdsChargeableConversionWindow', 'integer', 'productAdsChargeableConversionWindow', false, true);
$ref.prop('conversionTrackerType', 'string', 'ConversionTracker.Type', false, true);

$nso.ConversionTrackerStatus = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ConversionTrackerStatus', true, $sot);

$nso.ConversionTrackerStatus.ENABLED = 'ENABLED';
$nso.ConversionTrackerStatus.DISABLED = 'DISABLED';
$nso.ConversionTrackerStatus.HIDDEN = 'HIDDEN';

$nso.ConversionTrackerCategory = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ConversionTrackerCategory', true, $sot);

$nso.ConversionTrackerCategory.DEFAULT = 'DEFAULT';
$nso.ConversionTrackerCategory.PAGE_VIEW = 'PAGE_VIEW';
$nso.ConversionTrackerCategory.PURCHASE = 'PURCHASE';
$nso.ConversionTrackerCategory.SIGNUP = 'SIGNUP';
$nso.ConversionTrackerCategory.LEAD = 'LEAD';
$nso.ConversionTrackerCategory.REMARKETING = 'REMARKETING';

$nso.ConversionTrackerStats = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ConversionTrackerStats', false, $sot);
$ref.prop('numConversionEvents', 'integer', 'numConversionEvents', false, true);
$ref.prop('conversionValue', $nst + '.Money', 'conversionValue', false, false);
$ref.prop('mostRecentConversionDate', 'string', 'mostRecentConversionDate', false, true);
$ref.prop('numConvertedClicks', 'integer', 'numConvertedClicks', false, true);

$nso.AdWordsConversionTracker = function() {
  $nso.ConversionTracker.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AdWordsConversionTracker', false, $nst + '.ConversionTracker');
$ref.prop('snippet', 'string', 'snippet', false, true);
$ref.prop('markupLanguage', $nst + '.AdWordsConversionTrackerMarkupLanguage', 'markupLanguage', false, false);
$ref.prop('httpProtocol', $nst + '.AdWordsConversionTrackerHttpProtocol', 'httpProtocol', false, false);
$ref.prop('textFormat', $nst + '.AdWordsConversionTrackerTextFormat', 'textFormat', false, false);
$ref.prop('conversionPageLanguage', 'string', 'conversionPageLanguage', false, true);
$ref.prop('backgroundColor', 'string', 'backgroundColor', false, true);
$ref.prop('userRevenueValue', 'string', 'userRevenueValue', false, true);

$nso.AdWordsConversionTrackerMarkupLanguage = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AdWordsConversionTrackerMarkupLanguage', true, $sot);

$nso.AdWordsConversionTrackerMarkupLanguage.HTML = 'HTML';
$nso.AdWordsConversionTrackerMarkupLanguage.CHTML = 'CHTML';
$nso.AdWordsConversionTrackerMarkupLanguage.XHTML = 'XHTML';
$nso.AdWordsConversionTrackerMarkupLanguage.WML = 'WML';

$nso.AdWordsConversionTrackerHttpProtocol = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AdWordsConversionTrackerHttpProtocol', true, $sot);

$nso.AdWordsConversionTrackerHttpProtocol.HTTP = 'HTTP';
$nso.AdWordsConversionTrackerHttpProtocol.HTTPS = 'HTTPS';

$nso.AdWordsConversionTrackerTextFormat = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AdWordsConversionTrackerTextFormat', true, $sot);

$nso.AdWordsConversionTrackerTextFormat.ONE_LINE = 'ONE_LINE';
$nso.AdWordsConversionTrackerTextFormat.TWO_LINE = 'TWO_LINE';
$nso.AdWordsConversionTrackerTextFormat.HIDDEN = 'HIDDEN';

$nso.ConversionTrackerOperation = function() {
  $nso.Operation.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ConversionTrackerOperation', false, $nst + '.Operation');
$ref.prop('operand', $nst + '.ConversionTracker', 'operand', false, false);

$nso.NoStatsPage = function() {
  $nso.Page.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.NoStatsPage', false, $nst + '.Page');

$nso.ConversionTrackerPage = function() {
  $nso.NoStatsPage.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ConversionTrackerPage', false, $nst + '.NoStatsPage');
$ref.prop('entries', $nst + '.ConversionTracker', 'entries', true, false);

$nso.ConversionTrackingError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ConversionTrackingError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.ConversionTrackingErrorReason', 'reason', false, false);

$nso.ConversionTrackingErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ConversionTrackingErrorReason', true, $sot);

$nso.ConversionTrackingErrorReason.ANALYTICS_NOT_ALLOWED = 'ANALYTICS_NOT_ALLOWED';
$nso.ConversionTrackingErrorReason.CANNOT_ADD_CONVERSION_TYPE_SUBCLASS = 'CANNOT_ADD_CONVERSION_TYPE_SUBCLASS';
$nso.ConversionTrackingErrorReason.CANNNOT_CHANGE_CONVERSION_SUBCLASS = 'CANNNOT_CHANGE_CONVERSION_SUBCLASS';
$nso.ConversionTrackingErrorReason.CANNOT_SET_HIDDEN_STATUS = 'CANNOT_SET_HIDDEN_STATUS';
$nso.ConversionTrackingErrorReason.CONVERSION_TYPE_NOT_FOUND = 'CONVERSION_TYPE_NOT_FOUND';
$nso.ConversionTrackingErrorReason.DOMAIN_EXCEPTION = 'DOMAIN_EXCEPTION';
$nso.ConversionTrackingErrorReason.DUPLICATE_NAME = 'DUPLICATE_NAME';
$nso.ConversionTrackingErrorReason.EMAIL_FAILED = 'EMAIL_FAILED';
$nso.ConversionTrackingErrorReason.EXCEEDED_CONVERSION_TYPE_LIMIT = 'EXCEEDED_CONVERSION_TYPE_LIMIT';
$nso.ConversionTrackingErrorReason.ID_IS_NULL = 'ID_IS_NULL';
$nso.ConversionTrackingErrorReason.INVALID_COLOR = 'INVALID_COLOR';
$nso.ConversionTrackingErrorReason.INVALID_CONVERSION = 'INVALID_CONVERSION';
$nso.ConversionTrackingErrorReason.INVALID_DATE_RANGE = 'INVALID_DATE_RANGE';
$nso.ConversionTrackingErrorReason.INVALID_EMAIL_ADDRESS = 'INVALID_EMAIL_ADDRESS';
$nso.ConversionTrackingErrorReason.NAME_ALREADY_EXISTS = 'NAME_ALREADY_EXISTS';
$nso.ConversionTrackingErrorReason.NO_RECIPIENTS = 'NO_RECIPIENTS';
$nso.ConversionTrackingErrorReason.NO_SNIPPET = 'NO_SNIPPET';
$nso.ConversionTrackingErrorReason.REMARKETING_TYPE_NOT_ALLOWED = 'REMARKETING_TYPE_NOT_ALLOWED';
$nso.ConversionTrackingErrorReason.TOO_MANY_WEBPAGES = 'TOO_MANY_WEBPAGES';
$nso.ConversionTrackingErrorReason.UNKNOWN_SORTING_TYPE = 'UNKNOWN_SORTING_TYPE';

$nso.CustomerSyncService = function() {
  $sso.call(this);
  this.nametable_ = new google.ads.adwords.v201101.SoapNametable();
};

$ref = $dsf('https://adwords.google.com/api/adwords/ch/v201101', $nst + '.CustomerSyncService');
$ref.prop('requestHeader', $nst + '.RequestHeader', 'RequestHeader', false, false);
$ref.prop('responseHeader', $nst + '.ResponseHeader', 'ResponseHeader', false, false);
$ref.meth(
  'get',
  'https://adwords.google.com/api/adwords/ch/v201101',
  'https://adwords.google.com/api/adwords/ch/v201101',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.CustomerChangeData', isArray: false, isSystem: false},
  [{propertyName: 'requestHeader', direction: 'in'}, {propertyName: 'responseHeader', direction: 'out'}],
  [{className: $nst + '.CustomerSyncSelector', isArray: false, isSystem: false, name: 'selector', xmlElementName: 'selector'}]
);

$nso.CustomerSyncService.prototype.get = function(selector, onsuccess, onfailure) {
  this.invoke.call(this, 'get', [selector], onsuccess, onfailure);
};

$nso.AdGroupChangeData = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/ch/v201101', $nst + '.AdGroupChangeData', false, $sot);
$ref.prop('adGroupId', 'integer', 'adGroupId', false, true);
$ref.prop('adGroupChangeStatus', $nst + '.ChangeStatus', 'adGroupChangeStatus', false, false);
$ref.prop('changedAds', 'integer', 'changedAds', true, true);
$ref.prop('changedCriteria', 'integer', 'changedCriteria', true, true);
$ref.prop('deletedCriteria', 'integer', 'deletedCriteria', true, true);

$nso.ChangeStatus = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/ch/v201101', $nst + '.ChangeStatus', true, $sot);

$nso.ChangeStatus.FIELDS_UNCHANGED = 'FIELDS_UNCHANGED';
$nso.ChangeStatus.FIELDS_CHANGED = 'FIELDS_CHANGED';
$nso.ChangeStatus.NEW = 'NEW';

$nso.CampaignChangeData = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/ch/v201101', $nst + '.CampaignChangeData', false, $sot);
$ref.prop('campaignId', 'integer', 'campaignId', false, true);
$ref.prop('campaignChangeStatus', $nst + '.ChangeStatus', 'campaignChangeStatus', false, false);
$ref.prop('changedAdGroups', $nst + '.AdGroupChangeData', 'changedAdGroups', true, false);
$ref.prop('addedCampaignCriteria', 'integer', 'addedCampaignCriteria', true, true);
$ref.prop('deletedCampaignCriteria', 'integer', 'deletedCampaignCriteria', true, true);
$ref.prop('addedAdExtensions', 'integer', 'addedAdExtensions', true, true);
$ref.prop('deletedAdExtensions', 'integer', 'deletedAdExtensions', true, true);
$ref.prop('campaignTargetingChanged', 'boolean', 'campaignTargetingChanged', false, true);

$nso.CustomerChangeData = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/ch/v201101', $nst + '.CustomerChangeData', false, $sot);
$ref.prop('changedCampaigns', $nst + '.CampaignChangeData', 'changedCampaigns', true, false);
$ref.prop('lastChangeTimestamp', 'string', 'lastChangeTimestamp', false, true);

$nso.DateTimeRange = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.DateTimeRange', false, $sot);
$ref.prop('min', 'string', 'min', false, true);
$ref.prop('max', 'string', 'max', false, true);

$nso.CustomerSyncSelector = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/ch/v201101', $nst + '.CustomerSyncSelector', false, $sot);
$ref.prop('dateTimeRange', $nst + '.DateTimeRange', 'dateTimeRange', false, false);
$ref.prop('campaignIds', 'integer', 'campaignIds', true, true);

$nso.CustomerSyncError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/ch/v201101', $nst + '.CustomerSyncError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.CustomerSyncErrorReason', 'reason', false, false);
$ref.prop('campaignId', 'integer', 'campaignId', false, true);

$nso.CustomerSyncErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/ch/v201101', $nst + '.CustomerSyncErrorReason', true, $sot);

$nso.CustomerSyncErrorReason.INVALID_CAMPAIGN_ID = 'INVALID_CAMPAIGN_ID';
$nso.CustomerSyncErrorReason.INVALID_DATE_RANGE = 'INVALID_DATE_RANGE';
$nso.CustomerSyncErrorReason.TOO_MANY_CHANGES = 'TOO_MANY_CHANGES';

$nso.DataService = function() {
  $sso.call(this);
  this.nametable_ = new google.ads.adwords.v201101.SoapNametable();
};

$ref = $dsf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.DataService');
$ref.prop('requestHeader', $nst + '.RequestHeader', 'RequestHeader', false, false);
$ref.prop('responseHeader', $nst + '.ResponseHeader', 'ResponseHeader', false, false);
$ref.meth(
  'getAdGroupBidLandscape',
  'https://adwords.google.com/api/adwords/cm/v201101',
  'https://adwords.google.com/api/adwords/cm/v201101',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.AdGroupBidLandscapePage', isArray: false, isSystem: false},
  [{propertyName: 'responseHeader', direction: 'out'}, {propertyName: 'requestHeader', direction: 'in'}],
  [{className: $nst + '.Selector', isArray: false, isSystem: false, name: 'serviceSelector', xmlElementName: 'serviceSelector'}]
);
$ref.meth(
  'getCriterionBidLandscape',
  'https://adwords.google.com/api/adwords/cm/v201101',
  'https://adwords.google.com/api/adwords/cm/v201101',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.CriterionBidLandscapePage', isArray: false, isSystem: false},
  [{propertyName: 'responseHeader', direction: 'out'}, {propertyName: 'requestHeader', direction: 'in'}],
  [{className: $nst + '.Selector', isArray: false, isSystem: false, name: 'serviceSelector', xmlElementName: 'serviceSelector'}]
);

$nso.DataService.prototype.getAdGroupBidLandscape = function(serviceSelector, onsuccess, onfailure) {
  this.invoke.call(this, 'getAdGroupBidLandscape', [serviceSelector], onsuccess, onfailure);
};

$nso.DataService.prototype.getCriterionBidLandscape = function(serviceSelector, onsuccess, onfailure) {
  this.invoke.call(this, 'getCriterionBidLandscape', [serviceSelector], onsuccess, onfailure);
};

$nso.BidLandscapeLandscapePoint = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.BidLandscapeLandscapePoint', false, $sot);
$ref.prop('bid', $nst + '.Money', 'bid', false, false);
$ref.prop('clicks', 'integer', 'clicks', false, true);
$ref.prop('cost', $nst + '.Money', 'cost', false, false);
$ref.prop('marginalCpc', $nst + '.Money', 'marginalCpc', false, false);
$ref.prop('impressions', 'integer', 'impressions', false, true);

$nso.DataEntry = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.DataEntry', false, $sot);
$ref.prop('dataEntryType', 'string', 'DataEntry.Type', false, true);

$nso.BidLandscape = function() {
  $nso.DataEntry.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.BidLandscape', false, $nst + '.DataEntry');
$ref.prop('campaignId', 'integer', 'campaignId', false, true);
$ref.prop('adGroupId', 'integer', 'adGroupId', false, true);
$ref.prop('startDate', 'string', 'startDate', false, true);
$ref.prop('endDate', 'string', 'endDate', false, true);
$ref.prop('landscapePoints', $nst + '.BidLandscapeLandscapePoint', 'landscapePoints', true, false);

$nso.CriterionBidLandscape = function() {
  $nso.BidLandscape.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.CriterionBidLandscape', false, $nst + '.BidLandscape');
$ref.prop('criterionId', 'integer', 'criterionId', false, true);

$nso.AdGroupBidLandscape = function() {
  $nso.BidLandscape.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AdGroupBidLandscape', false, $nst + '.BidLandscape');
$ref.prop('type', $nst + '.AdGroupBidLandscapeType', 'type', false, false);
$ref.prop('landscapeCurrent', 'boolean', 'landscapeCurrent', false, true);

$nso.AdGroupBidLandscapeType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AdGroupBidLandscapeType', true, $sot);

$nso.AdGroupBidLandscapeType.UNIFORM = 'UNIFORM';
$nso.AdGroupBidLandscapeType.DEFAULT = 'DEFAULT';
$nso.AdGroupBidLandscapeType.UNKNOWN = 'UNKNOWN';

$nso.CriterionBidLandscapePage = function() {
  $nso.NoStatsPage.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.CriterionBidLandscapePage', false, $nst + '.NoStatsPage');
$ref.prop('entries', $nst + '.CriterionBidLandscape', 'entries', true, false);

$nso.AdGroupBidLandscapePage = function() {
  $nso.NoStatsPage.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AdGroupBidLandscapePage', false, $nst + '.NoStatsPage');
$ref.prop('entries', $nst + '.AdGroupBidLandscape', 'entries', true, false);

$nso.DataError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.DataError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.DataErrorReason', 'reason', false, false);

$nso.DataErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.DataErrorReason', true, $sot);

$nso.DataErrorReason.CANNOT_CREATE_TABLE_ENTRY = 'CANNOT_CREATE_TABLE_ENTRY';
$nso.DataErrorReason.NO_TABLE_ENTRY_CLASS_FOR_VIEW_TYPE = 'NO_TABLE_ENTRY_CLASS_FOR_VIEW_TYPE';
$nso.DataErrorReason.TABLE_SERVICE_ERROR = 'TABLE_SERVICE_ERROR';

$nso.ExperimentService = function() {
  $sso.call(this);
  this.nametable_ = new google.ads.adwords.v201101.SoapNametable();
};

$ref = $dsf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ExperimentService');
$ref.prop('requestHeader', $nst + '.RequestHeader', 'RequestHeader', false, false);
$ref.prop('responseHeader', $nst + '.ResponseHeader', 'ResponseHeader', false, false);
$ref.meth(
  'get',
  'https://adwords.google.com/api/adwords/cm/v201101',
  'https://adwords.google.com/api/adwords/cm/v201101',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.ExperimentPage', isArray: false, isSystem: false},
  [{propertyName: 'responseHeader', direction: 'out'}, {propertyName: 'requestHeader', direction: 'in'}],
  [{className: $nst + '.Selector', isArray: false, isSystem: false, name: 'serviceSelector', xmlElementName: 'serviceSelector'}]
);
$ref.meth(
  'mutate',
  'https://adwords.google.com/api/adwords/cm/v201101',
  'https://adwords.google.com/api/adwords/cm/v201101',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.ExperimentReturnValue', isArray: false, isSystem: false},
  [{propertyName: 'responseHeader', direction: 'out'}, {propertyName: 'requestHeader', direction: 'in'}],
  [{className: $nst + '.ExperimentOperation', isArray: true, isSystem: false, name: 'operations', xmlElementName: 'operations'}]
);

$nso.ExperimentService.prototype.get = function(serviceSelector, onsuccess, onfailure) {
  this.invoke.call(this, 'get', [serviceSelector], onsuccess, onfailure);
};

$nso.ExperimentService.prototype.mutate = function(operations, onsuccess, onfailure) {
  this.invoke.call(this, 'mutate', [operations], onsuccess, onfailure);
};

$nso.ExperimentReturnValue = function() {
  $nso.ListReturnValue.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ExperimentReturnValue', false, $nst + '.ListReturnValue');
$ref.prop('value', $nst + '.Experiment', 'value', true, false);

$nso.Experiment = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.Experiment', false, $sot);
$ref.prop('id', 'integer', 'id', false, true);
$ref.prop('controlId', 'integer', 'controlId', false, true);
$ref.prop('campaignId', 'integer', 'campaignId', false, true);
$ref.prop('name', 'string', 'name', false, true);
$ref.prop('status', $nst + '.ExperimentStatus', 'status', false, false);
$ref.prop('servingStatus', $nst + '.ExperimentServingStatus', 'servingStatus', false, false);
$ref.prop('queryPercentage', 'integer', 'queryPercentage', false, true);
$ref.prop('startDateTime', 'string', 'startDateTime', false, true);
$ref.prop('endDateTime', 'string', 'endDateTime', false, true);
$ref.prop('lastModifiedDateTime', 'string', 'lastModifiedDateTime', false, true);
$ref.prop('experimentSummaryStats', $nst + '.ExperimentSummaryStats', 'experimentSummaryStats', false, false);

$nso.ExperimentStatus = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ExperimentStatus', true, $sot);

$nso.ExperimentStatus.ACTIVE = 'ACTIVE';
$nso.ExperimentStatus.DELETED = 'DELETED';
$nso.ExperimentStatus.PROMOTED = 'PROMOTED';

$nso.ExperimentServingStatus = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ExperimentServingStatus', true, $sot);

$nso.ExperimentServingStatus.RUNNING = 'RUNNING';
$nso.ExperimentServingStatus.PENDING = 'PENDING';
$nso.ExperimentServingStatus.ENDED = 'ENDED';
$nso.ExperimentServingStatus.DELETED = 'DELETED';
$nso.ExperimentServingStatus.PROMOTED = 'PROMOTED';

$nso.ExperimentSummaryStats = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ExperimentSummaryStats', false, $sot);
$ref.prop('adGroupsCount', 'integer', 'adGroupsCount', false, true);
$ref.prop('adGroupCriteriaCount', 'integer', 'adGroupCriteriaCount', false, true);
$ref.prop('adGroupAdsCount', 'integer', 'adGroupAdsCount', false, true);

$nso.ExperimentOperation = function() {
  $nso.Operation.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ExperimentOperation', false, $nst + '.Operation');
$ref.prop('operand', $nst + '.Experiment', 'operand', false, false);

$nso.ExperimentPage = function() {
  $nso.Page.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ExperimentPage', false, $nst + '.Page');
$ref.prop('entries', $nst + '.Experiment', 'entries', true, false);

$nso.ExperimentServiceError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ExperimentServiceError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.ExperimentServiceErrorReason', 'reason', false, false);

$nso.ExperimentServiceErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ExperimentServiceErrorReason', true, $sot);

$nso.ExperimentServiceErrorReason.AFTER_MAXIMUM_ALLOWABLE_DATE = 'AFTER_MAXIMUM_ALLOWABLE_DATE';
$nso.ExperimentServiceErrorReason.AOL_PARTNER_CAMPAIGNS_CANT_RUN_EXPERIMENTS = 'AOL_PARTNER_CAMPAIGNS_CANT_RUN_EXPERIMENTS';
$nso.ExperimentServiceErrorReason.CANNOT_CREATE_EXPERIMENT_FOR_BIDDING_STRATEGY = 'CANNOT_CREATE_EXPERIMENT_FOR_BIDDING_STRATEGY';
$nso.ExperimentServiceErrorReason.CANNOT_CREATE_EXPERIMENT_FOR_BIDDING_STRATEGY_FEATURE = 'CANNOT_CREATE_EXPERIMENT_FOR_BIDDING_STRATEGY_FEATURE';
$nso.ExperimentServiceErrorReason.CANNOT_SET_DATE_TO_PAST = 'CANNOT_SET_DATE_TO_PAST';
$nso.ExperimentServiceErrorReason.CANNOT_SET_END_DATE_WITHOUT_SETTING_START_DATE = 'CANNOT_SET_END_DATE_WITHOUT_SETTING_START_DATE';
$nso.ExperimentServiceErrorReason.DATE_OUTSIDE_CAMPAIGN_DATE_RANGE = 'DATE_OUTSIDE_CAMPAIGN_DATE_RANGE';
$nso.ExperimentServiceErrorReason.EXPERIMENT_ALREADY_STARTED = 'EXPERIMENT_ALREADY_STARTED';
$nso.ExperimentServiceErrorReason.EXPERIMENT_ENDED = 'EXPERIMENT_ENDED';
$nso.ExperimentServiceErrorReason.EXPERIMENT_LIMIT_EXCEEEDED = 'EXPERIMENT_LIMIT_EXCEEEDED';
$nso.ExperimentServiceErrorReason.INVALID_EXPERIMENT_NAME = 'INVALID_EXPERIMENT_NAME';
$nso.ExperimentServiceErrorReason.INVALID_QUERY_PERCENTAGE = 'INVALID_QUERY_PERCENTAGE';
$nso.ExperimentServiceErrorReason.CANNOT_CHANGE_QUERY_PERCENTAGE_AFTER_EXPERIMENT_HAS_STARTED = 'CANNOT_CHANGE_QUERY_PERCENTAGE_AFTER_EXPERIMENT_HAS_STARTED';
$nso.ExperimentServiceErrorReason.INVALID_STATUS_UPDATE = 'INVALID_STATUS_UPDATE';
$nso.ExperimentServiceErrorReason.START_DATE_AFTER_END_DATE = 'START_DATE_AFTER_END_DATE';
$nso.ExperimentServiceErrorReason.NO_VALID_BUDGET = 'NO_VALID_BUDGET';
$nso.ExperimentServiceErrorReason.EXPERIMENT_NOT_ACTIVE = 'EXPERIMENT_NOT_ACTIVE';
$nso.ExperimentServiceErrorReason.EXPERIMENT_SERVICE_ERROR = 'EXPERIMENT_SERVICE_ERROR';

$nso.GeoLocationService = function() {
  $sso.call(this);
  this.nametable_ = new google.ads.adwords.v201101.SoapNametable();
};

$ref = $dsf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.GeoLocationService');
$ref.prop('requestHeader', $nst + '.RequestHeader', 'RequestHeader', false, false);
$ref.prop('responseHeader', $nst + '.ResponseHeader', 'ResponseHeader', false, false);
$ref.meth(
  'get',
  'https://adwords.google.com/api/adwords/cm/v201101',
  'https://adwords.google.com/api/adwords/cm/v201101',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.GeoLocation', isArray: true, isSystem: false},
  [{propertyName: 'responseHeader', direction: 'out'}, {propertyName: 'requestHeader', direction: 'in'}],
  [{className: $nst + '.GeoLocationSelector', isArray: false, isSystem: false, name: 'selector', xmlElementName: 'selector'}]
);

$nso.GeoLocationService.prototype.get = function(selector, onsuccess, onfailure) {
  this.invoke.call(this, 'get', [selector], onsuccess, onfailure);
};

$nso.GeoLocation = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.GeoLocation', false, $sot);
$ref.prop('geoPoint', $nst + '.GeoPoint', 'geoPoint', false, false);
$ref.prop('address', $nst + '.Address', 'address', false, false);
$ref.prop('encodedLocation', 'byte', 'encodedLocation', true, true);
$ref.prop('geoLocationType', 'string', 'GeoLocation.Type', false, true);

$nso.InvalidGeoLocation = function() {
  $nso.GeoLocation.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.InvalidGeoLocation', false, $nst + '.GeoLocation');

$nso.GeoLocationSelector = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.GeoLocationSelector', false, $sot);
$ref.prop('addresses', $nst + '.Address', 'addresses', true, false);
$ref.prop('dummy', 'string', 'dummy', false, true);

$nso.GeoLocationError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.GeoLocationError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.GeoLocationErrorReason', 'reason', false, false);

$nso.GeoLocationErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.GeoLocationErrorReason', true, $sot);

$nso.GeoLocationErrorReason.UNKNOWN = 'UNKNOWN';

$nso.InfoService = function() {
  $sso.call(this);
  this.nametable_ = new google.ads.adwords.v201101.SoapNametable();
};

$ref = $dsf('https://adwords.google.com/api/adwords/info/v201101', $nst + '.InfoService');
$ref.prop('requestHeader', $nst + '.RequestHeader', 'RequestHeader', false, false);
$ref.prop('responseHeader', $nst + '.ResponseHeader', 'ResponseHeader', false, false);
$ref.meth(
  'get',
  'https://adwords.google.com/api/adwords/info/v201101',
  'https://adwords.google.com/api/adwords/info/v201101',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.ApiUsageInfo', isArray: false, isSystem: false},
  [{propertyName: 'requestHeader', direction: 'in'}, {propertyName: 'responseHeader', direction: 'out'}],
  [{className: $nst + '.InfoSelector', isArray: false, isSystem: false, name: 'selector', xmlElementName: 'selector'}]
);

$nso.InfoService.prototype.get = function(selector, onsuccess, onfailure) {
  this.invoke.call(this, 'get', [selector], onsuccess, onfailure);
};

$nso.ApiUsageRecord = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/info/v201101', $nst + '.ApiUsageRecord', false, $sot);
$ref.prop('clientEmail', 'string', 'clientEmail', false, true);
$ref.prop('cost', 'integer', 'cost', false, true);

$nso.ApiUsageInfo = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/info/v201101', $nst + '.ApiUsageInfo', false, $sot);
$ref.prop('apiUsageRecords', $nst + '.ApiUsageRecord', 'apiUsageRecords', true, false);
$ref.prop('cost', 'integer', 'cost', false, true);

$nso.InfoSelector = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/info/v201101', $nst + '.InfoSelector', false, $sot);
$ref.prop('serviceName', 'string', 'serviceName', false, true);
$ref.prop('methodName', 'string', 'methodName', false, true);
$ref.prop('operator', $nst + '.Operator', 'operator', false, false);
$ref.prop('dateRange', $nst + '.DateRange', 'dateRange', false, false);
$ref.prop('clientEmails', 'string', 'clientEmails', true, true);
$ref.prop('apiUsageType', $nst + '.ApiUsageType', 'apiUsageType', false, false);

$nso.ApiUsageType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/info/v201101', $nst + '.ApiUsageType', true, $sot);

$nso.ApiUsageType.FREE_USAGE_API_UNITS_PER_MONTH = 'FREE_USAGE_API_UNITS_PER_MONTH';
$nso.ApiUsageType.TOTAL_USAGE_API_UNITS_PER_MONTH = 'TOTAL_USAGE_API_UNITS_PER_MONTH';
$nso.ApiUsageType.OPERATION_COUNT = 'OPERATION_COUNT';
$nso.ApiUsageType.UNIT_COUNT = 'UNIT_COUNT';
$nso.ApiUsageType.UNIT_COUNT_FOR_CLIENTS = 'UNIT_COUNT_FOR_CLIENTS';
$nso.ApiUsageType.METHOD_COST = 'METHOD_COST';

$nso.ApiUsageError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/info/v201101', $nst + '.ApiUsageError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.ApiUsageErrorReason', 'reason', false, false);

$nso.ApiUsageErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/info/v201101', $nst + '.ApiUsageErrorReason', true, $sot);

$nso.ApiUsageErrorReason.INVALID_DATE_RANGE = 'INVALID_DATE_RANGE';
$nso.ApiUsageErrorReason.SERVICE_NAME_NOT_SPECIFIED = 'SERVICE_NAME_NOT_SPECIFIED';
$nso.ApiUsageErrorReason.METHOD_NAME_NOT_SPECIFIED = 'METHOD_NAME_NOT_SPECIFIED';
$nso.ApiUsageErrorReason.OPERATOR_NOT_SPECIFIED = 'OPERATOR_NOT_SPECIFIED';
$nso.ApiUsageErrorReason.INVALID_CLIENT_EMAIL = 'INVALID_CLIENT_EMAIL';
$nso.ApiUsageErrorReason.INVALID_TOKEN_HEADER = 'INVALID_TOKEN_HEADER';

$nso.MediaService = function() {
  $sso.call(this);
  this.nametable_ = new google.ads.adwords.v201101.SoapNametable();
};

$ref = $dsf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.MediaService');
$ref.prop('requestHeader', $nst + '.RequestHeader', 'RequestHeader', false, false);
$ref.prop('responseHeader', $nst + '.ResponseHeader', 'ResponseHeader', false, false);
$ref.meth(
  'get',
  'https://adwords.google.com/api/adwords/cm/v201101',
  'https://adwords.google.com/api/adwords/cm/v201101',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.MediaPage', isArray: false, isSystem: false},
  [{propertyName: 'responseHeader', direction: 'out'}, {propertyName: 'requestHeader', direction: 'in'}],
  [{className: $nst + '.Selector', isArray: false, isSystem: false, name: 'serviceSelector', xmlElementName: 'serviceSelector'}]
);
$ref.meth(
  'upload',
  'https://adwords.google.com/api/adwords/cm/v201101',
  'https://adwords.google.com/api/adwords/cm/v201101',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.Media', isArray: true, isSystem: false},
  [{propertyName: 'responseHeader', direction: 'out'}, {propertyName: 'requestHeader', direction: 'in'}],
  [{className: $nst + '.Media', isArray: true, isSystem: false, name: 'media', xmlElementName: 'media'}]
);

$nso.MediaService.prototype.get = function(serviceSelector, onsuccess, onfailure) {
  this.invoke.call(this, 'get', [serviceSelector], onsuccess, onfailure);
};

$nso.MediaService.prototype.upload = function(media, onsuccess, onfailure) {
  this.invoke.call(this, 'upload', [media], onsuccess, onfailure);
};

$nso.Media_Size_StringMapEntry = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.Media_Size_StringMapEntry', false, $sot);
$ref.prop('key', $nst + '.MediaSize', 'key', false, false);
$ref.prop('value', 'string', 'value', false, true);

$nso.MediaSize = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.MediaSize', true, $sot);

$nso.MediaSize.FULL = 'FULL';
$nso.MediaSize.SHRUNKEN = 'SHRUNKEN';
$nso.MediaSize.PREVIEW = 'PREVIEW';
$nso.MediaSize.VIDEO_THUMBNAIL = 'VIDEO_THUMBNAIL';

$nso.Dimensions = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.Dimensions', false, $sot);
$ref.prop('width', 'integer', 'width', false, true);
$ref.prop('height', 'integer', 'height', false, true);

$nso.Media_Size_DimensionsMapEntry = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.Media_Size_DimensionsMapEntry', false, $sot);
$ref.prop('key', $nst + '.MediaSize', 'key', false, false);
$ref.prop('value', $nst + '.Dimensions', 'value', false, false);

$nso.Media = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.Media', false, $sot);
$ref.prop('mediaId', 'integer', 'mediaId', false, true);
$ref.prop('type', $nst + '.MediaMediaType', 'type', false, false);
$ref.prop('referenceId', 'integer', 'referenceId', false, true);
$ref.prop('dimensions', $nst + '.Media_Size_DimensionsMapEntry', 'dimensions', true, false);
$ref.prop('urls', $nst + '.Media_Size_StringMapEntry', 'urls', true, false);
$ref.prop('mimeType', $nst + '.MediaMimeType', 'mimeType', false, false);
$ref.prop('sourceUrl', 'string', 'sourceUrl', false, true);
$ref.prop('name', 'string', 'name', false, true);
$ref.prop('fileSize', 'integer', 'fileSize', false, true);
$ref.prop('creationTime', 'string', 'creationTime', false, true);
$ref.prop('mediaType', 'string', 'Media.Type', false, true);

$nso.MediaMediaType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.MediaMediaType', true, $sot);

$nso.MediaMediaType.AUDIO = 'AUDIO';
$nso.MediaMediaType.DYNAMIC_IMAGE = 'DYNAMIC_IMAGE';
$nso.MediaMediaType.ICON = 'ICON';
$nso.MediaMediaType.IMAGE = 'IMAGE';
$nso.MediaMediaType.STANDARD_ICON = 'STANDARD_ICON';
$nso.MediaMediaType.VIDEO = 'VIDEO';

$nso.MediaMimeType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.MediaMimeType', true, $sot);

$nso.MediaMimeType.IMAGE_JPEG = 'IMAGE_JPEG';
$nso.MediaMimeType.IMAGE_GIF = 'IMAGE_GIF';
$nso.MediaMimeType.IMAGE_PNG = 'IMAGE_PNG';
$nso.MediaMimeType.FLASH = 'FLASH';
$nso.MediaMimeType.TEXT_HTML = 'TEXT_HTML';
$nso.MediaMimeType.PDF = 'PDF';
$nso.MediaMimeType.MSWORD = 'MSWORD';
$nso.MediaMimeType.MSEXCEL = 'MSEXCEL';
$nso.MediaMimeType.RTF = 'RTF';
$nso.MediaMimeType.AUDIO_WAV = 'AUDIO_WAV';
$nso.MediaMimeType.AUDIO_MP3 = 'AUDIO_MP3';

$nso.Video = function() {
  $nso.Media.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.Video', false, $nst + '.Media');
$ref.prop('durationMillis', 'integer', 'durationMillis', false, true);
$ref.prop('streamingUrl', 'string', 'streamingUrl', false, true);
$ref.prop('readyToPlayOnTheWeb', 'boolean', 'readyToPlayOnTheWeb', false, true);
$ref.prop('industryStandardCommercialIdentifier', 'string', 'industryStandardCommercialIdentifier', false, true);
$ref.prop('advertisingId', 'string', 'advertisingId', false, true);
$ref.prop('youTubeVideoIdString', 'string', 'youTubeVideoIdString', false, true);

$nso.Image = function() {
  $nso.Media.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.Image', false, $nst + '.Media');
$ref.prop('data', 'byte', 'data', true, true);

$nso.Audio = function() {
  $nso.Media.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.Audio', false, $nst + '.Media');
$ref.prop('durationMillis', 'integer', 'durationMillis', false, true);
$ref.prop('streamingUrl', 'string', 'streamingUrl', false, true);
$ref.prop('readyToPlayOnTheWeb', 'boolean', 'readyToPlayOnTheWeb', false, true);

$nso.MediaPage = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.MediaPage', false, $sot);
$ref.prop('entries', $nst + '.Media', 'entries', true, false);
$ref.prop('totalNumEntries', 'integer', 'totalNumEntries', false, true);

$nso.VideoError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.VideoError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.VideoErrorReason', 'reason', false, false);

$nso.VideoErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.VideoErrorReason', true, $sot);

$nso.VideoErrorReason.INVALID_VIDEO = 'INVALID_VIDEO';
$nso.VideoErrorReason.STORAGE_ERROR = 'STORAGE_ERROR';
$nso.VideoErrorReason.BAD_REQUEST = 'BAD_REQUEST';
$nso.VideoErrorReason.ERROR_GENERATING_STREAMING_URL = 'ERROR_GENERATING_STREAMING_URL';
$nso.VideoErrorReason.UNEXPECTED_SIZE = 'UNEXPECTED_SIZE';
$nso.VideoErrorReason.SERVER_ERROR = 'SERVER_ERROR';
$nso.VideoErrorReason.FILE_TOO_LARGE = 'FILE_TOO_LARGE';
$nso.VideoErrorReason.VIDEO_PROCESSING_ERROR = 'VIDEO_PROCESSING_ERROR';
$nso.VideoErrorReason.INVALID_INPUT = 'INVALID_INPUT';
$nso.VideoErrorReason.PROBLEM_READING_FILE = 'PROBLEM_READING_FILE';
$nso.VideoErrorReason.INVALID_ISCI = 'INVALID_ISCI';
$nso.VideoErrorReason.INVALID_AD_ID = 'INVALID_AD_ID';

$nso.MediaError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.MediaError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.MediaErrorReason', 'reason', false, false);

$nso.MediaErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.MediaErrorReason', true, $sot);

$nso.MediaErrorReason.CANNOT_ADD_STANDARD_ICON = 'CANNOT_ADD_STANDARD_ICON';
$nso.MediaErrorReason.CANNOT_SELECT_STANDARD_ICON_WITH_OTHER_TYPES = 'CANNOT_SELECT_STANDARD_ICON_WITH_OTHER_TYPES';
$nso.MediaErrorReason.DUPLICATE_MEDIA = 'DUPLICATE_MEDIA';
$nso.MediaErrorReason.EMPTY_FIELD = 'EMPTY_FIELD';
$nso.MediaErrorReason.ENTITY_REFERENCED_IN_MULTIPLE_OPS = 'ENTITY_REFERENCED_IN_MULTIPLE_OPS';
$nso.MediaErrorReason.FIELD_NOT_SUPPORTED_FOR_MEDIA_SUB_TYPE = 'FIELD_NOT_SUPPORTED_FOR_MEDIA_SUB_TYPE';
$nso.MediaErrorReason.INVALID_MEDIA_ID = 'INVALID_MEDIA_ID';
$nso.MediaErrorReason.INVALID_MEDIA_TYPE = 'INVALID_MEDIA_TYPE';
$nso.MediaErrorReason.INVALID_MEDIA_SUB_TYPE = 'INVALID_MEDIA_SUB_TYPE';
$nso.MediaErrorReason.INVALID_REFERENCE_ID = 'INVALID_REFERENCE_ID';
$nso.MediaErrorReason.INVALID_YOU_TUBE_ID = 'INVALID_YOU_TUBE_ID';
$nso.MediaErrorReason.YOU_TUBE_VIDEO_NOT_FOUND = 'YOU_TUBE_VIDEO_NOT_FOUND';
$nso.MediaErrorReason.YOU_TUBE_SERVICE_UNAVAILABLE = 'YOU_TUBE_SERVICE_UNAVAILABLE';
$nso.MediaErrorReason.MEDIA_FAILED_TRANSCODING = 'MEDIA_FAILED_TRANSCODING';
$nso.MediaErrorReason.MEDIA_TYPE_DOES_NOT_MATCH_OBJECT_TYPE = 'MEDIA_TYPE_DOES_NOT_MATCH_OBJECT_TYPE';
$nso.MediaErrorReason.NO_FIELDS_SPECIFIED = 'NO_FIELDS_SPECIFIED';
$nso.MediaErrorReason.NULL_REFERENCE_ID_AND_MEDIA_ID = 'NULL_REFERENCE_ID_AND_MEDIA_ID';
$nso.MediaErrorReason.TOO_LONG = 'TOO_LONG';
$nso.MediaErrorReason.UNSUPPORTED_OPERATION = 'UNSUPPORTED_OPERATION';
$nso.MediaErrorReason.UNSUPPORTED_TYPE = 'UNSUPPORTED_TYPE';

$nso.ImageError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ImageError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.ImageErrorReason', 'reason', false, false);

$nso.ImageErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ImageErrorReason', true, $sot);

$nso.ImageErrorReason.INVALID_IMAGE = 'INVALID_IMAGE';
$nso.ImageErrorReason.STORAGE_ERROR = 'STORAGE_ERROR';
$nso.ImageErrorReason.BAD_REQUEST = 'BAD_REQUEST';
$nso.ImageErrorReason.UNEXPECTED_SIZE = 'UNEXPECTED_SIZE';
$nso.ImageErrorReason.ANIMATED_NOT_ALLOWED = 'ANIMATED_NOT_ALLOWED';
$nso.ImageErrorReason.ANIMATION_TOO_LONG = 'ANIMATION_TOO_LONG';
$nso.ImageErrorReason.SERVER_ERROR = 'SERVER_ERROR';
$nso.ImageErrorReason.CMYK_JPEG_NOT_ALLOWED = 'CMYK_JPEG_NOT_ALLOWED';
$nso.ImageErrorReason.FLASH_NOT_ALLOWED = 'FLASH_NOT_ALLOWED';
$nso.ImageErrorReason.FLASH_WITHOUT_CLICKTAG = 'FLASH_WITHOUT_CLICKTAG';
$nso.ImageErrorReason.ANIMATED_VISUAL_EFFECT = 'ANIMATED_VISUAL_EFFECT';
$nso.ImageErrorReason.FLASH_ERROR = 'FLASH_ERROR';
$nso.ImageErrorReason.LAYOUT_PROBLEM = 'LAYOUT_PROBLEM';
$nso.ImageErrorReason.PROBLEM_READING_IMAGE_FILE = 'PROBLEM_READING_IMAGE_FILE';
$nso.ImageErrorReason.ERROR_STORING_IMAGE = 'ERROR_STORING_IMAGE';
$nso.ImageErrorReason.FLASH_HAS_NETWORK_OBJECTS = 'FLASH_HAS_NETWORK_OBJECTS';
$nso.ImageErrorReason.FLASH_HAS_NETWORK_METHODS = 'FLASH_HAS_NETWORK_METHODS';
$nso.ImageErrorReason.FLASH_HAS_URL = 'FLASH_HAS_URL';
$nso.ImageErrorReason.FLASH_HAS_MOUSE_TRACKING = 'FLASH_HAS_MOUSE_TRACKING';
$nso.ImageErrorReason.FLASH_HAS_RANDOM_NUM = 'FLASH_HAS_RANDOM_NUM';
$nso.ImageErrorReason.FLASH_SELF_TARGETS = 'FLASH_SELF_TARGETS';
$nso.ImageErrorReason.FLASH_BAD_GETURL_TARGET = 'FLASH_BAD_GETURL_TARGET';
$nso.ImageErrorReason.FLASH_VERSION_NOT_SUPPORTED = 'FLASH_VERSION_NOT_SUPPORTED';
$nso.ImageErrorReason.FILE_TOO_LARGE = 'FILE_TOO_LARGE';
$nso.ImageErrorReason.IMAGE_DATA_TOO_LARGE = 'IMAGE_DATA_TOO_LARGE';
$nso.ImageErrorReason.IMAGE_PROCESSING_ERROR = 'IMAGE_PROCESSING_ERROR';
$nso.ImageErrorReason.IMAGE_TOO_SMALL = 'IMAGE_TOO_SMALL';
$nso.ImageErrorReason.INVALID_INPUT = 'INVALID_INPUT';
$nso.ImageErrorReason.PROBLEM_READING_FILE = 'PROBLEM_READING_FILE';

$nso.AudioError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AudioError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.AudioErrorReason', 'reason', false, false);

$nso.AudioErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AudioErrorReason', true, $sot);

$nso.AudioErrorReason.INVALID_AUDIO = 'INVALID_AUDIO';
$nso.AudioErrorReason.PROBLEM_READING_AUDIO_FILE = 'PROBLEM_READING_AUDIO_FILE';
$nso.AudioErrorReason.ERROR_STORING_AUDIO = 'ERROR_STORING_AUDIO';
$nso.AudioErrorReason.FILE_TOO_LARGE = 'FILE_TOO_LARGE';
$nso.AudioErrorReason.UNSUPPORTED_AUDIO = 'UNSUPPORTED_AUDIO';
$nso.AudioErrorReason.ERROR_GENERATING_STREAMING_URL = 'ERROR_GENERATING_STREAMING_URL';

$nso.AdExtensionOverrideService = function() {
  $sso.call(this);
  this.nametable_ = new google.ads.adwords.v201101.SoapNametable();
};

$ref = $dsf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AdExtensionOverrideService');
$ref.prop('requestHeader', $nst + '.RequestHeader', 'RequestHeader', false, false);
$ref.prop('responseHeader', $nst + '.ResponseHeader', 'ResponseHeader', false, false);
$ref.meth(
  'get',
  'https://adwords.google.com/api/adwords/cm/v201101',
  'https://adwords.google.com/api/adwords/cm/v201101',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.AdExtensionOverridePage', isArray: false, isSystem: false},
  [{propertyName: 'responseHeader', direction: 'out'}, {propertyName: 'requestHeader', direction: 'in'}],
  [{className: $nst + '.AdExtensionOverrideSelector', isArray: false, isSystem: false, name: 'selector', xmlElementName: 'selector'}]
);
$ref.meth(
  'mutate',
  'https://adwords.google.com/api/adwords/cm/v201101',
  'https://adwords.google.com/api/adwords/cm/v201101',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.AdExtensionOverrideReturnValue', isArray: false, isSystem: false},
  [{propertyName: 'responseHeader', direction: 'out'}, {propertyName: 'requestHeader', direction: 'in'}],
  [{className: $nst + '.AdExtensionOverrideOperation', isArray: true, isSystem: false, name: 'operations', xmlElementName: 'operations'}]
);

$nso.AdExtensionOverrideService.prototype.get = function(selector, onsuccess, onfailure) {
  this.invoke.call(this, 'get', [selector], onsuccess, onfailure);
};

$nso.AdExtensionOverrideService.prototype.mutate = function(operations, onsuccess, onfailure) {
  this.invoke.call(this, 'mutate', [operations], onsuccess, onfailure);
};

$nso.AdExtensionOverrideReturnValue = function() {
  $nso.ListReturnValue.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AdExtensionOverrideReturnValue', false, $nst + '.ListReturnValue');
$ref.prop('value', $nst + '.AdExtensionOverride', 'value', true, false);

$nso.AdExtensionOverride = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AdExtensionOverride', false, $sot);
$ref.prop('adId', 'integer', 'adId', false, true);
$ref.prop('adExtension', $nst + '.AdExtension', 'adExtension', false, false);
$ref.prop('overrideInfo', $nst + '.OverrideInfo', 'overrideInfo', false, false);
$ref.prop('status', $nst + '.AdExtensionOverrideStatus', 'status', false, false);
$ref.prop('approvalStatus', $nst + '.AdExtensionOverrideApprovalStatus', 'approvalStatus', false, false);
$ref.prop('stats', $nst + '.AdExtensionOverrideStats', 'stats', false, false);

$nso.AdExtension = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AdExtension', false, $sot);
$ref.prop('id', 'integer', 'id', false, true);
$ref.prop('adExtensionType', 'string', 'AdExtension.Type', false, true);

$nso.LocationSyncExtension = function() {
  $nso.AdExtension.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.LocationSyncExtension', false, $nst + '.AdExtension');
$ref.prop('email', 'string', 'email', false, true);
$ref.prop('authToken', 'string', 'authToken', false, true);
$ref.prop('iconMediaId', 'integer', 'iconMediaId', false, true);
$ref.prop('shouldSyncUrl', 'boolean', 'shouldSyncUrl', false, true);

$nso.ProductExtension = function() {
  $nso.AdExtension.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ProductExtension', false, $nst + '.AdExtension');
$ref.prop('googleBaseCustomerId', 'integer', 'googleBaseCustomerId', false, true);
$ref.prop('advertiserName', 'string', 'advertiserName', false, true);
$ref.prop('productSelection', $nst + '.ProductConditionAndGroup', 'productSelection', true, false);

$nso.ProductConditionAndGroup = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ProductConditionAndGroup', false, $sot);
$ref.prop('conditions', $nst + '.ProductCondition', 'conditions', true, false);
$ref.prop('dummy', 'string', 'dummy', false, true);

$nso.SitelinksExtension = function() {
  $nso.AdExtension.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.SitelinksExtension', false, $nst + '.AdExtension');
$ref.prop('sitelinks', $nst + '.Sitelink', 'sitelinks', true, false);

$nso.Sitelink = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.Sitelink', false, $sot);
$ref.prop('displayText', 'string', 'displayText', false, true);
$ref.prop('destinationUrl', 'string', 'destinationUrl', false, true);

$nso.MobileExtension = function() {
  $nso.AdExtension.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.MobileExtension', false, $nst + '.AdExtension');
$ref.prop('phoneNumber', 'string', 'phoneNumber', false, true);
$ref.prop('countryCode', 'string', 'countryCode', false, true);
$ref.prop('isCallOnly', 'boolean', 'isCallOnly', false, true);

$nso.LocationExtension = function() {
  $nso.AdExtension.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.LocationExtension', false, $nst + '.AdExtension');
$ref.prop('address', $nst + '.Address', 'address', false, false);
$ref.prop('geoPoint', $nst + '.GeoPoint', 'geoPoint', false, false);
$ref.prop('encodedLocation', 'byte', 'encodedLocation', true, true);
$ref.prop('companyName', 'string', 'companyName', false, true);
$ref.prop('phoneNumber', 'string', 'phoneNumber', false, true);
$ref.prop('source', $nst + '.LocationExtensionSource', 'source', false, false);
$ref.prop('iconMediaId', 'integer', 'iconMediaId', false, true);
$ref.prop('imageMediaId', 'integer', 'imageMediaId', false, true);

$nso.LocationExtensionSource = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.LocationExtensionSource', true, $sot);

$nso.LocationExtensionSource.ADWORDS_FRONTEND = 'ADWORDS_FRONTEND';
$nso.LocationExtensionSource.LBC_SYNC = 'LBC_SYNC';

$nso.OverrideInfo = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.OverrideInfo', false, $sot);
$ref.prop('item', $nst + '.LocationOverrideInfo', 'LocationOverrideInfo', false, false);

$nso.LocationOverrideInfo = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.LocationOverrideInfo', false, $sot);
$ref.prop('radius', 'integer', 'radius', false, true);
$ref.prop('radiusUnits', $nst + '.LocationOverrideInfoRadiusUnits', 'radiusUnits', false, false);

$nso.LocationOverrideInfoRadiusUnits = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.LocationOverrideInfoRadiusUnits', true, $sot);

$nso.LocationOverrideInfoRadiusUnits.KILOMETERS = 'KILOMETERS';
$nso.LocationOverrideInfoRadiusUnits.MILES = 'MILES';

$nso.AdExtensionOverrideStatus = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AdExtensionOverrideStatus', true, $sot);

$nso.AdExtensionOverrideStatus.ACTIVE = 'ACTIVE';
$nso.AdExtensionOverrideStatus.DELETED = 'DELETED';

$nso.AdExtensionOverrideApprovalStatus = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AdExtensionOverrideApprovalStatus', true, $sot);

$nso.AdExtensionOverrideApprovalStatus.APPROVED = 'APPROVED';
$nso.AdExtensionOverrideApprovalStatus.UNCHECKED = 'UNCHECKED';
$nso.AdExtensionOverrideApprovalStatus.DISAPPROVED = 'DISAPPROVED';

$nso.AdExtensionOverrideStats = function() {
  $nso.Stats.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AdExtensionOverrideStats', false, $nst + '.Stats');

$nso.AdExtensionOverrideOperation = function() {
  $nso.Operation.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AdExtensionOverrideOperation', false, $nst + '.Operation');
$ref.prop('operand', $nst + '.AdExtensionOverride', 'operand', false, false);

$nso.AdExtensionOverridePage = function() {
  $nso.Page.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AdExtensionOverridePage', false, $nst + '.Page');
$ref.prop('entries', $nst + '.AdExtensionOverride', 'entries', true, false);

$nso.AdExtensionOverrideSelector = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AdExtensionOverrideSelector', false, $sot);
$ref.prop('campaignIds', 'integer', 'campaignIds', true, true);
$ref.prop('adIds', 'integer', 'adIds', true, true);
$ref.prop('adExtensionIds', 'integer', 'adExtensionIds', true, true);
$ref.prop('statuses', $nst + '.AdExtensionOverrideStatus', 'statuses', true, false);
$ref.prop('paging', $nst + '.Paging', 'paging', false, false);

$nso.AdExtensionOverrideError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AdExtensionOverrideError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.AdExtensionOverrideErrorReason', 'reason', false, false);

$nso.AdExtensionOverrideErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AdExtensionOverrideErrorReason', true, $sot);

$nso.AdExtensionOverrideErrorReason.AD_ALREADY_HAS_ADEXTENSION_OVERRIDE = 'AD_ALREADY_HAS_ADEXTENSION_OVERRIDE';
$nso.AdExtensionOverrideErrorReason.ADEXTENSION_ID_MUST_BE_SPECIFIED = 'ADEXTENSION_ID_MUST_BE_SPECIFIED';
$nso.AdExtensionOverrideErrorReason.ADEXTENSION_LATITUTE_CANNOT_CHANGE_AFTER_BEING_SET_ONCE = 'ADEXTENSION_LATITUTE_CANNOT_CHANGE_AFTER_BEING_SET_ONCE';
$nso.AdExtensionOverrideErrorReason.ADEXTENSION_LONGITUDE_CANNOT_CHANGE_AFTER_BEING_SET_ONCE = 'ADEXTENSION_LONGITUDE_CANNOT_CHANGE_AFTER_BEING_SET_ONCE';
$nso.AdExtensionOverrideErrorReason.ADEXTENSION_NOT_UNDER_CAMPAIGN = 'ADEXTENSION_NOT_UNDER_CAMPAIGN';
$nso.AdExtensionOverrideErrorReason.CANNOT_OPERATE_ON_DELETED_OVERRIDE = 'CANNOT_OPERATE_ON_DELETED_OVERRIDE';
$nso.AdExtensionOverrideErrorReason.CANNOT_OVERRIDE_EXTENSIONS_ON_NON_TEXT_AD = 'CANNOT_OVERRIDE_EXTENSIONS_ON_NON_TEXT_AD';
$nso.AdExtensionOverrideErrorReason.CANNOT_OVERRIDE_USING_NON_LOCATION_EXTENSION = 'CANNOT_OVERRIDE_USING_NON_LOCATION_EXTENSION';
$nso.AdExtensionOverrideErrorReason.INVALID_ADEXTENSION_ID = 'INVALID_ADEXTENSION_ID';
$nso.AdExtensionOverrideErrorReason.LOCATION_OVERRIDE_INFO_REQUIRED_FOR_NEW_LOCATION_EXTENSION_OVERRIDE = 'LOCATION_OVERRIDE_INFO_REQUIRED_FOR_NEW_LOCATION_EXTENSION_OVERRIDE';
$nso.AdExtensionOverrideErrorReason.OVERRIDE_INFO_MUST_BE_NULL_AFTER_BEING_SET_ONCE = 'OVERRIDE_INFO_MUST_BE_NULL_AFTER_BEING_SET_ONCE';
$nso.AdExtensionOverrideErrorReason.RADIUS_TOO_LARGE = 'RADIUS_TOO_LARGE';
$nso.AdExtensionOverrideErrorReason.RADIUS_TOO_SMALL = 'RADIUS_TOO_SMALL';
$nso.AdExtensionOverrideErrorReason.UNKNOWN_ADEXTENSION_OVERRIDE = 'UNKNOWN_ADEXTENSION_OVERRIDE';

$nso.ReportDefinitionService = function() {
  $sso.call(this);
  this.nametable_ = new google.ads.adwords.v201101.SoapNametable();
};

$ref = $dsf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ReportDefinitionService');
$ref.prop('requestHeader', $nst + '.RequestHeader', 'RequestHeader', false, false);
$ref.prop('responseHeader', $nst + '.ResponseHeader', 'ResponseHeader', false, false);
$ref.meth(
  'get',
  'https://adwords.google.com/api/adwords/cm/v201101',
  'https://adwords.google.com/api/adwords/cm/v201101',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.ReportDefinitionPage', isArray: false, isSystem: false},
  [{propertyName: 'responseHeader', direction: 'out'}, {propertyName: 'requestHeader', direction: 'in'}],
  [{className: $nst + '.ReportDefinitionSelector', isArray: false, isSystem: false, name: 'selector', xmlElementName: 'selector'}]
);
$ref.meth(
  'getReportFields',
  'https://adwords.google.com/api/adwords/cm/v201101',
  'https://adwords.google.com/api/adwords/cm/v201101',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.ReportDefinitionField', isArray: true, isSystem: false},
  [{propertyName: 'responseHeader', direction: 'out'}, {propertyName: 'requestHeader', direction: 'in'}],
  [{className: $nst + '.ReportDefinitionReportType', isArray: false, isSystem: false, name: 'reportType', xmlElementName: 'reportType'}]
);
$ref.meth(
  'mutate',
  'https://adwords.google.com/api/adwords/cm/v201101',
  'https://adwords.google.com/api/adwords/cm/v201101',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.ReportDefinition', isArray: true, isSystem: false},
  [{propertyName: 'responseHeader', direction: 'out'}, {propertyName: 'requestHeader', direction: 'in'}],
  [{className: $nst + '.ReportDefinitionOperation', isArray: true, isSystem: false, name: 'operations', xmlElementName: 'operations'}]
);

$nso.ReportDefinitionService.prototype.get = function(selector, onsuccess, onfailure) {
  this.invoke.call(this, 'get', [selector], onsuccess, onfailure);
};

$nso.ReportDefinitionService.prototype.getReportFields = function(reportType, onsuccess, onfailure) {
  this.invoke.call(this, 'getReportFields', [reportType], onsuccess, onfailure);
};

$nso.ReportDefinitionService.prototype.mutate = function(operations, onsuccess, onfailure) {
  this.invoke.call(this, 'mutate', [operations], onsuccess, onfailure);
};

$nso.ReportDefinitionOperation = function() {
  $nso.Operation.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ReportDefinitionOperation', false, $nst + '.Operation');
$ref.prop('operand', $nst + '.ReportDefinition', 'operand', false, false);

$nso.ReportDefinition = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ReportDefinition', false, $sot);
$ref.prop('id', 'integer', 'id', false, true);
$ref.prop('selector', $nst + '.Selector', 'selector', false, false);
$ref.prop('reportName', 'string', 'reportName', false, true);
$ref.prop('reportType', $nst + '.ReportDefinitionReportType', 'reportType', false, false);
$ref.prop('hasAttachment', 'boolean', 'hasAttachment', false, true);
$ref.prop('dateRangeType', $nst + '.ReportDefinitionDateRangeType', 'dateRangeType', false, false);
$ref.prop('downloadFormat', $nst + '.DownloadFormat', 'downloadFormat', false, false);
$ref.prop('creationTime', 'string', 'creationTime', false, true);
$ref.prop('crossClient', 'boolean', 'crossClient', false, true);
$ref.prop('clientSelectors', $nst + '.ClientSelector', 'clientSelectors', true, false);

$nso.ReportDefinitionReportType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ReportDefinitionReportType', true, $sot);

$nso.ReportDefinitionReportType.KEYWORDS_PERFORMANCE_REPORT = 'KEYWORDS_PERFORMANCE_REPORT';
$nso.ReportDefinitionReportType.AD_PERFORMANCE_REPORT = 'AD_PERFORMANCE_REPORT';
$nso.ReportDefinitionReportType.URL_PERFORMANCE_REPORT = 'URL_PERFORMANCE_REPORT';
$nso.ReportDefinitionReportType.ADGROUP_PERFORMANCE_REPORT = 'ADGROUP_PERFORMANCE_REPORT';
$nso.ReportDefinitionReportType.CAMPAIGN_PERFORMANCE_REPORT = 'CAMPAIGN_PERFORMANCE_REPORT';
$nso.ReportDefinitionReportType.ACCOUNT_PERFORMANCE_REPORT = 'ACCOUNT_PERFORMANCE_REPORT';
$nso.ReportDefinitionReportType.DEMOGRAPHIC_PERFORMANCE_REPORT = 'DEMOGRAPHIC_PERFORMANCE_REPORT';
$nso.ReportDefinitionReportType.GEO_PERFORMANCE_REPORT = 'GEO_PERFORMANCE_REPORT';
$nso.ReportDefinitionReportType.SEARCH_QUERY_PERFORMANCE_REPORT = 'SEARCH_QUERY_PERFORMANCE_REPORT';
$nso.ReportDefinitionReportType.MANAGED_PLACEMENTS_PERFORMANCE_REPORT = 'MANAGED_PLACEMENTS_PERFORMANCE_REPORT';
$nso.ReportDefinitionReportType.AUTOMATIC_PLACEMENTS_PERFORMANCE_REPORT = 'AUTOMATIC_PLACEMENTS_PERFORMANCE_REPORT';
$nso.ReportDefinitionReportType.CAMPAIGN_NEGATIVE_KEYWORDS_PERFORMANCE_REPORT = 'CAMPAIGN_NEGATIVE_KEYWORDS_PERFORMANCE_REPORT';
$nso.ReportDefinitionReportType.CAMPAIGN_NEGATIVE_PLACEMENTS_PERFORMANCE_REPORT = 'CAMPAIGN_NEGATIVE_PLACEMENTS_PERFORMANCE_REPORT';
$nso.ReportDefinitionReportType.AD_EXTENSIONS_PERFORMANCE_REPORT = 'AD_EXTENSIONS_PERFORMANCE_REPORT';
$nso.ReportDefinitionReportType.DESTINATION_URL_REPORT = 'DESTINATION_URL_REPORT';
$nso.ReportDefinitionReportType.CREATIVE_CONVERSION_REPORT = 'CREATIVE_CONVERSION_REPORT';
$nso.ReportDefinitionReportType.UNKNOWN = 'UNKNOWN';

$nso.ReportDefinitionDateRangeType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ReportDefinitionDateRangeType', true, $sot);

$nso.ReportDefinitionDateRangeType.TODAY = 'TODAY';
$nso.ReportDefinitionDateRangeType.YESTERDAY = 'YESTERDAY';
$nso.ReportDefinitionDateRangeType.LAST_7_DAYS = 'LAST_7_DAYS';
$nso.ReportDefinitionDateRangeType.THIS_WEEK_SUN_TODAY = 'THIS_WEEK_SUN_TODAY';
$nso.ReportDefinitionDateRangeType.THIS_WEEK_MON_TODAY = 'THIS_WEEK_MON_TODAY';
$nso.ReportDefinitionDateRangeType.LAST_WEEK = 'LAST_WEEK';
$nso.ReportDefinitionDateRangeType.LAST_14_DAYS = 'LAST_14_DAYS';
$nso.ReportDefinitionDateRangeType.LAST_30_DAYS = 'LAST_30_DAYS';
$nso.ReportDefinitionDateRangeType.LAST_BUSINESS_WEEK = 'LAST_BUSINESS_WEEK';
$nso.ReportDefinitionDateRangeType.LAST_WEEK_SUN_SAT = 'LAST_WEEK_SUN_SAT';
$nso.ReportDefinitionDateRangeType.THIS_MONTH = 'THIS_MONTH';
$nso.ReportDefinitionDateRangeType.LAST_MONTH = 'LAST_MONTH';
$nso.ReportDefinitionDateRangeType.ALL_TIME = 'ALL_TIME';
$nso.ReportDefinitionDateRangeType.CUSTOM_DATE = 'CUSTOM_DATE';

$nso.DownloadFormat = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.DownloadFormat', true, $sot);

$nso.DownloadFormat.CSVFOREXCEL = 'CSVFOREXCEL';
$nso.DownloadFormat.CSV = 'CSV';
$nso.DownloadFormat.TSV = 'TSV';
$nso.DownloadFormat.XML = 'XML';
$nso.DownloadFormat.GZIPPED_CSV = 'GZIPPED_CSV';
$nso.DownloadFormat.GZIPPED_XML = 'GZIPPED_XML';

$nso.ClientSelector = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ClientSelector', false, $sot);
$ref.prop('login', 'string', 'login', false, true);
$ref.prop('predicates', $nst + '.Predicate', 'predicates', true, false);

$nso.EnumValuePair = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.EnumValuePair', false, $sot);
$ref.prop('enumValue', 'string', 'enumValue', false, true);
$ref.prop('enumDisplayValue', 'string', 'enumDisplayValue', false, true);

$nso.ReportDefinitionField = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ReportDefinitionField', false, $sot);
$ref.prop('fieldName', 'string', 'fieldName', false, true);
$ref.prop('displayFieldName', 'string', 'displayFieldName', false, true);
$ref.prop('xmlAttributeName', 'string', 'xmlAttributeName', false, true);
$ref.prop('fieldType', 'string', 'fieldType', false, true);
$ref.prop('enumValues', 'string', 'enumValues', true, true);
$ref.prop('canSelect', 'boolean', 'canSelect', false, true);
$ref.prop('canFilter', 'boolean', 'canFilter', false, true);
$ref.prop('enumValuePairs', $nst + '.EnumValuePair', 'enumValuePairs', true, false);

$nso.ReportDefinitionPage = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ReportDefinitionPage', false, $sot);
$ref.prop('entries', $nst + '.ReportDefinition', 'entries', true, false);
$ref.prop('totalNumEntries', 'integer', 'totalNumEntries', false, true);

$nso.ReportDefinitionSelector = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ReportDefinitionSelector', false, $sot);
$ref.prop('definitionIds', 'integer', 'definitionIds', true, true);
$ref.prop('paging', $nst + '.Paging', 'paging', false, false);

$nso.ReportDefinitionError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ReportDefinitionError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.ReportDefinitionErrorReason', 'reason', false, false);

$nso.ReportDefinitionErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ReportDefinitionErrorReason', true, $sot);

$nso.ReportDefinitionErrorReason.INVALID_FIELD_NAME_FOR_REPORT = 'INVALID_FIELD_NAME_FOR_REPORT';
$nso.ReportDefinitionErrorReason.UNABLE_TO_FIND_MAPPING_FOR_THIS_REPORT = 'UNABLE_TO_FIND_MAPPING_FOR_THIS_REPORT';
$nso.ReportDefinitionErrorReason.INVALID_COLUMN_NAME_FOR_REPORT = 'INVALID_COLUMN_NAME_FOR_REPORT';
$nso.ReportDefinitionErrorReason.INVALID_REPORT_DEFINITION_ID = 'INVALID_REPORT_DEFINITION_ID';
$nso.ReportDefinitionErrorReason.REPORT_SELECTOR_CANNOT_BE_NULL = 'REPORT_SELECTOR_CANNOT_BE_NULL';
$nso.ReportDefinitionErrorReason.NO_ENUMS_FOR_THIS_COLUMN_NAME = 'NO_ENUMS_FOR_THIS_COLUMN_NAME';
$nso.ReportDefinitionErrorReason.INVALID_VIEW = 'INVALID_VIEW';
$nso.ReportDefinitionErrorReason.SORTING_NOT_SUPPORTED = 'SORTING_NOT_SUPPORTED';
$nso.ReportDefinitionErrorReason.PAGING_NOT_SUPPORTED = 'PAGING_NOT_SUPPORTED';
$nso.ReportDefinitionErrorReason.CUSTOMER_SERVING_TYPE_REPORT_MISMATCH = 'CUSTOMER_SERVING_TYPE_REPORT_MISMATCH';

$nso.CollectionSizeError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.CollectionSizeError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.CollectionSizeErrorReason', 'reason', false, false);

$nso.CollectionSizeErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.CollectionSizeErrorReason', true, $sot);

$nso.CollectionSizeErrorReason.TOO_FEW = 'TOO_FEW';
$nso.CollectionSizeErrorReason.TOO_MANY = 'TOO_MANY';

$nso.ServicedAccountService = function() {
  $sso.call(this);
  this.nametable_ = new google.ads.adwords.v201101.SoapNametable();
};

$ref = $dsf('https://adwords.google.com/api/adwords/mcm/v201101', $nst + '.ServicedAccountService');
$ref.prop('requestHeader', $nst + '.RequestHeader', 'RequestHeader', false, false);
$ref.prop('responseHeader', $nst + '.ResponseHeader', 'ResponseHeader', false, false);
$ref.meth(
  'get',
  'https://adwords.google.com/api/adwords/mcm/v201101',
  'https://adwords.google.com/api/adwords/mcm/v201101',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.ServicedAccountGraph', isArray: false, isSystem: false},
  [{propertyName: 'responseHeader', direction: 'out'}, {propertyName: 'requestHeader', direction: 'in'}],
  [{className: $nst + '.ServicedAccountSelector', isArray: false, isSystem: false, name: 'selector', xmlElementName: 'selector'}]
);

$nso.ServicedAccountService.prototype.get = function(selector, onsuccess, onfailure) {
  this.invoke.call(this, 'get', [selector], onsuccess, onfailure);
};

$nso.CustomerId = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/mcm/v201101', $nst + '.CustomerId', false, $sot);
$ref.prop('id', 'integer', 'id', false, true);

$nso.Link = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/mcm/v201101', $nst + '.Link', false, $sot);
$ref.prop('managerId', $nst + '.CustomerId', 'managerId', false, false);
$ref.prop('clientId', $nst + '.CustomerId', 'clientId', false, false);
$ref.prop('serviceType', $nst + '.ServiceType', 'serviceType', false, false);
$ref.prop('typeOfLink', $nst + '.LinkType', 'typeOfLink', false, false);
$ref.prop('descriptiveName', 'string', 'descriptiveName', false, true);
$ref.prop('linkType', 'string', 'Link.Type', false, true);

$nso.ServiceType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/mcm/v201101', $nst + '.ServiceType', true, $sot);

$nso.ServiceType.UI_AND_API = 'UI_AND_API';
$nso.ServiceType.API_ONLY = 'API_ONLY';
$nso.ServiceType.UNKNOWN = 'UNKNOWN';

$nso.LinkType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/mcm/v201101', $nst + '.LinkType', true, $sot);

$nso.LinkType.ESTABLISHED = 'ESTABLISHED';
$nso.LinkType.INVITATION = 'INVITATION';
$nso.LinkType.UNKNOWN = 'UNKNOWN';

$nso.Account = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/mcm/v201101', $nst + '.Account', false, $sot);
$ref.prop('customerId', 'integer', 'customerId', false, true);
$ref.prop('login', 'string', 'login', false, true);
$ref.prop('companyName', 'string', 'companyName', false, true);
$ref.prop('canManageClients', 'boolean', 'canManageClients', false, true);
$ref.prop('currencyCode', 'string', 'currencyCode', false, true);
$ref.prop('dateTimeZone', 'string', 'dateTimeZone', false, true);

$nso.ServicedAccountGraph = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/mcm/v201101', $nst + '.ServicedAccountGraph', false, $sot);
$ref.prop('accounts', $nst + '.Account', 'accounts', true, false);
$ref.prop('links', $nst + '.Link', 'links', true, false);

$nso.ServicedAccountSelector = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/mcm/v201101', $nst + '.ServicedAccountSelector', false, $sot);
$ref.prop('customerIds', 'integer', 'customerIds', true, true);
$ref.prop('enablePaging', 'boolean', 'enablePaging', false, true);
$ref.prop('serviceTypes', $nst + '.ServiceType', 'serviceTypes', true, false);
$ref.prop('submanagersOnly', 'boolean', 'submanagersOnly', false, true);

$nso.ServicedAccountError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/mcm/v201101', $nst + '.ServicedAccountError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.ServicedAccountErrorReason', 'reason', false, false);

$nso.ServicedAccountErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/mcm/v201101', $nst + '.ServicedAccountErrorReason', true, $sot);

$nso.ServicedAccountErrorReason.BAD_IDS = 'BAD_IDS';
$nso.ServicedAccountErrorReason.NOT_AUTHORIZED = 'NOT_AUTHORIZED';
$nso.ServicedAccountErrorReason.UNKNOWN = 'UNKNOWN';

$nso.TargetingIdeaService = function() {
  $sso.call(this);
  this.nametable_ = new google.ads.adwords.v201101.SoapNametable();
};

$ref = $dsf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.TargetingIdeaService');
$ref.prop('requestHeader', $nst + '.RequestHeader', 'RequestHeader', false, false);
$ref.prop('responseHeader', $nst + '.ResponseHeader', 'ResponseHeader', false, false);
$ref.meth(
  'get',
  'https://adwords.google.com/api/adwords/o/v201101',
  'https://adwords.google.com/api/adwords/o/v201101',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.TargetingIdeaPage', isArray: false, isSystem: false},
  [{propertyName: 'responseHeader', direction: 'out'}, {propertyName: 'requestHeader', direction: 'in'}],
  [{className: $nst + '.TargetingIdeaSelector', isArray: false, isSystem: false, name: 'selector', xmlElementName: 'selector'}]
);
$ref.meth(
  'getBulkKeywordIdeas',
  'https://adwords.google.com/api/adwords/o/v201101',
  'https://adwords.google.com/api/adwords/o/v201101',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.TargetingIdeaPage', isArray: false, isSystem: false},
  [{propertyName: 'responseHeader', direction: 'out'}, {propertyName: 'requestHeader', direction: 'in'}],
  [{className: $nst + '.TargetingIdeaSelector', isArray: false, isSystem: false, name: 'selector', xmlElementName: 'selector'}]
);

$nso.TargetingIdeaService.prototype.get = function(selector, onsuccess, onfailure) {
  this.invoke.call(this, 'get', [selector], onsuccess, onfailure);
};

$nso.TargetingIdeaService.prototype.getBulkKeywordIdeas = function(selector, onsuccess, onfailure) {
  this.invoke.call(this, 'getBulkKeywordIdeas', [selector], onsuccess, onfailure);
};

$nso.WebpageDescriptor = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.WebpageDescriptor', false, $sot);
$ref.prop('url', 'string', 'url', false, true);
$ref.prop('title', 'string', 'title', false, true);

$nso.MonthlySearchVolume = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.MonthlySearchVolume', false, $sot);
$ref.prop('year', 'integer', 'year', false, true);
$ref.prop('month', 'integer', 'month', false, true);
$ref.prop('count', 'integer', 'count', false, true);

$nso.Range = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.Range', false, $sot);
$ref.prop('min', $nst + '.ComparableValue', 'min', false, false);
$ref.prop('max', $nst + '.ComparableValue', 'max', false, false);

$nso.InStreamAdInfo = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.InStreamAdInfo', false, $sot);
$ref.prop('maxAdDuration', 'integer', 'maxAdDuration', false, true);
$ref.prop('minAdDuration', 'integer', 'minAdDuration', false, true);
$ref.prop('medianAdDuration', 'integer', 'medianAdDuration', false, true);
$ref.prop('preRollPercent', 'double', 'preRollPercent', false, true);
$ref.prop('midRollPercent', 'double', 'midRollPercent', false, true);
$ref.prop('postRollPercent', 'double', 'postRollPercent', false, true);

$nso.AdFormatSpec = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.AdFormatSpec', false, $sot);
$ref.prop('format', $nst + '.SiteConstantsAdFormat', 'format', false, false);

$nso.SiteConstantsAdFormat = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.SiteConstantsAdFormat', true, $sot);

$nso.SiteConstantsAdFormat.UNKNOWN = 'UNKNOWN';
$nso.SiteConstantsAdFormat.TEXT = 'TEXT';
$nso.SiteConstantsAdFormat.IMAGE = 'IMAGE';
$nso.SiteConstantsAdFormat.VIDEO = 'VIDEO';
$nso.SiteConstantsAdFormat.INSTREAM = 'INSTREAM';
$nso.SiteConstantsAdFormat.AUDIO = 'AUDIO';

$nso.Attribute = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.Attribute', false, $sot);
$ref.prop('attributeType', 'string', 'Attribute.Type', false, true);

$nso.WebpageDescriptorAttribute = function() {
  $nso.Attribute.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.WebpageDescriptorAttribute', false, $nst + '.Attribute');
$ref.prop('value', $nst + '.WebpageDescriptor', 'value', false, false);

$nso.StringAttribute = function() {
  $nso.Attribute.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.StringAttribute', false, $nst + '.Attribute');
$ref.prop('value', 'string', 'value', false, true);

$nso.PlacementTypeAttribute = function() {
  $nso.Attribute.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.PlacementTypeAttribute', false, $nst + '.Attribute');
$ref.prop('value', $nst + '.SiteConstantsPlacementType', 'value', false, false);

$nso.SiteConstantsPlacementType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.SiteConstantsPlacementType', true, $sot);

$nso.SiteConstantsPlacementType.UNKNOWN = 'UNKNOWN';
$nso.SiteConstantsPlacementType.SITE = 'SITE';
$nso.SiteConstantsPlacementType.VIDEO = 'VIDEO';
$nso.SiteConstantsPlacementType.FEED = 'FEED';
$nso.SiteConstantsPlacementType.GAME = 'GAME';
$nso.SiteConstantsPlacementType.MOBILE = 'MOBILE';
$nso.SiteConstantsPlacementType.AUDIO = 'AUDIO';

$nso.PlacementAttribute = function() {
  $nso.Attribute.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.PlacementAttribute', false, $nst + '.Attribute');
$ref.prop('value', $nst + '.Placement', 'value', false, false);

$nso.OpportunityIdeaTypeAttribute = function() {
  $nso.Attribute.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.OpportunityIdeaTypeAttribute', false, $nst + '.Attribute');
$ref.prop('value', $nst + '.OpportunityIdeaType', 'value', false, false);

$nso.OpportunityIdeaType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.OpportunityIdeaType', true, $sot);

$nso.OpportunityIdeaType.KEYWORD = 'KEYWORD';
$nso.OpportunityIdeaType.BID = 'BID';
$nso.OpportunityIdeaType.BUDGET = 'BUDGET';

$nso.MonthlySearchVolumeAttribute = function() {
  $nso.Attribute.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.MonthlySearchVolumeAttribute', false, $nst + '.Attribute');
$ref.prop('value', $nst + '.MonthlySearchVolume', 'value', true, false);

$nso.MoneyAttribute = function() {
  $nso.Attribute.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.MoneyAttribute', false, $nst + '.Attribute');
$ref.prop('value', $nst + '.Money', 'value', false, false);

$nso.LongRangeAttribute = function() {
  $nso.Attribute.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.LongRangeAttribute', false, $nst + '.Attribute');
$ref.prop('value', $nst + '.Range', 'value', false, false);

$nso.LongAttribute = function() {
  $nso.Attribute.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.LongAttribute', false, $nst + '.Attribute');
$ref.prop('value', 'integer', 'value', false, true);

$nso.KeywordAttribute = function() {
  $nso.Attribute.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.KeywordAttribute', false, $nst + '.Attribute');
$ref.prop('value', $nst + '.Keyword', 'value', false, false);

$nso.IntegerSetAttribute = function() {
  $nso.Attribute.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.IntegerSetAttribute', false, $nst + '.Attribute');
$ref.prop('value', 'integer', 'value', true, true);

$nso.IntegerAttribute = function() {
  $nso.Attribute.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.IntegerAttribute', false, $nst + '.Attribute');
$ref.prop('value', 'integer', 'value', false, true);

$nso.InStreamAdInfoAttribute = function() {
  $nso.Attribute.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.InStreamAdInfoAttribute', false, $nst + '.Attribute');
$ref.prop('value', $nst + '.InStreamAdInfo', 'value', false, false);

$nso.IdeaTypeAttribute = function() {
  $nso.Attribute.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.IdeaTypeAttribute', false, $nst + '.Attribute');
$ref.prop('value', $nst + '.IdeaType', 'value', false, false);

$nso.IdeaType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.IdeaType', true, $sot);

$nso.IdeaType.KEYWORD = 'KEYWORD';
$nso.IdeaType.PLACEMENT = 'PLACEMENT';

$nso.DoubleAttribute = function() {
  $nso.Attribute.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.DoubleAttribute', false, $nst + '.Attribute');
$ref.prop('value', 'double', 'value', false, true);

$nso.CriterionAttribute = function() {
  $nso.Attribute.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.CriterionAttribute', false, $nst + '.Attribute');
$ref.prop('value', $nst + '.Criterion', 'value', false, false);

$nso.BooleanAttribute = function() {
  $nso.Attribute.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.BooleanAttribute', false, $nst + '.Attribute');
$ref.prop('value', 'boolean', 'value', false, true);

$nso.BidLandscapeAttribute = function() {
  $nso.Attribute.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.BidLandscapeAttribute', false, $nst + '.Attribute');
$ref.prop('value', $nst + '.BidLandscape', 'value', false, false);

$nso.AdFormatSpecListAttribute = function() {
  $nso.Attribute.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.AdFormatSpecListAttribute', false, $nst + '.Attribute');
$ref.prop('value', $nst + '.AdFormatSpec', 'value', true, false);

$nso.Type_AttributeMapEntry = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.Type_AttributeMapEntry', false, $sot);
$ref.prop('key', $nst + '.AttributeType', 'key', false, false);
$ref.prop('value', $nst + '.Attribute', 'value', false, false);

$nso.AttributeType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.AttributeType', true, $sot);

$nso.AttributeType.UNKNOWN = 'UNKNOWN';
$nso.AttributeType.AD_SHARE = 'AD_SHARE';
$nso.AttributeType.APPROX_CONTENT_IMPRESSIONS_PER_DAY = 'APPROX_CONTENT_IMPRESSIONS_PER_DAY';
$nso.AttributeType.AVERAGE_TARGETED_MONTHLY_SEARCHES = 'AVERAGE_TARGETED_MONTHLY_SEARCHES';
$nso.AttributeType.COMPETITION = 'COMPETITION';
$nso.AttributeType.CRITERION = 'CRITERION';
$nso.AttributeType.EXTRACTED_FROM_WEBPAGE = 'EXTRACTED_FROM_WEBPAGE';
$nso.AttributeType.FORMATS = 'FORMATS';
$nso.AttributeType.GLOBAL_MONTHLY_SEARCHES = 'GLOBAL_MONTHLY_SEARCHES';
$nso.AttributeType.IDEA_TYPE = 'IDEA_TYPE';
$nso.AttributeType.IN_STREAM_AD_INFO = 'IN_STREAM_AD_INFO';
$nso.AttributeType.KEYWORD_CATEGORY = 'KEYWORD_CATEGORY';
$nso.AttributeType.NGRAM_GROUP = 'NGRAM_GROUP';
$nso.AttributeType.PLACEMENT_NAME = 'PLACEMENT_NAME';
$nso.AttributeType.SAMPLE_URL = 'SAMPLE_URL';
$nso.AttributeType.SEARCH_SHARE = 'SEARCH_SHARE';
$nso.AttributeType.PLACEMENT_CATEGORY = 'PLACEMENT_CATEGORY';
$nso.AttributeType.PLACEMENT_TYPE = 'PLACEMENT_TYPE';
$nso.AttributeType.TARGETED_MONTHLY_SEARCHES = 'TARGETED_MONTHLY_SEARCHES';

$nso.TargetingIdea = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.TargetingIdea', false, $sot);
$ref.prop('data', $nst + '.Type_AttributeMapEntry', 'data', true, false);
$ref.prop('dummy', 'string', 'dummy', false, true);

$nso.TargetingIdeaPage = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.TargetingIdeaPage', false, $sot);
$ref.prop('totalNumEntries', 'integer', 'totalNumEntries', false, true);
$ref.prop('entries', $nst + '.TargetingIdea', 'entries', true, false);

$nso.LongComparisonOperation = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.LongComparisonOperation', false, $sot);
$ref.prop('minimum', 'integer', 'minimum', false, true);
$ref.prop('maximum', 'integer', 'maximum', false, true);

$nso.DoubleComparisonOperation = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.DoubleComparisonOperation', false, $sot);
$ref.prop('minimum', 'double', 'minimum', false, true);
$ref.prop('maximum', 'double', 'maximum', false, true);

$nso.SearchParameter = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.SearchParameter', false, $sot);
$ref.prop('searchParameterType', 'string', 'SearchParameter.Type', false, true);

$nso.SeedAdGroupIdSearchParameter = function() {
  $nso.SearchParameter.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.SeedAdGroupIdSearchParameter', false, $nst + '.SearchParameter');
$ref.prop('adGroupId', 'integer', 'adGroupId', false, true);

$nso.SearchShareSearchParameter = function() {
  $nso.SearchParameter.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.SearchShareSearchParameter', false, $nst + '.SearchParameter');
$ref.prop('operation', $nst + '.DoubleComparisonOperation', 'operation', false, false);

$nso.RelatedToUrlSearchParameter = function() {
  $nso.SearchParameter.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.RelatedToUrlSearchParameter', false, $nst + '.SearchParameter');
$ref.prop('urls', 'string', 'urls', true, true);
$ref.prop('includeSubUrls', 'boolean', 'includeSubUrls', false, true);

$nso.RelatedToKeywordSearchParameter = function() {
  $nso.SearchParameter.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.RelatedToKeywordSearchParameter', false, $nst + '.SearchParameter');
$ref.prop('keywords', $nst + '.Keyword', 'keywords', true, false);

$nso.PlacementTypeSearchParameter = function() {
  $nso.SearchParameter.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.PlacementTypeSearchParameter', false, $nst + '.SearchParameter');
$ref.prop('placementTypes', $nst + '.SiteConstantsPlacementType', 'placementTypes', true, false);

$nso.LanguageTargetSearchParameter = function() {
  $nso.SearchParameter.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.LanguageTargetSearchParameter', false, $nst + '.SearchParameter');
$ref.prop('languageTargets', $nst + '.LanguageTarget', 'languageTargets', true, false);

$nso.KeywordMatchTypeSearchParameter = function() {
  $nso.SearchParameter.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.KeywordMatchTypeSearchParameter', false, $nst + '.SearchParameter');
$ref.prop('keywordMatchTypes', $nst + '.KeywordMatchType', 'keywordMatchTypes', true, false);

$nso.KeywordCategoryIdSearchParameter = function() {
  $nso.SearchParameter.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.KeywordCategoryIdSearchParameter', false, $nst + '.SearchParameter');
$ref.prop('categoryId', 'integer', 'categoryId', false, true);

$nso.IncludeAdultContentSearchParameter = function() {
  $nso.SearchParameter.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.IncludeAdultContentSearchParameter', false, $nst + '.SearchParameter');

$nso.IdeaTextMatchesSearchParameter = function() {
  $nso.SearchParameter.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.IdeaTextMatchesSearchParameter', false, $nst + '.SearchParameter');
$ref.prop('included', 'string', 'included', true, true);
$ref.prop('excluded', 'string', 'excluded', true, true);
$ref.prop('priorityAction', $nst + '.MatchAction', 'priorityAction', false, false);

$nso.MatchAction = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.MatchAction', true, $sot);

$nso.MatchAction.INCLUDE = 'INCLUDE';
$nso.MatchAction.EXCLUDE = 'EXCLUDE';

$nso.GlobalMonthlySearchesSearchParameter = function() {
  $nso.SearchParameter.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.GlobalMonthlySearchesSearchParameter', false, $nst + '.SearchParameter');
$ref.prop('operation', $nst + '.LongComparisonOperation', 'operation', false, false);

$nso.ExcludedKeywordSearchParameter = function() {
  $nso.SearchParameter.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.ExcludedKeywordSearchParameter', false, $nst + '.SearchParameter');
$ref.prop('keywords', $nst + '.Keyword', 'keywords', true, false);

$nso.DeviceTypeSearchParameter = function() {
  $nso.SearchParameter.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.DeviceTypeSearchParameter', false, $nst + '.SearchParameter');
$ref.prop('deviceType', $nst + '.DeviceType', 'deviceType', false, false);

$nso.DeviceType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.DeviceType', true, $sot);

$nso.DeviceType.MOBILE_WAP = 'MOBILE_WAP';
$nso.DeviceType.MOBILE_WITH_FULL_BROWSER = 'MOBILE_WITH_FULL_BROWSER';
$nso.DeviceType.DESKTOPS_AND_LAPTOPS = 'DESKTOPS_AND_LAPTOPS';

$nso.CountryTargetSearchParameter = function() {
  $nso.SearchParameter.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.CountryTargetSearchParameter', false, $nst + '.SearchParameter');
$ref.prop('countryTargets', $nst + '.CountryTarget', 'countryTargets', true, false);

$nso.CompetitionSearchParameter = function() {
  $nso.SearchParameter.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.CompetitionSearchParameter', false, $nst + '.SearchParameter');
$ref.prop('levels', $nst + '.CompetitionSearchParameterLevel', 'levels', true, false);

$nso.CompetitionSearchParameterLevel = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.CompetitionSearchParameterLevel', true, $sot);

$nso.CompetitionSearchParameterLevel.LOW = 'LOW';
$nso.CompetitionSearchParameterLevel.MEDIUM = 'MEDIUM';
$nso.CompetitionSearchParameterLevel.HIGH = 'HIGH';

$nso.AverageTargetedMonthlySearchesSearchParameter = function() {
  $nso.SearchParameter.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.AverageTargetedMonthlySearchesSearchParameter', false, $nst + '.SearchParameter');
$ref.prop('operation', $nst + '.LongComparisonOperation', 'operation', false, false);

$nso.AdTypeSearchParameter = function() {
  $nso.SearchParameter.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.AdTypeSearchParameter', false, $nst + '.SearchParameter');
$ref.prop('adTypes', $nst + '.SiteConstantsAdType', 'adTypes', true, false);

$nso.SiteConstantsAdType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.SiteConstantsAdType', true, $sot);

$nso.SiteConstantsAdType.UNKNOWN = 'UNKNOWN';
$nso.SiteConstantsAdType.TEXT = 'TEXT';
$nso.SiteConstantsAdType.DISPLAY = 'DISPLAY';
$nso.SiteConstantsAdType.AUDIO = 'AUDIO';
$nso.SiteConstantsAdType.INSTREAM = 'INSTREAM';

$nso.AdShareSearchParameter = function() {
  $nso.SearchParameter.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.AdShareSearchParameter', false, $nst + '.SearchParameter');
$ref.prop('operation', $nst + '.DoubleComparisonOperation', 'operation', false, false);

$nso.TargetingIdeaSelector = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.TargetingIdeaSelector', false, $sot);
$ref.prop('searchParameters', $nst + '.SearchParameter', 'searchParameters', true, false);
$ref.prop('ideaType', $nst + '.IdeaType', 'ideaType', false, false);
$ref.prop('requestType', $nst + '.RequestType', 'requestType', false, false);
$ref.prop('requestedAttributeTypes', $nst + '.AttributeType', 'requestedAttributeTypes', true, false);
$ref.prop('paging', $nst + '.Paging', 'paging', false, false);
$ref.prop('localeCode', 'string', 'localeCode', false, true);
$ref.prop('currencyCode', 'string', 'currencyCode', false, true);

$nso.RequestType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.RequestType', true, $sot);

$nso.RequestType.IDEAS = 'IDEAS';
$nso.RequestType.STATS = 'STATS';

$nso.PolicyViolationErrorPart = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.PolicyViolationErrorPart', false, $sot);
$ref.prop('index', 'integer', 'index', false, true);
$ref.prop('length', 'integer', 'length', false, true);

$nso.PolicyViolationKey = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.PolicyViolationKey', false, $sot);
$ref.prop('policyName', 'string', 'policyName', false, true);
$ref.prop('violatingText', 'string', 'violatingText', false, true);

$nso.PolicyViolationError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.PolicyViolationError', false, $nst + '.ApiError');
$ref.prop('key', $nst + '.PolicyViolationKey', 'key', false, false);
$ref.prop('externalPolicyName', 'string', 'externalPolicyName', false, true);
$ref.prop('externalPolicyUrl', 'string', 'externalPolicyUrl', false, true);
$ref.prop('externalPolicyDescription', 'string', 'externalPolicyDescription', false, true);
$ref.prop('isExemptable', 'boolean', 'isExemptable', false, true);
$ref.prop('violatingParts', $nst + '.PolicyViolationErrorPart', 'violatingParts', true, false);

$nso.CriterionPolicyError = function() {
  $nso.PolicyViolationError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.CriterionPolicyError', false, $nst + '.PolicyViolationError');

$nso.AdGroupCriterionLimitExceeded = function() {
  $nso.EntityCountLimitExceeded.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AdGroupCriterionLimitExceeded', false, $nst + '.EntityCountLimitExceeded');
$ref.prop('limitType', $nst + '.AdGroupCriterionLimitExceededCriteriaLimitType', 'limitType', false, false);

$nso.AdGroupCriterionLimitExceededCriteriaLimitType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AdGroupCriterionLimitExceededCriteriaLimitType', true, $sot);

$nso.AdGroupCriterionLimitExceededCriteriaLimitType.ADGROUP_KEYWORD = 'ADGROUP_KEYWORD';
$nso.AdGroupCriterionLimitExceededCriteriaLimitType.ADGROUP_WEBSITE = 'ADGROUP_WEBSITE';

$nso.AdGroupCriterionError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AdGroupCriterionError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.AdGroupCriterionErrorReason', 'reason', false, false);

$nso.AdGroupCriterionErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AdGroupCriterionErrorReason', true, $sot);

$nso.AdGroupCriterionErrorReason.INVALID_ID_FILTER_TYPE = 'INVALID_ID_FILTER_TYPE';
$nso.AdGroupCriterionErrorReason.ID_FILTERS_HAVE_DIFF_FIELDS_SET = 'ID_FILTERS_HAVE_DIFF_FIELDS_SET';
$nso.AdGroupCriterionErrorReason.INAPPLICABLE_FOR_NEGATIVE = 'INAPPLICABLE_FOR_NEGATIVE';
$nso.AdGroupCriterionErrorReason.INAPPLICABLE_FILTER_SPECIFIED = 'INAPPLICABLE_FILTER_SPECIFIED';
$nso.AdGroupCriterionErrorReason.TOO_MANY_OPERTAIONS = 'TOO_MANY_OPERTAIONS';
$nso.AdGroupCriterionErrorReason.CANT_UPDATE_NEGATIVE = 'CANT_UPDATE_NEGATIVE';
$nso.AdGroupCriterionErrorReason.TYPE_MISMATCH = 'TYPE_MISMATCH';
$nso.AdGroupCriterionErrorReason.CONCRETE_TYPE_REQUIRED = 'CONCRETE_TYPE_REQUIRED';
$nso.AdGroupCriterionErrorReason.BID_INCOMPATIBLE_WITH_ADGROUP = 'BID_INCOMPATIBLE_WITH_ADGROUP';
$nso.AdGroupCriterionErrorReason.NETWORK_NOT_OVERRIDABLE = 'NETWORK_NOT_OVERRIDABLE';
$nso.AdGroupCriterionErrorReason.CURRENCY_MISMATCH = 'CURRENCY_MISMATCH';
$nso.AdGroupCriterionErrorReason.CRITERION_NOT_TARGETED = 'CRITERION_NOT_TARGETED';
$nso.AdGroupCriterionErrorReason.CANNOT_TARGET_AND_EXCLUDE = 'CANNOT_TARGET_AND_EXCLUDE';
$nso.AdGroupCriterionErrorReason.ILLEGAL_URL = 'ILLEGAL_URL';
$nso.AdGroupCriterionErrorReason.INVALID_VERTICAL_PATH = 'INVALID_VERTICAL_PATH';
$nso.AdGroupCriterionErrorReason.NO_EFFECTIVE_BID_FOR_THIS_CRITERION = 'NO_EFFECTIVE_BID_FOR_THIS_CRITERION';
$nso.AdGroupCriterionErrorReason.INVALID_KEYWORD_TEXT = 'INVALID_KEYWORD_TEXT';
$nso.AdGroupCriterionErrorReason.INVALID_DESTINATION_URL = 'INVALID_DESTINATION_URL';
$nso.AdGroupCriterionErrorReason.KEYWORD_LEVEL_BID_NOT_SUPPORTED_FOR_MANUALCPM = 'KEYWORD_LEVEL_BID_NOT_SUPPORTED_FOR_MANUALCPM';
$nso.AdGroupCriterionErrorReason.INVALID_USER_STATUS = 'INVALID_USER_STATUS';
$nso.AdGroupCriterionErrorReason.CANNOT_ADD_CRITERIA_TYPE = 'CANNOT_ADD_CRITERIA_TYPE';
$nso.AdGroupCriterionErrorReason.CANNOT_EXCLUDE_CRITERIA_TYPE = 'CANNOT_EXCLUDE_CRITERIA_TYPE';
$nso.AdGroupCriterionErrorReason.PRODUCT_FILTER_TOO_LONG = 'PRODUCT_FILTER_TOO_LONG';
$nso.AdGroupCriterionErrorReason.INVALID_PRODUCT_FILTER = 'INVALID_PRODUCT_FILTER';
$nso.AdGroupCriterionErrorReason.UNKNOWN = 'UNKNOWN';

$nso.TargetingIdeaError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.TargetingIdeaError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.TargetingIdeaErrorReason', 'reason', false, false);

$nso.TargetingIdeaErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.TargetingIdeaErrorReason', true, $sot);

$nso.TargetingIdeaErrorReason.DUPLICATE_SEARCH_FILTER_TYPES_PRESENT = 'DUPLICATE_SEARCH_FILTER_TYPES_PRESENT';
$nso.TargetingIdeaErrorReason.INSUFFICIENT_SEARCH_PARAMETERS = 'INSUFFICIENT_SEARCH_PARAMETERS';
$nso.TargetingIdeaErrorReason.INVALID_ATTRIBUTE_TYPE = 'INVALID_ATTRIBUTE_TYPE';
$nso.TargetingIdeaErrorReason.INVALID_SEARCH_PARAMETERS = 'INVALID_SEARCH_PARAMETERS';
$nso.TargetingIdeaErrorReason.MUTUALLY_EXCLUSIVE_SEARCH_PARAMETERS_IN_QUERY = 'MUTUALLY_EXCLUSIVE_SEARCH_PARAMETERS_IN_QUERY';
$nso.TargetingIdeaErrorReason.SERVICE_UNAVAILABLE = 'SERVICE_UNAVAILABLE';
$nso.TargetingIdeaErrorReason.INVALID_URL_IN_SEARCH_PARAMETER = 'INVALID_URL_IN_SEARCH_PARAMETER';
$nso.TargetingIdeaErrorReason.TOO_MANY_RESULTS_REQUESTED = 'TOO_MANY_RESULTS_REQUESTED';
$nso.TargetingIdeaErrorReason.NO_PAGING_IN_SELECTOR = 'NO_PAGING_IN_SELECTOR';

$nso.MatchesRegexError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.MatchesRegexError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.MatchesRegexErrorReason', 'reason', false, false);

$nso.MatchesRegexErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.MatchesRegexErrorReason', true, $sot);

$nso.MatchesRegexErrorReason.UNKNOWN = 'UNKNOWN';
$nso.MatchesRegexErrorReason.DOES_NOT_MATCH = 'DOES_NOT_MATCH';

$nso.CurrencyCodeError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.CurrencyCodeError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.CurrencyCodeErrorReason', 'reason', false, false);

$nso.CurrencyCodeErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.CurrencyCodeErrorReason', true, $sot);

$nso.CurrencyCodeErrorReason.UNSUPPORTED_CURRENCY_CODE = 'UNSUPPORTED_CURRENCY_CODE';

$nso.TrafficEstimatorService = function() {
  $sso.call(this);
  this.nametable_ = new google.ads.adwords.v201101.SoapNametable();
};

$ref = $dsf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.TrafficEstimatorService');
$ref.prop('requestHeader', $nst + '.RequestHeader', 'RequestHeader', false, false);
$ref.prop('responseHeader', $nst + '.ResponseHeader', 'ResponseHeader', false, false);
$ref.meth(
  'get',
  'https://adwords.google.com/api/adwords/o/v201101',
  'https://adwords.google.com/api/adwords/o/v201101',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.TrafficEstimatorResult', isArray: false, isSystem: false},
  [{propertyName: 'responseHeader', direction: 'out'}, {propertyName: 'requestHeader', direction: 'in'}],
  [{className: $nst + '.TrafficEstimatorSelector', isArray: false, isSystem: false, name: 'selector', xmlElementName: 'selector'}]
);

$nso.TrafficEstimatorService.prototype.get = function(selector, onsuccess, onfailure) {
  this.invoke.call(this, 'get', [selector], onsuccess, onfailure);
};

$nso.StatsEstimate = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.StatsEstimate', false, $sot);
$ref.prop('averageCpc', $nst + '.Money', 'averageCpc', false, false);
$ref.prop('averagePosition', 'double', 'averagePosition', false, true);
$ref.prop('clicksPerDay', 'System.Single', 'clicksPerDay', false, true);
$ref.prop('totalCost', $nst + '.Money', 'totalCost', false, false);

$nso.Estimate = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.Estimate', false, $sot);
$ref.prop('estimateType', 'string', 'Estimate.Type', false, true);

$nso.CampaignEstimate = function() {
  $nso.Estimate.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.CampaignEstimate', false, $nst + '.Estimate');
$ref.prop('campaignId', 'integer', 'campaignId', false, true);
$ref.prop('adGroupEstimates', $nst + '.AdGroupEstimate', 'adGroupEstimates', true, false);

$nso.AdGroupEstimate = function() {
  $nso.Estimate.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.AdGroupEstimate', false, $nst + '.Estimate');
$ref.prop('adGroupId', 'integer', 'adGroupId', false, true);
$ref.prop('keywordEstimates', $nst + '.KeywordEstimate', 'keywordEstimates', true, false);

$nso.KeywordEstimate = function() {
  $nso.Estimate.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.KeywordEstimate', false, $nst + '.Estimate');
$ref.prop('criterionId', 'integer', 'criterionId', false, true);
$ref.prop('min', $nst + '.StatsEstimate', 'min', false, false);
$ref.prop('max', $nst + '.StatsEstimate', 'max', false, false);

$nso.TrafficEstimatorResult = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.TrafficEstimatorResult', false, $sot);
$ref.prop('campaignEstimates', $nst + '.CampaignEstimate', 'campaignEstimates', true, false);
$ref.prop('dummy', 'string', 'dummy', false, true);

$nso.EstimateRequest = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.EstimateRequest', false, $sot);
$ref.prop('estimateRequestType', 'string', 'EstimateRequest.Type', false, true);

$nso.CampaignEstimateRequest = function() {
  $nso.EstimateRequest.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.CampaignEstimateRequest', false, $nst + '.EstimateRequest');
$ref.prop('campaignId', 'integer', 'campaignId', false, true);
$ref.prop('adGroupEstimateRequests', $nst + '.AdGroupEstimateRequest', 'adGroupEstimateRequests', true, false);
$ref.prop('targets', $nst + '.Target', 'targets', true, false);

$nso.AdGroupEstimateRequest = function() {
  $nso.EstimateRequest.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.AdGroupEstimateRequest', false, $nst + '.EstimateRequest');
$ref.prop('adGroupId', 'integer', 'adGroupId', false, true);
$ref.prop('keywordEstimateRequests', $nst + '.KeywordEstimateRequest', 'keywordEstimateRequests', true, false);
$ref.prop('maxCpc', $nst + '.Money', 'maxCpc', false, false);

$nso.KeywordEstimateRequest = function() {
  $nso.EstimateRequest.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.KeywordEstimateRequest', false, $nst + '.EstimateRequest');
$ref.prop('keyword', $nst + '.Keyword', 'keyword', false, false);
$ref.prop('maxCpc', $nst + '.Money', 'maxCpc', false, false);

$nso.TrafficEstimatorSelector = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.TrafficEstimatorSelector', false, $sot);
$ref.prop('campaignEstimateRequests', $nst + '.CampaignEstimateRequest', 'campaignEstimateRequests', true, false);
$ref.prop('dummy', 'string', 'dummy', false, true);

$nso.IdError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.IdError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.IdErrorReason', 'reason', false, false);

$nso.IdErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.IdErrorReason', true, $sot);

$nso.IdErrorReason.NOT_FOUND = 'NOT_FOUND';

$nso.EntityAccessDenied = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.EntityAccessDenied', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.EntityAccessDeniedReason', 'reason', false, false);

$nso.EntityAccessDeniedReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.EntityAccessDeniedReason', true, $sot);

$nso.EntityAccessDeniedReason.READ_ACCESS_DENIED = 'READ_ACCESS_DENIED';
$nso.EntityAccessDeniedReason.WRITE_ACCESS_DENIED = 'WRITE_ACCESS_DENIED';

$nso.TrafficEstimatorError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.TrafficEstimatorError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.TrafficEstimatorErrorReason', 'reason', false, false);

$nso.TrafficEstimatorErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.TrafficEstimatorErrorReason', true, $sot);

$nso.TrafficEstimatorErrorReason.NO_CAMPAIGN_FOR_AD_GROUP_ESTIMATE_REQUEST = 'NO_CAMPAIGN_FOR_AD_GROUP_ESTIMATE_REQUEST';
$nso.TrafficEstimatorErrorReason.NO_AD_GROUP_FOR_KEYWORD_ESTIMATE_REQUEST = 'NO_AD_GROUP_FOR_KEYWORD_ESTIMATE_REQUEST';
$nso.TrafficEstimatorErrorReason.NO_MAX_CPC_FOR_KEYWORD_ESTIMATE_REQUEST = 'NO_MAX_CPC_FOR_KEYWORD_ESTIMATE_REQUEST';
$nso.TrafficEstimatorErrorReason.TOO_MANY_KEYWORD_ESTIMATE_REQUESTS = 'TOO_MANY_KEYWORD_ESTIMATE_REQUESTS';
$nso.TrafficEstimatorErrorReason.TOO_MANY_CAMPAIGN_ESTIMATE_REQUESTS = 'TOO_MANY_CAMPAIGN_ESTIMATE_REQUESTS';
$nso.TrafficEstimatorErrorReason.TOO_MANY_ADGROUP_ESTIMATE_REQUESTS = 'TOO_MANY_ADGROUP_ESTIMATE_REQUESTS';
$nso.TrafficEstimatorErrorReason.TOO_MANY_TARGETS = 'TOO_MANY_TARGETS';
$nso.TrafficEstimatorErrorReason.INVALID_INPUT = 'INVALID_INPUT';
$nso.TrafficEstimatorErrorReason.SERVICE_UNAVAILABLE = 'SERVICE_UNAVAILABLE';

$nso.UserListService = function() {
  $sso.call(this);
  this.nametable_ = new google.ads.adwords.v201101.SoapNametable();
};

$ref = $dsf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.UserListService');
$ref.prop('requestHeader', $nst + '.RequestHeader', 'RequestHeader', false, false);
$ref.prop('responseHeader', $nst + '.ResponseHeader', 'ResponseHeader', false, false);
$ref.meth(
  'get',
  'https://adwords.google.com/api/adwords/cm/v201101',
  'https://adwords.google.com/api/adwords/cm/v201101',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.UserListPage', isArray: false, isSystem: false},
  [{propertyName: 'responseHeader', direction: 'out'}, {propertyName: 'requestHeader', direction: 'in'}],
  [{className: $nst + '.Selector', isArray: false, isSystem: false, name: 'serviceSelector', xmlElementName: 'serviceSelector'}]
);
$ref.meth(
  'mutate',
  'https://adwords.google.com/api/adwords/cm/v201101',
  'https://adwords.google.com/api/adwords/cm/v201101',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.UserListReturnValue', isArray: false, isSystem: false},
  [{propertyName: 'responseHeader', direction: 'out'}, {propertyName: 'requestHeader', direction: 'in'}],
  [{className: $nst + '.UserListOperation', isArray: true, isSystem: false, name: 'operations', xmlElementName: 'operations'}]
);

$nso.UserListService.prototype.get = function(serviceSelector, onsuccess, onfailure) {
  this.invoke.call(this, 'get', [serviceSelector], onsuccess, onfailure);
};

$nso.UserListService.prototype.mutate = function(operations, onsuccess, onfailure) {
  this.invoke.call(this, 'mutate', [operations], onsuccess, onfailure);
};

$nso.UserListReturnValue = function() {
  $nso.ListReturnValue.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.UserListReturnValue', false, $nst + '.ListReturnValue');
$ref.prop('value', $nst + '.UserList', 'value', true, false);

$nso.UserList = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.UserList', false, $sot);
$ref.prop('id', 'integer', 'id', false, true);
$ref.prop('isReadOnly', 'boolean', 'isReadOnly', false, true);
$ref.prop('name', 'string', 'name', false, true);
$ref.prop('description', 'string', 'description', false, true);
$ref.prop('status', $nst + '.UserListMembershipStatus', 'status', false, false);
$ref.prop('accessReason', $nst + '.AccessReason', 'accessReason', false, false);
$ref.prop('accountUserListStatus', $nst + '.AccountUserListStatus', 'accountUserListStatus', false, false);
$ref.prop('membershipLifeSpan', 'integer', 'membershipLifeSpan', false, true);
$ref.prop('size', 'integer', 'size', false, true);
$ref.prop('sizeRange', $nst + '.SizeRange', 'sizeRange', false, false);
$ref.prop('type', $nst + '.UserListType', 'type', false, false);
$ref.prop('userListType', 'string', 'UserList.Type', false, true);

$nso.UserListMembershipStatus = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.UserListMembershipStatus', true, $sot);

$nso.UserListMembershipStatus.OPEN = 'OPEN';
$nso.UserListMembershipStatus.CLOSED = 'CLOSED';

$nso.AccessReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AccessReason', true, $sot);

$nso.AccessReason.OWNED = 'OWNED';
$nso.AccessReason.SHARED = 'SHARED';
$nso.AccessReason.LICENSED = 'LICENSED';
$nso.AccessReason.SUBSCRIBED = 'SUBSCRIBED';

$nso.AccountUserListStatus = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AccountUserListStatus', true, $sot);

$nso.AccountUserListStatus.ACTIVE = 'ACTIVE';
$nso.AccountUserListStatus.INACTIVE = 'INACTIVE';

$nso.SizeRange = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.SizeRange', true, $sot);

$nso.SizeRange.LESS_THAN_FIVE_HUNDRED = 'LESS_THAN_FIVE_HUNDRED';
$nso.SizeRange.LESS_THAN_ONE_THOUSAND = 'LESS_THAN_ONE_THOUSAND';
$nso.SizeRange.ONE_THOUSAND_TO_TEN_THOUSAND = 'ONE_THOUSAND_TO_TEN_THOUSAND';
$nso.SizeRange.TEN_THOUSAND_TO_FIFTY_THOUSAND = 'TEN_THOUSAND_TO_FIFTY_THOUSAND';
$nso.SizeRange.FIFTY_THOUSAND_TO_ONE_HUNDRED_THOUSAND = 'FIFTY_THOUSAND_TO_ONE_HUNDRED_THOUSAND';
$nso.SizeRange.ONE_HUNDRED_THOUSAND_TO_THREE_HUNDRED_THOUSAND = 'ONE_HUNDRED_THOUSAND_TO_THREE_HUNDRED_THOUSAND';
$nso.SizeRange.THREE_HUNDRED_THOUSAND_TO_FIVE_HUNDRED_THOUSAND = 'THREE_HUNDRED_THOUSAND_TO_FIVE_HUNDRED_THOUSAND';
$nso.SizeRange.FIVE_HUNDRED_THOUSAND_TO_ONE_MILLION = 'FIVE_HUNDRED_THOUSAND_TO_ONE_MILLION';
$nso.SizeRange.ONE_MILLION_TO_TWO_MILLION = 'ONE_MILLION_TO_TWO_MILLION';
$nso.SizeRange.TWO_MILLION_TO_THREE_MILLION = 'TWO_MILLION_TO_THREE_MILLION';
$nso.SizeRange.THREE_MILLION_TO_FIVE_MILLION = 'THREE_MILLION_TO_FIVE_MILLION';
$nso.SizeRange.FIVE_MILLION_TO_TEN_MILLION = 'FIVE_MILLION_TO_TEN_MILLION';
$nso.SizeRange.TEN_MILLION_TO_TWENTY_MILLION = 'TEN_MILLION_TO_TWENTY_MILLION';
$nso.SizeRange.TWENTY_MILLION_TO_THIRTY_MILLION = 'TWENTY_MILLION_TO_THIRTY_MILLION';
$nso.SizeRange.THIRTY_MILLION_TO_FIFTY_MILLION = 'THIRTY_MILLION_TO_FIFTY_MILLION';
$nso.SizeRange.OVER_FIFTY_MILLION = 'OVER_FIFTY_MILLION';

$nso.UserListType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.UserListType', true, $sot);

$nso.UserListType.EXTERNAL_REMARKETING = 'EXTERNAL_REMARKETING';
$nso.UserListType.LOGICAL = 'LOGICAL';
$nso.UserListType.REMARKETING = 'REMARKETING';
$nso.UserListType.UNKNOWN = 'UNKNOWN';

$nso.RemarketingUserList = function() {
  $nso.UserList.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.RemarketingUserList', false, $nst + '.UserList');
$ref.prop('conversionTypes', $nst + '.UserListConversionType', 'conversionTypes', true, false);

$nso.UserListConversionType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.UserListConversionType', false, $sot);
$ref.prop('id', 'integer', 'id', false, true);
$ref.prop('name', 'string', 'name', false, true);
$ref.prop('category', $nst + '.UserListConversionTypeCategory', 'category', false, false);

$nso.UserListConversionTypeCategory = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.UserListConversionTypeCategory', true, $sot);

$nso.UserListConversionTypeCategory.BOOMERANG_EVENT = 'BOOMERANG_EVENT';
$nso.UserListConversionTypeCategory.OTHER = 'OTHER';

$nso.LogicalUserList = function() {
  $nso.UserList.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.LogicalUserList', false, $nst + '.UserList');
$ref.prop('rules', $nst + '.UserListLogicalRule', 'rules', true, false);

$nso.UserListLogicalRule = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.UserListLogicalRule', false, $sot);
$ref.prop('operator', $nst + '.UserListLogicalRuleOperator', 'operator', false, false);
$ref.prop('ruleOperands', $nst + '.LogicalUserListOperand', 'ruleOperands', true, false);

$nso.UserListLogicalRuleOperator = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.UserListLogicalRuleOperator', true, $sot);

$nso.UserListLogicalRuleOperator.ALL = 'ALL';
$nso.UserListLogicalRuleOperator.ANY = 'ANY';
$nso.UserListLogicalRuleOperator.NONE = 'NONE';
$nso.UserListLogicalRuleOperator.UNKNOWN = 'UNKNOWN';

$nso.LogicalUserListOperand = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.LogicalUserListOperand', false, $sot);
$ref.prop('item', 'System.Object', [{elementName: 'UserInterest', className: $nst + '.UserInterest'}, {elementName: 'UserList', className: $nst + '.UserList'}], false, true);

$nso.UserInterest = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.UserInterest', false, $sot);
$ref.prop('id', 'integer', 'id', false, true);
$ref.prop('name', 'string', 'name', false, true);
$ref.prop('sizeRange', $nst + '.SizeRange', 'sizeRange', false, false);

$nso.ExternalRemarketingUserList = function() {
  $nso.UserList.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ExternalRemarketingUserList', false, $nst + '.UserList');

$nso.UserListOperation = function() {
  $nso.Operation.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.UserListOperation', false, $nst + '.Operation');
$ref.prop('operand', $nst + '.UserList', 'operand', false, false);

$nso.UserListPage = function() {
  $nso.Page.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.UserListPage', false, $nst + '.Page');
$ref.prop('entries', $nst + '.UserList', 'entries', true, false);

$nso.UserListError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.UserListError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.UserListErrorReason', 'reason', false, false);

$nso.UserListErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.UserListErrorReason', true, $sot);

$nso.UserListErrorReason.EXTERNAL_REMARKETING_USER_LIST_MUTATE_NOT_SUPPORTED = 'EXTERNAL_REMARKETING_USER_LIST_MUTATE_NOT_SUPPORTED';
$nso.UserListErrorReason.CONCRETE_TYPE_REQUIRED = 'CONCRETE_TYPE_REQUIRED';
$nso.UserListErrorReason.CONVERSION_TYPE_ID_REQUIRED = 'CONVERSION_TYPE_ID_REQUIRED';
$nso.UserListErrorReason.DUPLICATE_CONVERSION_TYPES = 'DUPLICATE_CONVERSION_TYPES';
$nso.UserListErrorReason.INVALID_CONVERSION_TYPE = 'INVALID_CONVERSION_TYPE';
$nso.UserListErrorReason.INVALID_DESCRIPTION = 'INVALID_DESCRIPTION';
$nso.UserListErrorReason.INVALID_NAME = 'INVALID_NAME';
$nso.UserListErrorReason.INVALID_USER_INTEREST_LOGICAL_RULE_OPERAND = 'INVALID_USER_INTEREST_LOGICAL_RULE_OPERAND';
$nso.UserListErrorReason.INVALID_USER_LIST_LOGICAL_RULE_OPERAND = 'INVALID_USER_LIST_LOGICAL_RULE_OPERAND';
$nso.UserListErrorReason.MEMBERSHIP_LIFE_SPAN_NOT_POSITIVE = 'MEMBERSHIP_LIFE_SPAN_NOT_POSITIVE';
$nso.UserListErrorReason.NAME_ALREADY_USED = 'NAME_ALREADY_USED';
$nso.UserListErrorReason.NEW_CONVERSION_TYPE_NAME_REQUIRED = 'NEW_CONVERSION_TYPE_NAME_REQUIRED';
$nso.UserListErrorReason.OWNERSHIP_REQUIRED_FOR_SET = 'OWNERSHIP_REQUIRED_FOR_SET';
$nso.UserListErrorReason.REMOVE_NOT_SUPPORTED = 'REMOVE_NOT_SUPPORTED';
$nso.UserListErrorReason.USER_LIST_MUTATE_NOT_SUPPORTED = 'USER_LIST_MUTATE_NOT_SUPPORTED';
$nso.UserListErrorReason.USER_LIST_SERVICE_ERROR = 'USER_LIST_SERVICE_ERROR';

$nso.AdGroupAdService = function() {
  $sso.call(this);
  this.nametable_ = new google.ads.adwords.v201101.SoapNametable();
};

$ref = $dsf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AdGroupAdService');
$ref.prop('requestHeader', $nst + '.RequestHeader', 'RequestHeader', false, false);
$ref.prop('responseHeader', $nst + '.ResponseHeader', 'ResponseHeader', false, false);
$ref.meth(
  'get',
  'https://adwords.google.com/api/adwords/cm/v201101',
  'https://adwords.google.com/api/adwords/cm/v201101',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.AdGroupAdPage', isArray: false, isSystem: false},
  [{propertyName: 'responseHeader', direction: 'out'}, {propertyName: 'requestHeader', direction: 'in'}],
  [{className: $nst + '.Selector', isArray: false, isSystem: false, name: 'serviceSelector', xmlElementName: 'serviceSelector'}]
);
$ref.meth(
  'mutate',
  'https://adwords.google.com/api/adwords/cm/v201101',
  'https://adwords.google.com/api/adwords/cm/v201101',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.AdGroupAdReturnValue', isArray: false, isSystem: false},
  [{propertyName: 'responseHeader', direction: 'out'}, {propertyName: 'requestHeader', direction: 'in'}],
  [{className: $nst + '.AdGroupAdOperation', isArray: true, isSystem: false, name: 'operations', xmlElementName: 'operations'}]
);

$nso.AdGroupAdService.prototype.get = function(serviceSelector, onsuccess, onfailure) {
  this.invoke.call(this, 'get', [serviceSelector], onsuccess, onfailure);
};

$nso.AdGroupAdService.prototype.mutate = function(operations, onsuccess, onfailure) {
  this.invoke.call(this, 'mutate', [operations], onsuccess, onfailure);
};

$nso.AdGroupAdReturnValue = function() {
  $nso.ListReturnValue.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AdGroupAdReturnValue', false, $nst + '.ListReturnValue');
$ref.prop('value', $nst + '.AdGroupAd', 'value', true, false);

$nso.AdGroupAd = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AdGroupAd', false, $sot);
$ref.prop('adGroupId', 'integer', 'adGroupId', false, true);
$ref.prop('ad', $nst + '.Ad', 'ad', false, false);
$ref.prop('experimentData', $nst + '.AdGroupAdExperimentData', 'experimentData', false, false);
$ref.prop('status', $nst + '.AdGroupAdStatus', 'status', false, false);
$ref.prop('stats', $nst + '.AdStats', 'stats', false, false);

$nso.Ad = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.Ad', false, $sot);
$ref.prop('id', 'integer', 'id', false, true);
$ref.prop('url', 'string', 'url', false, true);
$ref.prop('displayUrl', 'string', 'displayUrl', false, true);
$ref.prop('approvalStatus', $nst + '.AdApprovalStatus', 'approvalStatus', false, false);
$ref.prop('disapprovalReasons', 'string', 'disapprovalReasons', true, true);
$ref.prop('trademarkDisapproved', 'boolean', 'trademarkDisapproved', false, true);
$ref.prop('adType', 'string', 'Ad.Type', false, true);

$nso.AdApprovalStatus = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AdApprovalStatus', true, $sot);

$nso.AdApprovalStatus.APPROVED = 'APPROVED';
$nso.AdApprovalStatus.FAMILY_SAFE = 'FAMILY_SAFE';
$nso.AdApprovalStatus.NON_FAMILY_SAFE = 'NON_FAMILY_SAFE';
$nso.AdApprovalStatus.PORN = 'PORN';
$nso.AdApprovalStatus.UNCHECKED = 'UNCHECKED';
$nso.AdApprovalStatus.DISAPPROVED = 'DISAPPROVED';

$nso.TemplateAd = function() {
  $nso.Ad.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.TemplateAd', false, $nst + '.Ad');
$ref.prop('templateId', 'integer', 'templateId', false, true);
$ref.prop('adUnionId', $nst + '.AdUnionId', 'adUnionId', false, false);
$ref.prop('templateElements', $nst + '.TemplateElement', 'templateElements', true, false);
$ref.prop('dimensions', $nst + '.Dimensions', 'dimensions', false, false);
$ref.prop('name', 'string', 'name', false, true);
$ref.prop('duration', 'integer', 'duration', false, true);

$nso.AdUnionId = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AdUnionId', false, $sot);
$ref.prop('id', 'integer', 'id', false, true);
$ref.prop('adUnionIdType', 'string', 'AdUnionId.Type', false, true);

$nso.TempAdUnionId = function() {
  $nso.AdUnionId.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.TempAdUnionId', false, $nst + '.AdUnionId');

$nso.TemplateElement = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.TemplateElement', false, $sot);
$ref.prop('uniqueName', 'string', 'uniqueName', false, true);
$ref.prop('fields', $nst + '.TemplateElementField', 'fields', true, false);

$nso.TemplateElementField = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.TemplateElementField', false, $sot);
$ref.prop('name', 'string', 'name', false, true);
$ref.prop('type', $nst + '.TemplateElementFieldType', 'type', false, false);
$ref.prop('fieldText', 'string', 'fieldText', false, true);
$ref.prop('fieldMedia', $nst + '.Media', 'fieldMedia', false, false);

$nso.TemplateElementFieldType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.TemplateElementFieldType', true, $sot);

$nso.TemplateElementFieldType.ADDRESS = 'ADDRESS';
$nso.TemplateElementFieldType.AUDIO = 'AUDIO';
$nso.TemplateElementFieldType.ENUM = 'ENUM';
$nso.TemplateElementFieldType.IMAGE = 'IMAGE';
$nso.TemplateElementFieldType.NUMBER = 'NUMBER';
$nso.TemplateElementFieldType.TEXT = 'TEXT';
$nso.TemplateElementFieldType.URL = 'URL';
$nso.TemplateElementFieldType.VIDEO = 'VIDEO';
$nso.TemplateElementFieldType.VISIBLE_URL = 'VISIBLE_URL';

$nso.ImageAd = function() {
  $nso.Ad.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ImageAd', false, $nst + '.Ad');
$ref.prop('image', $nst + '.Image', 'image', false, false);
$ref.prop('name', 'string', 'name', false, true);
$ref.prop('adToCopyImageFrom', 'integer', 'adToCopyImageFrom', false, true);

$nso.MobileImageAd = function() {
  $nso.Ad.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.MobileImageAd', false, $nst + '.Ad');
$ref.prop('markupLanguages', $nst + '.MarkupLanguageType', 'markupLanguages', true, false);
$ref.prop('mobileCarriers', 'string', 'mobileCarriers', true, true);
$ref.prop('image', $nst + '.Image', 'image', false, false);

$nso.MarkupLanguageType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.MarkupLanguageType', true, $sot);

$nso.MarkupLanguageType.HTML = 'HTML';
$nso.MarkupLanguageType.CHTML = 'CHTML';
$nso.MarkupLanguageType.XHTML = 'XHTML';
$nso.MarkupLanguageType.WML = 'WML';

$nso.RichMediaAd = function() {
  $nso.Ad.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.RichMediaAd', false, $nst + '.Ad');
$ref.prop('name', 'string', 'name', false, true);
$ref.prop('dimensions', $nst + '.Dimensions', 'dimensions', false, false);
$ref.prop('snippet', 'string', 'snippet', false, true);
$ref.prop('impressionBeaconUrl', 'string', 'impressionBeaconUrl', false, true);
$ref.prop('certifiedVendorFormatId', 'integer', 'certifiedVendorFormatId', false, true);

$nso.ThirdPartyRedirectAd = function() {
  $nso.RichMediaAd.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ThirdPartyRedirectAd', false, $nst + '.RichMediaAd');
$ref.prop('isCookieTargeted', 'boolean', 'isCookieTargeted', false, true);
$ref.prop('isUserInterestTargeted', 'boolean', 'isUserInterestTargeted', false, true);
$ref.prop('isTagged', 'boolean', 'isTagged', false, true);
$ref.prop('videoTypes', $nst + '.VideoType', 'videoTypes', true, false);

$nso.VideoType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.VideoType', true, $sot);

$nso.VideoType.ADOBE = 'ADOBE';
$nso.VideoType.REALPLAYER = 'REALPLAYER';
$nso.VideoType.QUICKTIME = 'QUICKTIME';
$nso.VideoType.WINDOWSMEDIA = 'WINDOWSMEDIA';

$nso.TextAd = function() {
  $nso.Ad.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.TextAd', false, $nst + '.Ad');
$ref.prop('headline', 'string', 'headline', false, true);
$ref.prop('description1', 'string', 'description1', false, true);
$ref.prop('description2', 'string', 'description2', false, true);

$nso.ProductAd = function() {
  $nso.Ad.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ProductAd', false, $nst + '.Ad');
$ref.prop('promotionLine', 'string', 'promotionLine', false, true);

$nso.MobileAd = function() {
  $nso.Ad.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.MobileAd', false, $nst + '.Ad');
$ref.prop('headline', 'string', 'headline', false, true);
$ref.prop('description', 'string', 'description', false, true);
$ref.prop('markupLanguages', $nst + '.MarkupLanguageType', 'markupLanguages', true, false);
$ref.prop('mobileCarriers', 'string', 'mobileCarriers', true, true);
$ref.prop('businessName', 'string', 'businessName', false, true);
$ref.prop('countryCode', 'string', 'countryCode', false, true);
$ref.prop('phoneNumber', 'string', 'phoneNumber', false, true);

$nso.DeprecatedAd = function() {
  $nso.Ad.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.DeprecatedAd', false, $nst + '.Ad');
$ref.prop('name', 'string', 'name', false, true);
$ref.prop('type', $nst + '.DeprecatedAdType', 'type', false, false);

$nso.DeprecatedAdType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.DeprecatedAdType', true, $sot);

$nso.DeprecatedAdType.VIDEO = 'VIDEO';
$nso.DeprecatedAdType.CLICK_TO_CALL = 'CLICK_TO_CALL';
$nso.DeprecatedAdType.IN_STREAM_VIDEO = 'IN_STREAM_VIDEO';
$nso.DeprecatedAdType.FROOGLE = 'FROOGLE';
$nso.DeprecatedAdType.TEXT_LINK = 'TEXT_LINK';
$nso.DeprecatedAdType.GADGET = 'GADGET';
$nso.DeprecatedAdType.PRINT = 'PRINT';
$nso.DeprecatedAdType.TEXT_WIDE = 'TEXT_WIDE';
$nso.DeprecatedAdType.GADGET_TEMPLATE = 'GADGET_TEMPLATE';
$nso.DeprecatedAdType.TEXT_WITH_VIDEO = 'TEXT_WITH_VIDEO';
$nso.DeprecatedAdType.AUDIO = 'AUDIO';
$nso.DeprecatedAdType.LOCAL_BUSINESS_AD = 'LOCAL_BUSINESS_AD';
$nso.DeprecatedAdType.UNKNOWN = 'UNKNOWN';

$nso.AdGroupAdExperimentData = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AdGroupAdExperimentData', false, $sot);
$ref.prop('experimentId', 'integer', 'experimentId', false, true);
$ref.prop('experimentDeltaStatus', $nst + '.ExperimentDeltaStatus', 'experimentDeltaStatus', false, false);
$ref.prop('experimentDataStatus', $nst + '.ExperimentDataStatus', 'experimentDataStatus', false, false);

$nso.ExperimentDeltaStatus = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ExperimentDeltaStatus', true, $sot);

$nso.ExperimentDeltaStatus.EXPERIMENT_ONLY = 'EXPERIMENT_ONLY';
$nso.ExperimentDeltaStatus.MODIFIED = 'MODIFIED';
$nso.ExperimentDeltaStatus.CONTROL_ONLY = 'CONTROL_ONLY';
$nso.ExperimentDeltaStatus.UNKNOWN = 'UNKNOWN';

$nso.ExperimentDataStatus = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ExperimentDataStatus', true, $sot);

$nso.ExperimentDataStatus.ACTIVE = 'ACTIVE';
$nso.ExperimentDataStatus.DELETED = 'DELETED';
$nso.ExperimentDataStatus.UNKNOWN = 'UNKNOWN';

$nso.AdGroupAdStatus = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AdGroupAdStatus', true, $sot);

$nso.AdGroupAdStatus.ENABLED = 'ENABLED';
$nso.AdGroupAdStatus.PAUSED = 'PAUSED';
$nso.AdGroupAdStatus.DISABLED = 'DISABLED';

$nso.AdStats = function() {
  $nso.Stats.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AdStats', false, $nst + '.Stats');
$ref.prop('percentServed', 'double', 'percentServed', false, true);

$nso.ExemptionRequest = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ExemptionRequest', false, $sot);
$ref.prop('key', $nst + '.PolicyViolationKey', 'key', false, false);

$nso.AdGroupAdOperation = function() {
  $nso.Operation.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AdGroupAdOperation', false, $nst + '.Operation');
$ref.prop('operand', $nst + '.AdGroupAd', 'operand', false, false);
$ref.prop('exemptionRequests', $nst + '.ExemptionRequest', 'exemptionRequests', true, false);

$nso.AdGroupAdPage = function() {
  $nso.Page.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AdGroupAdPage', false, $nst + '.Page');
$ref.prop('entries', $nst + '.AdGroupAd', 'entries', true, false);

$nso.AdGroupAdCountLimitExceeded = function() {
  $nso.EntityCountLimitExceeded.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AdGroupAdCountLimitExceeded', false, $nst + '.EntityCountLimitExceeded');

$nso.AdGroupAdError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AdGroupAdError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.AdGroupAdErrorReason', 'reason', false, false);

$nso.AdGroupAdErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AdGroupAdErrorReason', true, $sot);

$nso.AdGroupAdErrorReason.AD_NOT_UNDER_ADGROUP = 'AD_NOT_UNDER_ADGROUP';
$nso.AdGroupAdErrorReason.CANNOT_OPERATE_ON_DELETED_ADGROUPAD = 'CANNOT_OPERATE_ON_DELETED_ADGROUPAD';
$nso.AdGroupAdErrorReason.CANNOT_CREATE_DEPRECATED_ADS = 'CANNOT_CREATE_DEPRECATED_ADS';
$nso.AdGroupAdErrorReason.EMPTY_FIELD = 'EMPTY_FIELD';
$nso.AdGroupAdErrorReason.ENTITY_REFERENCED_IN_MULTIPLE_OPS = 'ENTITY_REFERENCED_IN_MULTIPLE_OPS';
$nso.AdGroupAdErrorReason.UNSUPPORTED_OPERATION = 'UNSUPPORTED_OPERATION';

$nso.AdError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AdError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.AdErrorReason', 'reason', false, false);

$nso.AdErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AdErrorReason', true, $sot);

$nso.AdErrorReason.APPROXIMATELY_TOO_LONG = 'APPROXIMATELY_TOO_LONG';
$nso.AdErrorReason.APPROXIMATELY_TOO_SHORT = 'APPROXIMATELY_TOO_SHORT';
$nso.AdErrorReason.BAD_SNIPPET = 'BAD_SNIPPET';
$nso.AdErrorReason.CANNOT_SET_BUSINESS_NAME_IF_URL_SET = 'CANNOT_SET_BUSINESS_NAME_IF_URL_SET';
$nso.AdErrorReason.CANNOT_SET_URL = 'CANNOT_SET_URL';
$nso.AdErrorReason.CUSTOMER_NOT_APPROVED_MOBILEADS = 'CUSTOMER_NOT_APPROVED_MOBILEADS';
$nso.AdErrorReason.CUSTOMER_NOT_APPROVED_THIRDPARTY_ADS = 'CUSTOMER_NOT_APPROVED_THIRDPARTY_ADS';
$nso.AdErrorReason.CUSTOMER_NOT_APPROVED_THIRDPARTY_REDIRECT_ADS = 'CUSTOMER_NOT_APPROVED_THIRDPARTY_REDIRECT_ADS';
$nso.AdErrorReason.CUSTOMER_NOT_ELIGIBLE_FOR_UPDATING_BEACON_URL = 'CUSTOMER_NOT_ELIGIBLE_FOR_UPDATING_BEACON_URL';
$nso.AdErrorReason.DIMENSION_ALREADY_IN_UNION = 'DIMENSION_ALREADY_IN_UNION';
$nso.AdErrorReason.DIMENSION_MUST_BE_SET = 'DIMENSION_MUST_BE_SET';
$nso.AdErrorReason.DIMENSION_NOT_IN_UNION = 'DIMENSION_NOT_IN_UNION';
$nso.AdErrorReason.DISPLAY_URL_CANNOT_BE_SPECIFIED = 'DISPLAY_URL_CANNOT_BE_SPECIFIED';
$nso.AdErrorReason.DOMESTIC_PHONE_NUMBER_FORMAT = 'DOMESTIC_PHONE_NUMBER_FORMAT';
$nso.AdErrorReason.EMERGENCY_PHONE_NUMBER = 'EMERGENCY_PHONE_NUMBER';
$nso.AdErrorReason.EMPTY_FIELD = 'EMPTY_FIELD';
$nso.AdErrorReason.INCONSISTENT_STATUS_IN_TEMPLATE_UNION = 'INCONSISTENT_STATUS_IN_TEMPLATE_UNION';
$nso.AdErrorReason.INCORRECT_LENGTH = 'INCORRECT_LENGTH';
$nso.AdErrorReason.INVALID_AD_ADDRESS_CAMPAIGN_TARGET = 'INVALID_AD_ADDRESS_CAMPAIGN_TARGET';
$nso.AdErrorReason.INVALID_AD_TYPE = 'INVALID_AD_TYPE';
$nso.AdErrorReason.INVALID_ATTRIBUTES_FOR_MOBILE_IMAGE = 'INVALID_ATTRIBUTES_FOR_MOBILE_IMAGE';
$nso.AdErrorReason.INVALID_ATTRIBUTES_FOR_MOBILE_TEXT = 'INVALID_ATTRIBUTES_FOR_MOBILE_TEXT';
$nso.AdErrorReason.INVALID_COUNTRY_CODE = 'INVALID_COUNTRY_CODE';
$nso.AdErrorReason.INVALID_INPUT = 'INVALID_INPUT';
$nso.AdErrorReason.INVALID_MARKUP_LANGUAGE = 'INVALID_MARKUP_LANGUAGE';
$nso.AdErrorReason.INVALID_MOBILE_CARRIER = 'INVALID_MOBILE_CARRIER';
$nso.AdErrorReason.INVALID_MOBILE_CARRIER_TARGET = 'INVALID_MOBILE_CARRIER_TARGET';
$nso.AdErrorReason.INVALID_NUMBER_OF_ELEMENTS = 'INVALID_NUMBER_OF_ELEMENTS';
$nso.AdErrorReason.INVALID_PHONE_NUMBER_FORMAT = 'INVALID_PHONE_NUMBER_FORMAT';
$nso.AdErrorReason.INVALID_RICH_MEDIA_CERTIFIED_VENDOR_FORMAT_ID = 'INVALID_RICH_MEDIA_CERTIFIED_VENDOR_FORMAT_ID';
$nso.AdErrorReason.INVALID_TEMPLATE_DATA = 'INVALID_TEMPLATE_DATA';
$nso.AdErrorReason.INVALID_TEMPLATE_ELEMENT_FIELD_TYPE = 'INVALID_TEMPLATE_ELEMENT_FIELD_TYPE';
$nso.AdErrorReason.INVALID_TEMPLATE_ID = 'INVALID_TEMPLATE_ID';
$nso.AdErrorReason.LINE_TOO_WIDE = 'LINE_TOO_WIDE';
$nso.AdErrorReason.MARKUP_LANGUAGES_PRESENT = 'MARKUP_LANGUAGES_PRESENT';
$nso.AdErrorReason.MISSING_ADDRESS_COMPONENT = 'MISSING_ADDRESS_COMPONENT';
$nso.AdErrorReason.MISSING_ADVERTISEMENT_NAME = 'MISSING_ADVERTISEMENT_NAME';
$nso.AdErrorReason.MISSING_BUSINESS_NAME = 'MISSING_BUSINESS_NAME';
$nso.AdErrorReason.MISSING_DESCRIPTION1 = 'MISSING_DESCRIPTION1';
$nso.AdErrorReason.MISSING_DESCRIPTION2 = 'MISSING_DESCRIPTION2';
$nso.AdErrorReason.MISSING_DESTINATION_URL = 'MISSING_DESTINATION_URL';
$nso.AdErrorReason.MISSING_DIMENSION = 'MISSING_DIMENSION';
$nso.AdErrorReason.MISSING_DISPLAY_URL = 'MISSING_DISPLAY_URL';
$nso.AdErrorReason.MISSING_HEADLINE = 'MISSING_HEADLINE';
$nso.AdErrorReason.MISSING_HEIGHT = 'MISSING_HEIGHT';
$nso.AdErrorReason.MISSING_IMAGE = 'MISSING_IMAGE';
$nso.AdErrorReason.MISSING_MARKUP_LANGUAGES = 'MISSING_MARKUP_LANGUAGES';
$nso.AdErrorReason.MISSING_MOBILE_CARRIER = 'MISSING_MOBILE_CARRIER';
$nso.AdErrorReason.MISSING_PHONE = 'MISSING_PHONE';
$nso.AdErrorReason.MISSING_REQUIRED_TEMPLATE_FIELDS = 'MISSING_REQUIRED_TEMPLATE_FIELDS';
$nso.AdErrorReason.MISSING_TEMPLATE_FIELD_VALUE = 'MISSING_TEMPLATE_FIELD_VALUE';
$nso.AdErrorReason.MISSING_TEXT = 'MISSING_TEXT';
$nso.AdErrorReason.MISSING_URL_AND_PHONE = 'MISSING_URL_AND_PHONE';
$nso.AdErrorReason.MISSING_VISIBLE_URL = 'MISSING_VISIBLE_URL';
$nso.AdErrorReason.MISSING_WIDTH = 'MISSING_WIDTH';
$nso.AdErrorReason.MUST_USE_TEMP_AD_UNION_ID_ON_ADD = 'MUST_USE_TEMP_AD_UNION_ID_ON_ADD';
$nso.AdErrorReason.TOO_LONG = 'TOO_LONG';
$nso.AdErrorReason.TOO_SHORT = 'TOO_SHORT';
$nso.AdErrorReason.UNION_DIMENSIONS_CANNOT_CHANGE = 'UNION_DIMENSIONS_CANNOT_CHANGE';
$nso.AdErrorReason.UNKNOWN_ADDRESS_COMPONENT = 'UNKNOWN_ADDRESS_COMPONENT';
$nso.AdErrorReason.UNKNOWN_FIELD_NAME = 'UNKNOWN_FIELD_NAME';
$nso.AdErrorReason.UNKNOWN_UNIQUE_NAME = 'UNKNOWN_UNIQUE_NAME';
$nso.AdErrorReason.UNSUPPORTED_DIMENSIONS = 'UNSUPPORTED_DIMENSIONS';
$nso.AdErrorReason.URL_INVALID_SCHEME = 'URL_INVALID_SCHEME';
$nso.AdErrorReason.URL_INVALID_TOP_LEVEL_DOMAIN = 'URL_INVALID_TOP_LEVEL_DOMAIN';
$nso.AdErrorReason.URL_MALFORMED = 'URL_MALFORMED';
$nso.AdErrorReason.URL_NO_HOST = 'URL_NO_HOST';
$nso.AdErrorReason.URL_HOST_NAME_TOO_LONG = 'URL_HOST_NAME_TOO_LONG';
$nso.AdErrorReason.URL_NO_SCHEME = 'URL_NO_SCHEME';
$nso.AdErrorReason.URL_NO_TOP_LEVEL_DOMAIN = 'URL_NO_TOP_LEVEL_DOMAIN';
$nso.AdErrorReason.URL_PATH_NOT_ALLOWED = 'URL_PATH_NOT_ALLOWED';
$nso.AdErrorReason.URL_PORT_NOT_ALLOWED = 'URL_PORT_NOT_ALLOWED';
$nso.AdErrorReason.URL_QUERY_NOT_ALLOWED = 'URL_QUERY_NOT_ALLOWED';
$nso.AdErrorReason.USER_DOES_NOT_HAVE_ACCESS_TO_TEMPLATE = 'USER_DOES_NOT_HAVE_ACCESS_TO_TEMPLATE';
$nso.AdErrorReason.INVALID_FORMAT = 'INVALID_FORMAT';
$nso.AdErrorReason.ELEMENT_NOT_PRESENT = 'ELEMENT_NOT_PRESENT';
$nso.AdErrorReason.IMAGE_ERROR = 'IMAGE_ERROR';
$nso.AdErrorReason.VALUE_NOT_IN_RANGE = 'VALUE_NOT_IN_RANGE';
$nso.AdErrorReason.FIELD_NOT_PRESENT = 'FIELD_NOT_PRESENT';
$nso.AdErrorReason.ADDRESS_NOT_COMPLETE = 'ADDRESS_NOT_COMPLETE';
$nso.AdErrorReason.ADDRESS_INVALID = 'ADDRESS_INVALID';
$nso.AdErrorReason.VIDEO_RETRIEVAL_ERROR = 'VIDEO_RETRIEVAL_ERROR';
$nso.AdErrorReason.AUDIO_ERROR = 'AUDIO_ERROR';
$nso.AdErrorReason.INVALID_YOUTUBE_DISPLAY_URL = 'INVALID_YOUTUBE_DISPLAY_URL';

$nso.AdGroupCriterionService = function() {
  $sso.call(this);
  this.nametable_ = new google.ads.adwords.v201101.SoapNametable();
};

$ref = $dsf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AdGroupCriterionService');
$ref.prop('requestHeader', $nst + '.RequestHeader', 'RequestHeader', false, false);
$ref.prop('responseHeader', $nst + '.ResponseHeader', 'ResponseHeader', false, false);
$ref.meth(
  'get',
  'https://adwords.google.com/api/adwords/cm/v201101',
  'https://adwords.google.com/api/adwords/cm/v201101',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.AdGroupCriterionPage', isArray: false, isSystem: false},
  [{propertyName: 'responseHeader', direction: 'out'}, {propertyName: 'requestHeader', direction: 'in'}],
  [{className: $nst + '.Selector', isArray: false, isSystem: false, name: 'serviceSelector', xmlElementName: 'serviceSelector'}]
);
$ref.meth(
  'mutate',
  'https://adwords.google.com/api/adwords/cm/v201101',
  'https://adwords.google.com/api/adwords/cm/v201101',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.AdGroupCriterionReturnValue', isArray: false, isSystem: false},
  [{propertyName: 'responseHeader', direction: 'out'}, {propertyName: 'requestHeader', direction: 'in'}],
  [{className: $nst + '.AdGroupCriterionOperation', isArray: true, isSystem: false, name: 'operations', xmlElementName: 'operations'}]
);

$nso.AdGroupCriterionService.prototype.get = function(serviceSelector, onsuccess, onfailure) {
  this.invoke.call(this, 'get', [serviceSelector], onsuccess, onfailure);
};

$nso.AdGroupCriterionService.prototype.mutate = function(operations, onsuccess, onfailure) {
  this.invoke.call(this, 'mutate', [operations], onsuccess, onfailure);
};

$nso.AdGroupCriterionReturnValue = function() {
  $nso.ListReturnValue.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AdGroupCriterionReturnValue', false, $nst + '.ListReturnValue');
$ref.prop('value', $nst + '.AdGroupCriterion', 'value', true, false);
$ref.prop('partialFailureErrors', $nst + '.ApiError', 'partialFailureErrors', true, false);

$nso.AdGroupCriterion = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AdGroupCriterion', false, $sot);
$ref.prop('adGroupId', 'integer', 'adGroupId', false, true);
$ref.prop('criterionUse', $nst + '.CriterionUse', 'criterionUse', false, false);
$ref.prop('criterion', $nst + '.Criterion', 'criterion', false, false);
$ref.prop('adGroupCriterionType', 'string', 'AdGroupCriterion.Type', false, true);

$nso.CriterionUse = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.CriterionUse', true, $sot);

$nso.CriterionUse.BIDDABLE = 'BIDDABLE';
$nso.CriterionUse.NEGATIVE = 'NEGATIVE';

$nso.NegativeAdGroupCriterion = function() {
  $nso.AdGroupCriterion.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.NegativeAdGroupCriterion', false, $nst + '.AdGroupCriterion');

$nso.BiddableAdGroupCriterion = function() {
  $nso.AdGroupCriterion.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.BiddableAdGroupCriterion', false, $nst + '.AdGroupCriterion');
$ref.prop('userStatus', $nst + '.UserStatus', 'userStatus', false, false);
$ref.prop('systemServingStatus', $nst + '.SystemServingStatus', 'systemServingStatus', false, false);
$ref.prop('approvalStatus', $nst + '.ApprovalStatus', 'approvalStatus', false, false);
$ref.prop('destinationUrl', 'string', 'destinationUrl', false, true);
$ref.prop('bids', $nst + '.AdGroupCriterionBids', 'bids', false, false);
$ref.prop('experimentData', $nst + '.BiddableAdGroupCriterionExperimentData', 'experimentData', false, false);
$ref.prop('firstPageCpc', $nst + '.Bid', 'firstPageCpc', false, false);
$ref.prop('qualityInfo', $nst + '.QualityInfo', 'qualityInfo', false, false);
$ref.prop('stats', $nst + '.Stats', 'stats', false, false);

$nso.UserStatus = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.UserStatus', true, $sot);

$nso.UserStatus.ACTIVE = 'ACTIVE';
$nso.UserStatus.DELETED = 'DELETED';
$nso.UserStatus.PAUSED = 'PAUSED';

$nso.SystemServingStatus = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.SystemServingStatus', true, $sot);

$nso.SystemServingStatus.ELIGIBLE = 'ELIGIBLE';
$nso.SystemServingStatus.RARELY_SERVED = 'RARELY_SERVED';

$nso.ApprovalStatus = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ApprovalStatus', true, $sot);

$nso.ApprovalStatus.APPROVED = 'APPROVED';
$nso.ApprovalStatus.PENDING_REVIEW = 'PENDING_REVIEW';
$nso.ApprovalStatus.UNDER_REVIEW = 'UNDER_REVIEW';
$nso.ApprovalStatus.DISAPPROVED = 'DISAPPROVED';

$nso.AdGroupCriterionBids = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AdGroupCriterionBids', false, $sot);
$ref.prop('adGroupCriterionBidsType', 'string', 'AdGroupCriterionBids.Type', false, true);

$nso.PercentCPAAdGroupCriterionBids = function() {
  $nso.AdGroupCriterionBids.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.PercentCPAAdGroupCriterionBids', false, $nst + '.AdGroupCriterionBids');
$ref.prop('percentCpa', 'integer', 'percentCpa', false, true);
$ref.prop('source', $nst + '.BidSource', 'source', false, false);

$nso.BidSource = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.BidSource', true, $sot);

$nso.BidSource.ADGROUP = 'ADGROUP';
$nso.BidSource.CRITERION = 'CRITERION';

$nso.ManualCPMAdGroupCriterionBids = function() {
  $nso.AdGroupCriterionBids.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ManualCPMAdGroupCriterionBids', false, $nst + '.AdGroupCriterionBids');
$ref.prop('maxCpm', $nst + '.Bid', 'maxCpm', false, false);
$ref.prop('bidSource', $nst + '.BidSource', 'bidSource', false, false);

$nso.ManualCPCAdGroupCriterionBids = function() {
  $nso.AdGroupCriterionBids.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ManualCPCAdGroupCriterionBids', false, $nst + '.AdGroupCriterionBids');
$ref.prop('maxCpc', $nst + '.Bid', 'maxCpc', false, false);
$ref.prop('bidSource', $nst + '.BidSource', 'bidSource', false, false);
$ref.prop('positionPreferenceBids', $nst + '.PositionPreferenceAdGroupCriterionBids', 'positionPreferenceBids', false, false);
$ref.prop('enhancedCpcEnabled', 'boolean', 'enhancedCpcEnabled', false, true);

$nso.PositionPreferenceAdGroupCriterionBids = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.PositionPreferenceAdGroupCriterionBids', false, $sot);
$ref.prop('proxyMaxCpc', $nst + '.Bid', 'proxyMaxCpc', false, false);
$ref.prop('preferredPosition', 'integer', 'preferredPosition', false, true);
$ref.prop('bottomPosition', 'integer', 'bottomPosition', false, true);

$nso.ConversionOptimizerAdGroupCriterionBids = function() {
  $nso.AdGroupCriterionBids.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ConversionOptimizerAdGroupCriterionBids', false, $nst + '.AdGroupCriterionBids');

$nso.BudgetOptimizerAdGroupCriterionBids = function() {
  $nso.AdGroupCriterionBids.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.BudgetOptimizerAdGroupCriterionBids', false, $nst + '.AdGroupCriterionBids');
$ref.prop('proxyBid', $nst + '.Bid', 'proxyBid', false, false);
$ref.prop('enhancedCpcEnabled', 'boolean', 'enhancedCpcEnabled', false, true);

$nso.BiddableAdGroupCriterionExperimentData = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.BiddableAdGroupCriterionExperimentData', false, $sot);
$ref.prop('experimentId', 'integer', 'experimentId', false, true);
$ref.prop('experimentDeltaStatus', $nst + '.ExperimentDeltaStatus', 'experimentDeltaStatus', false, false);
$ref.prop('experimentDataStatus', $nst + '.ExperimentDataStatus', 'experimentDataStatus', false, false);
$ref.prop('experimentBidMultiplier', $nst + '.AdGroupCriterionExperimentBidMultiplier', 'experimentBidMultiplier', false, false);

$nso.AdGroupCriterionExperimentBidMultiplier = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AdGroupCriterionExperimentBidMultiplier', false, $sot);
$ref.prop('adGroupCriterionExperimentBidMultiplierType', 'string', 'AdGroupCriterionExperimentBidMultiplier.Type', false, true);

$nso.ManualCPCAdGroupCriterionExperimentBidMultiplier = function() {
  $nso.AdGroupCriterionExperimentBidMultiplier.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ManualCPCAdGroupCriterionExperimentBidMultiplier', false, $nst + '.AdGroupCriterionExperimentBidMultiplier');
$ref.prop('maxCpcMultiplier', $nst + '.BidMultiplier', 'maxCpcMultiplier', false, false);
$ref.prop('multiplierSource', $nst + '.MultiplierSource', 'multiplierSource', false, false);

$nso.BidMultiplier = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.BidMultiplier', false, $sot);
$ref.prop('multiplier', 'double', 'multiplier', false, true);
$ref.prop('multipliedBid', $nst + '.Bid', 'multipliedBid', false, false);

$nso.MultiplierSource = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.MultiplierSource', true, $sot);

$nso.MultiplierSource.ADGROUP = 'ADGROUP';
$nso.MultiplierSource.CRITERION = 'CRITERION';
$nso.MultiplierSource.UNKNOWN = 'UNKNOWN';

$nso.QualityInfo = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.QualityInfo', false, $sot);
$ref.prop('isKeywordAdRelevanceAcceptable', 'boolean', 'isKeywordAdRelevanceAcceptable', false, true);
$ref.prop('isLandingPageQualityAcceptable', 'boolean', 'isLandingPageQualityAcceptable', false, true);
$ref.prop('isLandingPageLatencyAcceptable', 'boolean', 'isLandingPageLatencyAcceptable', false, true);
$ref.prop('qualityScore', 'integer', 'qualityScore', false, true);

$nso.AdGroupCriterionOperation = function() {
  $nso.Operation.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AdGroupCriterionOperation', false, $nst + '.Operation');
$ref.prop('operand', $nst + '.AdGroupCriterion', 'operand', false, false);
$ref.prop('exemptionRequests', $nst + '.ExemptionRequest', 'exemptionRequests', true, false);

$nso.AdGroupCriterionPage = function() {
  $nso.Page.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AdGroupCriterionPage', false, $nst + '.Page');
$ref.prop('entries', $nst + '.AdGroupCriterion', 'entries', true, false);

$nso.AdGroupService = function() {
  $sso.call(this);
  this.nametable_ = new google.ads.adwords.v201101.SoapNametable();
};

$ref = $dsf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AdGroupService');
$ref.prop('requestHeader', $nst + '.RequestHeader', 'RequestHeader', false, false);
$ref.prop('responseHeader', $nst + '.ResponseHeader', 'ResponseHeader', false, false);
$ref.meth(
  'get',
  'https://adwords.google.com/api/adwords/cm/v201101',
  'https://adwords.google.com/api/adwords/cm/v201101',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.AdGroupPage', isArray: false, isSystem: false},
  [{propertyName: 'responseHeader', direction: 'out'}, {propertyName: 'requestHeader', direction: 'in'}],
  [{className: $nst + '.Selector', isArray: false, isSystem: false, name: 'serviceSelector', xmlElementName: 'serviceSelector'}]
);
$ref.meth(
  'mutate',
  'https://adwords.google.com/api/adwords/cm/v201101',
  'https://adwords.google.com/api/adwords/cm/v201101',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.AdGroupReturnValue', isArray: false, isSystem: false},
  [{propertyName: 'responseHeader', direction: 'out'}, {propertyName: 'requestHeader', direction: 'in'}],
  [{className: $nst + '.AdGroupOperation', isArray: true, isSystem: false, name: 'operations', xmlElementName: 'operations'}]
);

$nso.AdGroupService.prototype.get = function(serviceSelector, onsuccess, onfailure) {
  this.invoke.call(this, 'get', [serviceSelector], onsuccess, onfailure);
};

$nso.AdGroupService.prototype.mutate = function(operations, onsuccess, onfailure) {
  this.invoke.call(this, 'mutate', [operations], onsuccess, onfailure);
};

$nso.AdGroupReturnValue = function() {
  $nso.ListReturnValue.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AdGroupReturnValue', false, $nst + '.ListReturnValue');
$ref.prop('value', $nst + '.AdGroup', 'value', true, false);

$nso.AdGroup = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AdGroup', false, $sot);
$ref.prop('id', 'integer', 'id', false, true);
$ref.prop('campaignId', 'integer', 'campaignId', false, true);
$ref.prop('campaignName', 'string', 'campaignName', false, true);
$ref.prop('name', 'string', 'name', false, true);
$ref.prop('status', $nst + '.AdGroupStatus', 'status', false, false);
$ref.prop('bids', $nst + '.AdGroupBids', 'bids', false, false);
$ref.prop('experimentData', $nst + '.AdGroupExperimentData', 'experimentData', false, false);
$ref.prop('stats', $nst + '.Stats', 'stats', false, false);

$nso.AdGroupStatus = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AdGroupStatus', true, $sot);

$nso.AdGroupStatus.ENABLED = 'ENABLED';
$nso.AdGroupStatus.PAUSED = 'PAUSED';
$nso.AdGroupStatus.DELETED = 'DELETED';

$nso.AdGroupExperimentData = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AdGroupExperimentData', false, $sot);
$ref.prop('experimentId', 'integer', 'experimentId', false, true);
$ref.prop('experimentDeltaStatus', $nst + '.ExperimentDeltaStatus', 'experimentDeltaStatus', false, false);
$ref.prop('experimentDataStatus', $nst + '.ExperimentDataStatus', 'experimentDataStatus', false, false);
$ref.prop('experimentBidMultipliers', $nst + '.AdGroupExperimentBidMultipliers', 'experimentBidMultipliers', false, false);

$nso.AdGroupExperimentBidMultipliers = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AdGroupExperimentBidMultipliers', false, $sot);
$ref.prop('adGroupExperimentBidMultipliersType', 'string', 'AdGroupExperimentBidMultipliers.Type', false, true);

$nso.ManualCPMAdGroupExperimentBidMultipliers = function() {
  $nso.AdGroupExperimentBidMultipliers.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ManualCPMAdGroupExperimentBidMultipliers', false, $nst + '.AdGroupExperimentBidMultipliers');
$ref.prop('maxCpmMultiplier', $nst + '.BidMultiplier', 'maxCpmMultiplier', false, false);

$nso.ManualCPCAdGroupExperimentBidMultipliers = function() {
  $nso.AdGroupExperimentBidMultipliers.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ManualCPCAdGroupExperimentBidMultipliers', false, $nst + '.AdGroupExperimentBidMultipliers');
$ref.prop('maxCpcMultiplier', $nst + '.BidMultiplier', 'maxCpcMultiplier', false, false);
$ref.prop('maxContentCpcMultiplier', $nst + '.BidMultiplier', 'maxContentCpcMultiplier', false, false);

$nso.AdGroupOperation = function() {
  $nso.Operation.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AdGroupOperation', false, $nst + '.Operation');
$ref.prop('operand', $nst + '.AdGroup', 'operand', false, false);

$nso.AdGroupPage = function() {
  $nso.Page.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AdGroupPage', false, $nst + '.Page');
$ref.prop('entries', $nst + '.AdGroup', 'entries', true, false);

$nso.AdGroupServiceError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AdGroupServiceError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.AdGroupServiceErrorReason', 'reason', false, false);
$ref.prop('adGroupId', 'integer', 'adGroupId', false, true);

$nso.AdGroupServiceErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AdGroupServiceErrorReason', true, $sot);

$nso.AdGroupServiceErrorReason.DUPLICATE_ADGROUP_NAME = 'DUPLICATE_ADGROUP_NAME';
$nso.AdGroupServiceErrorReason.INVALID_ADGROUP_ID = 'INVALID_ADGROUP_ID';
$nso.AdGroupServiceErrorReason.INVALID_ADGROUP_NAME = 'INVALID_ADGROUP_NAME';
$nso.AdGroupServiceErrorReason.USE_SET_OPERATOR_AND_MARK_STATUS_TO_DELETED = 'USE_SET_OPERATOR_AND_MARK_STATUS_TO_DELETED';
$nso.AdGroupServiceErrorReason.ADVERTISER_NOT_ON_CONTENT_NETWORK = 'ADVERTISER_NOT_ON_CONTENT_NETWORK';
$nso.AdGroupServiceErrorReason.BID_TOO_BIG = 'BID_TOO_BIG';
$nso.AdGroupServiceErrorReason.BID_TOO_SMALL = 'BID_TOO_SMALL';
$nso.AdGroupServiceErrorReason.BID_TYPE_AND_BIDDING_STRATEGY_MISMATCH = 'BID_TYPE_AND_BIDDING_STRATEGY_MISMATCH';
$nso.AdGroupServiceErrorReason.INVALID_BID = 'INVALID_BID';
$nso.AdGroupServiceErrorReason.MISSING_ADGROUP_NAME = 'MISSING_ADGROUP_NAME';

$nso.AdParamService = function() {
  $sso.call(this);
  this.nametable_ = new google.ads.adwords.v201101.SoapNametable();
};

$ref = $dsf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AdParamService');
$ref.prop('requestHeader', $nst + '.RequestHeader', 'RequestHeader', false, false);
$ref.prop('responseHeader', $nst + '.ResponseHeader', 'ResponseHeader', false, false);
$ref.meth(
  'get',
  'https://adwords.google.com/api/adwords/cm/v201101',
  'https://adwords.google.com/api/adwords/cm/v201101',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.AdParamPage', isArray: false, isSystem: false},
  [{propertyName: 'responseHeader', direction: 'out'}, {propertyName: 'requestHeader', direction: 'in'}],
  [{className: $nst + '.AdParamSelector', isArray: false, isSystem: false, name: 'selector', xmlElementName: 'selector'}]
);
$ref.meth(
  'mutate',
  'https://adwords.google.com/api/adwords/cm/v201101',
  'https://adwords.google.com/api/adwords/cm/v201101',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.AdParam', isArray: true, isSystem: false},
  [{propertyName: 'responseHeader', direction: 'out'}, {propertyName: 'requestHeader', direction: 'in'}],
  [{className: $nst + '.AdParamOperation', isArray: true, isSystem: false, name: 'operations', xmlElementName: 'operations'}]
);

$nso.AdParamService.prototype.get = function(selector, onsuccess, onfailure) {
  this.invoke.call(this, 'get', [selector], onsuccess, onfailure);
};

$nso.AdParamService.prototype.mutate = function(operations, onsuccess, onfailure) {
  this.invoke.call(this, 'mutate', [operations], onsuccess, onfailure);
};

$nso.AdParamOperation = function() {
  $nso.Operation.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AdParamOperation', false, $nst + '.Operation');
$ref.prop('operand', $nst + '.AdParam', 'operand', false, false);

$nso.AdParam = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AdParam', false, $sot);
$ref.prop('adGroupId', 'integer', 'adGroupId', false, true);
$ref.prop('criterionId', 'integer', 'criterionId', false, true);
$ref.prop('insertionText', 'string', 'insertionText', false, true);
$ref.prop('paramIndex', 'integer', 'paramIndex', false, true);

$nso.AdParamPage = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AdParamPage', false, $sot);
$ref.prop('entries', $nst + '.AdParam', 'entries', true, false);
$ref.prop('totalNumEntries', 'integer', 'totalNumEntries', false, true);

$nso.AdParamSelector = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AdParamSelector', false, $sot);
$ref.prop('adGroupIds', 'integer', 'adGroupIds', true, true);
$ref.prop('criteriaId', 'integer', 'criteriaId', true, true);
$ref.prop('paging', $nst + '.Paging', 'paging', false, false);

$nso.AdParamPolicyError = function() {
  $nso.PolicyViolationError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AdParamPolicyError', false, $nst + '.PolicyViolationError');

$nso.AdParamError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AdParamError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.AdParamErrorReason', 'reason', false, false);

$nso.AdParamErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AdParamErrorReason', true, $sot);

$nso.AdParamErrorReason.AD_PARAM_CANNOT_BE_SPECIFIED_MULTIPLE_TIMES = 'AD_PARAM_CANNOT_BE_SPECIFIED_MULTIPLE_TIMES';
$nso.AdParamErrorReason.AD_PARAM_DOES_NOT_EXIST = 'AD_PARAM_DOES_NOT_EXIST';
$nso.AdParamErrorReason.CRITERION_SPECIFIED_MUST_BE_KEYWORD = 'CRITERION_SPECIFIED_MUST_BE_KEYWORD';
$nso.AdParamErrorReason.INVALID_ADGROUP_CRITERION_SPECIFIED = 'INVALID_ADGROUP_CRITERION_SPECIFIED';
$nso.AdParamErrorReason.INVALID_INSERTION_TEXT_FORMAT = 'INVALID_INSERTION_TEXT_FORMAT';
$nso.AdParamErrorReason.MUST_SPECIFY_ADGROUP_ID = 'MUST_SPECIFY_ADGROUP_ID';
$nso.AdParamErrorReason.UNKNOWN = 'UNKNOWN';

$nso.AlertService = function() {
  $sso.call(this);
  this.nametable_ = new google.ads.adwords.v201101.SoapNametable();
};

$ref = $dsf('https://adwords.google.com/api/adwords/mcm/v201101', $nst + '.AlertService');
$ref.prop('requestHeader', $nst + '.RequestHeader', 'RequestHeader', false, false);
$ref.prop('responseHeader', $nst + '.ResponseHeader', 'ResponseHeader', false, false);
$ref.meth(
  'get',
  'https://adwords.google.com/api/adwords/mcm/v201101',
  'https://adwords.google.com/api/adwords/mcm/v201101',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.AlertPage', isArray: false, isSystem: false},
  [{propertyName: 'responseHeader', direction: 'out'}, {propertyName: 'requestHeader', direction: 'in'}],
  [{className: $nst + '.AlertSelector', isArray: false, isSystem: false, name: 'selector', xmlElementName: 'selector'}]
);

$nso.AlertService.prototype.get = function(selector, onsuccess, onfailure) {
  this.invoke.call(this, 'get', [selector], onsuccess, onfailure);
};

$nso.Detail = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/mcm/v201101', $nst + '.Detail', false, $sot);
$ref.prop('triggerTime', 'string', 'triggerTime', false, true);

$nso.Alert = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/mcm/v201101', $nst + '.Alert', false, $sot);
$ref.prop('alertSeverity', $nst + '.AlertSeverity', 'alertSeverity', false, false);
$ref.prop('alertType', $nst + '.AlertType', 'alertType', false, false);
$ref.prop('clientCustomerId', 'integer', 'clientCustomerId', false, true);
$ref.prop('details', $nst + '.Detail', 'details', true, false);

$nso.AlertSeverity = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/mcm/v201101', $nst + '.AlertSeverity', true, $sot);

$nso.AlertSeverity.GREEN = 'GREEN';
$nso.AlertSeverity.YELLOW = 'YELLOW';
$nso.AlertSeverity.RED = 'RED';
$nso.AlertSeverity.UNKNOWN = 'UNKNOWN';

$nso.AlertType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/mcm/v201101', $nst + '.AlertType', true, $sot);

$nso.AlertType.ACCOUNT_ON_TARGET = 'ACCOUNT_ON_TARGET';
$nso.AlertType.DECLINED_PAYMENT = 'DECLINED_PAYMENT';
$nso.AlertType.CREDIT_CARD_EXPIRING = 'CREDIT_CARD_EXPIRING';
$nso.AlertType.ACCOUNT_BUDGET_ENDING = 'ACCOUNT_BUDGET_ENDING';
$nso.AlertType.CAMPAIGN_ENDING = 'CAMPAIGN_ENDING';
$nso.AlertType.PAYMENT_NOT_ENTERED = 'PAYMENT_NOT_ENTERED';
$nso.AlertType.MISSING_BANK_REFERENCE_NUMBER = 'MISSING_BANK_REFERENCE_NUMBER';
$nso.AlertType.CAMPAIGN_ENDED = 'CAMPAIGN_ENDED';
$nso.AlertType.ACCOUNT_BUDGET_BURN_RATE = 'ACCOUNT_BUDGET_BURN_RATE';
$nso.AlertType.USER_INVITE_PENDING = 'USER_INVITE_PENDING';
$nso.AlertType.USER_INVITE_ACCEPTED = 'USER_INVITE_ACCEPTED';
$nso.AlertType.MANAGER_LINK_PENDING = 'MANAGER_LINK_PENDING';
$nso.AlertType.ZERO_DAILY_SPENDING_LIMIT = 'ZERO_DAILY_SPENDING_LIMIT';
$nso.AlertType.TV_ACCOUNT_ON_TARGET = 'TV_ACCOUNT_ON_TARGET';
$nso.AlertType.TV_ACCOUNT_BUDGET_ENDING = 'TV_ACCOUNT_BUDGET_ENDING';
$nso.AlertType.TV_ZERO_DAILY_SPENDING_LIMIT = 'TV_ZERO_DAILY_SPENDING_LIMIT';
$nso.AlertType.UNKNOWN = 'UNKNOWN';

$nso.AlertPage = function() {
  $nso.NoStatsPage.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/mcm/v201101', $nst + '.AlertPage', false, $nst + '.NoStatsPage');
$ref.prop('entries', $nst + '.Alert', 'entries', true, false);

$nso.AlertQuery = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/mcm/v201101', $nst + '.AlertQuery', false, $sot);
$ref.prop('clientSpec', $nst + '.ClientSpec', 'clientSpec', false, false);
$ref.prop('filterSpec', $nst + '.FilterSpec', 'filterSpec', false, false);
$ref.prop('types', $nst + '.AlertType', 'types', true, false);
$ref.prop('severities', $nst + '.AlertSeverity', 'severities', true, false);
$ref.prop('triggerTimeSpec', $nst + '.TriggerTimeSpec', 'triggerTimeSpec', false, false);
$ref.prop('triggerTime', 'string', 'triggerTime', false, true);
$ref.prop('clientCustomerIds', 'integer', 'clientCustomerIds', true, true);

$nso.ClientSpec = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/mcm/v201101', $nst + '.ClientSpec', true, $sot);

$nso.ClientSpec.ALL = 'ALL';
$nso.ClientSpec.DIRECT = 'DIRECT';
$nso.ClientSpec.ID_LIST = 'ID_LIST';
$nso.ClientSpec.UNKNOWN = 'UNKNOWN';

$nso.FilterSpec = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/mcm/v201101', $nst + '.FilterSpec', true, $sot);

$nso.FilterSpec.ALL = 'ALL';
$nso.FilterSpec.ONLY_SUBMANAGERS = 'ONLY_SUBMANAGERS';
$nso.FilterSpec.ONLY_LEAF_CLIENTS = 'ONLY_LEAF_CLIENTS';
$nso.FilterSpec.UNKNOWN = 'UNKNOWN';

$nso.TriggerTimeSpec = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/mcm/v201101', $nst + '.TriggerTimeSpec', true, $sot);

$nso.TriggerTimeSpec.ALL_TIME = 'ALL_TIME';
$nso.TriggerTimeSpec.CUSTOM_TIME = 'CUSTOM_TIME';
$nso.TriggerTimeSpec.LAST_24_HOURS = 'LAST_24_HOURS';
$nso.TriggerTimeSpec.LAST_7_DAYS = 'LAST_7_DAYS';

$nso.AlertSelector = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/mcm/v201101', $nst + '.AlertSelector', false, $sot);
$ref.prop('query', $nst + '.AlertQuery', 'query', false, false);
$ref.prop('paging', $nst + '.Paging', 'paging', false, false);

$nso.AlertError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/mcm/v201101', $nst + '.AlertError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.AlertErrorReason', 'reason', false, false);

$nso.AlertErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/mcm/v201101', $nst + '.AlertErrorReason', true, $sot);

$nso.AlertErrorReason.NO_CLIENT_IDS_SELECTED = 'NO_CLIENT_IDS_SELECTED';
$nso.AlertErrorReason.INVALID_CLIENT_ID_SELECTED = 'INVALID_CLIENT_ID_SELECTED';
$nso.AlertErrorReason.INVALID_CLIENT_ID_FORMAT = 'INVALID_CLIENT_ID_FORMAT';
$nso.AlertErrorReason.UNAVAILABLE = 'UNAVAILABLE';
$nso.AlertErrorReason.UNKNOWN = 'UNKNOWN';

$nso.BulkMutateJobService = function() {
  $sso.call(this);
  this.nametable_ = new google.ads.adwords.v201101.SoapNametable();
};

$ref = $dsf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.BulkMutateJobService');
$ref.prop('requestHeader', $nst + '.RequestHeader', 'RequestHeader', false, false);
$ref.prop('responseHeader', $nst + '.ResponseHeader', 'ResponseHeader', false, false);
$ref.meth(
  'get',
  'https://adwords.google.com/api/adwords/cm/v201101',
  'https://adwords.google.com/api/adwords/cm/v201101',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.BulkMutateJob', isArray: true, isSystem: false},
  [{propertyName: 'responseHeader', direction: 'out'}, {propertyName: 'requestHeader', direction: 'in'}],
  [{className: $nst + '.BulkMutateJobSelector', isArray: false, isSystem: false, name: 'selector', xmlElementName: 'selector'}]
);
$ref.meth(
  'mutate',
  'https://adwords.google.com/api/adwords/cm/v201101',
  'https://adwords.google.com/api/adwords/cm/v201101',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.BulkMutateJob', isArray: false, isSystem: false},
  [{propertyName: 'responseHeader', direction: 'out'}, {propertyName: 'requestHeader', direction: 'in'}],
  [{className: $nst + '.JobOperation', isArray: false, isSystem: false, name: 'operation', xmlElementName: 'operation'}]
);

$nso.BulkMutateJobService.prototype.get = function(selector, onsuccess, onfailure) {
  this.invoke.call(this, 'get', [selector], onsuccess, onfailure);
};

$nso.BulkMutateJobService.prototype.mutate = function(operation, onsuccess, onfailure) {
  this.invoke.call(this, 'mutate', [operation], onsuccess, onfailure);
};

$nso.Operand = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.Operand', false, $sot);
$ref.prop('item', 'System.Object', [{elementName: 'Ad', className: $nst + '.Ad'}, {elementName: 'AdExtensionOverride', className: $nst + '.AdExtensionOverride'}, {elementName: 'AdGroup', className: $nst + '.AdGroup'}, {elementName: 'AdGroupAd', className: $nst + '.AdGroupAd'}, {elementName: 'AdGroupCriterion', className: $nst + '.AdGroupCriterion'}, {elementName: 'Campaign', className: $nst + '.Campaign'}, {elementName: 'CampaignAdExtension', className: $nst + '.CampaignAdExtension'}, {elementName: 'CampaignCriterion', className: $nst + '.CampaignCriterion'}, {elementName: 'Job', className: $nst + '.Job'}, {elementName: 'Media', className: $nst + '.Media'}, {elementName: 'Target', className: $nst + '.Target'}, {elementName: 'TargetList', className: $nst + '.TargetList'}], false, true);

$nso.CampaignAdExtensionStats = function() {
  $nso.Stats.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.CampaignAdExtensionStats', false, $nst + '.Stats');

$nso.CampaignAdExtension = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.CampaignAdExtension', false, $sot);
$ref.prop('campaignId', 'integer', 'campaignId', false, true);
$ref.prop('adExtension', $nst + '.AdExtension', 'adExtension', false, false);
$ref.prop('status', $nst + '.CampaignAdExtensionStatus', 'status', false, false);
$ref.prop('approvalStatus', $nst + '.CampaignAdExtensionApprovalStatus', 'approvalStatus', false, false);
$ref.prop('stats', $nst + '.CampaignAdExtensionStats', 'stats', false, false);

$nso.CampaignAdExtensionStatus = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.CampaignAdExtensionStatus', true, $sot);

$nso.CampaignAdExtensionStatus.ACTIVE = 'ACTIVE';
$nso.CampaignAdExtensionStatus.DELETED = 'DELETED';

$nso.CampaignAdExtensionApprovalStatus = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.CampaignAdExtensionApprovalStatus', true, $sot);

$nso.CampaignAdExtensionApprovalStatus.APPROVED = 'APPROVED';
$nso.CampaignAdExtensionApprovalStatus.UNCHECKED = 'UNCHECKED';
$nso.CampaignAdExtensionApprovalStatus.DISAPPROVED = 'DISAPPROVED';

$nso.Job = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.Job', false, $sot);
$ref.prop('customerJobKey', 'string', 'customerJobKey', false, true);
$ref.prop('context', $nst + '.JobContext', 'context', false, false);
$ref.prop('failureReason', $nst + '.ApiErrorReason', 'failureReason', false, false);
$ref.prop('stats', $nst + '.JobStats', 'stats', false, false);
$ref.prop('billingSummary', $nst + '.BillingSummary', 'billingSummary', false, false);
$ref.prop('jobType', 'string', 'Job.Type', false, true);

$nso.JobContext = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.JobContext', false, $sot);
$ref.prop('authenticatedUserEmail', 'string', 'authenticatedUserEmail', false, true);
$ref.prop('effectiveCustomerId', 'integer', 'effectiveCustomerId', false, true);

$nso.ApiErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ApiErrorReason', false, $sot);
$ref.prop('item', 'System.Object', [{elementName: 'AdErrorReason', className: $nst + '.AdErrorReason'}, {elementName: 'AdExtensionErrorReason', className: $nst + '.AdExtensionErrorReason'}, {elementName: 'AdExtensionOverrideErrorReason', className: $nst + '.AdExtensionOverrideErrorReason'}, {elementName: 'AdGroupAdErrorReason', className: $nst + '.AdGroupAdErrorReason'}, {elementName: 'AdGroupCriterionErrorReason', className: $nst + '.AdGroupCriterionErrorReason'}, {elementName: 'AdGroupServiceErrorReason', className: $nst + '.AdGroupServiceErrorReason'}, {elementName: 'AuthenticationErrorReason', className: $nst + '.AuthenticationErrorReason'}, {elementName: 'AuthorizationErrorReason', className: $nst + '.AuthorizationErrorReason'}, {elementName: 'BiddingErrorReason', className: $nst + '.BiddingErrorReason'}, {elementName: 'BiddingTransitionErrorReason', className: $nst + '.BiddingTransitionErrorReason'}, {elementName: 'BudgetErrorReason', className: $nst + '.BudgetErrorReason'}, {elementName: 'BulkMutateJobErrorReason', className: $nst + '.BulkMutateJobErrorReason'}, {elementName: 'CampaignAdExtensionErrorReason', className: $nst + '.CampaignAdExtensionErrorReason'}, {elementName: 'CampaignCriterionErrorReason', className: $nst + '.CampaignCriterionErrorReason'}, {elementName: 'CampaignErrorReason', className: $nst + '.CampaignErrorReason'}, {elementName: 'ClientTermsErrorReason', className: $nst + '.ClientTermsErrorReason'}, {elementName: 'CriterionErrorReason', className: $nst + '.CriterionErrorReason'}, {elementName: 'DatabaseErrorReason', className: $nst + '.DatabaseErrorReason'}, {elementName: 'DateErrorReason', className: $nst + '.DateErrorReason'}, {elementName: 'DistinctErrorReason', className: $nst + '.DistinctErrorReason'}, {elementName: 'EntityAccessDeniedReason', className: $nst + '.EntityAccessDeniedReason'}, {elementName: 'EntityCountLimitExceededReason', className: $nst + '.EntityCountLimitExceededReason'}, {elementName: 'EntityNotFoundReason', className: $nst + '.EntityNotFoundReason'}, {elementName: 'IdErrorReason', className: $nst + '.IdErrorReason'}, {elementName: 'ImageErrorReason', className: $nst + '.ImageErrorReason'}, {elementName: 'InternalApiErrorReason', className: $nst + '.InternalApiErrorReason'}, {elementName: 'JobErrorReason', className: $nst + '.JobErrorReason'}, {elementName: 'MediaErrorReason', className: $nst + '.MediaErrorReason'}, {elementName: 'NewEntityCreationErrorReason', className: $nst + '.NewEntityCreationErrorReason'}, {elementName: 'NotEmptyErrorReason', className: $nst + '.NotEmptyErrorReason'}, {elementName: 'NotWhitelistedErrorReason', className: $nst + '.NotWhitelistedErrorReason'}, {elementName: 'NullErrorReason', className: $nst + '.NullErrorReason'}, {elementName: 'OperationAccessDeniedReason', className: $nst + '.OperationAccessDeniedReason'}, {elementName: 'OperatorErrorReason', className: $nst + '.OperatorErrorReason'}, {elementName: 'PagingErrorReason', className: $nst + '.PagingErrorReason'}, {elementName: 'PolicyViolationErrorReason', className: $nst + '.PolicyViolationErrorReason'}, {elementName: 'QuotaCheckErrorReason', className: $nst + '.QuotaCheckErrorReason'}, {elementName: 'QuotaErrorReason', className: $nst + '.QuotaErrorReason'}, {elementName: 'QuotaExceededErrorReason', className: $nst + '.QuotaExceededErrorReason'}, {elementName: 'RangeErrorReason', className: $nst + '.RangeErrorReason'}, {elementName: 'RateExceededErrorReason', className: $nst + '.RateExceededErrorReason'}, {elementName: 'ReadOnlyErrorReason', className: $nst + '.ReadOnlyErrorReason'}, {elementName: 'RegionCodeErrorReason', className: $nst + '.RegionCodeErrorReason'}, {elementName: 'RejectedErrorReason', className: $nst + '.RejectedErrorReason'}, {elementName: 'RequestErrorReason', className: $nst + '.RequestErrorReason'}, {elementName: 'RequiredErrorReason', className: $nst + '.RequiredErrorReason'}, {elementName: 'SelectorErrorReason', className: $nst + '.SelectorErrorReason'}, {elementName: 'SettingErrorReason', className: $nst + '.SettingErrorReason'}, {elementName: 'SizeLimitErrorReason', className: $nst + '.SizeLimitErrorReason'}, {elementName: 'StatsQueryErrorReason', className: $nst + '.StatsQueryErrorReason'}, {elementName: 'StringLengthErrorReason', className: $nst + '.StringLengthErrorReason'}, {elementName: 'TargetErrorReason', className: $nst + '.TargetErrorReason'}], false, true);

$nso.AdExtensionErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AdExtensionErrorReason', true, $sot);

$nso.AdExtensionErrorReason.ACCOUNT_DELETED = 'ACCOUNT_DELETED';
$nso.AdExtensionErrorReason.AD_EXTENSION_NO_LONGER_ACTIVE = 'AD_EXTENSION_NO_LONGER_ACTIVE';
$nso.AdExtensionErrorReason.CANNOT_HAVE_MULTIPLE_LOCATION_SYNC_EXTENSIONS_PER_CAMPAIGN = 'CANNOT_HAVE_MULTIPLE_LOCATION_SYNC_EXTENSIONS_PER_CAMPAIGN';
$nso.AdExtensionErrorReason.CANNOT_HAVE_MULTIPLE_MOBILE_EXTENSIONS_PER_CAMPAIGN = 'CANNOT_HAVE_MULTIPLE_MOBILE_EXTENSIONS_PER_CAMPAIGN';
$nso.AdExtensionErrorReason.CANNOT_HAVE_MULTIPLE_PRODUCT_EXTENSIONS_PER_CAMPAIGN = 'CANNOT_HAVE_MULTIPLE_PRODUCT_EXTENSIONS_PER_CAMPAIGN';
$nso.AdExtensionErrorReason.CANNOT_HAVE_MULTIPLE_SITELINKS_EXTENSIONS_PER_CAMPAIGN = 'CANNOT_HAVE_MULTIPLE_SITELINKS_EXTENSIONS_PER_CAMPAIGN';
$nso.AdExtensionErrorReason.INVALID_AUTH_TOKEN_FOR_EMAIL = 'INVALID_AUTH_TOKEN_FOR_EMAIL';
$nso.AdExtensionErrorReason.INVALID_COUNTRY_CODE = 'INVALID_COUNTRY_CODE';
$nso.AdExtensionErrorReason.INVALID_DOMESTIC_PHONE_NUMBER_FORMAT = 'INVALID_DOMESTIC_PHONE_NUMBER_FORMAT';
$nso.AdExtensionErrorReason.INVALID_DESTINATION_URL = 'INVALID_DESTINATION_URL';
$nso.AdExtensionErrorReason.INVALID_EMAIL = 'INVALID_EMAIL';
$nso.AdExtensionErrorReason.INVALID_ENCODED_LOCATION = 'INVALID_ENCODED_LOCATION';
$nso.AdExtensionErrorReason.INVALID_ENUM_CONDITION_OPERATOR = 'INVALID_ENUM_CONDITION_OPERATOR';
$nso.AdExtensionErrorReason.INVALID_ICON_DIMENSIONS = 'INVALID_ICON_DIMENSIONS';
$nso.AdExtensionErrorReason.INVALID_ID = 'INVALID_ID';
$nso.AdExtensionErrorReason.INVALID_IMAGE_DIMENSIONS = 'INVALID_IMAGE_DIMENSIONS';
$nso.AdExtensionErrorReason.INVALID_INPUT = 'INVALID_INPUT';
$nso.AdExtensionErrorReason.INVALID_LATITUDE = 'INVALID_LATITUDE';
$nso.AdExtensionErrorReason.INVALID_LONGITUDE = 'INVALID_LONGITUDE';
$nso.AdExtensionErrorReason.INVALID_PHONE_NUMBER = 'INVALID_PHONE_NUMBER';
$nso.AdExtensionErrorReason.INVALID_STRING_CONDITION_OPERATOR = 'INVALID_STRING_CONDITION_OPERATOR';
$nso.AdExtensionErrorReason.INVALID_TOLL_PHONE_NUMBER_FORMAT = 'INVALID_TOLL_PHONE_NUMBER_FORMAT';
$nso.AdExtensionErrorReason.MEDIA_DOES_NOT_BELONG_TO_ACCOUNT = 'MEDIA_DOES_NOT_BELONG_TO_ACCOUNT';
$nso.AdExtensionErrorReason.MEDIA_NOT_ICON_TYPE = 'MEDIA_NOT_ICON_TYPE';
$nso.AdExtensionErrorReason.MEDIA_NOT_IMAGE_TYPE = 'MEDIA_NOT_IMAGE_TYPE';
$nso.AdExtensionErrorReason.MISSING_ADVERTISER_NAME = 'MISSING_ADVERTISER_NAME';
$nso.AdExtensionErrorReason.MISSING_AUTH_TOKEN = 'MISSING_AUTH_TOKEN';
$nso.AdExtensionErrorReason.MISSING_COUNTRY_CODE = 'MISSING_COUNTRY_CODE';
$nso.AdExtensionErrorReason.MISSING_CITY_NAME = 'MISSING_CITY_NAME';
$nso.AdExtensionErrorReason.MISSING_EMAIL = 'MISSING_EMAIL';
$nso.AdExtensionErrorReason.MISSING_ENCODED_LOCATION = 'MISSING_ENCODED_LOCATION';
$nso.AdExtensionErrorReason.MISSING_CONDITION_OPERAND = 'MISSING_CONDITION_OPERAND';
$nso.AdExtensionErrorReason.MISSING_CONDITION_STRING_VALUE = 'MISSING_CONDITION_STRING_VALUE';
$nso.AdExtensionErrorReason.MISSING_POSTAL_CODE = 'MISSING_POSTAL_CODE';
$nso.AdExtensionErrorReason.MISSING_STREET_ADDRESS = 'MISSING_STREET_ADDRESS';
$nso.AdExtensionErrorReason.NUM_AND_GROUPS_OVER_LIMIT = 'NUM_AND_GROUPS_OVER_LIMIT';
$nso.AdExtensionErrorReason.NUM_CONDITIONS_OVER_LIMIT = 'NUM_CONDITIONS_OVER_LIMIT';
$nso.AdExtensionErrorReason.NUM_LOCATION_EXTENSIONS_OVER_LIMIT = 'NUM_LOCATION_EXTENSIONS_OVER_LIMIT';
$nso.AdExtensionErrorReason.NOT_AUTHORIZED_TO_CREATE_EXTENSION = 'NOT_AUTHORIZED_TO_CREATE_EXTENSION';
$nso.AdExtensionErrorReason.PHONE_NUMBER_NOT_SUPPORTED_FOR_COUNTRY = 'PHONE_NUMBER_NOT_SUPPORTED_FOR_COUNTRY';
$nso.AdExtensionErrorReason.DISALLOWED_NUMBER_TYPE = 'DISALLOWED_NUMBER_TYPE';
$nso.AdExtensionErrorReason.PREMIUM_RATE_NUMBER_NOT_ALLOWED = 'PREMIUM_RATE_NUMBER_NOT_ALLOWED';
$nso.AdExtensionErrorReason.TOO_LONG = 'TOO_LONG';
$nso.AdExtensionErrorReason.USER_NOT_PERMITTED_TO_CREATE_LBC_SYNC_LOCATION_EXTENSION = 'USER_NOT_PERMITTED_TO_CREATE_LBC_SYNC_LOCATION_EXTENSION';

$nso.BulkMutateJobErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.BulkMutateJobErrorReason', true, $sot);

$nso.BulkMutateJobErrorReason.CAN_RETURN_RESULT_FOR_ONLY_COMPLETED_JOBS = 'CAN_RETURN_RESULT_FOR_ONLY_COMPLETED_JOBS';
$nso.BulkMutateJobErrorReason.CAN_RETURN_RESULT_FOR_ONLY_ONE_JOB = 'CAN_RETURN_RESULT_FOR_ONLY_ONE_JOB';
$nso.BulkMutateJobErrorReason.CANNOT_UPDATE_JOB_ONCE_ALL_REQUEST_PARTS_ARE_RECEIVED = 'CANNOT_UPDATE_JOB_ONCE_ALL_REQUEST_PARTS_ARE_RECEIVED';
$nso.BulkMutateJobErrorReason.INVALID_SCOPING_ENTITY_TYPE = 'INVALID_SCOPING_ENTITY_TYPE';
$nso.BulkMutateJobErrorReason.MISSING_SCOPING_ENTITY_FOR_OPERATION_STREAM = 'MISSING_SCOPING_ENTITY_FOR_OPERATION_STREAM';
$nso.BulkMutateJobErrorReason.MORE_THAN_ONE_SCOPING_ENTITY_TYPE = 'MORE_THAN_ONE_SCOPING_ENTITY_TYPE';
$nso.BulkMutateJobErrorReason.PAYLOAD_STORE_UNAVAILABLE = 'PAYLOAD_STORE_UNAVAILABLE';
$nso.BulkMutateJobErrorReason.REQUEST_PART_IS_OUT_OF_ORDER = 'REQUEST_PART_IS_OUT_OF_ORDER';
$nso.BulkMutateJobErrorReason.TOO_FEW_OPERATIONS_IN_JOB = 'TOO_FEW_OPERATIONS_IN_JOB';
$nso.BulkMutateJobErrorReason.TOO_MANY_OPERATION_STREAMS_IN_REQUEST_PART = 'TOO_MANY_OPERATION_STREAMS_IN_REQUEST_PART';
$nso.BulkMutateJobErrorReason.TOO_MANY_OPERATIONS_IN_JOB = 'TOO_MANY_OPERATIONS_IN_JOB';
$nso.BulkMutateJobErrorReason.TOO_MANY_OPERATIONS_IN_REQUEST_PART = 'TOO_MANY_OPERATIONS_IN_REQUEST_PART';
$nso.BulkMutateJobErrorReason.TOO_MANY_RESULTS_TO_STORE = 'TOO_MANY_RESULTS_TO_STORE';
$nso.BulkMutateJobErrorReason.TOO_MANY_SCOPING_ENTITIES = 'TOO_MANY_SCOPING_ENTITIES';
$nso.BulkMutateJobErrorReason.UNKNOWN = 'UNKNOWN';

$nso.CampaignAdExtensionErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.CampaignAdExtensionErrorReason', true, $sot);

$nso.CampaignAdExtensionErrorReason.ADEXTENSION_NOT_UNDER_CAMPAIGN = 'ADEXTENSION_NOT_UNDER_CAMPAIGN';
$nso.CampaignAdExtensionErrorReason.CANNOT_ADD_DELETED_CAMPAIGN_ADEXTENSION = 'CANNOT_ADD_DELETED_CAMPAIGN_ADEXTENSION';
$nso.CampaignAdExtensionErrorReason.CANNOT_OPERATE_ON_DELETED_CAMPAIGN_ADEXTENSION = 'CANNOT_OPERATE_ON_DELETED_CAMPAIGN_ADEXTENSION';
$nso.CampaignAdExtensionErrorReason.INVALID_ADEXTENSION_ID = 'INVALID_ADEXTENSION_ID';
$nso.CampaignAdExtensionErrorReason.MISSING_ADEXTENSION_ID = 'MISSING_ADEXTENSION_ID';
$nso.CampaignAdExtensionErrorReason.MUST_USE_CONCRETE_ADEXTENSION_DURING_ADD = 'MUST_USE_CONCRETE_ADEXTENSION_DURING_ADD';
$nso.CampaignAdExtensionErrorReason.MUST_USE_CONCRETE_ADEXTENSION = 'MUST_USE_CONCRETE_ADEXTENSION';
$nso.CampaignAdExtensionErrorReason.UNKNOWN_ERROR = 'UNKNOWN_ERROR';

$nso.JobErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.JobErrorReason', true, $sot);

$nso.JobErrorReason.DUPLICATE_JOB_KEY_FOR_CUSTOMER = 'DUPLICATE_JOB_KEY_FOR_CUSTOMER';
$nso.JobErrorReason.JOB_TYPE_NOT_SUPPORTED = 'JOB_TYPE_NOT_SUPPORTED';
$nso.JobErrorReason.PREREQUISITE_JOB_FAILED = 'PREREQUISITE_JOB_FAILED';
$nso.JobErrorReason.SELECTOR_CANNOT_USE_BOTH_JOB_IDS_AND_JOB_KEYS = 'SELECTOR_CANNOT_USE_BOTH_JOB_IDS_AND_JOB_KEYS';
$nso.JobErrorReason.TOO_LATE_TO_CANCEL_JOB = 'TOO_LATE_TO_CANCEL_JOB';
$nso.JobErrorReason.TOO_MANY_PREREQUISITE_JOBS = 'TOO_MANY_PREREQUISITE_JOBS';
$nso.JobErrorReason.TOO_MANY_JOBS_IN_QUEUE = 'TOO_MANY_JOBS_IN_QUEUE';
$nso.JobErrorReason.USER_CANCELED_JOB = 'USER_CANCELED_JOB';
$nso.JobErrorReason.WORKFLOW_FAILURE = 'WORKFLOW_FAILURE';
$nso.JobErrorReason.UNKNOWN = 'UNKNOWN';

$nso.PolicyViolationErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.PolicyViolationErrorReason', true, $sot);

$nso.PolicyViolationErrorReason.POLICY_ERROR = 'POLICY_ERROR';

$nso.QuotaExceededErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.QuotaExceededErrorReason', true, $sot);

$nso.QuotaExceededErrorReason.QUOTA_EXCEEDED = 'QUOTA_EXCEEDED';

$nso.JobStats = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.JobStats', false, $sot);
$ref.prop('progressPercent', 'integer', 'progressPercent', false, true);
$ref.prop('pendingTimeMillis', 'integer', 'pendingTimeMillis', false, true);
$ref.prop('processingTimeMillis', 'integer', 'processingTimeMillis', false, true);
$ref.prop('jobStatsType', 'string', 'JobStats.Type', false, true);

$nso.BulkMutateJobStats = function() {
  $nso.JobStats.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.BulkMutateJobStats', false, $nst + '.JobStats');
$ref.prop('numOperations', 'integer', 'numOperations', false, true);
$ref.prop('numFailedOperations', 'integer', 'numFailedOperations', false, true);
$ref.prop('numUnprocessedOperations', 'integer', 'numUnprocessedOperations', false, true);

$nso.BillingSummary = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.BillingSummary', false, $sot);
$ref.prop('numOperations', 'integer', 'numOperations', false, true);
$ref.prop('numUnits', 'integer', 'numUnits', false, true);

$nso.BulkMutateJob = function() {
  $nso.Job.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.BulkMutateJob', false, $nst + '.Job');
$ref.prop('id', 'integer', 'id', false, true);
$ref.prop('policy', $nst + '.BulkMutateJobPolicy', 'policy', false, false);
$ref.prop('request', $nst + '.BulkMutateRequest', 'request', false, false);
$ref.prop('status', $nst + '.BasicJobStatus', 'status', false, false);
$ref.prop('history', $nst + '.BulkMutateJobEvent', 'history', true, false);
$ref.prop('result', $nst + '.BulkMutateResult', 'result', false, false);
$ref.prop('numRequestParts', 'integer', 'numRequestParts', false, true);
$ref.prop('numRequestPartsReceived', 'integer', 'numRequestPartsReceived', false, true);

$nso.BulkMutateJobPolicy = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.BulkMutateJobPolicy', false, $sot);
$ref.prop('prerequisiteJobIds', 'integer', 'prerequisiteJobIds', true, true);
$ref.prop('dummy', 'string', 'dummy', false, true);

$nso.BulkMutateRequest = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.BulkMutateRequest', false, $sot);
$ref.prop('partIndex', 'integer', 'partIndex', false, true);
$ref.prop('operationStreams', $nst + '.OperationStream', 'operationStreams', true, false);

$nso.OperationStream = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.OperationStream', false, $sot);
$ref.prop('scopingEntityId', $nst + '.EntityId', 'scopingEntityId', false, false);
$ref.prop('operations', $nst + '.Operation', 'operations', true, false);

$nso.EntityId = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.EntityId', false, $sot);
$ref.prop('type', $nst + '.EntityIdType', 'type', false, false);
$ref.prop('value', 'integer', 'value', false, true);

$nso.EntityIdType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.EntityIdType', true, $sot);

$nso.EntityIdType.ADGROUP_ID = 'ADGROUP_ID';
$nso.EntityIdType.AD_ID = 'AD_ID';
$nso.EntityIdType.CAMPAIGN_ID = 'CAMPAIGN_ID';
$nso.EntityIdType.CUSTOMER_ID = 'CUSTOMER_ID';

$nso.JobOperation = function() {
  $nso.Operation.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.JobOperation', false, $nst + '.Operation');
$ref.prop('operand', $nst + '.Job', 'operand', false, false);

$nso.CampaignAdExtensionOperation = function() {
  $nso.Operation.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.CampaignAdExtensionOperation', false, $nst + '.Operation');
$ref.prop('operand', $nst + '.CampaignAdExtension', 'operand', false, false);

$nso.BasicJobStatus = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.BasicJobStatus', true, $sot);

$nso.BasicJobStatus.COMPLETED = 'COMPLETED';
$nso.BasicJobStatus.PROCESSING = 'PROCESSING';
$nso.BasicJobStatus.FAILED = 'FAILED';
$nso.BasicJobStatus.PENDING = 'PENDING';

$nso.JobEvent = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.JobEvent', false, $sot);
$ref.prop('dateTime', 'string', 'dateTime', false, true);
$ref.prop('jobEventType', 'string', 'JobEvent.Type', false, true);

$nso.BulkMutateResult = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.BulkMutateResult', false, $sot);
$ref.prop('partIndex', 'integer', 'partIndex', false, true);
$ref.prop('operationStreamResults', $nst + '.OperationStreamResult', 'operationStreamResults', true, false);

$nso.OperationStreamResult = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.OperationStreamResult', false, $sot);
$ref.prop('operationResults', $nst + '.OperationResult', 'operationResults', true, false);
$ref.prop('dummy', 'string', 'dummy', false, true);

$nso.OperationResult = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.OperationResult', false, $sot);
$ref.prop('operationResultType', 'string', 'OperationResult.Type', false, true);

$nso.UnprocessedResult = function() {
  $nso.OperationResult.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.UnprocessedResult', false, $nst + '.OperationResult');

$nso.ReturnValueResult = function() {
  $nso.OperationResult.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ReturnValueResult', false, $nst + '.OperationResult');
$ref.prop('returnValue', $nst + '.Operand', 'returnValue', false, false);

$nso.LostResult = function() {
  $nso.OperationResult.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.LostResult', false, $nst + '.OperationResult');

$nso.FailureResult = function() {
  $nso.OperationResult.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.FailureResult', false, $nst + '.OperationResult');
$ref.prop('cause', $nst + '.ApiException', 'cause', false, false);

$nso.JobError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.JobError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.JobErrorReason', 'reason', false, false);

$nso.CampaignAdExtensionError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.CampaignAdExtensionError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.CampaignAdExtensionErrorReason', 'reason', false, false);

$nso.BulkMutateJobError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.BulkMutateJobError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.BulkMutateJobErrorReason', 'reason', false, false);

$nso.AdExtensionError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.AdExtensionError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.AdExtensionErrorReason', 'reason', false, false);

$nso.BatchFailureResult = function() {
  $nso.OperationResult.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.BatchFailureResult', false, $nst + '.OperationResult');
$ref.prop('operationIndexInBatch', 'integer', 'operationIndexInBatch', false, true);

$nso.JobSelector = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.JobSelector', false, $sot);
$ref.prop('includeHistory', 'boolean', 'includeHistory', false, true);
$ref.prop('includeStats', 'boolean', 'includeStats', false, true);
$ref.prop('jobSelectorType', 'string', 'JobSelector.Type', false, true);

$nso.BulkMutateJobSelector = function() {
  $nso.JobSelector.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.BulkMutateJobSelector', false, $nst + '.JobSelector');
$ref.prop('jobIds', 'integer', 'jobIds', true, true);
$ref.prop('jobStatuses', $nst + '.BasicJobStatus', 'jobStatuses', true, false);
$ref.prop('resultPartIndex', 'integer', 'resultPartIndex', false, true);

$nso.BulkOpportunityService = function() {
  $sso.call(this);
  this.nametable_ = new google.ads.adwords.v201101.SoapNametable();
};

$ref = $dsf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.BulkOpportunityService');
$ref.prop('requestHeader', $nst + '.RequestHeader', 'RequestHeader', false, false);
$ref.prop('responseHeader', $nst + '.ResponseHeader', 'ResponseHeader', false, false);
$ref.meth(
  'get',
  'https://adwords.google.com/api/adwords/o/v201101',
  'https://adwords.google.com/api/adwords/o/v201101',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.BulkOpportunityPage', isArray: false, isSystem: false},
  [{propertyName: 'responseHeader', direction: 'out'}, {propertyName: 'requestHeader', direction: 'in'}],
  [{className: $nst + '.BulkOpportunitySelector', isArray: false, isSystem: false, name: 'selector', xmlElementName: 'selector'}]
);

$nso.BulkOpportunityService.prototype.get = function(selector, onsuccess, onfailure) {
  this.invoke.call(this, 'get', [selector], onsuccess, onfailure);
};

$nso.OpportunityAttribute_AttributeMapEntry = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.OpportunityAttribute_AttributeMapEntry', false, $sot);
$ref.prop('key', $nst + '.OpportunityAttributeType', 'key', false, false);
$ref.prop('value', $nst + '.Attribute', 'value', false, false);

$nso.OpportunityAttributeType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.OpportunityAttributeType', true, $sot);

$nso.OpportunityAttributeType.UNKNOWN = 'UNKNOWN';
$nso.OpportunityAttributeType.IDEA_TYPE = 'IDEA_TYPE';
$nso.OpportunityAttributeType.CUSTOMER_ID = 'CUSTOMER_ID';
$nso.OpportunityAttributeType.CAMPAIGN_ID = 'CAMPAIGN_ID';
$nso.OpportunityAttributeType.ADGROUP_ID = 'ADGROUP_ID';
$nso.OpportunityAttributeType.KEYWORD = 'KEYWORD';
$nso.OpportunityAttributeType.CURRENT_BUDGET = 'CURRENT_BUDGET';
$nso.OpportunityAttributeType.NEW_BUDGET = 'NEW_BUDGET';
$nso.OpportunityAttributeType.CURRENT_BID = 'CURRENT_BID';
$nso.OpportunityAttributeType.NEW_BID = 'NEW_BID';
$nso.OpportunityAttributeType.IMPRESSIONS_CHANGE = 'IMPRESSIONS_CHANGE';
$nso.OpportunityAttributeType.CLICKS_CHANGE = 'CLICKS_CHANGE';
$nso.OpportunityAttributeType.COST_CHANGE = 'COST_CHANGE';
$nso.OpportunityAttributeType.AVERAGE_MONTHLY_SEARCHES = 'AVERAGE_MONTHLY_SEARCHES';
$nso.OpportunityAttributeType.BID_LANDSCAPE = 'BID_LANDSCAPE';

$nso.OpportunityIdea = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.OpportunityIdea', false, $sot);
$ref.prop('data', $nst + '.OpportunityAttribute_AttributeMapEntry', 'data', true, false);
$ref.prop('dummy', 'string', 'dummy', false, true);

$nso.Opportunity = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.Opportunity', false, $sot);
$ref.prop('opportunityIdeas', $nst + '.OpportunityIdea', 'opportunityIdeas', true, false);
$ref.prop('dummy', 'string', 'dummy', false, true);

$nso.BulkOpportunityPage = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.BulkOpportunityPage', false, $sot);
$ref.prop('entries', $nst + '.Opportunity', 'entries', true, false);
$ref.prop('totalNumEntries', 'integer', 'totalNumEntries', false, true);

$nso.BulkOpportunitySelector = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.BulkOpportunitySelector', false, $sot);
$ref.prop('ideaTypes', $nst + '.OpportunityIdeaType', 'ideaTypes', true, false);
$ref.prop('requestedAttributeTypes', $nst + '.OpportunityAttributeType', 'requestedAttributeTypes', true, false);
$ref.prop('paging', $nst + '.Paging', 'paging', false, false);

$nso.OpportunityError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.OpportunityError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.OpportunityErrorReason', 'reason', false, false);

$nso.OpportunityErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.OpportunityErrorReason', true, $sot);

$nso.OpportunityErrorReason.OPPORTUNITY_DOES_NOT_EXIST = 'OPPORTUNITY_DOES_NOT_EXIST';
$nso.OpportunityErrorReason.RPC_ERROR = 'RPC_ERROR';

$nso.BulkOpportunityServiceError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.BulkOpportunityServiceError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.BulkOpportunityServiceErrorReason', 'reason', false, false);

$nso.BulkOpportunityServiceErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201101', $nst + '.BulkOpportunityServiceErrorReason', true, $sot);

$nso.BulkOpportunityServiceErrorReason.TOO_MANY_RESULTS_REQUESTED = 'TOO_MANY_RESULTS_REQUESTED';
$nso.BulkOpportunityServiceErrorReason.INVALID_PAGING = 'INVALID_PAGING';
$nso.BulkOpportunityServiceErrorReason.BULK_OPPORTUNITY_SERVICE_ERROR = 'BULK_OPPORTUNITY_SERVICE_ERROR';

$nso.CampaignAdExtensionService = function() {
  $sso.call(this);
  this.nametable_ = new google.ads.adwords.v201101.SoapNametable();
};

$ref = $dsf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.CampaignAdExtensionService');
$ref.prop('requestHeader', $nst + '.RequestHeader', 'RequestHeader', false, false);
$ref.prop('responseHeader', $nst + '.ResponseHeader', 'ResponseHeader', false, false);
$ref.meth(
  'get',
  'https://adwords.google.com/api/adwords/cm/v201101',
  'https://adwords.google.com/api/adwords/cm/v201101',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.CampaignAdExtensionPage', isArray: false, isSystem: false},
  [{propertyName: 'responseHeader', direction: 'out'}, {propertyName: 'requestHeader', direction: 'in'}],
  [{className: $nst + '.Selector', isArray: false, isSystem: false, name: 'serviceSelector', xmlElementName: 'serviceSelector'}]
);
$ref.meth(
  'mutate',
  'https://adwords.google.com/api/adwords/cm/v201101',
  'https://adwords.google.com/api/adwords/cm/v201101',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.CampaignAdExtensionReturnValue', isArray: false, isSystem: false},
  [{propertyName: 'responseHeader', direction: 'out'}, {propertyName: 'requestHeader', direction: 'in'}],
  [{className: $nst + '.CampaignAdExtensionOperation', isArray: true, isSystem: false, name: 'operations', xmlElementName: 'operations'}]
);

$nso.CampaignAdExtensionService.prototype.get = function(serviceSelector, onsuccess, onfailure) {
  this.invoke.call(this, 'get', [serviceSelector], onsuccess, onfailure);
};

$nso.CampaignAdExtensionService.prototype.mutate = function(operations, onsuccess, onfailure) {
  this.invoke.call(this, 'mutate', [operations], onsuccess, onfailure);
};

$nso.CampaignAdExtensionReturnValue = function() {
  $nso.ListReturnValue.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.CampaignAdExtensionReturnValue', false, $nst + '.ListReturnValue');
$ref.prop('value', $nst + '.CampaignAdExtension', 'value', true, false);

$nso.CampaignAdExtensionPage = function() {
  $nso.Page.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.CampaignAdExtensionPage', false, $nst + '.Page');
$ref.prop('entries', $nst + '.CampaignAdExtension', 'entries', true, false);

$nso.Money = function() {
  $nso.ComparableValue.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.Money', false, $nst + '.ComparableValue');
$ref.prop('microAmount', 'integer', 'microAmount', false, true);

$nso.CampaignStats = function() {
  $nso.Stats.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.CampaignStats', false, $nst + '.Stats');

$nso.PlatformTarget = function() {
  $nso.Target.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.PlatformTarget', false, $nst + '.Target');
$ref.prop('platformType', $nst + '.PlatformType', 'platformType', false, false);

$nso.BulkMutateJobEvent = function() {
  $nso.JobEvent.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.BulkMutateJobEvent', false, $nst + '.JobEvent');
$ref.prop('status', $nst + '.BasicJobStatus', 'status', false, false);


$nso.RequestHeader = function() {
  google.ads.adwords.RequestHeader.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.RequestHeader',
    false, 'google.ads.adwords.RequestHeader');


$nso.ResponseHeader = function() {
  google.ads.adwords.ResponseHeader.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201101', $nst + '.ResponseHeader',
    false, 'google.ads.adwords.ResponseHeader');
})
('google.ads.adwords.v201101');
