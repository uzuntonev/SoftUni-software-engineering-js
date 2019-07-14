function solve(input) {
    let list = {};
    let powerCards = {
        J: 11,
        Q: 12,
        K: 13,
        A: 14
    };
    let typeCards = {
        C: 1,
        D: 2,
        H: 3,
        S: 4
    };
    for (const line of input) {
        let [name, cards] = line.split(': ');
        if (!(name in list)) {
            list[name] = new Set([...cards.split(', ')]);
        } else {
            let cardsArr = cards.split(', ')
            cardsArr.forEach(e => list[name].add(e))
        }
    }
    for (const prop in list) {
        if (list.hasOwnProperty(prop)) {
            let hand = [...list[prop].values()];
            let total = 0;
            hand.forEach(e => {
                let splitedEl = e.split('')

                if (isNaN(splitedEl[0])) {
                    total += powerCards[splitedEl[0]] * typeCards[splitedEl[1]];
                }else {
                    if (splitedEl.length < 3){
                        total += splitedEl[0] * typeCards[splitedEl[1]];
                    }else {
                        total += Number((splitedEl[0] + splitedEl[1])) * typeCards[splitedEl[2]];
                    }
                }
            });

            console.log(`${prop}: ${total}`)

        }
    }

}

solve([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]
);

// function uniq( names ){
//  let result = names
//   .map((name) => {
//     return {count: 1, name: name}
//   })
//   .reduce((a, b) => {
//     a[b.name] = (a[b.name] || 0) + b.count
//     return a
//   }, {})
//   return result;
// }


