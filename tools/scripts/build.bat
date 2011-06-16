REM Copyright 2011, Google Inc. All Rights Reserved.
REM
REM Licensed under the Apache License, Version 2.0 (the "License");
REM you may not use this file except in compliance with the License.
REM You may obtain a copy of the License at
REM
REM    http://www.apache.org/licenses/LICENSE-2.0
REM
REM Unless required by applicable law or agreed to in writing, software
REM distributed under the License is distributed on an "AS IS" BASIS,
REM WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
REM See the License for the specific language governing permissions and
REM limitations under the License.
REM
REM author: api.anash@gmail.com (Anash P. Oommen)
REM
REM This batch file generates the dependency scripts for library, examples, and
REM compiled scripts.


REM Generate a deps script for entire library.

del ..\..\js\adwordsapi\src\awapi.js /Q
python ..\..\js\closure\bin\calcdeps.py -p ..\..\js\adwordsapi\src\ -p ^
    ..\..\js\common\src -p ..\..\js\system\src -o deps -d ^
    ..\..\js\closure/goog > ..\..\js\adwordsapi\src\awapi.js
echo goog.require('google.system.core.Runtime'); ^
    >> ..\..\js\adwordsapi\src\awapi.js

REM Generate a deps script for code examples.

del ..\..\js\adwordsapi\examples\awapi.js /Q
python ..\..\js\closure\bin\calcdeps.py -p ..\..\js\adwordsapi\examples ^
    -o deps -d ..\..\js\closure\goog > ..\..\js\adwordsapi\examples\awapi.js

REM Generate standalone scripts for those who want to use the library, but not
REM closure library.
REM Compiling main library.
python ..\..\js\closure\bin\calcdeps.py -p ..\..\js\closure\goog -i ^
    ..\..\js\system\src -i ..\..\js\common\src ^
    -i ..\..\js\adwordsapi\src\google ^
    -e ..\..\js\adwordsapi\src\google\ads\adwords\v201003\AdWordsApi.js ^
    -e ..\..\js\adwordsapi\src\google\ads\adwords\v201008\AdWordsApi.js ^
    -e ..\..\js\adwordsapi\src\google\ads\adwords\v201101\AdWordsApi.js ^
    -o compiled ^
    -f "--compilation_level=SIMPLE_OPTIMIZATIONS" ^
    -c ..\..\js\closure\bin\compiler.jar > ..\..\js\compiled\awapi.js
python replace.py -s "var COMPILED = false;" -r "var COMPILED = true;" ^
    -i ..\..\js\compiled\awapi.js -o ..\..\js\compiled\awapi.js

REM Compiling v201003 version.
java -jar ..\..\js\closure\bin\compiler.jar ^
    --compilation_level WHITESPACE_ONLY ^
    --js ..\..\js\adwordsapi\src\google\ads\adwords\v201003\AdWordsApi.js ^
    --js_output_file ..\..\js\compiled\v201003.js

REM Compiling v201008 version.
java -jar ..\..\js\closure\bin\compiler.jar ^
    --compilation_level WHITESPACE_ONLY ^
    --js ..\..\js\adwordsapi\src\google\ads\adwords\v201008\AdWordsApi.js ^
    --js_output_file ..\..\js\compiled\v201008.js

REM Compiling v201101 version.
java -jar ..\..\js\closure\bin\compiler.jar ^
    --compilation_level WHITESPACE_ONLY ^
    --js ..\..\js\adwordsapi\src\google\ads\adwords\v201101\AdWordsApi.js ^
    --js_output_file ..\..\js\compiled\v201101.js

copy ..\..\js\adwordsapi\src\config.js ..\..\js\compiled\config.js

REM The script assumes that third_party\jsdoc folder exists. Unzip
REM third_party\jsdoc.zip to third_party\jsdoc before running this script.

REM Generating documentation.
cd ..\third_party\jsdoc
java -jar jsrun.jar app/run.js -r=20 ../../../js/adwordsapi/src ^
    ../../../js/system ../../../js/common -t=templates/jsdoc ^
    -d=../../../docs/lib
java -jar jsrun.jar app/run.js -r=20 ../../../js/adwordsapi/examples ^
    -t=templates/jsdoc -d=../../../docs/examples
cd ..\..\scripts

REM If you want to compile your library to a single file that is minified and
REM contains only what you need, then you can run a command similar to the one
REM given below. You can run java -jar compiler.jar --help for compiler options.
REM Also see http://code.google.com/closure/compiler/ for details.

REM python ..\..\js\closure\bin\calcdeps.py -p ..\..\js\closure\goog -i ^
REM     ..\..\js\system\src -i ..\..\js\common\src ^
REM     -i ..\..\js\adwordsapi\src\google ^
REM     -i INSERT_YOUR_JS_SOURCE_FOLDER_HERE ^
REM     -e ..\..\js\adwordsapi\src\google\ads\adwords\v201003\AdWordsApi.js ^
REM     -e ..\..\js\adwordsapi\src\google\ads\adwords\v201008\AdWordsApi.js ^
REM     -e ..\..\js\adwordsapi\src\google\ads\adwords\v201101\AdWordsApi.js ^
REM     -e INSERT_YOUR_JS_SOURCE_EXCLUSIONS_HERE ^
REM     -o compiled ^
REM     -f "--compilation_level=ADVANCED_OPTIMIZATIONS" ^
REM     -c ..\..\js\closure\bin\compiler.jar > output.js
