#!/bin/sh

#  Copyright 2011, Google Inc. All Rights Reserved.
#
#  Licensed under the Apache License, Version 2.0 (the "License");
#  you may not use this file except in compliance with the License.
#  You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
#  Unless required by applicable law or agreed to in writing, software
#  distributed under the License is distributed on an "AS IS" BASIS,
#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#  See the License for the specific language governing permissions and
#  limitations under the License.
#
#  author: api.davidtorres@gmail.com (David Torres)

java -jar ../../../js/closure/bin/compiler.jar \
    --compilation_level WHITESPACE_ONLY \
    --js ../js/extension/awapiloader.js --js ../js/extension/settingsloader.js \
    --js ../js/extension/uimanager.js \
    --js_output_file ../js/extension/extension.js

