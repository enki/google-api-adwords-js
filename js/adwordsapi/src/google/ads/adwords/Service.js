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
 * @author api.davidtorres@gmail.com (David Torres)
 */

/**
 * @fileoverview Defines AdWords Service, the class that defines SOAP services
 *     specific to AdWords.
 */

goog.provide('google.ads.adwords.Service');

goog.require('google.ads.adwords.ApiException');
goog.require('google.ads.common.Service');

/**
 * The class that defines SOAP services specific to AdWords.
 *
 * @extends google.ads.common.Service
 * @constructor
 */
google.ads.adwords.Service = function() {
  google.ads.common.Service.call(this);
};
goog.inherits(google.ads.adwords.Service, google.ads.common.Service);

/**
 * Gets a custom exception that wraps the SOAP exception thrown
 * by the server.
 *
 * @param {google.system.soap.Exception} ex The SOAP exception.
 * @return {google.system.core.Exception} A custom exception object
 *     that wraps the SOAP exception.
 * @private
 */
google.ads.adwords.Service.prototype.getCustomException_ =
    function(ex) {
  var doc = goog.dom.xml.loadXml(ex.getDetail());
  var rootNode = doc.documentElement.childNodes[0];
  var apiException = goog.getObjectByName(this.getType().getNamespace() +
                                          '.' + 'ApiException');
  apiException = new apiException();
  apiException.deserialize(rootNode, this.getNametable());

  return new google.ads.adwords.ApiException(
      apiException, ex.getMessage(), ex);
};
