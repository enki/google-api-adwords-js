goog.provide('google.ads.adwords.v201008');

goog.require('google.system.soap.Object');
goog.require('google.system.soap.ObjectType');
goog.require('google.ads.adwords.Service');
goog.require('google.system.soap.ServiceType');
goog.require('google.ads.adwords.RequestHeader');
goog.require('google.ads.adwords.ResponseHeader');
goog.require('google.ads.adwords.v201008.SoapNametable');

goog.provide('google.ads.adwords.v201008.CampaignService');
goog.provide('google.ads.adwords.v201008.ListReturnValue');
goog.provide('google.ads.adwords.v201008.CampaignReturnValue');
goog.provide('google.ads.adwords.v201008.Campaign');
goog.provide('google.ads.adwords.v201008.CampaignStatus');
goog.provide('google.ads.adwords.v201008.ServingStatus');
goog.provide('google.ads.adwords.v201008.Budget');
goog.provide('google.ads.adwords.v201008.BudgetBudgetPeriod');
goog.provide('google.ads.adwords.v201008.ComparableValue');
goog.provide('google.ads.adwords.v201008.NumberValue');
goog.provide('google.ads.adwords.v201008.LongValue');
goog.provide('google.ads.adwords.v201008.DoubleValue');
goog.provide('google.ads.adwords.v201008.BudgetBudgetDeliveryMethod');
goog.provide('google.ads.adwords.v201008.BiddingStrategy');
goog.provide('google.ads.adwords.v201008.BudgetOptimizer');
goog.provide('google.ads.adwords.v201008.PercentCPA');
goog.provide('google.ads.adwords.v201008.ManualCPM');
goog.provide('google.ads.adwords.v201008.ManualCPC');
goog.provide('google.ads.adwords.v201008.PositionPreference');
goog.provide('google.ads.adwords.v201008.ConversionOptimizer');
goog.provide('google.ads.adwords.v201008.PricingModel');
goog.provide('google.ads.adwords.v201008.ConversionOptimizerBidType');
goog.provide('google.ads.adwords.v201008.ConversionDeduplicationMode');
goog.provide('google.ads.adwords.v201008.ConversionOptimizerEligibility');
goog.provide('google.ads.adwords.v201008.ConversionOptimizerEligibilityRejectionReason');
goog.provide('google.ads.adwords.v201008.Stats');
goog.provide('google.ads.adwords.v201008.StatsNetwork');
goog.provide('google.ads.adwords.v201008.AdServingOptimizationStatus');
goog.provide('google.ads.adwords.v201008.FrequencyCap');
goog.provide('google.ads.adwords.v201008.TimeUnit');
goog.provide('google.ads.adwords.v201008.Level');
goog.provide('google.ads.adwords.v201008.Bid');
goog.provide('google.ads.adwords.v201008.AdGroupBids');
goog.provide('google.ads.adwords.v201008.ManualCPMAdGroupBids');
goog.provide('google.ads.adwords.v201008.ManualCPCAdGroupBids');
goog.provide('google.ads.adwords.v201008.ConversionOptimizerAdGroupBids');
goog.provide('google.ads.adwords.v201008.BudgetOptimizerAdGroupBids');
goog.provide('google.ads.adwords.v201008.PercentCPAAdGroupBids');
goog.provide('google.ads.adwords.v201008.BiddingTransition');
goog.provide('google.ads.adwords.v201008.ConversionOptimizerBiddingTransition');
goog.provide('google.ads.adwords.v201008.Operation');
goog.provide('google.ads.adwords.v201008.Operator');
goog.provide('google.ads.adwords.v201008.CampaignOperation');
goog.provide('google.ads.adwords.v201008.Page');
goog.provide('google.ads.adwords.v201008.CampaignPage');
goog.provide('google.ads.adwords.v201008.Paging');
goog.provide('google.ads.adwords.v201008.DateRange');
goog.provide('google.ads.adwords.v201008.StatsSelector');
goog.provide('google.ads.adwords.v201008.CampaignSelector');
goog.provide('google.ads.adwords.v201008.ApiError');
goog.provide('google.ads.adwords.v201008.DatabaseError');
goog.provide('google.ads.adwords.v201008.DatabaseErrorReason');
goog.provide('google.ads.adwords.v201008.StringLengthError');
goog.provide('google.ads.adwords.v201008.StringLengthErrorReason');
goog.provide('google.ads.adwords.v201008.StatsQueryError');
goog.provide('google.ads.adwords.v201008.StatsQueryErrorReason');
goog.provide('google.ads.adwords.v201008.SizeLimitError');
goog.provide('google.ads.adwords.v201008.SizeLimitErrorReason');
goog.provide('google.ads.adwords.v201008.RequiredError');
goog.provide('google.ads.adwords.v201008.RequiredErrorReason');
goog.provide('google.ads.adwords.v201008.RequestError');
goog.provide('google.ads.adwords.v201008.RequestErrorReason');
goog.provide('google.ads.adwords.v201008.RejectedError');
goog.provide('google.ads.adwords.v201008.RejectedErrorReason');
goog.provide('google.ads.adwords.v201008.ReadOnlyError');
goog.provide('google.ads.adwords.v201008.ReadOnlyErrorReason');
goog.provide('google.ads.adwords.v201008.RateExceededError');
goog.provide('google.ads.adwords.v201008.RateExceededErrorReason');
goog.provide('google.ads.adwords.v201008.RangeError');
goog.provide('google.ads.adwords.v201008.RangeErrorReason');
goog.provide('google.ads.adwords.v201008.QuotaError');
goog.provide('google.ads.adwords.v201008.QuotaErrorReason');
goog.provide('google.ads.adwords.v201008.QuotaCheckError');
goog.provide('google.ads.adwords.v201008.QuotaCheckErrorReason');
goog.provide('google.ads.adwords.v201008.OperatorError');
goog.provide('google.ads.adwords.v201008.OperatorErrorReason');
goog.provide('google.ads.adwords.v201008.OperationAccessDenied');
goog.provide('google.ads.adwords.v201008.OperationAccessDeniedReason');
goog.provide('google.ads.adwords.v201008.NullError');
goog.provide('google.ads.adwords.v201008.NullErrorReason');
goog.provide('google.ads.adwords.v201008.NotWhitelistedError');
goog.provide('google.ads.adwords.v201008.NotWhitelistedErrorReason');
goog.provide('google.ads.adwords.v201008.NotEmptyError');
goog.provide('google.ads.adwords.v201008.NotEmptyErrorReason');
goog.provide('google.ads.adwords.v201008.NewEntityCreationError');
goog.provide('google.ads.adwords.v201008.NewEntityCreationErrorReason');
goog.provide('google.ads.adwords.v201008.InternalApiError');
goog.provide('google.ads.adwords.v201008.InternalApiErrorReason');
goog.provide('google.ads.adwords.v201008.EntityNotFound');
goog.provide('google.ads.adwords.v201008.EntityNotFoundReason');
goog.provide('google.ads.adwords.v201008.DistinctError');
goog.provide('google.ads.adwords.v201008.DistinctErrorReason');
goog.provide('google.ads.adwords.v201008.DateError');
goog.provide('google.ads.adwords.v201008.DateErrorReason');
goog.provide('google.ads.adwords.v201008.ClientTermsError');
goog.provide('google.ads.adwords.v201008.ClientTermsErrorReason');
goog.provide('google.ads.adwords.v201008.CampaignError');
goog.provide('google.ads.adwords.v201008.CampaignErrorReason');
goog.provide('google.ads.adwords.v201008.BudgetError');
goog.provide('google.ads.adwords.v201008.BudgetErrorReason');
goog.provide('google.ads.adwords.v201008.BiddingTransitionError');
goog.provide('google.ads.adwords.v201008.BiddingTransitionErrorReason');
goog.provide('google.ads.adwords.v201008.BiddingError');
goog.provide('google.ads.adwords.v201008.BiddingErrorReason');
goog.provide('google.ads.adwords.v201008.AuthorizationError');
goog.provide('google.ads.adwords.v201008.AuthorizationErrorReason');
goog.provide('google.ads.adwords.v201008.AuthenticationError');
goog.provide('google.ads.adwords.v201008.AuthenticationErrorReason');
goog.provide('google.ads.adwords.v201008.ApplicationException');
goog.provide('google.ads.adwords.v201008.ApiException');
goog.provide('google.ads.adwords.v201008.CampaignTargetService');
goog.provide('google.ads.adwords.v201008.CampaignTargetReturnValue');
goog.provide('google.ads.adwords.v201008.TargetList');
goog.provide('google.ads.adwords.v201008.PlatformTargetList');
goog.provide('google.ads.adwords.v201008.PlatformType');
goog.provide('google.ads.adwords.v201008.Target');
goog.provide('google.ads.adwords.v201008.GeoTarget');
goog.provide('google.ads.adwords.v201008.ProximityTarget');
goog.provide('google.ads.adwords.v201008.GeoPoint');
goog.provide('google.ads.adwords.v201008.ProximityTargetDistanceUnits');
goog.provide('google.ads.adwords.v201008.Address');
goog.provide('google.ads.adwords.v201008.ProvinceTarget');
goog.provide('google.ads.adwords.v201008.PolygonTarget');
goog.provide('google.ads.adwords.v201008.MetroTarget');
goog.provide('google.ads.adwords.v201008.CountryTarget');
goog.provide('google.ads.adwords.v201008.CityTarget');
goog.provide('google.ads.adwords.v201008.DemographicTarget');
goog.provide('google.ads.adwords.v201008.GenderTarget');
goog.provide('google.ads.adwords.v201008.GenderTargetGender');
goog.provide('google.ads.adwords.v201008.AgeTarget');
goog.provide('google.ads.adwords.v201008.AgeTargetAge');
goog.provide('google.ads.adwords.v201008.NetworkTarget');
goog.provide('google.ads.adwords.v201008.NetworkCoverageType');
goog.provide('google.ads.adwords.v201008.MobileTarget');
goog.provide('google.ads.adwords.v201008.MobilePlatformTarget');
goog.provide('google.ads.adwords.v201008.MobileCarrierTarget');
goog.provide('google.ads.adwords.v201008.LanguageTarget');
goog.provide('google.ads.adwords.v201008.AdScheduleTarget');
goog.provide('google.ads.adwords.v201008.DayOfWeek');
goog.provide('google.ads.adwords.v201008.MinuteOfHour');
goog.provide('google.ads.adwords.v201008.NetworkTargetList');
goog.provide('google.ads.adwords.v201008.MobileTargetList');
goog.provide('google.ads.adwords.v201008.LanguageTargetList');
goog.provide('google.ads.adwords.v201008.GeoTargetList');
goog.provide('google.ads.adwords.v201008.DemographicTargetList');
goog.provide('google.ads.adwords.v201008.AdScheduleTargetList');
goog.provide('google.ads.adwords.v201008.CampaignTargetOperation');
goog.provide('google.ads.adwords.v201008.CampaignTargetPage');
goog.provide('google.ads.adwords.v201008.CampaignTargetSelector');
goog.provide('google.ads.adwords.v201008.TargetError');
goog.provide('google.ads.adwords.v201008.TargetErrorReason');
goog.provide('google.ads.adwords.v201008.RegionCodeError');
goog.provide('google.ads.adwords.v201008.RegionCodeErrorReason');
goog.provide('google.ads.adwords.v201008.ExperimentService');
goog.provide('google.ads.adwords.v201008.ExperimentReturnValue');
goog.provide('google.ads.adwords.v201008.Experiment');
goog.provide('google.ads.adwords.v201008.ExperimentStatus');
goog.provide('google.ads.adwords.v201008.ExperimentServingStatus');
goog.provide('google.ads.adwords.v201008.ExperimentSummaryStats');
goog.provide('google.ads.adwords.v201008.ExperimentOperation');
goog.provide('google.ads.adwords.v201008.ExperimentPage');
goog.provide('google.ads.adwords.v201008.ExperimentSelector');
goog.provide('google.ads.adwords.v201008.ExperimentServiceError');
goog.provide('google.ads.adwords.v201008.ExperimentServiceErrorReason');
goog.provide('google.ads.adwords.v201008.GeoLocationService');
goog.provide('google.ads.adwords.v201008.GeoLocation');
goog.provide('google.ads.adwords.v201008.InvalidGeoLocation');
goog.provide('google.ads.adwords.v201008.GeoLocationSelector');
goog.provide('google.ads.adwords.v201008.GeoLocationError');
goog.provide('google.ads.adwords.v201008.GeoLocationErrorReason');
goog.provide('google.ads.adwords.v201008.InfoService');
goog.provide('google.ads.adwords.v201008.ApiUsageRecord');
goog.provide('google.ads.adwords.v201008.ApiUsageInfo');
goog.provide('google.ads.adwords.v201008.InfoSelector');
goog.provide('google.ads.adwords.v201008.ApiUsageType');
goog.provide('google.ads.adwords.v201008.ApiUsageError');
goog.provide('google.ads.adwords.v201008.ApiUsageErrorReason');
goog.provide('google.ads.adwords.v201008.MediaService');
goog.provide('google.ads.adwords.v201008.Media_Size_StringMapEntry');
goog.provide('google.ads.adwords.v201008.MediaSize');
goog.provide('google.ads.adwords.v201008.Media_Size_DimensionsMapEntry');
goog.provide('google.ads.adwords.v201008.Dimensions');
goog.provide('google.ads.adwords.v201008.Media');
goog.provide('google.ads.adwords.v201008.MediaMediaType');
goog.provide('google.ads.adwords.v201008.MediaMimeType');
goog.provide('google.ads.adwords.v201008.Video');
goog.provide('google.ads.adwords.v201008.Image');
goog.provide('google.ads.adwords.v201008.Audio');
goog.provide('google.ads.adwords.v201008.MediaPage');
goog.provide('google.ads.adwords.v201008.MediaSelector');
goog.provide('google.ads.adwords.v201008.MediaMediaExtendedCapabilityState');
goog.provide('google.ads.adwords.v201008.VideoError');
goog.provide('google.ads.adwords.v201008.VideoErrorReason');
goog.provide('google.ads.adwords.v201008.MediaError');
goog.provide('google.ads.adwords.v201008.MediaErrorReason');
goog.provide('google.ads.adwords.v201008.ImageError');
goog.provide('google.ads.adwords.v201008.ImageErrorReason');
goog.provide('google.ads.adwords.v201008.AudioError');
goog.provide('google.ads.adwords.v201008.AudioErrorReason');
goog.provide('google.ads.adwords.v201008.ReportDefinitionService');
goog.provide('google.ads.adwords.v201008.ReportDefinitionOperation');
goog.provide('google.ads.adwords.v201008.ReportDefinition');
goog.provide('google.ads.adwords.v201008.Selector');
goog.provide('google.ads.adwords.v201008.Predicate');
goog.provide('google.ads.adwords.v201008.PredicateOperator');
goog.provide('google.ads.adwords.v201008.ReportDefinitionReportType');
goog.provide('google.ads.adwords.v201008.ReportDefinitionDateRangeType');
goog.provide('google.ads.adwords.v201008.DownloadFormat');
goog.provide('google.ads.adwords.v201008.ReportDefinitionField');
goog.provide('google.ads.adwords.v201008.ReportDefinitionPage');
goog.provide('google.ads.adwords.v201008.ReportDefinitionSelector');
goog.provide('google.ads.adwords.v201008.ReportDefinitionError');
goog.provide('google.ads.adwords.v201008.ReportDefinitionErrorReason');
goog.provide('google.ads.adwords.v201008.CollectionSizeError');
goog.provide('google.ads.adwords.v201008.CollectionSizeErrorReason');
goog.provide('google.ads.adwords.v201008.TargetingIdeaService');
goog.provide('google.ads.adwords.v201008.Range');
goog.provide('google.ads.adwords.v201008.WebpageDescriptor');
goog.provide('google.ads.adwords.v201008.MonthlySearchVolume');
goog.provide('google.ads.adwords.v201008.InStreamAdInfo');
goog.provide('google.ads.adwords.v201008.AdFormatSpec');
goog.provide('google.ads.adwords.v201008.SiteConstantsAdFormat');
goog.provide('google.ads.adwords.v201008.Attribute');
goog.provide('google.ads.adwords.v201008.PlacementAttribute');
goog.provide('google.ads.adwords.v201008.Criterion');
goog.provide('google.ads.adwords.v201008.Product');
goog.provide('google.ads.adwords.v201008.ProductCondition');
goog.provide('google.ads.adwords.v201008.ProductConditionOperand');
goog.provide('google.ads.adwords.v201008.Vertical');
goog.provide('google.ads.adwords.v201008.CriterionUserList');
goog.provide('google.ads.adwords.v201008.CriterionUserListMembershipStatus');
goog.provide('google.ads.adwords.v201008.CriterionUserInterest');
goog.provide('google.ads.adwords.v201008.Keyword');
goog.provide('google.ads.adwords.v201008.KeywordMatchType');
goog.provide('google.ads.adwords.v201008.KeywordAttribute');
goog.provide('google.ads.adwords.v201008.LongRangeAttribute');
goog.provide('google.ads.adwords.v201008.MoneyAttribute');
goog.provide('google.ads.adwords.v201008.WebpageDescriptorAttribute');
goog.provide('google.ads.adwords.v201008.StringAttribute');
goog.provide('google.ads.adwords.v201008.PlacementTypeAttribute');
goog.provide('google.ads.adwords.v201008.SiteConstantsPlacementType');
goog.provide('google.ads.adwords.v201008.MonthlySearchVolumeAttribute');
goog.provide('google.ads.adwords.v201008.LongAttribute');
goog.provide('google.ads.adwords.v201008.IntegerSetAttribute');
goog.provide('google.ads.adwords.v201008.IntegerAttribute');
goog.provide('google.ads.adwords.v201008.InStreamAdInfoAttribute');
goog.provide('google.ads.adwords.v201008.IdeaTypeAttribute');
goog.provide('google.ads.adwords.v201008.IdeaType');
goog.provide('google.ads.adwords.v201008.DoubleAttribute');
goog.provide('google.ads.adwords.v201008.BooleanAttribute');
goog.provide('google.ads.adwords.v201008.AdFormatSpecListAttribute');
goog.provide('google.ads.adwords.v201008.Type_AttributeMapEntry');
goog.provide('google.ads.adwords.v201008.AttributeType');
goog.provide('google.ads.adwords.v201008.TargetingIdea');
goog.provide('google.ads.adwords.v201008.TargetingIdeaPage');
goog.provide('google.ads.adwords.v201008.LongComparisonOperation');
goog.provide('google.ads.adwords.v201008.DoubleComparisonOperation');
goog.provide('google.ads.adwords.v201008.SearchParameter');
goog.provide('google.ads.adwords.v201008.RelatedToKeywordSearchParameter');
goog.provide('google.ads.adwords.v201008.ExcludedKeywordSearchParameter');
goog.provide('google.ads.adwords.v201008.LanguageTargetSearchParameter');
goog.provide('google.ads.adwords.v201008.CountryTargetSearchParameter');
goog.provide('google.ads.adwords.v201008.GlobalMonthlySearchesSearchParameter');
goog.provide('google.ads.adwords.v201008.AverageTargetedMonthlySearchesSearchParameter');
goog.provide('google.ads.adwords.v201008.AdShareSearchParameter');
goog.provide('google.ads.adwords.v201008.SeedAdGroupIdSearchParameter');
goog.provide('google.ads.adwords.v201008.SearchShareSearchParameter');
goog.provide('google.ads.adwords.v201008.RelatedToUrlSearchParameter');
goog.provide('google.ads.adwords.v201008.PlacementTypeSearchParameter');
goog.provide('google.ads.adwords.v201008.MobileSearchParameter');
goog.provide('google.ads.adwords.v201008.KeywordMatchTypeSearchParameter');
goog.provide('google.ads.adwords.v201008.KeywordCategoryIdSearchParameter');
goog.provide('google.ads.adwords.v201008.IncludeAdultContentSearchParameter');
goog.provide('google.ads.adwords.v201008.IdeaTextMatchesSearchParameter');
goog.provide('google.ads.adwords.v201008.MatchAction');
goog.provide('google.ads.adwords.v201008.CompetitionSearchParameter');
goog.provide('google.ads.adwords.v201008.CompetitionSearchParameterLevel');
goog.provide('google.ads.adwords.v201008.AdTypeSearchParameter');
goog.provide('google.ads.adwords.v201008.SiteConstantsAdType');
goog.provide('google.ads.adwords.v201008.TargetingIdeaSelector');
goog.provide('google.ads.adwords.v201008.RequestType');
goog.provide('google.ads.adwords.v201008.PolicyViolationErrorPart');
goog.provide('google.ads.adwords.v201008.PolicyViolationKey');
goog.provide('google.ads.adwords.v201008.PolicyViolationError');
goog.provide('google.ads.adwords.v201008.CriterionPolicyError');
goog.provide('google.ads.adwords.v201008.EntityCountLimitExceeded');
goog.provide('google.ads.adwords.v201008.EntityCountLimitExceededReason');
goog.provide('google.ads.adwords.v201008.AdGroupCriterionLimitExceeded');
goog.provide('google.ads.adwords.v201008.AdGroupCriterionLimitExceededCriteriaLimitType');
goog.provide('google.ads.adwords.v201008.AdGroupCriterionError');
goog.provide('google.ads.adwords.v201008.AdGroupCriterionErrorReason');
goog.provide('google.ads.adwords.v201008.TargetingIdeaError');
goog.provide('google.ads.adwords.v201008.TargetingIdeaErrorReason');
goog.provide('google.ads.adwords.v201008.MatchesRegexError');
goog.provide('google.ads.adwords.v201008.MatchesRegexErrorReason');
goog.provide('google.ads.adwords.v201008.TrafficEstimatorService');
goog.provide('google.ads.adwords.v201008.StatsEstimate');
goog.provide('google.ads.adwords.v201008.Estimate');
goog.provide('google.ads.adwords.v201008.CampaignEstimate');
goog.provide('google.ads.adwords.v201008.AdGroupEstimate');
goog.provide('google.ads.adwords.v201008.KeywordEstimate');
goog.provide('google.ads.adwords.v201008.TrafficEstimatorResult');
goog.provide('google.ads.adwords.v201008.EstimateRequest');
goog.provide('google.ads.adwords.v201008.CampaignEstimateRequest');
goog.provide('google.ads.adwords.v201008.AdGroupEstimateRequest');
goog.provide('google.ads.adwords.v201008.KeywordEstimateRequest');
goog.provide('google.ads.adwords.v201008.TrafficEstimatorSelector');
goog.provide('google.ads.adwords.v201008.IdError');
goog.provide('google.ads.adwords.v201008.IdErrorReason');
goog.provide('google.ads.adwords.v201008.EntityAccessDenied');
goog.provide('google.ads.adwords.v201008.EntityAccessDeniedReason');
goog.provide('google.ads.adwords.v201008.TrafficEstimatorError');
goog.provide('google.ads.adwords.v201008.TrafficEstimatorErrorReason');
goog.provide('google.ads.adwords.v201008.AlertService');
goog.provide('google.ads.adwords.v201008.Detail');
goog.provide('google.ads.adwords.v201008.Alert');
goog.provide('google.ads.adwords.v201008.AlertSeverity');
goog.provide('google.ads.adwords.v201008.AlertType');
goog.provide('google.ads.adwords.v201008.NoStatsPage');
goog.provide('google.ads.adwords.v201008.AlertPage');
goog.provide('google.ads.adwords.v201008.AlertQuery');
goog.provide('google.ads.adwords.v201008.ClientSpec');
goog.provide('google.ads.adwords.v201008.FilterSpec');
goog.provide('google.ads.adwords.v201008.TriggerTimeSpec');
goog.provide('google.ads.adwords.v201008.AlertSelector');
goog.provide('google.ads.adwords.v201008.AlertError');
goog.provide('google.ads.adwords.v201008.AlertErrorReason');
goog.provide('google.ads.adwords.v201008.AdExtensionOverrideService');
goog.provide('google.ads.adwords.v201008.AdExtensionOverrideReturnValue');
goog.provide('google.ads.adwords.v201008.AdExtensionOverride');
goog.provide('google.ads.adwords.v201008.AdExtension');
goog.provide('google.ads.adwords.v201008.LocationSyncExtension');
goog.provide('google.ads.adwords.v201008.ProductExtension');
goog.provide('google.ads.adwords.v201008.ProductConditionAndGroup');
goog.provide('google.ads.adwords.v201008.SitelinksExtension');
goog.provide('google.ads.adwords.v201008.Sitelink');
goog.provide('google.ads.adwords.v201008.MobileExtension');
goog.provide('google.ads.adwords.v201008.LocationExtension');
goog.provide('google.ads.adwords.v201008.LocationExtensionSource');
goog.provide('google.ads.adwords.v201008.OverrideInfo');
goog.provide('google.ads.adwords.v201008.LocationOverrideInfo');
goog.provide('google.ads.adwords.v201008.LocationOverrideInfoRadiusUnits');
goog.provide('google.ads.adwords.v201008.AdExtensionOverrideStatus');
goog.provide('google.ads.adwords.v201008.AdExtensionOverrideApprovalStatus');
goog.provide('google.ads.adwords.v201008.AdExtensionOverrideStats');
goog.provide('google.ads.adwords.v201008.AdExtensionOverrideOperation');
goog.provide('google.ads.adwords.v201008.AdExtensionOverridePage');
goog.provide('google.ads.adwords.v201008.AdExtensionOverrideSelector');
goog.provide('google.ads.adwords.v201008.AdExtensionOverrideError');
goog.provide('google.ads.adwords.v201008.AdExtensionOverrideErrorReason');
goog.provide('google.ads.adwords.v201008.ServicedAccountService');
goog.provide('google.ads.adwords.v201008.CustomerId');
goog.provide('google.ads.adwords.v201008.Link');
goog.provide('google.ads.adwords.v201008.ServiceType');
goog.provide('google.ads.adwords.v201008.LinkType');
goog.provide('google.ads.adwords.v201008.Account');
goog.provide('google.ads.adwords.v201008.ServicedAccountGraph');
goog.provide('google.ads.adwords.v201008.ServicedAccountSelector');
goog.provide('google.ads.adwords.v201008.ServicedAccountError');
goog.provide('google.ads.adwords.v201008.ServicedAccountErrorReason');
goog.provide('google.ads.adwords.v201008.CustomerSyncService');
goog.provide('google.ads.adwords.v201008.AdGroupChangeData');
goog.provide('google.ads.adwords.v201008.ChangeStatus');
goog.provide('google.ads.adwords.v201008.CampaignChangeData');
goog.provide('google.ads.adwords.v201008.CustomerChangeData');
goog.provide('google.ads.adwords.v201008.DateTimeRange');
goog.provide('google.ads.adwords.v201008.CustomerSyncSelector');
goog.provide('google.ads.adwords.v201008.CustomerSyncError');
goog.provide('google.ads.adwords.v201008.CustomerSyncErrorReason');
goog.provide('google.ads.adwords.v201008.UserListService');
goog.provide('google.ads.adwords.v201008.UserListReturnValue');
goog.provide('google.ads.adwords.v201008.UserList');
goog.provide('google.ads.adwords.v201008.UserListMembershipStatus');
goog.provide('google.ads.adwords.v201008.SizeRange');
goog.provide('google.ads.adwords.v201008.UserListType');
goog.provide('google.ads.adwords.v201008.RemarketingUserList');
goog.provide('google.ads.adwords.v201008.UserListConversionType');
goog.provide('google.ads.adwords.v201008.UserListConversionTypeCategory');
goog.provide('google.ads.adwords.v201008.LogicalUserList');
goog.provide('google.ads.adwords.v201008.UserListLogicalRule');
goog.provide('google.ads.adwords.v201008.UserListLogicalRuleOperator');
goog.provide('google.ads.adwords.v201008.LogicalUserListOperand');
goog.provide('google.ads.adwords.v201008.UserInterest');
goog.provide('google.ads.adwords.v201008.ExternalRemarketingUserList');
goog.provide('google.ads.adwords.v201008.UserListOperation');
goog.provide('google.ads.adwords.v201008.UserListPage');
goog.provide('google.ads.adwords.v201008.UserListSelector');
goog.provide('google.ads.adwords.v201008.UserListError');
goog.provide('google.ads.adwords.v201008.UserListErrorReason');
goog.provide('google.ads.adwords.v201008.AdGroupAdService');
goog.provide('google.ads.adwords.v201008.AdGroupAdReturnValue');
goog.provide('google.ads.adwords.v201008.AdGroupAd');
goog.provide('google.ads.adwords.v201008.Ad');
goog.provide('google.ads.adwords.v201008.AdApprovalStatus');
goog.provide('google.ads.adwords.v201008.TemplateAd');
goog.provide('google.ads.adwords.v201008.AdUnionId');
goog.provide('google.ads.adwords.v201008.TempAdUnionId');
goog.provide('google.ads.adwords.v201008.TemplateElement');
goog.provide('google.ads.adwords.v201008.TemplateElementField');
goog.provide('google.ads.adwords.v201008.TemplateElementFieldType');
goog.provide('google.ads.adwords.v201008.LocalBusinessAd');
goog.provide('google.ads.adwords.v201008.ImageAd');
goog.provide('google.ads.adwords.v201008.RichMediaAd');
goog.provide('google.ads.adwords.v201008.ThirdPartyRedirectAd');
goog.provide('google.ads.adwords.v201008.VideoType');
goog.provide('google.ads.adwords.v201008.MobileImageAd');
goog.provide('google.ads.adwords.v201008.MarkupLanguageType');
goog.provide('google.ads.adwords.v201008.TextAd');
goog.provide('google.ads.adwords.v201008.ProductAd');
goog.provide('google.ads.adwords.v201008.MobileAd');
goog.provide('google.ads.adwords.v201008.DeprecatedAd');
goog.provide('google.ads.adwords.v201008.DeprecatedAdType');
goog.provide('google.ads.adwords.v201008.AdGroupAdStatus');
goog.provide('google.ads.adwords.v201008.AdStats');
goog.provide('google.ads.adwords.v201008.ExemptionRequest');
goog.provide('google.ads.adwords.v201008.AdGroupAdOperation');
goog.provide('google.ads.adwords.v201008.AdGroupAdPage');
goog.provide('google.ads.adwords.v201008.AdStatsSelector');
goog.provide('google.ads.adwords.v201008.AdGroupAdSelector');
goog.provide('google.ads.adwords.v201008.PagingError');
goog.provide('google.ads.adwords.v201008.PagingErrorReason');
goog.provide('google.ads.adwords.v201008.AdGroupAdCountLimitExceeded');
goog.provide('google.ads.adwords.v201008.AdGroupAdError');
goog.provide('google.ads.adwords.v201008.AdGroupAdErrorReason');
goog.provide('google.ads.adwords.v201008.AdError');
goog.provide('google.ads.adwords.v201008.AdErrorReason');
goog.provide('google.ads.adwords.v201008.AdGroupCriterionService');
goog.provide('google.ads.adwords.v201008.AdGroupCriterionReturnValue');
goog.provide('google.ads.adwords.v201008.AdGroupCriterion');
goog.provide('google.ads.adwords.v201008.BiddableAdGroupCriterion');
goog.provide('google.ads.adwords.v201008.UserStatus');
goog.provide('google.ads.adwords.v201008.SystemServingStatus');
goog.provide('google.ads.adwords.v201008.ApprovalStatus');
goog.provide('google.ads.adwords.v201008.AdGroupCriterionBids');
goog.provide('google.ads.adwords.v201008.ManualCPCAdGroupCriterionBids');
goog.provide('google.ads.adwords.v201008.BidSource');
goog.provide('google.ads.adwords.v201008.PositionPreferenceAdGroupCriterionBids');
goog.provide('google.ads.adwords.v201008.ManualCPMAdGroupCriterionBids');
goog.provide('google.ads.adwords.v201008.BudgetOptimizerAdGroupCriterionBids');
goog.provide('google.ads.adwords.v201008.PercentCPAAdGroupCriterionBids');
goog.provide('google.ads.adwords.v201008.ConversionOptimizerAdGroupCriterionBids');
goog.provide('google.ads.adwords.v201008.BiddableAdGroupCriterionExperimentData');
goog.provide('google.ads.adwords.v201008.ExperimentDeltaStatus');
goog.provide('google.ads.adwords.v201008.ExperimentDataStatus');
goog.provide('google.ads.adwords.v201008.AdGroupCriterionExperimentBidMultiplier');
goog.provide('google.ads.adwords.v201008.ManualCPCAdGroupCriterionExperimentBidMultiplier');
goog.provide('google.ads.adwords.v201008.BidMultiplier');
goog.provide('google.ads.adwords.v201008.MultiplierSource');
goog.provide('google.ads.adwords.v201008.QualityInfo');
goog.provide('google.ads.adwords.v201008.NegativeAdGroupCriterion');
goog.provide('google.ads.adwords.v201008.AdGroupCriterionOperation');
goog.provide('google.ads.adwords.v201008.AdGroupCriterionPage');
goog.provide('google.ads.adwords.v201008.AdGroupCriterionIdFilter');
goog.provide('google.ads.adwords.v201008.AdGroupCriterionSelector');
goog.provide('google.ads.adwords.v201008.CriterionUse');
goog.provide('google.ads.adwords.v201008.AdGroupService');
goog.provide('google.ads.adwords.v201008.AdGroupReturnValue');
goog.provide('google.ads.adwords.v201008.AdGroup');
goog.provide('google.ads.adwords.v201008.AdGroupStatus');
goog.provide('google.ads.adwords.v201008.AdGroupExperimentData');
goog.provide('google.ads.adwords.v201008.AdGroupExperimentBidMultipliers');
goog.provide('google.ads.adwords.v201008.ManualCPMAdGroupExperimentBidMultipliers');
goog.provide('google.ads.adwords.v201008.ManualCPCAdGroupExperimentBidMultipliers');
goog.provide('google.ads.adwords.v201008.AdGroupOperation');
goog.provide('google.ads.adwords.v201008.AdGroupPage');
goog.provide('google.ads.adwords.v201008.AdGroupSelector');
goog.provide('google.ads.adwords.v201008.AdGroupServiceError');
goog.provide('google.ads.adwords.v201008.AdGroupServiceErrorReason');
goog.provide('google.ads.adwords.v201008.AdParamService');
goog.provide('google.ads.adwords.v201008.AdParamOperation');
goog.provide('google.ads.adwords.v201008.AdParam');
goog.provide('google.ads.adwords.v201008.AdParamPage');
goog.provide('google.ads.adwords.v201008.AdParamSelector');
goog.provide('google.ads.adwords.v201008.AdParamPolicyError');
goog.provide('google.ads.adwords.v201008.AdParamError');
goog.provide('google.ads.adwords.v201008.AdParamErrorReason');
goog.provide('google.ads.adwords.v201008.BidLandscapeService');
goog.provide('google.ads.adwords.v201008.BidLandscapeLandscapePoint');
goog.provide('google.ads.adwords.v201008.BidLandscape');
goog.provide('google.ads.adwords.v201008.CriterionBidLandscape');
goog.provide('google.ads.adwords.v201008.AdGroupBidLandscape');
goog.provide('google.ads.adwords.v201008.AdGroupBidLandscapeType');
goog.provide('google.ads.adwords.v201008.BidLandscapeIdFilter');
goog.provide('google.ads.adwords.v201008.BidLandscapeSelector');
goog.provide('google.ads.adwords.v201008.CriterionBidLandscapeSelector');
goog.provide('google.ads.adwords.v201008.AdGroupBidLandscapeSelector');
goog.provide('google.ads.adwords.v201008.BidLandscapeServiceError');
goog.provide('google.ads.adwords.v201008.BidLandscapeServiceErrorReason');
goog.provide('google.ads.adwords.v201008.BulkMutateJobService');
goog.provide('google.ads.adwords.v201008.Operand');
goog.provide('google.ads.adwords.v201008.CampaignAdExtensionStats');
goog.provide('google.ads.adwords.v201008.ContentLabel');
goog.provide('google.ads.adwords.v201008.ContentLabelType');
goog.provide('google.ads.adwords.v201008.CampaignAdExtension');
goog.provide('google.ads.adwords.v201008.CampaignAdExtensionStatus');
goog.provide('google.ads.adwords.v201008.CampaignAdExtensionApprovalStatus');
goog.provide('google.ads.adwords.v201008.CampaignCriterion');
goog.provide('google.ads.adwords.v201008.NegativeCampaignCriterion');
goog.provide('google.ads.adwords.v201008.Job');
goog.provide('google.ads.adwords.v201008.JobContext');
goog.provide('google.ads.adwords.v201008.ApiErrorReason');
goog.provide('google.ads.adwords.v201008.AdExtensionErrorReason');
goog.provide('google.ads.adwords.v201008.BulkMutateJobErrorReason');
goog.provide('google.ads.adwords.v201008.CampaignAdExtensionErrorReason');
goog.provide('google.ads.adwords.v201008.CampaignCriterionErrorReason');
goog.provide('google.ads.adwords.v201008.JobErrorReason');
goog.provide('google.ads.adwords.v201008.PolicyViolationErrorReason');
goog.provide('google.ads.adwords.v201008.QuotaExceededErrorReason');
goog.provide('google.ads.adwords.v201008.JobStats');
goog.provide('google.ads.adwords.v201008.BulkMutateJobStats');
goog.provide('google.ads.adwords.v201008.BillingSummary');
goog.provide('google.ads.adwords.v201008.BulkMutateJob');
goog.provide('google.ads.adwords.v201008.BulkMutateJobPolicy');
goog.provide('google.ads.adwords.v201008.BulkMutateRequest');
goog.provide('google.ads.adwords.v201008.OperationStream');
goog.provide('google.ads.adwords.v201008.EntityId');
goog.provide('google.ads.adwords.v201008.EntityIdType');
goog.provide('google.ads.adwords.v201008.JobOperation');
goog.provide('google.ads.adwords.v201008.CampaignCriterionOperation');
goog.provide('google.ads.adwords.v201008.CampaignAdExtensionOperation');
goog.provide('google.ads.adwords.v201008.BasicJobStatus');
goog.provide('google.ads.adwords.v201008.JobEvent');
goog.provide('google.ads.adwords.v201008.BulkMutateResult');
goog.provide('google.ads.adwords.v201008.OperationStreamResult');
goog.provide('google.ads.adwords.v201008.OperationResult');
goog.provide('google.ads.adwords.v201008.UnprocessedResult');
goog.provide('google.ads.adwords.v201008.ReturnValueResult');
goog.provide('google.ads.adwords.v201008.LostResult');
goog.provide('google.ads.adwords.v201008.FailureResult');
goog.provide('google.ads.adwords.v201008.JobError');
goog.provide('google.ads.adwords.v201008.CampaignCriterionLimitExceeded');
goog.provide('google.ads.adwords.v201008.CampaignCriterionLimitExceededCriteriaLimitType');
goog.provide('google.ads.adwords.v201008.CampaignCriterionError');
goog.provide('google.ads.adwords.v201008.CampaignAdExtensionError');
goog.provide('google.ads.adwords.v201008.BulkMutateJobError');
goog.provide('google.ads.adwords.v201008.AdExtensionError');
goog.provide('google.ads.adwords.v201008.BatchFailureResult');
goog.provide('google.ads.adwords.v201008.JobSelector');
goog.provide('google.ads.adwords.v201008.BulkMutateJobSelector');
goog.provide('google.ads.adwords.v201008.CampaignAdExtensionService');
goog.provide('google.ads.adwords.v201008.CampaignAdExtensionReturnValue');
goog.provide('google.ads.adwords.v201008.CampaignAdExtensionPage');
goog.provide('google.ads.adwords.v201008.CampaignAdExtensionStatsSelector');
goog.provide('google.ads.adwords.v201008.CampaignAdExtensionSelector');
goog.provide('google.ads.adwords.v201008.CampaignCriterionService');
goog.provide('google.ads.adwords.v201008.CampaignCriterionReturnValue');
goog.provide('google.ads.adwords.v201008.CampaignCriterionPage');
goog.provide('google.ads.adwords.v201008.CampaignCriterionIdFilter');
goog.provide('google.ads.adwords.v201008.CampaignCriterionSelector');
goog.provide('google.ads.adwords.v201008.Money');
goog.provide('google.ads.adwords.v201008.CampaignStats');
goog.provide('google.ads.adwords.v201008.PlatformTarget');
goog.provide('google.ads.adwords.v201008.Placement');
goog.provide('google.ads.adwords.v201008.BulkMutateJobEvent');
goog.provide('google.ads.adwords.v201008.RequestHeader');
goog.provide('google.ads.adwords.v201008.ResponseHeader');

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
$nso.CampaignService = function() {
  $sso.call(this);
  this.nametable_ = new google.ads.adwords.v201008.SoapNametable();
};

