// TIMER CLASS
class Timer {
    constructor(minutesContainer = null, secondsContainer = null, minutesInterval = 0) {
        this.minutesContainer = minutesContainer;
        this.secondsContainer = secondsContainer;
        this.minutesInterval = minutesInterval;
    }
    create() {
        let duration = 60 * this.minutesInterval;
        let timer = duration, minutes, seconds;

        var refreshId = setInterval(() => {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            document.getElementById(this.minutesContainer).innerHTML = minutes;
            document.getElementById(this.secondsContainer).innerHTML = seconds;

            if (--timer < 0) {
                document.getElementById(this.minutesContainer).innerHTML = '00';
                document.getElementById(this.secondsContainer).innerHTML = '00';

                clearInterval(refreshId);
            }
        }, 1000);
    }
}
// TIMER CLASS

// TIMER INIT

$(document).ready(function() {
    if ($('#countdownTimer').length > 0) {
        let timer = new Timer('count-down-minutes', 'count-down-seconds', $('#countdownTimer').data('minutes-interval'));
        timer.create();
    }
});
// TIMER INIT


// base scrips initialization
$(document).ready(function(){
    if ($('#countdownTimer').length > 0) {
        let timer = new Timer('count-down-minutes', 'count-down-seconds', $('#countdownTimer').data('minutes-interval'));
        timer.create();
    }
});
// base scrips initialization

// Smooth scroll
$(document).ready(function() {
    $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) {
                            return false;
                        } else {
                            $target.attr('tabindex', '-1');
                            $target.focus();
                        }
                    });
                }
            }
        });
});
// Smooth scroll

