## Du bist

<label class="container2">
  <img onclick="toggleImage(this)" value="0" class="toggle" id="Jugendlicher" src="images/startpage/Jugendlicher.png"><br>Jugendliche/r
</label>
<label class="container2">
  <img type="image" onclick="toggleImage(this)" value="0" class="toggle" id="Eltern" src="images/startpage/Eltern.png"><br>Mama/Papa
</label>
<label class="container2">
  <img type="image" onclick="toggleImage(this)" value="0" class="toggle" id="Neu_in_Hsh" src="images/startpage/Neu_in_Hsh.png"><br>Neu in Hsh
</label>
<label class="container2">
  <img type="image" onclick="toggleImage(this)" value="0" class="toggle" id="Senior" src="images/startpage/Senior.png"><br>Senior/in
</label>
<br>
<div id="list_">
</div>

<script type="text/javascript">
  window.onload = function() { 
  	document.title = "Hsh4You";
    cacheLists();
    preloadImages();
    updateList3();
  }
</script>
