const myInfos = require('./information.js');



const cowsay = require("cowsay");

console.log(cowsay.say({
    text : myInfos(),
	e : "oO",
 	T : "U "
}));