
  var lastselectedlistname = '';
  var lastclickedimagebasename = '';
  const DEFAULTLISTNAME = 'listDefault';

  function updateLists(selectedlistelem) {
    var selectedlistname = selectedlistelem.id;
    var lastselectedlistelem = document.getElementById(lastselectedlistname);
    if (selectedlistname.valueOf() != lastselectedlistname.valueOf()) {
      lastselectedlistelem.style.display = "none";
      selectedlistelem.style.display = "block";
      lastselectedlistname = selectedlistname;
    }
    else {
      selectedlistelem.style.display = "none";
      var defaultlistelem = document.getElementById(DEFAULTLISTNAME);
      defaultlistelem.style.display = "block";
      lastselectedlistname = defaultlistelem.id;
    }
  }

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
    var hasimagebeenclickedagain = (clickedimagename.indexOf('Clicked') > 0);
    if (hasimagebeenclickedagain) {
      hideImage(imageclickedversionelem);
      showImage(imagedefaultversionelem);
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
    }
    lastclickedimagebasename = clickedimagebasename;
    //var listtoshowname = clickedimagename.replace('img', 'list').replace('Default', '');
    // listtoshowelem = document.getElementById(listtoshowname);
    //updateLists(listtoshowelem);
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
    // show default list
    var defaultlistelem = document.getElementById(DEFAULTLISTNAME);
    defaultlistelem.style.display = "block";
  }
