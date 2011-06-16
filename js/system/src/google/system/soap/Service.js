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
 * @fileoverview Defines google.system.soap.Service class.
 */

goog.provide('google.system.soap.Service');

goog.require('goog.array');
goog.require('goog.dom.xml');
goog.require('goog.json');

goog.require('google.system.core.Exception');
goog.require('google.system.core.Runtime');
goog.require('google.system.net.HttpWebTransportFactory');
goog.require('google.system.soap.Exception');
goog.require('google.system.soap.Nametable');
goog.require('google.system.soap.Object');

/**
 * A common base class for all SOAP services.
 *
 * Contains the serialization logic to transform request into SOAP XML
 * envelopes and then send them through the network.
 *
 * @extends google.system.soap.Object
 * @constructor
 */
google.system.soap.Service = function() {
  google.system.soap.Object.call(this);

  /**
   * User agent name to be sent as HTTP Header.
   * @type {string}
   * @private
   */
  this.USER_AGENT_ = 'googsoapjs/' +
      google.system.core.Runtime.getInstance().getVersion();

  /**
   * Service XML namespaces table.
   * @type {google.system.soap.Nametable}
   * @private
   */
  this.nametable_ = new google.system.soap.Nametable();

  /**
   * Service endpoint URL.
   * @type {string}
   * @private
   */
  this.url_ = null;

  /**
   * Service http web transport to use.
   * @type {google.system.net.HttpWebTransport}
   * @private
   */
  this.httpWebTransport_ = null;

  /**
   * Service listeners array.
   * @type {Array.<google.system.soap.ServiceListener>}
   * @private
   */
  this.listeners_ = new Array();
};
goog.inherits(google.system.soap.Service, google.system.soap.Object);

/**
 * Retrieves the SOAP nametable associated to the service.
 *
 * @return {google.system.soap.SoapNametable} The name table.
 */
google.system.soap.Service.prototype.getNametable = function() {
  return this.nametable_;
};

/**
 * Retrieves the HTTP web transport.
 *
 * @return {string} The end-point of the service.
 */
google.system.soap.Service.prototype.getHttpWebTransport = function() {
  return this.httpWebTransport_;
};

/**
 * Sets the HTTP web transport.
 *
 * @param {string} httpWebTransport The new HTTP web transport.
 */
google.system.soap.Service.prototype.setHttpWebTransport = function(
    httpWebTransport) {
  this.httpWebTransport_ = httpWebTransport;
};

/**
 * Retrieves the service end-point URL.
 *
 * @return {string} The end-point fo the service.
 */
google.system.soap.Service.prototype.getUrl = function() {
  return this.url_;
};

/**
 * Sets the service end-point url, against which the service will redirect the
 * calls.
 *
 * @param {string} url The new url to set.
 */
google.system.soap.Service.prototype.setUrl = function(url) {
  this.url_ = url;
};

/**
 * Invokes a method of the service. Kicks of the whole serialization, send and
 * de-serialization call life-cycle.
 *
 * @param {string} methodName Name of the method in the service that is been
 *     invoked.
 * @param {Object.<String,Object>} parameterValues Parameters passed to the
 *     method.
 * @param {function(google.system.soap.Object)} successCallback Callback
 *     function to be invoked if the request finalizes successfully, the
 *     de-serialized SOAP Object gets passed to the callback.
 * @param {function(google.system.soap.Object)} failureCallback Callback
 *     function to be invoked if the request finalizes with an error, the
 *     de-serialized SOAP Exception gets passed to the callback.
 */
google.system.soap.Service.prototype.invoke = function(methodName,
    parameterValues, successCallback, failureCallback) {
  var service = this;
  // Before serialize listener phase.
  var fnFactory = function(listener) {
    return goog.partial(listener.beforeSerialize, service, methodName,
        parameterValues);
  };
  var serializeRequestFn = goog.bind(this.serializeRequest_, this, methodName,
      parameterValues, successCallback, failureCallback);
  this.fireListeners_(goog.array.clone(this.listeners_), fnFactory,
      serializeRequestFn, failureCallback);
};

/**
 * Registers a new SOAP listener to the service.
 *
 * @param {google.system.soap.ServiceListener} listener Listener to be
 *     registered.
 */
google.system.soap.Service.prototype.registerListener = function(
    listener) {
  if (!(listener instanceof google.system.soap.ServiceListener)) {
    throw new google.system.core.Exception(
        'Tried to registered an invalid listener type.');
  }
  this.listeners_.push(listener);
};

