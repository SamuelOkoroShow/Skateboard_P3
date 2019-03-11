// This is the multiper for the frame
var multipier

// Avatar global variables
var dance_foci
var stomach = 0;
var head,shoulder53, shoulder47, handTH, handP3, stomach.module1;

//Animatable Variables why dont we ancore the rest of the boy and animate to jump
var xCoo;
var yCoo;
var state;

// landscape at 16:9 vision
const landscape = [16,9]
function setup() {
  // put setup code here
  frameRate(30)
  multipier = 50
  createCanvas(landscape[0] * multipier, landscape[1]* multipier)
}

// This is the formular for our Canvas gruond
	var ground = (landscape[1]* multipier )

// tall width 14mm height 18mm
// 1 tall = 1/5 body. Stack talls

function tall(scale, stacker, laDivide){
	// x positions are fixed
	xCoo = (landscape[0] * multipier)/laDivide

	// y postions are stacked
	scale = scale/2.2
	var height = 18*scale  
	var width = 14*scale
	var stacker = stacker * height

	var half_of_it = height/2  
	yCoo = (landscape[1]* multipier ) - half_of_it

	return ellipse(xCoo, yCoo - stacker, 14*scale, 18*scale)

}



function display(someArray){
	for(var i = 0; i<someArray; i++){	
		ellipse(someArray.x, someArray.y, someArray.width, someArray.height)
	}
}



function shoulderhips(){
	var starbucks =  {x:(landscape[0] * multipier)/2}
	var insomatic = 57;
	var hydromatic = 43;
	var shoulder_width = 18;
	var shoulder_height = 15; 

	//tall props
	var scale = 4;
	var stacker = 3.5;

	var shambala_wind =  {x:"ham",y:"ham",z:"tuna"} 
	var neck = {x:10,y:4}
	
	// we need these elipses to move as a unit
	var elli_arr = [];
	var gavity = 9.8
	var ani_speed = 0.5

	//by default we're all falling down 

	// x positions are fixed
	const xCoo = (landscape[0] * multipier)/2.9

	// y postions are stacked
	scale = scale/2.2
	var height = 18*scale  
	var width = 14*scale
	var stacker = stacker * height

	var half_of_it = height/2  
	
	var yCoo = (landscape[1]* multipier ) - half_of_it
	yCoo = yCoo - stacker + 35;

if(!yCoo == ground){
	yCoo += ani_speed
}
	


	var stomach = {
		focus1: {x: xCoo, y:yCoo+3},
		focus2: {x: xCoo, y:yCoo-3},
		rightOrigin:{x: xCoo - 15, y: yCoo + 0, width: height-20, height: height-10},
		module2: ellipse(xCoo, yCoo, height-10, height-10},
		leftOrigin: {x: xCoo + 15, y:yCoo + 3,width : height-20, height: height-10}
		
	};



	var head = {x:stomach.focus2.x, y:stomach.focus2.y - 70, width:width, height:height};
	var ball = {x:xCoo, y:yCoo - 30, width:height, height:height};
	var shoulder53 =  {x: xCoo - 35, y: yCoo - 35, width: height-20, height:height-20};
	var shoulder47 = {x: xCoo + 35, y: yCoo - 35, width: height-20, height: height-20};
	var handTH = {x:xCoo, y:yCoo - 35 , width:height-10, height: height-20};
	var handP3 = {x:xCoo+40, y:yCoo - 14 , width:height-12, height:height-20};
	// All energy comes from the stomach
	// LEFT knee
	var knee1 = ellipse(stomach.focus1.x-16, stomach.focus2.y + 32, height-20, height-20);
	//RIGHT knee
	var knee2 = ellipse(stomach.focus1.x+18, stomach.focus2.y + 40, height-20, height-20);
	//left foot
	var foot1 = ellipse(stomach.focus2.x-22, landscape[1]* multipier , height-14, height-24);
	//right foot
	var foot2 = ellipse(stomach.focus2.x+36, landscape[1]* multipier , height-14, height-24);

	//return [head,shoulder53, shoulder47, handTH, handP3, stomach.module1]
	// var elli_arr.add(eclipse())

	this.display(head)

	//return elli_arr

}

function force_fomular(){

}

function dance(){

}

function slide_slide_duck(){
	// This uses the core and ankle to bow the knee

}



function spider_axel(){
	// This gives our character a cool dancer feel
	//	setTimeout() new route = old route - time
}
function setState(state){
	this.state = state;

	function animate(){

	}
}

function draw() {
  // put drawing code here
  background(50,196,223);  
  //this.tallStack()
  
  //setTimeout(() => this.setState({}),2000)

  this.shoulderhips();

}