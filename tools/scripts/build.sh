#!/bin/sh
# Copyright 2011, Google Inc. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
# author: api.anash@gmail.com (Anash P. Oommen)
#
# This batch file generates the dependency scripts for library, examples, and
# compiled scripts.


# Generate a deps script for entire library.

rm -f ../../js/adwordsapi/src/awapi.js
python ../../js/closure/bin/calcdeps.py -p ../../js/adwordsapi/src/ -p \
    ../../js/common/src -p ../../js/system/src -o deps -d \
    ../../js/closure/goog > ../../js/adwordsapi/src/awapi.js
echo goog.require('google.system.core.Runtime'); \
    >> ../../js/adwordsapi/src/awapi.js

# Generate a deps script for code examples.

rm -f ../../js/adwordsapi/examples/awapi.js
python ../../js/closure/bin/calcdeps.py -p ../../js/adwordsapi/examples \
    -o deps -d ../../js/closure/goog > ../../js/adwordsapi/examples/awapi.js

# Generate standalone scripts for those who want to use the library, but not
#closure library.
python ../../js/closure/bin/calcdeps.py -p ../../js/closure/goog -i \
    ../../js/system/src -i ../../js/common/src \
    -i ../../js/adwordsapi/src/google \
    -e ../../js/adwordsapi/src/google/ads/adwords/v201003/AdWordsApi.js \
    -e ../../js/adwordsapi/src/google/ads/adwords/v201008/AdWordsApi.js \
    -o compiled \
    -f "--compilation_level=SIMPLE_OPTIMIZATIONS" \
    -c ../../js/closure/bin/compiler.jar > ../../js/compiled/awapi.js
python replace.py -s "var COMPILED = false;" -r "var COMPILED = true;" \
    -i ../../js/compiled/awapi.js -o ../../js/compiled/awapi.js

java -jar ../../js/closure/bin/compiler.jar \
    --compilation_level WHITESPACE_ONLY \
    --js ../../js/adwordsapi/src/google/ads/adwords/v201003/AdWordsApi.js \
    --js_output_file ../../js/compiled/v201003.js

java -jar ../../js/closure/bin/compiler.jar \
    --compilation_level WHITESPACE_ONLY \
    --js ../../js/adwordsapi/src/google/ads/adwords/v201008/AdWordsApi.js \
    --js_output_file ../../js/compiled/v201008.js

cp ../../js/adwordsapi/src/config.js ../../js/compiled/config.js

# If you want to compile your library to a single file that is minified and
# contains only what you need, then you can run a command similar to the one
# given below. You can run java -jar compiler.jar --help for compiler options.
# Also see http://code.google.com/closure/compiler/ for details.

# python ../../js/closure/bin/calcdeps.py -p ../../js/closure/goog -i \
#     ../../js/system/src -i ../../js/common/src \
#     -i ../../js/adwordsapi/src/google \
#     -i INSERT_YOUR_JS_SOURCE_FOLDER_HERE \
#     -e ../../js/adwordsapi/src/google/ads/adwords/v201003/AdWordsApi.js \
#     -e ../../js/adwordsapi/src/google/ads/adwords/v201008/AdWordsApi.js \
#     -e INSERT_YOUR_JS_SOURCE_EXCLUSIONS_HERE \
#     -o compiled -f "--formatting=PRETTY_PRINT" \
#     -f "--compilation_level=ADVANCED_OPTIMIZATIONS" \
#     -c ../../js/closure/bin/compiler.jar > output.js
