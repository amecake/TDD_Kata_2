// Electrons.js
function Electrons() {}
Electrons.prototype.add = function(string_numbers) {

	// Even numbers are ignored 
	// add odd numbers -1 together

	let numbers = string_numbers.slice(2,(string_numbers.length -2));
	
	number_arr = numbers.split(', ');

	console.log(number_arr);

	let sum = 0;

	for (let i = 0; i < number_arr.length; i++) {
		if (number_arr[i] % 2 == 0) {
			continue;
		} else {
			let odd_num;
			odd_num = number_arr[i] -= 1;

			sum += odd_num;
		}
	}

	return sum;

};
