// Linardos, Caitlin
// Lab 4: ex 3

function setup() {
  createCanvas(400, 400);

  angleMode(DEGREES);
}

function draw() {
  background(220);

  // calling function
  mousePressed();
}

// This is where I created the first sprite
function tanBear(bearColor, x, y, size) {
  push();
  stroke("saddlebrown");
  strokeWeight(1.5);
  pop();
  fill(bearColor);
  translate(x, y);
  scale(size);

  // These are the ears
  push();
  stroke("saddlebrown");
  strokeWeight(1.5);
  ellipse(70, 70, 34);
  ellipse(130, 70, 34);

  // These are the feet
  ellipse(75, 211, 32, 24);
  ellipse(125, 211, 32, 24);

  // This is the torso
  ellipse(100, 165, 80, 100);

  // These are the arms
  ellipse(55, 166, 32, 24);
  ellipse(145, 166, 32, 24);

  // This is the face/head
  ellipse(100, 100, 85);

  fill("saddlebrown");
  ellipse(85, 90, 10);
  ellipse(115, 90, 10);
  ellipse(100, 120, 60, 25);
  pop();
}

// This is the second sprite (that occurs when mouse is pressed)

function myScreamPanda(colorOne, colorTwo, x, y, size) {
  translate(x, y);
  scale(size);
  push();
  noStroke();
  // These are the ears
  noStroke();
  fill(colorOne);
  ellipse(40, 30, 50);
  ellipse(120, 30, 50);

  // This is the head
  fill(colorTwo);
  ellipse(80, 70, 110);

  // These are the eyes
  fill(colorOne);
  push();
  rotate(20);
  ellipse(70, 40, 30, 50);
  pop();
  push();
  rotate(-20);
  ellipse(80, 95, 30, 50);
  pop();

  // This is the mouth
  ellipse(80, 100, 40);
  pop();
}

// Function for mouse press
function mousePressed() {
  if (mouseIsPressed) {
    myScreamPanda("black", "white", -30, 15, 2.5);
  } else {
    tanBear("tan", -20, -70, 2);
  }
}