/**
 * Removes a listener from the service.
 *
 * @param {google.system.soap.ServiceListener} listener Listener to be removed.
 * @return {boolean} True if the listener was found and removed, false
 *     otherwise.
 */
google.system.soap.Service.prototype.removeListener = function(
    listener) {
  return goog.array.remove(this.listeners_, listener);
};


// Private declarations

// SOAP Request life-cycle handling methods.

/**
 * Phase when the request is serialized and the listener are called for the
 * beforeSend event. After all listeners are invoked sendRequest_ phase will
 * continue.
 *
 * @param {string} methodName Name of the method in the service that is been
 *     invoked.
 * @param {Object.<String,Object>} parameterValues Parameters passed to the
 *     method.
 * @param {function(google.system.soap.Object)} successCallback Callback
 *     function to be invoked if the request finalizes successfully, the
 *     de-serialized SOAP Object gets passed to the function.
 * @param {function(google.system.soap.Object)} failureCallback Callback
 *     function to be invoked if the request finalizes with an error, the
 *     de-serialized SOAP Exception gets passed to the function.
 * @private
 */
google.system.soap.Service.prototype.serializeRequest_ = function(
    methodName, parameterValues, successCallback, failureCallback) {
  var service = this;

  // Object serialization.
  var methodSignature = this.getType().getMethodByName(methodName);
  var doc = this.createSoapRequest_(
      methodName, methodSignature.getParameters(), parameterValues);

  // Before send listener phase.
  var fnFactory = function(listener) {
    return goog.partial(listener.beforeSend, service, doc);
  };
  var sendRequestFn = goog.bind(this.sendRequest_, this, methodName, doc,
      successCallback, failureCallback);
  this.fireListeners_(goog.array.clone(this.listeners_), fnFactory,
      sendRequestFn, failureCallback);
};

/**
 * Phase when the request gets send to the server and the listeners are called
 * for the beforeDeserialize event. After all listeners are invoked
 * deserializeResponse_ phase will continue.
 *
 * @param {string} methodName Name of the method in the service that is been
 *     invoked.
 * @param {Document} doc The generated XML gocument.
 * @param {function(google.system.soap.Object)} successCallback Callback
 *     function to be invoked if the request finalizes successfully, the
 *     de-serialized SOAP Object gets passed to the function.
 * @param {function(google.system.soap.Object)} failureCallback Callback
 *     function to be invoked if the request finalizes with an error, the
 *     de-serialized SOAP Exception gets passed to the function.
 * @private
 */
google.system.soap.Service.prototype.sendRequest_ = function(
    methodName, doc, successCallback, failureCallback) {
  var service = this;

  // Serialize to string.
  var serializedDoc = goog.dom.xml.serialize(doc);
  this.postXmlToServer_(
    serializedDoc,
    function(responseXml) {
      var doc = goog.dom.xml.loadXml(responseXml);
      // Before de-serialize listener phase.
      var fnFactory = function(listener) {
        return goog.partial(listener.beforeDeserialize, service, doc, false);
      };
      var deserializeResponseFn = goog.bind(this.deserializeResponse_, this,
          methodName, doc, successCallback, failureCallback);
      this.fireListeners_(goog.array.clone(this.listeners_), fnFactory,
          deserializeResponseFn, failureCallback);
    },
    function(errorXml) {
      var doc = goog.dom.xml.loadXml(errorXml);
      // Before de-serialize listener phase.
      var fnFactory = function(listener) {
        return goog.partial(listener.beforeDeserialize, service, doc, true);
      };
      var deserializeErrorFn = goog.bind(this.deserializeError_, this, doc,
          successCallback, failureCallback);
      this.fireListeners_(goog.array.clone(this.listeners_), fnFactory,
          deserializeErrorFn, failureCallback);
    }
  );
};

/**
 * Phase when a successful response gets deserialized and the listeners are
 * called for the beforeReturn event. After all listeners are invoked the client
 * sucessCallback gets invoked.
 *
 * @param {string} methodName Name of the method in the service that is been
 *     invoked.
 * @param {Document} responseDocument The response XML document.
 * @param {function(google.system.soap.Object)} successCallback Callback
 *     function to be invoked if the request finalizes successfully, the
 *     de-serialized SOAP Object gets passed to the function.
 * @param {function(google.system.soap.Object)} failureCallback Callback
 *     function to be invoked if the request finalizes with an error, the
 *     de-serialized SOAP Exception gets passed to the function.
 * @private
 */
