//For hand
var palm = {
	type:'ellipse',
	x:100,
	y:100,
	width:8*15,
	height:6*15
}
var mouth = {
	type:'ellipse',
	x:palm.x,
	y:palm.y+(palm.height/2) - 5,
	width:50,
	height:30
}

var indexPositi = 1;
var middlePositi = 1.1;
var ringPositi = 1.08;
var pinkie = .55;
var size = 25;

var finger = {
	
	thumb: {

		knuckle: {
			// xy cordinates
			type:'ellipse',
			x:mouth.x + 50,
			y:mouth.y - 15,
			width: size * indexPositi + 10,
			height: size * indexPositi

		}
	},
	trigger: {
		knuckle: {
			// xy cordinates
			type:'ellipse',
			x: mouth.x + 50,
			y:mouth.x -20,
			width: size * indexPositi,
			height: size * indexPositi
		}
	},
	middle: {},
	ring:{},
	pinkie:{
		knuckle: {
			// xy cordinates
			type:'ellipse',
			x: mouth.x - 50,
			y:mouth.x - 25,
			width: size * pinkie,
			height: size * pinkie
		},
		wonka: {
			// xy cordinates
			// probably angles are important as well
			type:'ellipse',
			rotate: 46,
			x: mouth.x - 50,
			y:mouth.x - 45,
			width: size * pinkie,
			height: (size * pinkie * 3)
		}
	},
	
}

var hand = [palm,mouth, finger.trigger.knuckle, finger.pinkie.knuckle, finger.pinkie.wonka, finger.thumb.knuckle]

function setup(){
  createCanvas(780,270)
}

function render(someArray){
		
	strokeWeight(3);
	for(var i = 0; i<someArray.length; i++){	
		//console.log(someArray[i]);
		if(someArray[i].type == 'ellipse'){
			
			if(someArray[i].rotate){
				translate(finger.pinkie.knuckle.x, finger.pinkie.knuckle.y)
				rotate( -someArray[i].rotate/ 360.0);
						}
		ellipse(someArray[i].x, someArray[i].y, someArray[i].width, someArray[i].height)
			}
		if(someArray[i].type == 'rec'){
		rect(someArray[i].x, someArray[i].y, someArray[i].width, someArray[i].height)
		}
		}

}

function draw() {
  // put drawing code here
  background(50,196,223);
  //how to calculate pitch. Pitch = force at lim x-> 0
  //this.displacement(6,7)  
  //ellipse(160, 210, 20, 40)
  this.render(this.hand)
}