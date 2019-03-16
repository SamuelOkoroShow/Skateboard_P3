function skateboard(){ 
	// later even 4 wheels.
	// Consistent averages 

	//wheel1.x + wheel2.x / 2

// x values
//if y++, x-- w/ negative slope
wheel1_x = 10
average = 40
wheel2_x = (2*average) - wheel2_x 


var wheel1 = {
	type:'ellipse',
	x:wheel1_x,
	y:wheel_start_y,
	width:24,
	height:24
}
var wheel2= {
	type:'ellipse',
	x:wheel2_x,
	y:250,
	width:24,
	height:24
}
var truck1={
	type: 'triangle',
	x1:wheel1.x,
	y1:wheel1.y,
	x2:wheel2.x,
	y2:wheel2.y,
	x3:(wheel1.x+wheel2.x)/2,
	y3:(wheel1.y+wheel1.height)/4

}; 
var screw2 = {
	type:'ellipse',
	x: wheel2.x,
	y: wheel2.y,
	width: 10,
	height:10
};
var screw1 = {
	type:'ellipse',
	x: wheel1.x,
	y: wheel1.y,
	width: 10,
	height:10
};
var deckSet = 25
var deck1 = {
	type:'rec',
	x:wheel1.x-deckSet,
	y:230,
	width:180,
	height:3

};
var deck2 = {
	type:'rec',
	x:wheel1.x - deckSet,
	y:233,
	width:210,
	height:3

};
var deck3 = {
	type:'rec',
	x:wheel1.x - deckSet,
	y:236,
	width:170,
	height:3