google.system.soap.Service.prototype.deserializeResponse_ = function(
    methodName, responseDocument, successCallback, failureCallback) {
  var service = this;
  var methodSignature = this.getType().getMethodByName(methodName);

  // De-serializing the response.
  var soapObject = this.parseSoapResponse_(responseDocument, methodName,
      methodSignature.getReturnTypeDefinition());
  // Function to be called after all listeners are notified.
  var returnResponseFn = function() {
    if (successCallback != null) {
      successCallback.call(service, soapObject);
    }
  };
  // Before return listener phase.
  var fnFactory = function(listener) {
    return goog.partial(listener.beforeReturn, service, soapObject,
        false);
  };
  this.fireListeners_(goog.array.clone(this.listeners_), fnFactory,
      returnResponseFn, failureCallback);
};

/**
 * Phase when an error response gets deserialized and the listeners are
 * called for the beforeReturn event. After all listeners are invoked the client
 * failureCallback gets invoked.
 *
 * @param {Document} errorDocument The response XML error document.
 * @param {function(google.system.soap.Object)} successCallback Callback
 *     function to be invoked if the request finalizes successfully, the
 *     de-serialized SOAP Object gets passed to the function.
 * @param {function(google.system.soap.Object)} failureCallback Callback
 *     function to be invoked if the request finalizes with an error, the
 *     de-serialized SOAP Exception gets passed to the function.
 * @private
 */
google.system.soap.Service.prototype.deserializeError_ = function(
    errorDocument, successCallback, failureCallback) {
  var service = this;
  var errorObject = this.parseSoapFault_(errorDocument);
  var returnResponseFn = function() {
    if (failureCallback != null) {
      failureCallback.call(service, errorObject);
    }
  };
  // Before return listener phase.
  var fnFactory = function(listener) {
    return goog.partial(listener.beforeReturn, service, errorObject, true);
  };
  this.fireListeners_(goog.array.clone(this.listeners_), fnFactory,
      returnResponseFn, failureCallback);
};

// Listeners handling methods.

/**
 * Generic method in charge of calling all listeners in certain phase of a
 * service call life-cycle.
 *
 * @param {Array.<google.system.soap.ServiceListener>} listeners List of
 *     listeners pending to process.
 * @param {function(google.system.soap.ServiceListener)} fnFactory Function
 *     factory that generates the function to be called in the listener. E.g.
 *     When on the beforeSend phase this factory generates a function that calls
 *     the beforeSend method of the listener.
 * @param {function()} continueCallback Function to be called after all listener
 *     have been successfully called.
 * @param {function(google.system.core.Exception)} failureCallback Function to
 *     be called in case one of the listeners fails.
 * @private
 */
google.system.soap.Service.prototype.fireListeners_ = function(
    listeners, fnFactory, continueCallback, failureCallback) {
  if (listeners.length) {
    var listener = listeners.pop();
    var continueFn = goog.bind(this.fireListeners_, this, listeners,
        fnFactory, continueCallback, failureCallback);
    var listenerErrorFn = goog.bind(this.listenerError_, this, listener,
        failureCallback);
    fnFactory(listener).call(listener, continueFn, listenerErrorFn);
  } else {
    continueCallback();
  }
};

/**
 * Function called when a listener fails, it simply throws the exception up
 * in the stack.
 *
 * @param {google.system.soap.ServiceListener} listener Listener that caused
 *     the failure.
 * @param {function(google.system.core.Exception)} failureCallback Function to
 *     be called in case one of the listeners fails.
 * @param {google.system.core.Exception} exception Exception returned by the
 *     listener.
 * @private
 */
google.system.soap.Service.prototype.listenerError_ = function(
    listener, failureCallback, exception) {
  if (failureCallback) {
    failureCallback(exception);
  }
  throw exception;
};

// Serialization internal methods.

/**
 * Creates a SOAP request document.
 * @param {string} methodName Method name.
 * @param {Array.<Object>} parameters Parameters.
 * @param {Array.<*>} parameterValues Values.
 * @return {Document} An XML document.
 * @private
 */
google.system.soap.Service.prototype.createSoapRequest_ = function(
    methodName, parameters, parameterValues) {
  var doc = goog.dom.xml.createDocument();
  var envelope = this.createEmptyEnvelope_(doc);
  doc.appendChild(envelope);
  var soapHeaders = this.createSoapHeader_(doc, methodName);
  if (!goog.isNull(soapHeaders)) {
    envelope.appendChild(soapHeaders);
  }
  var soapBody = this.createSoapBody_(doc, methodName, parameters,
      parameterValues);
  envelope.appendChild(soapBody);
  return doc;
};

