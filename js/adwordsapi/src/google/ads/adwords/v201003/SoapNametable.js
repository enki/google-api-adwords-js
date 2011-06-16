goog.provide('google.ads.adwords.v201003.SoapNametable');

goog.require('google.system.soap.Nametable');

/**
 * @extends google.system.soap.Nametable
 * @constructor
 * @ignore
 */
google.ads.adwords.v201003.SoapNametable = function() {
  google.system.soap.Nametable.call(this);

  this.localxmlnt_ = {
    'cm': 'https://adwords.google.com/api/adwords/cm/v201003',
    'o': 'https://adwords.google.com/api/adwords/o/v201003',
    'mcm': 'https://adwords.google.com/api/adwords/mcm/v201003',
    'job': 'https://adwords.google.com/api/adwords/job/v201003',
    'info': 'https://adwords.google.com/api/adwords/info/v201003',
    'ch': 'https://adwords.google.com/api/adwords/ch/v201003'
  };
};
goog.inherits(google.ads.adwords.v201003.SoapNametable,
    google.system.soap.Nametable);
