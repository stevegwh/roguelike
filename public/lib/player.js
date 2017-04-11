function Player(x, y) {
    this.pos = createVector(x, y);
    this.dimensions = {
        w: 30,
        h: 30
    }
    this.r = this.dimensions.w / 2;
    this.velocity = createVector(0, 0);
    this.speed = 5;
}

Player.prototype.update = function() {

    this.pos.add(this.velocity);
}

Player.prototype.draw = function() {
    stroke(0);
    fill(255, 100, 0);
    rectMode(CENTER)
    rect(this.pos.x, this.pos.y, this.dimensions.w, this.dimensions.h);
}

Player.prototype.move = function(e) {
    switch (e) {
        case 87: //up
            this.velocity.y = -this.speed
            this.velocity.x = 0;
            break;
        case 83: //down
            this.velocity.y = this.speed;
            this.velocity.x = 0;
            break;
        case 68: //left
            this.velocity.x = this.speed;
            this.velocity.y = 0;
            break;
        case 65: //right
            this.velocity.x = -this.speed;
            this.velocity.y = 0;
            break
        default:
            break;
    }
}
