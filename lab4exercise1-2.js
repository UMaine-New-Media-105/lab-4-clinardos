// Linardos, Caitlin
// Lab 4, exercises 1-2

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // This is where I called my functions
  myTriangle(255, 90, 205);
  myEllipse(10, 230, 40);
  myRhombus(240, 260, 102);
}

// This is where i defined my function to create my own unique Triangle with parameters for user to change color using RGB.
function myTriangle(rt, gt, bt) {
  fill(rt, gt, bt);
  triangle(10, 5, 80, 5, 86, 75);
}

// This is where i defined my function to create my own unique ellipse with parameters for user to change color using RGB.
function myEllipse(r, g, b) {
  fill(r, g, b);
  ellipse(50, 115, 70, 50);
}

// This is where i defined my function to create my own unique shape with parameters for user to change color using RGB.
function myRhombus(rr, gr, br) {
  // I used push(),pop(), to prevent the stroke weight from effecting all shapes.
  push();
  fill(rr, gr, br);
  strokeWeight(3);
  beginShape();
  vertex(10, 180);
  vertex(60, 240);
  vertex(150, 240);
  vertex(100, 180);
  endShape(CLOSE);
  pop();
}
