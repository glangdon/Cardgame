function Hand() {
	this.cards = [];
	this.pairs = [];
};

Hand.prototype.takeCard = function(card) {
	this.cards.push(card);
};

Hand.prototype.toString = function(){
	var message = '';
	for(var c = 0; c < this.cards.length; c++){
		message += " " + this.cards[c].toString();
	}
	return message;
};

Hand.prototype.draw = function(){
	card = this.cards.pop();
	return card;
}

Hand.prototype.drawRandom = function(){
	var randomCard = Math.floor(Math.random() * this.cards.length);
	card = this.cards.splice(randomCard, 1);
	return card;
}

Hand.prototype.discardPairsNew = function(){
	for(var i = 0; i < this.cards.length; i++) {
	    var pair = false;
	    for(var j = 0; j < cleanedHand.length; j++) {
	        if(cleanedHand[j].rank == this.cards[i].rank) {
	            pair = true;
	        }
	    }

	    if(pair) {
	        this.cards.splice(i--, 1);
	        this.pairs.splice(j--, 1);
	        console.log("pair of " + this.cards[i].rank + "s discarded")
	    } else {
	        cleanedHand.push(this.cards[i]);
	    }
	}
	console.log('discards done')
}

Hand.prototype.discardPairs = function(){
	var cleanedHand = [];

	for(var i = 0; i < this.cards.length; i++) {
	    var pair = false;

	    for(var j = 0; j < cleanedHand.length; j++) {
	        if(cleanedHand[j].rank == this.cards[i].rank) {
	            pair = true;
	        }
	    }

	    if(pair) {
	        this.cards.splice(i--, 1);
	        cleanedHand.splice(j--, 1);
	        console.log("pair of " + this.cards[i].rank + "s discarded")
	    } else {
	        cleanedHand.push(this.cards[i]);
	    }
	}
	console.log('discards done')
}