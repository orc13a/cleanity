function dropdown(elt) {
    var dropdownCheck = elt.children[0].children[0];
    var iconClosed = elt.children[0].children[2].children[0];
    var iconOpen = elt.children[0].children[2].children[1];
    var contentContainer = elt.children[1];

    var counter = 0;

    if (dropdownCheck.checked === false && counter === 0) {
        dropdownCheck.checked = true;
        iconClosed.style.display = 'none';
        iconOpen.style.display = 'inline-block';
        contentContainer.style.display = 'block';
        counter++;
    }
    
    if (dropdownCheck.checked === true && counter === 0) {
        dropdownCheck.checked = false;
        iconClosed.style.display = 'inline-block';
        iconOpen.style.display = 'none';
        contentContainer.style.display = 'none';
        counter++;
    }
}