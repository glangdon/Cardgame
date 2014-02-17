function OldMaid(numberOfHands) {

	console.log("Old Maid Started")

	this.deck = new Deck();
	this.deck.shuffle(this.deck.cards);
	this.hands = [];
	for(var i=0; i < numberOfHands; i++) {
		this.hands.push(new Hand());
	}
};

OldMaid.prototype.deal = function() {
	var next = 0;
	while (this.deck.cards.length > 0) {
		card = this.deck.draw();
		this.hands[next].takeCard(card);
		next = (next + 1) % this.hands.length;
	};
};

OldMaid.prototype.drawFromOpponent = function(selectedPlayer) { 
	card = this.hands[selectedPlayer].draw();
	this.hands[0].takeCard(card);
};

OldMaid.prototype.everyoneDraws = function() { 
	for (i=0;i<this.hands.length;i++) {
		if (i == 0) {
			card = this.hands[this.hands.length-1].drawRandom();
			this.hands[0].takeCard(card);
		}
		else {
			card = this.hands[i-1].drawRandom();
			this.hands[i].takeCard(card);
		}
	}
	console.log("All players have drawn")
};

OldMaid.prototype.discardPairs = function() {
	for (i=0;i<this.hands.length;i++) {
		this.hands[i].discardPairs();
	}
};

OldMaid.prototype.checkForLoser = function() {
	this.loser = null
	for (i=0;i<this.hands.length;i++) {
		if (this.hands[i].cards.length == 1) {
			this.loser = i;
		}
	}
};