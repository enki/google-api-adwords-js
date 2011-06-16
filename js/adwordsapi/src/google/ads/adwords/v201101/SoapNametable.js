
goog.provide('google.ads.adwords.v201101.SoapNametable');

goog.require('google.system.soap.Nametable');

/**
 * @extends google.system.soap.Nametable
 * @constructor
 * @ignore
 */
google.ads.adwords.v201101.SoapNametable = function() {
  google.system.soap.Nametable.call(this);

  this.localxmlnt_ = {
    'cm': 'https://adwords.google.com/api/adwords/cm/v201101',
    'o': 'https://adwords.google.com/api/adwords/o/v201101',
    'mcm': 'https://adwords.google.com/api/adwords/mcm/v201101',
    'job': 'https://adwords.google.com/api/adwords/job/v201101',
    'info': 'https://adwords.google.com/api/adwords/info/v201101',
    'ch': 'https://adwords.google.com/api/adwords/ch/v201101'
  };
};

goog.inherits(google.ads.adwords.v201101.SoapNametable, google.system.soap.Nametable);
