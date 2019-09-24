function solve(kingdomsArr, battles) {
    const listOfKingdoms = {};

    for (const line of kingdomsArr) {
        const { kingdom, general, army } = line;
        if (!(kingdom in listOfKingdoms)) {
            listOfKingdoms[kingdom] = {
                [general]: { army, wins: 0, losses: 0 },
                totalWins: 0,
                totalLosses: 0,
            };
        } else {
            if (listOfKingdoms[kingdom][general]) {
                listOfKingdoms[kingdom][general].army += army;
            } else {
                listOfKingdoms[kingdom][general] = { army, wins: 0, losses: 0 };
            }
        }
    }

    for (const line of battles) {
        const [ attackingKingdom, attackingGeneral, defendingKingdom, defendingGeneral ] = line;
        const attacking = listOfKingdoms[attackingKingdom][attackingGeneral];
        const defending = listOfKingdoms[defendingKingdom][defendingGeneral];

        if (attackingKingdom != defendingKingdom &&
            attacking.army != defending.army) {
            if (attacking.army > defending.army) {
                attacking.army = Math.floor(listOfKingdoms[attackingKingdom][attackingGeneral].army * 1.1);
                defending.army = Math.floor(listOfKingdoms[defendingKingdom][defendingGeneral].army * 0.9);
                attacking.wins++;
                defending.losses++;
                listOfKingdoms[attackingKingdom].totalWins++;
                listOfKingdoms[defendingKingdom].totalLosses++;

            } else {
                defending.army = Math.floor(listOfKingdoms[defendingKingdom][defendingGeneral].army * 1.1);
                attacking.army = Math.floor(listOfKingdoms[attackingKingdom][attackingGeneral].army * 0.9);
                defending.wins++;
                attacking.losses++;
                listOfKingdoms[defendingKingdom].totalWins++;
                listOfKingdoms[attackingKingdom].losses++;
            }
        }

    }

    const sortedKingdoms = Object.entries(listOfKingdoms)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .sort((a, b) => a[1].totalLosses - b[1].totalLosses)
        .sort((a, b) => b[1].totalWins - a[1].totalWins);

    const winner = sortedKingdoms[0];
    delete winner[1].totalWins;
    delete winner[1].totalLosses;
    console.log(`Winner: ${winner[0]}`);

    const a = Object.entries(winner[1])
        .sort((a, b) => b[1].army - a[1].army)
        .forEach(e => console.log(`/\\general: ${e[0]}\n---army: ${e[1].army}\n---wins: ${e[1].wins}\n---losses: ${e[1].losses}`));


    // console.log(a)
}

solve(
[
    { kingdom: 'Stonegate', general: 'Ulric', army: 5000 },
    { kingdom: 'YorkenShire', general: 'Quinn', army: 5000 },
    { kingdom: 'Maiden Way', general: 'Berinon', army: 1000 } ],
[ [ 'YorkenShire', 'Quinn', 'Stonegate', 'Ulric' ],
    [ 'Maiden Way', 'Berinon', 'YorkenShire', 'Quinn' ] ]
);

// solve([{ kingdom: "Maiden Way", general: "Merek", army: 5000 },
// { kingdom: "Stonegate", general: "Ulric", army: 4900 },
// { kingdom: "Stonegate", general: "Doran", army: 70000 },
// { kingdom: "YorkenShire", general: "Quinn", army: 0 },
// { kingdom: "YorkenShire", general: "Quinn", army: 2000 },
// { kingdom: "Maiden Way", general: "Berinon", army: 100000 }],
//     [["YorkenShire", "Quinn", "Stonegate", "Ulric"],
//     ["Stonegate", "Ulric", "Stonegate", "Doran"],
//     ["Stonegate", "Doran", "Maiden Way", "Merek"],
//     ["Stonegate", "Ulric", "Maiden Way", "Merek"],
//     ["Maiden Way", "Berinon", "Stonegate", "Ulric"]]
// )
