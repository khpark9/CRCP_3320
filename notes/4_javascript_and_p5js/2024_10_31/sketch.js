// p5.js Sketch

let f;

function setup() {
    createCanvas(500, 500);
    f = new Flower(100, 100, color(0, 255, 0));
    f2 = new Flower(200, 400, color(0, 0, 255));
}

function draw() {
    background(20, 22, 26);
    f.draw();
    f2.draw();
}

function keyPressed() {
    f.petalColor = color(random(255), random(255), random(255));
}