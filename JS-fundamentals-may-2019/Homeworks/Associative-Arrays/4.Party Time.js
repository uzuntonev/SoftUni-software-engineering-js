function solve(input) {

    let indexOfParty = input.indexOf('PARTY');
    let list = input.slice(0, indexOfParty);
    let guests = input.slice(indexOfParty + 1);

    for (const guest of guests) {
        if (list.includes(guest)) {
            list.splice(list.indexOf(guest), 1);
        }
    }

    console.log(list.length);

    let vip = [];
    let other = [];
    for (let i = 0; i < list.length; i++) {
        if (isNaN(list[i][0])) {
            other.push(list[i]);
        } else {

            vip.push(list[i]);
        }
    }
    vip.forEach(e => console.log(e));
    other.forEach(e => console.log(e));
}


solve([
    '7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]
);
// solve(['m8rfQBvl',
// 'fc1oZCE0',
// 'UgffRkOn',
// '7ugX7bm0',
// '9CQBGUeJ',
// '2FQZT3uC',
// 'dziNz78I',
// 'mdSGyQCJ',
// 'LjcVpmDL',
// 'fPXNHpm1',
// 'HTTbwRmM',
// 'B5yTkMQi',
// '8N0FThqG',
// 'xys2FYzn',
// 'MDzcM9ZK',
// 'PARTY',
// '2FQZT3uC',
// 'dziNz78I',
// 'mdSGyQCJ',
// 'LjcVpmDL',
// 'fPXNHpm1',
// 'HTTbwRmM',
// 'B5yTkMQi',
// '8N0FThqG',
// 'm8rfQBvl',
// 'fc1oZCE0',
// 'UgffRkOn',
// '7ugX7bm0',
// '9CQBGUeJ'
// ]
// )