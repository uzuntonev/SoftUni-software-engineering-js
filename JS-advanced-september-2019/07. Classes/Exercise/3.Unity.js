class Rat {
    name;
    _unitedRats = [];
    constructor(name) {
        this.name = name;
    }

    unite(rat) {
        if (rat instanceof Rat) {
            this._unitedRats.push(rat);
        }
    }

    getRats() {
        return this._unitedRats;
    }

    toString() {
        return `${this.name}\n${this._unitedRats.map(e => `##${e}`).join('')}`;
    }
}


const firstRat = new Rat('Peter');
console.log(firstRat.toString()); // Peter

console.log(firstRat.getRats()); // []

firstRat.unite(new Rat('George'));
firstRat.unite(new Rat('Alex'));
console.log(firstRat.getRats());
// [ Rat { name: 'George', unitedRats: [] },
//  Rat { name: 'Alex', unitedRats: [] } ]

// console.log(test.toString());
// Peter
// ##George
// ##Alex

console.log(firstRat.toString()); // Peter


