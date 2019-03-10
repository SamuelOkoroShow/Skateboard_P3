// Character Selection
// Character Balance
// Character.moves as a data structure problem
// create a new jutsu, add jutsu to character, test jutsu for balance, test jutsu for character selection
const balace = {};
var character;

import jutsu_types from "./jutsu.js"
import body from "./components/humanoid.js"
import compiler from './compiler.js'





var chakra;
var seal;
var type;
var name;
class jutsu {
	// required properties

 	constructor(name, type, chakra, seal){
 		this.name = name;
 		this.type = type;
 		this.chakra = chakra;
 		this.seal = seal;
 		
 	}

 	turns_left(){
 	var duration = (this.chakra - this.seal)/2
 		return duration
 	}

 	appearance(){
 		return ""
 	}

 	cancel(turns_left){
 		this.chakra = 0;

 		var new_chakra = turns_left
 		return new_chakra + " frfrChakra recovered"
 	}

}

// tests declare a js class. send states between files
var clone = new jutsu("Shadow Clone", "enhancement", 8, 2)
