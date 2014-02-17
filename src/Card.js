function Card(rank, suit) {

  this.rank = rank;
  this.suit = suit;

}

Card.prototype.toString = function(){

  var ranks = {
    A:"Ace",2:"Two",3:"Three",4:"Four",5:"Five",6:"Six",7:"Seven",8:"Eight",9:"Nine",10:"Ten",J:"Jack",Q:"Queen",K:"King"
  }
  var suits = {
    S:"Spades",H:"Hearts",C:"Clubs",D:"Diamonds"
  }

  if (this.rank == "W")
    return "Joker";
  
  return ranks[this.rank] + " of " + suits[this.suit];
}