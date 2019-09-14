
var cards = ["Queen", "Queen", "King", "King"]


var cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	console.log("You found a match!");
	} else { 
	console.log("Sorry, Try again!");
	}
}
	
	function flipCard(cardID) {
		console.log("User flipped " + cards[cardID]);
		cardsInPlay.push(cards[cardID]);

		if (cards.length === 2) {
		checkForMatch();
		}
	}

flipCard(0);
flipCard(2);

checkForMatch();