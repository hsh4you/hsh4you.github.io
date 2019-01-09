## Du bist

<label class="userselectioncontainer">
  <img onclick="updateSelection(this)" id="Jugendlicher" src="images/startpage/Jugendlicher.png"><br>Jugendliche/r
</label>
<label class="userselectioncontainer">
  <img onclick="updateSelection(this)" id="Eltern" src="images/startpage/Eltern.png"><br>Mama/Papa
</label>
<label class="userselectioncontainer">
  <img onclick="updateSelection(this)" id="Neu_in_Hsh" src="images/startpage/Neu_in_Hsh.png"><br>Neu in Hsh
</label>
<label class="userselectioncontainer">
  <img onclick="updateSelection(this)" id="Senior" src="images/startpage/Senior.png"><br>Senior/in
</label>
<br>
<div id="list_">
</div>

<script type="text/javascript">
  window.onload = function() { 
  	document.title = "Hsh4You";
    preloadLists();
    preloadImages();
  }
</script>
