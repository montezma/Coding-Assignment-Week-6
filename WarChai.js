var expect = chai.expect;

describe('WAR', function() {
    describe('Split Deck', function() {
        describe('Checks to see if both players have a split even amount of cards', function() {
          it('Two decks of 26', function() {
            splitDeck.playerOne = []
            splitDeck.playerTwo = []
            expect(playerOne.length).to.equal(26);
            expect(playerTwo.length).to.equal(26);
          });
        });
    });
});
