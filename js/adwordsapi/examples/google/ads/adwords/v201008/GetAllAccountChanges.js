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
 * @fileoverview Defines GetAllAccountChanges, a code example that gets all
 * account changes between the two dates specified, for all campaigns.
 */

goog.provide('google.ads.adwords.examples.v201008.GetAllAccountChanges');

goog.require('google.ads.adwords.AdWordsService.v201008');
goog.require('google.ads.adwords.examples.ExampleBase');
goog.require('google.ads.adwords.v201008.CampaignSelector');
goog.require('google.ads.adwords.v201008.CampaignService');
goog.require('google.ads.adwords.v201008.ChangeStatus');
goog.require('google.ads.adwords.v201008.CustomerSyncSelector');
goog.require('google.ads.adwords.v201008.CustomerSyncService');
goog.require('google.ads.adwords.v201008.DateTimeRange');

/**
 * This code example gets all account changes between the two dates
 * specified, for all campaigns.
 *
 * Tags: CustomerSyncService.get
 *
 * @constructor
 */
google.ads.adwords.examples.v201008.GetAllAccountChanges = function() {
  google.ads.adwords.examples.ExampleBase.call(this);
  this.description = 'This code example gets all account changes between the ' +
      'two dates specified, for all campaigns.';
};
goog.inherits(google.ads.adwords.examples.v201008.GetAllAccountChanges,
    google.ads.adwords.examples.ExampleBase);

/**
 * Runs the code example.
 *
 * @param {google.ads.adwords.AdWordsUser} user AdWords user running the code
 * example.
 * @param {function} callback the callback method to be called once this example
 * is complete.
 */
google.ads.adwords.examples.v201008.GetAllAccountChanges.prototype.run =
    function(user, callback) {
  // Get the CustomerSyncService.
  var customerSyncService = user.getService(
      google.ads.adwords.AdWordsService.v201008.CustomerSyncService);

  // The date time string should be of the form  yyyyMMdd HHmmss zzz
  var minDateTime =
      this._T('INSERT_START_DATE_TIME_HERE (yyyymmdd hhmmss zzz)');
  var maxDateTime =
      this._T('INSERT_END_DATE_TIME_HERE (yyyymmdd hhmmss zzz)');

  // Create date time range.
  var dateTimeRange = new google.ads.adwords.v201008.DateTimeRange();
  dateTimeRange.min = minDateTime;
  dateTimeRange.max = maxDateTime;

  // Create selector.
  var selector = new google.ads.adwords.v201008.CustomerSyncSelector();
  selector.dateTimeRange = dateTimeRange;
  try {
    this.getAllCampaigns(user,
      goog.bind(function(campaignIds) {
        selector.campaignIds = campaignIds;

        // Get all account changes for campaign.
        customerSyncService.get(selector,
          goog.bind(function(accountChanges) {
            // Display changes.
            if (accountChanges && accountChanges.changedCampaigns) {
              this.writeOutput('Displaying changes up to: %s',
                  accountChanges.lastChangeTimestamp);
              for (var i = 0, len = accountChanges.changedCampaigns.length;
                  i < len; i++) {
                var campaignChanges = accountChanges.changedCampaigns[i];
                this.writeOutput('Campaign with id "%d" was changed:',
                    campaignChanges.campaignId);
                this.writeOutput('  Campaign changed status: %s',
                    campaignChanges.campaignChangeStatus);
                if (campaignChanges.campaignChangeStatus !=
                    google.ads.adwords.v201008.ChangeStatus.NEW) {
                  this.writeOutput('  Added ad extensions: %s',
                      this.getFormattedList(campaignChanges.addedAdExtensions));
                  this.writeOutput('  Added campaign criteria: %s',
                      this.getFormattedList(
                          campaignChanges.addedCampaignCriteria));
                  this.writeOutput('  Added campaign targeting: %s',
                      campaignChanges.campaignTargetingChanged ? 'yes' : 'no');
                  this.writeOutput('  Deleted ad extensions: %s',
                      this.getFormattedList(
                          campaignChanges.deletedAdExtensions));
                  this.writeOutput('  Deleted campaign criteria: %s',
                      this.getFormattedList(
                          campaignChanges.deletedCampaignCriteria));

                  if (campaignChanges.changedAdGroups) {
                    for (var i = 0; i < campaignChanges.changedAdGroups.length;
                        i++) {
                      var adGroupChanges = campaignChanges.changedAdGroups[i];
                      this.writeOutput('  Ad group with id "%d" was changed:',
                          adGroupChanges.adGroupId);
                      this.writeOutput('    Ad group changed status: %s',
                          adGroupChanges.adGroupChangeStatus);
                      if (adGroupChanges.adGroupChangeStatus !=
                          google.ads.adwords.v201008.ChangeStatus.NEW) {
                        this.writeOutput('    Ads changed: %s',
                            this.getFormattedList(adGroupChanges.changedAds));
                        this.writeOutput('    Criteria changed: %s',
                            this.getFormattedList(
                                adGroupChanges.changedCriteria));
                        this.writeOutput('    Criteria deleted: %s',
                            this.getFormattedList(
                                adGroupChanges.deletedCriteria));
                      }
                    }
                  }
                }
                this.writeOutput();
              }
            } else {
              this.writeOutput('No account changes were found.');
            }
            callback();
          }, this),
          goog.bind(function(soapException) {
            this.writeOutput('Failed to get all account changes. Soap ' +
                'Fault says "%s"', soapException.getInnerException().
                getFaultString());
            callback();
          }, this)
        );
        callback();
      }, this),
      goog.bind(function(soapException) {
        this.writeOutput('Failed to get all campaigns. Soap Fault ' +
            'says "%s"', soapException.getInnerException().getFaultString());
        callback();
      }, this)
    );
  } catch (ex) {
    this.writeOutput('An exception occurred while running the code example.');
    callback();
  }
};

google.ads.adwords.examples.v201008.GetAllAccountChanges.prototype.
    getAllCampaigns = function(user, onSuccess, onFailure) {
  // Get the CampaignService.
  var campaignService = user.getService(
      google.ads.adwords.AdWordsService.v201008.CampaignService);

  var selector = new google.ads.adwords.v201008.CampaignSelector();

  var retval = [];
  campaignService.get(selector,
    goog.bind(function(page) {
      if (page && page.entries && page.entries.length > 0) {
        for (var i = 0, len = page.entries.length; i < len; i++) {
          retval.push(page.entries[i].id);
        }
      }
      onSuccess(retval);
    }, this),
    goog.bind(function(soapException) {
      onFailure(soapException);
    }, this)
  );
};

google.ads.adwords.examples.v201008.GetAllAccountChanges.prototype.
    getFormattedList = function(ids) {
  return ids ? '[' + ids.join(', ') + ']' : '';
};

