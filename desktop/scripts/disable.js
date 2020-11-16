// block context menus and right click
document.addEventListener('contextmenu', function(event) {
    event.preventDefault()
});

// disable scrolling
window.onscroll = function() {
    return;
};

// disable tab closing

window.onbeforeunload = function (e) {
    e.preventDefault();
    e.returnValue = 'Really want to quit the game?';
};

document.onkeydown = function (e) {
    e = e || window.event;
    if (!e.ctrlKey) return;
    var code = e.which || e.keyCode;
    switch (code) {
        case 83:
        case 87:
            e.preventDefault();
            e.stopPropagation();
            break;
    }
};

window.addEventListener('keydown', (e) => {
    const { key, altKey } = e;
    if (key === 'F4' && altKey) {
        e.preventDefault();   
    }
});

// disable reload
function disableF5(e) { 
    if ((e.which || e.keyCode) == 116) e.preventDefault();
};
document.onkeypress = disableF5();

// disable back button
window.history.forward();
function noBack(){
    window.history.forward();
};
document.body.addEventListener("load", noBack());

// disable image dragging
document.getElementsByTagName('img').mousedown = function(e) {
    e.preventDefault()
}

// disable keys
document.onkeydown = function(e) {
    if (key.keyCode === 91) {
        return;
    } else if (key.keyCode === 92) {
        return;
    } else if (key.keyCode === 18) {
        return;
    } else if (key.Keycode === 123) {
        return;
    } else if (key.keyCode === 122) {
        return;
    }
}