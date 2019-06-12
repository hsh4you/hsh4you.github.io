const DEFAULTLISTNAME = 'listDefault';

var lastselectedlabel = null;

function showImage(image) {
    image.style.display = 'inline';
}

function hideImage(image) {
    image.style.display = 'none';
}

function getDefaultImage(label) {
    defaultimage = label.getElementsByTagName("img")[0];
    return defaultimage;
}

function getSelectedImage(label) {
    selectedimage = label.getElementsByTagName("img")[1];
    return selectedimage;
}

function getVisibleList() {
    visiblelist = document.getElementById('listVisible');
    return visiblelist;
}

function getDefaultList() {
    defaultlist = document.getElementById('listDefault');
    return defaultlist;
}

function showDefaultList() {
    getVisibleList().innerHTML = getDefaultList().innerHTML;
}

function showSelectedList(listid) {
    getVisibleList().innerHTML = document.getElementById(listid).innerHTML;
}

function getListId(label) {
    imagename = getDefaultImage(label).src.split('/').slice(-1)[0];
    basename = imagename.split('.')[0];
    listid = 'list'.concat(basename);
    return listid;
}

function selectLabel(label) {
    hideImage(getDefaultImage(label));
    showImage(getSelectedImage(label));
    lastselectedlabel = label;
    listid = getListId(label);
    showSelectedList(listid);
}

function deselectLabel(label) {
    hideImage(label.getElementsByTagName("img")[1]);
    showImage(getDefaultImage(label));
    lastselectedlabel = null;
}

function updateImagesAndLists(label) {
    if (lastselectedlabel == null)
    {
        selectLabel(label);
    }
    else if (lastselectedlabel != label) {
        deselectLabel(lastselectedlabel);
        selectLabel(label);
    }
    else if (lastselectedlabel == label) {
        deselectLabel(label);
        showDefaultList();
    }
}

function formatLists() {
    // replace all lists markdown code with html code
    var listnames = ['listDefault', 'listJugendlicher', 'listEltern', 'listNeu_in_Hsh', 'listSenior'];
    for (let listname of listnames) {
        var listelem = document.getElementById(listname);
        if (listelem != null) {
            var markdowncode = listelem.innerHTML;
            var htmlcode = marked(markdowncode);
            listelem.innerHTML = htmlcode;
        }
    }
    showDefaultList();
}
