function inputGood(elt, svgGood, svgBad) {
    if(svgGood === 'emailGood') {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var emailCheck = re.test(String(elt.value).toLowerCase());

        if(elt.value != ' ' && elt.value != '' && emailCheck === true) {
            document.getElementById(svgBad).style.display = 'none';
            document.getElementById(svgGood).style.display = 'block';
        } else {
            document.getElementById(svgGood).style.display = 'none';
            document.getElementById(svgBad).style.display = 'block';
        }
    } else {
        if(elt.value != ' ' && elt.value != '' && elt.value.match(/^[A-Za-z]+$/) && elt.value.length > 2) {
            document.getElementById(svgBad).style.display = 'none';
            document.getElementById(svgGood).style.display = 'block';
        } else {
            document.getElementById(svgGood).style.display = 'none';
            document.getElementById(svgBad).style.display = 'block';
        }
    }
}