let x; 
let y;
let size;
let speedX;
let speedY;
let dateText;
let score;

function setup() {
    createCanvas(500, 500);
    x = random(width);
    y = random(height);
    size = 75;

    speedX = random(-5, 5);
    speedY = random(-5, 5);
    dateText = 'Thursday, October 24';
    score = 0;
}

function draw() {
    background(154, 122, 250);

    fill(226, 250, 170);
    noStroke();
    // ellipse(x, y, size, size);
    polygon(x, y, 5, size);

    strokeWeight(3);
    stroke(200);
    for (let i = 0; i < 10; i++) {
        line(0, i * (height / 10), width, i * (height / 10));
    }

    fill(0);
    textSize(20);
    strokeWeight(1);
    noStroke();
    textAlign(RIGHT, BOTTOM);
    text(`score: ${score}`, width - 10, height - 35);
    text(dateText, width - 10, height - 10);

    x += speedX;
    y += speedY;

    if (x > width + (size / 2.0)) {
        x = -(size / 2.0);
    } else if (x < width - (size / 2.0)) {
        x = width + (size / 2.0);
    }

    if (y > height + (size / 2.0)) {
        y = -(size / 2.0);
    } else if (y < height - (size / 2.0)) {
        y = height + (size / 2.0);
    }
}

function keyPressed() {
    dateText += '!';
    score += 10;
}

function polygon(x, y, sides, radius) {
    strokeWeight(3);
    noFill();
    stroke(0, 200, 0);

    push();
    translate(x, y,);
    beginShape();

    let theta = 0;

    for (let i = 0; i < sides; i++) {
        let x = cos(theta) * radius;
        lety = sin(theta) * radius;
        vertex(x, y);
        theta += TWO_PI / sides;
    }

    endShape(CLOSE);
    pop();
}