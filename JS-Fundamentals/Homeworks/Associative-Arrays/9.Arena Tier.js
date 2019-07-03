function solve(input) {
    input.pop();
    let list = {};
    for (const line of input) {
        let [gladiator, technique, skill] = line.split(' -> ');
        if (line.includes('vs')) {
            let [firstGladiator, secondGladiator] = line.split(' vs ');
            if (list[firstGladiator] != undefined && list[secondGladiator] != undefined) {

            }
        } else {
            if (!(list.name in list)) {
                list = {
                    name: gladiator,
                    totalSkill: 0,
                    techAndSkill: {
                        technique,
                        skill
                        
                    }
                }
                list.totalSkill += techAndSkill.skill;
            } else {
                if (!(technique in list.techAndSkill)) {
                   list.techAndSkill[technique] = skill;
                   list.totalSkill += list.techAndSkill[technique];
                } else {
                    // if (list[gladiator].get(technique) < skill) {
                    //     list[gladiator].set(technique, skill)
                    // }

                }
            }
        }
        skill = Number(skill);

    }
   
    console.log(list)
}

solve([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Stefan -> Tiger -> 350',
    'Peter vs Alex',
    'Ave Cesar'
]
);