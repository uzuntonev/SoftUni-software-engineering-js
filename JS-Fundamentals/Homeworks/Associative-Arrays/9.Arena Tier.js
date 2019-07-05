function solve(input) {
    input.pop();
    let list = {};
    for (let line of input) {
        if (line.includes('vs')) {
            let [firstGladiator, secondGladiator] = line.split(' vs ');
            if (firstGladiator in list && secondGladiator in list) {
                let firstGladiatorTechniques = list[firstGladiator];
                let secondGladiatorTechniques = list[secondGladiator];
                let firstTotal = firstGladiatorTechniques.shift();
                let secondTotal = secondGladiatorTechniques.shift();
                let first = firstGladiatorTechniques.map(e => e.join(' ')).join(' ').split(' ')
                let second = secondGladiatorTechniques.map(e => e.join(' ')).join(' ').split(' ')

                let isEqualTechniques = false;

                for (let i = 0; i < first.length; i += 2) {
                    for (let j = 0; j < second.length; j += 2) {
                        if (first[i] == second[j]) {
                            isEqualTechniques = true;
                            break;
                        }
                    }
                }
                if (isEqualTechniques) {
                    if (firstTotal > secondTotal) {
                        delete list[secondGladiator];
                        list[firstGladiator].unshift(firstTotal);
                    } else {
                        delete list[firstGladiator];
                        list[secondGladiator].unshift(secondTotal);
                    }
                } else {
                    list[firstGladiator].unshift(firstTotal);
                    list[secondGladiator].unshift(secondTotal);
                }
            }
        } else {
            let [gladiator, technique, skill] = line.split(' -> ');
            skill = Number(skill)
            if (!(gladiator in list)) {
                list[gladiator] = [[technique, skill]];
                list[gladiator].unshift(skill)
            } else {
                if (!list[gladiator].includes(technique)) {
                    list[gladiator].push([technique, skill]);
                    list[gladiator][0] += skill;

                } else {
                    let index = list[gladiator].indexOf(technique);
                    if (list[gladiator][index + 1] < skill) {
                        list[gladiator][index + 1] = skill;
                        list[gladiator][0] += skill - list[gladiator][index + 1];
                    }
                }
            }
        }
    }

    let entries = Object.entries(list)
        .sort((a, b) => {
            if (a[1][0] == b[1][0]) { return b[0].localeCompare(a[0]) }
        })
        .sort((a, b) => b[1][0] - a[1][0]);

    for (const line of entries) {
        let totalSkill = line[1].shift();
        console.log(`${line[0]}: ${totalSkill} skill`);
        line[1]
            .sort((a, b) => a[0].localeCompare(b[0]))
            .sort((a, b) => b[1] - a[1])
            .forEach(e => console.log(`- ${e[0]} <!> ${e[1]}`));
    }
}



// solve([
//     'Peter -> BattleCry -> 400',
//     'Alex -> PowerPunch -> 300',
//     'Stefan -> Duck -> 200',
//     'Stefan -> Tiger -> 250',
//     'Ave Cesar'
// ]);
solve([
    'Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Pesho vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
]
)