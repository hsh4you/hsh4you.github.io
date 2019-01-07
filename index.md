## Du bist

<label class="container">
  <input type="radio" name="radio" onclick="updateList2()" value="Jugendlicher"><img id="Jugendlicher" width="64" height="64" src="images/Jugendlicher.png"><br>Jugendliche/r
</label>
<label class="container">
  <input type="radio" name="radio" onclick="updateList2()" value="Eltern"><img id="Eltern" width="64" height="64" src="images/Eltern.png"><br>Mama/Papa
</label>
<label class="container">
  <input type="radio" name="radio" onclick="updateList2()" value="Neu_in_Hsh"><img id="Neu_in_Hsh" width="64" height="64" src="images/Neu_in_Hsh.png"><br>Neu in Hsh
</label>
<label class="container">
  <input type="radio" name="radio" onclick="updateList2()" value="Senior"><img id="Senior" width="64" height="64" src="images/Senior.png"><br>Senior/in
</label>
<label class="container">
  <input type="radio" name="radio" onclick="updateList2()" value="Startauswahl" checked="checked"><br><br><span class="checkmark"></span>neugierig?
</label>
<br>
<div id="list_">
</div>

<script type="text/javascript">
  document.onload = function() { document.title = "Hsh4You"; }
  window.onload = function() { 
    cacheLists();
    preloadImages();
  }
</script>
