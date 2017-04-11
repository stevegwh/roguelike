var player,
    room;

function setup() {
    var canvas = createCanvas(800, 600);
    canvas.parent("sketch");
    player = new Player(width / 2, height / 2);
    world = new World();
}

var boxA;

function draw() {
    background(50);
    translate(width / 2 - player.pos.x, height / 2 - player.pos.y);
    player.draw();
    world.update();
    world.draw();
    if (!keyIsPressed) {
        player.velocity.mult(0);
    }

}

function keyPressed() {
    player.move(keyCode);
}
