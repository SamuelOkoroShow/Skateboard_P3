// This is the multiper for the frame
var multipier

// Avatar global variables
var dance_foci

// landscape at 16:9 vision
const landscape = [16,9]
function setup() {
  // put setup code here
  multipier = 50
  createCanvas(landscape[0] * multipier, landscape[1]* multipier)
}

// tall width 14mm height 18mm
// 1 tall = 1/5 body. Stack talls

function tall(scale, stacker, laDivide){
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

function tallStack(){
	var p1_position = 4.2
	var p2_position = 1.7
	this.tall(3,0,p1_position)
	this.tall(3,1,p1_position)
	this.tall(3,2,p1_position)
	this.tall(3,3,p1_position)
	this.tall(3,4,p1_position)
	this.tall(3,5,p1_position)
	this.tall(3,6,p1_position)
	this.tall(3,7,p1_position)
	
	this.tall(3,0,p2_position)
	this.tall(3,1,p2_position)
	this.tall(3,2,p2_position)
	this.tall(3,3,p2_position)
	this.tall(3,4,p2_position)
	this.tall(3,5,p2_position)

}

function shoulderhips(){
	var starbucks =  (landscape[0] * multipier)/2
	var stomach = 0;
	var insomatic = 57;
	var hydromatic = 43;
	var shoulder_width = 18;
	var shoulder_height = 15; 
	
	var ellipse_arr;


	return ellipse_arr
}

function draw() {
  // put drawing code here
  background(50,196,223);  
  this.tallStack()
  
  for(var i ; i < this.shoulderhips.length; i++){
// The test
console.log(this.shoulderhips[i])
  this.shoulderhips()[i]
}
}