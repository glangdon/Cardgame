function Deck() {
	this.cards = [];

	suits = ["S", "D", "H", "C"];
	ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

	//Create all the cards
	for(var s = 0; s < suits.length; s++){
		for(var r = 0; r < ranks.length; r++){
			this.cards.push(new Card(ranks[r], suits[s]));
		}
	}
	console.log("Deck built")
	//Add the joker
	this.cards.push(new Card("W", ""));
	console.log("Joker added")
};

Deck.prototype.toString = function(){
	var message = '';
	for(var c = 0; c < this.deck.length; c++){
		message += " " + c.toString();
	}
	return message;
}

Deck.prototype.shuffle = function(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    console.log("cards shuffled")
    return o;
};

Deck.prototype.draw = function(){
	card = this.cards.pop();
	return card;
}





