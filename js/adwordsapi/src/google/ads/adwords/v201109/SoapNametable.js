
goog.provide('google.ads.adwords.v201109.SoapNametable');

goog.require('google.system.soap.Nametable');

/**
 * @extends google.system.soap.Nametable
 * @constructor
 * @ignore
 */
google.ads.adwords.v201109.SoapNametable = function() {
  google.system.soap.Nametable.call(this);

  this.localxmlnt_ = {
    'cm': 'https://adwords.google.com/api/adwords/cm/v201109',
    'o': 'https://adwords.google.com/api/adwords/o/v201109',
    'mcm': 'https://adwords.google.com/api/adwords/mcm/v201109',
    'job': 'https://adwords.google.com/api/adwords/job/v201109',
    'info': 'https://adwords.google.com/api/adwords/info/v201109',
    'ch': 'https://adwords.google.com/api/adwords/ch/v201109'
  };
};

goog.inherits(google.ads.adwords.v201109.SoapNametable, google.system.soap.Nametable);
