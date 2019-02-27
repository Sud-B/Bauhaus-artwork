let axis = 768,
  rectx = 650,
  recty = 450;
let switchy = false;

function setup() {
  //Create var to place canvas for ease of positioning
  var canvas = createCanvas(1024, 768);
  canvas.parent('plholder');
  //Set background
  background(255);
}

function draw() {
  // Main shape that uses axis points with no boundary
  // With red fill and no stroke
  noStroke();
  fill(255, 5, 0);
  beginShape();
  vertex(axis, 75);
  vertex(axis, 575);
  vertex(968, 300);
  vertex(818, 75);
  endShape(CLOSE);
  // Circle with dull yellow fill
  fill(255, 199, 13);
  ellipse(925, 600, 130);
  //stroke on subsequent shapes
  stroke(0);
  strokeWeight(1.5);
  //  Rectangle with yellow fill
  fill(254, 255, 7);
  //Line to balance shapes across
  line(2, 690, 925, 690)
  rect(868, 50, 50, 225);
  // Triangle with orange fill
  fill(255, 74, 13);
  triangle(825, 600, 925, 600, 825, 725);
  // loop to create 3 coordinated rectangles
  // Rectangles have heavier stroke and yellow fill with transparency
  strokeWeight(2.5);
  fill(254, 255, 7, 120);
  for (let i = 0; i < 3; i++) {
    rect(rectx + i * 50, recty - i * 50, 250, 20);
  }
  // Event to create a frame
  //function doubleClicked () {
  // switchy = true
  //}
  if (switchy == true) {
    line(5, 2, 1022, 2);
    line(1022, 2, 1022, 764);
    line(5, 2, 5, 764);
    line(5, 764, 1022, 764);
  }
}
// Event to create a frame
function doubleClicked() {
  switchy = true
}
