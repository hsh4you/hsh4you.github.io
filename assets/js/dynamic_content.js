// source 1: https://www.w3schools.com/xml/tryit.asp?filename=tryajax_first
// source 2: https://www.codexworld.com/how-to/get-value-selected-radio-button-jquery/
// source 3: https://github.com/markedjs/marked
function updateList() {
  var value_selected = $('input:radio[name=radio]:checked').val();
  if (value_selected == null) value_selected = "Startauswahl";
  var markdown_filename =  value_selected + ".md";
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var markdown_rawcode = this.responseText;
      var markdown_as_htmlcode = marked(markdown_rawcode);
      var htmlcode_links_fixed = markdown_as_htmlcode.replace(/\.md/g, '.html');
      document.getElementById("list_").innerHTML = htmlcode_links_fixed;
    }
  };
  xhttp.open("GET", markdown_filename, true);
  xhttp.send();
}

function findAddress() {
  var address = '';
  var td = document.getElementsByTagName("td");
  var i;
  for (i = 0; i < td.length; i++) {
    cellcontent = td[i].innerHTML;
    if (cellcontent.indexOf('Adresse') >= 0) {
      address = td[i+1].innerHTML;
      break;
    }
  }
  return address;
};

function showMap(address = '') {
  if (address.length == 0) { address = findAddress(); }
  if (address.length == 0) { return };
  var zoomfactor = 14;
  var htmlcode = '';
  htmlcode += '\n<h2>Karte</h2>';
  htmlcode += '\n<iframe class="gmap_iframe" src="https://maps.google.com/maps';
  htmlcode += '?q=' + address;
  htmlcode += '&z=' + zoomfactor;
  htmlcode += '&output=embed" frameborder="0"></iframe>';
  document.getElementById('gmap').outerHTML = htmlcode;
};
