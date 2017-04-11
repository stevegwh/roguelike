function World(height, width) {
    this.obstacles = this.populateWorld([])
}


World.prototype.populateWorld = function(obstacles) {

    for (var i = 0; i < 10; i++) {
        var randNum = random(1, 10);
        if (randNum > 5) {
            obstacles.push(new Obstacle(60 * i, 100, 60, 60, "wall"));
        } else {
            obstacles.push(new Obstacle(60 * i, 100, 60, 60, "bush"));
        }
    }

    return obstacles;
}

World.prototype.draw = function() {
    noFill();
    stroke(0);
    for (var i = 0; i < this.obstacles.length; i++) {
        this.obstacles[i].draw();
    }
}


World.prototype.update = function() {
    player.update();
    for (var i = 0, length = this.obstacles.length; i < length; i++) {
        this.obstacles[i].detectCollision(i)
    }
}
