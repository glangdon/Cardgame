function startNewGame() {
	game.deal();
	updateP1Hand();
	updateP2Hand();
	updateDeck();
	return false;
}

function discardPairs() {
	game.hands[0].discardPairs();
	game.hands[1].discardPairs();
	return false;
}

function drawFromOpponent() {
	game.drawFromOpponent;
	return false;
}

function updateUi() {
	updateDeck();
	updateP1Hand();
	updateP2Hand();
}

function updateDeck() {
	var cardList = document.getElementById("starting_deck");
	cardList.innerHTML = ""
	for (i=0;i<game.deck.cards.length;i++) {
		var listItem = document.createElement("li");
		listItem.innerHTML = game.deck.cards[i].toString();
		cardList.appendChild(listItem);
	};
}

function updateP1Hand() {
	var cardList = document.getElementById("player1_hand");
	cardList.innerHTML = ""
	for (i=0;i<game.hands[0].cards.length;i++) {
		var listItem = document.createElement("li");
		listItem.innerHTML = game.hands[0].cards[i].toString();
		cardList.appendChild(listItem);
	};
}

function updateP2Hand() {
	var cardList = document.getElementById("player2_hand");
	cardList.innerHTML = ""
	for (i=0;i<game.hands[1].cards.length;i++) {
		var listItem = document.createElement("li");
		listItem.innerHTML = "XXX";
		cardList.appendChild(listItem);
	};
}