var WIDTH;
var HEIGHT;
var canvas;
var canvas2;
var con;
var con2;
var g;
var stars = new Array();
var updates = 60;

function starField() {
    $(document).ready(function() {
        /* Canvas auf Viewport aufspannen */
        WIDTH = window.innerWidth;
        HEIGHT = window.innerHeight;
        $('#canvasWrapper').width(WIDTH).height(HEIGHT);

        canvas = document.getElementById('stars');
        $(canvas).attr('width', WIDTH).attr('height', HEIGHT);
        con = canvas.getContext('2d');

        canvas2 = document.getElementById('cursor');
        $(canvas2).attr('width', WIDTH).attr('height', HEIGHT);
        con2 = canvas2.getContext('2d');
        /* stars-Array mit Particle-Objects füllen */
        for (var i = 0; i < 100; i++) {
            stars[i] = new Particle();
            stars[i].s.maxRad = 8;
            stars[i].reset();
        }
    });
    /* Viewport-Resize-Handler */
    window.onresize = function() {
        WIDTH = window.innerWidth;
        HEIGHT = window.innerHeight;
        canvas = document.getElementById('stars');
        canvas2 = document.getElementById('cursor');
        $(canvas).attr('width', WIDTH).attr('height', HEIGHT);
        $(canvas2).attr('width', WIDTH).attr('height', HEIGHT);
        $('#canvasWrapper').width(WIDTH).height(HEIGHT);
        for (var i = 0; i < 100; i++) {
            stars[i].reset();
        }
    };
}

function drawStarField() {
    //draw stars (starField)
    for (var i = 0; i < stars.length; i++) {
        stars[i].fade();
        stars[i].draw(con);
    }
}