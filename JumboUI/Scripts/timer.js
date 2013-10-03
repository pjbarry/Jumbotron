var Timer;
var TotalSeconds;
var page;
var pagecount;
var tickcount;
var links = new Array();

function CreateTimer(TimerID, Time) {
    Timer = document.getElementById(TimerID);
    page = 0;
    pagecount = 6;
    tickcount = Time;
    links[0] = "http://vitharr:6592/status/status";
    links[1] = "http://vitharr:24680/";
    links[2] = "http://vitharr:16010/Status/Dev";
    links[3] = "http://vitharr:16010/Status/Live";
    links[4] = "http://vitharr:16010/Status/DevDB";
    links[5] = "http://vitharr:16010/Status/LiveDB";
    UpdateTimer();
    window.setTimeout("Tick()", tickcount);
}

function Tick() {
    page++;
   if (page >= pagecount) {
           page = 0;
    }

    UpdateTimer()
    window.setTimeout("Tick()", tickcount);
}

function fadeOut(el, duration) {
    var step = 10 / duration,
        opacity = 1;
    function next() {
        if (opacity <= 0) { return; }
        el.style.opacity = (opacity -= step);
        setTimeout(next, 10);
    }
    next();
}

function fadeIn(el, duration) {
    var step = 10 / duration,
        opacity = 0;
    function next() {
        if (opacity >= 1) { return; }
        el.style.opacity = (opacity += step);
        setTimeout(next, 10);
    }
    next();
}

function isEven(value) {
    return (value % 2 == 0);
}

function UpdateTimer() {
    
    var primary = document.getElementById("primarylink");
    var secondary = document.getElementById("secondarylink");
    if (isEven(page)) {
        secondary.innerHTML = "<iframe src=\"" + links[page] + "\" style=\"border: 0; position:absolute; top:0; left:0; right:0; bottom:0; width:100%; height:100%\"><p>Your browser does not support iframes.</p></iframe>";
        fadeOut(primary, 1500);
        fadeIn(secondary, 1500);
    }
    else {
        primary.innerHTML = "<iframe src=\"" + links[page] + "\" style=\"border: 0; position:absolute; top:0; left:0; right:0; bottom:0; width:100%; height:100%\"><p>Your browser does not support iframes.</p></iframe>";
        fadeOut(secondary, 1500);
        fadeIn(primary, 1500);
    }

}

