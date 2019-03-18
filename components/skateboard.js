//Kewy word while designing skateboards: Equidistant

var velocity;
var kung_fu_init = false;

// init dv
var dSwitch =false;


var bono = 50
var tuskey = 0;
var truckReducers = 10;
var deckSlope = 230;
var deckRadian = 0;

var deckSet = 25
var radians;
var angle;
var radians =  3.141592653589793 * angle/180

//init truttle
var vSwitch = true;
var wheel_start_y = 250;
var wheel1_x = 20;
var wheel2_x;
var average = 56;
var wheel_y = wheel_start_y

function skateboard(){ 
wheel2_x = (2*average) + wheel1_x

var wheel1 = {
	id: 0,
	type:'ellipse',
	x:wheel1_x,
	y:wheel_y,
	width:24,
	height:24
}
var wheel2= {
	id: 1,
	type:'ellipse',
	x:wheel2_x,
	y:wheel_start_y,
	width:24,
	height:24
}
var truck1={
	id: 2,
	type: 'triangle',
	x1:wheel1.x,
	y1:wheel1.y,
	x2:wheel2.x,
	y2:wheel2.y,
	x3:(wheel1.x+wheel2.x)/2,
	y3:(wheel1.y+wheel1.height)/4

}; 
var screw2 = {
	id: 3,
	type:'ellipse',
	x: wheel2.x,
	y: wheel2.y,
	width: 10,
	height:10
};
var screw1 = {
	id: 4,
	type:'ellipse',
	x: wheel1.x,
	y: wheel1.y,
	width: 10,
	height:10
};

var deck1 = {
	id: 5,
	type:'rec',
	x:wheel1.x-deckSet,
	y:230,
	width:180,
	height:3

};
var deck2 = {
	id: 6,
	type:'rec',
	x:wheel1.x - deckSet,
	y:233,
	width:210,
	height:3

};


var deck3 = {
	id: 7,
	type:'rec',
	x:wheel1.x + deckSet,
	y:deckSlope,
	width:170,
	height:3

};

var skateboard = [wheel1,screw1, wheel2, screw2]
return skateboard
}
var kung_fu;
var slope = 1/4;
angle = -0
var folcrum;



// max slope is determined by folcrum. Should be a range
var elevator = 8 ;
function coast50(){
	
}

var pluggered = false;
// Only the deck rotates

// current floor belongs to global state
var current_floor = 0

function lazer(floor){
	console.log(current_floor)
	if(floor > current_floor){
		this.popup(floor)
	}else{
		this.popdown(floor)
	}
}

function popdown(floor){
// use this to anchor slope kung_fu
	elevator = 8 * floor
//console.log(elevator)

	//console.log(3.141592653589793 * angle/180)

	//maxSlope = Math.random(9) * 10
	var fSwitch= false;

	if(wheel_y < wheel_start_y - elevator){
		// Wheel_start_y is ground
		fSwitch = true
		
		
	}
	if(wheel_y == wheel_start_y - elevator){
		// Wheel_start_y is ground
		//console.log('you have arived at your destination')
		pluggered = true
		//console.log("Disgusting Sushi")
		current_floor = floor

	}		

	//console.log(fSwitch)
	if(fSwitch == true){
		
		//console.log(angle)
		wheel_y++;
		wheel1_x-=slope;

		angle -= slope * 1.98;

		// This is pump  
		if(wheel_y > wheel_start_y == elevator){
			
		}
	}

	//return console.log(slope) slope
}


function popup(floor){
	// use this to anchor slope kung_fu
	elevator = 8 * floor

	//console.log(3.141592653589793 * angle/180)

	//maxSlope = Math.random(9) * 10
	var fSwitch= false;

	if(wheel_y > wheel_start_y - elevator){
		// Wheel_start_y is ground
		fSwitch = true
		console.log(elevator)
		
	}
	if(wheel_y == wheel_start_y - elevator){
		// Wheel_start_y is ground
		console.log('you have arived at your destination')
		pluggered = true
		current_floor = floor
		console.log("Disgusting Sushi")

	}		

	//console.log(fSwitch)
	if(fSwitch == true){
		
		console.log(current_floor)
		wheel_y--;
		wheel1_x+=slope;

		angle += slope * 1.98;

		// This is pump  
		if(wheel_y > wheel_start_y == elevator){
			
		}
	}
	


	
	//return console.log(slope) slope
}



