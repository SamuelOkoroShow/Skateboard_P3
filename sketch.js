var multipier
// landscape
const landscape = [16,9]
function setup() {
  // put setup code here
  multipier = 50
  createCanvas(landscape[0] * multipier, landscape[1]* multipier)
}

// head width 14mm height 18mm
// 1 head = 1/5 body. Stack heads

function head(scale, stacker, laDivide){
	// x positions are fixed
	const xCoo = (landscape[0] * multipier)/laDivide

	// y postions are stacked
	scale = scale/2.2
	var height = 18*scale  
	var width = 14*scale
	var stacker = stacker * height

	var half_of_it = height/2  
	
	var yCoo = (landscape[1]* multipier ) - half_of_it

	return ellipse(xCoo, yCoo - stacker, 14*scale, 18*scale)

}

function headStack(){
	var p1_position = 4.2
	var p2_position = 1.7
	this.head(3,0,p1_position)
	this.head(3,1,p1_position)
	this.head(3,2,p1_position)
	this.head(3,3,p1_position)
	this.head(3,4,p1_position)
	this.head(3,5,p1_position)
	this.head(3,6,p1_position)
	this.head(3,7,p1_position)
	
	this.head(3,0,p2_position)
	this.head(3,1,p2_position)
	this.head(3,2,p2_position)
	this.head(3,3,p2_position)
	this.head(3,4,p2_position)
	this.head(3,5,p2_position)

}

function draw() {
  // put drawing code here
  background(25);  
  ellipse(50, 50, 80, 80); 
  this.headStack()

}