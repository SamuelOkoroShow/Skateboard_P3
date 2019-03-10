// We might need to consider gravitational pull and 名前 - な߹え  

function head(scale, laDivide){
	// x positions are fixed
	const xCoo = (landscape[0] * multipier)/laDivide

	// y postions are stacked
	scale = scale/2.2
	var height = 18*scale  
	var width = 14*scale

	var half_of_it = height/2  
	
	var yCoo = (landscape[1]* multipier ) - half_of_it

	return console.log(xCoo, yCoo, 14*scale, 18*scale)

}

class humanoid {
	constructor(){

		// This contains state. 
		// We'll also need to define strain on our shonen jump characters
		// CHatacters are into Posing and dynamic posing
	}
	hair(){

	}
	head(){

	}
	hand(){
		// Hands need to be really detailed

	}
	shoulders(){
		// dancing shoulders
		
	}
	stomach(){
		// 3 - 3.5 heads and the focai
	}
	boobies(){

	}
	foot(){
		// Should these be wheels?
	}
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

export default humanoid;
