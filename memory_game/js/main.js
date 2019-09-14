
const cards = ["Queen", "Queen", "King", "King"]

var cardOne = cards[0];
var cardTwo = cards[2];

const cardsInPlay = [];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);


console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);


if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
}	else { 
	alert("Sorry, Try again!");
}
}