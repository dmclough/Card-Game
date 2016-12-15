document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");
  var deckStack = createDeckStack();
  readClickedValue();
});

class Card {
  constructor(value, suite) {
    this.value = value;
    this.suite = suite;
  }
}

function clearBoard() { //how can this be streamlined?
  while (p1hand.hasChildNodes()) {
    p1hand.removeChild(p1hand.lastChild);
  }
  while (p2hand.hasChildNodes()) {
    p2hand.removeChild(p2hand.lastChild);
  }
}

//create a deck of cards
function createDeckStack() {
  var numberOfDecks = 1; //define the number of 52 card decks in stack.
  var deckStack = [];
  clearBoard();
  var suitesOptions = ["heart", "spade", "club", "diamond"];
  for (var i = 0; i <= ((numberOfDecks*52) - 1); i++){
    var value = (i%13) +1;
    var suite = suitesOptions[i % 4];
    var card = new Card(value, suite);
    deckStack.push(card);
    console.log("pushed card");
  }

  var m = deckStack.length, t, j;
  //Using fisher-Yates shuffle...
  while (m) {
    j = Math.floor(Math.random() * m--);
    //ad swap it with the current element.
    t = deckStack[m];
    deckStack[m] = deckStack[j];
    deckStack[j] = t;
    console.log("shuffled deck");
  }
  var player1Hand = dealHand("#p1hand", deckStack);
  var player2Hand = dealHand("#p2hand", deckStack);
  return deckStack;
}

//create the ininitial hand:
function dealHand(playerId,deckStack)  {
  var hand = [];
  var cardsInInitialHand = 8;
  for (var i = 0; i < cardsInInitialHand; i++) {
    var dealt1 = deckStack.pop();
    hand.push(dealt1);
    $(playerId).append("<div>"+dealt1.value+"</div>");
  }

  console.log("hand", hand[1].value);
  console.log("hand", hand);
  console.log("new deck stack", deckStack);

  return hand;
}

function readClickedValue() {
  $("div").click(function(e){
    var value = $(e.target).text();
    console.log(value);
    checkClickedValue(value);
    return value; //is this needed?
  })
}

function checkClickedValue(value) {
  console.log("value2", value);
}
