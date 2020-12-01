// Mobil nav 
function mobilNav(elt, contentDiv) {
    var openCheck = elt.children[0];
    var openIcon = elt.children[1];
    var closeIcon = elt.children[2];
    var buttonsContainer = document.getElementById('mobileNavBtnContainer');
    var contentContainer = document.getElementById(contentDiv);

    var counter = 0;

    if (openCheck.checked === false && counter === 0) {
        openIcon.style.display = 'none';
        closeIcon.style.display = 'block';
        buttonsContainer.style.display = 'block';
        contentContainer.style.display = 'none';
        openCheck.checked = true;
        counter++;
    }

    if (openCheck.checked === true && counter === 0) {
        openIcon.style.display = 'block';
        closeIcon.style.display = 'none';
        buttonsContainer.style.display = 'none';
        contentContainer.style.display = 'block';
        openCheck.checked = false;
        counter++;
    }
}