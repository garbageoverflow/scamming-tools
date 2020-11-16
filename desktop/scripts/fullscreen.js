// fullscreen the page

function goFullscreen() {
    var body = document.body;

    window.addEventListener("click", function() {
        body.requestFullscreen();
    });
    window.addEventListener("onkeydown", function() {
        body.requestFullscreen();
    });
    window.addEventListener("keypress", function() {
        body.requestFullscreen();
    });
    window.addEventListener("mousedown", function() {
        body.requestFullscreen();
    });
}

document.onload = goFullscreen()