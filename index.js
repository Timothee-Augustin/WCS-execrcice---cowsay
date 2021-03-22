const myInfos = require('./information.js');

console.log(myInfos())

const cowsay = require("cowsay");

console.log(cowsay.say({
    text : myInfos(),
	e : "oO",
 	T : "U "
}));