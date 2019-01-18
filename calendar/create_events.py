#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import datetime

WEEKLYSCHEDULES = '''
# ASP Fort Robinson
Di 14-18 Hüttenbau
Di 16-18 Pferde AG
Mi 13-15 Betreuung Pferde
Mi 16-18 Reiten & Stockbrot
Mi 14-18 Lagerfeuer
Do 14-18 Hüttenbau
Do 14-16 Bogenschießen auf Anfrage
Do 16-18 Pferde AG
Fr 13-15 Gärtnern
Fr 16-18 Kochen/Grillen über Lagerfeuer
Sa 10-17 offene Spielangebote

# SPIK Jugendklub
Mo 15-17 Bandraum
Di 15-17 Kunst & Werken
Mi 15-18 Graffiti
Do 15-17 Fitness/Jin-Jitsu
Fr 14-20 PC-Tag & Kochen 
Sa 13-17 Hallensport

# Mikado
Mo 16:00-18:00 AG Garten
Di 15:00-18:00 AG Klavier
Mi 14:30-16:30 AG Brush
Mi 17:00-20:00 Kinotag
Do 15:00-18:00 AG Klaver
Do 17:00-19:00 AG Garten
Fr 15:00-17:00 AG Kochen
Fr 18:00-20:00 Spieleabend

# Pia Olymp
Mo 15:00-18:00 Skaten/BMX
Mo 16:00-17:00 Ringen & Raufen
Di 16:00-17:00 Ball- & Bewegungsspiele
Mi 16:00-17:00 Fitness (ab 10 J.)
Mi 17:30-19:00 Pubertätsstunde (ab 12 J.)
Do 15:00-18:00 Skaten/BMX
Fr 15:00-16:00 Spiel & Spaß
Fr 16:00-17:00 Tanzen (9-12 J.)
Fr 17:30-19:00 Tanzen (ab 12 J.)

# Kontaktladen VIP
Mo 16:00 Kochen
Mo 16:30 HipHop & Streetdance
Di Tonstudio (Anmeldung)
Mi 16:00 Kreativangebot
Mi 17:00 Kicker-, Billard-, Tischtennistraining
Do 17:00 VIP-Talk & Tonstudio (Anmeldung)
Fr Wii/ Filme
'''

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
for row in WEEKLYSCHEDULES.strip().split('\n'):
  #row = row.decode('unicode-escape')
  if len(row) < 3:
    continue
  if row.startswith('#'):
    name = row[2:]
    continue
  if len(row.strip()) == 0:
    continue
  if len(row) > 3 and not row[3].isdigit():
    continue
  #print(row)
  day = row.split(' ')[0]
  # for now skip rows having no time definition
  if not row[3].isdigit():
    continue
  time = row.split(' ')[1]
  title = ' '.join(row.split(' ')[2:])
  # for now skip rows having not a end time
  if not '-' in time:
    continue
  starttime = time.split('-')[0]
  if not ':' in starttime:
    starttime += ':00'
  endtime = time.split('-')[1]
  if not ':' in endtime:
    endtime += ':00'
  weekdayname = day
  weekdaynum = weekdays[weekdayname]
  weeklyevent = (name, weekdayname, weekdaynum, title, starttime, endtime)
  #print(weeklyevent)
  weeklyevents.append(weeklyevent)
  #print(day, time, title)

WEEKDAYNAMES = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So']

STARTDATE = datetime.date(2018, 1, 1)
#STARTDATE = datetime.datetime.today().date()
ENDDATE = datetime.date(2020, 1, 1)

events = []
for delta in range(0, (ENDDATE - STARTDATE).days + 1):
  loopday = STARTDATE + datetime.timedelta(delta)
  loopweekdaynum = loopday.weekday()
  loopweekdayname = WEEKDAYNAMES[loopweekdaynum]
  for (youthclubname, weekdayname, weekdaynum, eventname, starttime, endtime) in weeklyevents:
    if weekdaynum == loopweekdaynum:
      eventtitle = '%s | %s' % (youthclubname, eventname)
      url = "{{ '/Jugendklubs/%s.html' | relative_url }}" % youthclubname.replace(' ', '_')
      if 'SPIK_Jugendklub' in url:
        url = url.replace('SPIK_Jugendklub.html', 'SPIK_JK.html')
      start = '%sT%s' % (loopday, starttime)
      end = '%sT%s' % (loopday, endtime)
      event = (eventtitle, url, start, end)
      #print(event)
      events.append(event)

with open('events.json', 'w') as jsonfile:
  for (eventtitle, url, start, end) in events:
    jsonevent = '''
{
  title: '%s',
  url: "%s",
  start: '%s',
  end: '%s'
},
    '''.strip() % (eventtitle, url, start, end)
    #print(jsonevent)
    jsonfile.write(jsonevent)


        # {
        #   title: 'Weihnachtsmarkt auf dem Vorplatz am S-Bhf Wartenberg',
        #   start: '2018-12-08T14:00',
        #   end:   '2018-12-08T18:00'
        # },