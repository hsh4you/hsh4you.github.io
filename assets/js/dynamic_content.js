var filenameprefixes = ['Startauswahl', 'Jugendlicher', 'Eltern', 'Neu_in_Hsh', 'Senior'];
var imagenameprefixes = ['Jugendlicher', 'Eltern', 'Neu_in_Hsh', 'Senior'];
var htmlcodecached = [];
var imagespreloaded = [];

function cacheLists() {
  for (let filenameprefix of filenameprefixes) {
    var markdownfilename = filenameprefix + '.md';
    cacheMarkdownFileAsHtmlCode(markdownfilename);
  }
}

function preloadImage(imagenameprefix) {
  var imagename_default = imagenameprefix + '.png';
  var imagename_selected = imagenameprefix + '_selected.png';
  var image_default = document.createElement('img');
  var image_selected = document.createElement('img');
  image_default.src = imagename_default;
  image_selected.src = imagename_selected;
  imagespreloaded[imagename_default] = image_default;
  imagespreloaded[imagename_selected] = image_selected;
}

function preloadImages() {
  for (let imagenameprefix of imagenameprefixes) {
    preloadImage(imagenameprefix);
  }
}

// source 1: https://www.w3schools.com/xml/tryit.asp?filename=tryajax_first
// source 2: https://github.com/markedjs/marked
function cacheMarkdownFileAsHtmlCode(markdownfilename) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var markdowncode = this.responseText;
      htmlcode = marked(markdowncode);
      htmlcode = htmlcode.replace(/\.md/g, '.html'); // fix links
      htmlcodecached[markdownfilename] = htmlcode;
      if (Object.keys(htmlcodecached).length == filenameprefixes.length) { 
        updateList(); 
      }
    }
  };
  xhttp.open("GET", markdownfilename, true);
  xhttp.send();
}

// source: https://www.codexworld.com/how-to/get-value-selected-radio-button-jquery/
function updateList() {
  var userselection = $('input:radio[name=radio]:checked').val();
  if (userselection == null) userselection = "Startauswahl";
  var markdownfilename =  userselection + ".md";
  var htmlcode = htmlcodecached[markdownfilename];
  document.getElementById("list_").innerHTML = htmlcode;
}

// source: https://www.codexworld.com/how-to/get-value-selected-radio-button-jquery/
function updateList2() {  
  var userselection = $('input:radio[name=radio]:checked').val();
  if (userselection == null) userselection = "Startauswahl";
  
  for (let imagenameprefix of imagenameprefixes) {
    if (userselection.indexOf(imagenameprefix) == -1) {
      document.getElementById(imagenameprefix).src = "images/" + imagenameprefix + ".png";
    } else {
      document.getElementById(imagenameprefix).src = "images/" + imagenameprefix + "_selected.png";
    }
  }
  
  var markdownfilename =  userselection + ".md";
  var htmlcode = htmlcodecached[markdownfilename];
  document.getElementById("list_").innerHTML = htmlcode;
}

// source: https://www.codexworld.com/how-to/get-value-selected-radio-button-jquery/
function updateList3(userselection = null) {
  if (userselection == null) userselection = "Startauswahl";
  
  var markdownfilename =  userselection + ".md";
  var htmlcode = htmlcodecached[markdownfilename];
  document.getElementById("list_").innerHTML = htmlcode;
}

// source: https://stackoverflow.com/a/9844161
function toggleImage(elem) {
  var userselection = elem.id;

  for (let imagenameprefix of imagenameprefixes) {
    if (userselection.indexOf(imagenameprefix) == -1) {
      document.getElementById(imagenameprefix).src = "images/" + imagenameprefix + ".png";
      document.getElementById(imagenameprefix).value = "0";
    } 
    else {
      if (elem.value.valueOf() == "0".valueOf()) {
        elem.src = "images/" + imagenameprefix + "_selected.png";
        elem.value = "1";
      } 
      else {
        elem.src = "images/" + imagenameprefix + ".png";
        elem.value = "0";
        userselection = "Startauswahl";
      }
    }
  }

  updateList3(userselection);
}

function findAddress() {
  var address = '';
  var cells = document.getElementsByTagName("td");
  var i;
  for (i = 0; i < cells.length; i++) {
    cellcontent = cells[i].innerHTML;
    if (cellcontent.indexOf('Adresse') >= 0) {
      address = cells[i+1].innerHTML;
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
