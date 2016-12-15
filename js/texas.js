var player1Hand = [];
var computer = [];
class Card {
  constructor(value, suite) {
    this.value = value;
    this.suite = suite;
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");
  var deckStack = createDeckStack();
  readClickedValue();
});

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
  clearBoard();
  var numberOfDecks = 1; //define the number of 52 card decks in stack.
  var deckStack = [];
  var suitesOptions = ["heart", "spade", "club", "diamond"];
  for (var i = 0; i <= ((numberOfDecks*52) - 1); i++){
    var value = (i%13) +1;
    var suite = suitesOptions[i % 4];
    var card = new Card(value, suite);
    deckStack.push(card);
  }

  var m = deckStack.length, t, j;
  //Using fisher-Yates shuffle...
  while (m) {
    j = Math.floor(Math.random() * m--);
    t = deckStack[m];
    deckStack[m] = deckStack[j];
    deckStack[j] = t;
  }
  player1Hand = dealHand("#p1hand", deckStack);
  computer = dealHand("#p2hand", deckStack);
  return deckStack;
}

//create the ininitial hand:
function dealHand(playerId,deckStack)  {
  var hand = [];
  var cardsInInitialHand = 7;
  for (var i = 0; i < cardsInInitialHand; i++) {
    var dealtCard = deckStack.pop();
    hand.push(dealtCard);
    $(playerId).append("<div>"+dealtCard.value+"</div>");
  }
  // console.log("hand single card", hand[1].value);
  return hand;
}

function readClickedValue() {
  $("div").click(function(e){
    var value = $(e.target).text();
    value = parseInt(value, 10);
    checkComputerCards(value);
  })
}

// searches through a given hand and returns the
// first card with the given value.
function checkComputerCards(value) {
  for (var i = 0; i < computer.length; i++) {
    if (computer[i].value == value) {
      $("#p1hand").append("<div>"+computer[i].value+"</div>");
      $('#p2hand div:(i)').remove();

      var removed = computer.splice(i, 1);
      player1Hand.push = removed;
      console.log("match found", value);
      console.log("removed:", removed);
      console.log("new computer array:", computer);
      console.log("new player 1 hand:", player1Hand);

    } else {
      console.log("No match", value);
    }
  }
}
