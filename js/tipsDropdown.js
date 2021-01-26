function dropdown(elt, contentDiv) {
    var closedIcon = elt.children[1].children[0];
    var openIcon = elt.children[1].children[1];
    var content = document.getElementById(contentDiv);

    if (content.style.display === 'none') {
        content.style.display = 'block';
        
        closedIcon.style.display = 'none';
        openIcon.style.display = 'inline-block';
    } else {
        content.style.display = 'none';

        closedIcon.style.display = 'inline-block';
        openIcon.style.display = 'none';
    }
}