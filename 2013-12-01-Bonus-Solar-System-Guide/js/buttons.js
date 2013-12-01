function mute() {
    var audioElm = document.getElementById('audioplayer');
    audioElm.muted = !audioElm.muted;
    document.getElementById("muteBtn").src = audioElm.muted ? 'img/soundOff.png' : 'img/soundOn.png';
}

function goesTo(ar, duration, progress) {
    $('html, body').animate({
        scrollTop: (($($(ar).attr('name')).offset().top - $('#mid').offset().top) / 0.5) - $(window).height() + $($(ar).attr('name')).height() - $('#overlay').height() // centers chosen interactive img relative to (viewport - overlay)
    }, duration, function() {
        parallaxScroll(); // Callback is required for iOS
    });
    $('#progress').height(progress + '%');
}

$(function() {
    $('#nav > img')
            .hover(function() {
        $(this).prev().toggleClass('active');
    });
});

$(function() {
    $('.info').hover(function() {
        $('#descr li.' + $(this).attr('id')).toggleClass('active');
    });
});

$(function() {
    $('.zodiacSwitch')
            .hover(function() {
        $(this).prev().addClass('active');
    });
});

//U.F.O.
$(function() {
    var $ufo = $('#bg3-1');
    var ufoX = parseInt($ufo.css('left'), 10);
    var ufoY = parseInt($ufo.css('top'), 10);
    $ufo.hover(function() {
        var currentX = parseInt($ufo.css('left'), 10);
        var currentY = parseInt($ufo.css('top'), 10);
        do {
            var newX = ufoX + Math.sin(Math.random() * Math.PI * 2) * 200;
            var newY = ufoY + Math.cos(Math.random() * Math.PI * 2) * 200;
        } while ((Math.abs(currentX-newX) < 100) && (Math.abs(currentY-newY) < 100));
        clearTimeout($ufo.t);
        $ufo.stop().animate({
            left: newX,
            top: newY}, {duration: 500});
    }, function() {
        $ufo.t = setTimeout((function() {
            $ufo.stop().animate({
                left: ufoX,
                top: ufoY}, {duration: 500});
        }), 1000);
    });
});