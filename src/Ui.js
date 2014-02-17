function startNewGameWithNPlayers() {
  	var numberOfPlayers = document.getElementById('player_number_select').value;
	game = new OldMaid(numberOfPlayers);
	var cardTable = document.getElementById("card_table");
	cardTable.innerHTML = '';
	for (i=0;i<game.hands.length;i++) {
		if (i == 0) {
			var gamePlayer = document.createElement("div");
			gamePlayer.innerHTML = '<h2>Human Player</h2><ul id="player' + i + '_hand"></ul>'+	
			'<a href="#" onclick="everyoneDraws();">Draw from opponent</a></p>' +
			'<p><a href="#" onclick="discardPairs();">Discard pairs</a></p>' +
			'<p>Cheat: draw from computer player<select name="drawFromPlayer" id="player_draw_select"></select>' + 
			'<a href="#" onclick="drawFromOpponent();">Go</a></p>';
			cardTable.appendChild(gamePlayer);
		}
		else {
			var gamePlayer = document.createElement("div");
			gamePlayer.innerHTML = '<h2>Computer Player ' + i + '</h2><ul id="player' + i + '_hand"></ul>';
			cardTable.appendChild(gamePlayer);
		}
	};
	var drawSelecter = document.getElementById('player_draw_select');
	for (i=1;i<game.hands.length;i++) {
		var gamePlayerOption = document.createElement("option");
		gamePlayerOption.innerHTML = i
		drawSelecter.appendChild(gamePlayerOption);
	}
	console.log("Game started with " + numberOfPlayers + " players!");
	dealNewGame();
	return false;
};

function dealNewGame() {
	game.deal();
	updateHands();
	return false;
}

function discardPairs() {
	game.discardPairs();
	updateUi();
	game.checkForLoser();
	if (game.loser != null) {
		var cardTable = document.getElementById("card_table");
		cardTable.innerHTML = '<h2>Game Over</h2><h3>Player ' + game.loser + ' is forever alone.</h3>';
	}
	return false;
}

function drawFromOpponent() {
	selectedPlayer = document.getElementById('player_draw_select').value;
	game.drawFromOpponent(selectedPlayer);
	updateUi();
	return false;
}

function everyoneDraws() {
	game.everyoneDraws();
	updateUi();
	return false;
}

function updateUi() {
	updateHands();
}

function updateHands() {
	for (i=0;i<game.hands.length;i++) {
		var cardList = document.getElementById("player"+i+"_hand");
		cardList.innerHTML = ""
		if (i == 0) {
			for (j=0;j<game.hands[i].cards.length;j++) {
				var listItem = document.createElement("li");
				listItem.innerHTML = game.hands[i].cards[j].toString();
				cardList.appendChild(listItem);
			}
		}
		else {
			for (j=0;j<game.hands[i].cards.length;j++) {
				var listItem = document.createElement("li");
				listItem.innerHTML = "XXX";
				cardList.appendChild(listItem);
			}
		}

	};
};