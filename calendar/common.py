#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import urllib.request
import html


def get_precode_from_wiki(url):
  htmlcode = urllib.request.urlopen(url).read().decode('utf8')
  precode = ''
  is_line_precode = False
  for line in htmlcode.split('\n'):
    line = line.strip()
    if line.startswith('<pre>'):
      is_line_precode = True
      continue
    if line.startswith('</pre>'):
      is_line_precode = False
      break
    if is_line_precode:
      line = html.unescape(line)
      precode += line + '\n'
  return precode