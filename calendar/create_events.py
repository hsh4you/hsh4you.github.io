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

# Welseclub
Mo 16:00 Backen
Mo 16:15 Kampfkunsttraining (Kinder)
Di 14:00-17:00 Fahrradwerkstatt
Di 16:00 Tischtennis-AG
Di 17:00 ClubAktiv (Ideensammlung)
Mi gemeinsam Kochen & Essen
Do 16:00 Basteln & Werken
Do 18:00 Kampfkunst (Anfänger)
Fr Rollenspiel, Gesellschaftsspiele
Fr 15:00 Let's talk about... (für Mädchen)

# Trialog
Mo 17:00 Kekse & Kakao
Di 15:30 Kreativangebot
Mi 16:00 junge Küche
Do 16:00 Sport im Fitnessraum
Fr 15:00 Billiardturnier & Spielenachmittag

# Jump
Mo 16:00 Kochen & gemeinsam essen
Di 15:30-16:30 Sport für alle
Di 17:00 gemeinsam Essen
Mi 15:00-16:00 gemeinsames Lernangebot
Mi 16:00 Kochen & gemeinsam Essen
Do 15:30-16:30 Sport für alle
Do 17:00 gemeinsam Essen

# Leos Hütte
Mo 16:00-20:00 Küchengespräche, Basteln
Mo 18:00-19:30 Zumba
Di 16:00-18:00 Graffiti/Comic, Multimedia
Mi 14:00-18:00 Multimedia
Mi 17:00-19:00 Breakdance
Do 15:00-18:00 Musizieren 
Do 16:00-19:00 Kreatives Gestalten
Fr 15:00-17:00 Musizieren
Fr 16:00-20:00 Freizeitsport 
Sa 12:00-15:00 Fußball (Halle Welsestr.)

# Full House
Mo 15:00 Kochen 
Mo 20:00-22:00 Fußballtraining
Di 16:00 Fitnesstraining 
Di 18:00-20:00 Volleyball (mit Gangway)
Do 16:00 Fitnesstraining
Fr 15:00 Kochen
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
  weeklyevent = (name, weekdayname, weekdaynum, title, starttime, endtime)
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
  for (youthclubname, weekdayname, weekdaynum, eventname, starttime, endtime) in weeklyevents:
    if weekdaynum == loopweekdaynum:
      eventtitle = '%s | %s' % (youthclubname, eventname)
      url = "{{ '/Jugendklubs/%s.html' | relative_url }}" % youthclubname.replace(' ', '_')
      if 'SPIK_Jugendklub' in url:
        url = url.replace('SPIK_Jugendklub.html', 'SPIK_JK.html')
      start = None
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
  if start:
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
  else:
    jsonevent = '''
      title: "%s",
      url: "%s"
    ''' % (eventtitle, url)
  jsonevents.append(jsonevent)

with open('events.json', 'w') as jsonfile:
  for i, jsonevent in enumerate(jsonevents):
    jsonevent = '{%s}' % jsonevent
    if i == 0:
      jsonevent = '  ' + jsonevent
    else:
      jsonevent = ', ' + jsonevent
    jsonfile.write(jsonevent)
    #if i > 30: break