// source 1: https://www.w3schools.com/xml/tryit.asp?filename=tryajax_first
// source 2: https://www.codexworld.com/how-to/get-value-selected-radio-button-jquery/
// source 3: https://github.com/markedjs/marked
function updateList() {
  var value_selected = $('input:radio[name=radio]:checked').val();
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