function render(someArray){

	
	for(var i = 0; i<someArray.length; i++){	
		//console.log(someArray[i]);

		
		if(someArray[i].type == 'ellipse'){
		ellipse(someArray[i].x, someArray[i].y, someArray[i].width, someArray[i].height)
			}
		if(someArray[i].type == 'rec'){
			rotate(3.141592653589793 * angle/180);
		rect(someArray[i].x, someArray[i].y, someArray[i].width, someArray[i].height)
		}
		}
}

function displacement(pressure, mass){
	// init state on particle displacment


	// switch dv
	dSwitch = true
	//fast
	var speed = 1.

	//Ask Valerie for Work



	// lets try adding kung_fu
	wheel1_x = (wheel1_x + this.kung_fu(pressure,mass)) * speed
	//wheel2_x = (2*average) + wheel1_x
	//console.log(this.kung_fu(pressure,mass))
	//this.kung_fu(pressure,mass) * 3

	//should not reverse
}

function kung_fu(pitch, mass){
		// initialize()

	var rest;
	var lacement = pitch * tan(24.91);
	var invertIntergral_velocity;

	// ex invertIntergral velocity is 72 at 
	var ratp = 12;
	var roll = ratp;
	var motion;

	invertIntergral_velocity = pitch * roll;

	if(velocity == null){
		velocity = 0;
	}
	//boolean v swtch

	if(vSwitch){

		motion = "accelerating";
		tuskey++;
		velocity = tuskey/10
		if (velocity == 5){
			tuskey = invertIntergral_velocity
		}
		}

	if (tuskey == invertIntergral_velocity){
		//console.log("max speed")
		vSwitch = false;
		tuskey--;

	}
	if(!vSwitch){
		
		motion = "decelerating"
		tuskey--;
		velocity = tuskey/5

	}

	if (velocity < 0){
			velocity = 0
		}

		//if(vSwitch)
		//console.log("invertIntergral :" + invertIntergral_velocity+ "Skate_Velocity = " + velocity + motion)
		//else
		 //console.log("min :" + 0 + "In Motion Skate_Velocity = " + velocity + motion)
		

	// end displayment = distance + start displacement
	return velocity 
		}



function setup(){
  createCanvas(780,270)
}


function render(someArray){
		
	strokeWeight(1);
	for(var i = 0; i<someArray.length; i++){	
		//console.log(someArray[i]);
		if(someArray[i].type == 'ellipse'){
			
		ellipse(someArray[i].x, someArray[i].y, someArray[i].width, someArray[i].height)
			}
		if(someArray[i].type == 'rec'){
		rect(someArray[i].x, someArray[i].y, someArray[i].width, someArray[i].height)
		}
		}

}


var music = 3;
    this.setTimeout(() => {
  	music = 1;

  }, 1000)
          this.setTimeout(() => {
  	music = 4;

  }, 2000)
     this.setTimeout(() => {
  	music = 5;

  }, 3000)
          this.setTimeout(() => {
  	music = 2;

  }, 4000)
             this.setTimeout(() => {
  	music = 0;

  }, 4000)


function draw() {
  // put drawing code here
  background(50,196,223);
  //how to calculate pitch. Pitch = kung_fu at lim x-> 0
  this.displacement(3,7)





pluggered = false

  pluggered = false


  this.lazer(music)

  //rotate(3.141592653589793 * angle/180);
  //console.log(this.skateboard()[0].x)
  this.render(this.skateboard())
  //ellipse(160, 210, 20, 40)
  translate(this.skateboard()[0].x ,
	this.skateboard()[0].y)
  rotate(3.141592653589793 * angle/180);
  rect(-15,
	-15,
	170,
	3)
}