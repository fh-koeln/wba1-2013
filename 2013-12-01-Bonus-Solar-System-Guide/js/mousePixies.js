var pixies = new Array();
var shootingStar = new Particle();
var shootingStarSleep = 15 + Math.random() * 40;
var mX;
var mY;

function mousePixies() {
    $(document).ready(function() {
        mX = WIDTH / 2;
        mY = HEIGHT / 2;
        var amount = 20;
        //pixies
        for (var i = 0; i < amount; i++) {
            pixies[i] = new Particle();
            pixies[i].s.randomPos = false;
            pixies[i].s.randomDir = false;
            pixies[i].s.randomRad = false;
            pixies[i].s.dirY = 1;
            pixies[i].s.maxSpdY = 8;
            pixies[i].s.alive = 1200;
            pixies[i].s.xdef = WIDTH / 2;
            pixies[i].s.ydef = HEIGHT / 2;
            pixies[i].s.maxRad = 15;
            pixies[i].reset();
        }
        //shooting star
        shootingStar.s.randomPos = false;
        shootingStar.s.randomDir = false;
        shootingStar.s.randomRad = false;
        shootingStar.s.dirY = 4;
        shootingStar.s.dirX = 10;
        shootingStar.s.maxSpdY = 5;
        shootingStar.s.maxSpdX = 10;
        shootingStar.s.alive = 5000;
        shootingStar.s.xdef = 0;
        shootingStar.s.ydef = 0;
        shootingStar.s.maxRad = 15;
        shootingStar.s.bouncing = false;
        shootingStar.reset();

        $(window).mousemove(function(e) {
            mX = e.pageX;
            mY = e.pageY - $(window).scrollTop();
        });

        $(window).mousedown(function() {
        });
    });
}

function drawPixies() {
    //draw pixies (mousePixies)
    for (var i = 0; i < pixies.length; i++) {
        if (pixies[i].rt >= pixies[i].hl) {
            pixies[i].s.xdef = mX;
            pixies[i].s.ydef = mY;
            pixies[i].reset();
        }
        pixies[i].fade();
        pixies[i].move();
        pixies[i].draw(con2);
    }
}

function drawShootingStar() {
    if ((shootingStar.rt >= shootingStar.hl)
            ||
            (shootingStar.getX() < 0 || shootingStar.getX() > WIDTH)
            ||
            (shootingStar.getX() < 0 || shootingStar.getY() > HEIGHT)) {
        if (shootingStarSleep < 0) {
            shootingStar.s.xdef = Math.random() < 0.5 ? 0 : WIDTH;
            shootingStar.s.ydef = HEIGHT * Math.random();
            shootingStar.s.dirX = shootingStar.s.xdef === WIDTH ? -shootingStar.s.dirX : Math.abs(shootingStar.s.dirX);
            shootingStar.reset();
            shootingStarSleep = 15 + Math.random() * 40;
        } else {
            shootingStarSleep--;
        }
    }
    shootingStar.fade();
    shootingStar.move();
    shootingStar.draw(con);
}

var clutter = new Image();
clutter.src = "img/asteroidB.png";
var clX = -401;
var clY = -86;
var cldx = 0;
var cldy = 0;
var angle = 0;

function chooseClutter() {
    var rand = Math.floor(Math.random() * 12 + 1);
    switch (rand) {
        case 1:
            clutter.src = "img/asteroidM.png";
            break;
        case 2:
            clutter.src = "img/asteroidS.png";
            break;
        case 3:
            clutter.src = "img/asteroidVS.png";
            break;
        case 4:
            clutter.src = "img/asteroidVVS.png";
            break;
        case 5:
            clutter.src = "img/astronaut.png";
            break;
        case 6:
            clutter.src = "img/asteroidM.png";
            break;
        case 7:
            clutter.src = "img/asteroidS.png";
            break;
        case 8:
            clutter.src = "img/asteroidVS.png";
            break;
        case 9:
            clutter.src = "img/asteroidVVS.png";
            break;
        case 10:
            clutter.src = "img/asteroidS.png";
            break;
        case 11:
            clutter.src = "img/asteroidVS.png";
            break;
        case 12:
            clutter.src = "img/asteroidVVS.png";
            break;
        default:
            clutter.src = "img/asteroidS.png";
            break;
    }
    cldx = Math.random() * 4 + 2;
    cldx *= Math.random() < 0.5 ? -1 : 1;
    cldy = Math.random() * 2 + 0.1;
    cldy *= Math.random() < 0.5 ? -1 : 1;
    if (cldx > 0) {
        clX = -400;
    } else {
        clX = WIDTH + 400;
    }
    if (cldy > 0) {
        clY = -85;
    } else {
        clY = HEIGHT + 85;
    }
}

function drawClutter() {
    if ((clX > WIDTH + 400) || (clX < -400) || (clY > HEIGHT + 85) || (clY < -85)) {
        chooseClutter();
    } else {
        clX += cldx;
        clY += cldy;
        con.save();
        con.translate(clX, clY);
        con.rotate(angle++ % 360 * Math.PI / 180);
        con.drawImage(clutter, 0, 0);
        con.restore();
    }
}
