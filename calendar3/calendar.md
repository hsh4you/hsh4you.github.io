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
        eventRender: function(event, element, view) {
            if (view.name == 'listYear') {
                if (showweeklyevents) {
                    $('#calendar').fullCalendar('removeEventSource', window.weeklyevents);
                    showweeklyevents = false;
                }
            }
        }
    });
});
</script>

<div id='calendar'></div>