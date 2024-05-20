describe('Electrons', function() {
	beforeEach(function() {
		calculator = new Electrons();
	});

	it('should return 6 for string "[ 1, 2, 3, 4, 5 ]"', function() {
		expect(calculator.add('[ 1, 2, 3, 4, 5 ]')).toEqual(6);
	});
	
	it('should return 4 for string "[ 2, 2, 3, 3 ]"', function() {
		expect(calculator.add('[ 2, 2, 3, 3 ]')).toEqual(4);
	});
	
});
