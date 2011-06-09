goog.provide('google.ads.common.AuthTokenErrorCode');

/**
 * Class provided to encapsulate authentication errors.
 *
 * @constructor
 */
google.ads.common.AuthTokenErrorCode = function() {
};

/**
 * Code for bad authentication error.
 */
google.ads.common.AuthTokenErrorCode.BadAuthentication = 'BadAuthentication';
/**
 * Code for account not verified error.
 */
google.ads.common.AuthTokenErrorCode.NotVerified = 'NotVerified';
/**
 * Code for terms not agreed error.
 */
google.ads.common.AuthTokenErrorCode.TermsNotAgreed = 'TermsNotAgreed';
/**
 * Code for captcha lock error.
 */
google.ads.common.AuthTokenErrorCode.CaptchaRequired = 'CaptchaRequired';
/**
 * Code for unknown error.
 */
google.ads.common.AuthTokenErrorCode.Unknown = 'Unknown';
/**
 * Code for account deleted error.
 */
google.ads.common.AuthTokenErrorCode.AccountDeleted = 'AccountDeleted';
/**
 * Code for account disabled error.
 */
google.ads.common.AuthTokenErrorCode.AccountDisabled = 'AccountDisabled';
/**
 * Code for service disabled error.
 */
google.ads.common.AuthTokenErrorCode.ServiceDisabled = 'ServiceDisabled';
/**
 * Code for service unavailable error.
 */
google.ads.common.AuthTokenErrorCode.ServiceUnavailable = 'ServiceUnavailable';
