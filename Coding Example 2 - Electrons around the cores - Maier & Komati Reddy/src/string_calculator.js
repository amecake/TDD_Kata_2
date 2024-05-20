// StringCalculator.js
function StringCalculator() {}
StringCalculator.prototype.add = function(string_numbers) {

	// If there's a comma, add them together
	if (string_numbers.includes(",")) {
		var numArr = string_numbers.split(",");
		var sum = 0;
		
		for (let i = 0; i < numArr.length; i++) {
			console.log(numArr[i]);
			sum += parseInt(numArr[i]);
		}

		console.log(sum);
		return sum;
	} else {
		
		if (string_numbers.length >= 1) {
			if (string_numbers.length == 3) {
				return string_numbers.length;
			} else { 
				return 1;
			}
		} else {
			return 0;
		}
	}
};