/**
 * Creates an empty SOAP envelope node.
 *
 * @param {Document} doc Document to user for creating the node.
 * @return {Node} New node.
 * @private
 */
google.system.soap.Service.prototype.createEmptyEnvelope_ = function(doc) {
  var envelope = doc.createElement('soap:Envelope');
  envelope.setAttribute('xmlns:soap',
      'http://schemas.xmlsoap.org/soap/envelope/');
  envelope.setAttribute('xmlns:xsi',
      'http://www.w3.org/2001/XMLSchema-instance');
  envelope.setAttribute('xmlns:xsd', 'http://www.w3.org/2001/XMLSchema');
  return envelope;
};

/**
 * Retrieves the required SOAP header for a given method.
 *
 * @param {string} methodName Method name.
 * @param {string} direction Headers direction.
 * @return {Array} An array of required headers.
 * @private
 */
google.system.soap.Service.prototype.getSoapHeadersForMethod_ = function(
    methodName, direction) {
  var methodHeaders = this.getType().getMethodByName(methodName).getHeaders();

  var retVal = [];
  for (var i = 0; i < methodHeaders.length; i++) {
    if (methodHeaders[i].direction == direction) {
      retVal.push(methodHeaders[i]);
    }
  }
  return retVal;
};

/**
 * Includes the local namespace declarations to a given node.
 *
 * @param {Node} node Node to append the declarations.
 * @return {Node} The given node.
 * @private
 */
google.system.soap.Service.prototype.addLocalNsDeclarations_ = function(
    node) {
  var xmlnt = this.getNametable();

  var localNamespaces = xmlnt.getLocalNamespaces();
  for (var localPrefix in localNamespaces) {
    node.setAttribute('xmlns:' + localPrefix, localNamespaces[localPrefix]);
  }
  return node;
};

/**
 * Creates the headers of a given method.
 *
 * @param {Document} doc Document to use to create the element.
 * @param {string} methodName Method name that contains the headers definition.
 * @return {Node} Node with the headers.
 * @private
 */
google.system.soap.Service.prototype.createSoapHeader_ = function(
    doc, methodName) {
  var headers = this.getSoapHeadersForMethod_(methodName, 'in');
  var headerNode = null;
  var defaultNs = this.getServiceNamespace_();
  var xmlnt = this.getNametable();

  for (var i = 0; i < headers.length; i++) {
    var header = headers[i];
    var property = this.getType().getPropertyByName(header.propertyName);

    if (goog.isNull(property)) {
      continue;
    }
    var propertyValue = this[property.getGetterName()]();

    if (propertyValue == null) {
      continue;
    }

    // There is at least one soap header, so we need to create soap:Header.
    if (goog.isNull(headerNode)) {
      headerNode = doc.createElement('soap:Header');
    }

    var nodePrefix = xmlnt.getPrefixFromNamespace(defaultNs);
    if (property.isArray()) {
      for (var j = 0; j < propertyValue.length; j++) {
        var childNode = this.serializeProperty_(doc, xmlnt, defaultNs,
            nodePrefix, property.getName(), propertyValue[j]);
        this.addLocalNsDeclarations_(childNode);
        headerNode.appendChild(childNode);
      }
    } else {
      var childNode = this.serializeProperty_(doc, xmlnt, defaultNs, nodePrefix,
          property.getName(), propertyValue);
      this.addLocalNsDeclarations_(childNode);
      headerNode.appendChild(childNode);
    }
  }

  return headerNode;
};

/**
 * Creates the SOAP body of a given method.
 *
 * @param {Document} doc Document to create the elements.
 * @param {string} methodName Method name.
 * @param {Array.<Object>} parameters Method parameters.
 * @param {Array.<*>} parameterValues Method values.
 * @return {Node} The created body element.
 * @private
 */
