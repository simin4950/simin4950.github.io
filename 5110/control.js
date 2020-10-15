let sq = document.querySelector('#square');

function changeCSS(bg, radius) {
    sq.style.backgroundColor = bg;
    sq.style.borderRadius = radius;
}

function toCircle() {
    sq.style.borderRadius = '90%';
}

function addBackgroundImage() {
    sq.style.backgroundImage = "url('https://static.tvtropes.org/pmwiki/pub/images/totorogang.png')";
    sq.style.backgroundRepeat = 'no-repeat';
    sq.style.backgroundPosition = 'center';
}

function rotate() {
    sq.style.transform = 'rotate(45deg)';
}

function addBorder() {
    sq.style.border = 'thick solid #0000FF';
}

function changeBorderColor() {
    sq.style.border = 'thick solid orange'
}

function changeBorder() {
    sq.style.border = 'thick dashed #0000FF';
}

