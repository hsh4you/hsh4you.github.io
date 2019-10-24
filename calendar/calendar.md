<script src='lib/moment.min.js'></script>
<script src='lib/jquery.min.js'></script>
<script src='lib/fullcalendar.min.js'></script>
<script src='lib/locale-all.js'></script>
<script src='lib/gcal.min.js'></script>

<script>
    const GCAL_ID_ASP_FORT_ROBINSON = 'sge208g8ttrfg2q2kmr8id13t4@group.calendar.google.com';
    const GCAL_ID_BENN_HSH_NORD     = 'jp81k7mimn21rnt8u0tt52cg44@group.calendar.google.com';
    const GCAL_ID_BERLINER_JUNGS    = '7jcpmr2nop4k35h79lo5513li8@group.calendar.google.com';
    const GCAL_ID_LEOS_HUETTE       = 'el0m6on68efrj8u2092svv9ngc@group.calendar.google.com';
    const GCAL_ID_MIKADO            = '2rs8dij62oanc4j5ic1mfspn3c@group.calendar.google.com';
    const GCAL_ID_OCB               = '41a2511d1a6plhj0b6phu496q4@group.calendar.google.com';
    const GCAL_ID_SPIK              = 'opsnl05el2r6o5pu3ffh340shs@group.calendar.google.com';
    const GCAL_ID_SHARED            = 'hsh4you.events@gmail.com';

    var youthclubnames = {};
    youthclubnames[GCAL_ID_ASP_FORT_ROBINSON] = 'ASP Fort Robinson';
    youthclubnames[GCAL_ID_BENN_HSH_NORD] = 'BENN HSH Nord';
    youthclubnames[GCAL_ID_BERLINER_JUNGS] = 'berliner jungs';
    youthclubnames[GCAL_ID_LEOS_HUETTE] = 'Leos Hütte';
    youthclubnames[GCAL_ID_MIKADO] = 'Mikado';
    youthclubnames[GCAL_ID_OCB] = 'OCB';
    youthclubnames[GCAL_ID_SPIK] = 'SPIK';

    var youthclublinks = {};
    youthclublinks[GCAL_ID_ASP_FORT_ROBINSON] = '/Jugendklubs/ASP_Fort_Robinson';
    youthclublinks[GCAL_ID_BENN_HSH_NORD] = '/Begegnungen/BENN_HSH';
    youthclublinks[GCAL_ID_BERLINER_JUNGS] = '/Beratung/Beratung_Jugendlicher/Berliner_Jungs';
    youthclublinks[GCAL_ID_LEOS_HUETTE] = '/Jugendklubs/Leos_Huette';
    youthclublinks[GCAL_ID_MIKADO] = '/Jugendklubs/Mikado';
    youthclublinks[GCAL_ID_OCB] = '/Jugendklubs/OCB';
    youthclublinks[GCAL_ID_SPIK] = '/Jugendklubs/SPIK_JK';

    $(document).ready(function() {
        var showweeklyevents = true;

        $('#calendar').fullCalendar({
            // hide scrollbars via contentHeight auto
            // source: https://github.com/fullcalendar/old-docs/blob/master/display/contentHeight.txt
            contentHeight: 'auto',
            customButtons: {
                BtnMore: {
                    text: '...',
                    click: function() {
                        window.open('https://www.hsh4you.de/calendar/googlecal.html', '_blank');
                    }
                }
            },
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'listMonth,listYear'
            },
            views: {
                listMonth: { buttonText: 'Monat' },
                listYear: { buttonText: 'Jahr' }
            },
            locale: 'de',
            defaultView: 'listMonth',
            googleCalendarApiKey: 'AIzaSyDbIw2HzwKWmQY9o0h5UuZO6MCchQDCZbw',
            eventSources: [
                'hsh4you.de@gmail.com'
                , GCAL_ID_ASP_FORT_ROBINSON
                , GCAL_ID_BENN_HSH_NORD
                , GCAL_ID_BERLINER_JUNGS
                , GCAL_ID_LEOS_HUETTE
                , GCAL_ID_MIKADO
                , GCAL_ID_OCB
                , GCAL_ID_SPIK
                , GCAL_ID_SHARED
            ],
            eventDataTransform: function(eventData) {
                // source: https://stackoverflow.com/a/48932810 ("fullcalendar - eventclick changing URL")
                if (eventData.url.indexOf("google") >= 0) {
                    eventData.url = null;
                }
                if (eventData.description) {
                    var desc = eventData.description;
                    var urlstart = desc.lastIndexOf("http");
                    var url = desc.substring(urlstart).replace("</a>", "");
                    eventData.url = url;
                }
                return eventData;
            },
            eventClick: function(event, jsEvent, view) {
                // source: https://stackoverflow.com/a/51667554 ("How to disable event links in FullCalendar [..]"")
                //jsEvent.preventDefault();
            },
            eventRender: function(event, element, view) {
                calendarid = event.source.googleCalendarId;
                if (calendarid in youthclubnames) {
                    youthclubname = youthclubnames[calendarid];
                    youthclublink = youthclublinks[calendarid] + '.html';
                    // source: https://stackoverflow.com/a/3924862 ("fullCalendar - Event title and detail")
                    element.find('a').append(' @ ' + youthclubname);
                    // source: https://stackoverflow.com/a/179717 ("How to change the href for a hyperlink [..]"")
                    element.find('a').attr('href', youthclublink);
                }
                // source: https://stackoverflow.com/a/46879902 ("Fullcalendar: Remove past events [..]"")
                var eventenddate = moment(event.end);
                var nowinseconds = moment();
                if (eventenddate.diff(nowinseconds, 'seconds') <= 0) {
                    //return false;
                }
            }
        });
    });
</script>

<div id='calendar'></div>
