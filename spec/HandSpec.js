describe("Hand", function() {
	it("should have cards after deal", function() {
		var game = new OldMaid(2);
		game.deal();
		expect(game.hands[0].cards.length).toBeGreaterThan(0);
	});
	it("should be able to take card from opponent", function() {
		var game = new OldMaid(2);
		game.deal();
		var player1StartHand = game.hands[0].cards.length;
		var player2StartHand = game.hands[1].cards.length;
		game.drawFromOpponent(1);
		expect(player1StartHand).toBeLessThan(game.hands[0].cards.length);
		expect(player2StartHand).toBeGreaterThan(game.hands[1].cards.length);
	});
	it("should be able to discard pairs", function() {
		var game = new OldMaid(2);
		//Instead, create a simple hand with a pair and test it separate from game
		//Save discards to array and compare
		game.deal();
		var player1StartHand = game.hands[0].cards.length;
		game.hands[0].discardPairs();
		if(player1StartHand != game.hands[0].cards.length){
			expect(player1StartHand).toBeGreaterThan(game.hands[0].cards.length);
		};
	});
});