google.system.soap.Service.prototype.createSoapBody_ = function(
    doc, methodName, parameters, parameterValues) {
  var body = doc.createElement('soap:Body');

  var xmlnt = this.getNametable();
  var methodNs = this.getServiceMethodNamespace_(methodName);
  var nodePrefix = xmlnt.getPrefixFromNamespace(methodNs);
  var methodNode = doc.createElement(nodePrefix + ':' + methodName);

  this.addLocalNsDeclarations_(methodNode);

  for (var i = 0; i < parameters.length; i++) {
    parameterName = parameters[i].name;
    parameterValue = parameterValues[i];
    var parameterNode = null;

    if (parameterValue instanceof Array) {
      for (var j = 0; j < parameterValue.length; j++) {
        var childNode = this.serializeMethodParameter_(doc, xmlnt, methodNs,
            nodePrefix, methodName, parameterName, parameterValue[j]);
        methodNode.appendChild(childNode);
      }
    } else {
      var childNode = this.serializeMethodParameter_(doc, xmlnt, methodNs,
          nodePrefix, methodName, parameterName, parameterValue);
      methodNode.appendChild(childNode);
    }
  }

  body.appendChild(methodNode);

  return body;
};

/**
 * Sends the serialized request to the server.
 *
 * @param {Document} serializedDoc The XML document to send.
 * @param {function} successCallback Callback function to be invoked in case
 *     of success.
 * @param {function} failureCallback Callback function to be invoked in case
 *     of failure.
 * @private
 */
google.system.soap.Service.prototype.postXmlToServer_ = function(
    serializedDoc, successCallback, failureCallback) {
  var thisPtr = this;
  var request = this.getHttpWebTransport();
  var postParams = serializedDoc;
  var defaultHttpHeaders = {
    'X-User-Agent': this.USER_AGENT_
  };

  if (!goog.isNull(request)) {
    request.send(thisPtr.url_, 'POST', postParams, defaultHttpHeaders, 0,
        goog.bind(function(response) {
          if (successCallback != null) {
            successCallback.call(thisPtr, response);
          }
        }, this),
        goog.bind(function(response) {
          if (failureCallback != null) {
            failureCallback.call(thisPtr, response);
          }
        }, this)
    );
  }
};

/**
 * Parses a call error.
 *
 * @param {Document} errorDocument Response error document.
 * @return {google.system.soap.Exception} The exception.
 * @private
 */
google.system.soap.Service.prototype.parseSoapFault_ = function(
    errorDocument) {
  var xmlnt = this.getNametable();
  var rootNode = errorDocument.documentElement;
  if (this.getNodeName_(rootNode) == 'Envelope' && rootNode.namespaceURI ==
      xmlnt.getNamespaceFromPrefix('soap')) {
    for (var i = 0; i < rootNode.childNodes.length; i++) {
      if (this.getNodeName_(rootNode.childNodes[i]) == 'Body' &&
          rootNode.childNodes[i].namespaceURI ==
          xmlnt.getNamespaceFromPrefix('soap')) {
        var faultNode = rootNode.childNodes[i].childNodes[0];

        var faultCode = null;
        var faultString = null;
        var detail = null;

        for (var j = 0; j < faultNode.childNodes.length; j++) {
          if (this.getNodeName_(faultNode.childNodes[j]) == 'faultcode') {
            faultCode = goog.dom.getTextContent(faultNode.childNodes[j]);
          }
          if (this.getNodeName_(faultNode.childNodes[j]) == 'faultstring') {
            faultString = goog.dom.getTextContent(faultNode.childNodes[j]);
          }
          if (this.getNodeName_(faultNode.childNodes[j]) == 'detail') {
            detail = goog.dom.xml.serialize(faultNode.childNodes[j]);
          }
        }
        return new google.system.soap.Exception(faultCode, faultString, detail);
      }
    }
  }
};

/**
 * Parses a SOAP response.
 *
 * @param {string} responseDocument Response XML document.
 * @param {string} methodName Name of the called method.
 * @param {google.system.soap.ObjectType} returnType Type to return.
 * @return  {google.system.soap.Object} The parsed object.
 * @private
 */
google.system.soap.Service.prototype.parseSoapResponse_ = function(
    responseDocument, methodName, returnType) {
  var xmlnt = this.getNametable();
  var rootNode = responseDocument.documentElement;

  if (this.getNodeName_(rootNode) == 'Envelope' && rootNode.namespaceURI ==
      xmlnt.getNamespaceFromPrefix('soap')) {
    // TODO(Anash): Add SOAP Response header parsing here.
    for (var i = 0; i < rootNode.childNodes.length; i++) {
      if (this.getNodeName_(rootNode.childNodes[i]) == 'Body' &&
          rootNode.childNodes[i].namespaceURI ==
          xmlnt.getNamespaceFromPrefix('soap')) {
        var responseNode = rootNode.childNodes[i].childNodes[0];
        return this.parseSoapResponseBody_(responseNode, methodName,
            returnType);
      }
    }
  }
};

