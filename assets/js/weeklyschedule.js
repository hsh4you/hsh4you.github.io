function loadWeeklySchedule(gcal_id) {
    $('#calendar').fullCalendar({
        contentHeight: 'auto',
        header: { left: '', center: '', right: ''},
        locale: 'de',
        defaultView: 'listWeek',
        googleCalendarApiKey: 'AIzaSyDbIw2HzwKWmQY9o0h5UuZO6MCchQDCZbw',
        eventSources: [gcal_id],
        eventDataTransform: function(eventData) {
            eventData.url = null;
            return eventData;
        },
        eventAfterAllRender: function(view) {
            // remove header
            $('.fc-header-toolbar').remove();
            // remove date
            $('.fc-list-heading-alt').remove();
            // replace links with their text
            $('.fc-list-item-title').each(function(index, item){
                var urltext = $(item).find('a').text();
                $(item).html(urltext);
            });
        }
    });
};