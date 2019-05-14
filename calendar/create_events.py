#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import datetime
import urllib.request
import html

WIKI_URL = 'https://github.com/hsh4you/hsh4you.github.io/wiki/Wochenpl%C3%A4ne-Jugendklubs'
PRINT_JSON = True
SAVE_AS_JSONFILE = True

def get_precode(url):
  htmlcode = urllib.request.urlopen(url).read().decode('utf8')
  precode = ''
  is_line_precode = False
  for line in htmlcode.split('\n'):
    line = line.strip()
    if line.startswith('<pre><code>'):
      is_line_precode = True
      continue
    if line.startswith('</code></pre>'):
      is_line_precode = False
      break
    if is_line_precode:
      line = html.unescape(line)
      precode += line + '\n'
  return precode

weeklyschedules = get_precode(WIKI_URL)

weekdays = dict()
weekdays['Mo'] = 0
weekdays['Di'] = 1
weekdays['Mi'] = 2
weekdays['Do'] = 3
weekdays['Fr'] = 4
weekdays['Sa'] = 5
weekdays['So'] = 6

weeklyevents = []
events = []
name = None
for row in weeklyschedules.strip().split('\n'):
  #row = row.decode('unicode-escape')
  if len(row) < 3:
    continue
  if row.startswith('#'):
    name = row[2:]
    continue
  if row.startswith('https:'):
    url = row
    continue
  if len(row.strip()) == 0:
    continue
  #print(row)
  day = row.split(' ')[0]
  starttime = None
  endtime = None
  if row[3].isdigit():
    time = row.split(' ')[1]
    title = ' '.join(row.split(' ')[2:])
    starttime = time
    if '-' in time:
      starttime = time.split('-')[0]
      endtime = time.split('-')[1]
      if not ':' in endtime:
        endtime += ':00'
    if not ':' in starttime:
      starttime += ':00'
  weekdayname = day
  weekdaynum = weekdays[weekdayname]
  weeklyevent = (name, url, weekdayname, weekdaynum, title, starttime, endtime)
  #print(weeklyevent)
  weeklyevents.append(weeklyevent)
  #print(day, time, title)

WEEKDAYNAMES = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So']

STARTDATE = datetime.date(2019, 1, 1)
#STARTDATE = datetime.datetime.today().date()
ENDDATE = datetime.date(2020, 1, 1)

events = []
for delta in range(0, (ENDDATE - STARTDATE).days + 1):
  loopday = STARTDATE + datetime.timedelta(delta)
  loopweekdaynum = loopday.weekday()
  loopweekdayname = WEEKDAYNAMES[loopweekdaynum]
  for (youthclubname, url, weekdayname, weekdaynum, eventname, starttime, endtime) in weeklyevents:
    if weekdaynum == loopweekdaynum:
      eventtitle = '%s @ %s' % (eventname, youthclubname)
      start = '%s' % loopday
      if starttime:
        start = '%sT%s' % (loopday, starttime)
      end = None
      if endtime:
        end = '%sT%s' % (loopday, endtime)
      event = (eventtitle, url, start, end)
      #print(event)
      events.append(event)

jsonevents = []
for (eventtitle, url, start, end) in events:
  if end:
    jsonevent = '''
    title: "%s",
    url: "%s",
    start: '%s',
    end: '%s'
  ''' % (eventtitle, url, start, end)
  else:
    jsonevent = '''
    title: "%s",
    url: "%s",
    start: '%s'
  ''' % (eventtitle, url, start)
  jsonevents.append(jsonevent)

jsoncode = ',\n  '.join(['{%s}' % jsonevent for jsonevent in jsonevents])
jsoncode = 'window.weeklyevents = [\n  %s\n]' % jsoncode

if PRINT_JSON:
  print(jsoncode)

if SAVE_AS_JSONFILE:
  with open('weeklyevents.js', 'w', encoding='utf8') as jsfile:
    jsfile.write(jsoncode)