/**
 * Parses a response body.
 *
 * @param {Node} responseNode Response body node.
 * @param {string} methodName Method name.
 * @param {google.system.soap.ObjectType} returnType Type to return.
 * @return {google.system.soap.Object} The parsed object.
 * @private
 */
google.system.soap.Service.prototype.parseSoapResponseBody_ = function(
    responseNode, methodName, returnType) {
  var retVal = null;
  if (returnType.isArray == true) {
    retVal = [];
    for (var i = 0; i < responseNode.childNodes.length; i++) {
      retVal.push(this.parseSingleObject_(responseNode.childNodes[i],
          methodName, returnType));
    }
  } else {
    retVal = this.parseSingleObject_(responseNode.childNodes[0], methodName,
        returnType);
  }
  return retVal;
};

/**
 * Parses a single node and returns the mapped SOAP object.
 *
 * @param {Object} responseNode The node to parse.
 * @param {Object} methodName Name of the invoked method.
 * @param {google.system.soap.ObjectType} returnType Return type definition.
 * @return {google.system.soap.Object} The parsed object.
 * @private
 */
google.system.soap.Service.prototype.parseSingleObject_ = function(
    responseNode, methodName, returnType) {
  if (responseNode == null) {
    return null;
  }

  var retval = null;

  // First, try to identify if an xsi:type is mentioned on the node. If yes,
  // see if this is a SerializableSoapObject. If so, create a retVal.
  var availableType = this.getTypeAsPerXsiType_(this.getNametable(),
      responseNode, this.getType().getNamespace());
  if (!goog.isNull(availableType)) {
    availableType = goog.getObjectByName(availableType);
    if (!goog.isNull(availableType)) {
      availableType = new availableType();
      if (availableType instanceof google.system.soap.Object) {
        retVal = availableType;
      }
    }
  } else {
    // See if returnType is a SerializableSoapObject. if so, create a retval.
    var desiredType = goog.getObjectByName(returnType.className);
    if (!goog.isNull(desiredType)) {
      desiredType = new desiredType();
      if (desiredType instanceof google.system.soap.Object) {
        retVal = desiredType;
      }
    }
  }
  if (goog.isNull(retVal)) {
    return null;
  } else {
    retVal.deserialize(responseNode, this.getNametable());
  }
  return retVal;
};

/**
 * Returns the given service namespace.
 *
 * @return {string} The service namespace.
 * @private
 */
google.system.soap.Service.prototype.getServiceNamespace_ = function() {
  return this.getType().getXmlNamespace();
};

/**
 * Retrieves a given service method namespace.
 *
 * @param {string} methodName Method name.
 * @return {string} The method namespace.
 * @private
 */
google.system.soap.Service.prototype.getServiceMethodNamespace_ = function(
    methodName) {
  var method = this.getType().getMethodByName(methodName);
  return method.getRequestNamespace();
};

/**
 * Retrieves the node name for a given a method parameter within a service.
 *
 * @param {string} methodName Method name.
 * @param {string} parameterName Parameter name.
 * @param {*} parameterValue Parameter value.
 * @return {string} The node name.
 * @private
 */
google.system.soap.Service.prototype.
    getSerializationNodeNameForMethodParameter_ = function(methodName,
        parameterName, parameterValue) {
  return this.getType().getMethodByName(methodName).
      getParameterByName(parameterName).xmlElementName;
};

/**
 * Serializes a SOAP Service method parameter.
 *
 * @param {Document} doc The XML document over which is been serialized.
 * @param {google.system.soap.SoapNametable} xmlnt XML namespace table.
 * @param {string} namespace Current namespace.
 * @param {string} prefix Namespace prefix.
 * @param {string} method Method name.
 * @param {string} name Element name.
 * @param {string} value Element value.
 * @return {Node} The new node.
 * @private
 */
google.system.soap.Service.prototype.serializeMethodParameter_ = function(
    doc, xmlnt, namespace, prefix, method, name, value) {
  var nodeName = this.getSerializationNodeNameForMethodParameter_(method, name,
      value);

  var node = doc.createElement(prefix + ':' + nodeName);
  if (value instanceof google.system.soap.Object) {
    if (value.getType().getBaseType() !=
        google.system.soap.Object.prototype.getType()) {
      node.setAttribute('xsi:type', prefix + ':' +
        value.getType().getClassName());
    }
    value.serialize(doc, xmlnt, node, namespace);
  } else {
    goog.dom.setTextContent(node, value);
  }
  return node;
};
