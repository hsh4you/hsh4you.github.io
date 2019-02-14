<script src='lib/moment.min.js'></script>
<script src='lib/jquery.min.js'></script>
<script src='fullcalendar.min.js'></script>
<script src='locale-all.js'></script>
<script src='weeklyevents.js'></script>
<script src='nonweeklyevents.js'></script>
<script>

  $(document).ready(function() {
    var initialLocaleCode = 'de';
    var events_ = (window.nonweeklyevents).concat(window.weeklyevents)

    $('#calendar').fullCalendar({
      header: {
        left: 'prev,next today',
        center: 'title',
        right: ''
      },
      locale: initialLocaleCode,
      buttonIcons: false, // show the prev/next text
      weekNumbers: false,
      navLinks: false, // can click day/week names to navigate views
      editable: false,
      views: {
        listWeek: { buttonText: 'Liste' }
      },
      defaultView: 'listWeek',
      eventLimit: true, // allow "more" link when too many events
      events: events_
    });
  });

</script>

<div id='calendar'></div>


<script type="text/javascript">
  $(document).ready(function(){
    document.getElementsByClassName('fc-scroller')[0].style.overflow = 'unset';
  });
</script>