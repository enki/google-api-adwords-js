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
 * @fileoverview Defines GetAllVideos, a code example that gets all videos.
 */

goog.provide('google.ads.adwords.examples.v201008.GetAllVideos');

goog.require('google.ads.adwords.AdWordsService.v201008');
goog.require('google.ads.adwords.examples.ExampleBase');
goog.require('google.ads.adwords.v201008.MediaMediaType');
goog.require('google.ads.adwords.v201008.MediaSelector');
goog.require('google.ads.adwords.v201008.MediaService');
goog.require('google.ads.adwords.v201008.Video');

/**
 * This code example gets all videos. To upload video, see
 * http://adwords.google.com/support/aw/bin/answer.py?hl=en&amp;answer=39454.
 *
 * Tags: MediaService.get
 *
 * @constructor
 */
google.ads.adwords.examples.v201008.GetAllVideos = function() {
  google.ads.adwords.examples.ExampleBase.call(this);
  this.description = 'This code example gets all videos. To upload video, ' +
      'see http://adwords.google.com/support/aw/bin/answer.py?hl=en&amp;' +
      'answer=39454.';
};
goog.inherits(google.ads.adwords.examples.v201008.GetAllVideos,
    google.ads.adwords.examples.ExampleBase);

/**
 * Runs the code example.
 *
 * @param {google.ads.adwords.AdWordsUser} user AdWords user running the code
 * example.
 * @param {function} callback the callback method to be called once this example
 * is complete.
 */
google.ads.adwords.examples.v201008.GetAllVideos.prototype.run =
    function(user, callback) {
  // Get the MediaService.
  var mediaService = user.getService(
      google.ads.adwords.AdWordsService.v201008.MediaService);

  // Create selector.
  var selector = new google.ads.adwords.v201008.MediaSelector();
  selector.mediaType = google.ads.adwords.v201008.MediaMediaType.VIDEO;

  try {
    // Get all videos.
    mediaService.get(selector,
      goog.bind(function(page) {
        // Display videos.
        if (page && page.entries && page.entries.length > 0) {
          for (var i = 0, len = page.entries.length; i < len; i++) {
            var video = page.entries[i];
            this.writeOutput('Video with id = "%d" and name = "%s" was found.',
                video.mediaId, video.name);
          }
        } else {
          this.writeOutput('No videos were found.');
        }
        callback();
      }, this),
      goog.bind(function(soapException) {
        this.writeOutput('Failed to retrieve all videos. Soap Fault says "%s"',
            soapException.getInnerException().getFaultString());
        callback();
      }, this)
    );
  } catch (ex) {
    this.writeOutput('An exception occurred while running the code example.');
    callback();
  }
};
