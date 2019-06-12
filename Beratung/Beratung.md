<h2 id="Beratung_Eltern"></h2>
<h2 id="Beratung_Jugendlicher"></h2>

<script>
    function replaceElement(elementid) {
        filename = elementid.concat('.md');
        $.get(filename, function(markdowncode) {
            htmlcode = marked(markdowncode);
            htmlcode = htmlcode.replace(/\.md/g, '.html'); // fix links
            $("h2#".concat(elementid)).replaceWith(htmlcode);
        }, "text");
    }
    replaceElement("Beratung_Eltern");
    replaceElement("Beratung_Jugendlicher");
</script>