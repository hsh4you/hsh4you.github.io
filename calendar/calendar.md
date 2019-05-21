<script src='lib/moment.min.js'></script>
<script src='lib/jquery.min.js'></script>
<script src='fullcalendar.min.js'></script>
<script src='locale-all.js'></script>
<script src='weeklyevents.js'></script>
<script src='nonweeklyevents.js'></script>
<script>

  $(document).ready(function() {
    var initialLocaleCode = 'de';
    var showweeklyevents = true;

    $('#calendar').fullCalendar({
      header: {
        left: 'prev,next,today listDay,listMonth,listYear',
        center: 'title',
        right: ''
      },
      locale: initialLocaleCode,
      buttonIcons: true, // show the prev/next text
      weekNumbers: false,
      navLinks: false, // can click day/week names to navigate views
      editable: false,
      views: {
        listDay: { buttonText: 'Tag' },
        listWeek: { buttonText: 'Woche' },
        listMonth: { buttonText: 'Monat' },
        listYear: { buttonText: 'Jahr' }
      },
      defaultView: 'listDay',
      eventLimit: true, // allow "more" link when too many events
      eventSources: [ window.weeklyevents, window.nonweeklyevents ],
      viewRender: function(view) {
        if (view.name == 'listDay' || view.name == 'listWeek') {
            if (!showweeklyevents) {
                $('#calendar').fullCalendar('addEventSource', window.weeklyevents);
                showweeklyevents = true;
            }
        }
        if (view.name == 'listMonth' || view.name == 'listYear') {
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


<script type="text/javascript">
  $(document).ready(function(){
    document.getElementsByClassName('fc-scroller')[0].style.overflow = 'unset';
  });
</script>
