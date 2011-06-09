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
 * @fileoverview Defines GetAllImages, a code example that gets all images.
 */

goog.provide('google.ads.adwords.examples.v201101.GetAllImages');

goog.require('google.ads.adwords.AdWordsService.v201101');
goog.require('google.ads.adwords.examples.ExampleBase');
goog.require('google.ads.adwords.v201101.Image');
goog.require('google.ads.adwords.v201101.MediaMediaType');
goog.require('google.ads.adwords.v201101.MediaService');
goog.require('google.ads.adwords.v201101.MediaSize');
goog.require('google.ads.adwords.v201101.Media_Size_DimensionsMapEntry');
goog.require('google.ads.adwords.v201101.Predicate');
goog.require('google.ads.adwords.v201101.PredicateOperator');
goog.require('google.ads.adwords.v201101.Selector');

/**
 * This code example gets all images.
 *
 * Tags: MediaService.get
 *
 * @extends google.ads.adwords.examples.ExampleBase
 * @constructor
 */
google.ads.adwords.examples.v201101.GetAllImages = function() {
  google.ads.adwords.examples.ExampleBase.call(this);
  this.description = 'This code example gets all images.';
};
goog.inherits(google.ads.adwords.examples.v201101.GetAllImages,
    google.ads.adwords.examples.ExampleBase);

/**
 * Runs the code example.
 *
 * @param {google.ads.adwords.AdWordsUser} user AdWords user running the code
 * example.
 * @param {function} callback the callback method to be called once this example
 * is complete.
 */
google.ads.adwords.examples.v201101.GetAllImages.prototype.run =
    function(user, callback) {
  // Get the MediaService.
  var mediaService = user.getService(
      google.ads.adwords.AdWordsService.v201101.MediaService);

  // Create a selector.
  var selector = new google.ads.adwords.v201101.Selector();
  selector.fields = ["MediaId", "Width", "Height", "MimeType"];

  // Create a filter.
  var predicate = new google.ads.adwords.v201101.Predicate();
  predicate.operator = google.ads.adwords.v201101.PredicateOperator.EQUALS;
  predicate.field = "Type";
  predicate.values = [google.ads.adwords.v201101.MediaMediaType.IMAGE];

  selector.predicates = [predicate];

  try {
    // Get all images.
    mediaService.get(selector,
      goog.bind(function(page) {
        // Display images.
        if (page && page.entries && page.entries.length > 0) {
          for (var i = 0, len = page.entries.length; i < len; i++) {
            var image = page.entries[i];
            var dimensions = this.createMediaDimensionMap(image.dimensions);
            this.writeOutput('Image with id "%d", dimensions "%dx%d", and ' +
                'MIME type "%s" was found.', image.mediaId,
                dimensions[google.ads.adwords.v201101.MediaSize.FULL].width,
                dimensions[google.ads.adwords.v201101.MediaSize.FULL].height,
                image.mimeType);
          }
        } else {
          this.writeOutput('No images were found.');
        }
        callback();
      }, this),
      goog.bind(function(soapException) {
        this.writeOutput('Failed to retrieve all images. Soap Fault says "%s"',
            soapException.getInnerException().getFaultString());
        callback();
      }, this)
    );
  } catch (ex) {
    this.writeOutput('An exception occurred while running the code example.');
    callback();
  }
};

google.ads.adwords.examples.v201101.GetAllImages.prototype.
    createMediaDimensionMap = function(dimensions) {
  var mediaMap = {};
  for (var i = 0, len = dimensions.length; i < len; i++) {
    mediaMap[dimensions[i].key] = dimensions[i].value;
  }
  return mediaMap;
};
