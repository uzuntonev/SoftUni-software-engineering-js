function solve() {
    class Balloon {
        color;
        gasWeight;
        constructor(c, g) {
            this.color = c;
            this.gasWeight = g;
        }
    }

    class PartyBalloon extends Balloon {
        ribbonColor;
        ribbonLength;
        constructor(c, g, rc, rl) {
            super(c, g);
            this.ribbonColor = rc;
            this.ribbonLength = rl;
        }

        get ribbon() {
            return {
                color: this.ribbonColor,
                length: this.ribbonLength,
            };
        }
    }

    class BirthdayBalloon extends PartyBalloon {
        constructor(c, g, rc, rl, t) {
            super(c, g, rc, rl);
            this._text = t;
        }

        get text() {
            return this._text;
        }
    }

    return {
        Balloon,
        PartyBalloon,
        BirthdayBalloon,
    };
}
