var fps = 30;

function screenHandler() {
    $(document).ready(function myIntervall() {
        draw();
        /*loopIt();
        setTimeout(myIntervall, 60);*/
    });
}

function draw() {
    setTimeout(function() {
        requestAnimationFrame(draw);
        
        con.clearRect(0, 0, WIDTH, HEIGHT);
        con2.clearRect(0, 0, WIDTH, HEIGHT);
        drawStarField();
        drawPixies();
        drawShootingStar();
        parallaxX('#bg4-2', 1);
        parallaxX('#bg4-3', 1.5);
        parallaxX('#bg4-4', 2);
        parallaxX('#bg4-5', 2.5);
        parallaxX('#bg4-6', 3);
        drawClutter();
    }, 1000 / fps);
}
