var lastclickedimagebasename = '';
const DEFAULTLISTNAME = 'listDefault';

function showImage(imageelem) {
  imageelem.style.display = 'inline';
}

function hideImage(imageelem) {
  imageelem.style.display = 'none';
}

function updateImagesAndLists(clickedimageelem) {
  var clickedimagename = clickedimageelem.id;
  var clickedimagebasename = clickedimagename.replace('Clicked', '').replace('Default', '');
  var imagedefaultversionname = clickedimagebasename + 'Default';
  var imagedefaultversionelem = document.getElementById(imagedefaultversionname);
  var imageclickedversionname = clickedimagebasename + 'Clicked';
  var imageclickedversionelem = document.getElementById(imageclickedversionname);
  var liststartpageelem = document.getElementById('listStartpage');
  var hasimagebeenclickedagain = (clickedimagename.indexOf('Clicked') > 0);
  if (hasimagebeenclickedagain) {
    hideImage(imageclickedversionelem);
    showImage(imagedefaultversionelem);
    var defaultlistelem = document.getElementById(DEFAULTLISTNAME);
    if (defaultlistelem != null) {
      liststartpageelem.innerHTML = defaultlistelem.innerHTML;  
    }
  }
  else {
    if (lastclickedimagebasename.length > 0) {        
      var lastclickedimagedefaultversionelem = document.getElementById(lastclickedimagebasename + 'Default');
      var lastclickedimageclickedversionelem = document.getElementById(lastclickedimagebasename + 'Clicked');
      hideImage(lastclickedimageclickedversionelem);
      showImage(lastclickedimagedefaultversionelem);
    }
    hideImage(imagedefaultversionelem);
    showImage(imageclickedversionelem);
    var listtoshowname = clickedimagebasename.replace('img', 'list');
    var listtoshowelem = document.getElementById(listtoshowname);
    if (listtoshowelem != null) {
      liststartpageelem.innerHTML = listtoshowelem.innerHTML;
    }
  }
  lastclickedimagebasename = clickedimagebasename;
}  

function formatLists() {
  // replace all lists markdown code with html code
  var listnames = ['listDefault', 'listJugendlicher', 'listEltern', 'listNeu', 'listSenior'];
  for (let listname of listnames) {
    var listelem = document.getElementById(listname);
    if (listelem != null) {
      var markdowncode = listelem.innerHTML;
      var htmlcode = marked(markdowncode);
      listelem.innerHTML = htmlcode;
    }
  }
  // show content of default list
  var liststartpageelem = document.getElementById('listStartpage');
  var defaultlistelem = document.getElementById(DEFAULTLISTNAME);
  liststartpageelem.innerHTML = defaultlistelem.innerHTML;
}
