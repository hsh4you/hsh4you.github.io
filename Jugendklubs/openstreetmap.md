<div id='youthclubsmap'></div>

<script>
	var map = L.map('youthclubsmap').setView([52.561, 13.51], 13);

	var baselayer = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiaHNoNHlvdSIsImEiOiJjazJudDRuem4wdGp5M2NwZWwzNHJremo3In0.FLb6M_kTKmkeDeXZ-_dAEg', {
		attribution: ' &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>' +
			' &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox.streets'
	}).addTo(map);
    
    var markers = [
            [52.54959, 13.49734, '<a href="Arche.html">Arche</a>'],
            [52.57053, 13.49275, '<a href="Ausblick.html">Ausblick</a>', 'left'],
            [52.56411, 13.53048, '<a href="ASP_Fort_Robinson.html">Fort Robinson</a>', 'right'],
            [52.56889, 13.49357, '<a href="jfe_fullhouse.html">Full House</a>'],
            [52.56975, 13.52593, '<a href="Holzwurmhaus.html">Holzwurmhaus</a>', 'right'],
            [52.56694, 13.50410, '<a href="jfe_trialog.html">Trialog</a>', 'left'],
            [52.57758, 13.50922, '<a href="JUMP.html">JuMP</a>', 'right'],
            [52.56654, 13.50457, '<a href="Kinderclub_Kietzoase.html">Kietzoase</a>', 'right'],
            [52.56033, 13.50957, '<a href="Kontaktladen_VIP.html">Kontaktladen VIP</a>'],
            [52.57045, 13.51766, '<a href="Leos_Huette.html">Leos Hütte</a>'],
            [52.57482, 13.50378, '<a href="Mikado.html">Mikado</a>', 'right'],
            [52.53922, 13.49630, '<a href="OCB.html">OCB</a>'],
            [52.57281, 13.50264, '<a href="Pia_Olymp.html">Pia Olymp</a>'],
            [52.57438, 13.49938, '<a href="SPIK_JK.html">SPIK</a>', 'left'],
            [52.56274, 13.52695, '<a href="jfe_welseclub.html">Welseclub</a>']
        ];
    
    for (var i=0; i<markers.length; i++) {
        var lat = markers[i][0];
        var lon = markers[i][1];
        var title = markers[i][2];

        var alignment = 'auto';
        if (markers[i].length > 3) {
            alignment = markers[i][3];
        }
        
        var markerLocation = new L.LatLng(lat, lon);
        var marker = new L.Marker(markerLocation);
        map.addLayer(marker);
    
        marker.bindTooltip(title, {permanent: true, interactive: true, opacity: 0.8, direction: alignment});
    }

    L.easyButton('fa-arrows-alt', function(btn, map){
        map.flyTo([52.561, 13.51], 13);
    }).addTo(map);

    L.control.locate({flyTo: true, keepCurrentZoomLevel: false, clickBehavior: {inView: 'setView'}}).addTo(map);
</script>
