console.log('JavaScript from js/js.js: up and running!')
// -------------------- smooth scroll animation 
function smoothScroll(target, duration) {
    // var target = document.querySelector(".last"); // vil altid hoppe til last
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset || window.scrollY;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function loop(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(loop);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
    requestAnimationFrame(loop);
}

//Animation til section 2
document.querySelector(".ned-knap-1").addEventListener("click", function (e) {
    e.preventDefault();
    console.log('klik fra section 1 til section 2')
    smoothScroll(document.querySelector(".section-2"), 2000);
});

//Animating Fra section 2 til section 1
document.querySelector(".op-knap-1").addEventListener("click", function (e) {
    e.preventDefault();
    console.log('klik fra section 2 til section 1 test')
    smoothScroll(document.querySelector(".section-1"), 3000);
});

/** Animating Fra section 2 til section 3 virker ikke efter hensigten - den scroller op.
 document.querySelector(".ned-knap-2").addEventListener("click", function (e) {
     e.preventDefault();
     console.log('klik fra section 2 til section 3 test')
     smoothScroll(document.querySelector(".sec-3"), 2000);
 });
*/

// scroll til footer    
/**document.querySelector(".loremHop").addEventListener("click", function (e) {
    console.log('klik på: loremHop')
    e.preventDefault();
    smoothScroll(document.querySelector(".foot"), 2000);
});
*/

// ------------------------------ VIDEO KONTROL ----------------------------------------

var myVideo = document.getElementById("myVideo");
myVideo.width = 400;
myVideo.controls = true;

// the ON / OFF trick
function playPause() {
    if (myVideo.paused) {
        myVideo.play();
        myVideo.controls = false;
        playNow.src = 'images/PAUSE.png'

    } else {
        myVideo.pause();
        myVideo.controls = true;
        playNow.src = 'images/PLAY.png'
    }
}



// muting sound
function shutUpPlease() {

    //document.getElementById("myVideo").muted = true;
    // myVideo.muted = true;
    if (myVideo.muted) {
        myVideo.muted = false;
        muteNow.src = 'images/LYDFRA.png'
    } else {
        myVideo.muted = true;
        muteNow.src = 'images/LYDPAA.png'

    }
    console.log('prøver at mute')
}

// Ville have lavet en if funtion til størrelsen på videoen, men der var ikke tid.
/*
function makeBig() {
    myVideo.width = 1000;
}

function makeSmall() {
    myVideo.width = 200;
}

function makeNormal() {
    myVideo.width = 400;
}
*/

// eventListener 
playNow.addEventListener('click', playPause)
muteNow.addEventListener('click', shutUpPlease)
// bigNow.addEventListener('click', makeBig)
