function parallax() {
    /* Scroll event handler */
    $(window).bind('scroll', function() {
        parallaxScroll();
    });
};
/* Scroll the background layers */
function parallaxScroll() {
    var docBtm = $(document).height() - $(window).height(); // bottom point
    var scrolled = $(window).scrollTop();

    $('#back').css('top', (0 - (scrolled * .100)) + 'px');
    $('#mid').css('top', (0 - (scrolled * .50)) + 'px');
    $('#front').css('top', (0 - (scrolled * .75)) + 'px');
    $('#forefront').css('top', (0 - (scrolled * 1.0)) + 'px');

    $('#sky').css('opacity',(scrolled) / (docBtm/8)-7.0 ); // opacity-transition : change 'substrahend' to differ nightsky init
    $('#sky').css('backgroundColor', 'hsl(222,61%,' + 0 * (scrolled / (docBtm / 8) - 7.1) + '%)'); // transition from colorX to colorY
}
// aufruf in screenhandler // bewirkt scrollingeffekt //bsp.: parallaxX('#obg1',2);
function parallaxX(kennung, speed) {
    $ground02 = $(kennung);
    var om = parseInt($ground02.css('background-position').substr(0, $ground02.css('background-position').search(' ')));
    $ground02.css('background-position', om - speed + 'px 0px');
}