#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from common import get_precode_from_wiki

WIKI_URL = 'https://github.com/hsh4you/hsh4you.github.io/wiki/Veranstaltungen'
PRINT_JSON = True
SAVE_AS_JSONFILE = True

wikievents = get_precode_from_wiki(WIKI_URL)

events = []
for row in wikievents.strip().split('\n'):
  if len(row.strip()) == 0:
    continue
  if row.startswith('#'):
    startdate = row[2:].strip()
    continue
  if row.startswith('http'):
    url = row.strip()
    continue
  starttime = None
  endtime = None
  title = row.strip()
  if row[:2].isdigit() and row[2] == ':' and row[3:5].isdigit():
    time = row.split(' ')[0]
    title = ' '.join(row.split(' ')[1:])
    starttime = time
    if '-' in time:
      starttime = time.split('-')[0]
      endtime = time.split('-')[1]
      if not ':' in endtime:
        endtime += ':00'
    if not ':' in starttime:
      starttime += ':00'
  event = (startdate, title, url, starttime, endtime)
  events.append(event)

jsonevents = []
for (startdate, title, url, starttime, endtime) in events:
  jsonevent = '''
    title: "%s",
      url: "%s"
  ''' % (title, url)
  if starttime:
    jsonevent = jsonevent.rstrip() + ''',
    start: '%sT%s'
  ''' % (startdate, starttime)
  if endtime:
    jsonevent = jsonevent.rstrip() + ''',
      end: '%sT%s'
  ''' % (startdate, endtime)
  if not starttime:
    jsonevent = jsonevent.rstrip() + ''',
    start: '%s'
  ''' % (startdate)
  jsonevents.append(jsonevent)

jsoncode = ',\n  '.join(['{%s}' % jsonevent for jsonevent in jsonevents])
jsoncode = 'window.nonweeklyevents = [\n  %s\n]' % jsoncode

if PRINT_JSON:
  print(jsoncode)

if SAVE_AS_JSONFILE:
  with open('nonweeklyevents.js', 'w', encoding='utf8') as jsfile:
    jsfile.write(jsoncode)