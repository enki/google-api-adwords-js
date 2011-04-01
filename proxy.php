<?PHP

/**
 *
 * PHP version 5
 *
 * Copyright 2011, Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @author     api.anash@gmail.com (Anash P. Oommen)
 * @author     api.davidtorres@gmail.com (David Torres)
 */

/**
 * A simple proxy method to forward an HTTP/HTTPS call to a server.
 */
function forwardCall() {
  // Allowed URLs to post, any other url sent to this proxy will return a
  // 500 error.
  $validDomains = array('https://adwords.google.com',
      'https://adwords-sandbox.google.com', 'https://www.google.com');

  $url = urldecode($_POST['url']);

  $valid = false;
  foreach ($validDomains as $validDomain) {
    if (strpos($url, $validDomain) === 0) {
      $valid = true;
    }
  }
  if (!$valid) {
    header("HTTP/1.1 500 Internal Server Error");
    die('Can\'t send requests to ' . $url);
  }

  if ($_POST['method'] == 'GET') {
    if ($_POST['params'] != 'null') {
      $url .= '?' . $_POST['params'];
    }
  }

  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, $url);

  $headers = (array) json_decode($_POST['headers']);

  if (count($headers) > 0) {
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
  }

  curl_setopt($ch, CURLOPT_HEADER, true);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
  curl_setopt($ch, CURLOPT_BINARYTRANSFER, 1);

  if ($_POST['method'] == 'POST') {
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $_POST['params']);
  }
  curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
  curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
  //curl_setopt($ch, CURLOPT_PROXY, "http://localhost:8888");
  $output = curl_exec($ch);
  $info = curl_getinfo($ch);

  if ($output === false) {
    header("HTTP/1.1 404 Not Found");
    exit;
  } else {
    list($response_headers, $response_body) = explode("\r\n\r\n", $output, 2);
    $response_header_lines = explode("\r\n", $response_headers);
    // just send the response code back.
    header($response_header_lines[0]);
    print $response_body;
  }
  curl_close($ch);
}

forwardCall();
?>
