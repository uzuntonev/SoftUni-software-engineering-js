function solve(a, b) {
    class Deck {
        _cardsFaces = [ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A' ];
        _cardsSuits = {
            S: '\u2660',
            H: '\u2665',
            D: '\u2666',
            C: '\u2663',
        }

        constructor(face, suit) {
            this.face = face;
            this.suit = suit;
        }

        get face() {
            return this._face;
        }

        set face(value) {
            if (!this._cardsFaces.includes(value)) {
                throw new Error();
            }
            this._face = value;
        }

        get suit() {
            return this._suit;
        }

        set suit(value) {
            if (!this._cardsSuits[value]) {
                throw new Error();
            }
            this._suit = this._cardsSuits[value];
        }

        toString() {
            return `${this._face}${this._suit}`;
        }
    }
    return new Deck(a, b);
}

module.exports = { createCard: solve };
