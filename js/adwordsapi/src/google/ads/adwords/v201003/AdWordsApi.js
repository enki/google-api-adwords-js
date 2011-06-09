goog.provide('google.ads.adwords.v201003');

goog.require('google.system.soap.Object');
goog.require('google.system.soap.ObjectType');
goog.require('google.ads.adwords.Service');
goog.require('google.system.soap.ServiceType');
goog.require('google.ads.adwords.RequestHeader');
goog.require('google.ads.adwords.ResponseHeader');
goog.require('google.ads.adwords.v201003.SoapNametable');

goog.provide('google.ads.adwords.v201003.GeoLocationService');
goog.provide('google.ads.adwords.v201003.ApiError');
goog.provide('google.ads.adwords.v201003.GeoPoint');
goog.provide('google.ads.adwords.v201003.GeoLocation');
goog.provide('google.ads.adwords.v201003.Address');
goog.provide('google.ads.adwords.v201003.InvalidGeoLocation');
goog.provide('google.ads.adwords.v201003.GeoLocationSelector');
goog.provide('google.ads.adwords.v201003.ApplicationException');
goog.provide('google.ads.adwords.v201003.StringLengthError');
goog.provide('google.ads.adwords.v201003.StringLengthErrorReason');
goog.provide('google.ads.adwords.v201003.SizeLimitError');
goog.provide('google.ads.adwords.v201003.SizeLimitErrorReason');
goog.provide('google.ads.adwords.v201003.RequiredError');
goog.provide('google.ads.adwords.v201003.RequiredErrorReason');
goog.provide('google.ads.adwords.v201003.RequestError');
goog.provide('google.ads.adwords.v201003.RequestErrorReason');
goog.provide('google.ads.adwords.v201003.RegionCodeError');
goog.provide('google.ads.adwords.v201003.RegionCodeErrorReason');
goog.provide('google.ads.adwords.v201003.RateExceededError');
goog.provide('google.ads.adwords.v201003.RateExceededErrorReason');
goog.provide('google.ads.adwords.v201003.RangeError');
goog.provide('google.ads.adwords.v201003.RangeErrorReason');
goog.provide('google.ads.adwords.v201003.QuotaCheckError');
goog.provide('google.ads.adwords.v201003.QuotaCheckErrorReason');
goog.provide('google.ads.adwords.v201003.NullError');
goog.provide('google.ads.adwords.v201003.NullErrorReason');
goog.provide('google.ads.adwords.v201003.NotWhitelistedError');
goog.provide('google.ads.adwords.v201003.NotWhitelistedErrorReason');
goog.provide('google.ads.adwords.v201003.NotEmptyError');
goog.provide('google.ads.adwords.v201003.NotEmptyErrorReason');
goog.provide('google.ads.adwords.v201003.InternalApiError');
goog.provide('google.ads.adwords.v201003.InternalApiErrorReason');
goog.provide('google.ads.adwords.v201003.GeoLocationError');
goog.provide('google.ads.adwords.v201003.GeoLocationErrorReason');
goog.provide('google.ads.adwords.v201003.ClientTermsError');
goog.provide('google.ads.adwords.v201003.ClientTermsErrorReason');
goog.provide('google.ads.adwords.v201003.AuthorizationError');
goog.provide('google.ads.adwords.v201003.AuthorizationErrorReason');
goog.provide('google.ads.adwords.v201003.AuthenticationError');
goog.provide('google.ads.adwords.v201003.AuthenticationErrorReason');
goog.provide('google.ads.adwords.v201003.AdParamService');
goog.provide('google.ads.adwords.v201003.Operation');
goog.provide('google.ads.adwords.v201003.Operator');
goog.provide('google.ads.adwords.v201003.AdParamOperation');
goog.provide('google.ads.adwords.v201003.AdParam');
goog.provide('google.ads.adwords.v201003.AdParamPage');
goog.provide('google.ads.adwords.v201003.Paging');
goog.provide('google.ads.adwords.v201003.AdParamSelector');
goog.provide('google.ads.adwords.v201003.PolicyViolationErrorPart');
goog.provide('google.ads.adwords.v201003.PolicyViolationKey');
goog.provide('google.ads.adwords.v201003.PolicyViolationError');
goog.provide('google.ads.adwords.v201003.AdParamPolicyError');
goog.provide('google.ads.adwords.v201003.DatabaseError');
goog.provide('google.ads.adwords.v201003.DatabaseErrorReason');
goog.provide('google.ads.adwords.v201003.OperatorError');
goog.provide('google.ads.adwords.v201003.OperatorErrorReason');
goog.provide('google.ads.adwords.v201003.AdParamError');
goog.provide('google.ads.adwords.v201003.AdParamErrorReason');
goog.provide('google.ads.adwords.v201003.BidLandscapeService');
goog.provide('google.ads.adwords.v201003.ComparableValue');
goog.provide('google.ads.adwords.v201003.NumberValue');
goog.provide('google.ads.adwords.v201003.LongValue');
goog.provide('google.ads.adwords.v201003.DoubleValue');
goog.provide('google.ads.adwords.v201003.Money');
goog.provide('google.ads.adwords.v201003.BidLandscapeLandscapePoint');
goog.provide('google.ads.adwords.v201003.BidLandscape');
goog.provide('google.ads.adwords.v201003.CriterionBidLandscape');
goog.provide('google.ads.adwords.v201003.BidLandscapeIdFilter');
goog.provide('google.ads.adwords.v201003.BidLandscapeSelector');
goog.provide('google.ads.adwords.v201003.CriterionBidLandscapeSelector');
goog.provide('google.ads.adwords.v201003.ReadOnlyError');
goog.provide('google.ads.adwords.v201003.ReadOnlyErrorReason');
goog.provide('google.ads.adwords.v201003.OperationAccessDenied');
goog.provide('google.ads.adwords.v201003.OperationAccessDeniedReason');
goog.provide('google.ads.adwords.v201003.BidLandscapeServiceError');
goog.provide('google.ads.adwords.v201003.BidLandscapeServiceErrorReason');
goog.provide('google.ads.adwords.v201003.MediaService');
goog.provide('google.ads.adwords.v201003.Media_MediaExtendedCapabilityType_Media_MediaExtendedCapabilityStateMapEntry');
goog.provide('google.ads.adwords.v201003.MediaMediaExtendedCapabilityType');
goog.provide('google.ads.adwords.v201003.MediaMediaExtendedCapabilityState');
goog.provide('google.ads.adwords.v201003.Media_Size_StringMapEntry');
goog.provide('google.ads.adwords.v201003.MediaSize');
goog.provide('google.ads.adwords.v201003.Dimensions');
goog.provide('google.ads.adwords.v201003.Media_Size_DimensionsMapEntry');
goog.provide('google.ads.adwords.v201003.Media');
goog.provide('google.ads.adwords.v201003.MediaMediaType');
goog.provide('google.ads.adwords.v201003.MediaMimeType');
goog.provide('google.ads.adwords.v201003.MediaMediaSubType');
goog.provide('google.ads.adwords.v201003.Video');
goog.provide('google.ads.adwords.v201003.Image');
goog.provide('google.ads.adwords.v201003.Audio');
goog.provide('google.ads.adwords.v201003.MediaPage');
goog.provide('google.ads.adwords.v201003.MediaSelector');
goog.provide('google.ads.adwords.v201003.VideoError');
goog.provide('google.ads.adwords.v201003.VideoErrorReason');
goog.provide('google.ads.adwords.v201003.NewEntityCreationError');
goog.provide('google.ads.adwords.v201003.NewEntityCreationErrorReason');
goog.provide('google.ads.adwords.v201003.MediaError');
goog.provide('google.ads.adwords.v201003.MediaErrorReason');
goog.provide('google.ads.adwords.v201003.ImageError');
goog.provide('google.ads.adwords.v201003.ImageErrorReason');
goog.provide('google.ads.adwords.v201003.EntityNotFound');
goog.provide('google.ads.adwords.v201003.EntityNotFoundReason');
goog.provide('google.ads.adwords.v201003.AudioError');
goog.provide('google.ads.adwords.v201003.AudioErrorReason');
goog.provide('google.ads.adwords.v201003.ReportDefinitionService');
goog.provide('google.ads.adwords.v201003.ReportDefinitionOperation');
goog.provide('google.ads.adwords.v201003.ReportDefinition');
goog.provide('google.ads.adwords.v201003.Selector');
goog.provide('google.ads.adwords.v201003.Predicate');
goog.provide('google.ads.adwords.v201003.PredicateOperator');
goog.provide('google.ads.adwords.v201003.DateRange');
goog.provide('google.ads.adwords.v201003.ReportDefinitionReportType');
goog.provide('google.ads.adwords.v201003.ReportDefinitionDateRangeType');
goog.provide('google.ads.adwords.v201003.DownloadFormat');
goog.provide('google.ads.adwords.v201003.ReportDefinitionField');
goog.provide('google.ads.adwords.v201003.ReportDefinitionPage');
goog.provide('google.ads.adwords.v201003.ReportDefinitionSelector');
goog.provide('google.ads.adwords.v201003.ReportDefinitionError');
goog.provide('google.ads.adwords.v201003.ReportDefinitionErrorReason');
goog.provide('google.ads.adwords.v201003.DistinctError');
goog.provide('google.ads.adwords.v201003.DistinctErrorReason');
goog.provide('google.ads.adwords.v201003.CollectionSizeError');
goog.provide('google.ads.adwords.v201003.CollectionSizeErrorReason');
goog.provide('google.ads.adwords.v201003.InfoService');
goog.provide('google.ads.adwords.v201003.ApiUsageRecord');
goog.provide('google.ads.adwords.v201003.ApiUsageInfo');
goog.provide('google.ads.adwords.v201003.InfoSelector');
goog.provide('google.ads.adwords.v201003.ApiUsageType');
goog.provide('google.ads.adwords.v201003.ApiUsageError');
goog.provide('google.ads.adwords.v201003.ApiUsageErrorReason');
goog.provide('google.ads.adwords.v201003.TargetingIdeaService');
goog.provide('google.ads.adwords.v201003.Range');
goog.provide('google.ads.adwords.v201003.WebpageDescriptor');
goog.provide('google.ads.adwords.v201003.MonthlySearchVolume');
goog.provide('google.ads.adwords.v201003.InStreamAdInfo');
goog.provide('google.ads.adwords.v201003.AdFormatSpec');
goog.provide('google.ads.adwords.v201003.SiteConstantsAdFormat');
goog.provide('google.ads.adwords.v201003.Attribute');
goog.provide('google.ads.adwords.v201003.PlacementAttribute');
goog.provide('google.ads.adwords.v201003.Criterion');
goog.provide('google.ads.adwords.v201003.Vertical');
goog.provide('google.ads.adwords.v201003.Keyword');
goog.provide('google.ads.adwords.v201003.KeywordMatchType');
goog.provide('google.ads.adwords.v201003.KeywordAttribute');
goog.provide('google.ads.adwords.v201003.LongRangeAttribute');
goog.provide('google.ads.adwords.v201003.MoneyAttribute');
goog.provide('google.ads.adwords.v201003.WebpageDescriptorAttribute');
goog.provide('google.ads.adwords.v201003.StringAttribute');
goog.provide('google.ads.adwords.v201003.PlacementTypeAttribute');
goog.provide('google.ads.adwords.v201003.SiteConstantsPlacementType');
goog.provide('google.ads.adwords.v201003.MonthlySearchVolumeAttribute');
goog.provide('google.ads.adwords.v201003.LongAttribute');
goog.provide('google.ads.adwords.v201003.IntegerSetAttribute');
goog.provide('google.ads.adwords.v201003.IntegerAttribute');
goog.provide('google.ads.adwords.v201003.InStreamAdInfoAttribute');
goog.provide('google.ads.adwords.v201003.IdeaTypeAttribute');
goog.provide('google.ads.adwords.v201003.IdeaType');
goog.provide('google.ads.adwords.v201003.DoubleAttribute');
goog.provide('google.ads.adwords.v201003.BooleanAttribute');
goog.provide('google.ads.adwords.v201003.AdFormatSpecListAttribute');
goog.provide('google.ads.adwords.v201003.Type_AttributeMapEntry');
goog.provide('google.ads.adwords.v201003.AttributeType');
goog.provide('google.ads.adwords.v201003.TargetingIdea');
goog.provide('google.ads.adwords.v201003.TargetingIdeaPage');
goog.provide('google.ads.adwords.v201003.Target');
goog.provide('google.ads.adwords.v201003.GeoTarget');
goog.provide('google.ads.adwords.v201003.ProximityTarget');
goog.provide('google.ads.adwords.v201003.ProximityTargetDistanceUnits');
goog.provide('google.ads.adwords.v201003.ProvinceTarget');
goog.provide('google.ads.adwords.v201003.PolygonTarget');
goog.provide('google.ads.adwords.v201003.MetroTarget');
goog.provide('google.ads.adwords.v201003.CountryTarget');
goog.provide('google.ads.adwords.v201003.CityTarget');
goog.provide('google.ads.adwords.v201003.DemographicTarget');
goog.provide('google.ads.adwords.v201003.GenderTarget');
goog.provide('google.ads.adwords.v201003.GenderTargetGender');
goog.provide('google.ads.adwords.v201003.AgeTarget');
goog.provide('google.ads.adwords.v201003.AgeTargetAge');
goog.provide('google.ads.adwords.v201003.PlatformTarget');
goog.provide('google.ads.adwords.v201003.PlatformType');
goog.provide('google.ads.adwords.v201003.NetworkTarget');
goog.provide('google.ads.adwords.v201003.NetworkCoverageType');
goog.provide('google.ads.adwords.v201003.MobileTarget');
goog.provide('google.ads.adwords.v201003.MobilePlatformTarget');
goog.provide('google.ads.adwords.v201003.MobileCarrierTarget');
goog.provide('google.ads.adwords.v201003.LanguageTarget');
goog.provide('google.ads.adwords.v201003.AdScheduleTarget');
goog.provide('google.ads.adwords.v201003.DayOfWeek');
goog.provide('google.ads.adwords.v201003.MinuteOfHour');
goog.provide('google.ads.adwords.v201003.LongComparisonOperation');
goog.provide('google.ads.adwords.v201003.DoubleComparisonOperation');
goog.provide('google.ads.adwords.v201003.SearchParameter');
goog.provide('google.ads.adwords.v201003.RelatedToKeywordSearchParameter');
goog.provide('google.ads.adwords.v201003.ExcludedKeywordSearchParameter');
goog.provide('google.ads.adwords.v201003.LanguageTargetSearchParameter');
goog.provide('google.ads.adwords.v201003.CountryTargetSearchParameter');
goog.provide('google.ads.adwords.v201003.GlobalMonthlySearchesSearchParameter');
goog.provide('google.ads.adwords.v201003.AverageTargetedMonthlySearchesSearchParameter');
goog.provide('google.ads.adwords.v201003.AdShareSearchParameter');
goog.provide('google.ads.adwords.v201003.SeedAdGroupIdSearchParameter');
goog.provide('google.ads.adwords.v201003.SearchShareSearchParameter');
goog.provide('google.ads.adwords.v201003.RelatedToUrlSearchParameter');
goog.provide('google.ads.adwords.v201003.PlacementTypeSearchParameter');
goog.provide('google.ads.adwords.v201003.MobileSearchParameter');
goog.provide('google.ads.adwords.v201003.KeywordMatchTypeSearchParameter');
goog.provide('google.ads.adwords.v201003.KeywordCategoryIdSearchParameter');
goog.provide('google.ads.adwords.v201003.IncludeAdultContentSearchParameter');
goog.provide('google.ads.adwords.v201003.IdeaTextMatchesSearchParameter');
goog.provide('google.ads.adwords.v201003.MatchAction');
goog.provide('google.ads.adwords.v201003.CompetitionSearchParameter');
goog.provide('google.ads.adwords.v201003.CompetitionSearchParameterLevel');
goog.provide('google.ads.adwords.v201003.AdTypeSearchParameter');
goog.provide('google.ads.adwords.v201003.SiteConstantsAdType');
goog.provide('google.ads.adwords.v201003.TargetingIdeaSelector');
goog.provide('google.ads.adwords.v201003.RequestType');
goog.provide('google.ads.adwords.v201003.CriterionPolicyError');
goog.provide('google.ads.adwords.v201003.TargetError');
goog.provide('google.ads.adwords.v201003.TargetErrorReason');
goog.provide('google.ads.adwords.v201003.StatsQueryError');
goog.provide('google.ads.adwords.v201003.StatsQueryErrorReason');
goog.provide('google.ads.adwords.v201003.EntityCountLimitExceeded');
goog.provide('google.ads.adwords.v201003.EntityCountLimitExceededReason');
goog.provide('google.ads.adwords.v201003.AdGroupCriterionLimitExceeded');
goog.provide('google.ads.adwords.v201003.AdGroupCriterionLimitExceededCriteriaLimitType');
goog.provide('google.ads.adwords.v201003.DateError');
goog.provide('google.ads.adwords.v201003.DateErrorReason');
goog.provide('google.ads.adwords.v201003.BudgetError');
goog.provide('google.ads.adwords.v201003.BudgetErrorReason');
goog.provide('google.ads.adwords.v201003.BiddingError');
goog.provide('google.ads.adwords.v201003.BiddingErrorReason');
goog.provide('google.ads.adwords.v201003.AdGroupCriterionError');
goog.provide('google.ads.adwords.v201003.AdGroupCriterionErrorReason');
goog.provide('google.ads.adwords.v201003.TargetingIdeaError');
goog.provide('google.ads.adwords.v201003.TargetingIdeaErrorReason');
goog.provide('google.ads.adwords.v201003.BulkMutateJobService');
goog.provide('google.ads.adwords.v201003.LocationOverrideInfo');
goog.provide('google.ads.adwords.v201003.LocationOverrideInfoRadiusUnits');
goog.provide('google.ads.adwords.v201003.OverrideInfo');
goog.provide('google.ads.adwords.v201003.Sitelink');
goog.provide('google.ads.adwords.v201003.AdExtension');
goog.provide('google.ads.adwords.v201003.SitelinksExtension');
goog.provide('google.ads.adwords.v201003.MobileExtension');
goog.provide('google.ads.adwords.v201003.LocationSyncExtension');
goog.provide('google.ads.adwords.v201003.LocationExtension');
goog.provide('google.ads.adwords.v201003.LocationExtensionSource');
goog.provide('google.ads.adwords.v201003.AdExtensionOverride');
goog.provide('google.ads.adwords.v201003.AdExtensionOverrideStatus');
goog.provide('google.ads.adwords.v201003.AdExtensionOverrideApprovalStatus');
goog.provide('google.ads.adwords.v201003.Stats');
goog.provide('google.ads.adwords.v201003.StatsNetwork');
goog.provide('google.ads.adwords.v201003.CampaignStats');
goog.provide('google.ads.adwords.v201003.AdStats');
goog.provide('google.ads.adwords.v201003.Operand');
goog.provide('google.ads.adwords.v201003.Ad');
goog.provide('google.ads.adwords.v201003.AdApprovalStatus');
goog.provide('google.ads.adwords.v201003.TextAd');
goog.provide('google.ads.adwords.v201003.TemplateAd');
goog.provide('google.ads.adwords.v201003.AdUnionId');
goog.provide('google.ads.adwords.v201003.TempAdUnionId');
goog.provide('google.ads.adwords.v201003.TemplateElement');
goog.provide('google.ads.adwords.v201003.TemplateElementField');
goog.provide('google.ads.adwords.v201003.TemplateElementFieldType');
goog.provide('google.ads.adwords.v201003.RichMediaAd');
goog.provide('google.ads.adwords.v201003.ThirdPartyRedirectAd');
goog.provide('google.ads.adwords.v201003.VideoType');
goog.provide('google.ads.adwords.v201003.MobileImageAd');
goog.provide('google.ads.adwords.v201003.MarkupLanguageType');
goog.provide('google.ads.adwords.v201003.MobileAd');
goog.provide('google.ads.adwords.v201003.LocalBusinessAd');
goog.provide('google.ads.adwords.v201003.ImageAd');
goog.provide('google.ads.adwords.v201003.DeprecatedAd');
goog.provide('google.ads.adwords.v201003.DeprecatedAdType');
goog.provide('google.ads.adwords.v201003.AdGroup');
goog.provide('google.ads.adwords.v201003.AdGroupStatus');
goog.provide('google.ads.adwords.v201003.AdGroupBids');
goog.provide('google.ads.adwords.v201003.ManualCPMAdGroupBids');
goog.provide('google.ads.adwords.v201003.Bid');
goog.provide('google.ads.adwords.v201003.ManualCPCAdGroupBids');
goog.provide('google.ads.adwords.v201003.ConversionOptimizerAdGroupBids');
goog.provide('google.ads.adwords.v201003.ConversionOptimizerBidType');
goog.provide('google.ads.adwords.v201003.ConversionDeduplicationMode');
goog.provide('google.ads.adwords.v201003.BudgetOptimizerAdGroupBids');
goog.provide('google.ads.adwords.v201003.AdGroupAd');
goog.provide('google.ads.adwords.v201003.AdGroupAdStatus');
goog.provide('google.ads.adwords.v201003.AdGroupCriterion');
goog.provide('google.ads.adwords.v201003.ContentLabel');
goog.provide('google.ads.adwords.v201003.ContentLabelType');
goog.provide('google.ads.adwords.v201003.NegativeAdGroupCriterion');
goog.provide('google.ads.adwords.v201003.BiddableAdGroupCriterion');
goog.provide('google.ads.adwords.v201003.UserStatus');
goog.provide('google.ads.adwords.v201003.SystemServingStatus');
goog.provide('google.ads.adwords.v201003.ApprovalStatus');
goog.provide('google.ads.adwords.v201003.AdGroupCriterionBids');
goog.provide('google.ads.adwords.v201003.ManualCPMAdGroupCriterionBids');
goog.provide('google.ads.adwords.v201003.BidSource');
goog.provide('google.ads.adwords.v201003.ManualCPCAdGroupCriterionBids');
goog.provide('google.ads.adwords.v201003.PositionPreferenceAdGroupCriterionBids');
goog.provide('google.ads.adwords.v201003.ConversionOptimizerAdGroupCriterionBids');
goog.provide('google.ads.adwords.v201003.BudgetOptimizerAdGroupCriterionBids');
goog.provide('google.ads.adwords.v201003.QualityInfo');
goog.provide('google.ads.adwords.v201003.Campaign');
goog.provide('google.ads.adwords.v201003.CampaignStatus');
goog.provide('google.ads.adwords.v201003.ServingStatus');
goog.provide('google.ads.adwords.v201003.Budget');
goog.provide('google.ads.adwords.v201003.BudgetBudgetPeriod');
goog.provide('google.ads.adwords.v201003.BudgetBudgetDeliveryMethod');
goog.provide('google.ads.adwords.v201003.BiddingStrategy');
goog.provide('google.ads.adwords.v201003.ManualCPM');
goog.provide('google.ads.adwords.v201003.ManualCPC');
goog.provide('google.ads.adwords.v201003.PositionPreference');
goog.provide('google.ads.adwords.v201003.ConversionOptimizer');
goog.provide('google.ads.adwords.v201003.PricingModel');
goog.provide('google.ads.adwords.v201003.BudgetOptimizer');
goog.provide('google.ads.adwords.v201003.AutoKeywordMatchingStatus');
goog.provide('google.ads.adwords.v201003.AdServingOptimizationStatus');
goog.provide('google.ads.adwords.v201003.FrequencyCap');
goog.provide('google.ads.adwords.v201003.TimeUnit');
goog.provide('google.ads.adwords.v201003.Level');
goog.provide('google.ads.adwords.v201003.CampaignCriterion');
goog.provide('google.ads.adwords.v201003.NegativeCampaignCriterion');
goog.provide('google.ads.adwords.v201003.Job');
goog.provide('google.ads.adwords.v201003.JobContext');
goog.provide('google.ads.adwords.v201003.ApiErrorReason');
goog.provide('google.ads.adwords.v201003.AdErrorReason');
goog.provide('google.ads.adwords.v201003.AdGroupAdErrorReason');
goog.provide('google.ads.adwords.v201003.AdGroupServiceErrorReason');
goog.provide('google.ads.adwords.v201003.BiddingTransitionErrorReason');
goog.provide('google.ads.adwords.v201003.BulkMutateJobErrorReason');
goog.provide('google.ads.adwords.v201003.CampaignCriterionErrorReason');
goog.provide('google.ads.adwords.v201003.CampaignErrorReason');
goog.provide('google.ads.adwords.v201003.EntityAccessDeniedReason');
goog.provide('google.ads.adwords.v201003.IdErrorReason');
goog.provide('google.ads.adwords.v201003.JobErrorReason');
goog.provide('google.ads.adwords.v201003.LoasAuthenticationErrorReason');
goog.provide('google.ads.adwords.v201003.PagingErrorReason');
goog.provide('google.ads.adwords.v201003.PolicyViolationErrorReason');
goog.provide('google.ads.adwords.v201003.QuotaErrorReason');
goog.provide('google.ads.adwords.v201003.QuotaExceededErrorReason');
goog.provide('google.ads.adwords.v201003.RejectedErrorReason');
goog.provide('google.ads.adwords.v201003.JobStats');
goog.provide('google.ads.adwords.v201003.BulkMutateJobStats');
goog.provide('google.ads.adwords.v201003.BillingSummary');
goog.provide('google.ads.adwords.v201003.BulkMutateJob');
goog.provide('google.ads.adwords.v201003.BulkMutateJobPolicy');
goog.provide('google.ads.adwords.v201003.BulkMutateRequest');
goog.provide('google.ads.adwords.v201003.OperationStream');
goog.provide('google.ads.adwords.v201003.EntityId');
goog.provide('google.ads.adwords.v201003.EntityIdType');
goog.provide('google.ads.adwords.v201003.JobOperation');
goog.provide('google.ads.adwords.v201003.CampaignTargetOperation');
goog.provide('google.ads.adwords.v201003.TargetList');
goog.provide('google.ads.adwords.v201003.PlatformTargetList');
goog.provide('google.ads.adwords.v201003.NetworkTargetList');
goog.provide('google.ads.adwords.v201003.MobileTargetList');
goog.provide('google.ads.adwords.v201003.LanguageTargetList');
goog.provide('google.ads.adwords.v201003.GeoTargetList');
goog.provide('google.ads.adwords.v201003.DemographicTargetList');
goog.provide('google.ads.adwords.v201003.AdScheduleTargetList');
goog.provide('google.ads.adwords.v201003.CampaignOperation');
goog.provide('google.ads.adwords.v201003.BiddingTransition');
goog.provide('google.ads.adwords.v201003.ConversionOptimizerBiddingTransition');
goog.provide('google.ads.adwords.v201003.CampaignCriterionOperation');
goog.provide('google.ads.adwords.v201003.AdGroupOperation');
goog.provide('google.ads.adwords.v201003.AdGroupCriterionOperation');
goog.provide('google.ads.adwords.v201003.ExemptionRequest');
goog.provide('google.ads.adwords.v201003.AdGroupAdOperation');
goog.provide('google.ads.adwords.v201003.BasicJobStatus');
goog.provide('google.ads.adwords.v201003.JobEvent');
goog.provide('google.ads.adwords.v201003.BulkMutateResult');
goog.provide('google.ads.adwords.v201003.OperationStreamResult');
goog.provide('google.ads.adwords.v201003.OperationResult');
goog.provide('google.ads.adwords.v201003.UnprocessedResult');
goog.provide('google.ads.adwords.v201003.ReturnValueResult');
goog.provide('google.ads.adwords.v201003.LostResult');
goog.provide('google.ads.adwords.v201003.FailureResult');
goog.provide('google.ads.adwords.v201003.BatchFailureResult');
goog.provide('google.ads.adwords.v201003.JobSelector');
goog.provide('google.ads.adwords.v201003.BulkMutateJobSelector');
goog.provide('google.ads.adwords.v201003.RejectedError');
goog.provide('google.ads.adwords.v201003.QuotaError');
goog.provide('google.ads.adwords.v201003.PagingError');
goog.provide('google.ads.adwords.v201003.JobError');
goog.provide('google.ads.adwords.v201003.IdError');
goog.provide('google.ads.adwords.v201003.CampaignCriterionLimitExceeded');
goog.provide('google.ads.adwords.v201003.CampaignCriterionLimitExceededCriteriaLimitType');
goog.provide('google.ads.adwords.v201003.AdGroupAdCountLimitExceeded');
goog.provide('google.ads.adwords.v201003.EntityAccessDenied');
goog.provide('google.ads.adwords.v201003.CampaignError');
goog.provide('google.ads.adwords.v201003.CampaignCriterionError');
goog.provide('google.ads.adwords.v201003.BulkMutateJobError');
goog.provide('google.ads.adwords.v201003.BiddingTransitionError');
goog.provide('google.ads.adwords.v201003.AdGroupServiceError');
goog.provide('google.ads.adwords.v201003.AdGroupAdError');
goog.provide('google.ads.adwords.v201003.AdError');
goog.provide('google.ads.adwords.v201003.AdExtensionOverrideService');
goog.provide('google.ads.adwords.v201003.ListReturnValue');
goog.provide('google.ads.adwords.v201003.AdExtensionOverrideReturnValue');
goog.provide('google.ads.adwords.v201003.AdExtensionOverrideOperation');
goog.provide('google.ads.adwords.v201003.Page');
goog.provide('google.ads.adwords.v201003.AdExtensionOverridePage');
goog.provide('google.ads.adwords.v201003.AdExtensionOverrideSelector');
goog.provide('google.ads.adwords.v201003.AdExtensionOverrideError');
goog.provide('google.ads.adwords.v201003.AdExtensionOverrideErrorReason');
goog.provide('google.ads.adwords.v201003.AdGroupAdService');
goog.provide('google.ads.adwords.v201003.AdGroupAdReturnValue');
goog.provide('google.ads.adwords.v201003.AdGroupAdPage');
goog.provide('google.ads.adwords.v201003.StatsSelector');
goog.provide('google.ads.adwords.v201003.AdStatsSelector');
goog.provide('google.ads.adwords.v201003.AdGroupAdSelector');
goog.provide('google.ads.adwords.v201003.AdGroupCriterionService');
goog.provide('google.ads.adwords.v201003.AdGroupCriterionReturnValue');
goog.provide('google.ads.adwords.v201003.AdGroupCriterionPage');
goog.provide('google.ads.adwords.v201003.AdGroupCriterionIdFilter');
goog.provide('google.ads.adwords.v201003.AdGroupCriterionSelector');
goog.provide('google.ads.adwords.v201003.CriterionUse');
goog.provide('google.ads.adwords.v201003.AdGroupService');
goog.provide('google.ads.adwords.v201003.AdGroupReturnValue');
goog.provide('google.ads.adwords.v201003.AdGroupPage');
goog.provide('google.ads.adwords.v201003.AdGroupSelector');
goog.provide('google.ads.adwords.v201003.CampaignAdExtensionService');
goog.provide('google.ads.adwords.v201003.CampaignAdExtensionReturnValue');
goog.provide('google.ads.adwords.v201003.CampaignAdExtension');
goog.provide('google.ads.adwords.v201003.CampaignAdExtensionStatus');
goog.provide('google.ads.adwords.v201003.CampaignAdExtensionApprovalStatus');
goog.provide('google.ads.adwords.v201003.CampaignAdExtensionOperation');
goog.provide('google.ads.adwords.v201003.CampaignAdExtensionPage');
goog.provide('google.ads.adwords.v201003.CampaignAdExtensionStatsSelector');
goog.provide('google.ads.adwords.v201003.CampaignAdExtensionSelector');
goog.provide('google.ads.adwords.v201003.CampaignAdExtensionError');
goog.provide('google.ads.adwords.v201003.CampaignAdExtensionErrorReason');
goog.provide('google.ads.adwords.v201003.AdExtensionError');
goog.provide('google.ads.adwords.v201003.AdExtensionErrorReason');
goog.provide('google.ads.adwords.v201003.CampaignCriterionService');
goog.provide('google.ads.adwords.v201003.CampaignCriterionReturnValue');
goog.provide('google.ads.adwords.v201003.CampaignCriterionPage');
goog.provide('google.ads.adwords.v201003.CampaignCriterionIdFilter');
goog.provide('google.ads.adwords.v201003.CampaignCriterionSelector');
goog.provide('google.ads.adwords.v201003.CampaignService');
goog.provide('google.ads.adwords.v201003.CampaignReturnValue');
goog.provide('google.ads.adwords.v201003.CampaignPage');
goog.provide('google.ads.adwords.v201003.CampaignSelector');
goog.provide('google.ads.adwords.v201003.CampaignTargetService');
goog.provide('google.ads.adwords.v201003.CampaignTargetReturnValue');
goog.provide('google.ads.adwords.v201003.CampaignTargetPage');
goog.provide('google.ads.adwords.v201003.CampaignTargetSelector');
goog.provide('google.ads.adwords.v201003.ApiException');
goog.provide('google.ads.adwords.v201003.Placement');
goog.provide('google.ads.adwords.v201003.AdExtensionOverrideStats');
goog.provide('google.ads.adwords.v201003.BulkMutateJobEvent');
goog.provide('google.ads.adwords.v201003.RequestHeader');
goog.provide('google.ads.adwords.v201003.ResponseHeader');

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
$nso.GeoLocationService = function() {
  $sso.call(this);
  this.nametable_ = new google.ads.adwords.v201003.SoapNametable();
};

