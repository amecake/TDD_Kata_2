// Electrons.js
function Electrons() {}
Electrons.prototype.add = function(string_numbers) {

	// Takes the last one and adds 1

	let numbers = string_numbers.slice(2,(string_numbers.length -2));
	
	number_arr = numbers.split(', ');

	return parseInt(number_arr[(number_arr.length - 1)]) + 1;

	// ToDo 2 works the same

};
