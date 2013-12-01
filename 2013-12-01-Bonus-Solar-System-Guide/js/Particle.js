/* Particle Object */
function Particle() {

    this.s = {
        alive: 4000, //
        maxSpdX: 0,
        maxSpdY: 5,
        dirX: 0,
        dirY: 0,
        maxRad: 10,
        rt: 1,
        xdef: 960,
        ydef: 540, // fixed pos, if randomPos = false
        xdrift: 4,
        ydrift: 4,
        randomPos: true,
        randomDir: false, // random direction, sonst dirX & dirY
        randomRad: true,
        blink: true,
        drifting: false, // not in use
        bouncing: true // if true, bounces off viewport
    };

    this.reset = function() {
        // set position
        this.x = (this.s.randomPos ? WIDTH * Math.random() : this.s.xdef);
        this.y = (this.s.randomPos ? HEIGHT * Math.random() : this.s.ydef);
        // set size
        this.r = this.s.randomRad ? ((this.s.maxRad - 1) * Math.random()) + 1 : this.s.maxRad;
        //set speed
        this.dx = !this.s.radomDir ? this.s.dirX * this.s.maxSpdX : (Math.random() * this.s.maxSpdX) * (Math.random() < .5 ? -1 : 1); // heading X
        this.dy = !this.s.radomDir ? this.s.dirY * this.s.maxSpdY : (Math.random() * this.s.maxSpdY) * (Math.random() < .5 ? -1 : 1); // heading Y
        // set behavior
        this.hl = (this.s.alive / updates) * (this.r / this.s.maxRad);
        this.rt = Math.random() * this.hl;
        this.s.rt = Math.random() + 1;
        this.stop = Math.random() * .2 + .4; // grafisches Attribut: colorstop
        this.s.xdrift *= Math.random() * (Math.random() < .5 ? -1 : 1);
        this.s.ydrift *= Math.random() * (Math.random() < .5 ? -1 : 1);
    };
    // fading - nötig für particle-reset
    this.fade = function() {
        this.rt += this.s.rt;
    };
    // drawing
    this.draw = function(con) {
        if (this.s.blink && (this.rt <= 0 || this.rt >= this.hl))
            this.s.rt = this.s.rt * -1;
        else if (this.rt >= this.hl)
            this.reset();
        var newo = 1 - (this.rt / this.hl);
        con.beginPath();
        con.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
        con.closePath();
        var cr = this.r * newo;
        g = con.createRadialGradient(this.x, this.y, 0, this.x, this.y, (cr <= 0 ? 1 : cr));
        g.addColorStop(0.0, 'rgba(255,255,255,' + 1 + ')');
        g.addColorStop(this.stop, 'rgba(77,101,181,' + 0.6 + ')');
        g.addColorStop(1.0, 'rgba(77,101,181,0)');
        con.fillStyle = g;
        con.fill();
    };
    // moving
    this.move = function() {
        this.x += (this.rt / this.hl) * this.dx;
        this.y += (this.rt / this.hl) * this.dy;
        if ((this.x > WIDTH || this.x < 0) && this.s.bouncing)
            this.dx *= -1;
        if ((this.y > HEIGHT || this.y < 0) && this.s.bouncing)
            this.dy *= -1;
    };
    this.getX = function() {
        return this.x;
    };
    this.getY = function() {
        return this.y;
    };
}