$ref = $dsf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.GeoLocationService');
$ref.prop('requestHeader', $nst + '.RequestHeader', 'RequestHeader', false, false);
$ref.prop('responseHeader', $nst + '.ResponseHeader', 'ResponseHeader', false, false);
$ref.meth(
  'get',
  'https://adwords.google.com/api/adwords/cm/v201003',
  'https://adwords.google.com/api/adwords/cm/v201003',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.GeoLocation', isArray: true, isSystem: false},
  [{propertyName: 'requestHeader', direction: 'in'}, {propertyName: 'responseHeader', direction: 'out'}],
  [{className: $nst + '.GeoLocationSelector', isArray: false, isSystem: false, name: 'selector', xmlElementName: 'selector'}]
);

$nso.GeoLocationService.prototype.get = function(selector, onsuccess, onfailure) {
  this.invoke.call(this, 'get', [selector], onsuccess, onfailure);
};

$nso.ApiError = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.ApiError', false, $sot);
$ref.prop('fieldPath', 'string', 'fieldPath', false, true);
$ref.prop('trigger', 'string', 'trigger', false, true);
$ref.prop('errorString', 'string', 'errorString', false, true);
$ref.prop('apiErrorType', 'string', 'ApiError.Type', false, true);

$nso.GeoPoint = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.GeoPoint', false, $sot);
$ref.prop('latitudeInMicroDegrees', 'integer', 'latitudeInMicroDegrees', false, true);
$ref.prop('longitudeInMicroDegrees', 'integer', 'longitudeInMicroDegrees', false, true);

$nso.GeoLocation = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.GeoLocation', false, $sot);
$ref.prop('geoPoint', $nst + '.GeoPoint', 'geoPoint', false, false);
$ref.prop('address', $nst + '.Address', 'address', false, false);
$ref.prop('encodedLocation', 'byte', 'encodedLocation', true, true);
$ref.prop('geoLocationType', 'string', 'GeoLocation.Type', false, true);

$nso.Address = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.Address', false, $sot);
$ref.prop('streetAddress', 'string', 'streetAddress', false, true);
$ref.prop('streetAddress2', 'string', 'streetAddress2', false, true);
$ref.prop('cityName', 'string', 'cityName', false, true);
$ref.prop('provinceCode', 'string', 'provinceCode', false, true);
$ref.prop('provinceName', 'string', 'provinceName', false, true);
$ref.prop('postalCode', 'string', 'postalCode', false, true);
$ref.prop('countryCode', 'string', 'countryCode', false, true);

