describe("Deck", function() {
	var game;

	beforeEach(function(){
		game = new OldMaid(2);
	})

	it("should start out with 53 cards", function() {
		expect(game.deck.cards.length).toBe(53);
	});

	it("should get shuffled", function() {
		
	});

	it("should be empty after deal", function() {
		game.deal();
		expect(game.deck.cards.length).toBe(0);
	});
});