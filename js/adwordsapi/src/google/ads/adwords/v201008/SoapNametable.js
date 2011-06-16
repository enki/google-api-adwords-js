goog.provide('google.ads.adwords.v201008.SoapNametable');

goog.require('google.system.soap.Nametable');

/**
 * @extends google.system.soap.Nametable
 * @constructor
 * @ignore
 */
google.ads.adwords.v201008.SoapNametable = function() {
  google.system.soap.Nametable.call(this);

  this.localxmlnt_ = {
    'cm': 'https://adwords.google.com/api/adwords/cm/v201008',
    'o': 'https://adwords.google.com/api/adwords/o/v201008',
    'mcm': 'https://adwords.google.com/api/adwords/mcm/v201008',
    'job': 'https://adwords.google.com/api/adwords/job/v201008',
    'info': 'https://adwords.google.com/api/adwords/info/v201008',
    'ch': 'https://adwords.google.com/api/adwords/ch/v201008'
  };
};
goog.inherits(google.ads.adwords.v201008.SoapNametable,
    google.system.soap.Nametable);
