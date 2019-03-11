var angle = 0.0;
var offset = 30;
var scalar = 3.9;
var speed = 0.05;
function setup() {
createCanvas(240, 120);
}
function draw() {
background(0);
var y1 = offset + cos(angle) * scalar;
var y2 = offset + sin(angle + 10) * scalar;
var y3 = offset + sin(angle + 0.9) * scalar;
ellipse( 80, y1+15, 20, 40);
ellipse(120, y2, 40, 40);
ellipse(160, y3+15, 20, 40);
angle += speed;
}