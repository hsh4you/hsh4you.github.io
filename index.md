## Du bist

<script type="text/javascript"> window.onload = function() { document.title = "Hsh4You"; } </script>

<label class="userselectioncontainer">
  <img onclick="updateImagesAndLists(this)" id="imgJugendlicherDefault" src="images/startpage/Jugendlicher.png"><img onclick="updateImagesAndLists(this)" id="imgJugendlicherClicked" src="images/startpage/Jugendlicher_selected.png"><br><span>Jugendlich</span>
</label>
<label class="userselectioncontainer">
  <img onclick="updateImagesAndLists(this)" id="imgElternDefault" src="images/startpage/Eltern.png"><img onclick="updateImagesAndLists(this)" id="imgElternClicked" src="images/startpage/Eltern_selected.png"><br><span>Mama/Papa</span>
</label>
<label class="userselectioncontainer">
  <img onclick="updateImagesAndLists(this)" id="imgNeuDefault" src="images/startpage/Neu_in_Hsh.png"><img onclick="updateImagesAndLists(this)" id="imgNeuClicked" src="images/startpage/Neu_in_Hsh_selected.png"><br><span>Neu in Hsh</span>
</label>
<label class="userselectioncontainer">
  <img onclick="updateImagesAndLists(this)" id="imgSeniorDefault" src="images/startpage/Senior.png"><img onclick="updateImagesAndLists(this)" id="imgSeniorClicked" src="images/startpage/Senior_selected.png"><br><span>Senior/in</span>
</label>

## Du suchst
<div id="listStartpage"></div>
<div class="displaynone" id="listDefault">
- [Jugendklubs](Jugendklubs/Jugendklubs.md)
- [Kitas](Kitas/Kitas.md)
- [Schulen](Schulen/Schulen.md)
- [Veranstaltungen](calendar/calendar.html)
- [Beratung](Beratung/Beratung.md)
- [Freizeit](Freizeit/Freizeit.md)
- Familienzentren
</div>
<div class="displaynone" id="listJugendlicher">
- [Jugendklubs](Jugendklubs/Jugendklubs.md)
- [Veranstaltungen](calendar/calendar.html)
- [Beratung](Beratung/Beratung_Jugendlicher.md)
- Aktivitäten
</div>
<div class="displaynone" id="listEltern">
- [Kitas](Kitas/Kitas.md)
- [Schulen](Schulen/Schulen.md)
- [Jugendklubs](Jugendklubs/Jugendklubs.md)
- [Veranstaltungen](calendar/calendar.html)
- Beratung
- Familienzentren
- Jugendamt
</div>
<div class="displaynone" id="listNeu">
- [Kitas](Kitas/Kitas.md)
- [Schulen](Schulen/Schulen.md)
- [Veranstaltungen](calendar/calendar.html)
- Beratung
- Familienzentren
- Jugendamt
- Bürgeramt
- Begegnungen
</div>
<div class="displaynone" id="listSenior">
- [Veranstaltungen](calendar/calendar.html)
- Beratung
- Ehrenamt
</div>

<script type="text/javascript">
  // format lists after page has loaded
  document.addEventListener("DOMContentLoaded", function(event) { 
    formatLists();
  });
</script>
