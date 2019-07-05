function solve(input) {
    input.pop();
    let list = {};

    for (let line of input) {

        if (line.includes('vs')) {
            let [firstGladiator, secondGladiator] = line.split(' vs ');
            if ((firstGladiator in list) && (secondGladiator in list)) {
                let firstGladiatorTechniques = list[firstGladiator];
                let secondGladiatorTechniques = list[secondGladiator];

                for (const key in firstGladiatorTechniques) {
                    if (firstGladiatorTechniques.hasOwnProperty(key)) {
                        if ((key in secondGladiatorTechniques) && (key !== 'totalSkill')) {
                            if (firstGladiatorTechniques.totalSkill > secondGladiatorTechniques.totalSkill) {
                                delete list[secondGladiator];
                                break;
                            }else {
                                delete list[firstGladiator];
                                break
                            }
                        }
                    }
                }
            }
        } else {
            let [gladiator, technique, skill] = line.split(' -> ');
            skill = Number(skill)
            if (!(gladiator in list)) {
                list[gladiator] = { [technique]: skill };
                list[gladiator].totalSkill = skill
            } else {
                if (!(technique in list[gladiator])) {
                    list[gladiator][technique] = skill;
                    list[gladiator].totalSkill += skill;
                } else {
                    if (list[gladiator][technique] < skill) {
                        list[gladiator].totalSkill = list[gladiator][technique] - skill;
                        list[gladiator][technique] = skill;
                    }
                }
            }
        }
    }
    let entries = Object.entries(list)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .sort((a, b) => b[1].totalSkill - a[1].totalSkill);
      
    for (const line of entries) {
        console.log(`${line[0]}: ${line[1].totalSkill} skill`);
        delete line[1].totalSkill;
        Object.entries(line[1])
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