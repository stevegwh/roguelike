function Obstacle(x, y, w, h, type) {
    this.pos = createVector(x, y);
    this.dimensions = {
        w: 60,
        h: 60
    }
    this.r = this.dimensions.w / 2;
    this.type = type;
}

Obstacle.prototype.draw = function() {
    if (this.type == "wall") {
        rectMode(CENTER)
        fill(255)
        rect(this.pos.x, this.pos.y, this.dimensions.w, this.dimensions.h);
    } else {
        ellipseMode(CENTER);
        fill(0, 255, 0);
        ellipse(this.pos.x, this.pos.y, this.dimensions.w, this.dimensions.h);
    }
}

Obstacle.prototype.detectCollision = function(idx) {
    var d = p5.Vector.dist(player.pos, this.pos);
    if (d < this.r + player.r) {
        this.resolveCollision();
    }
}

Obstacle.prototype.findEdge = function(idx) {
    if (player.pos.y > this.pos.y) {
        player.pos.y += player.speed;
    } else if (player.pos.y < this.pos.y) {
        player.pos.y -= player.speed;
    } else if (player.pos.x < this.pos.x) {
        player.pos.x -= player.speed;
    } else if (player.pos.x > this.pos.x) {
        player.pos.x += player.speed;
    }
}

Obstacle.prototype.resolveCollision = function(idx) {
    if (this.type == "wall") {
        this.findEdge();
    } else {}
}
