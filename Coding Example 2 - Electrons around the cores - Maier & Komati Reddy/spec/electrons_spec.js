describe('Electrons', function() {
	beforeEach(function() {
		calculator = new Electrons();
	});

	it('should return 6 for string "[ 1, 2, 3, 4, 5 ]"', function() {
		expect(calculator.add('[ 1, 2, 3, 4, 5 ]')).toEqual(6);
	});
});
