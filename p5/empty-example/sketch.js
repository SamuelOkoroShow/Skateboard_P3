var radius = 40;
var x = -radius;
var speed = 2.3;
function setup() {
createCanvas(240, 120);
ellipseMode(RADIUS);
}
function draw() {
background(0);
x += speed; // Increase the value of x
arc(x, 60, radius, radius, 0.52, 5.76);
}
