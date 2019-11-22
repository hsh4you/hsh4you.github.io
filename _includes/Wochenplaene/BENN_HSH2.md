<script src='/Jugendklubs/lib/moment.min.js'></script>
<script src='/Jugendklubs/lib/jquery.min.js'></script>
<script src='/Jugendklubs/lib/fullcalendar.min.js'></script>
<script src='/Jugendklubs/lib/locale-all.js'></script>
<script src='/Jugendklubs/lib/gcal.min.js'></script>

<script>
    const GCAL_ID_BENN_HSH_NORD = '41kvrj3juphbv6vh3ofoj9p91o@group.calendar.google.com';

    $(document).ready(function() {

        $('#calendar').fullCalendar({
            contentHeight: 'auto',
            header: {
            },
            locale: 'de',
            defaultView: 'listWeek',
            googleCalendarApiKey: 'AIzaSyDbIw2HzwKWmQY9o0h5UuZO6MCchQDCZbw',
            eventSources: [
                  GCAL_ID_BENN_HSH_NORD
            ],
            eventDataTransform: function(eventData) {
                eventData.url = null;
                return eventData;
            },
            eventAfterAllRender: function(view) {
                // source: https://jsfiddle.net/milz/od4Le2er/ ("Hide fc-day-header")
                //$('.fc-list-heading').css('display', 'none');
                $('.fc-header-toolbar').css('display', 'none');
                $('.fc-list-heading-alt').css('display', 'none');
                // replace links with their text
                $('.fc-list-item-title').each(function(index, item){
                    var urltext = $(item).find('a').text();
                    $(item).html(urltext);
                });
            }
        });
    });
</script>

<div id='calendar'></div>

