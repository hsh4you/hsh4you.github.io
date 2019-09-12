---
title: hsh4you
id: index
---

## Du bist

<script> window.onload = function() { document.title = "hsh4you.de"; } </script>

<span class="nowrap">
  <label class="userselectioncontainer" onclick="updateImagesAndLists(this)">
    <img src="images/startpage/Jugendlicher.png">
    <img style="display:none" src="images/startpage/Jugendlicher_selected.png"><br>
    <span>Jugendlich</span>
  </label>
  <label class="userselectioncontainer" onclick="updateImagesAndLists(this)">
    <img src="images/startpage/Eltern.png">
    <img style="display:none" src="images/startpage/Eltern_selected.png"><br>
    <span>Mama/Papa</span>
  </label>
  <label class="userselectioncontainer" onclick="updateImagesAndLists(this)">
    <img src="images/startpage/Neu_in_Hsh.png">
    <img style="display:none" src="images/startpage/Neu_in_Hsh_selected.png"><br>
    <span>Neu in Hsh</span>
  </label>
  <label class="userselectioncontainer" onclick="updateImagesAndLists(this)">
    <img src="images/startpage/Senior.png">
    <img style="display:none" src="images/startpage/Senior_selected.png"><br>
    <span>Senior/in</span>
  </label>
</span>

## Du suchst
<div id="listVisible"></div>
<div class="displaynone" id="listDefault">
- [Jugendklubs](Jugendklubs/Jugendklubs.md)
- [Wochenpläne](Jugendklubs/weeklyevents.html)
- [Veranstaltungen](calendar/calendar.html)
- [Kitas](Kitas/Kitas.md)
- [Schulen](Schulen/Schulen.md)
- [Beratung](Beratung/Beratung.md)
- [Familienzentren](Familienzentren/Familienzentren.md)
- Freizeit
- Notrufnummern
</div>
<div class="displaynone" id="listJugendlicher">
- [Jugendklubs](Jugendklubs/Jugendklubs.md)
- [Wochenpläne](Jugendklubs/weeklyevents.html)
- [Veranstaltungen](calendar/calendar.html)
- [Beratung](Beratung/Beratung_Jugendlicher.md)
- Aktivitäten
- Notrufnummern
</div>
<div class="displaynone" id="listEltern">
- [Kitas](Kitas/Kitas.md)
- [Schulen](Schulen/Schulen.md)
- [Jugendklubs](Jugendklubs/Jugendklubs.md)
- [Veranstaltungen](calendar/calendar.html)
- [Beratung](Beratung/Beratung_Eltern.md)
- [Familienzentren](Familienzentren/Familienzentren.md)
- Jugendamt
- Notrufnummern
</div>
<div class="displaynone" id="listNeu_in_Hsh">
- [Veranstaltungen](calendar/calendar.html)
- [Kitas](Kitas/Kitas.md)
- [Schulen](Schulen/Schulen.md)
- Beratung
- Familienzentren
- Jugendamt
- Bürgeramt
- Begegnungen
- Notrufnummern
</div>
<div class="displaynone" id="listSenior">
- [Veranstaltungen](calendar/calendar.html)
- Beratung
- Ehrenamt
- Notrufnummern
</div>

<script type="text/javascript">
  // format lists after page has loaded
  document.addEventListener("DOMContentLoaded", function(event) {
    formatLists();
  });
</script>
