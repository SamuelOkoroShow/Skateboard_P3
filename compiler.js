//Kewy word while designing skateboards: Equidistant

var force_init = false;
var wheel1 = {
	type:'ellipse',
	x:30,
	y:250,
	width:24,
	height:24
}
var wheel2= {
	type:'ellipse',
	x:wheel1.x+80,
	y:250,
	width:24,
	height:24
}
var truck; 
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
var deck1 = {
	type:'rec',
	x:3,
	y:230,
	width:180,
	height:3

};
var deck2 = {
	type:'rec',
	x:3,
	y:233,
	width:210,
	height:3

};
var deck3 = {
	type:'rec',
	x:3,
	y:236,
	width:170,
	height:3

};

var skateboard = [wheel1,screw1, wheel2, screw2, deck1, deck3]
var force;
// I use force to pitch velocity
// Accelarate and decelerate using intergration
function setup(){
  createCanvas(480,270)
}

function coast50(){
	
}


function render(someArray){

	for(var i = 0; i<someArray.length; i++){	
		console.log(someArray[i]);
		if(someArray[i].type == 'ellipse'){
		ellipse(someArray[i].x, someArray[i].y, someArray[i].width, someArray[i].height)
			}
		if(someArray[i].type == 'rec'){
		rect(someArray[i].x, someArray[i].y, someArray[i].width, someArray[i].height)
		}
		}
}

function displacement(){

}

function force(pitch){
		// initialize()

	var rest;
	var lacement = pitch * tan(24.91)
	var max_velocity;
	var ratp = 12;
	var roll = ratp

	max_velocity = pitch * roll;
	var velocity = 0;
	//boolean v swtch
	var vSwitch = true // JANooR
	 
	if(pitch > 0 && oddometer){
		var motion = "accelerating";
		velocity = 0
	}
	if(velocity < max_velocity){
		velocity++;
		
	}else{
		oddometer = false;
		velocity--;
		if(!oddometer){
			motion = "decelerating"
		}
		}

		if(oddometer)
		console.log("max :" + max_velocity+ "Skate_Velocity = " + velocity + motion)
		else
		console.log("min :" + 0 + "Skate_Velocity = " + velocity + motion)
	// expected max : 40 velocity=0++ accelerating
	// epected min : 0 velocity 40-- decelerating
	// end displayment = distance + start displacement

		if(velocity = 0){
			force_init = false;
		}
	}

function draw() {
  // put drawing code here
  background(50,196,223);
  //how to calculate pitch. Pitch = force at lim x-> 0
  this.force(6)  
  //ellipse(160, 210, 20, 40)
  this.render(skateboard)
}