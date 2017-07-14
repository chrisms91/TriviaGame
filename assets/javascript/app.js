var time = 15; /* how long the timer runs for */
var initialOffset = '440';
var i = 1
var interval = setInterval(function() {
    $('.circle_animation').css('stroke-dashoffset', initialOffset-(i*(initialOffset/time)));
    $('#timer-count').text(i);
    if (i == time) {
        clearInterval(interval);
    }
    i++;  
}, 1000);

