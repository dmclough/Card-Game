document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");

    //create a deck of cards
    class Card {
      constructor(value, suite) {
        this.value = value;
        this.suite = suite;
      }
    }

    var deck = [];
    var suits = ["heart", "spade", "club", "diampond"];
    for (var i = 0; i <= 52; i++){
      var value = (i%13) + 1;
      var suite = suite[i % 4];
      var card = new Card(value, suite);
      deck.push(card);
    }

    console.log(deck);

    // var deck = [];
    // var suits = ["hearts", "diamonds", "clubs", "spades"];
    // for (var i = 0; i<=52; i++) {
    //   var value = (i % 13) + 1;
    //   var suit = suits[i % 4];
    //   var card = new Card(value, suite);
    //   deck.push(card);
    // }

    // var firstCard = new Card(10, "d", "k");
    // console.log(firstCard);



//DOM bracket start
});
//DOM bracket end
