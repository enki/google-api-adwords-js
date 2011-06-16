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
 * @fileoverview Defines google.system.soap.ServiceListener class.
 */

goog.provide('google.system.soap.ServiceListener');

/**
 * Defines a SOAP Listener contract, basic listener object.
 *
 * It is meant to be specialized and its method overridden by concrete
 * listeners.
 *
 * @constructor
 */
google.system.soap.ServiceListener = function() {};

/**
 * Method to be called before the serialization takes places. Listeners have
 * the opportunity at this time to modify the called services and parameters.
 *
 * Implementation of this method is optional.
 *
 * @param {google.system.soap.SoapService} service Service been invoked.
 * @param {string} methodName Method been invoked.
 * @param {Object<string,Object>} parameterValues Parameters been passed to
 *     the call.
 * @param {function()} continueCallback Function to be called in case of
 *     success.
 * @param {function(google.system.soap.Exception)} errorCallback Function
 *     to be called in case an error has occured a SOAP Exception object is
 *     expected by this function.
 */
google.system.soap.ServiceListener.prototype.beforeSerialize = function(
    service, methodName, parameterValues, continueCallback, errorCallback) {
  continueCallback();
};

/**
 * Method to be called after the service call gets serialized in to XML Document
 * but before gets send to the server. Gives the oportunnity to the listener
 * to revise the document or even modify before gets sent.
 *
 * Implementation of this method is optional.
 *
 * @param {google.system.soap.SoapService} service Service been invoked.
 * @param {Document} document The XML document to be sent to the server.
 * @param {function()} continueCallback Function to be called in case of
 *     success.
 * @param {function(google.system.soap.Exception)} errorCallback Function
 *     to be called in case an error has occurred a SOAP Exception object is
 *     expected by this function.
 */
google.system.soap.ServiceListener.prototype.beforeSend = function(
    service, document, continueCallback, errorCallback) {
  continueCallback();
};

/**
 * Method to be called after the request has been sent and a an XML response
 * has been received. Gives the opportunity for the listener to parse and even
 * modify the XML document if desired.
 *
 * Implementation of this method is optional.
 *
 * @param {google.system.soap.SoapService} service Service been invoked.
 * @param {Document} responseXml The XML response document.
 * @param {boolean} isError True if the response XML is SOAP exception returned
 *     by the server.
 * @param {function()} continueCallback Function to be called in case of
 *     success.
 * @param {function(google.system.soap.Exception)} errorCallback Function
 *     to be called in case an error has occurred a SOAP Exception object is
 *     expected by this function.
 */
google.system.soap.ServiceListener.prototype.beforeDeserialize = function(
    service, responseXml, isError, continueCallback, errorCallback) {
  continueCallback();
};

/**
 * Method to be called after the response have been parsed but before the
 * resulting object is passed back to the client code. Gives the opportunity
 * for the listener to modify the resulting object before it gets back to the
 * client.
 *
 * Implementation of this method is optional.
 *
 * @param {google.system.soap.SoapService} service Service been invoked.
 * @param {google.system.soap.SoapObject} soapObject The SOAP Object.
 * @param {boolean} isError True if the SOAP Object contains a SOAP Exception
 *     returned by the server.
 * @param {function()} continueCallback Function to be called in case of
 *     success.
 * @param {function(google.system.soap.Exception)} errorCallback Function
 *     to be called in case an error has occurred a SOAP Exception object is
 *     expected by this function.
 */
google.system.soap.ServiceListener.prototype.beforeReturn = function(
    service, soapObject, isError, continueCallback, errorCallback) {
  continueCallback();
};
