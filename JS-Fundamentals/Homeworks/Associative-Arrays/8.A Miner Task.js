function solve(input) {
    let list = {};
    for (let i = 0; i < input.length; i++) {
        if(i % 2 == 0){
            if(input[i] in list){
                list[input[i]] += Number(input[i + 1])
            }else {
                list[input[i]] = Number(input[i + 1])

            }
        }
    }

    for (const key in list) {
        if (list.hasOwnProperty(key)) {
            console.log(`${key} -> ${list[key]}`)
            
        }
    }
}

// solve([
//     'Gold',
//     '155',
//     'Silver',
//     '10',
//     'Copper',
//     '17'
//     ]
//     );
    solve([
        'gold',
        '155',
        'silver',
        '10',
        'copper',
        '17',
        'gold',
        '15'
        ]
        )