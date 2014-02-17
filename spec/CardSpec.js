describe("Card", function() {
	var card;

	beforeEach(function(){
		card = new Card("A","S");
	})

	it("should have rank and suit", function() {
		expect(card.rank).toBe("A");
		expect(card.suit).toBe("S");
	});
	
	it("should have human readable rank and suit", function(){
		expect(card.toString()).toBe("Ace of Spades");
	});
});
