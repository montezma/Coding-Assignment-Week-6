/*For the final project you will be creating an automated version of the classic card game WAR. You do not need to accept any user input, when you run your code, the entire game should play out instantly without any user input. 
There are many versions of the game WAR, but in this version there are only 2 players and you don’t need to do anything special when there is a tie on a round. 
Think about how you would build this project and write your plan down. Consider classes such as Card, Deck, and Player and what fields and methods they might each have. You can implement the game however you’d like (i.e. printing to the console, using alert, or some other way). The completed project should, when run, do the following:
-	Deal 26 Cards to two Players from a Deck. 
-	Iterate through the turns where each Player plays a Card
-	The Player who played the higher card is awarded a point
o	Ties result in zero points for both Players
-	After all cards have been played, display the score and declare the winner.
Write a Unit Test using Mocha and Chai for at least one of the functions you write.
*/



//4 suits x 13 ranks
//52 cards
//numbered 0-51

//single quotes so jS treats them as text based strings 
playerOne = []
playerTwo = []

function createDeck() {
    var suits = ['Heart','Club','Diamond','Spade'];
    var ranks = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
    var deck = [];
    //instead of ++ you can also use += 1
    //This constructs a deck using the variables above consisting of 52 cards
    for( var suitCounter = 0; suitCounter < 4; suitCounter+=1 ) {
        for( var rankCounter = 0; rankCounter < 13; rankCounter+=1 ) {
            deck.push({ranks:ranks[rankCounter], suits:suits[suitCounter], value:rankCounter});
        }
    }
    return deck;
}

//shuffling the cards or randomizing
function shuffleDeck(deck){
    for( var i = 0; i < 52; i++) {
    //this handles random position
        var tempCard = deck[i]; 
        var randomIndex = Math.floor(Math.random() * 52)
        deck[i] = deck[randomIndex];
        deck[randomIndex] = tempCard;
    }
}


//shuffled is set as a new deck
var shuffled = createDeck()
//this then applies the "shuffleDeck" function to "shuffled" fresh deck
shuffleDeck(shuffled)
//console.log(shuffled)
//splits deck in half and sends other half to player two
function splitDeck(deck) {
    playerOne = deck.splice(0, 26)
    playerTwo = deck
}
splitDeck(shuffled)
console.log(playerOne)
console.log(playerTwo)
   
//this checks the players hand value and compares to declare a winner.
var playerOnePoints = 0
var playerTwoPoints = 0
for (let i = 0; i < 26 ; i++) {
    if (playerOne[i].value < playerTwo[i].value){
        playerTwoPoints += 1
    } else if (playerOne[i].value > playerTwo[i].value){playerOnePoints += 1}
    //This announces a tie since neither the "if" or "else if" could be applied. The number of ties will stack, subtracting from the overall total. Amount of repeats = ties
    else {
        console.log('This is a tie, no points!')
    }

}
console.log(playerOnePoints + ', ' + playerTwoPoints)

//Announces a winner
if (playerOnePoints > playerTwoPoints) {
    console.log('Player one wins! ')
} else {
    console.log('Player two wins!')
}   
                        