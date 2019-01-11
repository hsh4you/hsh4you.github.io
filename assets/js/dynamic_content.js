var filenameprefixes = ['Jugendlicher', 'Eltern', 'Neu_in_Hsh', 'Senior'];
var imagenameprefixes = ['Jugendlicher', 'Eltern', 'Neu_in_Hsh', 'Senior'];
var htmlcodecached = [];
var imagespreloaded = [];
var lastselectedlistname = '';

function preloadImage(imagenameprefix) {
  var imagename_default = imagenameprefix + '.png';
  var imagename_selected = imagenameprefix + '_selected.png';
  var image_default = document.createElement('img');
  var image_selected = document.createElement('img');
  var imagepath = "images/startpage/";
  image_default.src = imagepath + imagename_default;
  image_selected.src = imagepath + imagename_selected;
  imagespreloaded[imagename_default] = image_default;
  imagespreloaded[imagename_selected] = image_selected;
}

function preloadImages() {
  for (let imagenameprefix of imagenameprefixes) {
    preloadImage(imagenameprefix);
  }
}

function updateImages(selectedimageelem) {
  var selectedimagenameprefix = selectedimageelem.id;
  for (let loopimagenameprefix of imagenameprefixes) {
    if (selectedimagenameprefix.indexOf(loopimagenameprefix) == -1) {
      document.getElementById(loopimagenameprefix).src = "images/startpage/" + loopimagenameprefix + ".png";
      document.getElementById(loopimagenameprefix).value = "0";
    } 
    else {
      if (selectedimageelem.value == null || selectedimageelem.value.valueOf() == "0".valueOf()) {
        selectedimageelem.src = "images/startpage/" + selectedimagenameprefix + "_selected.png";
        selectedimageelem.value = "1";
      } 
      else {
        selectedimageelem.src = "images/startpage/" + selectedimagenameprefix + ".png";
        selectedimageelem.value = "0";
      }
    }
  }
}

function updateLists(selectedlistelem) {
  var selectedlistname = selectedlistelem.id;
  var defaultlistelem = document.getElementById('listeKeineAngabe');
  var lastselectedlistelem = document.getElementById(lastselectedlistname);
  if (selectedlistname.valueOf() != lastselectedlistname.valueOf()) {
    lastselectedlistelem.style.display = "none";
    selectedlistelem.style.display = "block";
    lastselectedlistname = selectedlistname;
  }
  else {
    selectedlistelem.style.display = "none";
    defaultlistelem.style.display = "block";
    lastselectedlistname = defaultlistelem.id;
  }
}

function updateImagesAndLists(selectedimageelem) {
  updateImages(selectedimageelem);
  var selectedlistname = 'liste' + selectedimageelem.id;
  var selectedlistelem = document.getElementById(selectedlistname);
  updateLists(selectedlistelem);
}

function formatLists() {
  // replace all lists markdown code with html code
  var listnames = ['listeKeineAngabe', 'listeJugendlicher', 'listeEltern', 'listeNeu_in_Hsh', 'listeSenior'];
  for (let listname of listnames) {
    var listelem = document.getElementById(listname);
    if (listelem != null) {
      var markdowncode = listelem.innerHTML;
      var htmlcode = marked(markdowncode);
      listelem.innerHTML = htmlcode;
    }
  }
  // show default list
  var defaultlistelem = document.getElementById('listeKeineAngabe');
  defaultlistelem.style.display = "block";
  lastselectedlistname = 'listeKeineAngabe';
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
