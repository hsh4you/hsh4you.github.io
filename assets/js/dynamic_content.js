var filenameprefixes = ['Startauswahl', 'Jugendlicher', 'Eltern', 'Neu_in_Hsh', 'Senior'];
var htmlcodearr = [];

function windowOnLoad() {
  for (let prefix of filenameprefixes) {
    markdownfilename = prefix + '.md';
    getMarkdownAsHtmlCode(markdownfilename);
  }
  updateList();
}

// source 1: https://www.w3schools.com/xml/tryit.asp?filename=tryajax_first
// source 2: https://www.codexworld.com/how-to/get-value-selected-radio-button-jquery/
// source 3: https://github.com/markedjs/marked
function getMarkdownAsHtmlCode(markdownfilename) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var markdowncode = this.responseText;
      htmlcode = marked(markdowncode);
      htmlcode = htmlcode.replace(/\.md/g, '.html'); // fix links
      htmlcodearr[markdownfilename] = htmlcode;
    }
  };
  xhttp.open("GET", markdownfilename, true);
  xhttp.send();
}

function updateList() {
  var userselection = $('input:radio[name=radio]:checked').val();
  if (userselection == null) userselection = "Startauswahl";
  var markdownfilename =  userselection + ".md";
  var htmlcode = htmlcodearr[markdownfilename];
  document.getElementById("list_").innerHTML = htmlcode;
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

// source: https://www.embedgooglemap.net/
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
