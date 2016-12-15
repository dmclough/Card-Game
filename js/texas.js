document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");
  var deckStack = createDeckStack();
});

class Card {
  constructor(value, suite) {
    this.value = value;
    this.suite = suite;
  }
}

//create a deck of cards
function createDeckStack() {
  var numberOfDecks = 1; //define the number of 52 card decks in stack.
  var deckStack = [];
  var suitesOptions = ["heart", "spade", "club", "diamond"];
  for (var i = 0; i <= ((numberOfDecks*52) - 1); i++){
    var value = (i%13) +1;
    var suite = suitesOptions[i % 4];
    var card = new Card(value, suite);
    deckStack.push(card);

  }
  console.log("preshuffled:", deckStack);

  // console.log(deckStack);
  var m = deckStack.length, t, j;
  //Using fisher-Yates shuffle...
  while (m) {
    //pick a remaining element...
    j = Math.floor(Math.random() * m--);
    //ad swap it with the current element.
    t = deckStack[m];
    deckStack[m] = deckStack[j];
    deckStack[j] = t;
  }
  console.log(deckStack.length);
  console.log("created deck stack:", deckStack);
  var player1Hand = dealHand("#p1card", deckStack);
  var player2Hand = dealHand("#p2card", deckStack);

  return deckStack;
}

//create the ininitial hand:
function dealHand(playerId,deckStack)  {
  var hand = [];
  var cardsInInitialHand = 8;
  for (var i = 0; i < cardsInInitialHand; i++) {
    var dealt1 = deckStack.pop();
    hand.push(dealt1);
    $(playerId + i).text(hand[i].value);
  }
  return hand;
}