$nso.InvalidGeoLocation = function() {
  $nso.GeoLocation.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.InvalidGeoLocation', false, $nst + '.GeoLocation');

$nso.GeoLocationSelector = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.GeoLocationSelector', false, $sot);
$ref.prop('addresses', $nst + '.Address', 'addresses', true, false);
$ref.prop('dummy', 'string', 'dummy', false, true);

$nso.ApplicationException = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.ApplicationException', false, $sot);
$ref.prop('message', 'string', 'message', false, true);
$ref.prop('applicationExceptionType', 'string', 'ApplicationException.Type', false, true);

$nso.StringLengthError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.StringLengthError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.StringLengthErrorReason', 'reason', false, false);

$nso.StringLengthErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.StringLengthErrorReason', true, $sot);

$nso.StringLengthErrorReason.TOO_SHORT = 'TOO_SHORT';
$nso.StringLengthErrorReason.TOO_LONG = 'TOO_LONG';

$nso.SizeLimitError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.SizeLimitError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.SizeLimitErrorReason', 'reason', false, false);

$nso.SizeLimitErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.SizeLimitErrorReason', true, $sot);

$nso.SizeLimitErrorReason.REQUEST_SIZE_LIMIT_EXCEEDED = 'REQUEST_SIZE_LIMIT_EXCEEDED';
$nso.SizeLimitErrorReason.RESPONSE_SIZE_LIMIT_EXCEEDED = 'RESPONSE_SIZE_LIMIT_EXCEEDED';
$nso.SizeLimitErrorReason.UNKNOWN = 'UNKNOWN';

$nso.RequiredError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.RequiredError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.RequiredErrorReason', 'reason', false, false);

$nso.RequiredErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.RequiredErrorReason', true, $sot);

$nso.RequiredErrorReason.REQUIRED = 'REQUIRED';

$nso.RequestError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.RequestError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.RequestErrorReason', 'reason', false, false);

$nso.RequestErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.RequestErrorReason', true, $sot);

$nso.RequestErrorReason.UNKNOWN = 'UNKNOWN';
$nso.RequestErrorReason.INVALID_INPUT = 'INVALID_INPUT';

$nso.RegionCodeError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.RegionCodeError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.RegionCodeErrorReason', 'reason', false, false);

$nso.RegionCodeErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.RegionCodeErrorReason', true, $sot);

$nso.RegionCodeErrorReason.INVALID_REGION_CODE = 'INVALID_REGION_CODE';

$nso.RateExceededError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.RateExceededError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.RateExceededErrorReason', 'reason', false, false);
$ref.prop('rateName', 'string', 'rateName', false, true);
$ref.prop('rateScope', 'string', 'rateScope', false, true);
$ref.prop('retryAfterSeconds', 'integer', 'retryAfterSeconds', false, true);

$nso.RateExceededErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.RateExceededErrorReason', true, $sot);

$nso.RateExceededErrorReason.RATE_EXCEEDED = 'RATE_EXCEEDED';

$nso.RangeError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.RangeError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.RangeErrorReason', 'reason', false, false);

$nso.RangeErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.RangeErrorReason', true, $sot);

$nso.RangeErrorReason.TOO_LOW = 'TOO_LOW';
$nso.RangeErrorReason.TOO_HIGH = 'TOO_HIGH';

$nso.QuotaCheckError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.QuotaCheckError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.QuotaCheckErrorReason', 'reason', false, false);

$nso.QuotaCheckErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.QuotaCheckErrorReason', true, $sot);

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

$nso.NullError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.NullError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.NullErrorReason', 'reason', false, false);

$nso.NullErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.NullErrorReason', true, $sot);

$nso.NullErrorReason.NULL_CONTENT = 'NULL_CONTENT';

$nso.NotWhitelistedError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.NotWhitelistedError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.NotWhitelistedErrorReason', 'reason', false, false);

$nso.NotWhitelistedErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.NotWhitelistedErrorReason', true, $sot);

$nso.NotWhitelistedErrorReason.CUSTOMER_NOT_WHITELISTED_FOR_API = 'CUSTOMER_NOT_WHITELISTED_FOR_API';

$nso.NotEmptyError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.NotEmptyError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.NotEmptyErrorReason', 'reason', false, false);

$nso.NotEmptyErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.NotEmptyErrorReason', true, $sot);

$nso.NotEmptyErrorReason.EMPTY_LIST = 'EMPTY_LIST';

$nso.InternalApiError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.InternalApiError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.InternalApiErrorReason', 'reason', false, false);

$nso.InternalApiErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.InternalApiErrorReason', true, $sot);

$nso.InternalApiErrorReason.UNEXPECTED_INTERNAL_API_ERROR = 'UNEXPECTED_INTERNAL_API_ERROR';
$nso.InternalApiErrorReason.UNKNOWN = 'UNKNOWN';

$nso.GeoLocationError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.GeoLocationError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.GeoLocationErrorReason', 'reason', false, false);

$nso.GeoLocationErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.GeoLocationErrorReason', true, $sot);

$nso.GeoLocationErrorReason.UNKNOWN = 'UNKNOWN';

$nso.ClientTermsError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.ClientTermsError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.ClientTermsErrorReason', 'reason', false, false);

$nso.ClientTermsErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.ClientTermsErrorReason', true, $sot);

$nso.ClientTermsErrorReason.INCOMPLETE_SIGNUP_CURRENT_ADWORDS_TNC_NOT_AGREED = 'INCOMPLETE_SIGNUP_CURRENT_ADWORDS_TNC_NOT_AGREED';

$nso.AuthorizationError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AuthorizationError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.AuthorizationErrorReason', 'reason', false, false);

$nso.AuthorizationErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AuthorizationErrorReason', true, $sot);

$nso.AuthorizationErrorReason.UNABLE_TO_AUTHORIZE = 'UNABLE_TO_AUTHORIZE';
$nso.AuthorizationErrorReason.NO_ADWORDS_ACCOUNT_FOR_CUSTOMER = 'NO_ADWORDS_ACCOUNT_FOR_CUSTOMER';
$nso.AuthorizationErrorReason.USER_PERMISSION_DENIED = 'USER_PERMISSION_DENIED';
$nso.AuthorizationErrorReason.EFFECTIVE_USER_PERMISSION_DENIED = 'EFFECTIVE_USER_PERMISSION_DENIED';
$nso.AuthorizationErrorReason.USER_HAS_READONLY_PERMISSION = 'USER_HAS_READONLY_PERMISSION';
$nso.AuthorizationErrorReason.NO_CUSTOMER_FOUND = 'NO_CUSTOMER_FOUND';

$nso.AuthenticationError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AuthenticationError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.AuthenticationErrorReason', 'reason', false, false);

$nso.AuthenticationErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AuthenticationErrorReason', true, $sot);

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

$nso.AdParamService = function() {
  $sso.call(this);
  this.nametable_ = new google.ads.adwords.v201003.SoapNametable();
};

$ref = $dsf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AdParamService');
$ref.prop('requestHeader', $nst + '.RequestHeader', 'RequestHeader', false, false);
$ref.prop('responseHeader', $nst + '.ResponseHeader', 'ResponseHeader', false, false);
$ref.meth(
  'get',
  'https://adwords.google.com/api/adwords/cm/v201003',
  'https://adwords.google.com/api/adwords/cm/v201003',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.AdParamPage', isArray: false, isSystem: false},
  [{propertyName: 'requestHeader', direction: 'in'}, {propertyName: 'responseHeader', direction: 'out'}],
  [{className: $nst + '.AdParamSelector', isArray: false, isSystem: false, name: 'selector', xmlElementName: 'selector'}]
);
$ref.meth(
  'mutate',
  'https://adwords.google.com/api/adwords/cm/v201003',
  'https://adwords.google.com/api/adwords/cm/v201003',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.AdParam', isArray: true, isSystem: false},
  [{propertyName: 'requestHeader', direction: 'in'}, {propertyName: 'responseHeader', direction: 'out'}],
  [{className: $nst + '.AdParamOperation', isArray: true, isSystem: false, name: 'operations', xmlElementName: 'operations'}]
);

$nso.AdParamService.prototype.get = function(selector, onsuccess, onfailure) {
  this.invoke.call(this, 'get', [selector], onsuccess, onfailure);
};

$nso.AdParamService.prototype.mutate = function(operations, onsuccess, onfailure) {
  this.invoke.call(this, 'mutate', [operations], onsuccess, onfailure);
};

$nso.Operation = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.Operation', false, $sot);
$ref.prop('operator', $nst + '.Operator', 'operator', false, false);
$ref.prop('operationType', 'string', 'Operation.Type', false, true);

$nso.Operator = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.Operator', true, $sot);

$nso.Operator.ADD = 'ADD';
$nso.Operator.REMOVE = 'REMOVE';
$nso.Operator.SET = 'SET';

$nso.AdParamOperation = function() {
  $nso.Operation.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AdParamOperation', false, $nst + '.Operation');
$ref.prop('operand', $nst + '.AdParam', 'operand', false, false);

$nso.AdParam = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AdParam', false, $sot);
$ref.prop('adGroupId', 'integer', 'adGroupId', false, true);
$ref.prop('criterionId', 'integer', 'criterionId', false, true);
$ref.prop('insertionText', 'string', 'insertionText', false, true);
$ref.prop('paramIndex', 'integer', 'paramIndex', false, true);

$nso.AdParamPage = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AdParamPage', false, $sot);
$ref.prop('entries', $nst + '.AdParam', 'entries', true, false);
$ref.prop('totalNumEntries', 'integer', 'totalNumEntries', false, true);

$nso.Paging = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.Paging', false, $sot);
$ref.prop('startIndex', 'integer', 'startIndex', false, true);
$ref.prop('numberResults', 'integer', 'numberResults', false, true);

$nso.AdParamSelector = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AdParamSelector', false, $sot);
$ref.prop('adGroupIds', 'integer', 'adGroupIds', true, true);
$ref.prop('criteriaId', 'integer', 'criteriaId', true, true);
$ref.prop('paging', $nst + '.Paging', 'paging', false, false);

$nso.PolicyViolationErrorPart = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.PolicyViolationErrorPart', false, $sot);
$ref.prop('index', 'integer', 'index', false, true);
$ref.prop('length', 'integer', 'length', false, true);

$nso.PolicyViolationKey = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.PolicyViolationKey', false, $sot);
$ref.prop('policyName', 'string', 'policyName', false, true);
$ref.prop('violatingText', 'string', 'violatingText', false, true);

$nso.PolicyViolationError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.PolicyViolationError', false, $nst + '.ApiError');
$ref.prop('key', $nst + '.PolicyViolationKey', 'key', false, false);
$ref.prop('externalPolicyName', 'string', 'externalPolicyName', false, true);
$ref.prop('externalPolicyUrl', 'string', 'externalPolicyUrl', false, true);
$ref.prop('externalPolicyDescription', 'string', 'externalPolicyDescription', false, true);
$ref.prop('isExemptable', 'boolean', 'isExemptable', false, true);
$ref.prop('violatingParts', $nst + '.PolicyViolationErrorPart', 'violatingParts', true, false);

$nso.AdParamPolicyError = function() {
  $nso.PolicyViolationError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AdParamPolicyError', false, $nst + '.PolicyViolationError');

$nso.DatabaseError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.DatabaseError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.DatabaseErrorReason', 'reason', false, false);

$nso.DatabaseErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.DatabaseErrorReason', true, $sot);

$nso.DatabaseErrorReason.CONCURRENT_MODIFICATION = 'CONCURRENT_MODIFICATION';
$nso.DatabaseErrorReason.PERMISSION_DENIED = 'PERMISSION_DENIED';
$nso.DatabaseErrorReason.CAMPAIGN_PRODUCT_NOT_SUPPORTED = 'CAMPAIGN_PRODUCT_NOT_SUPPORTED';
$nso.DatabaseErrorReason.DUPLICATE_KEY = 'DUPLICATE_KEY';
$nso.DatabaseErrorReason.DATABASE_ERROR = 'DATABASE_ERROR';
$nso.DatabaseErrorReason.UNKNOWN = 'UNKNOWN';

$nso.OperatorError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.OperatorError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.OperatorErrorReason', 'reason', false, false);

$nso.OperatorErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.OperatorErrorReason', true, $sot);

$nso.OperatorErrorReason.OPERATOR_NOT_SUPPORTED = 'OPERATOR_NOT_SUPPORTED';

$nso.AdParamError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AdParamError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.AdParamErrorReason', 'reason', false, false);

$nso.AdParamErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AdParamErrorReason', true, $sot);

$nso.AdParamErrorReason.AD_PARAM_CANNOT_BE_SPECIFIED_MULTIPLE_TIMES = 'AD_PARAM_CANNOT_BE_SPECIFIED_MULTIPLE_TIMES';
$nso.AdParamErrorReason.AD_PARAM_DOES_NOT_EXIST = 'AD_PARAM_DOES_NOT_EXIST';
$nso.AdParamErrorReason.CRITERION_SPECIFIED_MUST_BE_KEYWORD = 'CRITERION_SPECIFIED_MUST_BE_KEYWORD';
$nso.AdParamErrorReason.INVALID_ADGROUP_CRITERION_SPECIFIED = 'INVALID_ADGROUP_CRITERION_SPECIFIED';
$nso.AdParamErrorReason.INVALID_INSERTION_TEXT_FORMAT = 'INVALID_INSERTION_TEXT_FORMAT';
$nso.AdParamErrorReason.MUST_SPECIFY_ADGROUP_ID = 'MUST_SPECIFY_ADGROUP_ID';
$nso.AdParamErrorReason.UNKNOWN = 'UNKNOWN';

$nso.BidLandscapeService = function() {
  $sso.call(this);
  this.nametable_ = new google.ads.adwords.v201003.SoapNametable();
};

$ref = $dsf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.BidLandscapeService');
$ref.prop('requestHeader', $nst + '.RequestHeader', 'RequestHeader', false, false);
$ref.prop('responseHeader', $nst + '.ResponseHeader', 'ResponseHeader', false, false);
$ref.meth(
  'getBidLandscape',
  'https://adwords.google.com/api/adwords/cm/v201003',
  'https://adwords.google.com/api/adwords/cm/v201003',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.BidLandscape', isArray: true, isSystem: false},
  [{propertyName: 'requestHeader', direction: 'in'}, {propertyName: 'responseHeader', direction: 'out'}],
  [{className: $nst + '.BidLandscapeSelector', isArray: false, isSystem: false, name: 'selector', xmlElementName: 'selector'}]
);

$nso.BidLandscapeService.prototype.getBidLandscape = function(selector, onsuccess, onfailure) {
  this.invoke.call(this, 'getBidLandscape', [selector], onsuccess, onfailure);
};

$nso.ComparableValue = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.ComparableValue', false, $sot);
$ref.prop('comparableValueType', 'string', 'ComparableValue.Type', false, true);

$nso.NumberValue = function() {
  $nso.ComparableValue.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.NumberValue', false, $nst + '.ComparableValue');

$nso.LongValue = function() {
  $nso.NumberValue.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.LongValue', false, $nst + '.NumberValue');
$ref.prop('number', 'integer', 'number', false, true);

$nso.DoubleValue = function() {
  $nso.NumberValue.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.DoubleValue', false, $nst + '.NumberValue');
$ref.prop('number', 'double', 'number', false, true);

$nso.Money = function() {
  $nso.ComparableValue.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.Money', false, $nst + '.ComparableValue');
$ref.prop('microAmount', 'integer', 'microAmount', false, true);

$nso.BidLandscapeLandscapePoint = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.BidLandscapeLandscapePoint', false, $sot);
$ref.prop('bid', $nst + '.Money', 'bid', false, false);
$ref.prop('clicks', 'integer', 'clicks', false, true);
$ref.prop('cost', $nst + '.Money', 'cost', false, false);
$ref.prop('marginalCpc', $nst + '.Money', 'marginalCpc', false, false);
$ref.prop('impressions', 'integer', 'impressions', false, true);

$nso.BidLandscape = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.BidLandscape', false, $sot);
$ref.prop('campaignId', 'integer', 'campaignId', false, true);
$ref.prop('adGroupId', 'integer', 'adGroupId', false, true);
$ref.prop('startDate', 'string', 'startDate', false, true);
$ref.prop('endDate', 'string', 'endDate', false, true);
$ref.prop('landscapePoints', $nst + '.BidLandscapeLandscapePoint', 'landscapePoints', true, false);
$ref.prop('bidLandscapeType', 'string', 'BidLandscape.Type', false, true);

$nso.CriterionBidLandscape = function() {
  $nso.BidLandscape.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.CriterionBidLandscape', false, $nst + '.BidLandscape');
$ref.prop('criterionId', 'integer', 'criterionId', false, true);

$nso.BidLandscapeIdFilter = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.BidLandscapeIdFilter', false, $sot);
$ref.prop('campaignId', 'integer', 'campaignId', false, true);
$ref.prop('adGroupId', 'integer', 'adGroupId', false, true);
$ref.prop('criterionId', 'integer', 'criterionId', false, true);

$nso.BidLandscapeSelector = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.BidLandscapeSelector', false, $sot);
$ref.prop('idFilters', $nst + '.BidLandscapeIdFilter', 'idFilters', true, false);
$ref.prop('bidLandscapeSelectorType', 'string', 'BidLandscapeSelector.Type', false, true);

$nso.CriterionBidLandscapeSelector = function() {
  $nso.BidLandscapeSelector.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.CriterionBidLandscapeSelector', false, $nst + '.BidLandscapeSelector');

$nso.ReadOnlyError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.ReadOnlyError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.ReadOnlyErrorReason', 'reason', false, false);

$nso.ReadOnlyErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.ReadOnlyErrorReason', true, $sot);

$nso.ReadOnlyErrorReason.READ_ONLY = 'READ_ONLY';

$nso.OperationAccessDenied = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.OperationAccessDenied', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.OperationAccessDeniedReason', 'reason', false, false);

$nso.OperationAccessDeniedReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.OperationAccessDeniedReason', true, $sot);

$nso.OperationAccessDeniedReason.ACTION_NOT_PERMITTED = 'ACTION_NOT_PERMITTED';
$nso.OperationAccessDeniedReason.ADD_OPERATION_NOT_PERMITTED = 'ADD_OPERATION_NOT_PERMITTED';
$nso.OperationAccessDeniedReason.REMOVE_OPERATION_NOT_PERMITTED = 'REMOVE_OPERATION_NOT_PERMITTED';
$nso.OperationAccessDeniedReason.SET_OPERATION_NOT_PERMITTED = 'SET_OPERATION_NOT_PERMITTED';
$nso.OperationAccessDeniedReason.UNKNOWN = 'UNKNOWN';

$nso.BidLandscapeServiceError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.BidLandscapeServiceError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.BidLandscapeServiceErrorReason', 'reason', false, false);

$nso.BidLandscapeServiceErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.BidLandscapeServiceErrorReason', true, $sot);

$nso.BidLandscapeServiceErrorReason.ID_FILTERS_HAVE_DIFF_FIELDS_SET = 'ID_FILTERS_HAVE_DIFF_FIELDS_SET';
$nso.BidLandscapeServiceErrorReason.INVALID_ID_FILTER_TYPE = 'INVALID_ID_FILTER_TYPE';
$nso.BidLandscapeServiceErrorReason.INVALID_SELECTOR = 'INVALID_SELECTOR';

$nso.MediaService = function() {
  $sso.call(this);
  this.nametable_ = new google.ads.adwords.v201003.SoapNametable();
};

$ref = $dsf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.MediaService');
$ref.prop('requestHeader', $nst + '.RequestHeader', 'RequestHeader', false, false);
$ref.prop('responseHeader', $nst + '.ResponseHeader', 'ResponseHeader', false, false);
$ref.meth(
  'get',
  'https://adwords.google.com/api/adwords/cm/v201003',
  'https://adwords.google.com/api/adwords/cm/v201003',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.MediaPage', isArray: false, isSystem: false},
  [{propertyName: 'requestHeader', direction: 'in'}, {propertyName: 'responseHeader', direction: 'out'}],
  [{className: $nst + '.MediaSelector', isArray: false, isSystem: false, name: 'selector', xmlElementName: 'selector'}]
);
$ref.meth(
  'upload',
  'https://adwords.google.com/api/adwords/cm/v201003',
  'https://adwords.google.com/api/adwords/cm/v201003',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.Media', isArray: true, isSystem: false},
  [{propertyName: 'requestHeader', direction: 'in'}, {propertyName: 'responseHeader', direction: 'out'}],
  [{className: $nst + '.Media', isArray: true, isSystem: false, name: 'media', xmlElementName: 'media'}]
);

$nso.MediaService.prototype.get = function(selector, onsuccess, onfailure) {
  this.invoke.call(this, 'get', [selector], onsuccess, onfailure);
};

$nso.MediaService.prototype.upload = function(media, onsuccess, onfailure) {
  this.invoke.call(this, 'upload', [media], onsuccess, onfailure);
};

$nso.Media_MediaExtendedCapabilityType_Media_MediaExtendedCapabilityStateMapEntry = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.Media_MediaExtendedCapabilityType_Media_MediaExtendedCapabilityStateMapEntry', false, $sot);
$ref.prop('key', $nst + '.MediaMediaExtendedCapabilityType', 'key', false, false);
$ref.prop('value', $nst + '.MediaMediaExtendedCapabilityState', 'value', false, false);

$nso.MediaMediaExtendedCapabilityType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.MediaMediaExtendedCapabilityType', true, $sot);

$nso.MediaMediaExtendedCapabilityType.MPEG2_PROGRAM_STREAM_SD = 'MPEG2_PROGRAM_STREAM_SD';
$nso.MediaMediaExtendedCapabilityType.MPEG2_PROGRAM_STREAM_SD_WITH_BLACK = 'MPEG2_PROGRAM_STREAM_SD_WITH_BLACK';
$nso.MediaMediaExtendedCapabilityType.MPEG2_TRANSPORT_STREAM_SD = 'MPEG2_TRANSPORT_STREAM_SD';
$nso.MediaMediaExtendedCapabilityType.GXF_SD = 'GXF_SD';
$nso.MediaMediaExtendedCapabilityType.FLV_320 = 'FLV_320';

$nso.MediaMediaExtendedCapabilityState = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.MediaMediaExtendedCapabilityState', true, $sot);

$nso.MediaMediaExtendedCapabilityState.UNKNOWN = 'UNKNOWN';
$nso.MediaMediaExtendedCapabilityState.SUPPORTED = 'SUPPORTED';
$nso.MediaMediaExtendedCapabilityState.NOT_SUPPORTED = 'NOT_SUPPORTED';
$nso.MediaMediaExtendedCapabilityState.PASSED_PREREQ = 'PASSED_PREREQ';
$nso.MediaMediaExtendedCapabilityState.FAILED_PREREQ = 'FAILED_PREREQ';
$nso.MediaMediaExtendedCapabilityState.MEETS_CRITERIA = 'MEETS_CRITERIA';

$nso.Media_Size_StringMapEntry = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.Media_Size_StringMapEntry', false, $sot);
$ref.prop('key', $nst + '.MediaSize', 'key', false, false);
$ref.prop('value', 'string', 'value', false, true);

$nso.MediaSize = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.MediaSize', true, $sot);

$nso.MediaSize.FULL = 'FULL';
$nso.MediaSize.SHRUNKEN = 'SHRUNKEN';
$nso.MediaSize.PREVIEW = 'PREVIEW';
$nso.MediaSize.VIDEO_THUMBNAIL = 'VIDEO_THUMBNAIL';

$nso.Dimensions = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.Dimensions', false, $sot);
$ref.prop('width', 'integer', 'width', false, true);
$ref.prop('height', 'integer', 'height', false, true);

$nso.Media_Size_DimensionsMapEntry = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.Media_Size_DimensionsMapEntry', false, $sot);
$ref.prop('key', $nst + '.MediaSize', 'key', false, false);
$ref.prop('value', $nst + '.Dimensions', 'value', false, false);

$nso.Media = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.Media', false, $sot);
$ref.prop('mediaId', 'integer', 'mediaId', false, true);
$ref.prop('mediaTypeDb', $nst + '.MediaMediaType', 'mediaTypeDb', false, false);
$ref.prop('referenceId', 'integer', 'referenceId', false, true);
$ref.prop('dimensions', $nst + '.Media_Size_DimensionsMapEntry', 'dimensions', true, false);
$ref.prop('urls', $nst + '.Media_Size_StringMapEntry', 'urls', true, false);
$ref.prop('mimeType', $nst + '.MediaMimeType', 'mimeType', false, false);
$ref.prop('sourceUrl', 'string', 'sourceUrl', false, true);
$ref.prop('mediaSubType', $nst + '.MediaMediaSubType', 'mediaSubType', false, false);
$ref.prop('name', 'string', 'name', false, true);
$ref.prop('fileSize', 'integer', 'fileSize', false, true);
$ref.prop('extendedCapabilities', $nst + '.Media_MediaExtendedCapabilityType_Media_MediaExtendedCapabilityStateMapEntry', 'extendedCapabilities', true, false);
$ref.prop('creationTime', 'string', 'creationTime', false, true);
$ref.prop('mediaType', 'string', 'Media.Type', false, true);

$nso.MediaMediaType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.MediaMediaType', true, $sot);

$nso.MediaMediaType.AUDIO = 'AUDIO';
$nso.MediaMediaType.DYNAMIC_IMAGE = 'DYNAMIC_IMAGE';
$nso.MediaMediaType.HTML = 'HTML';
$nso.MediaMediaType.ICON = 'ICON';
$nso.MediaMediaType.IMAGE = 'IMAGE';
$nso.MediaMediaType.STANDARD_ICON = 'STANDARD_ICON';
$nso.MediaMediaType.VIDEO = 'VIDEO';
$nso.MediaMediaType.VIDEO_IMAGE = 'VIDEO_IMAGE';

$nso.MediaMimeType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.MediaMimeType', true, $sot);

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

$nso.MediaMediaSubType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.MediaMediaSubType', true, $sot);

$nso.MediaMediaSubType.GOOGLE_HOSTED = 'GOOGLE_HOSTED';
$nso.MediaMediaSubType.YOU_TUBE_HOSTED = 'YOU_TUBE_HOSTED';
$nso.MediaMediaSubType.IRS_STORED = 'IRS_STORED';
$nso.MediaMediaSubType.ADS_DB_STORED = 'ADS_DB_STORED';
$nso.MediaMediaSubType.AMS_STORED = 'AMS_STORED';

$nso.Video = function() {
  $nso.Media.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.Video', false, $nst + '.Media');
$ref.prop('durationMillis', 'integer', 'durationMillis', false, true);
$ref.prop('streamingUrl', 'string', 'streamingUrl', false, true);
$ref.prop('readyToPlayOnTheWeb', 'boolean', 'readyToPlayOnTheWeb', false, true);
$ref.prop('industryStandardCommercialIdentifier', 'string', 'industryStandardCommercialIdentifier', false, true);
$ref.prop('advertisingId', 'string', 'advertisingId', false, true);

$nso.Image = function() {
  $nso.Media.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.Image', false, $nst + '.Media');
$ref.prop('data', 'byte', 'data', true, true);

$nso.Audio = function() {
  $nso.Media.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.Audio', false, $nst + '.Media');
$ref.prop('durationMillis', 'integer', 'durationMillis', false, true);
$ref.prop('streamingUrl', 'string', 'streamingUrl', false, true);
$ref.prop('readyToPlayOnTheWeb', 'boolean', 'readyToPlayOnTheWeb', false, true);

$nso.MediaPage = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.MediaPage', false, $sot);
$ref.prop('media', $nst + '.Media', 'media', true, false);
$ref.prop('totalNumEntries', 'integer', 'totalNumEntries', false, true);

$nso.MediaSelector = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.MediaSelector', false, $sot);
$ref.prop('mediaType', $nst + '.MediaMediaType', 'mediaType', false, false);
$ref.prop('mediaSubType', $nst + '.MediaMediaSubType', 'mediaSubType', false, false);
$ref.prop('mediaIds', 'integer', 'mediaIds', true, true);
$ref.prop('mediaReferenceIds', 'integer', 'mediaReferenceIds', true, true);
$ref.prop('extendedCapabilityTypes', $nst + '.MediaMediaExtendedCapabilityType', 'extendedCapabilityTypes', true, false);
$ref.prop('extendedCapabilityStates', $nst + '.MediaMediaExtendedCapabilityState', 'extendedCapabilityStates', true, false);
$ref.prop('mimeTypes', $nst + '.MediaMimeType', 'mimeTypes', true, false);

$nso.VideoError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.VideoError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.VideoErrorReason', 'reason', false, false);

$nso.VideoErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.VideoErrorReason', true, $sot);

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

$nso.NewEntityCreationError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.NewEntityCreationError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.NewEntityCreationErrorReason', 'reason', false, false);

$nso.NewEntityCreationErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.NewEntityCreationErrorReason', true, $sot);

$nso.NewEntityCreationErrorReason.CANNOT_SET_ID_FOR_ADD = 'CANNOT_SET_ID_FOR_ADD';

$nso.MediaError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.MediaError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.MediaErrorReason', 'reason', false, false);

$nso.MediaErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.MediaErrorReason', true, $sot);

$nso.MediaErrorReason.CANNOT_ADD_STANDARD_ICON = 'CANNOT_ADD_STANDARD_ICON';
$nso.MediaErrorReason.DUPLICATE_MEDIA = 'DUPLICATE_MEDIA';
$nso.MediaErrorReason.EMPTY_FIELD = 'EMPTY_FIELD';
$nso.MediaErrorReason.ENTITY_REFERENCED_IN_MULTIPLE_OPS = 'ENTITY_REFERENCED_IN_MULTIPLE_OPS';
$nso.MediaErrorReason.FIELD_NOT_SUPPORTED_FOR_MEDIA_SUB_TYPE = 'FIELD_NOT_SUPPORTED_FOR_MEDIA_SUB_TYPE';
$nso.MediaErrorReason.INVALID_MEDIA_ID = 'INVALID_MEDIA_ID';
$nso.MediaErrorReason.INVALID_MEDIA_TYPE = 'INVALID_MEDIA_TYPE';
$nso.MediaErrorReason.INVALID_MEDIA_SUB_TYPE = 'INVALID_MEDIA_SUB_TYPE';
$nso.MediaErrorReason.INVALID_REFERENCE_ID = 'INVALID_REFERENCE_ID';
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

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.ImageError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.ImageErrorReason', 'reason', false, false);

$nso.ImageErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.ImageErrorReason', true, $sot);

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

$nso.EntityNotFound = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.EntityNotFound', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.EntityNotFoundReason', 'reason', false, false);

$nso.EntityNotFoundReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.EntityNotFoundReason', true, $sot);

$nso.EntityNotFoundReason.INVALID_ID = 'INVALID_ID';

$nso.AudioError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AudioError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.AudioErrorReason', 'reason', false, false);

$nso.AudioErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AudioErrorReason', true, $sot);

$nso.AudioErrorReason.INVALID_AUDIO = 'INVALID_AUDIO';
$nso.AudioErrorReason.PROBLEM_READING_AUDIO_FILE = 'PROBLEM_READING_AUDIO_FILE';
$nso.AudioErrorReason.ERROR_STORING_AUDIO = 'ERROR_STORING_AUDIO';
$nso.AudioErrorReason.FILE_TOO_LARGE = 'FILE_TOO_LARGE';
$nso.AudioErrorReason.UNSUPPORTED_AUDIO = 'UNSUPPORTED_AUDIO';
$nso.AudioErrorReason.ERROR_GENERATING_STREAMING_URL = 'ERROR_GENERATING_STREAMING_URL';

$nso.ReportDefinitionService = function() {
  $sso.call(this);
  this.nametable_ = new google.ads.adwords.v201003.SoapNametable();
};

$ref = $dsf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.ReportDefinitionService');
$ref.prop('requestHeader', $nst + '.RequestHeader', 'RequestHeader', false, false);
$ref.prop('responseHeader', $nst + '.ResponseHeader', 'ResponseHeader', false, false);
$ref.meth(
  'get',
  'https://adwords.google.com/api/adwords/cm/v201003',
  'https://adwords.google.com/api/adwords/cm/v201003',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.ReportDefinitionPage', isArray: false, isSystem: false},
  [{propertyName: 'requestHeader', direction: 'in'}, {propertyName: 'responseHeader', direction: 'out'}],
  [{className: $nst + '.ReportDefinitionSelector', isArray: false, isSystem: false, name: 'selector', xmlElementName: 'selector'}]
);
$ref.meth(
  'getReportFields',
  'https://adwords.google.com/api/adwords/cm/v201003',
  'https://adwords.google.com/api/adwords/cm/v201003',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.ReportDefinitionField', isArray: true, isSystem: false},
  [{propertyName: 'requestHeader', direction: 'in'}, {propertyName: 'responseHeader', direction: 'out'}],
  [{className: $nst + '.ReportDefinitionReportType', isArray: false, isSystem: false, name: 'reportType', xmlElementName: 'reportType'}]
);
$ref.meth(
  'mutate',
  'https://adwords.google.com/api/adwords/cm/v201003',
  'https://adwords.google.com/api/adwords/cm/v201003',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.ReportDefinition', isArray: true, isSystem: false},
  [{propertyName: 'requestHeader', direction: 'in'}, {propertyName: 'responseHeader', direction: 'out'}],
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

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.ReportDefinitionOperation', false, $nst + '.Operation');
$ref.prop('operand', $nst + '.ReportDefinition', 'operand', false, false);

$nso.ReportDefinition = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.ReportDefinition', false, $sot);
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

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.Selector', false, $sot);
$ref.prop('fields', 'string', 'fields', true, true);
$ref.prop('predicates', $nst + '.Predicate', 'predicates', true, false);
$ref.prop('dateRange', $nst + '.DateRange', 'dateRange', false, false);

$nso.Predicate = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.Predicate', false, $sot);
$ref.prop('field', 'string', 'field', false, true);
$ref.prop('operator', $nst + '.PredicateOperator', 'operator', false, false);
$ref.prop('values', 'string', 'values', true, true);

$nso.PredicateOperator = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.PredicateOperator', true, $sot);

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

$nso.DateRange = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.DateRange', false, $sot);
$ref.prop('min', 'string', 'min', false, true);
$ref.prop('max', 'string', 'max', false, true);

$nso.ReportDefinitionReportType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.ReportDefinitionReportType', true, $sot);

$nso.ReportDefinitionReportType.KEYWORDS_PERFORMANCE_REPORT = 'KEYWORDS_PERFORMANCE_REPORT';
$nso.ReportDefinitionReportType.AD_PERFORMANCE_REPORT = 'AD_PERFORMANCE_REPORT';
$nso.ReportDefinitionReportType.URL_PERFORMANCE_REPORT = 'URL_PERFORMANCE_REPORT';
$nso.ReportDefinitionReportType.ADGROUP_PERFORMANCE_REPORT = 'ADGROUP_PERFORMANCE_REPORT';
$nso.ReportDefinitionReportType.CAMPAIGN_PERFORMANCE_REPORT = 'CAMPAIGN_PERFORMANCE_REPORT';
$nso.ReportDefinitionReportType.SEARCH_QUERY_PERFORMANCE_REPORT = 'SEARCH_QUERY_PERFORMANCE_REPORT';
$nso.ReportDefinitionReportType.MANAGED_PLACEMENTS_PERFORMANCE_REPORT = 'MANAGED_PLACEMENTS_PERFORMANCE_REPORT';
$nso.ReportDefinitionReportType.AUTOMATIC_PLACEMENTS_PERFORMANCE_REPORT = 'AUTOMATIC_PLACEMENTS_PERFORMANCE_REPORT';
$nso.ReportDefinitionReportType.ADGROUP_NEGATIVE_KEYWORDS_PERFORMANCE_REPORT = 'ADGROUP_NEGATIVE_KEYWORDS_PERFORMANCE_REPORT';
$nso.ReportDefinitionReportType.CAMPAIGN_NEGATIVE_KEYWORDS_PERFORMANCE_REPORT = 'CAMPAIGN_NEGATIVE_KEYWORDS_PERFORMANCE_REPORT';
$nso.ReportDefinitionReportType.ADGROUP_NEGATIVE_PLACEMENTS_PERFORMANCE_REPORT = 'ADGROUP_NEGATIVE_PLACEMENTS_PERFORMANCE_REPORT';
$nso.ReportDefinitionReportType.CAMPAIGN_NEGATIVE_PLACEMENTS_PERFORMANCE_REPORT = 'CAMPAIGN_NEGATIVE_PLACEMENTS_PERFORMANCE_REPORT';

$nso.ReportDefinitionDateRangeType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.ReportDefinitionDateRangeType', true, $sot);

$nso.ReportDefinitionDateRangeType.TODAY = 'TODAY';
$nso.ReportDefinitionDateRangeType.YESTERDAY = 'YESTERDAY';
$nso.ReportDefinitionDateRangeType.LAST_7_DAYS = 'LAST_7_DAYS';
$nso.ReportDefinitionDateRangeType.LAST_WEEK = 'LAST_WEEK';
$nso.ReportDefinitionDateRangeType.LAST_BUSINESS_WEEK = 'LAST_BUSINESS_WEEK';
$nso.ReportDefinitionDateRangeType.THIS_MONTH = 'THIS_MONTH';
$nso.ReportDefinitionDateRangeType.LAST_MONTH = 'LAST_MONTH';
$nso.ReportDefinitionDateRangeType.ALL_TIME = 'ALL_TIME';
$nso.ReportDefinitionDateRangeType.CUSTOM_DATE = 'CUSTOM_DATE';

$nso.DownloadFormat = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.DownloadFormat', true, $sot);

$nso.DownloadFormat.CSVFOREXCEL = 'CSVFOREXCEL';
$nso.DownloadFormat.CSV = 'CSV';
$nso.DownloadFormat.TSV = 'TSV';
$nso.DownloadFormat.XML = 'XML';
$nso.DownloadFormat.GZIPPED_CSV = 'GZIPPED_CSV';
$nso.DownloadFormat.GZIPPED_XML = 'GZIPPED_XML';

$nso.ReportDefinitionField = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.ReportDefinitionField', false, $sot);
$ref.prop('fieldName', 'string', 'fieldName', false, true);
$ref.prop('fieldType', 'string', 'fieldType', false, true);
$ref.prop('enumValues', 'string', 'enumValues', true, true);
$ref.prop('canSelect', 'boolean', 'canSelect', false, true);
$ref.prop('canFilter', 'boolean', 'canFilter', false, true);

$nso.ReportDefinitionPage = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.ReportDefinitionPage', false, $sot);
$ref.prop('entries', $nst + '.ReportDefinition', 'entries', true, false);
$ref.prop('totalNumEntries', 'integer', 'totalNumEntries', false, true);

$nso.ReportDefinitionSelector = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.ReportDefinitionSelector', false, $sot);
$ref.prop('paging', $nst + '.Paging', 'paging', false, false);

$nso.ReportDefinitionError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.ReportDefinitionError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.ReportDefinitionErrorReason', 'reason', false, false);

$nso.ReportDefinitionErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.ReportDefinitionErrorReason', true, $sot);

$nso.ReportDefinitionErrorReason.INVALID_FIELD_NAME_FOR_REPORT = 'INVALID_FIELD_NAME_FOR_REPORT';
$nso.ReportDefinitionErrorReason.UNABLE_TO_FIND_MAPPING_FOR_THIS_REPORT = 'UNABLE_TO_FIND_MAPPING_FOR_THIS_REPORT';
$nso.ReportDefinitionErrorReason.INVALID_COLUMN_NAME_FOR_REPORT = 'INVALID_COLUMN_NAME_FOR_REPORT';
$nso.ReportDefinitionErrorReason.INVALID_REPORT_DEFINITION_ID = 'INVALID_REPORT_DEFINITION_ID';
$nso.ReportDefinitionErrorReason.REPORT_SELECTOR_CANNOT_BE_NULL = 'REPORT_SELECTOR_CANNOT_BE_NULL';
$nso.ReportDefinitionErrorReason.NO_ENUMS_FOR_THIS_COLUMN_NAME = 'NO_ENUMS_FOR_THIS_COLUMN_NAME';
$nso.ReportDefinitionErrorReason.INVALID_VIEW = 'INVALID_VIEW';

$nso.DistinctError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.DistinctError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.DistinctErrorReason', 'reason', false, false);

$nso.DistinctErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.DistinctErrorReason', true, $sot);

$nso.DistinctErrorReason.DUPLICATE_ELEMENT = 'DUPLICATE_ELEMENT';

$nso.CollectionSizeError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.CollectionSizeError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.CollectionSizeErrorReason', 'reason', false, false);

$nso.CollectionSizeErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.CollectionSizeErrorReason', true, $sot);

$nso.CollectionSizeErrorReason.TOO_FEW = 'TOO_FEW';
$nso.CollectionSizeErrorReason.TOO_MANY = 'TOO_MANY';

$nso.InfoService = function() {
  $sso.call(this);
  this.nametable_ = new google.ads.adwords.v201003.SoapNametable();
};

$ref = $dsf('https://adwords.google.com/api/adwords/info/v201003', $nst + '.InfoService');
$ref.prop('requestHeader', $nst + '.RequestHeader', 'RequestHeader', false, false);
$ref.prop('responseHeader', $nst + '.ResponseHeader', 'ResponseHeader', false, false);
$ref.meth(
  'get',
  'https://adwords.google.com/api/adwords/info/v201003',
  'https://adwords.google.com/api/adwords/info/v201003',
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

$ref = $dtf('https://adwords.google.com/api/adwords/info/v201003', $nst + '.ApiUsageRecord', false, $sot);
$ref.prop('clientEmail', 'string', 'clientEmail', false, true);
$ref.prop('cost', 'integer', 'cost', false, true);

$nso.ApiUsageInfo = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/info/v201003', $nst + '.ApiUsageInfo', false, $sot);
$ref.prop('apiUsageRecords', $nst + '.ApiUsageRecord', 'apiUsageRecords', true, false);
$ref.prop('cost', 'integer', 'cost', false, true);

$nso.InfoSelector = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/info/v201003', $nst + '.InfoSelector', false, $sot);
$ref.prop('serviceName', 'string', 'serviceName', false, true);
$ref.prop('methodName', 'string', 'methodName', false, true);
$ref.prop('operator', $nst + '.Operator', 'operator', false, false);
$ref.prop('dateRange', $nst + '.DateRange', 'dateRange', false, false);
$ref.prop('clientEmails', 'string', 'clientEmails', true, true);
$ref.prop('apiUsageType', $nst + '.ApiUsageType', 'apiUsageType', false, false);

$nso.ApiUsageType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/info/v201003', $nst + '.ApiUsageType', true, $sot);

$nso.ApiUsageType.FREE_USAGE_API_UNITS_PER_MONTH = 'FREE_USAGE_API_UNITS_PER_MONTH';
$nso.ApiUsageType.TOTAL_USAGE_API_UNITS_PER_MONTH = 'TOTAL_USAGE_API_UNITS_PER_MONTH';
$nso.ApiUsageType.OPERATION_COUNT = 'OPERATION_COUNT';
$nso.ApiUsageType.UNIT_COUNT = 'UNIT_COUNT';
$nso.ApiUsageType.UNIT_COUNT_FOR_CLIENTS = 'UNIT_COUNT_FOR_CLIENTS';
$nso.ApiUsageType.METHOD_COST = 'METHOD_COST';

$nso.ApiUsageError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/info/v201003', $nst + '.ApiUsageError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.ApiUsageErrorReason', 'reason', false, false);

$nso.ApiUsageErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/info/v201003', $nst + '.ApiUsageErrorReason', true, $sot);

$nso.ApiUsageErrorReason.INVALID_DATE_RANGE = 'INVALID_DATE_RANGE';
$nso.ApiUsageErrorReason.SERVICE_NAME_NOT_SPECIFIED = 'SERVICE_NAME_NOT_SPECIFIED';
$nso.ApiUsageErrorReason.METHOD_NAME_NOT_SPECIFIED = 'METHOD_NAME_NOT_SPECIFIED';
$nso.ApiUsageErrorReason.OPERATOR_NOT_SPECIFIED = 'OPERATOR_NOT_SPECIFIED';
$nso.ApiUsageErrorReason.INVALID_CLIENT_EMAIL = 'INVALID_CLIENT_EMAIL';
$nso.ApiUsageErrorReason.INVALID_TOKEN_HEADER = 'INVALID_TOKEN_HEADER';

$nso.TargetingIdeaService = function() {
  $sso.call(this);
  this.nametable_ = new google.ads.adwords.v201003.SoapNametable();
};

$ref = $dsf('https://adwords.google.com/api/adwords/o/v201003', $nst + '.TargetingIdeaService');
$ref.prop('requestHeader', $nst + '.RequestHeader', 'RequestHeader', false, false);
$ref.prop('responseHeader', $nst + '.ResponseHeader', 'ResponseHeader', false, false);
$ref.meth(
  'get',
  'https://adwords.google.com/api/adwords/o/v201003',
  'https://adwords.google.com/api/adwords/o/v201003',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.TargetingIdeaPage', isArray: false, isSystem: false},
  [{propertyName: 'requestHeader', direction: 'in'}, {propertyName: 'responseHeader', direction: 'out'}],
  [{className: $nst + '.TargetingIdeaSelector', isArray: false, isSystem: false, name: 'selector', xmlElementName: 'selector'}]
);
$ref.meth(
  'getBulkKeywordIdeas',
  'https://adwords.google.com/api/adwords/o/v201003',
  'https://adwords.google.com/api/adwords/o/v201003',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.TargetingIdeaPage', isArray: false, isSystem: false},
  [{propertyName: 'requestHeader', direction: 'in'}, {propertyName: 'responseHeader', direction: 'out'}],
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

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201003', $nst + '.Range', false, $sot);
$ref.prop('min', $nst + '.ComparableValue', 'min', false, false);
$ref.prop('max', $nst + '.ComparableValue', 'max', false, false);

$nso.WebpageDescriptor = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201003', $nst + '.WebpageDescriptor', false, $sot);
$ref.prop('url', 'string', 'url', false, true);
$ref.prop('title', 'string', 'title', false, true);

$nso.MonthlySearchVolume = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201003', $nst + '.MonthlySearchVolume', false, $sot);
$ref.prop('year', 'integer', 'year', false, true);
$ref.prop('month', 'integer', 'month', false, true);
$ref.prop('count', 'integer', 'count', false, true);

$nso.InStreamAdInfo = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201003', $nst + '.InStreamAdInfo', false, $sot);
$ref.prop('maxAdDuration', 'integer', 'maxAdDuration', false, true);
$ref.prop('minAdDuration', 'integer', 'minAdDuration', false, true);
$ref.prop('medianAdDuration', 'integer', 'medianAdDuration', false, true);
$ref.prop('preRollPercent', 'double', 'preRollPercent', false, true);
$ref.prop('midRollPercent', 'double', 'midRollPercent', false, true);
$ref.prop('postRollPercent', 'double', 'postRollPercent', false, true);

$nso.AdFormatSpec = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201003', $nst + '.AdFormatSpec', false, $sot);
$ref.prop('format', $nst + '.SiteConstantsAdFormat', 'format', false, false);

$nso.SiteConstantsAdFormat = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201003', $nst + '.SiteConstantsAdFormat', true, $sot);

$nso.SiteConstantsAdFormat.UNKNOWN = 'UNKNOWN';
$nso.SiteConstantsAdFormat.TEXT = 'TEXT';
$nso.SiteConstantsAdFormat.IMAGE = 'IMAGE';
$nso.SiteConstantsAdFormat.VIDEO = 'VIDEO';
$nso.SiteConstantsAdFormat.INSTREAM = 'INSTREAM';
$nso.SiteConstantsAdFormat.AUDIO = 'AUDIO';

$nso.Attribute = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201003', $nst + '.Attribute', false, $sot);
$ref.prop('attributeType', 'string', 'Attribute.Type', false, true);

$nso.PlacementAttribute = function() {
  $nso.Attribute.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201003', $nst + '.PlacementAttribute', false, $nst + '.Attribute');
$ref.prop('value', $nst + '.Placement', 'value', false, false);

$nso.Criterion = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.Criterion', false, $sot);
$ref.prop('id', 'integer', 'id', false, true);
$ref.prop('criterionType', 'string', 'Criterion.Type', false, true);

$nso.Vertical = function() {
  $nso.Criterion.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.Vertical', false, $nst + '.Criterion');
$ref.prop('path', 'string', 'path', true, true);

$nso.Keyword = function() {
  $nso.Criterion.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.Keyword', false, $nst + '.Criterion');
$ref.prop('text', 'string', 'text', false, true);
$ref.prop('matchType', $nst + '.KeywordMatchType', 'matchType', false, false);

$nso.KeywordMatchType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.KeywordMatchType', true, $sot);

$nso.KeywordMatchType.EXACT = 'EXACT';
$nso.KeywordMatchType.PHRASE = 'PHRASE';
$nso.KeywordMatchType.BROAD = 'BROAD';

$nso.KeywordAttribute = function() {
  $nso.Attribute.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201003', $nst + '.KeywordAttribute', false, $nst + '.Attribute');
$ref.prop('value', $nst + '.Keyword', 'value', false, false);

$nso.LongRangeAttribute = function() {
  $nso.Attribute.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201003', $nst + '.LongRangeAttribute', false, $nst + '.Attribute');
$ref.prop('value', $nst + '.Range', 'value', false, false);

$nso.MoneyAttribute = function() {
  $nso.Attribute.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201003', $nst + '.MoneyAttribute', false, $nst + '.Attribute');
$ref.prop('value', $nst + '.Money', 'value', false, false);

$nso.WebpageDescriptorAttribute = function() {
  $nso.Attribute.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201003', $nst + '.WebpageDescriptorAttribute', false, $nst + '.Attribute');
$ref.prop('value', $nst + '.WebpageDescriptor', 'value', false, false);

$nso.StringAttribute = function() {
  $nso.Attribute.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201003', $nst + '.StringAttribute', false, $nst + '.Attribute');
$ref.prop('value', 'string', 'value', false, true);

$nso.PlacementTypeAttribute = function() {
  $nso.Attribute.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201003', $nst + '.PlacementTypeAttribute', false, $nst + '.Attribute');
$ref.prop('value', $nst + '.SiteConstantsPlacementType', 'value', false, false);

$nso.SiteConstantsPlacementType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201003', $nst + '.SiteConstantsPlacementType', true, $sot);

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

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201003', $nst + '.MonthlySearchVolumeAttribute', false, $nst + '.Attribute');
$ref.prop('value', $nst + '.MonthlySearchVolume', 'value', true, false);

$nso.LongAttribute = function() {
  $nso.Attribute.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201003', $nst + '.LongAttribute', false, $nst + '.Attribute');
$ref.prop('value', 'integer', 'value', false, true);

$nso.IntegerSetAttribute = function() {
  $nso.Attribute.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201003', $nst + '.IntegerSetAttribute', false, $nst + '.Attribute');
$ref.prop('value', 'integer', 'value', true, true);

$nso.IntegerAttribute = function() {
  $nso.Attribute.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201003', $nst + '.IntegerAttribute', false, $nst + '.Attribute');
$ref.prop('value', 'integer', 'value', false, true);

$nso.InStreamAdInfoAttribute = function() {
  $nso.Attribute.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201003', $nst + '.InStreamAdInfoAttribute', false, $nst + '.Attribute');
$ref.prop('value', $nst + '.InStreamAdInfo', 'value', false, false);

$nso.IdeaTypeAttribute = function() {
  $nso.Attribute.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201003', $nst + '.IdeaTypeAttribute', false, $nst + '.Attribute');
$ref.prop('value', $nst + '.IdeaType', 'value', false, false);

$nso.IdeaType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201003', $nst + '.IdeaType', true, $sot);

$nso.IdeaType.KEYWORD = 'KEYWORD';
$nso.IdeaType.PLACEMENT = 'PLACEMENT';

$nso.DoubleAttribute = function() {
  $nso.Attribute.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201003', $nst + '.DoubleAttribute', false, $nst + '.Attribute');
$ref.prop('value', 'double', 'value', false, true);

$nso.BooleanAttribute = function() {
  $nso.Attribute.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201003', $nst + '.BooleanAttribute', false, $nst + '.Attribute');
$ref.prop('value', 'boolean', 'value', false, true);

$nso.AdFormatSpecListAttribute = function() {
  $nso.Attribute.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201003', $nst + '.AdFormatSpecListAttribute', false, $nst + '.Attribute');
$ref.prop('value', $nst + '.AdFormatSpec', 'value', true, false);

$nso.Type_AttributeMapEntry = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201003', $nst + '.Type_AttributeMapEntry', false, $sot);
$ref.prop('key', $nst + '.AttributeType', 'key', false, false);
$ref.prop('value', $nst + '.Attribute', 'value', false, false);

$nso.AttributeType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201003', $nst + '.AttributeType', true, $sot);

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

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201003', $nst + '.TargetingIdea', false, $sot);
$ref.prop('data', $nst + '.Type_AttributeMapEntry', 'data', true, false);
$ref.prop('dummy', 'string', 'dummy', false, true);

$nso.TargetingIdeaPage = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201003', $nst + '.TargetingIdeaPage', false, $sot);
$ref.prop('totalNumEntries', 'integer', 'totalNumEntries', false, true);
$ref.prop('entries', $nst + '.TargetingIdea', 'entries', true, false);

$nso.Target = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.Target', false, $sot);
$ref.prop('targetType', 'string', 'Target.Type', false, true);

$nso.GeoTarget = function() {
  $nso.Target.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.GeoTarget', false, $nst + '.Target');
$ref.prop('excluded', 'boolean', 'excluded', false, true);

$nso.ProximityTarget = function() {
  $nso.GeoTarget.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.ProximityTarget', false, $nst + '.GeoTarget');
$ref.prop('geoPoint', $nst + '.GeoPoint', 'geoPoint', false, false);
$ref.prop('radiusDistanceUnits', $nst + '.ProximityTargetDistanceUnits', 'radiusDistanceUnits', false, false);
$ref.prop('radiusInUnits', 'double', 'radiusInUnits', false, true);
$ref.prop('address', $nst + '.Address', 'address', false, false);
$ref.prop('allowServiceOfAddress', 'boolean', 'allowServiceOfAddress', false, true);

$nso.ProximityTargetDistanceUnits = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.ProximityTargetDistanceUnits', true, $sot);

$nso.ProximityTargetDistanceUnits.KILOMETERS = 'KILOMETERS';
$nso.ProximityTargetDistanceUnits.MILES = 'MILES';

$nso.ProvinceTarget = function() {
  $nso.GeoTarget.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.ProvinceTarget', false, $nst + '.GeoTarget');
$ref.prop('provinceCode', 'string', 'provinceCode', false, true);

$nso.PolygonTarget = function() {
  $nso.GeoTarget.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.PolygonTarget', false, $nst + '.GeoTarget');
$ref.prop('vertices', $nst + '.GeoPoint', 'vertices', true, false);

$nso.MetroTarget = function() {
  $nso.GeoTarget.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.MetroTarget', false, $nst + '.GeoTarget');
$ref.prop('metroCode', 'string', 'metroCode', false, true);

$nso.CountryTarget = function() {
  $nso.GeoTarget.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.CountryTarget', false, $nst + '.GeoTarget');
$ref.prop('countryCode', 'string', 'countryCode', false, true);

$nso.CityTarget = function() {
  $nso.GeoTarget.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.CityTarget', false, $nst + '.GeoTarget');
$ref.prop('cityName', 'string', 'cityName', false, true);
$ref.prop('provinceCode', 'string', 'provinceCode', false, true);
$ref.prop('countryCode', 'string', 'countryCode', false, true);

$nso.DemographicTarget = function() {
  $nso.Target.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.DemographicTarget', false, $nst + '.Target');
$ref.prop('bidModifier', 'integer', 'bidModifier', false, true);

$nso.GenderTarget = function() {
  $nso.DemographicTarget.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.GenderTarget', false, $nst + '.DemographicTarget');
$ref.prop('gender', $nst + '.GenderTargetGender', 'gender', false, false);

$nso.GenderTargetGender = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.GenderTargetGender', true, $sot);

$nso.GenderTargetGender.MALE = 'MALE';
$nso.GenderTargetGender.FEMALE = 'FEMALE';

$nso.AgeTarget = function() {
  $nso.DemographicTarget.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AgeTarget', false, $nst + '.DemographicTarget');
$ref.prop('age', $nst + '.AgeTargetAge', 'age', false, false);

$nso.AgeTargetAge = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AgeTargetAge', true, $sot);

$nso.AgeTargetAge.AGE_0_17 = 'AGE_0_17';
$nso.AgeTargetAge.AGE_18_24 = 'AGE_18_24';
$nso.AgeTargetAge.AGE_25_34 = 'AGE_25_34';
$nso.AgeTargetAge.AGE_35_44 = 'AGE_35_44';
$nso.AgeTargetAge.AGE_45_54 = 'AGE_45_54';
$nso.AgeTargetAge.AGE_55_64 = 'AGE_55_64';
$nso.AgeTargetAge.AGE_65_PLUS = 'AGE_65_PLUS';

$nso.PlatformTarget = function() {
  $nso.Target.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.PlatformTarget', false, $nst + '.Target');
$ref.prop('platformType', $nst + '.PlatformType', 'platformType', false, false);

$nso.PlatformType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.PlatformType', true, $sot);

$nso.PlatformType.DESKTOP = 'DESKTOP';
$nso.PlatformType.HIGH_END_MOBILE = 'HIGH_END_MOBILE';

$nso.NetworkTarget = function() {
  $nso.Target.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.NetworkTarget', false, $nst + '.Target');
$ref.prop('networkCoverageType', $nst + '.NetworkCoverageType', 'networkCoverageType', false, false);

$nso.NetworkCoverageType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.NetworkCoverageType', true, $sot);

$nso.NetworkCoverageType.GOOGLE_SEARCH = 'GOOGLE_SEARCH';
$nso.NetworkCoverageType.SEARCH_NETWORK = 'SEARCH_NETWORK';
$nso.NetworkCoverageType.CONTENT_NETWORK = 'CONTENT_NETWORK';
$nso.NetworkCoverageType.CONTENT_CONTEXTUAL = 'CONTENT_CONTEXTUAL';
$nso.NetworkCoverageType.CPA_REFERRAL = 'CPA_REFERRAL';

$nso.MobileTarget = function() {
  $nso.Target.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.MobileTarget', false, $nst + '.Target');

$nso.MobilePlatformTarget = function() {
  $nso.MobileTarget.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.MobilePlatformTarget', false, $nst + '.MobileTarget');
$ref.prop('platformName', 'string', 'platformName', false, true);

$nso.MobileCarrierTarget = function() {
  $nso.MobileTarget.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.MobileCarrierTarget', false, $nst + '.MobileTarget');
$ref.prop('carrierName', 'string', 'carrierName', false, true);
$ref.prop('countryCode', 'string', 'countryCode', false, true);

$nso.LanguageTarget = function() {
  $nso.Target.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.LanguageTarget', false, $nst + '.Target');
$ref.prop('languageCode', 'string', 'languageCode', false, true);

$nso.AdScheduleTarget = function() {
  $nso.Target.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AdScheduleTarget', false, $nst + '.Target');
$ref.prop('dayOfWeek', $nst + '.DayOfWeek', 'dayOfWeek', false, false);
$ref.prop('startHour', 'integer', 'startHour', false, true);
$ref.prop('startMinute', $nst + '.MinuteOfHour', 'startMinute', false, false);
$ref.prop('endHour', 'integer', 'endHour', false, true);
$ref.prop('endMinute', $nst + '.MinuteOfHour', 'endMinute', false, false);
$ref.prop('bidMultiplier', 'double', 'bidMultiplier', false, true);

$nso.DayOfWeek = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.DayOfWeek', true, $sot);

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

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.MinuteOfHour', true, $sot);

$nso.MinuteOfHour.ZERO = 'ZERO';
$nso.MinuteOfHour.FIFTEEN = 'FIFTEEN';
$nso.MinuteOfHour.THIRTY = 'THIRTY';
$nso.MinuteOfHour.FORTY_FIVE = 'FORTY_FIVE';

$nso.LongComparisonOperation = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201003', $nst + '.LongComparisonOperation', false, $sot);
$ref.prop('minimum', 'integer', 'minimum', false, true);
$ref.prop('maximum', 'integer', 'maximum', false, true);
$ref.prop('excludes', 'integer', 'excludes', true, true);

$nso.DoubleComparisonOperation = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201003', $nst + '.DoubleComparisonOperation', false, $sot);
$ref.prop('minimum', 'double', 'minimum', false, true);
$ref.prop('maximum', 'double', 'maximum', false, true);
$ref.prop('excludes', 'double', 'excludes', true, true);

$nso.SearchParameter = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201003', $nst + '.SearchParameter', false, $sot);
$ref.prop('searchParameterType', 'string', 'SearchParameter.Type', false, true);

$nso.RelatedToKeywordSearchParameter = function() {
  $nso.SearchParameter.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201003', $nst + '.RelatedToKeywordSearchParameter', false, $nst + '.SearchParameter');
$ref.prop('keywords', $nst + '.Keyword', 'keywords', true, false);

$nso.ExcludedKeywordSearchParameter = function() {
  $nso.SearchParameter.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201003', $nst + '.ExcludedKeywordSearchParameter', false, $nst + '.SearchParameter');
$ref.prop('keywords', $nst + '.Keyword', 'keywords', true, false);

$nso.LanguageTargetSearchParameter = function() {
  $nso.SearchParameter.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201003', $nst + '.LanguageTargetSearchParameter', false, $nst + '.SearchParameter');
$ref.prop('languageTargets', $nst + '.LanguageTarget', 'languageTargets', true, false);

$nso.CountryTargetSearchParameter = function() {
  $nso.SearchParameter.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201003', $nst + '.CountryTargetSearchParameter', false, $nst + '.SearchParameter');
$ref.prop('countryTargets', $nst + '.CountryTarget', 'countryTargets', true, false);

$nso.GlobalMonthlySearchesSearchParameter = function() {
  $nso.SearchParameter.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201003', $nst + '.GlobalMonthlySearchesSearchParameter', false, $nst + '.SearchParameter');
$ref.prop('operation', $nst + '.LongComparisonOperation', 'operation', false, false);

$nso.AverageTargetedMonthlySearchesSearchParameter = function() {
  $nso.SearchParameter.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201003', $nst + '.AverageTargetedMonthlySearchesSearchParameter', false, $nst + '.SearchParameter');
$ref.prop('operation', $nst + '.LongComparisonOperation', 'operation', false, false);

$nso.AdShareSearchParameter = function() {
  $nso.SearchParameter.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201003', $nst + '.AdShareSearchParameter', false, $nst + '.SearchParameter');
$ref.prop('operation', $nst + '.DoubleComparisonOperation', 'operation', false, false);

$nso.SeedAdGroupIdSearchParameter = function() {
  $nso.SearchParameter.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201003', $nst + '.SeedAdGroupIdSearchParameter', false, $nst + '.SearchParameter');
$ref.prop('adGroupId', 'integer', 'adGroupId', false, true);

$nso.SearchShareSearchParameter = function() {
  $nso.SearchParameter.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201003', $nst + '.SearchShareSearchParameter', false, $nst + '.SearchParameter');
$ref.prop('operation', $nst + '.DoubleComparisonOperation', 'operation', false, false);

$nso.RelatedToUrlSearchParameter = function() {
  $nso.SearchParameter.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201003', $nst + '.RelatedToUrlSearchParameter', false, $nst + '.SearchParameter');
$ref.prop('urls', 'string', 'urls', true, true);
$ref.prop('includeSubUrls', 'boolean', 'includeSubUrls', false, true);

$nso.PlacementTypeSearchParameter = function() {
  $nso.SearchParameter.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201003', $nst + '.PlacementTypeSearchParameter', false, $nst + '.SearchParameter');
$ref.prop('placementTypes', $nst + '.SiteConstantsPlacementType', 'placementTypes', true, false);

$nso.MobileSearchParameter = function() {
  $nso.SearchParameter.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201003', $nst + '.MobileSearchParameter', false, $nst + '.SearchParameter');

$nso.KeywordMatchTypeSearchParameter = function() {
  $nso.SearchParameter.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201003', $nst + '.KeywordMatchTypeSearchParameter', false, $nst + '.SearchParameter');
$ref.prop('keywordMatchTypes', $nst + '.KeywordMatchType', 'keywordMatchTypes', true, false);

$nso.KeywordCategoryIdSearchParameter = function() {
  $nso.SearchParameter.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201003', $nst + '.KeywordCategoryIdSearchParameter', false, $nst + '.SearchParameter');
$ref.prop('categoryId', 'integer', 'categoryId', false, true);

$nso.IncludeAdultContentSearchParameter = function() {
  $nso.SearchParameter.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201003', $nst + '.IncludeAdultContentSearchParameter', false, $nst + '.SearchParameter');

$nso.IdeaTextMatchesSearchParameter = function() {
  $nso.SearchParameter.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201003', $nst + '.IdeaTextMatchesSearchParameter', false, $nst + '.SearchParameter');
$ref.prop('included', 'string', 'included', true, true);
$ref.prop('excluded', 'string', 'excluded', true, true);
$ref.prop('priorityAction', $nst + '.MatchAction', 'priorityAction', false, false);

$nso.MatchAction = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201003', $nst + '.MatchAction', true, $sot);

$nso.MatchAction.INCLUDE = 'INCLUDE';
$nso.MatchAction.EXCLUDE = 'EXCLUDE';

$nso.CompetitionSearchParameter = function() {
  $nso.SearchParameter.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201003', $nst + '.CompetitionSearchParameter', false, $nst + '.SearchParameter');
$ref.prop('levels', $nst + '.CompetitionSearchParameterLevel', 'levels', true, false);

$nso.CompetitionSearchParameterLevel = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201003', $nst + '.CompetitionSearchParameterLevel', true, $sot);

$nso.CompetitionSearchParameterLevel.LOW = 'LOW';
$nso.CompetitionSearchParameterLevel.MEDIUM = 'MEDIUM';
$nso.CompetitionSearchParameterLevel.HIGH = 'HIGH';

$nso.AdTypeSearchParameter = function() {
  $nso.SearchParameter.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201003', $nst + '.AdTypeSearchParameter', false, $nst + '.SearchParameter');
$ref.prop('adTypes', $nst + '.SiteConstantsAdType', 'adTypes', true, false);

$nso.SiteConstantsAdType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201003', $nst + '.SiteConstantsAdType', true, $sot);

$nso.SiteConstantsAdType.UNKNOWN = 'UNKNOWN';
$nso.SiteConstantsAdType.TEXT = 'TEXT';
$nso.SiteConstantsAdType.DISPLAY = 'DISPLAY';
$nso.SiteConstantsAdType.AUDIO = 'AUDIO';
$nso.SiteConstantsAdType.INSTREAM = 'INSTREAM';

$nso.TargetingIdeaSelector = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201003', $nst + '.TargetingIdeaSelector', false, $sot);
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

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201003', $nst + '.RequestType', true, $sot);

$nso.RequestType.IDEAS = 'IDEAS';
$nso.RequestType.STATS = 'STATS';

$nso.CriterionPolicyError = function() {
  $nso.PolicyViolationError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.CriterionPolicyError', false, $nst + '.PolicyViolationError');

$nso.TargetError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.TargetError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.TargetErrorReason', 'reason', false, false);

$nso.TargetErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.TargetErrorReason', true, $sot);

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

$nso.StatsQueryError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.StatsQueryError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.StatsQueryErrorReason', 'reason', false, false);

$nso.StatsQueryErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.StatsQueryErrorReason', true, $sot);

$nso.StatsQueryErrorReason.DATE_NOT_IN_VALID_RANGE = 'DATE_NOT_IN_VALID_RANGE';

$nso.EntityCountLimitExceeded = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.EntityCountLimitExceeded', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.EntityCountLimitExceededReason', 'reason', false, false);
$ref.prop('enclosingId', 'string', 'enclosingId', false, true);
$ref.prop('limit', 'integer', 'limit', false, true);

$nso.EntityCountLimitExceededReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.EntityCountLimitExceededReason', true, $sot);

$nso.EntityCountLimitExceededReason.ACCOUNT_LIMIT = 'ACCOUNT_LIMIT';
$nso.EntityCountLimitExceededReason.CAMPAIGN_LIMIT = 'CAMPAIGN_LIMIT';
$nso.EntityCountLimitExceededReason.ADGROUP_LIMIT = 'ADGROUP_LIMIT';

$nso.AdGroupCriterionLimitExceeded = function() {
  $nso.EntityCountLimitExceeded.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AdGroupCriterionLimitExceeded', false, $nst + '.EntityCountLimitExceeded');
$ref.prop('limitType', $nst + '.AdGroupCriterionLimitExceededCriteriaLimitType', 'limitType', false, false);

$nso.AdGroupCriterionLimitExceededCriteriaLimitType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AdGroupCriterionLimitExceededCriteriaLimitType', true, $sot);

$nso.AdGroupCriterionLimitExceededCriteriaLimitType.ADGROUP_KEYWORD = 'ADGROUP_KEYWORD';
$nso.AdGroupCriterionLimitExceededCriteriaLimitType.ADGROUP_WEBSITE = 'ADGROUP_WEBSITE';

$nso.DateError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.DateError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.DateErrorReason', 'reason', false, false);

$nso.DateErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.DateErrorReason', true, $sot);

$nso.DateErrorReason.INVALID_FIELD_VALUES_IN_DATE = 'INVALID_FIELD_VALUES_IN_DATE';
$nso.DateErrorReason.INVALID_STRING_DATE = 'INVALID_STRING_DATE';
$nso.DateErrorReason.INVALID_STRING_DATE_RANGE = 'INVALID_STRING_DATE_RANGE';
$nso.DateErrorReason.INVALID_STRING_DATE_TIME = 'INVALID_STRING_DATE_TIME';
$nso.DateErrorReason.EARLIER_THAN_MINIMUM_DATE = 'EARLIER_THAN_MINIMUM_DATE';
$nso.DateErrorReason.LATER_THAN_MAXIMUM_DATE = 'LATER_THAN_MAXIMUM_DATE';
$nso.DateErrorReason.DATE_RANGE_MINIMUM_DATE_LATER_THAN_MAXIMUM_DATE = 'DATE_RANGE_MINIMUM_DATE_LATER_THAN_MAXIMUM_DATE';
$nso.DateErrorReason.DATE_RANGE_MINIMUM_AND_MAXIMUM_DATES_BOTH_NULL = 'DATE_RANGE_MINIMUM_AND_MAXIMUM_DATES_BOTH_NULL';

$nso.BudgetError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.BudgetError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.BudgetErrorReason', 'reason', false, false);

$nso.BudgetErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.BudgetErrorReason', true, $sot);

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

$nso.BiddingError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.BiddingError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.BiddingErrorReason', 'reason', false, false);

$nso.BiddingErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.BiddingErrorReason', true, $sot);

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

$nso.AdGroupCriterionError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AdGroupCriterionError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.AdGroupCriterionErrorReason', 'reason', false, false);

$nso.AdGroupCriterionErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AdGroupCriterionErrorReason', true, $sot);

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
$nso.AdGroupCriterionErrorReason.UNKNOWN = 'UNKNOWN';

$nso.TargetingIdeaError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201003', $nst + '.TargetingIdeaError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.TargetingIdeaErrorReason', 'reason', false, false);

$nso.TargetingIdeaErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/o/v201003', $nst + '.TargetingIdeaErrorReason', true, $sot);

$nso.TargetingIdeaErrorReason.DUPLICATE_SEARCH_FILTER_TYPES_PRESENT = 'DUPLICATE_SEARCH_FILTER_TYPES_PRESENT';
$nso.TargetingIdeaErrorReason.INSUFFICIENT_SEARCH_PARAMETERS = 'INSUFFICIENT_SEARCH_PARAMETERS';
$nso.TargetingIdeaErrorReason.INVALID_ATTRIBUTE_TYPE = 'INVALID_ATTRIBUTE_TYPE';
$nso.TargetingIdeaErrorReason.INVALID_SEARCH_PARAMETERS = 'INVALID_SEARCH_PARAMETERS';
$nso.TargetingIdeaErrorReason.MUTUALLY_EXCLUSIVE_SEARCH_PARAMETERS_IN_QUERY = 'MUTUALLY_EXCLUSIVE_SEARCH_PARAMETERS_IN_QUERY';
$nso.TargetingIdeaErrorReason.SERVICE_UNAVAILABLE = 'SERVICE_UNAVAILABLE';
$nso.TargetingIdeaErrorReason.INVALID_URL_IN_SEARCH_PARAMETER = 'INVALID_URL_IN_SEARCH_PARAMETER';
$nso.TargetingIdeaErrorReason.TOO_MANY_RESULTS_REQUESTED = 'TOO_MANY_RESULTS_REQUESTED';
$nso.TargetingIdeaErrorReason.NO_PAGING_IN_SELECTOR = 'NO_PAGING_IN_SELECTOR';

$nso.BulkMutateJobService = function() {
  $sso.call(this);
  this.nametable_ = new google.ads.adwords.v201003.SoapNametable();
};

$ref = $dsf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.BulkMutateJobService');
$ref.prop('requestHeader', $nst + '.RequestHeader', 'RequestHeader', false, false);
$ref.prop('responseHeader', $nst + '.ResponseHeader', 'ResponseHeader', false, false);
$ref.meth(
  'get',
  'https://adwords.google.com/api/adwords/cm/v201003',
  'https://adwords.google.com/api/adwords/cm/v201003',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.BulkMutateJob', isArray: true, isSystem: false},
  [{propertyName: 'requestHeader', direction: 'in'}, {propertyName: 'responseHeader', direction: 'out'}],
  [{className: $nst + '.BulkMutateJobSelector', isArray: false, isSystem: false, name: 'selector', xmlElementName: 'selector'}]
);
$ref.meth(
  'mutate',
  'https://adwords.google.com/api/adwords/cm/v201003',
  'https://adwords.google.com/api/adwords/cm/v201003',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.BulkMutateJob', isArray: false, isSystem: false},
  [{propertyName: 'requestHeader', direction: 'in'}, {propertyName: 'responseHeader', direction: 'out'}],
  [{className: $nst + '.JobOperation', isArray: false, isSystem: false, name: 'operation', xmlElementName: 'operation'}]
);

$nso.BulkMutateJobService.prototype.get = function(selector, onsuccess, onfailure) {
  this.invoke.call(this, 'get', [selector], onsuccess, onfailure);
};

$nso.BulkMutateJobService.prototype.mutate = function(operation, onsuccess, onfailure) {
  this.invoke.call(this, 'mutate', [operation], onsuccess, onfailure);
};

$nso.LocationOverrideInfo = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.LocationOverrideInfo', false, $sot);
$ref.prop('radius', 'integer', 'radius', false, true);
$ref.prop('radiusUnits', $nst + '.LocationOverrideInfoRadiusUnits', 'radiusUnits', false, false);

$nso.LocationOverrideInfoRadiusUnits = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.LocationOverrideInfoRadiusUnits', true, $sot);

$nso.LocationOverrideInfoRadiusUnits.KILOMETERS = 'KILOMETERS';
$nso.LocationOverrideInfoRadiusUnits.MILES = 'MILES';

$nso.OverrideInfo = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.OverrideInfo', false, $sot);
$ref.prop('item', $nst + '.LocationOverrideInfo', 'LocationOverrideInfo', false, false);

$nso.Sitelink = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.Sitelink', false, $sot);
$ref.prop('displayText', 'string', 'displayText', false, true);
$ref.prop('destinationUrl', 'string', 'destinationUrl', false, true);

$nso.AdExtension = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AdExtension', false, $sot);
$ref.prop('id', 'integer', 'id', false, true);
$ref.prop('adExtensionType', 'string', 'AdExtension.Type', false, true);

$nso.SitelinksExtension = function() {
  $nso.AdExtension.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.SitelinksExtension', false, $nst + '.AdExtension');
$ref.prop('sitelinks', $nst + '.Sitelink', 'sitelinks', true, false);

$nso.MobileExtension = function() {
  $nso.AdExtension.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.MobileExtension', false, $nst + '.AdExtension');
$ref.prop('phoneNumber', 'string', 'phoneNumber', false, true);
$ref.prop('countryCode', 'string', 'countryCode', false, true);

$nso.LocationSyncExtension = function() {
  $nso.AdExtension.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.LocationSyncExtension', false, $nst + '.AdExtension');
$ref.prop('email', 'string', 'email', false, true);
$ref.prop('authToken', 'string', 'authToken', false, true);
$ref.prop('iconMediaId', 'integer', 'iconMediaId', false, true);
$ref.prop('shouldSyncUrl', 'boolean', 'shouldSyncUrl', false, true);

$nso.LocationExtension = function() {
  $nso.AdExtension.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.LocationExtension', false, $nst + '.AdExtension');
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

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.LocationExtensionSource', true, $sot);

$nso.LocationExtensionSource.ADWORDS_FRONTEND = 'ADWORDS_FRONTEND';
$nso.LocationExtensionSource.LBC_SYNC = 'LBC_SYNC';

$nso.AdExtensionOverride = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AdExtensionOverride', false, $sot);
$ref.prop('adId', 'integer', 'adId', false, true);
$ref.prop('adExtension', $nst + '.AdExtension', 'adExtension', false, false);
$ref.prop('overrideInfo', $nst + '.OverrideInfo', 'overrideInfo', false, false);
$ref.prop('status', $nst + '.AdExtensionOverrideStatus', 'status', false, false);
$ref.prop('approvalStatus', $nst + '.AdExtensionOverrideApprovalStatus', 'approvalStatus', false, false);
$ref.prop('stats', $nst + '.AdExtensionOverrideStats', 'stats', false, false);

$nso.AdExtensionOverrideStatus = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AdExtensionOverrideStatus', true, $sot);

$nso.AdExtensionOverrideStatus.ACTIVE = 'ACTIVE';
$nso.AdExtensionOverrideStatus.DELETED = 'DELETED';

$nso.AdExtensionOverrideApprovalStatus = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AdExtensionOverrideApprovalStatus', true, $sot);

$nso.AdExtensionOverrideApprovalStatus.APPROVED = 'APPROVED';
$nso.AdExtensionOverrideApprovalStatus.UNCHECKED = 'UNCHECKED';
$nso.AdExtensionOverrideApprovalStatus.DISAPPROVED = 'DISAPPROVED';

$nso.Stats = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.Stats', false, $sot);
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
$ref.prop('statsType', 'string', 'Stats.Type', false, true);

$nso.StatsNetwork = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.StatsNetwork', true, $sot);

$nso.StatsNetwork.SEARCH = 'SEARCH';
$nso.StatsNetwork.GOOGLE_SEARCH = 'GOOGLE_SEARCH';
$nso.StatsNetwork.SEARCH_NETWORK = 'SEARCH_NETWORK';
$nso.StatsNetwork.CONTENT = 'CONTENT';
$nso.StatsNetwork.CONTENT_KEYWORD_BID = 'CONTENT_KEYWORD_BID';
$nso.StatsNetwork.CONTENT_PLACEMENT_BID = 'CONTENT_PLACEMENT_BID';
$nso.StatsNetwork.ALL = 'ALL';
$nso.StatsNetwork.UNKNOWN = 'UNKNOWN';

$nso.CampaignStats = function() {
  $nso.Stats.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.CampaignStats', false, $nst + '.Stats');

$nso.AdStats = function() {
  $nso.Stats.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AdStats', false, $nst + '.Stats');
$ref.prop('percentServed', 'double', 'percentServed', false, true);

$nso.Operand = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.Operand', false, $sot);
$ref.prop('item', 'System.Object', [{elementName: 'Ad', className: $nst + '.Ad'}, {elementName: 'AdExtensionOverride', className: $nst + '.AdExtensionOverride'}, {elementName: 'AdGroup', className: $nst + '.AdGroup'}, {elementName: 'AdGroupAd', className: $nst + '.AdGroupAd'}, {elementName: 'AdGroupCriterion', className: $nst + '.AdGroupCriterion'}, {elementName: 'Campaign', className: $nst + '.Campaign'}, {elementName: 'CampaignCriterion', className: $nst + '.CampaignCriterion'}, {elementName: 'Job', className: $nst + '.Job'}, {elementName: 'Media', className: $nst + '.Media'}, {elementName: 'Target', className: $nst + '.Target'}, {elementName: 'TargetList', className: $nst + '.TargetList'}], false, true);

$nso.Ad = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.Ad', false, $sot);
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

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AdApprovalStatus', true, $sot);

$nso.AdApprovalStatus.APPROVED = 'APPROVED';
$nso.AdApprovalStatus.FAMILY_SAFE = 'FAMILY_SAFE';
$nso.AdApprovalStatus.NON_FAMILY_SAFE = 'NON_FAMILY_SAFE';
$nso.AdApprovalStatus.PORN = 'PORN';
$nso.AdApprovalStatus.UNCHECKED = 'UNCHECKED';
$nso.AdApprovalStatus.DISAPPROVED = 'DISAPPROVED';

$nso.TextAd = function() {
  $nso.Ad.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.TextAd', false, $nst + '.Ad');
$ref.prop('headline', 'string', 'headline', false, true);
$ref.prop('description1', 'string', 'description1', false, true);
$ref.prop('description2', 'string', 'description2', false, true);

$nso.TemplateAd = function() {
  $nso.Ad.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.TemplateAd', false, $nst + '.Ad');
$ref.prop('templateId', 'integer', 'templateId', false, true);
$ref.prop('adUnionId', $nst + '.AdUnionId', 'adUnionId', false, false);
$ref.prop('templateElements', $nst + '.TemplateElement', 'templateElements', true, false);
$ref.prop('dimensions', $nst + '.Dimensions', 'dimensions', false, false);
$ref.prop('name', 'string', 'name', false, true);
$ref.prop('duration', 'integer', 'duration', false, true);

$nso.AdUnionId = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AdUnionId', false, $sot);
$ref.prop('id', 'integer', 'id', false, true);
$ref.prop('adUnionIdType', 'string', 'AdUnionId.Type', false, true);

$nso.TempAdUnionId = function() {
  $nso.AdUnionId.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.TempAdUnionId', false, $nst + '.AdUnionId');

$nso.TemplateElement = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.TemplateElement', false, $sot);
$ref.prop('uniqueName', 'string', 'uniqueName', false, true);
$ref.prop('fields', $nst + '.TemplateElementField', 'fields', true, false);

$nso.TemplateElementField = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.TemplateElementField', false, $sot);
$ref.prop('name', 'string', 'name', false, true);
$ref.prop('type', $nst + '.TemplateElementFieldType', 'type', false, false);
$ref.prop('fieldText', 'string', 'fieldText', false, true);
$ref.prop('fieldMedia', $nst + '.Media', 'fieldMedia', false, false);

$nso.TemplateElementFieldType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.TemplateElementFieldType', true, $sot);

$nso.TemplateElementFieldType.ADDRESS = 'ADDRESS';
$nso.TemplateElementFieldType.AUDIO = 'AUDIO';
$nso.TemplateElementFieldType.ENUM = 'ENUM';
$nso.TemplateElementFieldType.IMAGE = 'IMAGE';
$nso.TemplateElementFieldType.TEXT = 'TEXT';
$nso.TemplateElementFieldType.URL = 'URL';
$nso.TemplateElementFieldType.VIDEO = 'VIDEO';
$nso.TemplateElementFieldType.VISIBLE_URL = 'VISIBLE_URL';

$nso.RichMediaAd = function() {
  $nso.Ad.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.RichMediaAd', false, $nst + '.Ad');
$ref.prop('name', 'string', 'name', false, true);
$ref.prop('dimensions', $nst + '.Dimensions', 'dimensions', false, false);
$ref.prop('snippet', 'string', 'snippet', false, true);
$ref.prop('impressionBeaconUrl', 'string', 'impressionBeaconUrl', false, true);
$ref.prop('certifiedVendorFormatId', 'integer', 'certifiedVendorFormatId', false, true);

$nso.ThirdPartyRedirectAd = function() {
  $nso.RichMediaAd.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.ThirdPartyRedirectAd', false, $nst + '.RichMediaAd');
$ref.prop('isCookieTargeted', 'boolean', 'isCookieTargeted', false, true);
$ref.prop('isUserInterestTargeted', 'boolean', 'isUserInterestTargeted', false, true);
$ref.prop('isTagged', 'boolean', 'isTagged', false, true);
$ref.prop('videoTypes', $nst + '.VideoType', 'videoTypes', true, false);

$nso.VideoType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.VideoType', true, $sot);

$nso.VideoType.ADOBE = 'ADOBE';
$nso.VideoType.REALPLAYER = 'REALPLAYER';
$nso.VideoType.QUICKTIME = 'QUICKTIME';
$nso.VideoType.WINDOWSMEDIA = 'WINDOWSMEDIA';

$nso.MobileImageAd = function() {
  $nso.Ad.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.MobileImageAd', false, $nst + '.Ad');
$ref.prop('markupLanguages', $nst + '.MarkupLanguageType', 'markupLanguages', true, false);
$ref.prop('mobileCarriers', 'string', 'mobileCarriers', true, true);
$ref.prop('image', $nst + '.Image', 'image', false, false);

$nso.MarkupLanguageType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.MarkupLanguageType', true, $sot);

$nso.MarkupLanguageType.HTML = 'HTML';
$nso.MarkupLanguageType.CHTML = 'CHTML';
$nso.MarkupLanguageType.XHTML = 'XHTML';
$nso.MarkupLanguageType.WML = 'WML';

$nso.MobileAd = function() {
  $nso.Ad.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.MobileAd', false, $nst + '.Ad');
$ref.prop('headline', 'string', 'headline', false, true);
$ref.prop('description', 'string', 'description', false, true);
$ref.prop('markupLanguages', $nst + '.MarkupLanguageType', 'markupLanguages', true, false);
$ref.prop('mobileCarriers', 'string', 'mobileCarriers', true, true);
$ref.prop('businessName', 'string', 'businessName', false, true);
$ref.prop('countryCode', 'string', 'countryCode', false, true);
$ref.prop('phoneNumber', 'string', 'phoneNumber', false, true);

$nso.LocalBusinessAd = function() {
  $nso.Ad.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.LocalBusinessAd', false, $nst + '.Ad');
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

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.ImageAd', false, $nst + '.Ad');
$ref.prop('image', $nst + '.Image', 'image', false, false);
$ref.prop('name', 'string', 'name', false, true);

$nso.DeprecatedAd = function() {
  $nso.Ad.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.DeprecatedAd', false, $nst + '.Ad');
$ref.prop('name', 'string', 'name', false, true);
$ref.prop('type', $nst + '.DeprecatedAdType', 'type', false, false);

$nso.DeprecatedAdType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.DeprecatedAdType', true, $sot);

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

$nso.AdGroup = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AdGroup', false, $sot);
$ref.prop('id', 'integer', 'id', false, true);
$ref.prop('campaignId', 'integer', 'campaignId', false, true);
$ref.prop('campaignName', 'string', 'campaignName', false, true);
$ref.prop('name', 'string', 'name', false, true);
$ref.prop('status', $nst + '.AdGroupStatus', 'status', false, false);
$ref.prop('bids', $nst + '.AdGroupBids', 'bids', false, false);
$ref.prop('stats', $nst + '.Stats', 'stats', false, false);

$nso.AdGroupStatus = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AdGroupStatus', true, $sot);

$nso.AdGroupStatus.ENABLED = 'ENABLED';
$nso.AdGroupStatus.PAUSED = 'PAUSED';
$nso.AdGroupStatus.DELETED = 'DELETED';

$nso.AdGroupBids = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AdGroupBids', false, $sot);
$ref.prop('adGroupBidsType', 'string', 'AdGroupBids.Type', false, true);

$nso.ManualCPMAdGroupBids = function() {
  $nso.AdGroupBids.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.ManualCPMAdGroupBids', false, $nst + '.AdGroupBids');
$ref.prop('maxCpm', $nst + '.Bid', 'maxCpm', false, false);

$nso.Bid = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.Bid', false, $sot);
$ref.prop('amount', $nst + '.Money', 'amount', false, false);

$nso.ManualCPCAdGroupBids = function() {
  $nso.AdGroupBids.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.ManualCPCAdGroupBids', false, $nst + '.AdGroupBids');
$ref.prop('keywordMaxCpc', $nst + '.Bid', 'keywordMaxCpc', false, false);
$ref.prop('keywordContentMaxCpc', $nst + '.Bid', 'keywordContentMaxCpc', false, false);
$ref.prop('siteMaxCpc', $nst + '.Bid', 'siteMaxCpc', false, false);
$ref.prop('enhancedCpcEnabled', 'boolean', 'enhancedCpcEnabled', false, true);

$nso.ConversionOptimizerAdGroupBids = function() {
  $nso.AdGroupBids.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.ConversionOptimizerAdGroupBids', false, $nst + '.AdGroupBids');
$ref.prop('targetCpa', $nst + '.Bid', 'targetCpa', false, false);
$ref.prop('conversionOptimizerBidType', $nst + '.ConversionOptimizerBidType', 'conversionOptimizerBidType', false, false);
$ref.prop('deduplicationMode', $nst + '.ConversionDeduplicationMode', 'deduplicationMode', false, false);

$nso.ConversionOptimizerBidType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.ConversionOptimizerBidType', true, $sot);

$nso.ConversionOptimizerBidType.TARGET_CPA = 'TARGET_CPA';
$nso.ConversionOptimizerBidType.MAX_CPA = 'MAX_CPA';

$nso.ConversionDeduplicationMode = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.ConversionDeduplicationMode', true, $sot);

$nso.ConversionDeduplicationMode.ONE_PER_CLICK = 'ONE_PER_CLICK';
$nso.ConversionDeduplicationMode.MANY_PER_CLICK = 'MANY_PER_CLICK';

$nso.BudgetOptimizerAdGroupBids = function() {
  $nso.AdGroupBids.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.BudgetOptimizerAdGroupBids', false, $nst + '.AdGroupBids');
$ref.prop('proxyKeywordMaxCpc', $nst + '.Bid', 'proxyKeywordMaxCpc', false, false);
$ref.prop('proxySiteMaxCpc', $nst + '.Bid', 'proxySiteMaxCpc', false, false);
$ref.prop('enhancedCpcEnabled', 'boolean', 'enhancedCpcEnabled', false, true);

$nso.AdGroupAd = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AdGroupAd', false, $sot);
$ref.prop('adGroupId', 'integer', 'adGroupId', false, true);
$ref.prop('ad', $nst + '.Ad', 'ad', false, false);
$ref.prop('status', $nst + '.AdGroupAdStatus', 'status', false, false);
$ref.prop('stats', $nst + '.AdStats', 'stats', false, false);

$nso.AdGroupAdStatus = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AdGroupAdStatus', true, $sot);

$nso.AdGroupAdStatus.ENABLED = 'ENABLED';
$nso.AdGroupAdStatus.PAUSED = 'PAUSED';
$nso.AdGroupAdStatus.DISABLED = 'DISABLED';

$nso.AdGroupCriterion = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AdGroupCriterion', false, $sot);
$ref.prop('adGroupId', 'integer', 'adGroupId', false, true);
$ref.prop('criterion', $nst + '.Criterion', 'criterion', false, false);
$ref.prop('adGroupCriterionType', 'string', 'AdGroupCriterion.Type', false, true);

$nso.ContentLabel = function() {
  $nso.Criterion.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.ContentLabel', false, $nst + '.Criterion');
$ref.prop('contentLabelType', $nst + '.ContentLabelType', 'contentLabelType', false, false);

$nso.ContentLabelType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.ContentLabelType', true, $sot);

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

$nso.NegativeAdGroupCriterion = function() {
  $nso.AdGroupCriterion.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.NegativeAdGroupCriterion', false, $nst + '.AdGroupCriterion');

$nso.BiddableAdGroupCriterion = function() {
  $nso.AdGroupCriterion.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.BiddableAdGroupCriterion', false, $nst + '.AdGroupCriterion');
$ref.prop('userStatus', $nst + '.UserStatus', 'userStatus', false, false);
$ref.prop('systemServingStatus', $nst + '.SystemServingStatus', 'systemServingStatus', false, false);
$ref.prop('approvalStatus', $nst + '.ApprovalStatus', 'approvalStatus', false, false);
$ref.prop('destinationUrl', 'string', 'destinationUrl', false, true);
$ref.prop('bids', $nst + '.AdGroupCriterionBids', 'bids', false, false);
$ref.prop('firstPageCpc', $nst + '.Bid', 'firstPageCpc', false, false);
$ref.prop('qualityInfo', $nst + '.QualityInfo', 'qualityInfo', false, false);
$ref.prop('stats', $nst + '.Stats', 'stats', false, false);

$nso.UserStatus = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.UserStatus', true, $sot);

$nso.UserStatus.ACTIVE = 'ACTIVE';
$nso.UserStatus.DELETED = 'DELETED';
$nso.UserStatus.PAUSED = 'PAUSED';

$nso.SystemServingStatus = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.SystemServingStatus', true, $sot);

$nso.SystemServingStatus.ELIGIBLE = 'ELIGIBLE';
$nso.SystemServingStatus.RARELY_SERVED = 'RARELY_SERVED';

$nso.ApprovalStatus = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.ApprovalStatus', true, $sot);

$nso.ApprovalStatus.APPROVED = 'APPROVED';
$nso.ApprovalStatus.PENDING_REVIEW = 'PENDING_REVIEW';
$nso.ApprovalStatus.UNDER_REVIEW = 'UNDER_REVIEW';
$nso.ApprovalStatus.DISAPPROVED = 'DISAPPROVED';

$nso.AdGroupCriterionBids = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AdGroupCriterionBids', false, $sot);
$ref.prop('adGroupCriterionBidsType', 'string', 'AdGroupCriterionBids.Type', false, true);

$nso.ManualCPMAdGroupCriterionBids = function() {
  $nso.AdGroupCriterionBids.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.ManualCPMAdGroupCriterionBids', false, $nst + '.AdGroupCriterionBids');
$ref.prop('maxCpm', $nst + '.Bid', 'maxCpm', false, false);
$ref.prop('bidSource', $nst + '.BidSource', 'bidSource', false, false);

$nso.BidSource = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.BidSource', true, $sot);

$nso.BidSource.ADGROUP = 'ADGROUP';
$nso.BidSource.CRITERION = 'CRITERION';

$nso.ManualCPCAdGroupCriterionBids = function() {
  $nso.AdGroupCriterionBids.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.ManualCPCAdGroupCriterionBids', false, $nst + '.AdGroupCriterionBids');
$ref.prop('maxCpc', $nst + '.Bid', 'maxCpc', false, false);
$ref.prop('bidSource', $nst + '.BidSource', 'bidSource', false, false);
$ref.prop('positionPreferenceBids', $nst + '.PositionPreferenceAdGroupCriterionBids', 'positionPreferenceBids', false, false);
$ref.prop('enhancedCpcEnabled', 'boolean', 'enhancedCpcEnabled', false, true);

$nso.PositionPreferenceAdGroupCriterionBids = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.PositionPreferenceAdGroupCriterionBids', false, $sot);
$ref.prop('proxyMaxCpc', $nst + '.Bid', 'proxyMaxCpc', false, false);
$ref.prop('preferredPosition', 'integer', 'preferredPosition', false, true);
$ref.prop('bottomPosition', 'integer', 'bottomPosition', false, true);

$nso.ConversionOptimizerAdGroupCriterionBids = function() {
  $nso.AdGroupCriterionBids.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.ConversionOptimizerAdGroupCriterionBids', false, $nst + '.AdGroupCriterionBids');

$nso.BudgetOptimizerAdGroupCriterionBids = function() {
  $nso.AdGroupCriterionBids.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.BudgetOptimizerAdGroupCriterionBids', false, $nst + '.AdGroupCriterionBids');
$ref.prop('proxyBid', $nst + '.Bid', 'proxyBid', false, false);
$ref.prop('enhancedCpcEnabled', 'boolean', 'enhancedCpcEnabled', false, true);

$nso.QualityInfo = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.QualityInfo', false, $sot);
$ref.prop('isKeywordAdRelevanceAcceptable', 'boolean', 'isKeywordAdRelevanceAcceptable', false, true);
$ref.prop('isLandingPageQualityAcceptable', 'boolean', 'isLandingPageQualityAcceptable', false, true);
$ref.prop('isLandingPageLatencyAcceptable', 'boolean', 'isLandingPageLatencyAcceptable', false, true);
$ref.prop('qualityScore', 'integer', 'qualityScore', false, true);

$nso.Campaign = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.Campaign', false, $sot);
$ref.prop('id', 'integer', 'id', false, true);
$ref.prop('name', 'string', 'name', false, true);
$ref.prop('status', $nst + '.CampaignStatus', 'status', false, false);
$ref.prop('servingStatus', $nst + '.ServingStatus', 'servingStatus', false, false);
$ref.prop('startDate', 'string', 'startDate', false, true);
$ref.prop('endDate', 'string', 'endDate', false, true);
$ref.prop('budget', $nst + '.Budget', 'budget', false, false);
$ref.prop('biddingStrategy', $nst + '.BiddingStrategy', 'biddingStrategy', false, false);
$ref.prop('autoKeywordMatchingStatus', $nst + '.AutoKeywordMatchingStatus', 'autoKeywordMatchingStatus', false, false);
$ref.prop('campaignStats', $nst + '.CampaignStats', 'campaignStats', false, false);
$ref.prop('adServingOptimizationStatus', $nst + '.AdServingOptimizationStatus', 'adServingOptimizationStatus', false, false);
$ref.prop('frequencyCap', $nst + '.FrequencyCap', 'frequencyCap', false, false);

$nso.CampaignStatus = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.CampaignStatus', true, $sot);

$nso.CampaignStatus.ACTIVE = 'ACTIVE';
$nso.CampaignStatus.DELETED = 'DELETED';
$nso.CampaignStatus.PAUSED = 'PAUSED';

$nso.ServingStatus = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.ServingStatus', true, $sot);

$nso.ServingStatus.SERVING = 'SERVING';
$nso.ServingStatus.NONE = 'NONE';
$nso.ServingStatus.ENDED = 'ENDED';
$nso.ServingStatus.PENDING = 'PENDING';
$nso.ServingStatus.SUSPENDED = 'SUSPENDED';

$nso.Budget = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.Budget', false, $sot);
$ref.prop('period', $nst + '.BudgetBudgetPeriod', 'period', false, false);
$ref.prop('amount', $nst + '.Money', 'amount', false, false);
$ref.prop('deliveryMethod', $nst + '.BudgetBudgetDeliveryMethod', 'deliveryMethod', false, false);

$nso.BudgetBudgetPeriod = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.BudgetBudgetPeriod', true, $sot);

$nso.BudgetBudgetPeriod.DAILY = 'DAILY';
$nso.BudgetBudgetPeriod.MONTHLY = 'MONTHLY';

$nso.BudgetBudgetDeliveryMethod = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.BudgetBudgetDeliveryMethod', true, $sot);

$nso.BudgetBudgetDeliveryMethod.STANDARD = 'STANDARD';
$nso.BudgetBudgetDeliveryMethod.ACCELERATED = 'ACCELERATED';

$nso.BiddingStrategy = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.BiddingStrategy', false, $sot);
$ref.prop('biddingStrategyType', 'string', 'BiddingStrategy.Type', false, true);

$nso.ManualCPM = function() {
  $nso.BiddingStrategy.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.ManualCPM', false, $nst + '.BiddingStrategy');

$nso.ManualCPC = function() {
  $nso.BiddingStrategy.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.ManualCPC', false, $nst + '.BiddingStrategy');
$ref.prop('positionPreference', $nst + '.PositionPreference', 'positionPreference', false, false);

$nso.PositionPreference = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.PositionPreference', true, $sot);

$nso.PositionPreference.ON = 'ON';
$nso.PositionPreference.OFF = 'OFF';

$nso.ConversionOptimizer = function() {
  $nso.BiddingStrategy.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.ConversionOptimizer', false, $nst + '.BiddingStrategy');
$ref.prop('pricingModel', $nst + '.PricingModel', 'pricingModel', false, false);
$ref.prop('conversionOptimizerBidType', $nst + '.ConversionOptimizerBidType', 'conversionOptimizerBidType', false, false);
$ref.prop('deduplicationMode', $nst + '.ConversionDeduplicationMode', 'deduplicationMode', false, false);

$nso.PricingModel = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.PricingModel', true, $sot);

$nso.PricingModel.CLICKS = 'CLICKS';
$nso.PricingModel.IMPRESSIONS = 'IMPRESSIONS';
$nso.PricingModel.CONVERSIONS = 'CONVERSIONS';

$nso.BudgetOptimizer = function() {
  $nso.BiddingStrategy.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.BudgetOptimizer', false, $nst + '.BiddingStrategy');
$ref.prop('bidCeiling', $nst + '.Money', 'bidCeiling', false, false);

$nso.AutoKeywordMatchingStatus = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AutoKeywordMatchingStatus', true, $sot);

$nso.AutoKeywordMatchingStatus.OPT_IN = 'OPT_IN';
$nso.AutoKeywordMatchingStatus.OPT_OUT = 'OPT_OUT';

$nso.AdServingOptimizationStatus = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AdServingOptimizationStatus', true, $sot);

$nso.AdServingOptimizationStatus.OPTIMIZE = 'OPTIMIZE';
$nso.AdServingOptimizationStatus.ROTATE = 'ROTATE';
$nso.AdServingOptimizationStatus.UNAVAILABLE = 'UNAVAILABLE';

$nso.FrequencyCap = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.FrequencyCap', false, $sot);
$ref.prop('impressions', 'integer', 'impressions', false, true);
$ref.prop('timeUnit', $nst + '.TimeUnit', 'timeUnit', false, false);
$ref.prop('level', $nst + '.Level', 'level', false, false);

$nso.TimeUnit = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.TimeUnit', true, $sot);

$nso.TimeUnit.MINUTE = 'MINUTE';
$nso.TimeUnit.HOUR = 'HOUR';
$nso.TimeUnit.DAY = 'DAY';
$nso.TimeUnit.WEEK = 'WEEK';
$nso.TimeUnit.MONTH = 'MONTH';
$nso.TimeUnit.LIFETIME = 'LIFETIME';

$nso.Level = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.Level', true, $sot);

$nso.Level.CREATIVE = 'CREATIVE';
$nso.Level.ADGROUP = 'ADGROUP';
$nso.Level.CAMPAIGN = 'CAMPAIGN';
$nso.Level.UNKNOWN = 'UNKNOWN';

$nso.CampaignCriterion = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.CampaignCriterion', false, $sot);
$ref.prop('campaignId', 'integer', 'campaignId', false, true);
$ref.prop('criterion', $nst + '.Criterion', 'criterion', false, false);
$ref.prop('campaignCriterionType', 'string', 'CampaignCriterion.Type', false, true);

$nso.NegativeCampaignCriterion = function() {
  $nso.CampaignCriterion.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.NegativeCampaignCriterion', false, $nst + '.CampaignCriterion');

$nso.Job = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.Job', false, $sot);
$ref.prop('customerJobKey', 'string', 'customerJobKey', false, true);
$ref.prop('context', $nst + '.JobContext', 'context', false, false);
$ref.prop('failureReason', $nst + '.ApiErrorReason', 'failureReason', false, false);
$ref.prop('stats', $nst + '.JobStats', 'stats', false, false);
$ref.prop('billingSummary', $nst + '.BillingSummary', 'billingSummary', false, false);
$ref.prop('jobType', 'string', 'Job.Type', false, true);

$nso.JobContext = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.JobContext', false, $sot);
$ref.prop('authenticatedUserEmail', 'string', 'authenticatedUserEmail', false, true);
$ref.prop('effectiveCustomerId', 'integer', 'effectiveCustomerId', false, true);

$nso.ApiErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.ApiErrorReason', false, $sot);
$ref.prop('item', 'System.Object', [{elementName: 'AdErrorReason', className: $nst + '.AdErrorReason'}, {elementName: 'AdGroupAdErrorReason', className: $nst + '.AdGroupAdErrorReason'}, {elementName: 'AdGroupCriterionErrorReason', className: $nst + '.AdGroupCriterionErrorReason'}, {elementName: 'AdGroupServiceErrorReason', className: $nst + '.AdGroupServiceErrorReason'}, {elementName: 'AuthenticationErrorReason', className: $nst + '.AuthenticationErrorReason'}, {elementName: 'AuthorizationErrorReason', className: $nst + '.AuthorizationErrorReason'}, {elementName: 'BiddingErrorReason', className: $nst + '.BiddingErrorReason'}, {elementName: 'BiddingTransitionErrorReason', className: $nst + '.BiddingTransitionErrorReason'}, {elementName: 'BudgetErrorReason', className: $nst + '.BudgetErrorReason'}, {elementName: 'BulkMutateJobErrorReason', className: $nst + '.BulkMutateJobErrorReason'}, {elementName: 'CampaignCriterionErrorReason', className: $nst + '.CampaignCriterionErrorReason'}, {elementName: 'CampaignErrorReason', className: $nst + '.CampaignErrorReason'}, {elementName: 'ClientTermsErrorReason', className: $nst + '.ClientTermsErrorReason'}, {elementName: 'DatabaseErrorReason', className: $nst + '.DatabaseErrorReason'}, {elementName: 'DateErrorReason', className: $nst + '.DateErrorReason'}, {elementName: 'DistinctErrorReason', className: $nst + '.DistinctErrorReason'}, {elementName: 'EntityAccessDeniedReason', className: $nst + '.EntityAccessDeniedReason'}, {elementName: 'EntityCountLimitExceededReason', className: $nst + '.EntityCountLimitExceededReason'}, {elementName: 'EntityNotFoundReason', className: $nst + '.EntityNotFoundReason'}, {elementName: 'IdErrorReason', className: $nst + '.IdErrorReason'}, {elementName: 'ImageErrorReason', className: $nst + '.ImageErrorReason'}, {elementName: 'InternalApiErrorReason', className: $nst + '.InternalApiErrorReason'}, {elementName: 'JobErrorReason', className: $nst + '.JobErrorReason'}, {elementName: 'LoasAuthenticationErrorReason', className: $nst + '.LoasAuthenticationErrorReason'}, {elementName: 'MediaErrorReason', className: $nst + '.MediaErrorReason'}, {elementName: 'NewEntityCreationErrorReason', className: $nst + '.NewEntityCreationErrorReason'}, {elementName: 'NotEmptyErrorReason', className: $nst + '.NotEmptyErrorReason'}, {elementName: 'NotWhitelistedErrorReason', className: $nst + '.NotWhitelistedErrorReason'}, {elementName: 'NullErrorReason', className: $nst + '.NullErrorReason'}, {elementName: 'OperationAccessDeniedReason', className: $nst + '.OperationAccessDeniedReason'}, {elementName: 'OperatorErrorReason', className: $nst + '.OperatorErrorReason'}, {elementName: 'PagingErrorReason', className: $nst + '.PagingErrorReason'}, {elementName: 'PolicyViolationErrorReason', className: $nst + '.PolicyViolationErrorReason'}, {elementName: 'QuotaCheckErrorReason', className: $nst + '.QuotaCheckErrorReason'}, {elementName: 'QuotaErrorReason', className: $nst + '.QuotaErrorReason'}, {elementName: 'QuotaExceededErrorReason', className: $nst + '.QuotaExceededErrorReason'}, {elementName: 'RangeErrorReason', className: $nst + '.RangeErrorReason'}, {elementName: 'RateExceededErrorReason', className: $nst + '.RateExceededErrorReason'}, {elementName: 'ReadOnlyErrorReason', className: $nst + '.ReadOnlyErrorReason'}, {elementName: 'RegionCodeErrorReason', className: $nst + '.RegionCodeErrorReason'}, {elementName: 'RejectedErrorReason', className: $nst + '.RejectedErrorReason'}, {elementName: 'RequestErrorReason', className: $nst + '.RequestErrorReason'}, {elementName: 'RequiredErrorReason', className: $nst + '.RequiredErrorReason'}, {elementName: 'SizeLimitErrorReason', className: $nst + '.SizeLimitErrorReason'}, {elementName: 'StatsQueryErrorReason', className: $nst + '.StatsQueryErrorReason'}, {elementName: 'StringLengthErrorReason', className: $nst + '.StringLengthErrorReason'}, {elementName: 'TargetErrorReason', className: $nst + '.TargetErrorReason'}], false, true);

$nso.AdErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AdErrorReason', true, $sot);

$nso.AdErrorReason.APPROXIMATELY_TOO_LONG = 'APPROXIMATELY_TOO_LONG';
$nso.AdErrorReason.APPROXIMATELY_TOO_SHORT = 'APPROXIMATELY_TOO_SHORT';
$nso.AdErrorReason.CANNOT_SET_BUSINESS_NAME_IF_URL_SET = 'CANNOT_SET_BUSINESS_NAME_IF_URL_SET';
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

$nso.AdGroupAdErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AdGroupAdErrorReason', true, $sot);

$nso.AdGroupAdErrorReason.AD_NOT_UNDER_ADGROUP = 'AD_NOT_UNDER_ADGROUP';
$nso.AdGroupAdErrorReason.CANNOT_OPERATE_ON_DELETED_ADGROUPAD = 'CANNOT_OPERATE_ON_DELETED_ADGROUPAD';
$nso.AdGroupAdErrorReason.CANNOT_CREATE_DEPRECATED_ADS = 'CANNOT_CREATE_DEPRECATED_ADS';
$nso.AdGroupAdErrorReason.EMPTY_FIELD = 'EMPTY_FIELD';
$nso.AdGroupAdErrorReason.ENTITY_REFERENCED_IN_MULTIPLE_OPS = 'ENTITY_REFERENCED_IN_MULTIPLE_OPS';
$nso.AdGroupAdErrorReason.UNSUPPORTED_OPERATION = 'UNSUPPORTED_OPERATION';

$nso.AdGroupServiceErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AdGroupServiceErrorReason', true, $sot);

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

$nso.BiddingTransitionErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.BiddingTransitionErrorReason', true, $sot);

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

$nso.BulkMutateJobErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.BulkMutateJobErrorReason', true, $sot);

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

$nso.CampaignCriterionErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.CampaignCriterionErrorReason', true, $sot);

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

$nso.CampaignErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.CampaignErrorReason', true, $sot);

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
$nso.CampaignErrorReason.UNKNOWN = 'UNKNOWN';

$nso.EntityAccessDeniedReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.EntityAccessDeniedReason', true, $sot);

$nso.EntityAccessDeniedReason.READ_ACCESS_DENIED = 'READ_ACCESS_DENIED';
$nso.EntityAccessDeniedReason.WRITE_ACCESS_DENIED = 'WRITE_ACCESS_DENIED';

$nso.IdErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.IdErrorReason', true, $sot);

$nso.IdErrorReason.NOT_FOUND = 'NOT_FOUND';

$nso.JobErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.JobErrorReason', true, $sot);

$nso.JobErrorReason.DUPLICATE_JOB_KEY_FOR_CUSTOMER = 'DUPLICATE_JOB_KEY_FOR_CUSTOMER';
$nso.JobErrorReason.JOB_TYPE_NOT_SUPPORTED = 'JOB_TYPE_NOT_SUPPORTED';
$nso.JobErrorReason.PREREQUISITE_JOB_FAILED = 'PREREQUISITE_JOB_FAILED';
$nso.JobErrorReason.SELECTOR_CANNOT_USE_BOTH_JOB_IDS_AND_JOB_KEYS = 'SELECTOR_CANNOT_USE_BOTH_JOB_IDS_AND_JOB_KEYS';
$nso.JobErrorReason.TOO_MANY_PREREQUISITE_JOBS = 'TOO_MANY_PREREQUISITE_JOBS';
$nso.JobErrorReason.TOO_MANY_JOBS_IN_QUEUE = 'TOO_MANY_JOBS_IN_QUEUE';
$nso.JobErrorReason.WORKFLOW_FAILURE = 'WORKFLOW_FAILURE';

$nso.LoasAuthenticationErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.LoasAuthenticationErrorReason', true, $sot);

$nso.LoasAuthenticationErrorReason.PROTOCOL_MISMATCH = 'PROTOCOL_MISMATCH';
$nso.LoasAuthenticationErrorReason.SECURITY_LEVEL_MISMATCH = 'SECURITY_LEVEL_MISMATCH';
$nso.LoasAuthenticationErrorReason.CLIENT_NOT_AUTHORIZED = 'CLIENT_NOT_AUTHORIZED';
$nso.LoasAuthenticationErrorReason.ADS_USER_NOT_FOUND = 'ADS_USER_NOT_FOUND';
$nso.LoasAuthenticationErrorReason.NOT_INTERNAL_USER = 'NOT_INTERNAL_USER';
$nso.LoasAuthenticationErrorReason.UNKNOWN = 'UNKNOWN';

$nso.PagingErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.PagingErrorReason', true, $sot);

$nso.PagingErrorReason.START_INDEX_CANNOT_BE_NEGATIVE = 'START_INDEX_CANNOT_BE_NEGATIVE';
$nso.PagingErrorReason.NUMBER_OF_RESULTS_CANNOT_BE_NEGATIVE = 'NUMBER_OF_RESULTS_CANNOT_BE_NEGATIVE';
$nso.PagingErrorReason.UNKNOWN = 'UNKNOWN';

$nso.PolicyViolationErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.PolicyViolationErrorReason', true, $sot);

$nso.PolicyViolationErrorReason.POLICY_ERROR = 'POLICY_ERROR';

$nso.QuotaErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.QuotaErrorReason', true, $sot);

$nso.QuotaErrorReason.TOO_MANY_ADGROUPS_PER_CAMPAIGN = 'TOO_MANY_ADGROUPS_PER_CAMPAIGN';
$nso.QuotaErrorReason.TOO_MANY_CAMPAIGNS_PER_ACCOUNT = 'TOO_MANY_CAMPAIGNS_PER_ACCOUNT';
$nso.QuotaErrorReason.TOO_MANY_CONVERSION_TYPES_PER_ACCOUNT = 'TOO_MANY_CONVERSION_TYPES_PER_ACCOUNT';
$nso.QuotaErrorReason.TOO_MANY_KEYWORDS_PER_ADGROUP = 'TOO_MANY_KEYWORDS_PER_ADGROUP';
$nso.QuotaErrorReason.TOO_MANY_KEYWORDS_PER_CAMPAIGN = 'TOO_MANY_KEYWORDS_PER_CAMPAIGN';
$nso.QuotaErrorReason.TOO_MANY_KEYWORDS_PER_CUSTOMER = 'TOO_MANY_KEYWORDS_PER_CUSTOMER';
$nso.QuotaErrorReason.TOO_MANY_SITES_PER_ADGROUP = 'TOO_MANY_SITES_PER_ADGROUP';
$nso.QuotaErrorReason.TOO_MANY_SITES_PER_CAMPAIGN = 'TOO_MANY_SITES_PER_CAMPAIGN';

$nso.QuotaExceededErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.QuotaExceededErrorReason', true, $sot);

$nso.QuotaExceededErrorReason.QUOTA_EXCEEDED = 'QUOTA_EXCEEDED';

$nso.RejectedErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.RejectedErrorReason', true, $sot);

$nso.RejectedErrorReason.UNKNOWN_VALUE = 'UNKNOWN_VALUE';

$nso.JobStats = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.JobStats', false, $sot);
$ref.prop('progressPercent', 'integer', 'progressPercent', false, true);
$ref.prop('pendingTimeMillis', 'integer', 'pendingTimeMillis', false, true);
$ref.prop('processingTimeMillis', 'integer', 'processingTimeMillis', false, true);
$ref.prop('jobStatsType', 'string', 'JobStats.Type', false, true);

$nso.BulkMutateJobStats = function() {
  $nso.JobStats.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.BulkMutateJobStats', false, $nst + '.JobStats');
$ref.prop('numOperations', 'integer', 'numOperations', false, true);
$ref.prop('numFailedOperations', 'integer', 'numFailedOperations', false, true);
$ref.prop('numUnprocessedOperations', 'integer', 'numUnprocessedOperations', false, true);

$nso.BillingSummary = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.BillingSummary', false, $sot);
$ref.prop('numOperations', 'integer', 'numOperations', false, true);
$ref.prop('numUnits', 'integer', 'numUnits', false, true);

$nso.BulkMutateJob = function() {
  $nso.Job.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.BulkMutateJob', false, $nst + '.Job');
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

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.BulkMutateJobPolicy', false, $sot);
$ref.prop('prerequisiteJobIds', 'integer', 'prerequisiteJobIds', true, true);
$ref.prop('dummy', 'string', 'dummy', false, true);

$nso.BulkMutateRequest = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.BulkMutateRequest', false, $sot);
$ref.prop('partIndex', 'integer', 'partIndex', false, true);
$ref.prop('operationStreams', $nst + '.OperationStream', 'operationStreams', true, false);

$nso.OperationStream = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.OperationStream', false, $sot);
$ref.prop('scopingEntityId', $nst + '.EntityId', 'scopingEntityId', false, false);
$ref.prop('operations', $nst + '.Operation', 'operations', true, false);

$nso.EntityId = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.EntityId', false, $sot);
$ref.prop('type', $nst + '.EntityIdType', 'type', false, false);
$ref.prop('value', 'integer', 'value', false, true);

$nso.EntityIdType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.EntityIdType', true, $sot);

$nso.EntityIdType.ADGROUP_ID = 'ADGROUP_ID';
$nso.EntityIdType.AD_ID = 'AD_ID';
$nso.EntityIdType.CAMPAIGN_ID = 'CAMPAIGN_ID';
$nso.EntityIdType.CUSTOMER_ID = 'CUSTOMER_ID';

$nso.JobOperation = function() {
  $nso.Operation.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.JobOperation', false, $nst + '.Operation');
$ref.prop('operand', $nst + '.Job', 'operand', false, false);

$nso.CampaignTargetOperation = function() {
  $nso.Operation.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.CampaignTargetOperation', false, $nst + '.Operation');
$ref.prop('operand', $nst + '.TargetList', 'operand', false, false);

$nso.TargetList = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.TargetList', false, $sot);
$ref.prop('campaignId', 'integer', 'campaignId', false, true);
$ref.prop('targetListType', 'string', 'TargetList.Type', false, true);

$nso.PlatformTargetList = function() {
  $nso.TargetList.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.PlatformTargetList', false, $nst + '.TargetList');
$ref.prop('targets', $nst + '.PlatformTarget', 'targets', true, false);

$nso.NetworkTargetList = function() {
  $nso.TargetList.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.NetworkTargetList', false, $nst + '.TargetList');
$ref.prop('targets', $nst + '.NetworkTarget', 'targets', true, false);

$nso.MobileTargetList = function() {
  $nso.TargetList.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.MobileTargetList', false, $nst + '.TargetList');
$ref.prop('targets', $nst + '.MobileTarget', 'targets', true, false);

$nso.LanguageTargetList = function() {
  $nso.TargetList.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.LanguageTargetList', false, $nst + '.TargetList');
$ref.prop('targets', $nst + '.LanguageTarget', 'targets', true, false);

$nso.GeoTargetList = function() {
  $nso.TargetList.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.GeoTargetList', false, $nst + '.TargetList');
$ref.prop('targets', $nst + '.GeoTarget', 'targets', true, false);

$nso.DemographicTargetList = function() {
  $nso.TargetList.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.DemographicTargetList', false, $nst + '.TargetList');
$ref.prop('targets', $nst + '.DemographicTarget', 'targets', true, false);

$nso.AdScheduleTargetList = function() {
  $nso.TargetList.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AdScheduleTargetList', false, $nst + '.TargetList');
$ref.prop('targets', $nst + '.AdScheduleTarget', 'targets', true, false);

$nso.CampaignOperation = function() {
  $nso.Operation.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.CampaignOperation', false, $nst + '.Operation');
$ref.prop('biddingTransition', $nst + '.BiddingTransition', 'biddingTransition', false, false);
$ref.prop('operand', $nst + '.Campaign', 'operand', false, false);

$nso.BiddingTransition = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.BiddingTransition', false, $sot);
$ref.prop('targetBiddingStrategy', $nst + '.BiddingStrategy', 'targetBiddingStrategy', false, false);
$ref.prop('explicitAdGroupBids', $nst + '.AdGroupBids', 'explicitAdGroupBids', false, false);
$ref.prop('biddingTransitionType', 'string', 'BiddingTransition.Type', false, true);

$nso.ConversionOptimizerBiddingTransition = function() {
  $nso.BiddingTransition.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.ConversionOptimizerBiddingTransition', false, $nst + '.BiddingTransition');
$ref.prop('useSavedBids', 'boolean', 'useSavedBids', false, true);

$nso.CampaignCriterionOperation = function() {
  $nso.Operation.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.CampaignCriterionOperation', false, $nst + '.Operation');
$ref.prop('operand', $nst + '.CampaignCriterion', 'operand', false, false);

$nso.AdGroupOperation = function() {
  $nso.Operation.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AdGroupOperation', false, $nst + '.Operation');
$ref.prop('operand', $nst + '.AdGroup', 'operand', false, false);

$nso.AdGroupCriterionOperation = function() {
  $nso.Operation.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AdGroupCriterionOperation', false, $nst + '.Operation');
$ref.prop('operand', $nst + '.AdGroupCriterion', 'operand', false, false);
$ref.prop('exemptionRequests', $nst + '.ExemptionRequest', 'exemptionRequests', true, false);

$nso.ExemptionRequest = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.ExemptionRequest', false, $sot);
$ref.prop('key', $nst + '.PolicyViolationKey', 'key', false, false);

$nso.AdGroupAdOperation = function() {
  $nso.Operation.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AdGroupAdOperation', false, $nst + '.Operation');
$ref.prop('operand', $nst + '.AdGroupAd', 'operand', false, false);
$ref.prop('exemptionRequests', $nst + '.ExemptionRequest', 'exemptionRequests', true, false);

$nso.BasicJobStatus = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.BasicJobStatus', true, $sot);

$nso.BasicJobStatus.COMPLETED = 'COMPLETED';
$nso.BasicJobStatus.PROCESSING = 'PROCESSING';
$nso.BasicJobStatus.FAILED = 'FAILED';
$nso.BasicJobStatus.PENDING = 'PENDING';

$nso.JobEvent = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.JobEvent', false, $sot);
$ref.prop('dateTime', 'string', 'dateTime', false, true);
$ref.prop('jobEventType', 'string', 'JobEvent.Type', false, true);

$nso.BulkMutateResult = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.BulkMutateResult', false, $sot);
$ref.prop('partIndex', 'integer', 'partIndex', false, true);
$ref.prop('operationStreamResults', $nst + '.OperationStreamResult', 'operationStreamResults', true, false);

$nso.OperationStreamResult = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.OperationStreamResult', false, $sot);
$ref.prop('operationResults', $nst + '.OperationResult', 'operationResults', true, false);
$ref.prop('dummy', 'string', 'dummy', false, true);

$nso.OperationResult = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.OperationResult', false, $sot);
$ref.prop('operationResultType', 'string', 'OperationResult.Type', false, true);

$nso.UnprocessedResult = function() {
  $nso.OperationResult.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.UnprocessedResult', false, $nst + '.OperationResult');

$nso.ReturnValueResult = function() {
  $nso.OperationResult.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.ReturnValueResult', false, $nst + '.OperationResult');
$ref.prop('returnValue', $nst + '.Operand', 'returnValue', false, false);

$nso.LostResult = function() {
  $nso.OperationResult.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.LostResult', false, $nst + '.OperationResult');

$nso.FailureResult = function() {
  $nso.OperationResult.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.FailureResult', false, $nst + '.OperationResult');
$ref.prop('cause', $nst + '.ApiException', 'cause', false, false);

$nso.BatchFailureResult = function() {
  $nso.OperationResult.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.BatchFailureResult', false, $nst + '.OperationResult');
$ref.prop('operationIndexInBatch', 'integer', 'operationIndexInBatch', false, true);

$nso.JobSelector = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.JobSelector', false, $sot);
$ref.prop('customerJobKeys', 'string', 'customerJobKeys', true, true);
$ref.prop('includeHistory', 'boolean', 'includeHistory', false, true);
$ref.prop('includeStats', 'boolean', 'includeStats', false, true);
$ref.prop('jobSelectorType', 'string', 'JobSelector.Type', false, true);

$nso.BulkMutateJobSelector = function() {
  $nso.JobSelector.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.BulkMutateJobSelector', false, $nst + '.JobSelector');
$ref.prop('jobIds', 'integer', 'jobIds', true, true);
$ref.prop('jobStatuses', $nst + '.BasicJobStatus', 'jobStatuses', true, false);
$ref.prop('resultPartIndex', 'integer', 'resultPartIndex', false, true);

$nso.RejectedError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.RejectedError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.RejectedErrorReason', 'reason', false, false);

$nso.QuotaError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.QuotaError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.QuotaErrorReason', 'reason', false, false);
$ref.prop('limit', 'integer', 'limit', false, true);

$nso.PagingError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.PagingError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.PagingErrorReason', 'reason', false, false);

$nso.JobError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.JobError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.JobErrorReason', 'reason', false, false);

$nso.IdError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.IdError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.IdErrorReason', 'reason', false, false);

$nso.CampaignCriterionLimitExceeded = function() {
  $nso.EntityCountLimitExceeded.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.CampaignCriterionLimitExceeded', false, $nst + '.EntityCountLimitExceeded');
$ref.prop('limitType', $nst + '.CampaignCriterionLimitExceededCriteriaLimitType', 'limitType', false, false);

$nso.CampaignCriterionLimitExceededCriteriaLimitType = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.CampaignCriterionLimitExceededCriteriaLimitType', true, $sot);

$nso.CampaignCriterionLimitExceededCriteriaLimitType.CAMPAIGN_NEGATIVE_KEYWORD = 'CAMPAIGN_NEGATIVE_KEYWORD';
$nso.CampaignCriterionLimitExceededCriteriaLimitType.CAMPAIGN_NEGATIVE_WEBSITE = 'CAMPAIGN_NEGATIVE_WEBSITE';

$nso.AdGroupAdCountLimitExceeded = function() {
  $nso.EntityCountLimitExceeded.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AdGroupAdCountLimitExceeded', false, $nst + '.EntityCountLimitExceeded');

$nso.EntityAccessDenied = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.EntityAccessDenied', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.EntityAccessDeniedReason', 'reason', false, false);

$nso.CampaignError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.CampaignError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.CampaignErrorReason', 'reason', false, false);

$nso.CampaignCriterionError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.CampaignCriterionError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.CampaignCriterionErrorReason', 'reason', false, false);

$nso.BulkMutateJobError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.BulkMutateJobError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.BulkMutateJobErrorReason', 'reason', false, false);

$nso.BiddingTransitionError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.BiddingTransitionError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.BiddingTransitionErrorReason', 'reason', false, false);

$nso.AdGroupServiceError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AdGroupServiceError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.AdGroupServiceErrorReason', 'reason', false, false);

$nso.AdGroupAdError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AdGroupAdError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.AdGroupAdErrorReason', 'reason', false, false);

$nso.AdError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AdError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.AdErrorReason', 'reason', false, false);

$nso.AdExtensionOverrideService = function() {
  $sso.call(this);
  this.nametable_ = new google.ads.adwords.v201003.SoapNametable();
};

$ref = $dsf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AdExtensionOverrideService');
$ref.prop('requestHeader', $nst + '.RequestHeader', 'RequestHeader', false, false);
$ref.prop('responseHeader', $nst + '.ResponseHeader', 'ResponseHeader', false, false);
$ref.meth(
  'get',
  'https://adwords.google.com/api/adwords/cm/v201003',
  'https://adwords.google.com/api/adwords/cm/v201003',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.AdExtensionOverridePage', isArray: false, isSystem: false},
  [{propertyName: 'requestHeader', direction: 'in'}, {propertyName: 'responseHeader', direction: 'out'}],
  [{className: $nst + '.AdExtensionOverrideSelector', isArray: false, isSystem: false, name: 'selector', xmlElementName: 'selector'}]
);
$ref.meth(
  'mutate',
  'https://adwords.google.com/api/adwords/cm/v201003',
  'https://adwords.google.com/api/adwords/cm/v201003',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.AdExtensionOverrideReturnValue', isArray: false, isSystem: false},
  [{propertyName: 'requestHeader', direction: 'in'}, {propertyName: 'responseHeader', direction: 'out'}],
  [{className: $nst + '.AdExtensionOverrideOperation', isArray: true, isSystem: false, name: 'operations', xmlElementName: 'operations'}]
);

$nso.AdExtensionOverrideService.prototype.get = function(selector, onsuccess, onfailure) {
  this.invoke.call(this, 'get', [selector], onsuccess, onfailure);
};

$nso.AdExtensionOverrideService.prototype.mutate = function(operations, onsuccess, onfailure) {
  this.invoke.call(this, 'mutate', [operations], onsuccess, onfailure);
};

$nso.ListReturnValue = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.ListReturnValue', false, $sot);
$ref.prop('listReturnValueType', 'string', 'ListReturnValue.Type', false, true);

$nso.AdExtensionOverrideReturnValue = function() {
  $nso.ListReturnValue.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AdExtensionOverrideReturnValue', false, $nst + '.ListReturnValue');
$ref.prop('value', $nst + '.AdExtensionOverride', 'value', true, false);

$nso.AdExtensionOverrideOperation = function() {
  $nso.Operation.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AdExtensionOverrideOperation', false, $nst + '.Operation');
$ref.prop('operand', $nst + '.AdExtensionOverride', 'operand', false, false);

$nso.Page = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.Page', false, $sot);
$ref.prop('totalNumEntries', 'integer', 'totalNumEntries', false, true);
$ref.prop('pageType', 'string', 'Page.Type', false, true);

$nso.AdExtensionOverridePage = function() {
  $nso.Page.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AdExtensionOverridePage', false, $nst + '.Page');
$ref.prop('entries', $nst + '.AdExtensionOverride', 'entries', true, false);

$nso.AdExtensionOverrideSelector = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AdExtensionOverrideSelector', false, $sot);
$ref.prop('campaignIds', 'integer', 'campaignIds', true, true);
$ref.prop('adIds', 'integer', 'adIds', true, true);
$ref.prop('adExtensionIds', 'integer', 'adExtensionIds', true, true);
$ref.prop('statuses', $nst + '.AdExtensionOverrideStatus', 'statuses', true, false);
$ref.prop('paging', $nst + '.Paging', 'paging', false, false);

$nso.AdExtensionOverrideError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AdExtensionOverrideError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.AdExtensionOverrideErrorReason', 'reason', false, false);

$nso.AdExtensionOverrideErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AdExtensionOverrideErrorReason', true, $sot);

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

$nso.AdGroupAdService = function() {
  $sso.call(this);
  this.nametable_ = new google.ads.adwords.v201003.SoapNametable();
};

$ref = $dsf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AdGroupAdService');
$ref.prop('requestHeader', $nst + '.RequestHeader', 'RequestHeader', false, false);
$ref.prop('responseHeader', $nst + '.ResponseHeader', 'ResponseHeader', false, false);
$ref.meth(
  'get',
  'https://adwords.google.com/api/adwords/cm/v201003',
  'https://adwords.google.com/api/adwords/cm/v201003',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.AdGroupAdPage', isArray: false, isSystem: false},
  [{propertyName: 'requestHeader', direction: 'in'}, {propertyName: 'responseHeader', direction: 'out'}],
  [{className: $nst + '.AdGroupAdSelector', isArray: false, isSystem: false, name: 'selector', xmlElementName: 'selector'}]
);
$ref.meth(
  'mutate',
  'https://adwords.google.com/api/adwords/cm/v201003',
  'https://adwords.google.com/api/adwords/cm/v201003',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.AdGroupAdReturnValue', isArray: false, isSystem: false},
  [{propertyName: 'requestHeader', direction: 'in'}, {propertyName: 'responseHeader', direction: 'out'}],
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

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AdGroupAdReturnValue', false, $nst + '.ListReturnValue');
$ref.prop('value', $nst + '.AdGroupAd', 'value', true, false);

$nso.AdGroupAdPage = function() {
  $nso.Page.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AdGroupAdPage', false, $nst + '.Page');
$ref.prop('entries', $nst + '.AdGroupAd', 'entries', true, false);

$nso.StatsSelector = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.StatsSelector', false, $sot);
$ref.prop('dateRange', $nst + '.DateRange', 'dateRange', false, false);
$ref.prop('statsSelectorType', 'string', 'StatsSelector.Type', false, true);

$nso.AdStatsSelector = function() {
  $nso.StatsSelector.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AdStatsSelector', false, $nst + '.StatsSelector');

$nso.AdGroupAdSelector = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AdGroupAdSelector', false, $sot);
$ref.prop('campaignIds', 'integer', 'campaignIds', true, true);
$ref.prop('adGroupIds', 'integer', 'adGroupIds', true, true);
$ref.prop('adIds', 'integer', 'adIds', true, true);
$ref.prop('statuses', $nst + '.AdGroupAdStatus', 'statuses', true, false);
$ref.prop('statsSelector', $nst + '.AdStatsSelector', 'statsSelector', false, false);
$ref.prop('paging', $nst + '.Paging', 'paging', false, false);

$nso.AdGroupCriterionService = function() {
  $sso.call(this);
  this.nametable_ = new google.ads.adwords.v201003.SoapNametable();
};

$ref = $dsf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AdGroupCriterionService');
$ref.prop('requestHeader', $nst + '.RequestHeader', 'RequestHeader', false, false);
$ref.prop('responseHeader', $nst + '.ResponseHeader', 'ResponseHeader', false, false);
$ref.meth(
  'get',
  'https://adwords.google.com/api/adwords/cm/v201003',
  'https://adwords.google.com/api/adwords/cm/v201003',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.AdGroupCriterionPage', isArray: false, isSystem: false},
  [{propertyName: 'requestHeader', direction: 'in'}, {propertyName: 'responseHeader', direction: 'out'}],
  [{className: $nst + '.AdGroupCriterionSelector', isArray: false, isSystem: false, name: 'selector', xmlElementName: 'selector'}]
);
$ref.meth(
  'mutate',
  'https://adwords.google.com/api/adwords/cm/v201003',
  'https://adwords.google.com/api/adwords/cm/v201003',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.AdGroupCriterionReturnValue', isArray: false, isSystem: false},
  [{propertyName: 'requestHeader', direction: 'in'}, {propertyName: 'responseHeader', direction: 'out'}],
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

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AdGroupCriterionReturnValue', false, $nst + '.ListReturnValue');
$ref.prop('value', $nst + '.AdGroupCriterion', 'value', true, false);

$nso.AdGroupCriterionPage = function() {
  $nso.Page.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AdGroupCriterionPage', false, $nst + '.Page');
$ref.prop('entries', $nst + '.AdGroupCriterion', 'entries', true, false);

$nso.AdGroupCriterionIdFilter = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AdGroupCriterionIdFilter', false, $sot);
$ref.prop('campaignId', 'integer', 'campaignId', false, true);
$ref.prop('adGroupId', 'integer', 'adGroupId', false, true);
$ref.prop('criterionId', 'integer', 'criterionId', false, true);

$nso.AdGroupCriterionSelector = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AdGroupCriterionSelector', false, $sot);
$ref.prop('idFilters', $nst + '.AdGroupCriterionIdFilter', 'idFilters', true, false);
$ref.prop('criterionUse', $nst + '.CriterionUse', 'criterionUse', false, false);
$ref.prop('userStatuses', $nst + '.UserStatus', 'userStatuses', true, false);
$ref.prop('statsSelector', $nst + '.StatsSelector', 'statsSelector', false, false);
$ref.prop('paging', $nst + '.Paging', 'paging', false, false);

$nso.CriterionUse = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.CriterionUse', true, $sot);

$nso.CriterionUse.BIDDABLE = 'BIDDABLE';
$nso.CriterionUse.NEGATIVE = 'NEGATIVE';

$nso.AdGroupService = function() {
  $sso.call(this);
  this.nametable_ = new google.ads.adwords.v201003.SoapNametable();
};

$ref = $dsf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AdGroupService');
$ref.prop('requestHeader', $nst + '.RequestHeader', 'RequestHeader', false, false);
$ref.prop('responseHeader', $nst + '.ResponseHeader', 'ResponseHeader', false, false);
$ref.meth(
  'get',
  'https://adwords.google.com/api/adwords/cm/v201003',
  'https://adwords.google.com/api/adwords/cm/v201003',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.AdGroupPage', isArray: false, isSystem: false},
  [{propertyName: 'requestHeader', direction: 'in'}, {propertyName: 'responseHeader', direction: 'out'}],
  [{className: $nst + '.AdGroupSelector', isArray: false, isSystem: false, name: 'selector', xmlElementName: 'selector'}]
);
$ref.meth(
  'mutate',
  'https://adwords.google.com/api/adwords/cm/v201003',
  'https://adwords.google.com/api/adwords/cm/v201003',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.AdGroupReturnValue', isArray: false, isSystem: false},
  [{propertyName: 'requestHeader', direction: 'in'}, {propertyName: 'responseHeader', direction: 'out'}],
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

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AdGroupReturnValue', false, $nst + '.ListReturnValue');
$ref.prop('value', $nst + '.AdGroup', 'value', true, false);

$nso.AdGroupPage = function() {
  $nso.Page.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AdGroupPage', false, $nst + '.Page');
$ref.prop('entries', $nst + '.AdGroup', 'entries', true, false);

$nso.AdGroupSelector = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AdGroupSelector', false, $sot);
$ref.prop('campaignIds', 'integer', 'campaignIds', true, true);
$ref.prop('adGroupIds', 'integer', 'adGroupIds', true, true);
$ref.prop('statsSelector', $nst + '.StatsSelector', 'statsSelector', false, false);
$ref.prop('paging', $nst + '.Paging', 'paging', false, false);

$nso.CampaignAdExtensionService = function() {
  $sso.call(this);
  this.nametable_ = new google.ads.adwords.v201003.SoapNametable();
};

$ref = $dsf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.CampaignAdExtensionService');
$ref.prop('requestHeader', $nst + '.RequestHeader', 'RequestHeader', false, false);
$ref.prop('responseHeader', $nst + '.ResponseHeader', 'ResponseHeader', false, false);
$ref.meth(
  'get',
  'https://adwords.google.com/api/adwords/cm/v201003',
  'https://adwords.google.com/api/adwords/cm/v201003',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.CampaignAdExtensionPage', isArray: false, isSystem: false},
  [{propertyName: 'requestHeader', direction: 'in'}, {propertyName: 'responseHeader', direction: 'out'}],
  [{className: $nst + '.CampaignAdExtensionSelector', isArray: false, isSystem: false, name: 'selector', xmlElementName: 'selector'}]
);
$ref.meth(
  'mutate',
  'https://adwords.google.com/api/adwords/cm/v201003',
  'https://adwords.google.com/api/adwords/cm/v201003',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.CampaignAdExtensionReturnValue', isArray: false, isSystem: false},
  [{propertyName: 'requestHeader', direction: 'in'}, {propertyName: 'responseHeader', direction: 'out'}],
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

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.CampaignAdExtensionReturnValue', false, $nst + '.ListReturnValue');
$ref.prop('value', $nst + '.CampaignAdExtension', 'value', true, false);

$nso.CampaignAdExtension = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.CampaignAdExtension', false, $sot);
$ref.prop('campaignId', 'integer', 'campaignId', false, true);
$ref.prop('adExtension', $nst + '.AdExtension', 'adExtension', false, false);
$ref.prop('status', $nst + '.CampaignAdExtensionStatus', 'status', false, false);
$ref.prop('approvalStatus', $nst + '.CampaignAdExtensionApprovalStatus', 'approvalStatus', false, false);

$nso.CampaignAdExtensionStatus = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.CampaignAdExtensionStatus', true, $sot);

$nso.CampaignAdExtensionStatus.ACTIVE = 'ACTIVE';
$nso.CampaignAdExtensionStatus.DELETED = 'DELETED';

$nso.CampaignAdExtensionApprovalStatus = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.CampaignAdExtensionApprovalStatus', true, $sot);

$nso.CampaignAdExtensionApprovalStatus.APPROVED = 'APPROVED';
$nso.CampaignAdExtensionApprovalStatus.UNCHECKED = 'UNCHECKED';
$nso.CampaignAdExtensionApprovalStatus.DISAPPROVED = 'DISAPPROVED';

$nso.CampaignAdExtensionOperation = function() {
  $nso.Operation.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.CampaignAdExtensionOperation', false, $nst + '.Operation');
$ref.prop('operand', $nst + '.CampaignAdExtension', 'operand', false, false);

$nso.CampaignAdExtensionPage = function() {
  $nso.Page.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.CampaignAdExtensionPage', false, $nst + '.Page');
$ref.prop('entries', $nst + '.CampaignAdExtension', 'entries', true, false);

$nso.CampaignAdExtensionStatsSelector = function() {
  $nso.StatsSelector.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.CampaignAdExtensionStatsSelector', false, $nst + '.StatsSelector');

$nso.CampaignAdExtensionSelector = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.CampaignAdExtensionSelector', false, $sot);
$ref.prop('statsSelector', $nst + '.CampaignAdExtensionStatsSelector', 'statsSelector', false, false);
$ref.prop('campaignIds', 'integer', 'campaignIds', true, true);
$ref.prop('adExtensionIds', 'integer', 'adExtensionIds', true, true);
$ref.prop('statuses', $nst + '.CampaignAdExtensionStatus', 'statuses', true, false);
$ref.prop('paging', $nst + '.Paging', 'paging', false, false);

$nso.CampaignAdExtensionError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.CampaignAdExtensionError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.CampaignAdExtensionErrorReason', 'reason', false, false);

$nso.CampaignAdExtensionErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.CampaignAdExtensionErrorReason', true, $sot);

$nso.CampaignAdExtensionErrorReason.ADEXTENSION_NOT_UNDER_CAMPAIGN = 'ADEXTENSION_NOT_UNDER_CAMPAIGN';
$nso.CampaignAdExtensionErrorReason.CANNOT_ADD_DELETED_CAMPAIGN_ADEXTENSION = 'CANNOT_ADD_DELETED_CAMPAIGN_ADEXTENSION';
$nso.CampaignAdExtensionErrorReason.CANNOT_OPERATE_ON_DELETED_CAMPAIGN_ADEXTENSION = 'CANNOT_OPERATE_ON_DELETED_CAMPAIGN_ADEXTENSION';
$nso.CampaignAdExtensionErrorReason.INVALID_ADEXTENSION_ID = 'INVALID_ADEXTENSION_ID';
$nso.CampaignAdExtensionErrorReason.MISSING_ADEXTENSION_ID = 'MISSING_ADEXTENSION_ID';
$nso.CampaignAdExtensionErrorReason.MUST_USE_CONCRETE_ADEXTENSION_DURING_ADD = 'MUST_USE_CONCRETE_ADEXTENSION_DURING_ADD';

$nso.AdExtensionError = function() {
  $nso.ApiError.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AdExtensionError', false, $nst + '.ApiError');
$ref.prop('reason', $nst + '.AdExtensionErrorReason', 'reason', false, false);

$nso.AdExtensionErrorReason = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AdExtensionErrorReason', true, $sot);

$nso.AdExtensionErrorReason.ACCOUNT_DELETED = 'ACCOUNT_DELETED';
$nso.AdExtensionErrorReason.CANNOT_HAVE_MULTIPLE_LOCATION_SYNC_EXTENSIONS_PER_CAMPAIGN = 'CANNOT_HAVE_MULTIPLE_LOCATION_SYNC_EXTENSIONS_PER_CAMPAIGN';
$nso.AdExtensionErrorReason.CANNOT_HAVE_MULTIPLE_MOBILE_EXTENSIONS_PER_CAMPAIGN = 'CANNOT_HAVE_MULTIPLE_MOBILE_EXTENSIONS_PER_CAMPAIGN';
$nso.AdExtensionErrorReason.CANNOT_HAVE_MULTIPLE_SITELINKS_EXTENSIONS_PER_CAMPAIGN = 'CANNOT_HAVE_MULTIPLE_SITELINKS_EXTENSIONS_PER_CAMPAIGN';
$nso.AdExtensionErrorReason.INVALID_AUTH_TOKEN_FOR_EMAIL = 'INVALID_AUTH_TOKEN_FOR_EMAIL';
$nso.AdExtensionErrorReason.INVALID_COUNTRY_CODE = 'INVALID_COUNTRY_CODE';
$nso.AdExtensionErrorReason.INVALID_DOMESTIC_PHONE_NUMBER_FORMAT = 'INVALID_DOMESTIC_PHONE_NUMBER_FORMAT';
$nso.AdExtensionErrorReason.INVALID_DESTINATION_URL = 'INVALID_DESTINATION_URL';
$nso.AdExtensionErrorReason.INVALID_EMAIL = 'INVALID_EMAIL';
$nso.AdExtensionErrorReason.INVALID_ENCODED_LOCATION = 'INVALID_ENCODED_LOCATION';
$nso.AdExtensionErrorReason.INVALID_ICON_DIMENSIONS = 'INVALID_ICON_DIMENSIONS';
$nso.AdExtensionErrorReason.INVALID_ID = 'INVALID_ID';
$nso.AdExtensionErrorReason.INVALID_IMAGE_DIMENSIONS = 'INVALID_IMAGE_DIMENSIONS';
$nso.AdExtensionErrorReason.INVALID_INPUT = 'INVALID_INPUT';
$nso.AdExtensionErrorReason.INVALID_LATITUDE = 'INVALID_LATITUDE';
$nso.AdExtensionErrorReason.INVALID_LONGITUDE = 'INVALID_LONGITUDE';
$nso.AdExtensionErrorReason.INVALID_PHONE_NUMBER = 'INVALID_PHONE_NUMBER';
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
$nso.AdExtensionErrorReason.MISSING_POSTAL_CODE = 'MISSING_POSTAL_CODE';
$nso.AdExtensionErrorReason.MISSING_STREET_ADDRESS = 'MISSING_STREET_ADDRESS';
$nso.AdExtensionErrorReason.NUM_LOCATION_EXTENSIONS_OVER_LIMIT = 'NUM_LOCATION_EXTENSIONS_OVER_LIMIT';
$nso.AdExtensionErrorReason.PHONE_NUMBER_NOT_SUPPORTED_FOR_COUNTRY = 'PHONE_NUMBER_NOT_SUPPORTED_FOR_COUNTRY';
$nso.AdExtensionErrorReason.PREMIUM_RATE_NUMBER_NOT_ALLOWED = 'PREMIUM_RATE_NUMBER_NOT_ALLOWED';
$nso.AdExtensionErrorReason.TOO_LONG = 'TOO_LONG';
$nso.AdExtensionErrorReason.USER_NOT_PERMITTED_TO_CREATE_LBC_SYNC_LOCATION_EXTENSION = 'USER_NOT_PERMITTED_TO_CREATE_LBC_SYNC_LOCATION_EXTENSION';

$nso.CampaignCriterionService = function() {
  $sso.call(this);
  this.nametable_ = new google.ads.adwords.v201003.SoapNametable();
};

$ref = $dsf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.CampaignCriterionService');
$ref.prop('requestHeader', $nst + '.RequestHeader', 'RequestHeader', false, false);
$ref.prop('responseHeader', $nst + '.ResponseHeader', 'ResponseHeader', false, false);
$ref.meth(
  'get',
  'https://adwords.google.com/api/adwords/cm/v201003',
  'https://adwords.google.com/api/adwords/cm/v201003',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.CampaignCriterionPage', isArray: false, isSystem: false},
  [{propertyName: 'requestHeader', direction: 'in'}, {propertyName: 'responseHeader', direction: 'out'}],
  [{className: $nst + '.CampaignCriterionSelector', isArray: false, isSystem: false, name: 'selector', xmlElementName: 'selector'}]
);
$ref.meth(
  'mutate',
  'https://adwords.google.com/api/adwords/cm/v201003',
  'https://adwords.google.com/api/adwords/cm/v201003',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.CampaignCriterionReturnValue', isArray: false, isSystem: false},
  [{propertyName: 'requestHeader', direction: 'in'}, {propertyName: 'responseHeader', direction: 'out'}],
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

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.CampaignCriterionReturnValue', false, $nst + '.ListReturnValue');
$ref.prop('value', $nst + '.CampaignCriterion', 'value', true, false);

$nso.CampaignCriterionPage = function() {
  $nso.Page.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.CampaignCriterionPage', false, $nst + '.Page');
$ref.prop('entries', $nst + '.CampaignCriterion', 'entries', true, false);

$nso.CampaignCriterionIdFilter = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.CampaignCriterionIdFilter', false, $sot);
$ref.prop('campaignId', 'integer', 'campaignId', false, true);
$ref.prop('criterionId', 'integer', 'criterionId', false, true);

$nso.CampaignCriterionSelector = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.CampaignCriterionSelector', false, $sot);
$ref.prop('idFilters', $nst + '.CampaignCriterionIdFilter', 'idFilters', true, false);
$ref.prop('paging', $nst + '.Paging', 'paging', false, false);

$nso.CampaignService = function() {
  $sso.call(this);
  this.nametable_ = new google.ads.adwords.v201003.SoapNametable();
};

$ref = $dsf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.CampaignService');
$ref.prop('requestHeader', $nst + '.RequestHeader', 'RequestHeader', false, false);
$ref.prop('responseHeader', $nst + '.ResponseHeader', 'ResponseHeader', false, false);
$ref.meth(
  'get',
  'https://adwords.google.com/api/adwords/cm/v201003',
  'https://adwords.google.com/api/adwords/cm/v201003',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.CampaignPage', isArray: false, isSystem: false},
  [{propertyName: 'requestHeader', direction: 'in'}, {propertyName: 'responseHeader', direction: 'out'}],
  [{className: $nst + '.CampaignSelector', isArray: false, isSystem: false, name: 'selector', xmlElementName: 'selector'}]
);
$ref.meth(
  'mutate',
  'https://adwords.google.com/api/adwords/cm/v201003',
  'https://adwords.google.com/api/adwords/cm/v201003',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.CampaignReturnValue', isArray: false, isSystem: false},
  [{propertyName: 'requestHeader', direction: 'in'}, {propertyName: 'responseHeader', direction: 'out'}],
  [{className: $nst + '.CampaignOperation', isArray: true, isSystem: false, name: 'operations', xmlElementName: 'operations'}]
);

$nso.CampaignService.prototype.get = function(selector, onsuccess, onfailure) {
  this.invoke.call(this, 'get', [selector], onsuccess, onfailure);
};

$nso.CampaignService.prototype.mutate = function(operations, onsuccess, onfailure) {
  this.invoke.call(this, 'mutate', [operations], onsuccess, onfailure);
};

$nso.CampaignReturnValue = function() {
  $nso.ListReturnValue.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.CampaignReturnValue', false, $nst + '.ListReturnValue');
$ref.prop('value', $nst + '.Campaign', 'value', true, false);

$nso.CampaignPage = function() {
  $nso.Page.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.CampaignPage', false, $nst + '.Page');
$ref.prop('totalBudget', $nst + '.Budget', 'totalBudget', false, false);
$ref.prop('entries', $nst + '.Campaign', 'entries', true, false);

$nso.CampaignSelector = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.CampaignSelector', false, $sot);
$ref.prop('ids', 'integer', 'ids', true, true);
$ref.prop('campaignStatuses', $nst + '.CampaignStatus', 'campaignStatuses', true, false);
$ref.prop('statsSelector', $nst + '.StatsSelector', 'statsSelector', false, false);
$ref.prop('paging', $nst + '.Paging', 'paging', false, false);

$nso.CampaignTargetService = function() {
  $sso.call(this);
  this.nametable_ = new google.ads.adwords.v201003.SoapNametable();
};

$ref = $dsf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.CampaignTargetService');
$ref.prop('requestHeader', $nst + '.RequestHeader', 'RequestHeader', false, false);
$ref.prop('responseHeader', $nst + '.ResponseHeader', 'ResponseHeader', false, false);
$ref.meth(
  'get',
  'https://adwords.google.com/api/adwords/cm/v201003',
  'https://adwords.google.com/api/adwords/cm/v201003',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.CampaignTargetPage', isArray: false, isSystem: false},
  [{propertyName: 'requestHeader', direction: 'in'}, {propertyName: 'responseHeader', direction: 'out'}],
  [{className: $nst + '.CampaignTargetSelector', isArray: false, isSystem: false, name: 'selector', xmlElementName: 'selector'}]
);
$ref.meth(
  'mutate',
  'https://adwords.google.com/api/adwords/cm/v201003',
  'https://adwords.google.com/api/adwords/cm/v201003',
  'literal',
  'wrapped',
  'rval',
  {className: $nst + '.CampaignTargetReturnValue', isArray: false, isSystem: false},
  [{propertyName: 'requestHeader', direction: 'in'}, {propertyName: 'responseHeader', direction: 'out'}],
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

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.CampaignTargetReturnValue', false, $nst + '.ListReturnValue');
$ref.prop('value', $nst + '.TargetList', 'value', true, false);

$nso.CampaignTargetPage = function() {
  $nso.Page.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.CampaignTargetPage', false, $nst + '.Page');
$ref.prop('entries', $nst + '.TargetList', 'entries', true, false);

$nso.CampaignTargetSelector = function() {
  $soo.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.CampaignTargetSelector', false, $sot);
$ref.prop('campaignIds', 'integer', 'campaignIds', true, true);
$ref.prop('dummy', 'string', 'dummy', false, true);

$nso.ApiException = function() {
  $nso.ApplicationException.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.ApiException', false, $nst + '.ApplicationException');
$ref.prop('errors', $nst + '.ApiError', 'errors', true, false);

$nso.Placement = function() {
  $nso.Criterion.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.Placement', false, $nst + '.Criterion');
$ref.prop('url', 'string', 'url', false, true);

$nso.AdExtensionOverrideStats = function() {
  $nso.Stats.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.AdExtensionOverrideStats', false, $nst + '.Stats');

$nso.BulkMutateJobEvent = function() {
  $nso.JobEvent.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.BulkMutateJobEvent', false, $nst + '.JobEvent');
$ref.prop('status', $nst + '.BasicJobStatus', 'status', false, false);


$nso.RequestHeader = function() {
  google.ads.adwords.RequestHeader.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.RequestHeader',
    false, 'google.ads.adwords.RequestHeader');


$nso.ResponseHeader = function() {
  google.ads.adwords.ResponseHeader.call(this);
};

$ref = $dtf('https://adwords.google.com/api/adwords/cm/v201003', $nst + '.ResponseHeader',
    false, 'google.ads.adwords.ResponseHeader');


})
('google.ads.adwords.v201003');
