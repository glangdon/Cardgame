describe("Game", function() {
	it("should be able to deal to as few as 2 players", function() {
		var game = new OldMaid(2);
		game.deal();
		expect(game.hands[0].cards.length).toBeGreaterThan(25);
		expect(game.hands[1].cards.length).toBeGreaterThan(25);
	});
	it("should be able to deal to as many as 8 players", function() {
		var game = new OldMaid(8);
		game.deal();
		expect(game.hands[0].cards.length).toBeGreaterThan(5);
		expect(game.hands[2].cards.length).toBeGreaterThan(5);
		expect(game.hands[3].cards.length).toBeGreaterThan(5);
		expect(game.hands[2].cards.length).toBeGreaterThan(5);
		expect(game.hands[3].cards.length).toBeGreaterThan(5);
		expect(game.hands[4].cards.length).toBeGreaterThan(5);
		expect(game.hands[5].cards.length).toBeGreaterThan(5);
		expect(game.hands[6].cards.length).toBeGreaterThan(5);
		expect(game.hands[7].cards.length).toBeGreaterThan(5);
	});
	it("can pass one random card from each player to the next", function() {
		var game = new OldMaid(2);
		game.deal();
		var player1StartHand = game.hands[0].cards.length;
		var player2StartHand = game.hands[1].cards.length;
		game.everyoneDraws();
		expect(player1StartHand).toBe(game.hands[0].cards.length);
		expect(player2StartHand).toBe(game.hands[1].cards.length);
	});
	it("declares the loser when a hand is left holding the Old Maid", function() {
		var game = new OldMaid(4);
		game.deal();
		game.hands[0].cards.splice(1, 99);
		game.discardPairs();
		game.checkForLoser();
		expect(game.loser).toBe(0);
	});
});