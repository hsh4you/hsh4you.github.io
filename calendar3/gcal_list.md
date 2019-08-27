<script src="https://cdn.jsdelivr.net/npm/moment@2/moment.min.js"></script>
<script src="https://apis.google.com/js/api.js"></script>
<script src="https://apis.google.com/js/api.js"></script>
<script>

    function loadClient() {
        gapi.client.setApiKey("AIzaSyDbIw2HzwKWmQY9o0h5UuZO6MCchQDCZbw");
        return gapi.client.load("https://content.googleapis.com/discovery/v1/apis/calendar/v3/rest")
            .then(function() { console.log("GAPI client loaded for API"); },
                function(err) { console.error("Error loading GAPI client for API", err); });
    }

    // Make sure the client is loaded before calling this method.
    function listCalendar() {
        return gapi.client.calendar.events.list({
            "calendarId": "hsh4you.de@gmail.com",
            "fields": "items(id,summary,end,start)"
        })
        .then(function(response) {
            // Handle the results here (response.result has the parsed body).
            console.log("Response", response);

            if (response.result.items) {
                var calendarRows = ['<table class="calendar" style="text-align:left"><tbody>'];
                response.result.items.forEach(function(entry) {
                    var startdate = moment(entry.start.dateTime).format("L");
                    var starttime = moment(entry.start.dateTime).format("LT");
                    var endtime = moment(entry.end.dateTime).format("LT");
                    var calendarrow = `<tr><td>${startdate}<br>${starttime} - ${endtime}</td><td>${entry.summary}<br>${entry.id}</td></tr>`;
                    calendarRows.push(calendarrow);
                });
                calendarRows.push('</tbody></table>');
                $('#calendar').html(calendarRows.join(""));
            }

        },
        function(err) { console.error("Execute error", err); });
    }


    // Make sure the client is loaded before calling this method.
    function getEvent() {
        var eventid = $("#eventid").val();
        console.log("eventid", eventid);
        if (eventid) {
            return gapi.client.calendar.events.get({
                "calendarId": "hsh4you.de@gmail.com",
                "eventId": eventid,
                "fields": "id,summary,start,end"
            })
            .then(function(response) {
                console.log("Response", response);
                $('#event').html(response.result.summary);
            },
            function(err) { console.error("Execute error", err); });
        }
    }
    gapi.load("client");
</script>
<button onclick="loadClient()">loadClient</button>
<button onclick="listCalendar()">listCalendar</button>
<div id="calendar"></div>
<input type="text" id="eventid">
<button onclick="getEvent()">getEvent</button>
<div id="event"></div>
