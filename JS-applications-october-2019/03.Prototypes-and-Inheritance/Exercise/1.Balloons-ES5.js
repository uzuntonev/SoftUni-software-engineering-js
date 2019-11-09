// function solve() {
function Balloon(color, gasWeight) {
    this.color = color;
    this.gasWeight = gasWeight;
}

function PartyBalloon(color, gasWeight, ribbonColor, ribbonLength) {
    Balloon.call(this, color, gasWeight);
    this.ribbonColor = ribbonColor;
    this.ribbonLength = ribbonLength;
    Object.defineProperty(this, 'ribbon', {
        get: function () {
            return {
                color: this.ribbonColor,
                length: this.ribbonLength,
            };
        },
    });
}
Object.setPrototypeOf(PartyBalloon, Balloon);
Object.assign(Balloon.prototype, PartyBalloon.prototype);


function BirthdayBalloon(color, gasWeight, ribbonColor, ribbonLength, text) {
    PartyBalloon.call(this, color, gasWeight, ribbonColor, ribbonLength);

    this._text = text;
    Object.defineProperty(this, 'text', {
        get: function () {
            return this._text;
        },
    });
}
Object.setPrototypeOf(BirthdayBalloon, PartyBalloon);
Object.assign(PartyBalloon.prototype, BirthdayBalloon.prototype);

//     return {
//         Balloon,
//         PartyBalloon,
//         BirthdayBalloon,
//     };
// }

const balloon = new Balloon('blue', 33);
const test = new PartyBalloon('black', 25, 'blue', 15);
const test2 = new BirthdayBalloon('black', 25, 'red', 150, 'Hello World');
const a = Object.getPrototypeOf(balloon);