$ref = $dsf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.CampaignService');
$ref.prop('requestHeader', $nst + '.RequestHeader', 'RequestHeader', false, false);
$ref.prop('responseHeader', $nst + '.ResponseHeader', 'ResponseHeader', false, false);
$ref.meth(
  'get',
  'https://adwords.google.com/api/adwords/cm/v201008',
  'https://adwords.google.com/api/adwords/cm/v201008',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.CampaignPage', isArray: false, isSystem: false},
  [{propertyName: 'responseHeader', direction: 'out'}, {propertyName: 'requestHeader', direction: 'in'}],
  [{className: $nst + '.CampaignSelector', isArray: false, isSystem: false, name: 'selector', xmlElementName: 'selector'}]
);
$ref.meth(
  'mutate',
  'https://adwords.google.com/api/adwords/cm/v201008',
  'https://adwords.google.com/api/adwords/cm/v201008',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.CampaignReturnValue', isArray: false, isSystem: false},
  [{propertyName: 'responseHeader', direction: 'out'}, {propertyName: 'requestHeader', direction: 'in'}],
  [{className: $nst + '.CampaignOperation', isArray: true, isSystem: false, name: 'operations', xmlElementName: 'operations'}]
);

$nso.CampaignService.prototype.get = function(selector, onsuccess, onfailure) {
  this.invoke.call(this, 'get', [selector], onsuccess, onfailure);
};

$nso.CampaignService.prototype.mutate = function(operations, onsuccess, onfailure) {
  this.invoke.call(this, 'mutate', [operations], onsuccess, onfailure);
};

$nso.ListReturnValue = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.ListReturnValue', false, $sot);
$ref.prop('listReturnValueType', 'string', 'ListReturnValue.Type', false, true);

