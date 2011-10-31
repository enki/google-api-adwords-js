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

goog.require('google.system.core.Runtime');

(function() {
  var config = {
    AdWordsApi: {
      UserAgent: 'ENTER_USER_AGENT_HERE',
      Email: 'ENTER_ACCOUNT_EMAIL_HERE',
      Password: 'ENTER_ACCOUNT_PASSWORD_HERE',
      DeveloperToken: 'ENTER_DEVELOPER_TOKEN_HERE',

      //Specify one of the following if your are providing the credentials
      //of a manager MCC account.
      //ClientEmail can only be used with version v201101 or lower.
      //ClientEmail: 'ENTER_MANAGED_ACCOUNT_EMAIL_HERE',
      //ClientCustomerId: 'ENTER_YOUR_CLIENT_CUSTOMER_ID_HERE',

      //Specify the following if you what to use an authorization token
      //generated outside the library and want to ignore the Email and Password
      //properties.
      //AuthToken: 'ENTER_YOUR_AUTH_TOKEN_HERE',

      //Un-comment the folowing line to run your code against the Sandbox
      //environment http://code.google.com/apis/adwords/docs/sandbox.html.
      //AdWordsApiServer: 'https://adwords-sandbox.google.com',

      //Default proxy values see README file for more information about
      //different transport configurations.
      HttpWebTransport: 'google.system.net.HttpWebTransportForServerProxy',
      HttpWebTransportSettings: {
        ProxyUrl: '/awapi-js-lib/proxy.php'
      }
    }
  };

  google.system.core.Runtime.getInstance().setConfig(config);
  goog.require(config.AdWordsApi.HttpWebTransport);
})();
