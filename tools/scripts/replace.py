#!/usr/bin/python
#
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

"""A simple search and replace utility to assist build scripts."""

__author__ = 'api.anash@gmail.com (Anash P. Oommen)'

import optparse
import string
import sys


def Main():
  """The entrypoint for this script."""

  usage = 'usage: %prog -s search -r replace -i input_file -o output_file'
  parser = optparse.OptionParser(usage)
  parser.add_option('-s',
                    '--search',
                    dest='search',
                    action='store',
                    help='The text to search.')
  parser.add_option('-r',
                    '--replace',
                    dest='replace',
                    action='store',
                    help='The text to replace.')
  parser.add_option('-i',
                    '--input_file',
                    dest='input_file',
                    action='store',
                    help='The input file on which search and replace is done.')
  parser.add_option('-o',
                    '--output_file',
                    dest='output_file',
                    action='store',
                    help='The file to which changes are written.')

  (options, args) = parser.parse_args()

  if (not options.input_file or not options.output_file or
      not options.search):
    parser.print_usage()
    sys.exit(1)

  if not options.replace:
    options.replace = ''

  f = None
  try:
    f = open(options.input_file, 'r')
    contents = f.read()
  except IOError as (errno, strerror):
    print 'Could not read from input file.'
    sys.exit(1)
  finally:
    if f:
      f.close()

  contents = string.replace(contents, options.search, options.replace)

  f = None
  try:
    f = open(options.output_file, 'w')
    f.write(contents)
  except IOError as (errno, strerror):
    print 'Could not write to output file.'
    sys.exit(1)
  finally:
    if f:
      f.close()


if __name__ == '__main__':
  Main()
