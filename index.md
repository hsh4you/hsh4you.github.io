## Du bist

<script type="text/javascript">
  window.onload = function() {
  	document.title = "Hsh4You";
    preloadImages();
  }
</script>

<label class="userselectioncontainer">
  <img onclick="showList(this)" id="Jugendlicher" src="images/startpage/Jugendlicher.png"><br>Jugendliche/r
</label>
<label class="userselectioncontainer">
  <img onclick="showList(this)" id="Eltern" src="images/startpage/Eltern.png"><br>Mama/Papa
</label>
<label class="userselectioncontainer">
  <img onclick="showList(this)" id="Neu_in_Hsh" src="images/startpage/Neu_in_Hsh.png"><br>Neu in Hsh
</label>
<label class="userselectioncontainer">
  <img onclick="showList(this)" id="Senior" src="images/startpage/Senior.png"><br>Senior/in
</label>
<br>
## Du suchst
<div id="listeKeineAngabe">
- [Jugendklubs](Jugendklubs/Jugendklubs.md)
- [Kitas](Kitas/Kitas.md)
- [Schulen](Schulen/Schulen.md)
- [Veranstaltungen](calendar/calendar.html)
- [Beratung](Beratung/Beratung.md)
- [Freizeit](Freizeit/Freizeit.md)
- Familienzentren
</div>
<div id="listeJugendlicher">
- [Jugendklubs](Jugendklubs/Jugendklubs.md)
- [Veranstaltungen](calendar/calendar.html)
- [Beratung](Beratung/Beratung_Jugendlicher.md)
- Aktivitäten
</div>
<div id="listeEltern">
- [Kitas](Kitas/Kitas.md)
- [Schulen](Schulen/Schulen.md)
- [Jugendklubs](Jugendklubs/Jugendklubs.md)
- [Veranstaltungen](calendar/calendar.html)
- Beratung
- Familienzentren
- Jugendamt
</div>
<div id="listeNeu_In_HsH">
- [Kitas](Kitas/Kitas.md)
- [Schulen](Schulen/Schulen.md)
- [Veranstaltungen](calendar/calendar.html)
- Beratung
- Familienzentren
- Jugendamt
- Bürgeramt
- Begegnungen
</div>
<div id="listeSenior">
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