$nso.CampaignReturnValue = function() {
  $nso.ListReturnValue.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.CampaignReturnValue', false, $nst + '.ListReturnValue');
$ref.prop('value', $nst + '.Campaign', 'value', true, false);

$nso.Campaign = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.Campaign', false, $sot);
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

$nso.CampaignStatus = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.CampaignStatus', true, $sot);

$nso.CampaignStatus.ACTIVE = 'ACTIVE';
$nso.CampaignStatus.DELETED = 'DELETED';
$nso.CampaignStatus.PAUSED = 'PAUSED';

$nso.ServingStatus = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.ServingStatus', true, $sot);

$nso.ServingStatus.SERVING = 'SERVING';
$nso.ServingStatus.NONE = 'NONE';
$nso.ServingStatus.ENDED = 'ENDED';
$nso.ServingStatus.PENDING = 'PENDING';
$nso.ServingStatus.SUSPENDED = 'SUSPENDED';

$nso.Budget = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.Budget', false, $sot);
$ref.prop('period', $nst + '.BudgetBudgetPeriod', 'period', false, false);
$ref.prop('amount', $nst + '.Money', 'amount', false, false);
$ref.prop('deliveryMethod', $nst + '.BudgetBudgetDeliveryMethod', 'deliveryMethod', false, false);

$nso.BudgetBudgetPeriod = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.BudgetBudgetPeriod', true, $sot);

$nso.BudgetBudgetPeriod.DAILY = 'DAILY';
$nso.BudgetBudgetPeriod.MONTHLY = 'MONTHLY';

$nso.ComparableValue = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.ComparableValue', false, $sot);
$ref.prop('comparableValueType', 'string', 'ComparableValue.Type', false, true);

$nso.NumberValue = function() {
  $nso.ComparableValue.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.NumberValue', false, $nst + '.ComparableValue');

$nso.LongValue = function() {
  $nso.NumberValue.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.LongValue', false, $nst + '.NumberValue');
$ref.prop('number', 'integer', 'number', false, true);

$nso.DoubleValue = function() {
  $nso.NumberValue.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.DoubleValue', false, $nst + '.NumberValue');
$ref.prop('number', 'double', 'number', false, true);

$nso.BudgetBudgetDeliveryMethod = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.BudgetBudgetDeliveryMethod', true, $sot);

$nso.BudgetBudgetDeliveryMethod.STANDARD = 'STANDARD';
$nso.BudgetBudgetDeliveryMethod.ACCELERATED = 'ACCELERATED';

$nso.BiddingStrategy = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.BiddingStrategy', false, $sot);
$ref.prop('biddingStrategyType', 'string', 'BiddingStrategy.Type', false, true);

$nso.BudgetOptimizer = function() {
  $nso.BiddingStrategy.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.BudgetOptimizer', false, $nst + '.BiddingStrategy');
$ref.prop('enhancedCpcEnabled', 'boolean', 'enhancedCpcEnabled', false, true);
$ref.prop('bidCeiling', $nst + '.Money', 'bidCeiling', false, false);

$nso.PercentCPA = function() {
  $nso.BiddingStrategy.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.PercentCPA', false, $nst + '.BiddingStrategy');

$nso.ManualCPM = function() {
  $nso.BiddingStrategy.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.ManualCPM', false, $nst + '.BiddingStrategy');

$nso.ManualCPC = function() {
  $nso.BiddingStrategy.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.ManualCPC', false, $nst + '.BiddingStrategy');
$ref.prop('enhancedCpcEnabled', 'boolean', 'enhancedCpcEnabled', false, true);
$ref.prop('positionPreference', $nst + '.PositionPreference', 'positionPreference', false, false);

$nso.PositionPreference = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.PositionPreference', true, $sot);

$nso.PositionPreference.ON = 'ON';
$nso.PositionPreference.OFF = 'OFF';

$nso.ConversionOptimizer = function() {
  $nso.BiddingStrategy.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.ConversionOptimizer', false, $nst + '.BiddingStrategy');
$ref.prop('pricingModel', $nst + '.PricingModel', 'pricingModel', false, false);
$ref.prop('conversionOptimizerBidType', $nst + '.ConversionOptimizerBidType', 'conversionOptimizerBidType', false, false);
$ref.prop('deduplicationMode', $nst + '.ConversionDeduplicationMode', 'deduplicationMode', false, false);

$nso.PricingModel = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.PricingModel', true, $sot);

$nso.PricingModel.CLICKS = 'CLICKS';
$nso.PricingModel.IMPRESSIONS = 'IMPRESSIONS';
$nso.PricingModel.CONVERSIONS = 'CONVERSIONS';

$nso.ConversionOptimizerBidType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.ConversionOptimizerBidType', true, $sot);

$nso.ConversionOptimizerBidType.TARGET_CPA = 'TARGET_CPA';
$nso.ConversionOptimizerBidType.MAX_CPA = 'MAX_CPA';

$nso.ConversionDeduplicationMode = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.ConversionDeduplicationMode', true, $sot);

$nso.ConversionDeduplicationMode.ONE_PER_CLICK = 'ONE_PER_CLICK';
$nso.ConversionDeduplicationMode.MANY_PER_CLICK = 'MANY_PER_CLICK';

$nso.ConversionOptimizerEligibility = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.ConversionOptimizerEligibility', false, $sot);
$ref.prop('eligible', 'boolean', 'eligible', false, true);
$ref.prop('rejectionReasons', $nst + '.ConversionOptimizerEligibilityRejectionReason', 'rejectionReasons', true, false);

$nso.ConversionOptimizerEligibilityRejectionReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.ConversionOptimizerEligibilityRejectionReason', true, $sot);

$nso.ConversionOptimizerEligibilityRejectionReason.CAMPAIGN_IS_NOT_ACTIVE = 'CAMPAIGN_IS_NOT_ACTIVE';
$nso.ConversionOptimizerEligibilityRejectionReason.NOT_CPC_CAMPAIGN = 'NOT_CPC_CAMPAIGN';
$nso.ConversionOptimizerEligibilityRejectionReason.CONVERSION_TRACKING_NOT_ENABLED = 'CONVERSION_TRACKING_NOT_ENABLED';
$nso.ConversionOptimizerEligibilityRejectionReason.NOT_ENOUGH_CONVERSIONS = 'NOT_ENOUGH_CONVERSIONS';
$nso.ConversionOptimizerEligibilityRejectionReason.UNKNOWN = 'UNKNOWN';

$nso.Stats = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.Stats', false, $sot);
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
$ref.prop('statsType', 'string', 'Stats.Type', false, true);

$nso.StatsNetwork = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.StatsNetwork', true, $sot);

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

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AdServingOptimizationStatus', true, $sot);

$nso.AdServingOptimizationStatus.OPTIMIZE = 'OPTIMIZE';
$nso.AdServingOptimizationStatus.ROTATE = 'ROTATE';
$nso.AdServingOptimizationStatus.UNAVAILABLE = 'UNAVAILABLE';

$nso.FrequencyCap = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.FrequencyCap', false, $sot);
$ref.prop('impressions', 'integer', 'impressions', false, true);
$ref.prop('timeUnit', $nst + '.TimeUnit', 'timeUnit', false, false);
$ref.prop('level', $nst + '.Level', 'level', false, false);

$nso.TimeUnit = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.TimeUnit', true, $sot);

$nso.TimeUnit.MINUTE = 'MINUTE';
$nso.TimeUnit.HOUR = 'HOUR';
$nso.TimeUnit.DAY = 'DAY';
$nso.TimeUnit.WEEK = 'WEEK';
$nso.TimeUnit.MONTH = 'MONTH';
$nso.TimeUnit.LIFETIME = 'LIFETIME';

$nso.Level = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.Level', true, $sot);

$nso.Level.CREATIVE = 'CREATIVE';
$nso.Level.ADGROUP = 'ADGROUP';
$nso.Level.CAMPAIGN = 'CAMPAIGN';
$nso.Level.UNKNOWN = 'UNKNOWN';

$nso.Bid = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.Bid', false, $sot);
$ref.prop('amount', $nst + '.Money', 'amount', false, false);

$nso.AdGroupBids = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AdGroupBids', false, $sot);
$ref.prop('adGroupBidsType', 'string', 'AdGroupBids.Type', false, true);

$nso.ManualCPMAdGroupBids = function() {
  $nso.AdGroupBids.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.ManualCPMAdGroupBids', false, $nst + '.AdGroupBids');
$ref.prop('maxCpm', $nst + '.Bid', 'maxCpm', false, false);

$nso.ManualCPCAdGroupBids = function() {
  $nso.AdGroupBids.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.ManualCPCAdGroupBids', false, $nst + '.AdGroupBids');
$ref.prop('keywordMaxCpc', $nst + '.Bid', 'keywordMaxCpc', false, false);
$ref.prop('keywordContentMaxCpc', $nst + '.Bid', 'keywordContentMaxCpc', false, false);
$ref.prop('siteMaxCpc', $nst + '.Bid', 'siteMaxCpc', false, false);
$ref.prop('enhancedCpcEnabled', 'boolean', 'enhancedCpcEnabled', false, true);

$nso.ConversionOptimizerAdGroupBids = function() {
  $nso.AdGroupBids.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.ConversionOptimizerAdGroupBids', false, $nst + '.AdGroupBids');
$ref.prop('targetCpa', $nst + '.Bid', 'targetCpa', false, false);
$ref.prop('conversionOptimizerBidType', $nst + '.ConversionOptimizerBidType', 'conversionOptimizerBidType', false, false);
$ref.prop('deduplicationMode', $nst + '.ConversionDeduplicationMode', 'deduplicationMode', false, false);

$nso.BudgetOptimizerAdGroupBids = function() {
  $nso.AdGroupBids.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.BudgetOptimizerAdGroupBids', false, $nst + '.AdGroupBids');
$ref.prop('proxyKeywordMaxCpc', $nst + '.Bid', 'proxyKeywordMaxCpc', false, false);
$ref.prop('proxySiteMaxCpc', $nst + '.Bid', 'proxySiteMaxCpc', false, false);
$ref.prop('enhancedCpcEnabled', 'boolean', 'enhancedCpcEnabled', false, true);

$nso.PercentCPAAdGroupBids = function() {
  $nso.AdGroupBids.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.PercentCPAAdGroupBids', false, $nst + '.AdGroupBids');
$ref.prop('percentCpa', 'integer', 'percentCpa', false, true);

$nso.BiddingTransition = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.BiddingTransition', false, $sot);
$ref.prop('targetBiddingStrategy', $nst + '.BiddingStrategy', 'targetBiddingStrategy', false, false);
$ref.prop('explicitAdGroupBids', $nst + '.AdGroupBids', 'explicitAdGroupBids', false, false);
$ref.prop('biddingTransitionType', 'string', 'BiddingTransition.Type', false, true);

$nso.ConversionOptimizerBiddingTransition = function() {
  $nso.BiddingTransition.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.ConversionOptimizerBiddingTransition', false, $nst + '.BiddingTransition');
$ref.prop('useSavedBids', 'boolean', 'useSavedBids', false, true);

$nso.Operation = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.Operation', false, $sot);
$ref.prop('operator', $nst + '.Operator', 'operator', false, false);
$ref.prop('operationType', 'string', 'Operation.Type', false, true);

$nso.Operator = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.Operator', true, $sot);

$nso.Operator.ADD = 'ADD';
$nso.Operator.REMOVE = 'REMOVE';
$nso.Operator.SET = 'SET';

$nso.CampaignOperation = function() {
  $nso.Operation.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.CampaignOperation', false, $nst + '.Operation');
$ref.prop('biddingTransition', $nst + '.BiddingTransition', 'biddingTransition', false, false);
$ref.prop('operand', $nst + '.Campaign', 'operand', false, false);

$nso.Page = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.Page', false, $sot);
$ref.prop('totalNumEntries', 'integer', 'totalNumEntries', false, true);
$ref.prop('pageType', 'string', 'Page.Type', false, true);

$nso.CampaignPage = function() {
  $nso.Page.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.CampaignPage', false, $nst + '.Page');
$ref.prop('totalBudget', $nst + '.Budget', 'totalBudget', false, false);
$ref.prop('entries', $nst + '.Campaign', 'entries', true, false);

$nso.Paging = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.Paging', false, $sot);
$ref.prop('startIndex', 'integer', 'startIndex', false, true);
$ref.prop('numberResults', 'integer', 'numberResults', false, true);

$nso.DateRange = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.DateRange', false, $sot);
$ref.prop('min', 'string', 'min', false, true);
$ref.prop('max', 'string', 'max', false, true);

$nso.StatsSelector = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.StatsSelector', false, $sot);
$ref.prop('dateRange', $nst + '.DateRange', 'dateRange', false, false);
$ref.prop('statsSelectorType', 'string', 'StatsSelector.Type', false, true);

$nso.CampaignSelector = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.CampaignSelector', false, $sot);
$ref.prop('ids', 'integer', 'ids', true, true);
$ref.prop('campaignStatuses', $nst + '.CampaignStatus', 'campaignStatuses', true, false);
$ref.prop('statsSelector', $nst + '.StatsSelector', 'statsSelector', false, false);
$ref.prop('paging', $nst + '.Paging', 'paging', false, false);

$nso.ApiError = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.ApiError', false, $sot);
$ref.prop('fieldPath', 'string', 'fieldPath', false, true);
$ref.prop('trigger', 'string', 'trigger', false, true);
$ref.prop('errorString', 'string', 'errorString', false, true);
$ref.prop('apiErrorType', 'string', 'ApiError.Type', false, true);

$nso.DatabaseError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.DatabaseError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.DatabaseErrorReason', 'reason', false, false);

$nso.DatabaseErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.DatabaseErrorReason', true, $sot);

$nso.DatabaseErrorReason.CONCURRENT_MODIFICATION = 'CONCURRENT_MODIFICATION';
$nso.DatabaseErrorReason.PERMISSION_DENIED = 'PERMISSION_DENIED';
$nso.DatabaseErrorReason.CAMPAIGN_PRODUCT_NOT_SUPPORTED = 'CAMPAIGN_PRODUCT_NOT_SUPPORTED';
$nso.DatabaseErrorReason.DUPLICATE_KEY = 'DUPLICATE_KEY';
$nso.DatabaseErrorReason.DATABASE_ERROR = 'DATABASE_ERROR';
$nso.DatabaseErrorReason.UNKNOWN = 'UNKNOWN';

$nso.StringLengthError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.StringLengthError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.StringLengthErrorReason', 'reason', false, false);

$nso.StringLengthErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.StringLengthErrorReason', true, $sot);

$nso.StringLengthErrorReason.TOO_SHORT = 'TOO_SHORT';
$nso.StringLengthErrorReason.TOO_LONG = 'TOO_LONG';

$nso.StatsQueryError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.StatsQueryError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.StatsQueryErrorReason', 'reason', false, false);

$nso.StatsQueryErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.StatsQueryErrorReason', true, $sot);

$nso.StatsQueryErrorReason.DATE_NOT_IN_VALID_RANGE = 'DATE_NOT_IN_VALID_RANGE';

$nso.SizeLimitError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.SizeLimitError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.SizeLimitErrorReason', 'reason', false, false);

$nso.SizeLimitErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.SizeLimitErrorReason', true, $sot);

$nso.SizeLimitErrorReason.REQUEST_SIZE_LIMIT_EXCEEDED = 'REQUEST_SIZE_LIMIT_EXCEEDED';
$nso.SizeLimitErrorReason.RESPONSE_SIZE_LIMIT_EXCEEDED = 'RESPONSE_SIZE_LIMIT_EXCEEDED';
$nso.SizeLimitErrorReason.UNKNOWN = 'UNKNOWN';

$nso.RequiredError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.RequiredError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.RequiredErrorReason', 'reason', false, false);

$nso.RequiredErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.RequiredErrorReason', true, $sot);

$nso.RequiredErrorReason.REQUIRED = 'REQUIRED';

$nso.RequestError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.RequestError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.RequestErrorReason', 'reason', false, false);

$nso.RequestErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.RequestErrorReason', true, $sot);

$nso.RequestErrorReason.UNKNOWN = 'UNKNOWN';
$nso.RequestErrorReason.INVALID_INPUT = 'INVALID_INPUT';

$nso.RejectedError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.RejectedError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.RejectedErrorReason', 'reason', false, false);

$nso.RejectedErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.RejectedErrorReason', true, $sot);

$nso.RejectedErrorReason.UNKNOWN_VALUE = 'UNKNOWN_VALUE';

$nso.ReadOnlyError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.ReadOnlyError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.ReadOnlyErrorReason', 'reason', false, false);

$nso.ReadOnlyErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.ReadOnlyErrorReason', true, $sot);

$nso.ReadOnlyErrorReason.READ_ONLY = 'READ_ONLY';

$nso.RateExceededError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.RateExceededError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.RateExceededErrorReason', 'reason', false, false);
$ref.prop('rateName', 'string', 'rateName', false, true);
$ref.prop('rateScope', 'string', 'rateScope', false, true);
$ref.prop('retryAfterSeconds', 'integer', 'retryAfterSeconds', false, true);

$nso.RateExceededErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.RateExceededErrorReason', true, $sot);

$nso.RateExceededErrorReason.RATE_EXCEEDED = 'RATE_EXCEEDED';

$nso.RangeError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.RangeError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.RangeErrorReason', 'reason', false, false);

$nso.RangeErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.RangeErrorReason', true, $sot);

$nso.RangeErrorReason.TOO_LOW = 'TOO_LOW';
$nso.RangeErrorReason.TOO_HIGH = 'TOO_HIGH';

$nso.QuotaError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.QuotaError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.QuotaErrorReason', 'reason', false, false);
$ref.prop('limit', 'integer', 'limit', false, true);

$nso.QuotaErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.QuotaErrorReason', true, $sot);

$nso.QuotaErrorReason.TOO_MANY_ADGROUPS_PER_CAMPAIGN = 'TOO_MANY_ADGROUPS_PER_CAMPAIGN';
$nso.QuotaErrorReason.TOO_MANY_CAMPAIGNS_PER_ACCOUNT = 'TOO_MANY_CAMPAIGNS_PER_ACCOUNT';
$nso.QuotaErrorReason.TOO_MANY_CONVERSION_TYPES_PER_ACCOUNT = 'TOO_MANY_CONVERSION_TYPES_PER_ACCOUNT';
$nso.QuotaErrorReason.TOO_MANY_KEYWORDS_PER_ADGROUP = 'TOO_MANY_KEYWORDS_PER_ADGROUP';
$nso.QuotaErrorReason.TOO_MANY_KEYWORDS_PER_CAMPAIGN = 'TOO_MANY_KEYWORDS_PER_CAMPAIGN';
$nso.QuotaErrorReason.TOO_MANY_KEYWORDS_PER_CUSTOMER = 'TOO_MANY_KEYWORDS_PER_CUSTOMER';
$nso.QuotaErrorReason.TOO_MANY_SITES_PER_ADGROUP = 'TOO_MANY_SITES_PER_ADGROUP';
$nso.QuotaErrorReason.TOO_MANY_SITES_PER_CAMPAIGN = 'TOO_MANY_SITES_PER_CAMPAIGN';

$nso.QuotaCheckError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.QuotaCheckError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.QuotaCheckErrorReason', 'reason', false, false);

$nso.QuotaCheckErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.QuotaCheckErrorReason', true, $sot);

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

$nso.OperatorError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.OperatorError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.OperatorErrorReason', 'reason', false, false);

$nso.OperatorErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.OperatorErrorReason', true, $sot);

$nso.OperatorErrorReason.OPERATOR_NOT_SUPPORTED = 'OPERATOR_NOT_SUPPORTED';

$nso.OperationAccessDenied = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.OperationAccessDenied', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.OperationAccessDeniedReason', 'reason', false, false);

$nso.OperationAccessDeniedReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.OperationAccessDeniedReason', true, $sot);

$nso.OperationAccessDeniedReason.ACTION_NOT_PERMITTED = 'ACTION_NOT_PERMITTED';
$nso.OperationAccessDeniedReason.ADD_OPERATION_NOT_PERMITTED = 'ADD_OPERATION_NOT_PERMITTED';
$nso.OperationAccessDeniedReason.REMOVE_OPERATION_NOT_PERMITTED = 'REMOVE_OPERATION_NOT_PERMITTED';
$nso.OperationAccessDeniedReason.SET_OPERATION_NOT_PERMITTED = 'SET_OPERATION_NOT_PERMITTED';
$nso.OperationAccessDeniedReason.UNKNOWN = 'UNKNOWN';

$nso.NullError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.NullError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.NullErrorReason', 'reason', false, false);

$nso.NullErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.NullErrorReason', true, $sot);

$nso.NullErrorReason.NULL_CONTENT = 'NULL_CONTENT';

$nso.NotWhitelistedError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.NotWhitelistedError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.NotWhitelistedErrorReason', 'reason', false, false);

$nso.NotWhitelistedErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.NotWhitelistedErrorReason', true, $sot);

$nso.NotWhitelistedErrorReason.CUSTOMER_NOT_WHITELISTED_FOR_API = 'CUSTOMER_NOT_WHITELISTED_FOR_API';

$nso.NotEmptyError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.NotEmptyError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.NotEmptyErrorReason', 'reason', false, false);

$nso.NotEmptyErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.NotEmptyErrorReason', true, $sot);

$nso.NotEmptyErrorReason.EMPTY_LIST = 'EMPTY_LIST';

$nso.NewEntityCreationError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.NewEntityCreationError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.NewEntityCreationErrorReason', 'reason', false, false);

$nso.NewEntityCreationErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.NewEntityCreationErrorReason', true, $sot);

$nso.NewEntityCreationErrorReason.CANNOT_SET_ID_FOR_ADD = 'CANNOT_SET_ID_FOR_ADD';

$nso.InternalApiError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.InternalApiError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.InternalApiErrorReason', 'reason', false, false);

$nso.InternalApiErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.InternalApiErrorReason', true, $sot);

$nso.InternalApiErrorReason.UNEXPECTED_INTERNAL_API_ERROR = 'UNEXPECTED_INTERNAL_API_ERROR';
$nso.InternalApiErrorReason.UNKNOWN = 'UNKNOWN';

$nso.EntityNotFound = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.EntityNotFound', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.EntityNotFoundReason', 'reason', false, false);

$nso.EntityNotFoundReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.EntityNotFoundReason', true, $sot);

$nso.EntityNotFoundReason.INVALID_ID = 'INVALID_ID';

$nso.DistinctError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.DistinctError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.DistinctErrorReason', 'reason', false, false);

$nso.DistinctErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.DistinctErrorReason', true, $sot);

$nso.DistinctErrorReason.DUPLICATE_ELEMENT = 'DUPLICATE_ELEMENT';

$nso.DateError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.DateError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.DateErrorReason', 'reason', false, false);

$nso.DateErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.DateErrorReason', true, $sot);

$nso.DateErrorReason.INVALID_FIELD_VALUES_IN_DATE = 'INVALID_FIELD_VALUES_IN_DATE';
$nso.DateErrorReason.INVALID_STRING_DATE = 'INVALID_STRING_DATE';
$nso.DateErrorReason.INVALID_STRING_DATE_RANGE = 'INVALID_STRING_DATE_RANGE';
$nso.DateErrorReason.INVALID_STRING_DATE_TIME = 'INVALID_STRING_DATE_TIME';
$nso.DateErrorReason.EARLIER_THAN_MINIMUM_DATE = 'EARLIER_THAN_MINIMUM_DATE';
$nso.DateErrorReason.LATER_THAN_MAXIMUM_DATE = 'LATER_THAN_MAXIMUM_DATE';
$nso.DateErrorReason.DATE_RANGE_MINIMUM_DATE_LATER_THAN_MAXIMUM_DATE = 'DATE_RANGE_MINIMUM_DATE_LATER_THAN_MAXIMUM_DATE';
$nso.DateErrorReason.DATE_RANGE_MINIMUM_AND_MAXIMUM_DATES_BOTH_NULL = 'DATE_RANGE_MINIMUM_AND_MAXIMUM_DATES_BOTH_NULL';

$nso.ClientTermsError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.ClientTermsError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.ClientTermsErrorReason', 'reason', false, false);

$nso.ClientTermsErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.ClientTermsErrorReason', true, $sot);

$nso.ClientTermsErrorReason.INCOMPLETE_SIGNUP_CURRENT_ADWORDS_TNC_NOT_AGREED = 'INCOMPLETE_SIGNUP_CURRENT_ADWORDS_TNC_NOT_AGREED';

$nso.CampaignError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.CampaignError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.CampaignErrorReason', 'reason', false, false);

$nso.CampaignErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.CampaignErrorReason', true, $sot);

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

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.BudgetError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.BudgetErrorReason', 'reason', false, false);

$nso.BudgetErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.BudgetErrorReason', true, $sot);

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

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.BiddingTransitionError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.BiddingTransitionErrorReason', 'reason', false, false);

$nso.BiddingTransitionErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.BiddingTransitionErrorReason', true, $sot);

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

$nso.BiddingError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.BiddingError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.BiddingErrorReason', 'reason', false, false);

$nso.BiddingErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.BiddingErrorReason', true, $sot);

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

$nso.AuthorizationError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AuthorizationError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.AuthorizationErrorReason', 'reason', false, false);

$nso.AuthorizationErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AuthorizationErrorReason', true, $sot);

$nso.AuthorizationErrorReason.UNABLE_TO_AUTHORIZE = 'UNABLE_TO_AUTHORIZE';
$nso.AuthorizationErrorReason.NO_ADWORDS_ACCOUNT_FOR_CUSTOMER = 'NO_ADWORDS_ACCOUNT_FOR_CUSTOMER';
$nso.AuthorizationErrorReason.USER_PERMISSION_DENIED = 'USER_PERMISSION_DENIED';
$nso.AuthorizationErrorReason.EFFECTIVE_USER_PERMISSION_DENIED = 'EFFECTIVE_USER_PERMISSION_DENIED';
$nso.AuthorizationErrorReason.USER_HAS_READONLY_PERMISSION = 'USER_HAS_READONLY_PERMISSION';
$nso.AuthorizationErrorReason.NO_CUSTOMER_FOUND = 'NO_CUSTOMER_FOUND';

$nso.AuthenticationError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AuthenticationError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.AuthenticationErrorReason', 'reason', false, false);

$nso.AuthenticationErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AuthenticationErrorReason', true, $sot);

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

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.ApplicationException', false, $sot);
$ref.prop('message', 'string', 'message', false, true);
$ref.prop('applicationExceptionType', 'string', 'ApplicationException.Type', false, true);

$nso.ApiException = function() {
  $nso.ApplicationException.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.ApiException', false, $nst + '.ApplicationException');
$ref.prop('errors', $nst + '.ApiError', 'errors', true, false);

$nso.CampaignTargetService = function() {
  $sso.call(this);
  this.nametable_ = new google.ads.adwords.v201008.SoapNametable();
};

$ref = $dsf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.CampaignTargetService');
$ref.prop('requestHeader', $nst + '.RequestHeader', 'RequestHeader', false, false);
$ref.prop('responseHeader', $nst + '.ResponseHeader', 'ResponseHeader', false, false);
$ref.meth(
  'get',
  'https://adwords.google.com/api/adwords/cm/v201008',
  'https://adwords.google.com/api/adwords/cm/v201008',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.CampaignTargetPage', isArray: false, isSystem: false},
  [{propertyName: 'responseHeader', direction: 'out'}, {propertyName: 'requestHeader', direction: 'in'}],
  [{className: $nst + '.CampaignTargetSelector', isArray: false, isSystem: false, name: 'selector', xmlElementName: 'selector'}]
);
$ref.meth(
  'mutate',
  'https://adwords.google.com/api/adwords/cm/v201008',
  'https://adwords.google.com/api/adwords/cm/v201008',
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

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.CampaignTargetReturnValue', false, $nst + '.ListReturnValue');
$ref.prop('value', $nst + '.TargetList', 'value', true, false);

$nso.TargetList = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.TargetList', false, $sot);
$ref.prop('campaignId', 'integer', 'campaignId', false, true);
$ref.prop('targetListType', 'string', 'TargetList.Type', false, true);

$nso.PlatformTargetList = function() {
  $nso.TargetList.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.PlatformTargetList', false, $nst + '.TargetList');
$ref.prop('targets', $nst + '.PlatformTarget', 'targets', true, false);

$nso.PlatformType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.PlatformType', true, $sot);

$nso.PlatformType.DESKTOP = 'DESKTOP';
$nso.PlatformType.HIGH_END_MOBILE = 'HIGH_END_MOBILE';
$nso.PlatformType.UNKNOWN = 'UNKNOWN';

$nso.Target = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.Target', false, $sot);
$ref.prop('targetType', 'string', 'Target.Type', false, true);

$nso.GeoTarget = function() {
  $nso.Target.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.GeoTarget', false, $nst + '.Target');
$ref.prop('excluded', 'boolean', 'excluded', false, true);

$nso.ProximityTarget = function() {
  $nso.GeoTarget.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.ProximityTarget', false, $nst + '.GeoTarget');
$ref.prop('geoPoint', $nst + '.GeoPoint', 'geoPoint', false, false);
$ref.prop('radiusDistanceUnits', $nst + '.ProximityTargetDistanceUnits', 'radiusDistanceUnits', false, false);
$ref.prop('radiusInUnits', 'double', 'radiusInUnits', false, true);
$ref.prop('address', $nst + '.Address', 'address', false, false);
$ref.prop('allowServiceOfAddress', 'boolean', 'allowServiceOfAddress', false, true);

$nso.GeoPoint = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.GeoPoint', false, $sot);
$ref.prop('latitudeInMicroDegrees', 'integer', 'latitudeInMicroDegrees', false, true);
$ref.prop('longitudeInMicroDegrees', 'integer', 'longitudeInMicroDegrees', false, true);

$nso.ProximityTargetDistanceUnits = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.ProximityTargetDistanceUnits', true, $sot);

$nso.ProximityTargetDistanceUnits.KILOMETERS = 'KILOMETERS';
$nso.ProximityTargetDistanceUnits.MILES = 'MILES';

$nso.Address = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.Address', false, $sot);
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

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.ProvinceTarget', false, $nst + '.GeoTarget');
$ref.prop('provinceCode', 'string', 'provinceCode', false, true);

$nso.PolygonTarget = function() {
  $nso.GeoTarget.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.PolygonTarget', false, $nst + '.GeoTarget');
$ref.prop('vertices', $nst + '.GeoPoint', 'vertices', true, false);

$nso.MetroTarget = function() {
  $nso.GeoTarget.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.MetroTarget', false, $nst + '.GeoTarget');
$ref.prop('metroCode', 'string', 'metroCode', false, true);

$nso.CountryTarget = function() {
  $nso.GeoTarget.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.CountryTarget', false, $nst + '.GeoTarget');
$ref.prop('countryCode', 'string', 'countryCode', false, true);

$nso.CityTarget = function() {
  $nso.GeoTarget.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.CityTarget', false, $nst + '.GeoTarget');
$ref.prop('cityName', 'string', 'cityName', false, true);
$ref.prop('provinceCode', 'string', 'provinceCode', false, true);
$ref.prop('countryCode', 'string', 'countryCode', false, true);

$nso.DemographicTarget = function() {
  $nso.Target.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.DemographicTarget', false, $nst + '.Target');
$ref.prop('bidModifier', 'integer', 'bidModifier', false, true);

$nso.GenderTarget = function() {
  $nso.DemographicTarget.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.GenderTarget', false, $nst + '.DemographicTarget');
$ref.prop('gender', $nst + '.GenderTargetGender', 'gender', false, false);

$nso.GenderTargetGender = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.GenderTargetGender', true, $sot);

$nso.GenderTargetGender.MALE = 'MALE';
$nso.GenderTargetGender.FEMALE = 'FEMALE';

$nso.AgeTarget = function() {
  $nso.DemographicTarget.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AgeTarget', false, $nst + '.DemographicTarget');
$ref.prop('age', $nst + '.AgeTargetAge', 'age', false, false);

$nso.AgeTargetAge = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AgeTargetAge', true, $sot);

$nso.AgeTargetAge.AGE_0_17 = 'AGE_0_17';
$nso.AgeTargetAge.AGE_18_24 = 'AGE_18_24';
$nso.AgeTargetAge.AGE_25_34 = 'AGE_25_34';
$nso.AgeTargetAge.AGE_35_44 = 'AGE_35_44';
$nso.AgeTargetAge.AGE_45_54 = 'AGE_45_54';
$nso.AgeTargetAge.AGE_55_64 = 'AGE_55_64';
$nso.AgeTargetAge.AGE_65_PLUS = 'AGE_65_PLUS';

$nso.NetworkTarget = function() {
  $nso.Target.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.NetworkTarget', false, $nst + '.Target');
$ref.prop('networkCoverageType', $nst + '.NetworkCoverageType', 'networkCoverageType', false, false);

$nso.NetworkCoverageType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.NetworkCoverageType', true, $sot);

$nso.NetworkCoverageType.GOOGLE_SEARCH = 'GOOGLE_SEARCH';
$nso.NetworkCoverageType.SEARCH_NETWORK = 'SEARCH_NETWORK';
$nso.NetworkCoverageType.CONTENT_NETWORK = 'CONTENT_NETWORK';
$nso.NetworkCoverageType.CONTENT_CONTEXTUAL = 'CONTENT_CONTEXTUAL';
$nso.NetworkCoverageType.CPA_REFERRAL = 'CPA_REFERRAL';
$nso.NetworkCoverageType.UNKNOWN = 'UNKNOWN';

$nso.MobileTarget = function() {
  $nso.Target.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.MobileTarget', false, $nst + '.Target');

$nso.MobilePlatformTarget = function() {
  $nso.MobileTarget.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.MobilePlatformTarget', false, $nst + '.MobileTarget');
$ref.prop('platformName', 'string', 'platformName', false, true);

$nso.MobileCarrierTarget = function() {
  $nso.MobileTarget.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.MobileCarrierTarget', false, $nst + '.MobileTarget');
$ref.prop('carrierName', 'string', 'carrierName', false, true);
$ref.prop('countryCode', 'string', 'countryCode', false, true);

$nso.LanguageTarget = function() {
  $nso.Target.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.LanguageTarget', false, $nst + '.Target');
$ref.prop('languageCode', 'string', 'languageCode', false, true);

$nso.AdScheduleTarget = function() {
  $nso.Target.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AdScheduleTarget', false, $nst + '.Target');
$ref.prop('dayOfWeek', $nst + '.DayOfWeek', 'dayOfWeek', false, false);
$ref.prop('startHour', 'integer', 'startHour', false, true);
$ref.prop('startMinute', $nst + '.MinuteOfHour', 'startMinute', false, false);
$ref.prop('endHour', 'integer', 'endHour', false, true);
$ref.prop('endMinute', $nst + '.MinuteOfHour', 'endMinute', false, false);
$ref.prop('bidMultiplier', 'double', 'bidMultiplier', false, true);

$nso.DayOfWeek = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.DayOfWeek', true, $sot);

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

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.MinuteOfHour', true, $sot);

$nso.MinuteOfHour.ZERO = 'ZERO';
$nso.MinuteOfHour.FIFTEEN = 'FIFTEEN';
$nso.MinuteOfHour.THIRTY = 'THIRTY';
$nso.MinuteOfHour.FORTY_FIVE = 'FORTY_FIVE';

$nso.NetworkTargetList = function() {
  $nso.TargetList.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.NetworkTargetList', false, $nst + '.TargetList');
$ref.prop('targets', $nst + '.NetworkTarget', 'targets', true, false);

$nso.MobileTargetList = function() {
  $nso.TargetList.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.MobileTargetList', false, $nst + '.TargetList');
$ref.prop('targets', $nst + '.MobileTarget', 'targets', true, false);

$nso.LanguageTargetList = function() {
  $nso.TargetList.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.LanguageTargetList', false, $nst + '.TargetList');
$ref.prop('targets', $nst + '.LanguageTarget', 'targets', true, false);

$nso.GeoTargetList = function() {
  $nso.TargetList.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.GeoTargetList', false, $nst + '.TargetList');
$ref.prop('targets', $nst + '.GeoTarget', 'targets', true, false);

$nso.DemographicTargetList = function() {
  $nso.TargetList.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.DemographicTargetList', false, $nst + '.TargetList');
$ref.prop('targets', $nst + '.DemographicTarget', 'targets', true, false);

$nso.AdScheduleTargetList = function() {
  $nso.TargetList.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AdScheduleTargetList', false, $nst + '.TargetList');
$ref.prop('targets', $nst + '.AdScheduleTarget', 'targets', true, false);

$nso.CampaignTargetOperation = function() {
  $nso.Operation.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.CampaignTargetOperation', false, $nst + '.Operation');
$ref.prop('operand', $nst + '.TargetList', 'operand', false, false);

$nso.CampaignTargetPage = function() {
  $nso.Page.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.CampaignTargetPage', false, $nst + '.Page');
$ref.prop('entries', $nst + '.TargetList', 'entries', true, false);

$nso.CampaignTargetSelector = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.CampaignTargetSelector', false, $sot);
$ref.prop('campaignIds', 'integer', 'campaignIds', true, true);
$ref.prop('dummy', 'string', 'dummy', false, true);

$nso.TargetError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.TargetError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.TargetErrorReason', 'reason', false, false);

$nso.TargetErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.TargetErrorReason', true, $sot);

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

$nso.RegionCodeError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.RegionCodeError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.RegionCodeErrorReason', 'reason', false, false);

$nso.RegionCodeErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.RegionCodeErrorReason', true, $sot);

$nso.RegionCodeErrorReason.INVALID_REGION_CODE = 'INVALID_REGION_CODE';

$nso.ExperimentService = function() {
  $sso.call(this);
  this.nametable_ = new google.ads.adwords.v201008.SoapNametable();
};

$ref = $dsf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.ExperimentService');
$ref.prop('requestHeader', $nst + '.RequestHeader', 'RequestHeader', false, false);
$ref.prop('responseHeader', $nst + '.ResponseHeader', 'ResponseHeader', false, false);
$ref.meth(
  'get',
  'https://adwords.google.com/api/adwords/cm/v201008',
  'https://adwords.google.com/api/adwords/cm/v201008',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.ExperimentPage', isArray: false, isSystem: false},
  [{propertyName: 'responseHeader', direction: 'out'}, {propertyName: 'requestHeader', direction: 'in'}],
  [{className: $nst + '.ExperimentSelector', isArray: false, isSystem: false, name: 'selector', xmlElementName: 'selector'}]
);
$ref.meth(
  'mutate',
  'https://adwords.google.com/api/adwords/cm/v201008',
  'https://adwords.google.com/api/adwords/cm/v201008',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.ExperimentReturnValue', isArray: false, isSystem: false},
  [{propertyName: 'responseHeader', direction: 'out'}, {propertyName: 'requestHeader', direction: 'in'}],
  [{className: $nst + '.ExperimentOperation', isArray: true, isSystem: false, name: 'operations', xmlElementName: 'operations'}]
);

$nso.ExperimentService.prototype.get = function(selector, onsuccess, onfailure) {
  this.invoke.call(this, 'get', [selector], onsuccess, onfailure);
};

$nso.ExperimentService.prototype.mutate = function(operations, onsuccess, onfailure) {
  this.invoke.call(this, 'mutate', [operations], onsuccess, onfailure);
};

$nso.ExperimentReturnValue = function() {
  $nso.ListReturnValue.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.ExperimentReturnValue', false, $nst + '.ListReturnValue');
$ref.prop('value', $nst + '.Experiment', 'value', true, false);

$nso.Experiment = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.Experiment', false, $sot);
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

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.ExperimentStatus', true, $sot);

$nso.ExperimentStatus.ACTIVE = 'ACTIVE';
$nso.ExperimentStatus.DELETED = 'DELETED';
$nso.ExperimentStatus.PROMOTED = 'PROMOTED';

$nso.ExperimentServingStatus = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.ExperimentServingStatus', true, $sot);

$nso.ExperimentServingStatus.RUNNING = 'RUNNING';
$nso.ExperimentServingStatus.PENDING = 'PENDING';
$nso.ExperimentServingStatus.ENDED = 'ENDED';
$nso.ExperimentServingStatus.DELETED = 'DELETED';
$nso.ExperimentServingStatus.PROMOTED = 'PROMOTED';

$nso.ExperimentSummaryStats = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.ExperimentSummaryStats', false, $sot);
$ref.prop('adGroupsCount', 'integer', 'adGroupsCount', false, true);
$ref.prop('adGroupCriteriaCount', 'integer', 'adGroupCriteriaCount', false, true);

$nso.ExperimentOperation = function() {
  $nso.Operation.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.ExperimentOperation', false, $nst + '.Operation');
$ref.prop('operand', $nst + '.Experiment', 'operand', false, false);

$nso.ExperimentPage = function() {
  $nso.Page.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.ExperimentPage', false, $nst + '.Page');
$ref.prop('entries', $nst + '.Experiment', 'entries', true, false);

$nso.ExperimentSelector = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.ExperimentSelector', false, $sot);
$ref.prop('experimentIds', 'integer', 'experimentIds', true, true);
$ref.prop('campaignIds', 'integer', 'campaignIds', true, true);
$ref.prop('includeStats', 'boolean', 'includeStats', false, true);

$nso.ExperimentServiceError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.ExperimentServiceError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.ExperimentServiceErrorReason', 'reason', false, false);

$nso.ExperimentServiceErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.ExperimentServiceErrorReason', true, $sot);

$nso.ExperimentServiceErrorReason.AFTER_MAXIMUM_ALLOWABLE_DATE = 'AFTER_MAXIMUM_ALLOWABLE_DATE';
$nso.ExperimentServiceErrorReason.AOL_PARTNER_CAMPAIGNS_CANT_RUN_EXPERIMENTS = 'AOL_PARTNER_CAMPAIGNS_CANT_RUN_EXPERIMENTS';
$nso.ExperimentServiceErrorReason.CANNOT_CREATE_EXPERIMENT_FOR_BIDDING_STRATEGY = 'CANNOT_CREATE_EXPERIMENT_FOR_BIDDING_STRATEGY';
$nso.ExperimentServiceErrorReason.CANNOT_SET_DATE_TO_PAST = 'CANNOT_SET_DATE_TO_PAST';
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
  this.nametable_ = new google.ads.adwords.v201008.SoapNametable();
};

$ref = $dsf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.GeoLocationService');
$ref.prop('requestHeader', $nst + '.RequestHeader', 'RequestHeader', false, false);
$ref.prop('responseHeader', $nst + '.ResponseHeader', 'ResponseHeader', false, false);
$ref.meth(
  'get',
  'https://adwords.google.com/api/adwords/cm/v201008',
  'https://adwords.google.com/api/adwords/cm/v201008',
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

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.GeoLocation', false, $sot);
$ref.prop('geoPoint', $nst + '.GeoPoint', 'geoPoint', false, false);
$ref.prop('address', $nst + '.Address', 'address', false, false);
$ref.prop('encodedLocation', 'byte', 'encodedLocation', true, true);
$ref.prop('geoLocationType', 'string', 'GeoLocation.Type', false, true);

$nso.InvalidGeoLocation = function() {
  $nso.GeoLocation.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.InvalidGeoLocation', false, $nst + '.GeoLocation');

$nso.GeoLocationSelector = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.GeoLocationSelector', false, $sot);
$ref.prop('addresses', $nst + '.Address', 'addresses', true, false);
$ref.prop('dummy', 'string', 'dummy', false, true);

$nso.GeoLocationError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.GeoLocationError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.GeoLocationErrorReason', 'reason', false, false);

$nso.GeoLocationErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.GeoLocationErrorReason', true, $sot);

$nso.GeoLocationErrorReason.UNKNOWN = 'UNKNOWN';

$nso.InfoService = function() {
  $sso.call(this);
  this.nametable_ = new google.ads.adwords.v201008.SoapNametable();
};

$ref = $dsf('https://adwords.google.com/api/adwords/info/v201008', $nst + '.InfoService');
$ref.prop('requestHeader', $nst + '.RequestHeader', 'RequestHeader', false, false);
$ref.prop('responseHeader', $nst + '.ResponseHeader', 'ResponseHeader', false, false);
$ref.meth(
  'get',
  'https://adwords.google.com/api/adwords/info/v201008',
  'https://adwords.google.com/api/adwords/info/v201008',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.ApiUsageInfo', isArray: false, isSystem: false},
  [{propertyName: 'responseHeader', direction: 'out'}, {propertyName: 'requestHeader', direction: 'in'}],
  [{className: $nst + '.InfoSelector', isArray: false, isSystem: false, name: 'selector', xmlElementName: 'selector'}]
);

$nso.InfoService.prototype.get = function(selector, onsuccess, onfailure) {
  this.invoke.call(this, 'get', [selector], onsuccess, onfailure);
};

$nso.ApiUsageRecord = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/info/v201008', $nst + '.ApiUsageRecord', false, $sot);
$ref.prop('clientEmail', 'string', 'clientEmail', false, true);
$ref.prop('cost', 'integer', 'cost', false, true);

$nso.ApiUsageInfo = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/info/v201008', $nst + '.ApiUsageInfo', false, $sot);
$ref.prop('apiUsageRecords', $nst + '.ApiUsageRecord', 'apiUsageRecords', true, false);
$ref.prop('cost', 'integer', 'cost', false, true);

$nso.InfoSelector = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/info/v201008', $nst + '.InfoSelector', false, $sot);
$ref.prop('serviceName', 'string', 'serviceName', false, true);
$ref.prop('methodName', 'string', 'methodName', false, true);
$ref.prop('operator', $nst + '.Operator', 'operator', false, false);
$ref.prop('dateRange', $nst + '.DateRange', 'dateRange', false, false);
$ref.prop('clientEmails', 'string', 'clientEmails', true, true);
$ref.prop('apiUsageType', $nst + '.ApiUsageType', 'apiUsageType', false, false);

$nso.ApiUsageType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/info/v201008', $nst + '.ApiUsageType', true, $sot);

$nso.ApiUsageType.FREE_USAGE_API_UNITS_PER_MONTH = 'FREE_USAGE_API_UNITS_PER_MONTH';
$nso.ApiUsageType.TOTAL_USAGE_API_UNITS_PER_MONTH = 'TOTAL_USAGE_API_UNITS_PER_MONTH';
$nso.ApiUsageType.OPERATION_COUNT = 'OPERATION_COUNT';
$nso.ApiUsageType.UNIT_COUNT = 'UNIT_COUNT';
$nso.ApiUsageType.UNIT_COUNT_FOR_CLIENTS = 'UNIT_COUNT_FOR_CLIENTS';
$nso.ApiUsageType.METHOD_COST = 'METHOD_COST';

$nso.ApiUsageError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/info/v201008', $nst + '.ApiUsageError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.ApiUsageErrorReason', 'reason', false, false);

$nso.ApiUsageErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/info/v201008', $nst + '.ApiUsageErrorReason', true, $sot);

$nso.ApiUsageErrorReason.INVALID_DATE_RANGE = 'INVALID_DATE_RANGE';
$nso.ApiUsageErrorReason.SERVICE_NAME_NOT_SPECIFIED = 'SERVICE_NAME_NOT_SPECIFIED';
$nso.ApiUsageErrorReason.METHOD_NAME_NOT_SPECIFIED = 'METHOD_NAME_NOT_SPECIFIED';
$nso.ApiUsageErrorReason.OPERATOR_NOT_SPECIFIED = 'OPERATOR_NOT_SPECIFIED';
$nso.ApiUsageErrorReason.INVALID_CLIENT_EMAIL = 'INVALID_CLIENT_EMAIL';
$nso.ApiUsageErrorReason.INVALID_TOKEN_HEADER = 'INVALID_TOKEN_HEADER';

$nso.MediaService = function() {
  $sso.call(this);
  this.nametable_ = new google.ads.adwords.v201008.SoapNametable();
};

$ref = $dsf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.MediaService');
$ref.prop('requestHeader', $nst + '.RequestHeader', 'RequestHeader', false, false);
$ref.prop('responseHeader', $nst + '.ResponseHeader', 'ResponseHeader', false, false);
$ref.meth(
  'get',
  'https://adwords.google.com/api/adwords/cm/v201008',
  'https://adwords.google.com/api/adwords/cm/v201008',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.MediaPage', isArray: false, isSystem: false},
  [{propertyName: 'responseHeader', direction: 'out'}, {propertyName: 'requestHeader', direction: 'in'}],
  [{className: $nst + '.MediaSelector', isArray: false, isSystem: false, name: 'selector', xmlElementName: 'selector'}]
);
$ref.meth(
  'upload',
  'https://adwords.google.com/api/adwords/cm/v201008',
  'https://adwords.google.com/api/adwords/cm/v201008',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.Media', isArray: true, isSystem: false},
  [{propertyName: 'responseHeader', direction: 'out'}, {propertyName: 'requestHeader', direction: 'in'}],
  [{className: $nst + '.Media', isArray: true, isSystem: false, name: 'media', xmlElementName: 'media'}]
);

$nso.MediaService.prototype.get = function(selector, onsuccess, onfailure) {
  this.invoke.call(this, 'get', [selector], onsuccess, onfailure);
};

$nso.MediaService.prototype.upload = function(media, onsuccess, onfailure) {
  this.invoke.call(this, 'upload', [media], onsuccess, onfailure);
};

$nso.Media_Size_StringMapEntry = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.Media_Size_StringMapEntry', false, $sot);
$ref.prop('key', $nst + '.MediaSize', 'key', false, false);
$ref.prop('value', 'string', 'value', false, true);

$nso.MediaSize = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.MediaSize', true, $sot);

$nso.MediaSize.FULL = 'FULL';
$nso.MediaSize.SHRUNKEN = 'SHRUNKEN';
$nso.MediaSize.PREVIEW = 'PREVIEW';
$nso.MediaSize.VIDEO_THUMBNAIL = 'VIDEO_THUMBNAIL';

$nso.Media_Size_DimensionsMapEntry = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.Media_Size_DimensionsMapEntry', false, $sot);
$ref.prop('key', $nst + '.MediaSize', 'key', false, false);
$ref.prop('value', $nst + '.Dimensions', 'value', false, false);

$nso.Dimensions = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.Dimensions', false, $sot);
$ref.prop('width', 'integer', 'width', false, true);
$ref.prop('height', 'integer', 'height', false, true);

$nso.Media = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.Media', false, $sot);
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

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.MediaMediaType', true, $sot);

$nso.MediaMediaType.AUDIO = 'AUDIO';
$nso.MediaMediaType.DYNAMIC_IMAGE = 'DYNAMIC_IMAGE';
$nso.MediaMediaType.ICON = 'ICON';
$nso.MediaMediaType.IMAGE = 'IMAGE';
$nso.MediaMediaType.STANDARD_ICON = 'STANDARD_ICON';
$nso.MediaMediaType.VIDEO = 'VIDEO';

$nso.MediaMimeType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.MediaMimeType', true, $sot);

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

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.Video', false, $nst + '.Media');
$ref.prop('durationMillis', 'integer', 'durationMillis', false, true);
$ref.prop('streamingUrl', 'string', 'streamingUrl', false, true);
$ref.prop('readyToPlayOnTheWeb', 'boolean', 'readyToPlayOnTheWeb', false, true);
$ref.prop('industryStandardCommercialIdentifier', 'string', 'industryStandardCommercialIdentifier', false, true);
$ref.prop('advertisingId', 'string', 'advertisingId', false, true);
$ref.prop('youTubeVideoIdString', 'string', 'youTubeVideoIdString', false, true);

$nso.Image = function() {
  $nso.Media.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.Image', false, $nst + '.Media');
$ref.prop('data', 'byte', 'data', true, true);

$nso.Audio = function() {
  $nso.Media.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.Audio', false, $nst + '.Media');
$ref.prop('durationMillis', 'integer', 'durationMillis', false, true);
$ref.prop('streamingUrl', 'string', 'streamingUrl', false, true);
$ref.prop('readyToPlayOnTheWeb', 'boolean', 'readyToPlayOnTheWeb', false, true);

$nso.MediaPage = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.MediaPage', false, $sot);
$ref.prop('entries', $nst + '.Media', 'entries', true, false);
$ref.prop('totalNumEntries', 'integer', 'totalNumEntries', false, true);

$nso.MediaSelector = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.MediaSelector', false, $sot);
$ref.prop('mediaType', $nst + '.MediaMediaType', 'mediaType', false, false);
$ref.prop('mediaIds', 'integer', 'mediaIds', true, true);
$ref.prop('mediaReferenceIds', 'integer', 'mediaReferenceIds', true, true);
$ref.prop('youTubeVideoIds', 'string', 'youTubeVideoIds', true, true);
$ref.prop('mediaDimensions', $nst + '.Dimensions', 'mediaDimensions', true, false);
$ref.prop('extendedCapabilityStates', $nst + '.MediaMediaExtendedCapabilityState', 'extendedCapabilityStates', true, false);
$ref.prop('mimeTypes', $nst + '.MediaMimeType', 'mimeTypes', true, false);

$nso.MediaMediaExtendedCapabilityState = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.MediaMediaExtendedCapabilityState', true, $sot);

$nso.MediaMediaExtendedCapabilityState.UNKNOWN = 'UNKNOWN';
$nso.MediaMediaExtendedCapabilityState.SUPPORTED = 'SUPPORTED';
$nso.MediaMediaExtendedCapabilityState.NOT_SUPPORTED = 'NOT_SUPPORTED';
$nso.MediaMediaExtendedCapabilityState.PASSED_PREREQ = 'PASSED_PREREQ';
$nso.MediaMediaExtendedCapabilityState.FAILED_PREREQ = 'FAILED_PREREQ';
$nso.MediaMediaExtendedCapabilityState.MEETS_CRITERIA = 'MEETS_CRITERIA';

$nso.VideoError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.VideoError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.VideoErrorReason', 'reason', false, false);

$nso.VideoErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.VideoErrorReason', true, $sot);

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

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.MediaError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.MediaErrorReason', 'reason', false, false);

$nso.MediaErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.MediaErrorReason', true, $sot);

$nso.MediaErrorReason.CANNOT_ADD_STANDARD_ICON = 'CANNOT_ADD_STANDARD_ICON';
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

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.ImageError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.ImageErrorReason', 'reason', false, false);

$nso.ImageErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.ImageErrorReason', true, $sot);

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

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AudioError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.AudioErrorReason', 'reason', false, false);

$nso.AudioErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AudioErrorReason', true, $sot);

$nso.AudioErrorReason.INVALID_AUDIO = 'INVALID_AUDIO';
$nso.AudioErrorReason.PROBLEM_READING_AUDIO_FILE = 'PROBLEM_READING_AUDIO_FILE';
$nso.AudioErrorReason.ERROR_STORING_AUDIO = 'ERROR_STORING_AUDIO';
$nso.AudioErrorReason.FILE_TOO_LARGE = 'FILE_TOO_LARGE';
$nso.AudioErrorReason.UNSUPPORTED_AUDIO = 'UNSUPPORTED_AUDIO';
$nso.AudioErrorReason.ERROR_GENERATING_STREAMING_URL = 'ERROR_GENERATING_STREAMING_URL';

$nso.ReportDefinitionService = function() {
  $sso.call(this);
  this.nametable_ = new google.ads.adwords.v201008.SoapNametable();
};

$ref = $dsf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.ReportDefinitionService');
$ref.prop('requestHeader', $nst + '.RequestHeader', 'RequestHeader', false, false);
$ref.prop('responseHeader', $nst + '.ResponseHeader', 'ResponseHeader', false, false);
$ref.meth(
  'get',
  'https://adwords.google.com/api/adwords/cm/v201008',
  'https://adwords.google.com/api/adwords/cm/v201008',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.ReportDefinitionPage', isArray: false, isSystem: false},
  [{propertyName: 'responseHeader', direction: 'out'}, {propertyName: 'requestHeader', direction: 'in'}],
  [{className: $nst + '.ReportDefinitionSelector', isArray: false, isSystem: false, name: 'selector', xmlElementName: 'selector'}]
);
$ref.meth(
  'getReportFields',
  'https://adwords.google.com/api/adwords/cm/v201008',
  'https://adwords.google.com/api/adwords/cm/v201008',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.ReportDefinitionField', isArray: true, isSystem: false},
  [{propertyName: 'responseHeader', direction: 'out'}, {propertyName: 'requestHeader', direction: 'in'}],
  [{className: $nst + '.ReportDefinitionReportType', isArray: false, isSystem: false, name: 'reportType', xmlElementName: 'reportType'}]
);
$ref.meth(
  'mutate',
  'https://adwords.google.com/api/adwords/cm/v201008',
  'https://adwords.google.com/api/adwords/cm/v201008',
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

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.ReportDefinitionOperation', false, $nst + '.Operation');
$ref.prop('operand', $nst + '.ReportDefinition', 'operand', false, false);

$nso.ReportDefinition = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.ReportDefinition', false, $sot);
$ref.prop('id', 'integer', 'id', false, true);
$ref.prop('selector', $nst + '.Selector', 'selector', false, false);
$ref.prop('reportName', 'string', 'reportName', false, true);
$ref.prop('reportType', $nst + '.ReportDefinitionReportType', 'reportType', false, false);
$ref.prop('hasAttachment', 'boolean', 'hasAttachment', false, true);
$ref.prop('dateRangeType', $nst + '.ReportDefinitionDateRangeType', 'dateRangeType', false, false);
$ref.prop('downloadFormat', $nst + '.DownloadFormat', 'downloadFormat', false, false);
$ref.prop('creationTime', 'string', 'creationTime', false, true);

$nso.Selector = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.Selector', false, $sot);
$ref.prop('fields', 'string', 'fields', true, true);
$ref.prop('predicates', $nst + '.Predicate', 'predicates', true, false);
$ref.prop('dateRange', $nst + '.DateRange', 'dateRange', false, false);

$nso.Predicate = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.Predicate', false, $sot);
$ref.prop('field', 'string', 'field', false, true);
$ref.prop('operator', $nst + '.PredicateOperator', 'operator', false, false);
$ref.prop('values', 'string', 'values', true, true);

$nso.PredicateOperator = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.PredicateOperator', true, $sot);

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

$nso.ReportDefinitionReportType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.ReportDefinitionReportType', true, $sot);

$nso.ReportDefinitionReportType.KEYWORDS_PERFORMANCE_REPORT = 'KEYWORDS_PERFORMANCE_REPORT';
$nso.ReportDefinitionReportType.AD_PERFORMANCE_REPORT = 'AD_PERFORMANCE_REPORT';
$nso.ReportDefinitionReportType.URL_PERFORMANCE_REPORT = 'URL_PERFORMANCE_REPORT';
$nso.ReportDefinitionReportType.ADGROUP_PERFORMANCE_REPORT = 'ADGROUP_PERFORMANCE_REPORT';
$nso.ReportDefinitionReportType.CAMPAIGN_PERFORMANCE_REPORT = 'CAMPAIGN_PERFORMANCE_REPORT';
$nso.ReportDefinitionReportType.ACCOUNT_PERFORMANCE_REPORT = 'ACCOUNT_PERFORMANCE_REPORT';
$nso.ReportDefinitionReportType.SEARCH_QUERY_PERFORMANCE_REPORT = 'SEARCH_QUERY_PERFORMANCE_REPORT';
$nso.ReportDefinitionReportType.MANAGED_PLACEMENTS_PERFORMANCE_REPORT = 'MANAGED_PLACEMENTS_PERFORMANCE_REPORT';
$nso.ReportDefinitionReportType.AUTOMATIC_PLACEMENTS_PERFORMANCE_REPORT = 'AUTOMATIC_PLACEMENTS_PERFORMANCE_REPORT';
$nso.ReportDefinitionReportType.CAMPAIGN_NEGATIVE_KEYWORDS_PERFORMANCE_REPORT = 'CAMPAIGN_NEGATIVE_KEYWORDS_PERFORMANCE_REPORT';
$nso.ReportDefinitionReportType.CAMPAIGN_NEGATIVE_PLACEMENTS_PERFORMANCE_REPORT = 'CAMPAIGN_NEGATIVE_PLACEMENTS_PERFORMANCE_REPORT';

$nso.ReportDefinitionDateRangeType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.ReportDefinitionDateRangeType', true, $sot);

$nso.ReportDefinitionDateRangeType.TODAY = 'TODAY';
$nso.ReportDefinitionDateRangeType.YESTERDAY = 'YESTERDAY';
$nso.ReportDefinitionDateRangeType.LAST_7_DAYS = 'LAST_7_DAYS';
$nso.ReportDefinitionDateRangeType.LAST_WEEK = 'LAST_WEEK';
$nso.ReportDefinitionDateRangeType.LAST_14_DAYS = 'LAST_14_DAYS';
$nso.ReportDefinitionDateRangeType.LAST_30_DAYS = 'LAST_30_DAYS';
$nso.ReportDefinitionDateRangeType.LAST_BUSINESS_WEEK = 'LAST_BUSINESS_WEEK';
$nso.ReportDefinitionDateRangeType.THIS_MONTH = 'THIS_MONTH';
$nso.ReportDefinitionDateRangeType.LAST_MONTH = 'LAST_MONTH';
$nso.ReportDefinitionDateRangeType.ALL_TIME = 'ALL_TIME';
$nso.ReportDefinitionDateRangeType.CUSTOM_DATE = 'CUSTOM_DATE';

$nso.DownloadFormat = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.DownloadFormat', true, $sot);

$nso.DownloadFormat.CSVFOREXCEL = 'CSVFOREXCEL';
$nso.DownloadFormat.CSV = 'CSV';
$nso.DownloadFormat.TSV = 'TSV';
$nso.DownloadFormat.XML = 'XML';
$nso.DownloadFormat.GZIPPED_CSV = 'GZIPPED_CSV';
$nso.DownloadFormat.GZIPPED_XML = 'GZIPPED_XML';

$nso.ReportDefinitionField = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.ReportDefinitionField', false, $sot);
$ref.prop('fieldName', 'string', 'fieldName', false, true);
$ref.prop('displayFieldName', 'string', 'displayFieldName', false, true);
$ref.prop('xmlAttributeName', 'string', 'xmlAttributeName', false, true);
$ref.prop('fieldType', 'string', 'fieldType', false, true);
$ref.prop('enumValues', 'string', 'enumValues', true, true);
$ref.prop('canSelect', 'boolean', 'canSelect', false, true);
$ref.prop('canFilter', 'boolean', 'canFilter', false, true);

$nso.ReportDefinitionPage = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.ReportDefinitionPage', false, $sot);
$ref.prop('entries', $nst + '.ReportDefinition', 'entries', true, false);
$ref.prop('totalNumEntries', 'integer', 'totalNumEntries', false, true);

$nso.ReportDefinitionSelector = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.ReportDefinitionSelector', false, $sot);
$ref.prop('paging', $nst + '.Paging', 'paging', false, false);

$nso.ReportDefinitionError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.ReportDefinitionError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.ReportDefinitionErrorReason', 'reason', false, false);

$nso.ReportDefinitionErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.ReportDefinitionErrorReason', true, $sot);

$nso.ReportDefinitionErrorReason.INVALID_FIELD_NAME_FOR_REPORT = 'INVALID_FIELD_NAME_FOR_REPORT';
$nso.ReportDefinitionErrorReason.UNABLE_TO_FIND_MAPPING_FOR_THIS_REPORT = 'UNABLE_TO_FIND_MAPPING_FOR_THIS_REPORT';
$nso.ReportDefinitionErrorReason.INVALID_COLUMN_NAME_FOR_REPORT = 'INVALID_COLUMN_NAME_FOR_REPORT';
$nso.ReportDefinitionErrorReason.INVALID_REPORT_DEFINITION_ID = 'INVALID_REPORT_DEFINITION_ID';
$nso.ReportDefinitionErrorReason.REPORT_SELECTOR_CANNOT_BE_NULL = 'REPORT_SELECTOR_CANNOT_BE_NULL';
$nso.ReportDefinitionErrorReason.NO_ENUMS_FOR_THIS_COLUMN_NAME = 'NO_ENUMS_FOR_THIS_COLUMN_NAME';
$nso.ReportDefinitionErrorReason.INVALID_VIEW = 'INVALID_VIEW';

$nso.CollectionSizeError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.CollectionSizeError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.CollectionSizeErrorReason', 'reason', false, false);

$nso.CollectionSizeErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.CollectionSizeErrorReason', true, $sot);

$nso.CollectionSizeErrorReason.TOO_FEW = 'TOO_FEW';
$nso.CollectionSizeErrorReason.TOO_MANY = 'TOO_MANY';

$nso.TargetingIdeaService = function() {
  $sso.call(this);
  this.nametable_ = new google.ads.adwords.v201008.SoapNametable();
};

$ref = $dsf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.TargetingIdeaService');
$ref.prop('requestHeader', $nst + '.RequestHeader', 'RequestHeader', false, false);
$ref.prop('responseHeader', $nst + '.ResponseHeader', 'ResponseHeader', false, false);
$ref.meth(
  'get',
  'https://adwords.google.com/api/adwords/o/v201008',
  'https://adwords.google.com/api/adwords/o/v201008',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.TargetingIdeaPage', isArray: false, isSystem: false},
  [{propertyName: 'responseHeader', direction: 'out'}, {propertyName: 'requestHeader', direction: 'in'}],
  [{className: $nst + '.TargetingIdeaSelector', isArray: false, isSystem: false, name: 'selector', xmlElementName: 'selector'}]
);
$ref.meth(
  'getBulkKeywordIdeas',
  'https://adwords.google.com/api/adwords/o/v201008',
  'https://adwords.google.com/api/adwords/o/v201008',
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

$nso.Range = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.Range', false, $sot);
$ref.prop('min', $nst + '.ComparableValue', 'min', false, false);
$ref.prop('max', $nst + '.ComparableValue', 'max', false, false);

$nso.WebpageDescriptor = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.WebpageDescriptor', false, $sot);
$ref.prop('url', 'string', 'url', false, true);
$ref.prop('title', 'string', 'title', false, true);

$nso.MonthlySearchVolume = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.MonthlySearchVolume', false, $sot);
$ref.prop('year', 'integer', 'year', false, true);
$ref.prop('month', 'integer', 'month', false, true);
$ref.prop('count', 'integer', 'count', false, true);

$nso.InStreamAdInfo = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.InStreamAdInfo', false, $sot);
$ref.prop('maxAdDuration', 'integer', 'maxAdDuration', false, true);
$ref.prop('minAdDuration', 'integer', 'minAdDuration', false, true);
$ref.prop('medianAdDuration', 'integer', 'medianAdDuration', false, true);
$ref.prop('preRollPercent', 'double', 'preRollPercent', false, true);
$ref.prop('midRollPercent', 'double', 'midRollPercent', false, true);
$ref.prop('postRollPercent', 'double', 'postRollPercent', false, true);

$nso.AdFormatSpec = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.AdFormatSpec', false, $sot);
$ref.prop('format', $nst + '.SiteConstantsAdFormat', 'format', false, false);

$nso.SiteConstantsAdFormat = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.SiteConstantsAdFormat', true, $sot);

$nso.SiteConstantsAdFormat.UNKNOWN = 'UNKNOWN';
$nso.SiteConstantsAdFormat.TEXT = 'TEXT';
$nso.SiteConstantsAdFormat.IMAGE = 'IMAGE';
$nso.SiteConstantsAdFormat.VIDEO = 'VIDEO';
$nso.SiteConstantsAdFormat.INSTREAM = 'INSTREAM';
$nso.SiteConstantsAdFormat.AUDIO = 'AUDIO';

$nso.Attribute = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.Attribute', false, $sot);
$ref.prop('attributeType', 'string', 'Attribute.Type', false, true);

$nso.PlacementAttribute = function() {
  $nso.Attribute.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.PlacementAttribute', false, $nst + '.Attribute');
$ref.prop('value', $nst + '.Placement', 'value', false, false);

$nso.Criterion = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.Criterion', false, $sot);
$ref.prop('id', 'integer', 'id', false, true);
$ref.prop('criterionType', 'string', 'Criterion.Type', false, true);

$nso.Product = function() {
  $nso.Criterion.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.Product', false, $nst + '.Criterion');
$ref.prop('conditions', $nst + '.ProductCondition', 'conditions', true, false);
$ref.prop('text', 'string', 'text', false, true);

$nso.ProductCondition = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.ProductCondition', false, $sot);
$ref.prop('argument', 'string', 'argument', false, true);
$ref.prop('operand', $nst + '.ProductConditionOperand', 'operand', false, false);

$nso.ProductConditionOperand = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.ProductConditionOperand', false, $sot);
$ref.prop('operand', 'string', 'operand', false, true);

$nso.Vertical = function() {
  $nso.Criterion.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.Vertical', false, $nst + '.Criterion');
$ref.prop('path', 'string', 'path', true, true);

$nso.CriterionUserList = function() {
  $nso.Criterion.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.CriterionUserList', false, $nst + '.Criterion');
$ref.prop('userListId', 'integer', 'userListId', false, true);
$ref.prop('userListName', 'string', 'userListName', false, true);
$ref.prop('userListMembershipStatus', $nst + '.CriterionUserListMembershipStatus', 'userListMembershipStatus', false, false);
$ref.prop('userListSize', 'integer', 'userListSize', false, true);

$nso.CriterionUserListMembershipStatus = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.CriterionUserListMembershipStatus', true, $sot);

$nso.CriterionUserListMembershipStatus.OPEN = 'OPEN';
$nso.CriterionUserListMembershipStatus.CLOSED = 'CLOSED';

$nso.CriterionUserInterest = function() {
  $nso.Criterion.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.CriterionUserInterest', false, $nst + '.Criterion');
$ref.prop('userInterestId', 'integer', 'userInterestId', false, true);
$ref.prop('userInterestName', 'string', 'userInterestName', false, true);

$nso.Keyword = function() {
  $nso.Criterion.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.Keyword', false, $nst + '.Criterion');
$ref.prop('text', 'string', 'text', false, true);
$ref.prop('matchType', $nst + '.KeywordMatchType', 'matchType', false, false);

$nso.KeywordMatchType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.KeywordMatchType', true, $sot);

$nso.KeywordMatchType.EXACT = 'EXACT';
$nso.KeywordMatchType.PHRASE = 'PHRASE';
$nso.KeywordMatchType.BROAD = 'BROAD';

$nso.KeywordAttribute = function() {
  $nso.Attribute.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.KeywordAttribute', false, $nst + '.Attribute');
$ref.prop('value', $nst + '.Keyword', 'value', false, false);

$nso.LongRangeAttribute = function() {
  $nso.Attribute.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.LongRangeAttribute', false, $nst + '.Attribute');
$ref.prop('value', $nst + '.Range', 'value', false, false);

$nso.MoneyAttribute = function() {
  $nso.Attribute.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.MoneyAttribute', false, $nst + '.Attribute');
$ref.prop('value', $nst + '.Money', 'value', false, false);

$nso.WebpageDescriptorAttribute = function() {
  $nso.Attribute.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.WebpageDescriptorAttribute', false, $nst + '.Attribute');
$ref.prop('value', $nst + '.WebpageDescriptor', 'value', false, false);

$nso.StringAttribute = function() {
  $nso.Attribute.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.StringAttribute', false, $nst + '.Attribute');
$ref.prop('value', 'string', 'value', false, true);

$nso.PlacementTypeAttribute = function() {
  $nso.Attribute.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.PlacementTypeAttribute', false, $nst + '.Attribute');
$ref.prop('value', $nst + '.SiteConstantsPlacementType', 'value', false, false);

$nso.SiteConstantsPlacementType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.SiteConstantsPlacementType', true, $sot);

$nso.SiteConstantsPlacementType.UNKNOWN = 'UNKNOWN';
$nso.SiteConstantsPlacementType.SITE = 'SITE';
$nso.SiteConstantsPlacementType.VIDEO = 'VIDEO';
$nso.SiteConstantsPlacementType.FEED = 'FEED';
$nso.SiteConstantsPlacementType.GAME = 'GAME';
$nso.SiteConstantsPlacementType.MOBILE = 'MOBILE';
$nso.SiteConstantsPlacementType.AUDIO = 'AUDIO';

$nso.MonthlySearchVolumeAttribute = function() {
  $nso.Attribute.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.MonthlySearchVolumeAttribute', false, $nst + '.Attribute');
$ref.prop('value', $nst + '.MonthlySearchVolume', 'value', true, false);

$nso.LongAttribute = function() {
  $nso.Attribute.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.LongAttribute', false, $nst + '.Attribute');
$ref.prop('value', 'integer', 'value', false, true);

$nso.IntegerSetAttribute = function() {
  $nso.Attribute.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.IntegerSetAttribute', false, $nst + '.Attribute');
$ref.prop('value', 'integer', 'value', true, true);

$nso.IntegerAttribute = function() {
  $nso.Attribute.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.IntegerAttribute', false, $nst + '.Attribute');
$ref.prop('value', 'integer', 'value', false, true);

$nso.InStreamAdInfoAttribute = function() {
  $nso.Attribute.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.InStreamAdInfoAttribute', false, $nst + '.Attribute');
$ref.prop('value', $nst + '.InStreamAdInfo', 'value', false, false);

$nso.IdeaTypeAttribute = function() {
  $nso.Attribute.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.IdeaTypeAttribute', false, $nst + '.Attribute');
$ref.prop('value', $nst + '.IdeaType', 'value', false, false);

$nso.IdeaType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.IdeaType', true, $sot);

$nso.IdeaType.KEYWORD = 'KEYWORD';
$nso.IdeaType.PLACEMENT = 'PLACEMENT';

$nso.DoubleAttribute = function() {
  $nso.Attribute.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.DoubleAttribute', false, $nst + '.Attribute');
$ref.prop('value', 'double', 'value', false, true);

$nso.BooleanAttribute = function() {
  $nso.Attribute.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.BooleanAttribute', false, $nst + '.Attribute');
$ref.prop('value', 'boolean', 'value', false, true);

$nso.AdFormatSpecListAttribute = function() {
  $nso.Attribute.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.AdFormatSpecListAttribute', false, $nst + '.Attribute');
$ref.prop('value', $nst + '.AdFormatSpec', 'value', true, false);

$nso.Type_AttributeMapEntry = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.Type_AttributeMapEntry', false, $sot);
$ref.prop('key', $nst + '.AttributeType', 'key', false, false);
$ref.prop('value', $nst + '.Attribute', 'value', false, false);

$nso.AttributeType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.AttributeType', true, $sot);

$nso.AttributeType.UNKNOWN = 'UNKNOWN';
$nso.AttributeType.AD_SHARE = 'AD_SHARE';
$nso.AttributeType.APPROX_CONTENT_IMPRESSIONS_PER_DAY = 'APPROX_CONTENT_IMPRESSIONS_PER_DAY';
$nso.AttributeType.AVERAGE_TARGETED_MONTHLY_SEARCHES = 'AVERAGE_TARGETED_MONTHLY_SEARCHES';
$nso.AttributeType.COMPETITION = 'COMPETITION';
$nso.AttributeType.EXTRACTED_FROM_WEBPAGE = 'EXTRACTED_FROM_WEBPAGE';
$nso.AttributeType.FORMATS = 'FORMATS';
$nso.AttributeType.GLOBAL_MONTHLY_SEARCHES = 'GLOBAL_MONTHLY_SEARCHES';
$nso.AttributeType.IDEA_TYPE = 'IDEA_TYPE';
$nso.AttributeType.IN_STREAM_AD_INFO = 'IN_STREAM_AD_INFO';
$nso.AttributeType.KEYWORD = 'KEYWORD';
$nso.AttributeType.KEYWORD_CATEGORY = 'KEYWORD_CATEGORY';
$nso.AttributeType.NGRAM_GROUP = 'NGRAM_GROUP';
$nso.AttributeType.PLACEMENT = 'PLACEMENT';
$nso.AttributeType.PLACEMENT_NAME = 'PLACEMENT_NAME';
$nso.AttributeType.SAMPLE_URL = 'SAMPLE_URL';
$nso.AttributeType.SEARCH_SHARE = 'SEARCH_SHARE';
$nso.AttributeType.PLACEMENT_CATEGORY = 'PLACEMENT_CATEGORY';
$nso.AttributeType.PLACEMENT_TYPE = 'PLACEMENT_TYPE';
$nso.AttributeType.TARGETED_MONTHLY_SEARCHES = 'TARGETED_MONTHLY_SEARCHES';

$nso.TargetingIdea = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.TargetingIdea', false, $sot);
$ref.prop('data', $nst + '.Type_AttributeMapEntry', 'data', true, false);
$ref.prop('dummy', 'string', 'dummy', false, true);

$nso.TargetingIdeaPage = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.TargetingIdeaPage', false, $sot);
$ref.prop('totalNumEntries', 'integer', 'totalNumEntries', false, true);
$ref.prop('entries', $nst + '.TargetingIdea', 'entries', true, false);

$nso.LongComparisonOperation = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.LongComparisonOperation', false, $sot);
$ref.prop('minimum', 'integer', 'minimum', false, true);
$ref.prop('maximum', 'integer', 'maximum', false, true);

$nso.DoubleComparisonOperation = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.DoubleComparisonOperation', false, $sot);
$ref.prop('minimum', 'double', 'minimum', false, true);
$ref.prop('maximum', 'double', 'maximum', false, true);

$nso.SearchParameter = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.SearchParameter', false, $sot);
$ref.prop('searchParameterType', 'string', 'SearchParameter.Type', false, true);

$nso.RelatedToKeywordSearchParameter = function() {
  $nso.SearchParameter.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.RelatedToKeywordSearchParameter', false, $nst + '.SearchParameter');
$ref.prop('keywords', $nst + '.Keyword', 'keywords', true, false);

$nso.ExcludedKeywordSearchParameter = function() {
  $nso.SearchParameter.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.ExcludedKeywordSearchParameter', false, $nst + '.SearchParameter');
$ref.prop('keywords', $nst + '.Keyword', 'keywords', true, false);

$nso.LanguageTargetSearchParameter = function() {
  $nso.SearchParameter.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.LanguageTargetSearchParameter', false, $nst + '.SearchParameter');
$ref.prop('languageTargets', $nst + '.LanguageTarget', 'languageTargets', true, false);

$nso.CountryTargetSearchParameter = function() {
  $nso.SearchParameter.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.CountryTargetSearchParameter', false, $nst + '.SearchParameter');
$ref.prop('countryTargets', $nst + '.CountryTarget', 'countryTargets', true, false);

$nso.GlobalMonthlySearchesSearchParameter = function() {
  $nso.SearchParameter.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.GlobalMonthlySearchesSearchParameter', false, $nst + '.SearchParameter');
$ref.prop('operation', $nst + '.LongComparisonOperation', 'operation', false, false);

$nso.AverageTargetedMonthlySearchesSearchParameter = function() {
  $nso.SearchParameter.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.AverageTargetedMonthlySearchesSearchParameter', false, $nst + '.SearchParameter');
$ref.prop('operation', $nst + '.LongComparisonOperation', 'operation', false, false);

$nso.AdShareSearchParameter = function() {
  $nso.SearchParameter.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.AdShareSearchParameter', false, $nst + '.SearchParameter');
$ref.prop('operation', $nst + '.DoubleComparisonOperation', 'operation', false, false);

$nso.SeedAdGroupIdSearchParameter = function() {
  $nso.SearchParameter.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.SeedAdGroupIdSearchParameter', false, $nst + '.SearchParameter');
$ref.prop('adGroupId', 'integer', 'adGroupId', false, true);

$nso.SearchShareSearchParameter = function() {
  $nso.SearchParameter.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.SearchShareSearchParameter', false, $nst + '.SearchParameter');
$ref.prop('operation', $nst + '.DoubleComparisonOperation', 'operation', false, false);

$nso.RelatedToUrlSearchParameter = function() {
  $nso.SearchParameter.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.RelatedToUrlSearchParameter', false, $nst + '.SearchParameter');
$ref.prop('urls', 'string', 'urls', true, true);
$ref.prop('includeSubUrls', 'boolean', 'includeSubUrls', false, true);

$nso.PlacementTypeSearchParameter = function() {
  $nso.SearchParameter.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.PlacementTypeSearchParameter', false, $nst + '.SearchParameter');
$ref.prop('placementTypes', $nst + '.SiteConstantsPlacementType', 'placementTypes', true, false);

$nso.MobileSearchParameter = function() {
  $nso.SearchParameter.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.MobileSearchParameter', false, $nst + '.SearchParameter');

$nso.KeywordMatchTypeSearchParameter = function() {
  $nso.SearchParameter.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.KeywordMatchTypeSearchParameter', false, $nst + '.SearchParameter');
$ref.prop('keywordMatchTypes', $nst + '.KeywordMatchType', 'keywordMatchTypes', true, false);

$nso.KeywordCategoryIdSearchParameter = function() {
  $nso.SearchParameter.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.KeywordCategoryIdSearchParameter', false, $nst + '.SearchParameter');
$ref.prop('categoryId', 'integer', 'categoryId', false, true);

$nso.IncludeAdultContentSearchParameter = function() {
  $nso.SearchParameter.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.IncludeAdultContentSearchParameter', false, $nst + '.SearchParameter');

$nso.IdeaTextMatchesSearchParameter = function() {
  $nso.SearchParameter.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.IdeaTextMatchesSearchParameter', false, $nst + '.SearchParameter');
$ref.prop('included', 'string', 'included', true, true);
$ref.prop('excluded', 'string', 'excluded', true, true);
$ref.prop('priorityAction', $nst + '.MatchAction', 'priorityAction', false, false);

$nso.MatchAction = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.MatchAction', true, $sot);

$nso.MatchAction.INCLUDE = 'INCLUDE';
$nso.MatchAction.EXCLUDE = 'EXCLUDE';

$nso.CompetitionSearchParameter = function() {
  $nso.SearchParameter.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.CompetitionSearchParameter', false, $nst + '.SearchParameter');
$ref.prop('levels', $nst + '.CompetitionSearchParameterLevel', 'levels', true, false);

$nso.CompetitionSearchParameterLevel = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.CompetitionSearchParameterLevel', true, $sot);

$nso.CompetitionSearchParameterLevel.LOW = 'LOW';
$nso.CompetitionSearchParameterLevel.MEDIUM = 'MEDIUM';
$nso.CompetitionSearchParameterLevel.HIGH = 'HIGH';

$nso.AdTypeSearchParameter = function() {
  $nso.SearchParameter.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.AdTypeSearchParameter', false, $nst + '.SearchParameter');
$ref.prop('adTypes', $nst + '.SiteConstantsAdType', 'adTypes', true, false);

$nso.SiteConstantsAdType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.SiteConstantsAdType', true, $sot);

$nso.SiteConstantsAdType.UNKNOWN = 'UNKNOWN';
$nso.SiteConstantsAdType.TEXT = 'TEXT';
$nso.SiteConstantsAdType.DISPLAY = 'DISPLAY';
$nso.SiteConstantsAdType.AUDIO = 'AUDIO';
$nso.SiteConstantsAdType.INSTREAM = 'INSTREAM';

$nso.TargetingIdeaSelector = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.TargetingIdeaSelector', false, $sot);
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

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.RequestType', true, $sot);

$nso.RequestType.IDEAS = 'IDEAS';
$nso.RequestType.STATS = 'STATS';

$nso.PolicyViolationErrorPart = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.PolicyViolationErrorPart', false, $sot);
$ref.prop('index', 'integer', 'index', false, true);
$ref.prop('length', 'integer', 'length', false, true);

$nso.PolicyViolationKey = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.PolicyViolationKey', false, $sot);
$ref.prop('policyName', 'string', 'policyName', false, true);
$ref.prop('violatingText', 'string', 'violatingText', false, true);

$nso.PolicyViolationError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.PolicyViolationError', false, $nst + '.ApiError');
$ref.prop('key', $nst + '.PolicyViolationKey', 'key', false, false);
$ref.prop('externalPolicyName', 'string', 'externalPolicyName', false, true);
$ref.prop('externalPolicyUrl', 'string', 'externalPolicyUrl', false, true);
$ref.prop('externalPolicyDescription', 'string', 'externalPolicyDescription', false, true);
$ref.prop('isExemptable', 'boolean', 'isExemptable', false, true);
$ref.prop('violatingParts', $nst + '.PolicyViolationErrorPart', 'violatingParts', true, false);

$nso.CriterionPolicyError = function() {
  $nso.PolicyViolationError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.CriterionPolicyError', false, $nst + '.PolicyViolationError');

$nso.EntityCountLimitExceeded = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.EntityCountLimitExceeded', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.EntityCountLimitExceededReason', 'reason', false, false);
$ref.prop('enclosingId', 'string', 'enclosingId', false, true);
$ref.prop('limit', 'integer', 'limit', false, true);

$nso.EntityCountLimitExceededReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.EntityCountLimitExceededReason', true, $sot);

$nso.EntityCountLimitExceededReason.ACCOUNT_LIMIT = 'ACCOUNT_LIMIT';
$nso.EntityCountLimitExceededReason.CAMPAIGN_LIMIT = 'CAMPAIGN_LIMIT';
$nso.EntityCountLimitExceededReason.ADGROUP_LIMIT = 'ADGROUP_LIMIT';
$nso.EntityCountLimitExceededReason.ADGROUP_TEXT_AD_LIMIT = 'ADGROUP_TEXT_AD_LIMIT';
$nso.EntityCountLimitExceededReason.ADGROUP_DISPLAY_AD_LIMIT = 'ADGROUP_DISPLAY_AD_LIMIT';
$nso.EntityCountLimitExceededReason.UNKNOWN = 'UNKNOWN';

$nso.AdGroupCriterionLimitExceeded = function() {
  $nso.EntityCountLimitExceeded.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AdGroupCriterionLimitExceeded', false, $nst + '.EntityCountLimitExceeded');
$ref.prop('limitType', $nst + '.AdGroupCriterionLimitExceededCriteriaLimitType', 'limitType', false, false);

$nso.AdGroupCriterionLimitExceededCriteriaLimitType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AdGroupCriterionLimitExceededCriteriaLimitType', true, $sot);

$nso.AdGroupCriterionLimitExceededCriteriaLimitType.ADGROUP_KEYWORD = 'ADGROUP_KEYWORD';
$nso.AdGroupCriterionLimitExceededCriteriaLimitType.ADGROUP_WEBSITE = 'ADGROUP_WEBSITE';

$nso.AdGroupCriterionError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AdGroupCriterionError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.AdGroupCriterionErrorReason', 'reason', false, false);

$nso.AdGroupCriterionErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AdGroupCriterionErrorReason', true, $sot);

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

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.TargetingIdeaError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.TargetingIdeaErrorReason', 'reason', false, false);

$nso.TargetingIdeaErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.TargetingIdeaErrorReason', true, $sot);

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

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.MatchesRegexError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.MatchesRegexErrorReason', 'reason', false, false);

$nso.MatchesRegexErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.MatchesRegexErrorReason', true, $sot);

$nso.MatchesRegexErrorReason.UNKNOWN = 'UNKNOWN';
$nso.MatchesRegexErrorReason.DOES_NOT_MATCH = 'DOES_NOT_MATCH';

$nso.TrafficEstimatorService = function() {
  $sso.call(this);
  this.nametable_ = new google.ads.adwords.v201008.SoapNametable();
};

$ref = $dsf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.TrafficEstimatorService');
$ref.prop('requestHeader', $nst + '.RequestHeader', 'RequestHeader', false, false);
$ref.prop('responseHeader', $nst + '.ResponseHeader', 'ResponseHeader', false, false);
$ref.meth(
  'get',
  'https://adwords.google.com/api/adwords/o/v201008',
  'https://adwords.google.com/api/adwords/o/v201008',
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

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.StatsEstimate', false, $sot);
$ref.prop('averageCpc', $nst + '.Money', 'averageCpc', false, false);
$ref.prop('averagePosition', 'double', 'averagePosition', false, true);
$ref.prop('clicks', 'integer', 'clicks', false, true);
$ref.prop('totalCost', $nst + '.Money', 'totalCost', false, false);

$nso.Estimate = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.Estimate', false, $sot);
$ref.prop('estimateType', 'string', 'Estimate.Type', false, true);

$nso.CampaignEstimate = function() {
  $nso.Estimate.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.CampaignEstimate', false, $nst + '.Estimate');
$ref.prop('campaignId', 'integer', 'campaignId', false, true);
$ref.prop('adGroupEstimates', $nst + '.AdGroupEstimate', 'adGroupEstimates', true, false);

$nso.AdGroupEstimate = function() {
  $nso.Estimate.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.AdGroupEstimate', false, $nst + '.Estimate');
$ref.prop('adGroupId', 'integer', 'adGroupId', false, true);
$ref.prop('keywordEstimates', $nst + '.KeywordEstimate', 'keywordEstimates', true, false);

$nso.KeywordEstimate = function() {
  $nso.Estimate.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.KeywordEstimate', false, $nst + '.Estimate');
$ref.prop('criterionId', 'integer', 'criterionId', false, true);
$ref.prop('min', $nst + '.StatsEstimate', 'min', false, false);
$ref.prop('max', $nst + '.StatsEstimate', 'max', false, false);

$nso.TrafficEstimatorResult = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.TrafficEstimatorResult', false, $sot);
$ref.prop('campaignEstimates', $nst + '.CampaignEstimate', 'campaignEstimates', true, false);
$ref.prop('dummy', 'string', 'dummy', false, true);

$nso.EstimateRequest = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.EstimateRequest', false, $sot);
$ref.prop('estimateRequestType', 'string', 'EstimateRequest.Type', false, true);

$nso.CampaignEstimateRequest = function() {
  $nso.EstimateRequest.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.CampaignEstimateRequest', false, $nst + '.EstimateRequest');
$ref.prop('campaignId', 'integer', 'campaignId', false, true);
$ref.prop('adGroupEstimateRequests', $nst + '.AdGroupEstimateRequest', 'adGroupEstimateRequests', true, false);
$ref.prop('targets', $nst + '.Target', 'targets', true, false);

$nso.AdGroupEstimateRequest = function() {
  $nso.EstimateRequest.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.AdGroupEstimateRequest', false, $nst + '.EstimateRequest');
$ref.prop('adGroupId', 'integer', 'adGroupId', false, true);
$ref.prop('keywordEstimateRequests', $nst + '.KeywordEstimateRequest', 'keywordEstimateRequests', true, false);
$ref.prop('maxCpc', $nst + '.Money', 'maxCpc', false, false);

$nso.KeywordEstimateRequest = function() {
  $nso.EstimateRequest.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.KeywordEstimateRequest', false, $nst + '.EstimateRequest');
$ref.prop('keyword', $nst + '.Keyword', 'keyword', false, false);
$ref.prop('maxCpc', $nst + '.Money', 'maxCpc', false, false);

$nso.TrafficEstimatorSelector = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.TrafficEstimatorSelector', false, $sot);
$ref.prop('campaignEstimateRequests', $nst + '.CampaignEstimateRequest', 'campaignEstimateRequests', true, false);
$ref.prop('dummy', 'string', 'dummy', false, true);

$nso.IdError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.IdError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.IdErrorReason', 'reason', false, false);

$nso.IdErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.IdErrorReason', true, $sot);

$nso.IdErrorReason.NOT_FOUND = 'NOT_FOUND';

$nso.EntityAccessDenied = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.EntityAccessDenied', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.EntityAccessDeniedReason', 'reason', false, false);

$nso.EntityAccessDeniedReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.EntityAccessDeniedReason', true, $sot);

$nso.EntityAccessDeniedReason.READ_ACCESS_DENIED = 'READ_ACCESS_DENIED';
$nso.EntityAccessDeniedReason.WRITE_ACCESS_DENIED = 'WRITE_ACCESS_DENIED';

$nso.TrafficEstimatorError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.TrafficEstimatorError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.TrafficEstimatorErrorReason', 'reason', false, false);

$nso.TrafficEstimatorErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201008', $nst + '.TrafficEstimatorErrorReason', true, $sot);

$nso.TrafficEstimatorErrorReason.NO_CAMPAIGN_FOR_AD_GROUP_ESTIMATE_REQUEST = 'NO_CAMPAIGN_FOR_AD_GROUP_ESTIMATE_REQUEST';
$nso.TrafficEstimatorErrorReason.NO_AD_GROUP_FOR_KEYWORD_ESTIMATE_REQUEST = 'NO_AD_GROUP_FOR_KEYWORD_ESTIMATE_REQUEST';
$nso.TrafficEstimatorErrorReason.NO_MAX_CPC_FOR_KEYWORD_ESTIMATE_REQUEST = 'NO_MAX_CPC_FOR_KEYWORD_ESTIMATE_REQUEST';
$nso.TrafficEstimatorErrorReason.TOO_MANY_KEYWORD_ESTIMATE_REQUESTS = 'TOO_MANY_KEYWORD_ESTIMATE_REQUESTS';
$nso.TrafficEstimatorErrorReason.INVALID_INPUT = 'INVALID_INPUT';
$nso.TrafficEstimatorErrorReason.SERVICE_UNAVAILABLE = 'SERVICE_UNAVAILABLE';

$nso.AlertService = function() {
  $sso.call(this);
  this.nametable_ = new google.ads.adwords.v201008.SoapNametable();
};

$ref = $dsf('https://adwords.google.com/api/adwords/mcm/v201008', $nst + '.AlertService');
$ref.prop('requestHeader', $nst + '.RequestHeader', 'RequestHeader', false, false);
$ref.prop('responseHeader', $nst + '.ResponseHeader', 'ResponseHeader', false, false);
$ref.meth(
  'get',
  'https://adwords.google.com/api/adwords/mcm/v201008',
  'https://adwords.google.com/api/adwords/mcm/v201008',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.AlertPage', isArray: false, isSystem: false},
  [{propertyName: 'requestHeader', direction: 'in'}, {propertyName: 'responseHeader', direction: 'out'}],
  [{className: $nst + '.AlertSelector', isArray: false, isSystem: false, name: 'selector', xmlElementName: 'selector'}]
);

$nso.AlertService.prototype.get = function(selector, onsuccess, onfailure) {
  this.invoke.call(this, 'get', [selector], onsuccess, onfailure);
};

$nso.Detail = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/mcm/v201008', $nst + '.Detail', false, $sot);
$ref.prop('triggerTime', 'string', 'triggerTime', false, true);

$nso.Alert = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/mcm/v201008', $nst + '.Alert', false, $sot);
$ref.prop('alertSeverity', $nst + '.AlertSeverity', 'alertSeverity', false, false);
$ref.prop('alertType', $nst + '.AlertType', 'alertType', false, false);
$ref.prop('clientCustomerId', 'integer', 'clientCustomerId', false, true);
$ref.prop('details', $nst + '.Detail', 'details', true, false);

$nso.AlertSeverity = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/mcm/v201008', $nst + '.AlertSeverity', true, $sot);

$nso.AlertSeverity.GREEN = 'GREEN';
$nso.AlertSeverity.YELLOW = 'YELLOW';
$nso.AlertSeverity.RED = 'RED';
$nso.AlertSeverity.UNKNOWN = 'UNKNOWN';

$nso.AlertType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/mcm/v201008', $nst + '.AlertType', true, $sot);

$nso.AlertType.ACCOUNT_ON_TARGET = 'ACCOUNT_ON_TARGET';
$nso.AlertType.DECLINED_PAYMENT = 'DECLINED_PAYMENT';
$nso.AlertType.CREDIT_CARD_EXPIRING = 'CREDIT_CARD_EXPIRING';
$nso.AlertType.ACCOUNT_BUDGET_ENDING = 'ACCOUNT_BUDGET_ENDING';
$nso.AlertType.CAMPAIGN_ENDING = 'CAMPAIGN_ENDING';
$nso.AlertType.PAYMENT_NOT_ENTERED = 'PAYMENT_NOT_ENTERED';
$nso.AlertType.MISSING_BANK_REFERENCE_NUMBER = 'MISSING_BANK_REFERENCE_NUMBER';
$nso.AlertType.CAMPAIGN_ENDED = 'CAMPAIGN_ENDED';
$nso.AlertType.KEYWORD_BELOW_MIN_CPC = 'KEYWORD_BELOW_MIN_CPC';
$nso.AlertType.ACCOUNT_BUDGET_BURN_RATE = 'ACCOUNT_BUDGET_BURN_RATE';
$nso.AlertType.USER_INVITE_PENDING = 'USER_INVITE_PENDING';
$nso.AlertType.USER_INVITE_ACCEPTED = 'USER_INVITE_ACCEPTED';
$nso.AlertType.MANAGER_LINK_PENDING = 'MANAGER_LINK_PENDING';
$nso.AlertType.ZERO_DAILY_SPENDING_LIMIT = 'ZERO_DAILY_SPENDING_LIMIT';
$nso.AlertType.TV_ACCOUNT_ON_TARGET = 'TV_ACCOUNT_ON_TARGET';
$nso.AlertType.TV_ACCOUNT_BUDGET_ENDING = 'TV_ACCOUNT_BUDGET_ENDING';
$nso.AlertType.TV_ZERO_DAILY_SPENDING_LIMIT = 'TV_ZERO_DAILY_SPENDING_LIMIT';
$nso.AlertType.UNKNOWN = 'UNKNOWN';

$nso.NoStatsPage = function() {
  $nso.Page.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/mcm/v201008', $nst + '.NoStatsPage', false, $nst + '.Page');

$nso.AlertPage = function() {
  $nso.NoStatsPage.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/mcm/v201008', $nst + '.AlertPage', false, $nst + '.NoStatsPage');
$ref.prop('entries', $nst + '.Alert', 'entries', true, false);

$nso.AlertQuery = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/mcm/v201008', $nst + '.AlertQuery', false, $sot);
$ref.prop('clientSpec', $nst + '.ClientSpec', 'clientSpec', false, false);
$ref.prop('filterSpec', $nst + '.FilterSpec', 'filterSpec', false, false);
$ref.prop('types', $nst + '.AlertType', 'types', true, false);
$ref.prop('severities', $nst + '.AlertSeverity', 'severities', true, false);
$ref.prop('triggerTimeSpec', $nst + '.TriggerTimeSpec', 'triggerTimeSpec', false, false);
$ref.prop('clientCustomerIds', 'integer', 'clientCustomerIds', true, true);

$nso.ClientSpec = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/mcm/v201008', $nst + '.ClientSpec', true, $sot);

$nso.ClientSpec.ALL = 'ALL';
$nso.ClientSpec.DIRECT = 'DIRECT';
$nso.ClientSpec.ID_LIST = 'ID_LIST';
$nso.ClientSpec.UNKNOWN = 'UNKNOWN';

$nso.FilterSpec = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/mcm/v201008', $nst + '.FilterSpec', true, $sot);

$nso.FilterSpec.ALL = 'ALL';
$nso.FilterSpec.ONLY_SUBMANAGERS = 'ONLY_SUBMANAGERS';
$nso.FilterSpec.ONLY_LEAF_CLIENTS = 'ONLY_LEAF_CLIENTS';
$nso.FilterSpec.UNKNOWN = 'UNKNOWN';

$nso.TriggerTimeSpec = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/mcm/v201008', $nst + '.TriggerTimeSpec', true, $sot);

$nso.TriggerTimeSpec.ALL_TIME = 'ALL_TIME';
$nso.TriggerTimeSpec.LAST_24_HOURS = 'LAST_24_HOURS';
$nso.TriggerTimeSpec.LAST_7_DAYS = 'LAST_7_DAYS';

$nso.AlertSelector = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/mcm/v201008', $nst + '.AlertSelector', false, $sot);
$ref.prop('query', $nst + '.AlertQuery', 'query', false, false);
$ref.prop('paging', $nst + '.Paging', 'paging', false, false);

$nso.AlertError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/mcm/v201008', $nst + '.AlertError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.AlertErrorReason', 'reason', false, false);

$nso.AlertErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/mcm/v201008', $nst + '.AlertErrorReason', true, $sot);

$nso.AlertErrorReason.NO_CLIENT_IDS_SELECTED = 'NO_CLIENT_IDS_SELECTED';
$nso.AlertErrorReason.INVALID_CLIENT_ID_SELECTED = 'INVALID_CLIENT_ID_SELECTED';
$nso.AlertErrorReason.INVALID_CLIENT_ID_FORMAT = 'INVALID_CLIENT_ID_FORMAT';
$nso.AlertErrorReason.UNAVAILABLE = 'UNAVAILABLE';
$nso.AlertErrorReason.UNKNOWN = 'UNKNOWN';

$nso.AdExtensionOverrideService = function() {
  $sso.call(this);
  this.nametable_ = new google.ads.adwords.v201008.SoapNametable();
};

$ref = $dsf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AdExtensionOverrideService');
$ref.prop('requestHeader', $nst + '.RequestHeader', 'RequestHeader', false, false);
$ref.prop('responseHeader', $nst + '.ResponseHeader', 'ResponseHeader', false, false);
$ref.meth(
  'get',
  'https://adwords.google.com/api/adwords/cm/v201008',
  'https://adwords.google.com/api/adwords/cm/v201008',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.AdExtensionOverridePage', isArray: false, isSystem: false},
  [{propertyName: 'responseHeader', direction: 'out'}, {propertyName: 'requestHeader', direction: 'in'}],
  [{className: $nst + '.AdExtensionOverrideSelector', isArray: false, isSystem: false, name: 'selector', xmlElementName: 'selector'}]
);
$ref.meth(
  'mutate',
  'https://adwords.google.com/api/adwords/cm/v201008',
  'https://adwords.google.com/api/adwords/cm/v201008',
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

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AdExtensionOverrideReturnValue', false, $nst + '.ListReturnValue');
$ref.prop('value', $nst + '.AdExtensionOverride', 'value', true, false);

$nso.AdExtensionOverride = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AdExtensionOverride', false, $sot);
$ref.prop('adId', 'integer', 'adId', false, true);
$ref.prop('adExtension', $nst + '.AdExtension', 'adExtension', false, false);
$ref.prop('overrideInfo', $nst + '.OverrideInfo', 'overrideInfo', false, false);
$ref.prop('status', $nst + '.AdExtensionOverrideStatus', 'status', false, false);
$ref.prop('approvalStatus', $nst + '.AdExtensionOverrideApprovalStatus', 'approvalStatus', false, false);
$ref.prop('stats', $nst + '.AdExtensionOverrideStats', 'stats', false, false);

$nso.AdExtension = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AdExtension', false, $sot);
$ref.prop('id', 'integer', 'id', false, true);
$ref.prop('adExtensionType', 'string', 'AdExtension.Type', false, true);

$nso.LocationSyncExtension = function() {
  $nso.AdExtension.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.LocationSyncExtension', false, $nst + '.AdExtension');
$ref.prop('email', 'string', 'email', false, true);
$ref.prop('authToken', 'string', 'authToken', false, true);
$ref.prop('iconMediaId', 'integer', 'iconMediaId', false, true);
$ref.prop('shouldSyncUrl', 'boolean', 'shouldSyncUrl', false, true);

$nso.ProductExtension = function() {
  $nso.AdExtension.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.ProductExtension', false, $nst + '.AdExtension');
$ref.prop('googleBaseCustomerId', 'integer', 'googleBaseCustomerId', false, true);
$ref.prop('advertiserName', 'string', 'advertiserName', false, true);
$ref.prop('productSelection', $nst + '.ProductConditionAndGroup', 'productSelection', true, false);

$nso.ProductConditionAndGroup = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.ProductConditionAndGroup', false, $sot);
$ref.prop('conditions', $nst + '.ProductCondition', 'conditions', true, false);
$ref.prop('dummy', 'string', 'dummy', false, true);

$nso.SitelinksExtension = function() {
  $nso.AdExtension.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.SitelinksExtension', false, $nst + '.AdExtension');
$ref.prop('sitelinks', $nst + '.Sitelink', 'sitelinks', true, false);

$nso.Sitelink = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.Sitelink', false, $sot);
$ref.prop('displayText', 'string', 'displayText', false, true);
$ref.prop('destinationUrl', 'string', 'destinationUrl', false, true);

$nso.MobileExtension = function() {
  $nso.AdExtension.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.MobileExtension', false, $nst + '.AdExtension');
$ref.prop('phoneNumber', 'string', 'phoneNumber', false, true);
$ref.prop('countryCode', 'string', 'countryCode', false, true);

$nso.LocationExtension = function() {
  $nso.AdExtension.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.LocationExtension', false, $nst + '.AdExtension');
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

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.LocationExtensionSource', true, $sot);

$nso.LocationExtensionSource.ADWORDS_FRONTEND = 'ADWORDS_FRONTEND';
$nso.LocationExtensionSource.LBC_SYNC = 'LBC_SYNC';

$nso.OverrideInfo = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.OverrideInfo', false, $sot);
$ref.prop('item', $nst + '.LocationOverrideInfo', 'LocationOverrideInfo', false, false);

$nso.LocationOverrideInfo = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.LocationOverrideInfo', false, $sot);
$ref.prop('radius', 'integer', 'radius', false, true);
$ref.prop('radiusUnits', $nst + '.LocationOverrideInfoRadiusUnits', 'radiusUnits', false, false);

$nso.LocationOverrideInfoRadiusUnits = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.LocationOverrideInfoRadiusUnits', true, $sot);

$nso.LocationOverrideInfoRadiusUnits.KILOMETERS = 'KILOMETERS';
$nso.LocationOverrideInfoRadiusUnits.MILES = 'MILES';

$nso.AdExtensionOverrideStatus = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AdExtensionOverrideStatus', true, $sot);

$nso.AdExtensionOverrideStatus.ACTIVE = 'ACTIVE';
$nso.AdExtensionOverrideStatus.DELETED = 'DELETED';

$nso.AdExtensionOverrideApprovalStatus = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AdExtensionOverrideApprovalStatus', true, $sot);

$nso.AdExtensionOverrideApprovalStatus.APPROVED = 'APPROVED';
$nso.AdExtensionOverrideApprovalStatus.UNCHECKED = 'UNCHECKED';
$nso.AdExtensionOverrideApprovalStatus.DISAPPROVED = 'DISAPPROVED';

$nso.AdExtensionOverrideStats = function() {
  $nso.Stats.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AdExtensionOverrideStats', false, $nst + '.Stats');

$nso.AdExtensionOverrideOperation = function() {
  $nso.Operation.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AdExtensionOverrideOperation', false, $nst + '.Operation');
$ref.prop('operand', $nst + '.AdExtensionOverride', 'operand', false, false);

$nso.AdExtensionOverridePage = function() {
  $nso.Page.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AdExtensionOverridePage', false, $nst + '.Page');
$ref.prop('entries', $nst + '.AdExtensionOverride', 'entries', true, false);

$nso.AdExtensionOverrideSelector = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AdExtensionOverrideSelector', false, $sot);
$ref.prop('campaignIds', 'integer', 'campaignIds', true, true);
$ref.prop('adIds', 'integer', 'adIds', true, true);
$ref.prop('adExtensionIds', 'integer', 'adExtensionIds', true, true);
$ref.prop('statuses', $nst + '.AdExtensionOverrideStatus', 'statuses', true, false);
$ref.prop('paging', $nst + '.Paging', 'paging', false, false);

$nso.AdExtensionOverrideError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AdExtensionOverrideError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.AdExtensionOverrideErrorReason', 'reason', false, false);

$nso.AdExtensionOverrideErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AdExtensionOverrideErrorReason', true, $sot);

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

$nso.ServicedAccountService = function() {
  $sso.call(this);
  this.nametable_ = new google.ads.adwords.v201008.SoapNametable();
};

$ref = $dsf('https://adwords.google.com/api/adwords/mcm/v201008', $nst + '.ServicedAccountService');
$ref.prop('requestHeader', $nst + '.RequestHeader', 'RequestHeader', false, false);
$ref.prop('responseHeader', $nst + '.ResponseHeader', 'ResponseHeader', false, false);
$ref.meth(
  'get',
  'https://adwords.google.com/api/adwords/mcm/v201008',
  'https://adwords.google.com/api/adwords/mcm/v201008',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.ServicedAccountGraph', isArray: false, isSystem: false},
  [{propertyName: 'requestHeader', direction: 'in'}, {propertyName: 'responseHeader', direction: 'out'}],
  [{className: $nst + '.ServicedAccountSelector', isArray: false, isSystem: false, name: 'selector', xmlElementName: 'selector'}]
);

$nso.ServicedAccountService.prototype.get = function(selector, onsuccess, onfailure) {
  this.invoke.call(this, 'get', [selector], onsuccess, onfailure);
};

$nso.CustomerId = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/mcm/v201008', $nst + '.CustomerId', false, $sot);
$ref.prop('id', 'integer', 'id', false, true);

$nso.Link = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/mcm/v201008', $nst + '.Link', false, $sot);
$ref.prop('managerId', $nst + '.CustomerId', 'managerId', false, false);
$ref.prop('clientId', $nst + '.CustomerId', 'clientId', false, false);
$ref.prop('serviceType', $nst + '.ServiceType', 'serviceType', false, false);
$ref.prop('typeOfLink', $nst + '.LinkType', 'typeOfLink', false, false);
$ref.prop('descriptiveName', 'string', 'descriptiveName', false, true);
$ref.prop('linkType', 'string', 'Link.Type', false, true);

$nso.ServiceType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/mcm/v201008', $nst + '.ServiceType', true, $sot);

$nso.ServiceType.UI_AND_API = 'UI_AND_API';
$nso.ServiceType.API_ONLY = 'API_ONLY';
$nso.ServiceType.UNKNOWN = 'UNKNOWN';

$nso.LinkType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/mcm/v201008', $nst + '.LinkType', true, $sot);

$nso.LinkType.ESTABLISHED = 'ESTABLISHED';
$nso.LinkType.INVITATION = 'INVITATION';
$nso.LinkType.UNKNOWN = 'UNKNOWN';

$nso.Account = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/mcm/v201008', $nst + '.Account', false, $sot);
$ref.prop('customerId', 'integer', 'customerId', false, true);
$ref.prop('login', 'string', 'login', false, true);
$ref.prop('companyName', 'string', 'companyName', false, true);
$ref.prop('canManageClients', 'boolean', 'canManageClients', false, true);

$nso.ServicedAccountGraph = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/mcm/v201008', $nst + '.ServicedAccountGraph', false, $sot);
$ref.prop('accounts', $nst + '.Account', 'accounts', true, false);
$ref.prop('links', $nst + '.Link', 'links', true, false);

$nso.ServicedAccountSelector = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/mcm/v201008', $nst + '.ServicedAccountSelector', false, $sot);
$ref.prop('customerIds', 'integer', 'customerIds', true, true);
$ref.prop('enablePaging', 'boolean', 'enablePaging', false, true);
$ref.prop('serviceTypes', $nst + '.ServiceType', 'serviceTypes', true, false);
$ref.prop('submanagersOnly', 'boolean', 'submanagersOnly', false, true);

$nso.ServicedAccountError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/mcm/v201008', $nst + '.ServicedAccountError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.ServicedAccountErrorReason', 'reason', false, false);

$nso.ServicedAccountErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/mcm/v201008', $nst + '.ServicedAccountErrorReason', true, $sot);

$nso.ServicedAccountErrorReason.BAD_IDS = 'BAD_IDS';
$nso.ServicedAccountErrorReason.NOT_AUTHORIZED = 'NOT_AUTHORIZED';
$nso.ServicedAccountErrorReason.UNKNOWN = 'UNKNOWN';

$nso.CustomerSyncService = function() {
  $sso.call(this);
  this.nametable_ = new google.ads.adwords.v201008.SoapNametable();
};

$ref = $dsf('https://adwords.google.com/api/adwords/ch/v201008', $nst + '.CustomerSyncService');
$ref.prop('requestHeader', $nst + '.RequestHeader', 'RequestHeader', false, false);
$ref.prop('responseHeader', $nst + '.ResponseHeader', 'ResponseHeader', false, false);
$ref.meth(
  'get',
  'https://adwords.google.com/api/adwords/ch/v201008',
  'https://adwords.google.com/api/adwords/ch/v201008',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.CustomerChangeData', isArray: false, isSystem: false},
  [{propertyName: 'responseHeader', direction: 'out'}, {propertyName: 'requestHeader', direction: 'in'}],
  [{className: $nst + '.CustomerSyncSelector', isArray: false, isSystem: false, name: 'selector', xmlElementName: 'selector'}]
);

$nso.CustomerSyncService.prototype.get = function(selector, onsuccess, onfailure) {
  this.invoke.call(this, 'get', [selector], onsuccess, onfailure);
};

$nso.AdGroupChangeData = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/ch/v201008', $nst + '.AdGroupChangeData', false, $sot);
$ref.prop('adGroupId', 'integer', 'adGroupId', false, true);
$ref.prop('adGroupChangeStatus', $nst + '.ChangeStatus', 'adGroupChangeStatus', false, false);
$ref.prop('changedAds', 'integer', 'changedAds', true, true);
$ref.prop('changedCriteria', 'integer', 'changedCriteria', true, true);
$ref.prop('deletedCriteria', 'integer', 'deletedCriteria', true, true);

$nso.ChangeStatus = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/ch/v201008', $nst + '.ChangeStatus', true, $sot);

$nso.ChangeStatus.FIELDS_UNCHANGED = 'FIELDS_UNCHANGED';
$nso.ChangeStatus.FIELDS_CHANGED = 'FIELDS_CHANGED';
$nso.ChangeStatus.NEW = 'NEW';

$nso.CampaignChangeData = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/ch/v201008', $nst + '.CampaignChangeData', false, $sot);
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

$ref = $dtf('https://adwords.google.com/api/adwords/ch/v201008', $nst + '.CustomerChangeData', false, $sot);
$ref.prop('changedCampaigns', $nst + '.CampaignChangeData', 'changedCampaigns', true, false);
$ref.prop('lastChangeTimestamp', 'string', 'lastChangeTimestamp', false, true);

$nso.DateTimeRange = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.DateTimeRange', false, $sot);
$ref.prop('min', 'string', 'min', false, true);
$ref.prop('max', 'string', 'max', false, true);

$nso.CustomerSyncSelector = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/ch/v201008', $nst + '.CustomerSyncSelector', false, $sot);
$ref.prop('dateTimeRange', $nst + '.DateTimeRange', 'dateTimeRange', false, false);
$ref.prop('campaignIds', 'integer', 'campaignIds', true, true);

$nso.CustomerSyncError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/ch/v201008', $nst + '.CustomerSyncError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.CustomerSyncErrorReason', 'reason', false, false);
$ref.prop('campaignId', 'integer', 'campaignId', false, true);

$nso.CustomerSyncErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/ch/v201008', $nst + '.CustomerSyncErrorReason', true, $sot);

$nso.CustomerSyncErrorReason.INVALID_CAMPAIGN_ID = 'INVALID_CAMPAIGN_ID';
$nso.CustomerSyncErrorReason.INVALID_DATE_RANGE = 'INVALID_DATE_RANGE';
$nso.CustomerSyncErrorReason.TOO_MANY_CHANGES = 'TOO_MANY_CHANGES';

$nso.UserListService = function() {
  $sso.call(this);
  this.nametable_ = new google.ads.adwords.v201008.SoapNametable();
};

$ref = $dsf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.UserListService');
$ref.prop('requestHeader', $nst + '.RequestHeader', 'RequestHeader', false, false);
$ref.prop('responseHeader', $nst + '.ResponseHeader', 'ResponseHeader', false, false);
$ref.meth(
  'get',
  'https://adwords.google.com/api/adwords/cm/v201008',
  'https://adwords.google.com/api/adwords/cm/v201008',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.UserListPage', isArray: false, isSystem: false},
  [{propertyName: 'responseHeader', direction: 'out'}, {propertyName: 'requestHeader', direction: 'in'}],
  [{className: $nst + '.UserListSelector', isArray: false, isSystem: false, name: 'selector', xmlElementName: 'selector'}]
);
$ref.meth(
  'mutate',
  'https://adwords.google.com/api/adwords/cm/v201008',
  'https://adwords.google.com/api/adwords/cm/v201008',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.UserListReturnValue', isArray: false, isSystem: false},
  [{propertyName: 'responseHeader', direction: 'out'}, {propertyName: 'requestHeader', direction: 'in'}],
  [{className: $nst + '.UserListOperation', isArray: true, isSystem: false, name: 'operations', xmlElementName: 'operations'}]
);

$nso.UserListService.prototype.get = function(selector, onsuccess, onfailure) {
  this.invoke.call(this, 'get', [selector], onsuccess, onfailure);
};

$nso.UserListService.prototype.mutate = function(operations, onsuccess, onfailure) {
  this.invoke.call(this, 'mutate', [operations], onsuccess, onfailure);
};

$nso.UserListReturnValue = function() {
  $nso.ListReturnValue.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.UserListReturnValue', false, $nst + '.ListReturnValue');
$ref.prop('value', $nst + '.UserList', 'value', true, false);

$nso.UserList = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.UserList', false, $sot);
$ref.prop('id', 'integer', 'id', false, true);
$ref.prop('isReadOnly', 'boolean', 'isReadOnly', false, true);
$ref.prop('name', 'string', 'name', false, true);
$ref.prop('description', 'string', 'description', false, true);
$ref.prop('status', $nst + '.UserListMembershipStatus', 'status', false, false);
$ref.prop('membershipLifeSpan', 'integer', 'membershipLifeSpan', false, true);
$ref.prop('size', 'integer', 'size', false, true);
$ref.prop('sizeRange', $nst + '.SizeRange', 'sizeRange', false, false);
$ref.prop('type', $nst + '.UserListType', 'type', false, false);
$ref.prop('userListType', 'string', 'UserList.Type', false, true);

$nso.UserListMembershipStatus = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.UserListMembershipStatus', true, $sot);

$nso.UserListMembershipStatus.OPEN = 'OPEN';
$nso.UserListMembershipStatus.CLOSED = 'CLOSED';

$nso.SizeRange = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.SizeRange', true, $sot);

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

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.UserListType', true, $sot);

$nso.UserListType.EXTERNAL_REMARKETING = 'EXTERNAL_REMARKETING';
$nso.UserListType.LOGICAL = 'LOGICAL';
$nso.UserListType.REMARKETING = 'REMARKETING';
$nso.UserListType.UNKNOWN = 'UNKNOWN';

$nso.RemarketingUserList = function() {
  $nso.UserList.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.RemarketingUserList', false, $nst + '.UserList');
$ref.prop('conversionTypes', $nst + '.UserListConversionType', 'conversionTypes', true, false);

$nso.UserListConversionType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.UserListConversionType', false, $sot);
$ref.prop('id', 'integer', 'id', false, true);
$ref.prop('name', 'string', 'name', false, true);
$ref.prop('category', $nst + '.UserListConversionTypeCategory', 'category', false, false);

$nso.UserListConversionTypeCategory = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.UserListConversionTypeCategory', true, $sot);

$nso.UserListConversionTypeCategory.BOOMERANG_EVENT = 'BOOMERANG_EVENT';
$nso.UserListConversionTypeCategory.OTHER = 'OTHER';

$nso.LogicalUserList = function() {
  $nso.UserList.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.LogicalUserList', false, $nst + '.UserList');
$ref.prop('rules', $nst + '.UserListLogicalRule', 'rules', true, false);

$nso.UserListLogicalRule = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.UserListLogicalRule', false, $sot);
$ref.prop('operator', $nst + '.UserListLogicalRuleOperator', 'operator', false, false);
$ref.prop('ruleOperands', $nst + '.LogicalUserListOperand', 'ruleOperands', true, false);

$nso.UserListLogicalRuleOperator = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.UserListLogicalRuleOperator', true, $sot);

$nso.UserListLogicalRuleOperator.ALL = 'ALL';
$nso.UserListLogicalRuleOperator.ANY = 'ANY';
$nso.UserListLogicalRuleOperator.NONE = 'NONE';
$nso.UserListLogicalRuleOperator.UNKNOWN = 'UNKNOWN';

$nso.LogicalUserListOperand = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.LogicalUserListOperand', false, $sot);
$ref.prop('item', 'System.Object', [{elementName: 'UserInterest', className: $nst + '.UserInterest'}, {elementName: 'UserList', className: $nst + '.UserList'}], false, true);

$nso.UserInterest = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.UserInterest', false, $sot);
$ref.prop('id', 'integer', 'id', false, true);
$ref.prop('name', 'string', 'name', false, true);
$ref.prop('sizeRange', $nst + '.SizeRange', 'sizeRange', false, false);

$nso.ExternalRemarketingUserList = function() {
  $nso.UserList.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.ExternalRemarketingUserList', false, $nst + '.UserList');

$nso.UserListOperation = function() {
  $nso.Operation.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.UserListOperation', false, $nst + '.Operation');
$ref.prop('operand', $nst + '.UserList', 'operand', false, false);

$nso.UserListPage = function() {
  $nso.Page.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.UserListPage', false, $nst + '.Page');
$ref.prop('entries', $nst + '.UserList', 'entries', true, false);

$nso.UserListSelector = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.UserListSelector', false, $sot);
$ref.prop('userListIds', 'integer', 'userListIds', true, true);
$ref.prop('userListTypes', $nst + '.UserListType', 'userListTypes', true, false);
$ref.prop('userListStatuses', $nst + '.UserListMembershipStatus', 'userListStatuses', true, false);
$ref.prop('includeUserInterests', 'boolean', 'includeUserInterests', false, true);
$ref.prop('paging', $nst + '.Paging', 'paging', false, false);

$nso.UserListError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.UserListError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.UserListErrorReason', 'reason', false, false);

$nso.UserListErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.UserListErrorReason', true, $sot);

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
$nso.UserListErrorReason.USER_LIST_SERVICE_ERROR = 'USER_LIST_SERVICE_ERROR';

$nso.AdGroupAdService = function() {
  $sso.call(this);
  this.nametable_ = new google.ads.adwords.v201008.SoapNametable();
};

$ref = $dsf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AdGroupAdService');
$ref.prop('requestHeader', $nst + '.RequestHeader', 'RequestHeader', false, false);
$ref.prop('responseHeader', $nst + '.ResponseHeader', 'ResponseHeader', false, false);
$ref.meth(
  'get',
  'https://adwords.google.com/api/adwords/cm/v201008',
  'https://adwords.google.com/api/adwords/cm/v201008',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.AdGroupAdPage', isArray: false, isSystem: false},
  [{propertyName: 'responseHeader', direction: 'out'}, {propertyName: 'requestHeader', direction: 'in'}],
  [{className: $nst + '.AdGroupAdSelector', isArray: false, isSystem: false, name: 'selector', xmlElementName: 'selector'}]
);
$ref.meth(
  'mutate',
  'https://adwords.google.com/api/adwords/cm/v201008',
  'https://adwords.google.com/api/adwords/cm/v201008',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.AdGroupAdReturnValue', isArray: false, isSystem: false},
  [{propertyName: 'responseHeader', direction: 'out'}, {propertyName: 'requestHeader', direction: 'in'}],
  [{className: $nst + '.AdGroupAdOperation', isArray: true, isSystem: false, name: 'operations', xmlElementName: 'operations'}]
);

$nso.AdGroupAdService.prototype.get = function(selector, onsuccess, onfailure) {
  this.invoke.call(this, 'get', [selector], onsuccess, onfailure);
};

$nso.AdGroupAdService.prototype.mutate = function(operations, onsuccess, onfailure) {
  this.invoke.call(this, 'mutate', [operations], onsuccess, onfailure);
};

$nso.AdGroupAdReturnValue = function() {
  $nso.ListReturnValue.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AdGroupAdReturnValue', false, $nst + '.ListReturnValue');
$ref.prop('value', $nst + '.AdGroupAd', 'value', true, false);

$nso.AdGroupAd = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AdGroupAd', false, $sot);
$ref.prop('adGroupId', 'integer', 'adGroupId', false, true);
$ref.prop('ad', $nst + '.Ad', 'ad', false, false);
$ref.prop('status', $nst + '.AdGroupAdStatus', 'status', false, false);
$ref.prop('stats', $nst + '.AdStats', 'stats', false, false);

$nso.Ad = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.Ad', false, $sot);
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

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AdApprovalStatus', true, $sot);

$nso.AdApprovalStatus.APPROVED = 'APPROVED';
$nso.AdApprovalStatus.FAMILY_SAFE = 'FAMILY_SAFE';
$nso.AdApprovalStatus.NON_FAMILY_SAFE = 'NON_FAMILY_SAFE';
$nso.AdApprovalStatus.PORN = 'PORN';
$nso.AdApprovalStatus.UNCHECKED = 'UNCHECKED';
$nso.AdApprovalStatus.DISAPPROVED = 'DISAPPROVED';

$nso.TemplateAd = function() {
  $nso.Ad.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.TemplateAd', false, $nst + '.Ad');
$ref.prop('templateId', 'integer', 'templateId', false, true);
$ref.prop('adUnionId', $nst + '.AdUnionId', 'adUnionId', false, false);
$ref.prop('templateElements', $nst + '.TemplateElement', 'templateElements', true, false);
$ref.prop('dimensions', $nst + '.Dimensions', 'dimensions', false, false);
$ref.prop('name', 'string', 'name', false, true);
$ref.prop('duration', 'integer', 'duration', false, true);

$nso.AdUnionId = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AdUnionId', false, $sot);
$ref.prop('id', 'integer', 'id', false, true);
$ref.prop('adUnionIdType', 'string', 'AdUnionId.Type', false, true);

$nso.TempAdUnionId = function() {
  $nso.AdUnionId.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.TempAdUnionId', false, $nst + '.AdUnionId');

$nso.TemplateElement = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.TemplateElement', false, $sot);
$ref.prop('uniqueName', 'string', 'uniqueName', false, true);
$ref.prop('fields', $nst + '.TemplateElementField', 'fields', true, false);

$nso.TemplateElementField = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.TemplateElementField', false, $sot);
$ref.prop('name', 'string', 'name', false, true);
$ref.prop('type', $nst + '.TemplateElementFieldType', 'type', false, false);
$ref.prop('fieldText', 'string', 'fieldText', false, true);
$ref.prop('fieldMedia', $nst + '.Media', 'fieldMedia', false, false);

$nso.TemplateElementFieldType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.TemplateElementFieldType', true, $sot);

$nso.TemplateElementFieldType.ADDRESS = 'ADDRESS';
$nso.TemplateElementFieldType.AUDIO = 'AUDIO';
$nso.TemplateElementFieldType.ENUM = 'ENUM';
$nso.TemplateElementFieldType.IMAGE = 'IMAGE';
$nso.TemplateElementFieldType.TEXT = 'TEXT';
$nso.TemplateElementFieldType.URL = 'URL';
$nso.TemplateElementFieldType.VIDEO = 'VIDEO';
$nso.TemplateElementFieldType.VISIBLE_URL = 'VISIBLE_URL';

$nso.LocalBusinessAd = function() {
  $nso.Ad.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.LocalBusinessAd', false, $nst + '.Ad');
$ref.prop('fullBusinessName', 'string', 'fullBusinessName', false, true);
$ref.prop('phoneNumber', 'string', 'phoneNumber', false, true);
$ref.prop('streetAddress', 'string', 'streetAddress', false, true);
$ref.prop('city', 'string', 'city', false, true);
$ref.prop('region', 'string', 'region', false, true);
$ref.prop('regionCode', 'string', 'regionCode', false, true);
$ref.prop('postalCode', 'string', 'postalCode', false, true);
$ref.prop('countryCode', 'string', 'countryCode', false, true);
$ref.prop('businessName', 'string', 'businessName', false, true);
$ref.prop('description1', 'string', 'description1', false, true);
$ref.prop('description2', 'string', 'description2', false, true);
$ref.prop('target', $nst + '.ProximityTarget', 'target', false, false);
$ref.prop('businessImage', $nst + '.Image', 'businessImage', false, false);
$ref.prop('icon', $nst + '.Image', 'icon', false, false);

$nso.ImageAd = function() {
  $nso.Ad.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.ImageAd', false, $nst + '.Ad');
$ref.prop('image', $nst + '.Image', 'image', false, false);
$ref.prop('name', 'string', 'name', false, true);
$ref.prop('adToCopyImageFrom', 'integer', 'adToCopyImageFrom', false, true);

$nso.RichMediaAd = function() {
  $nso.Ad.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.RichMediaAd', false, $nst + '.Ad');
$ref.prop('name', 'string', 'name', false, true);
$ref.prop('dimensions', $nst + '.Dimensions', 'dimensions', false, false);
$ref.prop('snippet', 'string', 'snippet', false, true);
$ref.prop('impressionBeaconUrl', 'string', 'impressionBeaconUrl', false, true);
$ref.prop('certifiedVendorFormatId', 'integer', 'certifiedVendorFormatId', false, true);

$nso.ThirdPartyRedirectAd = function() {
  $nso.RichMediaAd.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.ThirdPartyRedirectAd', false, $nst + '.RichMediaAd');
$ref.prop('isCookieTargeted', 'boolean', 'isCookieTargeted', false, true);
$ref.prop('isUserInterestTargeted', 'boolean', 'isUserInterestTargeted', false, true);
$ref.prop('isTagged', 'boolean', 'isTagged', false, true);
$ref.prop('videoTypes', $nst + '.VideoType', 'videoTypes', true, false);

$nso.VideoType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.VideoType', true, $sot);

$nso.VideoType.ADOBE = 'ADOBE';
$nso.VideoType.REALPLAYER = 'REALPLAYER';
$nso.VideoType.QUICKTIME = 'QUICKTIME';
$nso.VideoType.WINDOWSMEDIA = 'WINDOWSMEDIA';

$nso.MobileImageAd = function() {
  $nso.Ad.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.MobileImageAd', false, $nst + '.Ad');
$ref.prop('markupLanguages', $nst + '.MarkupLanguageType', 'markupLanguages', true, false);
$ref.prop('mobileCarriers', 'string', 'mobileCarriers', true, true);
$ref.prop('image', $nst + '.Image', 'image', false, false);

$nso.MarkupLanguageType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.MarkupLanguageType', true, $sot);

$nso.MarkupLanguageType.HTML = 'HTML';
$nso.MarkupLanguageType.CHTML = 'CHTML';
$nso.MarkupLanguageType.XHTML = 'XHTML';
$nso.MarkupLanguageType.WML = 'WML';

$nso.TextAd = function() {
  $nso.Ad.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.TextAd', false, $nst + '.Ad');
$ref.prop('headline', 'string', 'headline', false, true);
$ref.prop('description1', 'string', 'description1', false, true);
$ref.prop('description2', 'string', 'description2', false, true);

$nso.ProductAd = function() {
  $nso.Ad.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.ProductAd', false, $nst + '.Ad');
$ref.prop('promotionLine', 'string', 'promotionLine', false, true);

$nso.MobileAd = function() {
  $nso.Ad.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.MobileAd', false, $nst + '.Ad');
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

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.DeprecatedAd', false, $nst + '.Ad');
$ref.prop('name', 'string', 'name', false, true);
$ref.prop('type', $nst + '.DeprecatedAdType', 'type', false, false);

$nso.DeprecatedAdType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.DeprecatedAdType', true, $sot);

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

$nso.AdGroupAdStatus = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AdGroupAdStatus', true, $sot);

$nso.AdGroupAdStatus.ENABLED = 'ENABLED';
$nso.AdGroupAdStatus.PAUSED = 'PAUSED';
$nso.AdGroupAdStatus.DISABLED = 'DISABLED';

$nso.AdStats = function() {
  $nso.Stats.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AdStats', false, $nst + '.Stats');
$ref.prop('percentServed', 'double', 'percentServed', false, true);

$nso.ExemptionRequest = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.ExemptionRequest', false, $sot);
$ref.prop('key', $nst + '.PolicyViolationKey', 'key', false, false);

$nso.AdGroupAdOperation = function() {
  $nso.Operation.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AdGroupAdOperation', false, $nst + '.Operation');
$ref.prop('operand', $nst + '.AdGroupAd', 'operand', false, false);
$ref.prop('exemptionRequests', $nst + '.ExemptionRequest', 'exemptionRequests', true, false);

$nso.AdGroupAdPage = function() {
  $nso.Page.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AdGroupAdPage', false, $nst + '.Page');
$ref.prop('entries', $nst + '.AdGroupAd', 'entries', true, false);

$nso.AdStatsSelector = function() {
  $nso.StatsSelector.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AdStatsSelector', false, $nst + '.StatsSelector');

$nso.AdGroupAdSelector = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AdGroupAdSelector', false, $sot);
$ref.prop('campaignIds', 'integer', 'campaignIds', true, true);
$ref.prop('adGroupIds', 'integer', 'adGroupIds', true, true);
$ref.prop('adIds', 'integer', 'adIds', true, true);
$ref.prop('statuses', $nst + '.AdGroupAdStatus', 'statuses', true, false);
$ref.prop('statsSelector', $nst + '.AdStatsSelector', 'statsSelector', false, false);
$ref.prop('paging', $nst + '.Paging', 'paging', false, false);

$nso.PagingError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.PagingError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.PagingErrorReason', 'reason', false, false);

$nso.PagingErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.PagingErrorReason', true, $sot);

$nso.PagingErrorReason.START_INDEX_CANNOT_BE_NEGATIVE = 'START_INDEX_CANNOT_BE_NEGATIVE';
$nso.PagingErrorReason.NUMBER_OF_RESULTS_CANNOT_BE_NEGATIVE = 'NUMBER_OF_RESULTS_CANNOT_BE_NEGATIVE';
$nso.PagingErrorReason.UNKNOWN = 'UNKNOWN';

$nso.AdGroupAdCountLimitExceeded = function() {
  $nso.EntityCountLimitExceeded.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AdGroupAdCountLimitExceeded', false, $nst + '.EntityCountLimitExceeded');

$nso.AdGroupAdError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AdGroupAdError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.AdGroupAdErrorReason', 'reason', false, false);

$nso.AdGroupAdErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AdGroupAdErrorReason', true, $sot);

$nso.AdGroupAdErrorReason.AD_NOT_UNDER_ADGROUP = 'AD_NOT_UNDER_ADGROUP';
$nso.AdGroupAdErrorReason.CANNOT_OPERATE_ON_DELETED_ADGROUPAD = 'CANNOT_OPERATE_ON_DELETED_ADGROUPAD';
$nso.AdGroupAdErrorReason.CANNOT_CREATE_DEPRECATED_ADS = 'CANNOT_CREATE_DEPRECATED_ADS';
$nso.AdGroupAdErrorReason.EMPTY_FIELD = 'EMPTY_FIELD';
$nso.AdGroupAdErrorReason.ENTITY_REFERENCED_IN_MULTIPLE_OPS = 'ENTITY_REFERENCED_IN_MULTIPLE_OPS';
$nso.AdGroupAdErrorReason.UNSUPPORTED_OPERATION = 'UNSUPPORTED_OPERATION';

$nso.AdError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AdError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.AdErrorReason', 'reason', false, false);

$nso.AdErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AdErrorReason', true, $sot);

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
  this.nametable_ = new google.ads.adwords.v201008.SoapNametable();
};

$ref = $dsf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AdGroupCriterionService');
$ref.prop('requestHeader', $nst + '.RequestHeader', 'RequestHeader', false, false);
$ref.prop('responseHeader', $nst + '.ResponseHeader', 'ResponseHeader', false, false);
$ref.meth(
  'get',
  'https://adwords.google.com/api/adwords/cm/v201008',
  'https://adwords.google.com/api/adwords/cm/v201008',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.AdGroupCriterionPage', isArray: false, isSystem: false},
  [{propertyName: 'responseHeader', direction: 'out'}, {propertyName: 'requestHeader', direction: 'in'}],
  [{className: $nst + '.AdGroupCriterionSelector', isArray: false, isSystem: false, name: 'selector', xmlElementName: 'selector'}]
);
$ref.meth(
  'mutate',
  'https://adwords.google.com/api/adwords/cm/v201008',
  'https://adwords.google.com/api/adwords/cm/v201008',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.AdGroupCriterionReturnValue', isArray: false, isSystem: false},
  [{propertyName: 'responseHeader', direction: 'out'}, {propertyName: 'requestHeader', direction: 'in'}],
  [{className: $nst + '.AdGroupCriterionOperation', isArray: true, isSystem: false, name: 'operations', xmlElementName: 'operations'}]
);

$nso.AdGroupCriterionService.prototype.get = function(selector, onsuccess, onfailure) {
  this.invoke.call(this, 'get', [selector], onsuccess, onfailure);
};

$nso.AdGroupCriterionService.prototype.mutate = function(operations, onsuccess, onfailure) {
  this.invoke.call(this, 'mutate', [operations], onsuccess, onfailure);
};

$nso.AdGroupCriterionReturnValue = function() {
  $nso.ListReturnValue.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AdGroupCriterionReturnValue', false, $nst + '.ListReturnValue');
$ref.prop('value', $nst + '.AdGroupCriterion', 'value', true, false);
$ref.prop('partialFailureErrors', $nst + '.ApiError', 'partialFailureErrors', true, false);

$nso.AdGroupCriterion = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AdGroupCriterion', false, $sot);
$ref.prop('adGroupId', 'integer', 'adGroupId', false, true);
$ref.prop('criterion', $nst + '.Criterion', 'criterion', false, false);
$ref.prop('adGroupCriterionType', 'string', 'AdGroupCriterion.Type', false, true);

$nso.BiddableAdGroupCriterion = function() {
  $nso.AdGroupCriterion.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.BiddableAdGroupCriterion', false, $nst + '.AdGroupCriterion');
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

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.UserStatus', true, $sot);

$nso.UserStatus.ACTIVE = 'ACTIVE';
$nso.UserStatus.DELETED = 'DELETED';
$nso.UserStatus.PAUSED = 'PAUSED';

$nso.SystemServingStatus = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.SystemServingStatus', true, $sot);

$nso.SystemServingStatus.ELIGIBLE = 'ELIGIBLE';
$nso.SystemServingStatus.RARELY_SERVED = 'RARELY_SERVED';

$nso.ApprovalStatus = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.ApprovalStatus', true, $sot);

$nso.ApprovalStatus.APPROVED = 'APPROVED';
$nso.ApprovalStatus.PENDING_REVIEW = 'PENDING_REVIEW';
$nso.ApprovalStatus.UNDER_REVIEW = 'UNDER_REVIEW';
$nso.ApprovalStatus.DISAPPROVED = 'DISAPPROVED';

$nso.AdGroupCriterionBids = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AdGroupCriterionBids', false, $sot);
$ref.prop('adGroupCriterionBidsType', 'string', 'AdGroupCriterionBids.Type', false, true);

$nso.ManualCPCAdGroupCriterionBids = function() {
  $nso.AdGroupCriterionBids.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.ManualCPCAdGroupCriterionBids', false, $nst + '.AdGroupCriterionBids');
$ref.prop('maxCpc', $nst + '.Bid', 'maxCpc', false, false);
$ref.prop('bidSource', $nst + '.BidSource', 'bidSource', false, false);
$ref.prop('positionPreferenceBids', $nst + '.PositionPreferenceAdGroupCriterionBids', 'positionPreferenceBids', false, false);
$ref.prop('enhancedCpcEnabled', 'boolean', 'enhancedCpcEnabled', false, true);

$nso.BidSource = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.BidSource', true, $sot);

$nso.BidSource.ADGROUP = 'ADGROUP';
$nso.BidSource.CRITERION = 'CRITERION';

$nso.PositionPreferenceAdGroupCriterionBids = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.PositionPreferenceAdGroupCriterionBids', false, $sot);
$ref.prop('proxyMaxCpc', $nst + '.Bid', 'proxyMaxCpc', false, false);
$ref.prop('preferredPosition', 'integer', 'preferredPosition', false, true);
$ref.prop('bottomPosition', 'integer', 'bottomPosition', false, true);

$nso.ManualCPMAdGroupCriterionBids = function() {
  $nso.AdGroupCriterionBids.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.ManualCPMAdGroupCriterionBids', false, $nst + '.AdGroupCriterionBids');
$ref.prop('maxCpm', $nst + '.Bid', 'maxCpm', false, false);
$ref.prop('bidSource', $nst + '.BidSource', 'bidSource', false, false);

$nso.BudgetOptimizerAdGroupCriterionBids = function() {
  $nso.AdGroupCriterionBids.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.BudgetOptimizerAdGroupCriterionBids', false, $nst + '.AdGroupCriterionBids');
$ref.prop('proxyBid', $nst + '.Bid', 'proxyBid', false, false);
$ref.prop('enhancedCpcEnabled', 'boolean', 'enhancedCpcEnabled', false, true);

$nso.PercentCPAAdGroupCriterionBids = function() {
  $nso.AdGroupCriterionBids.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.PercentCPAAdGroupCriterionBids', false, $nst + '.AdGroupCriterionBids');
$ref.prop('percentCpa', 'integer', 'percentCpa', false, true);
$ref.prop('source', $nst + '.BidSource', 'source', false, false);

$nso.ConversionOptimizerAdGroupCriterionBids = function() {
  $nso.AdGroupCriterionBids.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.ConversionOptimizerAdGroupCriterionBids', false, $nst + '.AdGroupCriterionBids');

$nso.BiddableAdGroupCriterionExperimentData = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.BiddableAdGroupCriterionExperimentData', false, $sot);
$ref.prop('experimentId', 'integer', 'experimentId', false, true);
$ref.prop('experimentDeltaStatus', $nst + '.ExperimentDeltaStatus', 'experimentDeltaStatus', false, false);
$ref.prop('experimentDataStatus', $nst + '.ExperimentDataStatus', 'experimentDataStatus', false, false);
$ref.prop('experimentBidMultiplier', $nst + '.AdGroupCriterionExperimentBidMultiplier', 'experimentBidMultiplier', false, false);

$nso.ExperimentDeltaStatus = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.ExperimentDeltaStatus', true, $sot);

$nso.ExperimentDeltaStatus.EXPERIMENT_ONLY = 'EXPERIMENT_ONLY';
$nso.ExperimentDeltaStatus.MODIFIED = 'MODIFIED';
$nso.ExperimentDeltaStatus.CONTROL_ONLY = 'CONTROL_ONLY';
$nso.ExperimentDeltaStatus.UNKNOWN = 'UNKNOWN';

$nso.ExperimentDataStatus = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.ExperimentDataStatus', true, $sot);

$nso.ExperimentDataStatus.ACTIVE = 'ACTIVE';
$nso.ExperimentDataStatus.DELETED = 'DELETED';
$nso.ExperimentDataStatus.UNKNOWN = 'UNKNOWN';

$nso.AdGroupCriterionExperimentBidMultiplier = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AdGroupCriterionExperimentBidMultiplier', false, $sot);
$ref.prop('adGroupCriterionExperimentBidMultiplierType', 'string', 'AdGroupCriterionExperimentBidMultiplier.Type', false, true);

$nso.ManualCPCAdGroupCriterionExperimentBidMultiplier = function() {
  $nso.AdGroupCriterionExperimentBidMultiplier.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.ManualCPCAdGroupCriterionExperimentBidMultiplier', false, $nst + '.AdGroupCriterionExperimentBidMultiplier');
$ref.prop('maxCpcMultiplier', $nst + '.BidMultiplier', 'maxCpcMultiplier', false, false);
$ref.prop('multiplierSource', $nst + '.MultiplierSource', 'multiplierSource', false, false);

$nso.BidMultiplier = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.BidMultiplier', false, $sot);
$ref.prop('multiplier', 'double', 'multiplier', false, true);
$ref.prop('multipliedBid', $nst + '.Bid', 'multipliedBid', false, false);

$nso.MultiplierSource = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.MultiplierSource', true, $sot);

$nso.MultiplierSource.ADGROUP = 'ADGROUP';
$nso.MultiplierSource.CRITERION = 'CRITERION';
$nso.MultiplierSource.UNKNOWN = 'UNKNOWN';

$nso.QualityInfo = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.QualityInfo', false, $sot);
$ref.prop('isKeywordAdRelevanceAcceptable', 'boolean', 'isKeywordAdRelevanceAcceptable', false, true);
$ref.prop('isLandingPageQualityAcceptable', 'boolean', 'isLandingPageQualityAcceptable', false, true);
$ref.prop('isLandingPageLatencyAcceptable', 'boolean', 'isLandingPageLatencyAcceptable', false, true);
$ref.prop('qualityScore', 'integer', 'qualityScore', false, true);

$nso.NegativeAdGroupCriterion = function() {
  $nso.AdGroupCriterion.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.NegativeAdGroupCriterion', false, $nst + '.AdGroupCriterion');

$nso.AdGroupCriterionOperation = function() {
  $nso.Operation.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AdGroupCriterionOperation', false, $nst + '.Operation');
$ref.prop('operand', $nst + '.AdGroupCriterion', 'operand', false, false);
$ref.prop('exemptionRequests', $nst + '.ExemptionRequest', 'exemptionRequests', true, false);

$nso.AdGroupCriterionPage = function() {
  $nso.Page.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AdGroupCriterionPage', false, $nst + '.Page');
$ref.prop('entries', $nst + '.AdGroupCriterion', 'entries', true, false);

$nso.AdGroupCriterionIdFilter = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AdGroupCriterionIdFilter', false, $sot);
$ref.prop('campaignId', 'integer', 'campaignId', false, true);
$ref.prop('adGroupId', 'integer', 'adGroupId', false, true);
$ref.prop('criterionId', 'integer', 'criterionId', false, true);

$nso.AdGroupCriterionSelector = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AdGroupCriterionSelector', false, $sot);
$ref.prop('idFilters', $nst + '.AdGroupCriterionIdFilter', 'idFilters', true, false);
$ref.prop('experimentId', 'integer', 'experimentId', false, true);
$ref.prop('criterionUse', $nst + '.CriterionUse', 'criterionUse', false, false);
$ref.prop('userStatuses', $nst + '.UserStatus', 'userStatuses', true, false);
$ref.prop('statsSelector', $nst + '.StatsSelector', 'statsSelector', false, false);
$ref.prop('paging', $nst + '.Paging', 'paging', false, false);

$nso.CriterionUse = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.CriterionUse', true, $sot);

$nso.CriterionUse.BIDDABLE = 'BIDDABLE';
$nso.CriterionUse.NEGATIVE = 'NEGATIVE';

$nso.AdGroupService = function() {
  $sso.call(this);
  this.nametable_ = new google.ads.adwords.v201008.SoapNametable();
};

$ref = $dsf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AdGroupService');
$ref.prop('requestHeader', $nst + '.RequestHeader', 'RequestHeader', false, false);
$ref.prop('responseHeader', $nst + '.ResponseHeader', 'ResponseHeader', false, false);
$ref.meth(
  'get',
  'https://adwords.google.com/api/adwords/cm/v201008',
  'https://adwords.google.com/api/adwords/cm/v201008',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.AdGroupPage', isArray: false, isSystem: false},
  [{propertyName: 'responseHeader', direction: 'out'}, {propertyName: 'requestHeader', direction: 'in'}],
  [{className: $nst + '.AdGroupSelector', isArray: false, isSystem: false, name: 'selector', xmlElementName: 'selector'}]
);
$ref.meth(
  'mutate',
  'https://adwords.google.com/api/adwords/cm/v201008',
  'https://adwords.google.com/api/adwords/cm/v201008',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.AdGroupReturnValue', isArray: false, isSystem: false},
  [{propertyName: 'responseHeader', direction: 'out'}, {propertyName: 'requestHeader', direction: 'in'}],
  [{className: $nst + '.AdGroupOperation', isArray: true, isSystem: false, name: 'operations', xmlElementName: 'operations'}]
);

$nso.AdGroupService.prototype.get = function(selector, onsuccess, onfailure) {
  this.invoke.call(this, 'get', [selector], onsuccess, onfailure);
};

$nso.AdGroupService.prototype.mutate = function(operations, onsuccess, onfailure) {
  this.invoke.call(this, 'mutate', [operations], onsuccess, onfailure);
};

$nso.AdGroupReturnValue = function() {
  $nso.ListReturnValue.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AdGroupReturnValue', false, $nst + '.ListReturnValue');
$ref.prop('value', $nst + '.AdGroup', 'value', true, false);

$nso.AdGroup = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AdGroup', false, $sot);
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

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AdGroupStatus', true, $sot);

$nso.AdGroupStatus.ENABLED = 'ENABLED';
$nso.AdGroupStatus.PAUSED = 'PAUSED';
$nso.AdGroupStatus.DELETED = 'DELETED';

$nso.AdGroupExperimentData = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AdGroupExperimentData', false, $sot);
$ref.prop('experimentId', 'integer', 'experimentId', false, true);
$ref.prop('experimentDeltaStatus', $nst + '.ExperimentDeltaStatus', 'experimentDeltaStatus', false, false);
$ref.prop('experimentDataStatus', $nst + '.ExperimentDataStatus', 'experimentDataStatus', false, false);
$ref.prop('experimentBidMultipliers', $nst + '.AdGroupExperimentBidMultipliers', 'experimentBidMultipliers', false, false);

$nso.AdGroupExperimentBidMultipliers = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AdGroupExperimentBidMultipliers', false, $sot);
$ref.prop('adGroupExperimentBidMultipliersType', 'string', 'AdGroupExperimentBidMultipliers.Type', false, true);

$nso.ManualCPMAdGroupExperimentBidMultipliers = function() {
  $nso.AdGroupExperimentBidMultipliers.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.ManualCPMAdGroupExperimentBidMultipliers', false, $nst + '.AdGroupExperimentBidMultipliers');
$ref.prop('maxCpmMultiplier', $nst + '.BidMultiplier', 'maxCpmMultiplier', false, false);

$nso.ManualCPCAdGroupExperimentBidMultipliers = function() {
  $nso.AdGroupExperimentBidMultipliers.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.ManualCPCAdGroupExperimentBidMultipliers', false, $nst + '.AdGroupExperimentBidMultipliers');
$ref.prop('maxCpcMultiplier', $nst + '.BidMultiplier', 'maxCpcMultiplier', false, false);
$ref.prop('maxContentCpcMultiplier', $nst + '.BidMultiplier', 'maxContentCpcMultiplier', false, false);

$nso.AdGroupOperation = function() {
  $nso.Operation.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AdGroupOperation', false, $nst + '.Operation');
$ref.prop('operand', $nst + '.AdGroup', 'operand', false, false);

$nso.AdGroupPage = function() {
  $nso.Page.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AdGroupPage', false, $nst + '.Page');
$ref.prop('entries', $nst + '.AdGroup', 'entries', true, false);

$nso.AdGroupSelector = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AdGroupSelector', false, $sot);
$ref.prop('campaignIds', 'integer', 'campaignIds', true, true);
$ref.prop('adGroupIds', 'integer', 'adGroupIds', true, true);
$ref.prop('experimentId', 'integer', 'experimentId', false, true);
$ref.prop('adGroupStatuses', $nst + '.AdGroupStatus', 'adGroupStatuses', true, false);
$ref.prop('statsSelector', $nst + '.StatsSelector', 'statsSelector', false, false);
$ref.prop('paging', $nst + '.Paging', 'paging', false, false);

$nso.AdGroupServiceError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AdGroupServiceError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.AdGroupServiceErrorReason', 'reason', false, false);
$ref.prop('adGroupId', 'integer', 'adGroupId', false, true);

$nso.AdGroupServiceErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AdGroupServiceErrorReason', true, $sot);

$nso.AdGroupServiceErrorReason.ADGROUP_CAMPAIGN_MISMATCH = 'ADGROUP_CAMPAIGN_MISMATCH';
$nso.AdGroupServiceErrorReason.DUPLICATE_ADGROUP_NAME = 'DUPLICATE_ADGROUP_NAME';
$nso.AdGroupServiceErrorReason.INVALID_ADGROUP_ID = 'INVALID_ADGROUP_ID';
$nso.AdGroupServiceErrorReason.INVALID_ADGROUP_NAME = 'INVALID_ADGROUP_NAME';
$nso.AdGroupServiceErrorReason.USE_SET_OPERATOR_AND_MARK_STATUS_TO_DELETED = 'USE_SET_OPERATOR_AND_MARK_STATUS_TO_DELETED';
$nso.AdGroupServiceErrorReason.ADVERTISER_NOT_ON_CONTENT_NETWORK = 'ADVERTISER_NOT_ON_CONTENT_NETWORK';
$nso.AdGroupServiceErrorReason.BID_EXCEEDS_AUTO_BUDGET = 'BID_EXCEEDS_AUTO_BUDGET';
$nso.AdGroupServiceErrorReason.BID_EXCEEDS_CUSTOM_BUDGET = 'BID_EXCEEDS_CUSTOM_BUDGET';
$nso.AdGroupServiceErrorReason.BID_EXCEEDS_DAILY_BUDGET = 'BID_EXCEEDS_DAILY_BUDGET';
$nso.AdGroupServiceErrorReason.BID_EXCEEDS_MONTHLY_BUDGET = 'BID_EXCEEDS_MONTHLY_BUDGET';
$nso.AdGroupServiceErrorReason.BID_TOO_BIG = 'BID_TOO_BIG';
$nso.AdGroupServiceErrorReason.BID_TOO_SMALL = 'BID_TOO_SMALL';
$nso.AdGroupServiceErrorReason.BID_TYPE_AND_BIDDING_STRATEGY_MISMATCH = 'BID_TYPE_AND_BIDDING_STRATEGY_MISMATCH';
$nso.AdGroupServiceErrorReason.BIDS_NOT_REQUIRED = 'BIDS_NOT_REQUIRED';
$nso.AdGroupServiceErrorReason.ILLEGAL_MANUAL_BID = 'ILLEGAL_MANUAL_BID';
$nso.AdGroupServiceErrorReason.INCOMPATIBLE_WITH_KEYWORD_AND_SITE_VBB = 'INCOMPATIBLE_WITH_KEYWORD_AND_SITE_VBB';
$nso.AdGroupServiceErrorReason.INCOMPATIBLE_WITH_KEYWORD_CPC = 'INCOMPATIBLE_WITH_KEYWORD_CPC';
$nso.AdGroupServiceErrorReason.INCOMPATIBLE_WITH_KEYWORD_CPC_AND_SITE_CPC = 'INCOMPATIBLE_WITH_KEYWORD_CPC_AND_SITE_CPC';
$nso.AdGroupServiceErrorReason.INCOMPATIBLE_WITH_KEYWORD_CPM = 'INCOMPATIBLE_WITH_KEYWORD_CPM';
$nso.AdGroupServiceErrorReason.INCOMPATIBLE_WITH_KEYWORD_CPM_AND_SITE_CPM = 'INCOMPATIBLE_WITH_KEYWORD_CPM_AND_SITE_CPM';
$nso.AdGroupServiceErrorReason.INCOMPATIBLE_WITH_SITE_CPC = 'INCOMPATIBLE_WITH_SITE_CPC';
$nso.AdGroupServiceErrorReason.INCOMPATIBLE_WITH_SITE_CPM = 'INCOMPATIBLE_WITH_SITE_CPM';
$nso.AdGroupServiceErrorReason.INCOMPATIBLE_WITH_VBB = 'INCOMPATIBLE_WITH_VBB';
$nso.AdGroupServiceErrorReason.INCOMPATIBLE_WITH_SITE_VBB = 'INCOMPATIBLE_WITH_SITE_VBB';
$nso.AdGroupServiceErrorReason.INVALID_BID = 'INVALID_BID';
$nso.AdGroupServiceErrorReason.MISSING_ADGROUP_NAME = 'MISSING_ADGROUP_NAME';
$nso.AdGroupServiceErrorReason.MISSING_BID = 'MISSING_BID';
$nso.AdGroupServiceErrorReason.MULTIPLE_BID_TYPES = 'MULTIPLE_BID_TYPES';
$nso.AdGroupServiceErrorReason.NO_CAMPAIGN_BUDGET = 'NO_CAMPAIGN_BUDGET';
$nso.AdGroupServiceErrorReason.NOT_WHITELISTED_FOR_SITE_CPC = 'NOT_WHITELISTED_FOR_SITE_CPC';
$nso.AdGroupServiceErrorReason.SEPARATE_CONTENT_BIDS_INAPPLICABLE = 'SEPARATE_CONTENT_BIDS_INAPPLICABLE';
$nso.AdGroupServiceErrorReason.SEPARATE_CONTENT_BIDS_NOT_ENABLED = 'SEPARATE_CONTENT_BIDS_NOT_ENABLED';
$nso.AdGroupServiceErrorReason.TOO_MANY_FRACTION_DIGITS = 'TOO_MANY_FRACTION_DIGITS';

$nso.AdParamService = function() {
  $sso.call(this);
  this.nametable_ = new google.ads.adwords.v201008.SoapNametable();
};

$ref = $dsf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AdParamService');
$ref.prop('requestHeader', $nst + '.RequestHeader', 'RequestHeader', false, false);
$ref.prop('responseHeader', $nst + '.ResponseHeader', 'ResponseHeader', false, false);
$ref.meth(
  'get',
  'https://adwords.google.com/api/adwords/cm/v201008',
  'https://adwords.google.com/api/adwords/cm/v201008',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.AdParamPage', isArray: false, isSystem: false},
  [{propertyName: 'responseHeader', direction: 'out'}, {propertyName: 'requestHeader', direction: 'in'}],
  [{className: $nst + '.AdParamSelector', isArray: false, isSystem: false, name: 'selector', xmlElementName: 'selector'}]
);
$ref.meth(
  'mutate',
  'https://adwords.google.com/api/adwords/cm/v201008',
  'https://adwords.google.com/api/adwords/cm/v201008',
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

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AdParamOperation', false, $nst + '.Operation');
$ref.prop('operand', $nst + '.AdParam', 'operand', false, false);

$nso.AdParam = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AdParam', false, $sot);
$ref.prop('adGroupId', 'integer', 'adGroupId', false, true);
$ref.prop('criterionId', 'integer', 'criterionId', false, true);
$ref.prop('insertionText', 'string', 'insertionText', false, true);
$ref.prop('paramIndex', 'integer', 'paramIndex', false, true);

$nso.AdParamPage = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AdParamPage', false, $sot);
$ref.prop('entries', $nst + '.AdParam', 'entries', true, false);
$ref.prop('totalNumEntries', 'integer', 'totalNumEntries', false, true);

$nso.AdParamSelector = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AdParamSelector', false, $sot);
$ref.prop('adGroupIds', 'integer', 'adGroupIds', true, true);
$ref.prop('criteriaId', 'integer', 'criteriaId', true, true);
$ref.prop('paging', $nst + '.Paging', 'paging', false, false);

$nso.AdParamPolicyError = function() {
  $nso.PolicyViolationError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AdParamPolicyError', false, $nst + '.PolicyViolationError');

$nso.AdParamError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AdParamError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.AdParamErrorReason', 'reason', false, false);

$nso.AdParamErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AdParamErrorReason', true, $sot);

$nso.AdParamErrorReason.AD_PARAM_CANNOT_BE_SPECIFIED_MULTIPLE_TIMES = 'AD_PARAM_CANNOT_BE_SPECIFIED_MULTIPLE_TIMES';
$nso.AdParamErrorReason.AD_PARAM_DOES_NOT_EXIST = 'AD_PARAM_DOES_NOT_EXIST';
$nso.AdParamErrorReason.CRITERION_SPECIFIED_MUST_BE_KEYWORD = 'CRITERION_SPECIFIED_MUST_BE_KEYWORD';
$nso.AdParamErrorReason.INVALID_ADGROUP_CRITERION_SPECIFIED = 'INVALID_ADGROUP_CRITERION_SPECIFIED';
$nso.AdParamErrorReason.INVALID_INSERTION_TEXT_FORMAT = 'INVALID_INSERTION_TEXT_FORMAT';
$nso.AdParamErrorReason.MUST_SPECIFY_ADGROUP_ID = 'MUST_SPECIFY_ADGROUP_ID';
$nso.AdParamErrorReason.UNKNOWN = 'UNKNOWN';

$nso.BidLandscapeService = function() {
  $sso.call(this);
  this.nametable_ = new google.ads.adwords.v201008.SoapNametable();
};

$ref = $dsf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.BidLandscapeService');
$ref.prop('requestHeader', $nst + '.RequestHeader', 'RequestHeader', false, false);
$ref.prop('responseHeader', $nst + '.ResponseHeader', 'ResponseHeader', false, false);
$ref.meth(
  'getBidLandscape',
  'https://adwords.google.com/api/adwords/cm/v201008',
  'https://adwords.google.com/api/adwords/cm/v201008',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.BidLandscape', isArray: true, isSystem: false},
  [{propertyName: 'responseHeader', direction: 'out'}, {propertyName: 'requestHeader', direction: 'in'}],
  [{className: $nst + '.BidLandscapeSelector', isArray: false, isSystem: false, name: 'selector', xmlElementName: 'selector'}]
);

$nso.BidLandscapeService.prototype.getBidLandscape = function(selector, onsuccess, onfailure) {
  this.invoke.call(this, 'getBidLandscape', [selector], onsuccess, onfailure);
};

$nso.BidLandscapeLandscapePoint = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.BidLandscapeLandscapePoint', false, $sot);
$ref.prop('bid', $nst + '.Money', 'bid', false, false);
$ref.prop('clicks', 'integer', 'clicks', false, true);
$ref.prop('cost', $nst + '.Money', 'cost', false, false);
$ref.prop('marginalCpc', $nst + '.Money', 'marginalCpc', false, false);
$ref.prop('impressions', 'integer', 'impressions', false, true);

$nso.BidLandscape = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.BidLandscape', false, $sot);
$ref.prop('campaignId', 'integer', 'campaignId', false, true);
$ref.prop('adGroupId', 'integer', 'adGroupId', false, true);
$ref.prop('startDate', 'string', 'startDate', false, true);
$ref.prop('endDate', 'string', 'endDate', false, true);
$ref.prop('landscapePoints', $nst + '.BidLandscapeLandscapePoint', 'landscapePoints', true, false);
$ref.prop('bidLandscapeType', 'string', 'BidLandscape.Type', false, true);

$nso.CriterionBidLandscape = function() {
  $nso.BidLandscape.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.CriterionBidLandscape', false, $nst + '.BidLandscape');
$ref.prop('criterionId', 'integer', 'criterionId', false, true);

$nso.AdGroupBidLandscape = function() {
  $nso.BidLandscape.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AdGroupBidLandscape', false, $nst + '.BidLandscape');
$ref.prop('type', $nst + '.AdGroupBidLandscapeType', 'type', false, false);
$ref.prop('landscapeCurrent', 'boolean', 'landscapeCurrent', false, true);

$nso.AdGroupBidLandscapeType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AdGroupBidLandscapeType', true, $sot);

$nso.AdGroupBidLandscapeType.UNIFORM = 'UNIFORM';
$nso.AdGroupBidLandscapeType.DEFAULT = 'DEFAULT';
$nso.AdGroupBidLandscapeType.UNKNOWN = 'UNKNOWN';

$nso.BidLandscapeIdFilter = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.BidLandscapeIdFilter', false, $sot);
$ref.prop('campaignId', 'integer', 'campaignId', false, true);
$ref.prop('adGroupId', 'integer', 'adGroupId', false, true);
$ref.prop('criterionId', 'integer', 'criterionId', false, true);

$nso.BidLandscapeSelector = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.BidLandscapeSelector', false, $sot);
$ref.prop('idFilters', $nst + '.BidLandscapeIdFilter', 'idFilters', true, false);
$ref.prop('bidLandscapeSelectorType', 'string', 'BidLandscapeSelector.Type', false, true);

$nso.CriterionBidLandscapeSelector = function() {
  $nso.BidLandscapeSelector.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.CriterionBidLandscapeSelector', false, $nst + '.BidLandscapeSelector');

$nso.AdGroupBidLandscapeSelector = function() {
  $nso.BidLandscapeSelector.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AdGroupBidLandscapeSelector', false, $nst + '.BidLandscapeSelector');

$nso.BidLandscapeServiceError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.BidLandscapeServiceError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.BidLandscapeServiceErrorReason', 'reason', false, false);

$nso.BidLandscapeServiceErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.BidLandscapeServiceErrorReason', true, $sot);

$nso.BidLandscapeServiceErrorReason.ID_FILTERS_HAVE_DIFF_FIELDS_SET = 'ID_FILTERS_HAVE_DIFF_FIELDS_SET';
$nso.BidLandscapeServiceErrorReason.INVALID_ID_FILTER_TYPE = 'INVALID_ID_FILTER_TYPE';
$nso.BidLandscapeServiceErrorReason.INVALID_SELECTOR = 'INVALID_SELECTOR';

$nso.BulkMutateJobService = function() {
  $sso.call(this);
  this.nametable_ = new google.ads.adwords.v201008.SoapNametable();
};

$ref = $dsf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.BulkMutateJobService');
$ref.prop('requestHeader', $nst + '.RequestHeader', 'RequestHeader', false, false);
$ref.prop('responseHeader', $nst + '.ResponseHeader', 'ResponseHeader', false, false);
$ref.meth(
  'get',
  'https://adwords.google.com/api/adwords/cm/v201008',
  'https://adwords.google.com/api/adwords/cm/v201008',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.BulkMutateJob', isArray: true, isSystem: false},
  [{propertyName: 'responseHeader', direction: 'out'}, {propertyName: 'requestHeader', direction: 'in'}],
  [{className: $nst + '.BulkMutateJobSelector', isArray: false, isSystem: false, name: 'selector', xmlElementName: 'selector'}]
);
$ref.meth(
  'mutate',
  'https://adwords.google.com/api/adwords/cm/v201008',
  'https://adwords.google.com/api/adwords/cm/v201008',
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

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.Operand', false, $sot);
$ref.prop('item', 'System.Object', [{elementName: 'Ad', className: $nst + '.Ad'}, {elementName: 'AdExtensionOverride', className: $nst + '.AdExtensionOverride'}, {elementName: 'AdGroup', className: $nst + '.AdGroup'}, {elementName: 'AdGroupAd', className: $nst + '.AdGroupAd'}, {elementName: 'AdGroupCriterion', className: $nst + '.AdGroupCriterion'}, {elementName: 'Campaign', className: $nst + '.Campaign'}, {elementName: 'CampaignAdExtension', className: $nst + '.CampaignAdExtension'}, {elementName: 'CampaignCriterion', className: $nst + '.CampaignCriterion'}, {elementName: 'Job', className: $nst + '.Job'}, {elementName: 'Media', className: $nst + '.Media'}, {elementName: 'Target', className: $nst + '.Target'}, {elementName: 'TargetList', className: $nst + '.TargetList'}], false, true);

$nso.CampaignAdExtensionStats = function() {
  $nso.Stats.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.CampaignAdExtensionStats', false, $nst + '.Stats');

$nso.ContentLabel = function() {
  $nso.Criterion.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.ContentLabel', false, $nst + '.Criterion');
$ref.prop('contentLabelType', $nst + '.ContentLabelType', 'contentLabelType', false, false);

$nso.ContentLabelType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.ContentLabelType', true, $sot);

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

$nso.CampaignAdExtension = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.CampaignAdExtension', false, $sot);
$ref.prop('campaignId', 'integer', 'campaignId', false, true);
$ref.prop('adExtension', $nst + '.AdExtension', 'adExtension', false, false);
$ref.prop('status', $nst + '.CampaignAdExtensionStatus', 'status', false, false);
$ref.prop('approvalStatus', $nst + '.CampaignAdExtensionApprovalStatus', 'approvalStatus', false, false);
$ref.prop('stats', $nst + '.CampaignAdExtensionStats', 'stats', false, false);

$nso.CampaignAdExtensionStatus = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.CampaignAdExtensionStatus', true, $sot);

$nso.CampaignAdExtensionStatus.ACTIVE = 'ACTIVE';
$nso.CampaignAdExtensionStatus.DELETED = 'DELETED';

$nso.CampaignAdExtensionApprovalStatus = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.CampaignAdExtensionApprovalStatus', true, $sot);

$nso.CampaignAdExtensionApprovalStatus.APPROVED = 'APPROVED';
$nso.CampaignAdExtensionApprovalStatus.UNCHECKED = 'UNCHECKED';
$nso.CampaignAdExtensionApprovalStatus.DISAPPROVED = 'DISAPPROVED';

$nso.CampaignCriterion = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.CampaignCriterion', false, $sot);
$ref.prop('campaignId', 'integer', 'campaignId', false, true);
$ref.prop('criterion', $nst + '.Criterion', 'criterion', false, false);
$ref.prop('campaignCriterionType', 'string', 'CampaignCriterion.Type', false, true);

$nso.NegativeCampaignCriterion = function() {
  $nso.CampaignCriterion.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.NegativeCampaignCriterion', false, $nst + '.CampaignCriterion');

$nso.Job = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.Job', false, $sot);
$ref.prop('customerJobKey', 'string', 'customerJobKey', false, true);
$ref.prop('context', $nst + '.JobContext', 'context', false, false);
$ref.prop('failureReason', $nst + '.ApiErrorReason', 'failureReason', false, false);
$ref.prop('stats', $nst + '.JobStats', 'stats', false, false);
$ref.prop('billingSummary', $nst + '.BillingSummary', 'billingSummary', false, false);
$ref.prop('jobType', 'string', 'Job.Type', false, true);

$nso.JobContext = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.JobContext', false, $sot);
$ref.prop('authenticatedUserEmail', 'string', 'authenticatedUserEmail', false, true);
$ref.prop('effectiveCustomerId', 'integer', 'effectiveCustomerId', false, true);

$nso.ApiErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.ApiErrorReason', false, $sot);
$ref.prop('item', 'System.Object', [{elementName: 'AdErrorReason', className: $nst + '.AdErrorReason'}, {elementName: 'AdExtensionErrorReason', className: $nst + '.AdExtensionErrorReason'}, {elementName: 'AdExtensionOverrideErrorReason', className: $nst + '.AdExtensionOverrideErrorReason'}, {elementName: 'AdGroupAdErrorReason', className: $nst + '.AdGroupAdErrorReason'}, {elementName: 'AdGroupCriterionErrorReason', className: $nst + '.AdGroupCriterionErrorReason'}, {elementName: 'AdGroupServiceErrorReason', className: $nst + '.AdGroupServiceErrorReason'}, {elementName: 'AuthenticationErrorReason', className: $nst + '.AuthenticationErrorReason'}, {elementName: 'AuthorizationErrorReason', className: $nst + '.AuthorizationErrorReason'}, {elementName: 'BiddingErrorReason', className: $nst + '.BiddingErrorReason'}, {elementName: 'BiddingTransitionErrorReason', className: $nst + '.BiddingTransitionErrorReason'}, {elementName: 'BudgetErrorReason', className: $nst + '.BudgetErrorReason'}, {elementName: 'BulkMutateJobErrorReason', className: $nst + '.BulkMutateJobErrorReason'}, {elementName: 'CampaignAdExtensionErrorReason', className: $nst + '.CampaignAdExtensionErrorReason'}, {elementName: 'CampaignCriterionErrorReason', className: $nst + '.CampaignCriterionErrorReason'}, {elementName: 'CampaignErrorReason', className: $nst + '.CampaignErrorReason'}, {elementName: 'ClientTermsErrorReason', className: $nst + '.ClientTermsErrorReason'}, {elementName: 'DatabaseErrorReason', className: $nst + '.DatabaseErrorReason'}, {elementName: 'DateErrorReason', className: $nst + '.DateErrorReason'}, {elementName: 'DistinctErrorReason', className: $nst + '.DistinctErrorReason'}, {elementName: 'EntityAccessDeniedReason', className: $nst + '.EntityAccessDeniedReason'}, {elementName: 'EntityCountLimitExceededReason', className: $nst + '.EntityCountLimitExceededReason'}, {elementName: 'EntityNotFoundReason', className: $nst + '.EntityNotFoundReason'}, {elementName: 'IdErrorReason', className: $nst + '.IdErrorReason'}, {elementName: 'ImageErrorReason', className: $nst + '.ImageErrorReason'}, {elementName: 'InternalApiErrorReason', className: $nst + '.InternalApiErrorReason'}, {elementName: 'JobErrorReason', className: $nst + '.JobErrorReason'}, {elementName: 'MediaErrorReason', className: $nst + '.MediaErrorReason'}, {elementName: 'NewEntityCreationErrorReason', className: $nst + '.NewEntityCreationErrorReason'}, {elementName: 'NotEmptyErrorReason', className: $nst + '.NotEmptyErrorReason'}, {elementName: 'NotWhitelistedErrorReason', className: $nst + '.NotWhitelistedErrorReason'}, {elementName: 'NullErrorReason', className: $nst + '.NullErrorReason'}, {elementName: 'OperationAccessDeniedReason', className: $nst + '.OperationAccessDeniedReason'}, {elementName: 'OperatorErrorReason', className: $nst + '.OperatorErrorReason'}, {elementName: 'PagingErrorReason', className: $nst + '.PagingErrorReason'}, {elementName: 'PolicyViolationErrorReason', className: $nst + '.PolicyViolationErrorReason'}, {elementName: 'QuotaCheckErrorReason', className: $nst + '.QuotaCheckErrorReason'}, {elementName: 'QuotaErrorReason', className: $nst + '.QuotaErrorReason'}, {elementName: 'QuotaExceededErrorReason', className: $nst + '.QuotaExceededErrorReason'}, {elementName: 'RangeErrorReason', className: $nst + '.RangeErrorReason'}, {elementName: 'RateExceededErrorReason', className: $nst + '.RateExceededErrorReason'}, {elementName: 'ReadOnlyErrorReason', className: $nst + '.ReadOnlyErrorReason'}, {elementName: 'RegionCodeErrorReason', className: $nst + '.RegionCodeErrorReason'}, {elementName: 'RejectedErrorReason', className: $nst + '.RejectedErrorReason'}, {elementName: 'RequestErrorReason', className: $nst + '.RequestErrorReason'}, {elementName: 'RequiredErrorReason', className: $nst + '.RequiredErrorReason'}, {elementName: 'SizeLimitErrorReason', className: $nst + '.SizeLimitErrorReason'}, {elementName: 'StatsQueryErrorReason', className: $nst + '.StatsQueryErrorReason'}, {elementName: 'StringLengthErrorReason', className: $nst + '.StringLengthErrorReason'}, {elementName: 'TargetErrorReason', className: $nst + '.TargetErrorReason'}], false, true);

$nso.AdExtensionErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AdExtensionErrorReason', true, $sot);

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
$nso.AdExtensionErrorReason.PREMIUM_RATE_NUMBER_NOT_ALLOWED = 'PREMIUM_RATE_NUMBER_NOT_ALLOWED';
$nso.AdExtensionErrorReason.TOO_LONG = 'TOO_LONG';
$nso.AdExtensionErrorReason.USER_NOT_PERMITTED_TO_CREATE_LBC_SYNC_LOCATION_EXTENSION = 'USER_NOT_PERMITTED_TO_CREATE_LBC_SYNC_LOCATION_EXTENSION';

$nso.BulkMutateJobErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.BulkMutateJobErrorReason', true, $sot);

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

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.CampaignAdExtensionErrorReason', true, $sot);

$nso.CampaignAdExtensionErrorReason.ADEXTENSION_NOT_UNDER_CAMPAIGN = 'ADEXTENSION_NOT_UNDER_CAMPAIGN';
$nso.CampaignAdExtensionErrorReason.CANNOT_ADD_DELETED_CAMPAIGN_ADEXTENSION = 'CANNOT_ADD_DELETED_CAMPAIGN_ADEXTENSION';
$nso.CampaignAdExtensionErrorReason.CANNOT_OPERATE_ON_DELETED_CAMPAIGN_ADEXTENSION = 'CANNOT_OPERATE_ON_DELETED_CAMPAIGN_ADEXTENSION';
$nso.CampaignAdExtensionErrorReason.INVALID_ADEXTENSION_ID = 'INVALID_ADEXTENSION_ID';
$nso.CampaignAdExtensionErrorReason.MISSING_ADEXTENSION_ID = 'MISSING_ADEXTENSION_ID';
$nso.CampaignAdExtensionErrorReason.MUST_USE_CONCRETE_ADEXTENSION_DURING_ADD = 'MUST_USE_CONCRETE_ADEXTENSION_DURING_ADD';
$nso.CampaignAdExtensionErrorReason.MUST_USE_CONCRETE_ADEXTENSION = 'MUST_USE_CONCRETE_ADEXTENSION';
$nso.CampaignAdExtensionErrorReason.UNKNOWN_ERROR = 'UNKNOWN_ERROR';

$nso.CampaignCriterionErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.CampaignCriterionErrorReason', true, $sot);

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

$nso.JobErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.JobErrorReason', true, $sot);

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

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.PolicyViolationErrorReason', true, $sot);

$nso.PolicyViolationErrorReason.POLICY_ERROR = 'POLICY_ERROR';

$nso.QuotaExceededErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.QuotaExceededErrorReason', true, $sot);

$nso.QuotaExceededErrorReason.QUOTA_EXCEEDED = 'QUOTA_EXCEEDED';

$nso.JobStats = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.JobStats', false, $sot);
$ref.prop('progressPercent', 'integer', 'progressPercent', false, true);
$ref.prop('pendingTimeMillis', 'integer', 'pendingTimeMillis', false, true);
$ref.prop('processingTimeMillis', 'integer', 'processingTimeMillis', false, true);
$ref.prop('jobStatsType', 'string', 'JobStats.Type', false, true);

$nso.BulkMutateJobStats = function() {
  $nso.JobStats.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.BulkMutateJobStats', false, $nst + '.JobStats');
$ref.prop('numOperations', 'integer', 'numOperations', false, true);
$ref.prop('numFailedOperations', 'integer', 'numFailedOperations', false, true);
$ref.prop('numUnprocessedOperations', 'integer', 'numUnprocessedOperations', false, true);

$nso.BillingSummary = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.BillingSummary', false, $sot);
$ref.prop('numOperations', 'integer', 'numOperations', false, true);
$ref.prop('numUnits', 'integer', 'numUnits', false, true);

$nso.BulkMutateJob = function() {
  $nso.Job.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.BulkMutateJob', false, $nst + '.Job');
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

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.BulkMutateJobPolicy', false, $sot);
$ref.prop('prerequisiteJobIds', 'integer', 'prerequisiteJobIds', true, true);
$ref.prop('dummy', 'string', 'dummy', false, true);

$nso.BulkMutateRequest = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.BulkMutateRequest', false, $sot);
$ref.prop('partIndex', 'integer', 'partIndex', false, true);
$ref.prop('operationStreams', $nst + '.OperationStream', 'operationStreams', true, false);

$nso.OperationStream = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.OperationStream', false, $sot);
$ref.prop('scopingEntityId', $nst + '.EntityId', 'scopingEntityId', false, false);
$ref.prop('operations', $nst + '.Operation', 'operations', true, false);

$nso.EntityId = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.EntityId', false, $sot);
$ref.prop('type', $nst + '.EntityIdType', 'type', false, false);
$ref.prop('value', 'integer', 'value', false, true);

$nso.EntityIdType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.EntityIdType', true, $sot);

$nso.EntityIdType.ADGROUP_ID = 'ADGROUP_ID';
$nso.EntityIdType.AD_ID = 'AD_ID';
$nso.EntityIdType.CAMPAIGN_ID = 'CAMPAIGN_ID';
$nso.EntityIdType.CUSTOMER_ID = 'CUSTOMER_ID';

$nso.JobOperation = function() {
  $nso.Operation.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.JobOperation', false, $nst + '.Operation');
$ref.prop('operand', $nst + '.Job', 'operand', false, false);

$nso.CampaignCriterionOperation = function() {
  $nso.Operation.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.CampaignCriterionOperation', false, $nst + '.Operation');
$ref.prop('operand', $nst + '.CampaignCriterion', 'operand', false, false);

$nso.CampaignAdExtensionOperation = function() {
  $nso.Operation.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.CampaignAdExtensionOperation', false, $nst + '.Operation');
$ref.prop('operand', $nst + '.CampaignAdExtension', 'operand', false, false);

$nso.BasicJobStatus = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.BasicJobStatus', true, $sot);

$nso.BasicJobStatus.COMPLETED = 'COMPLETED';
$nso.BasicJobStatus.PROCESSING = 'PROCESSING';
$nso.BasicJobStatus.FAILED = 'FAILED';
$nso.BasicJobStatus.PENDING = 'PENDING';

$nso.JobEvent = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.JobEvent', false, $sot);
$ref.prop('dateTime', 'string', 'dateTime', false, true);
$ref.prop('jobEventType', 'string', 'JobEvent.Type', false, true);

$nso.BulkMutateResult = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.BulkMutateResult', false, $sot);
$ref.prop('partIndex', 'integer', 'partIndex', false, true);
$ref.prop('operationStreamResults', $nst + '.OperationStreamResult', 'operationStreamResults', true, false);

$nso.OperationStreamResult = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.OperationStreamResult', false, $sot);
$ref.prop('operationResults', $nst + '.OperationResult', 'operationResults', true, false);
$ref.prop('dummy', 'string', 'dummy', false, true);

$nso.OperationResult = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.OperationResult', false, $sot);
$ref.prop('operationResultType', 'string', 'OperationResult.Type', false, true);

$nso.UnprocessedResult = function() {
  $nso.OperationResult.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.UnprocessedResult', false, $nst + '.OperationResult');

$nso.ReturnValueResult = function() {
  $nso.OperationResult.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.ReturnValueResult', false, $nst + '.OperationResult');
$ref.prop('returnValue', $nst + '.Operand', 'returnValue', false, false);

$nso.LostResult = function() {
  $nso.OperationResult.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.LostResult', false, $nst + '.OperationResult');

$nso.FailureResult = function() {
  $nso.OperationResult.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.FailureResult', false, $nst + '.OperationResult');
$ref.prop('cause', $nst + '.ApiException', 'cause', false, false);

$nso.JobError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.JobError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.JobErrorReason', 'reason', false, false);

$nso.CampaignCriterionLimitExceeded = function() {
  $nso.EntityCountLimitExceeded.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.CampaignCriterionLimitExceeded', false, $nst + '.EntityCountLimitExceeded');
$ref.prop('limitType', $nst + '.CampaignCriterionLimitExceededCriteriaLimitType', 'limitType', false, false);

$nso.CampaignCriterionLimitExceededCriteriaLimitType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.CampaignCriterionLimitExceededCriteriaLimitType', true, $sot);

$nso.CampaignCriterionLimitExceededCriteriaLimitType.CAMPAIGN_NEGATIVE_KEYWORD = 'CAMPAIGN_NEGATIVE_KEYWORD';
$nso.CampaignCriterionLimitExceededCriteriaLimitType.CAMPAIGN_NEGATIVE_WEBSITE = 'CAMPAIGN_NEGATIVE_WEBSITE';

$nso.CampaignCriterionError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.CampaignCriterionError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.CampaignCriterionErrorReason', 'reason', false, false);

$nso.CampaignAdExtensionError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.CampaignAdExtensionError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.CampaignAdExtensionErrorReason', 'reason', false, false);

$nso.BulkMutateJobError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.BulkMutateJobError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.BulkMutateJobErrorReason', 'reason', false, false);

$nso.AdExtensionError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.AdExtensionError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.AdExtensionErrorReason', 'reason', false, false);

$nso.BatchFailureResult = function() {
  $nso.OperationResult.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.BatchFailureResult', false, $nst + '.OperationResult');
$ref.prop('operationIndexInBatch', 'integer', 'operationIndexInBatch', false, true);

$nso.JobSelector = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.JobSelector', false, $sot);
$ref.prop('customerJobKeys', 'string', 'customerJobKeys', true, true);
$ref.prop('includeJobsSubmittedByOtherUsers', 'boolean', 'includeJobsSubmittedByOtherUsers', false, true);
$ref.prop('includeHistory', 'boolean', 'includeHistory', false, true);
$ref.prop('includeStats', 'boolean', 'includeStats', false, true);
$ref.prop('jobSelectorType', 'string', 'JobSelector.Type', false, true);

$nso.BulkMutateJobSelector = function() {
  $nso.JobSelector.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.BulkMutateJobSelector', false, $nst + '.JobSelector');
$ref.prop('jobIds', 'integer', 'jobIds', true, true);
$ref.prop('jobStatuses', $nst + '.BasicJobStatus', 'jobStatuses', true, false);
$ref.prop('resultPartIndex', 'integer', 'resultPartIndex', false, true);

$nso.CampaignAdExtensionService = function() {
  $sso.call(this);
  this.nametable_ = new google.ads.adwords.v201008.SoapNametable();
};

$ref = $dsf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.CampaignAdExtensionService');
$ref.prop('requestHeader', $nst + '.RequestHeader', 'RequestHeader', false, false);
$ref.prop('responseHeader', $nst + '.ResponseHeader', 'ResponseHeader', false, false);
$ref.meth(
  'get',
  'https://adwords.google.com/api/adwords/cm/v201008',
  'https://adwords.google.com/api/adwords/cm/v201008',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.CampaignAdExtensionPage', isArray: false, isSystem: false},
  [{propertyName: 'responseHeader', direction: 'out'}, {propertyName: 'requestHeader', direction: 'in'}],
  [{className: $nst + '.CampaignAdExtensionSelector', isArray: false, isSystem: false, name: 'selector', xmlElementName: 'selector'}]
);
$ref.meth(
  'mutate',
  'https://adwords.google.com/api/adwords/cm/v201008',
  'https://adwords.google.com/api/adwords/cm/v201008',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.CampaignAdExtensionReturnValue', isArray: false, isSystem: false},
  [{propertyName: 'responseHeader', direction: 'out'}, {propertyName: 'requestHeader', direction: 'in'}],
  [{className: $nst + '.CampaignAdExtensionOperation', isArray: true, isSystem: false, name: 'operations', xmlElementName: 'operations'}]
);

$nso.CampaignAdExtensionService.prototype.get = function(selector, onsuccess, onfailure) {
  this.invoke.call(this, 'get', [selector], onsuccess, onfailure);
};

$nso.CampaignAdExtensionService.prototype.mutate = function(operations, onsuccess, onfailure) {
  this.invoke.call(this, 'mutate', [operations], onsuccess, onfailure);
};

$nso.CampaignAdExtensionReturnValue = function() {
  $nso.ListReturnValue.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.CampaignAdExtensionReturnValue', false, $nst + '.ListReturnValue');
$ref.prop('value', $nst + '.CampaignAdExtension', 'value', true, false);

$nso.CampaignAdExtensionPage = function() {
  $nso.Page.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.CampaignAdExtensionPage', false, $nst + '.Page');
$ref.prop('entries', $nst + '.CampaignAdExtension', 'entries', true, false);

$nso.CampaignAdExtensionStatsSelector = function() {
  $nso.StatsSelector.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.CampaignAdExtensionStatsSelector', false, $nst + '.StatsSelector');

$nso.CampaignAdExtensionSelector = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.CampaignAdExtensionSelector', false, $sot);
$ref.prop('statsSelector', $nst + '.CampaignAdExtensionStatsSelector', 'statsSelector', false, false);
$ref.prop('campaignIds', 'integer', 'campaignIds', true, true);
$ref.prop('adExtensionIds', 'integer', 'adExtensionIds', true, true);
$ref.prop('statuses', $nst + '.CampaignAdExtensionStatus', 'statuses', true, false);
$ref.prop('paging', $nst + '.Paging', 'paging', false, false);

$nso.CampaignCriterionService = function() {
  $sso.call(this);
  this.nametable_ = new google.ads.adwords.v201008.SoapNametable();
};

$ref = $dsf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.CampaignCriterionService');
$ref.prop('requestHeader', $nst + '.RequestHeader', 'RequestHeader', false, false);
$ref.prop('responseHeader', $nst + '.ResponseHeader', 'ResponseHeader', false, false);
$ref.meth(
  'get',
  'https://adwords.google.com/api/adwords/cm/v201008',
  'https://adwords.google.com/api/adwords/cm/v201008',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.CampaignCriterionPage', isArray: false, isSystem: false},
  [{propertyName: 'responseHeader', direction: 'out'}, {propertyName: 'requestHeader', direction: 'in'}],
  [{className: $nst + '.CampaignCriterionSelector', isArray: false, isSystem: false, name: 'selector', xmlElementName: 'selector'}]
);
$ref.meth(
  'mutate',
  'https://adwords.google.com/api/adwords/cm/v201008',
  'https://adwords.google.com/api/adwords/cm/v201008',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.CampaignCriterionReturnValue', isArray: false, isSystem: false},
  [{propertyName: 'responseHeader', direction: 'out'}, {propertyName: 'requestHeader', direction: 'in'}],
  [{className: $nst + '.CampaignCriterionOperation', isArray: true, isSystem: false, name: 'operations', xmlElementName: 'operations'}]
);

$nso.CampaignCriterionService.prototype.get = function(selector, onsuccess, onfailure) {
  this.invoke.call(this, 'get', [selector], onsuccess, onfailure);
};

$nso.CampaignCriterionService.prototype.mutate = function(operations, onsuccess, onfailure) {
  this.invoke.call(this, 'mutate', [operations], onsuccess, onfailure);
};

$nso.CampaignCriterionReturnValue = function() {
  $nso.ListReturnValue.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.CampaignCriterionReturnValue', false, $nst + '.ListReturnValue');
$ref.prop('value', $nst + '.CampaignCriterion', 'value', true, false);

$nso.CampaignCriterionPage = function() {
  $nso.Page.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.CampaignCriterionPage', false, $nst + '.Page');
$ref.prop('entries', $nst + '.CampaignCriterion', 'entries', true, false);

$nso.CampaignCriterionIdFilter = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.CampaignCriterionIdFilter', false, $sot);
$ref.prop('campaignId', 'integer', 'campaignId', false, true);
$ref.prop('criterionId', 'integer', 'criterionId', false, true);

$nso.CampaignCriterionSelector = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.CampaignCriterionSelector', false, $sot);
$ref.prop('idFilters', $nst + '.CampaignCriterionIdFilter', 'idFilters', true, false);
$ref.prop('paging', $nst + '.Paging', 'paging', false, false);

$nso.Money = function() {
  $nso.ComparableValue.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.Money', false, $nst + '.ComparableValue');
$ref.prop('microAmount', 'integer', 'microAmount', false, true);

$nso.CampaignStats = function() {
  $nso.Stats.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.CampaignStats', false, $nst + '.Stats');

$nso.PlatformTarget = function() {
  $nso.Target.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.PlatformTarget', false, $nst + '.Target');
$ref.prop('platformType', $nst + '.PlatformType', 'platformType', false, false);

$nso.Placement = function() {
  $nso.Criterion.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.Placement', false, $nst + '.Criterion');
$ref.prop('url', 'string', 'url', false, true);

$nso.BulkMutateJobEvent = function() {
  $nso.JobEvent.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.BulkMutateJobEvent', false, $nst + '.JobEvent');
$ref.prop('status', $nst + '.BasicJobStatus', 'status', false, false);


$nso.RequestHeader = function() {
  google.ads.adwords.RequestHeader.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.RequestHeader',
    false, 'google.ads.adwords.RequestHeader');


$nso.ResponseHeader = function() {
  google.ads.adwords.ResponseHeader.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201008', $nst + '.ResponseHeader',
    false, 'google.ads.adwords.ResponseHeader');


})
('google.ads.adwords.v201008');
