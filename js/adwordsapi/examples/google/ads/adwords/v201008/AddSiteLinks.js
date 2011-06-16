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
 */

/**
 * @fileoverview Defines AddSiteLinks, a code example that shows how to add
 *     site links to an existing campaign.
 */

goog.provide('google.ads.adwords.examples.v201008.AddSiteLinks');

goog.require('google.ads.adwords.AdWordsService.v201008');
goog.require('google.ads.adwords.examples.ExampleBase');
goog.require('google.ads.adwords.v201008.CampaignAdExtensionService');
goog.require('google.ads.adwords.v201008.Sitelink');
goog.require('google.ads.adwords.v201008.SitelinksExtension');

/**
 * This code example shows how to add site links to an existing campaign. To
 * create a campaign, run AddCampaign.js.
 *
 * Tags: CampaignAdExtensionService.mutate
 *
 * @extends google.ads.adwords.examples.ExampleBase
 * @constructor
 */

google.ads.adwords.examples.v201008.AddSiteLinks = function() {
  google.ads.adwords.examples.ExampleBase.call(this);
  /**
  * Example description.
  * @type {string}
  */
  this.description = 'This code example shows how to add site links to an ' +
      'existing campaign. To create a campaign, run AddCampaign.js.';
};
goog.inherits(google.ads.adwords.examples.v201008.AddSiteLinks,
    google.ads.adwords.examples.ExampleBase);

/**
 * Runs the code example.
 *
 * @param {google.ads.adwords.AdWordsUser} user AdWords user running the code
 *     example.
 * @param {function} callback the callback method to be called once this example
 *     is complete.
 */
google.ads.adwords.examples.v201008.AddSiteLinks.prototype.run = function(
    user, callback) {
  // Get the CampaignAdExtensionService.
  var campaignAdExtensionService = user.getService(
      google.ads.adwords.AdWordsService.v201008.CampaignAdExtensionService);

  var campaignId = this._T('INSERT_CAMPAIGN_ID_HERE');

  var siteLinkExtension = new google.ads.adwords.v201008.SitelinksExtension();

  var siteLink1 = new google.ads.adwords.v201008.Sitelink();
  siteLink1.displayText = 'Music';
  siteLink1.destinationUrl = 'http://www.example.com/music';

  var siteLink2 = new google.ads.adwords.v201008.Sitelink();
  siteLink2.displayText = 'DVDs';
  siteLink2.destinationUrl = 'http://www.example.com/dvds';

  var siteLink3 = new google.ads.adwords.v201008.Sitelink();
  siteLink3.displayText = 'New albums';
  siteLink3.destinationUrl = 'http://www.example.com/albums/new';

  siteLinkExtension.sitelinks = [siteLink1, siteLink2, siteLink3];

  var campaignAdExtension =
      new google.ads.adwords.v201008.CampaignAdExtension();
  campaignAdExtension.adExtension = siteLinkExtension;
  campaignAdExtension.campaignId = campaignId;

  var operation = new google.ads.adwords.v201008.CampaignAdExtensionOperation();
  operation.operator = google.ads.adwords.v201008.Operator.ADD;
  operation.operand = campaignAdExtension;

  try {
    campaignAdExtensionService.mutate([operation],
      goog.bind(function(retVal) {
        if (retVal && retVal.value && retVal.value.length > 0) {
          for (var i = 0, len = retVal.value.length; i < len; i++) {
            var campaignExtension = retVal.value[i];
            this.writeOutput('Created a campaign ad extension with id = "%d" ' +
                'and status = "%s"', campaignExtension.adExtension.id,
                campaignExtension.status);
            for (var i = 0, len = campaignExtension.adExtension.sitelinks.
                length; i < len; i++) {
              var siteLink = campaignExtension.adExtension.sitelinks[i];
              this.writeOutput('-- Site link text is "%s" and destination ' +
                  'url is %s', siteLink.displayText, siteLink.destinationUrl);
            }
          }
        }
        callback();
      }, this),
      goog.bind(function(soapException) {
        this.writeOutput('"Failed to add sitelinks. Soap Fault says "%s"',
            soapException.getInnerException().getFaultString());
        callback();
      }, this)
    );
  } catch (ex) {
    this.writeOutput('An exception occurred while running the code example.');
    callback();
  }
};
