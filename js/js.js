/**
 * file: js.js
 * purpose: interactivity
 **/
console.log('JavaScript from js/js.js: up and running!')

/* forsøg på at lave en scroll animation */

function smoothScroll(target, duration) {
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;


    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) window.requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    window.requestAnimationFrame(animation);
}




var section1 = document.querySelector('.vider-knap-1');
var tilbage1 = document.querySelector('.tilbage-knap-1');
var section2 = document.querySelector('.vider-knap-2')

section1.addEventListener('click', function () {
    smoothScroll('#section-2', 2000)
});

tilbage1.addEventListener('click', function () {
    smoothScroll('#section-1', 3500)
});

section2.addEventListener('click', function () {
    smoothScroll('#section-3', 2000)
});
