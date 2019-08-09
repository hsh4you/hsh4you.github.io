<link href='fullcalendar.min.css' rel='stylesheet' />
<link href='fullcalendar.print.min.css' rel='stylesheet' media='print' />
<script src='lib_moment.min.js'></script>
<script src='lib_jquery.min.js'></script>
<script src='fullcalendar.min.js'></script>
<script src='gcal.min.js'></script>
<script src='weeklyevents.js'></script>
<script src='nonweeklyevents.js'></script>
<script src='locale-all.js'></script>
<script>
var showweeklyevents = true;
$(document).ready(function() {
    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'listDay,listYear'
        },
        views: {
            listDay: { buttonText: 'Tagesplan' },
            listWeek: { buttonText: 'Woche' },
            listMonth: { buttonText: 'Monat' },
            listYear: { buttonText: 'Events' }
        },
        locale: 'de',
        defaultView: 'listYear',
        googleCalendarApiKey: 'AIzaSyDbIw2HzwKWmQY9o0h5UuZO6MCchQDCZbw',
        //events: 'qc5c5e2qv2siv8pmpbab5sei04@group.calendar.google.com',
        eventSources: [
            //'qc5c5e2qv2siv8pmpbab5sei04@group.calendar.google.com',
            //'sj0j48c0kqi1dets6b166jte6s@group.calendar.google.com', 
            'hsh4you.de@gmail.com',
            //window.weeklyevents,
            //window.nonweeklyevents
        ],
        viewRender: function(view) {
            if (view.name == 'listDay' || view.name == 'listWeek') {
                if (!showweeklyevents) {
                    $('#calendar').fullCalendar('addEventSource', window.weeklyevents);
                    showweeklyevents = true;
                }
            }
        },
        eventDataTransform: function(eventData) {
            // source: https://stackoverflow.com/a/48932810 (fullcalendar eventclick changing URL)
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
        eventRender: function(event, element, view) {
            if (view.name == 'listYear') {
                if (showweeklyevents) {
                    $('#calendar').fullCalendar('removeEventSource', window.weeklyevents);
                    showweeklyevents = false;
                }
            }
        },
        eventClick: function(event, jsEvent, view) {
            // source: https://stackoverflow.com/a/51667554 ()
            if (event.url.indexOf("google") >= 0) {
                //jsEvent.preventDefault();
            }
            // click events previously defined will also be prevented
            // so, any alternate tasks (like showing modal) on eventClick must go here
        }
    });
});
</script>

<div id='calendar'></div>