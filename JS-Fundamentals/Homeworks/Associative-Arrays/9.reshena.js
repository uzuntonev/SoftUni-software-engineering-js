function solve(input) {
    let sheetGladiators = new Map();
 
    let currentInput = input.shift().split(' -> ');
    while (currentInput[0] !== 'Ave Cesar') {
 
        if (currentInput[0].includes(' vs ')) {
            let [gladiator1, gladiator2] = currentInput[0].split(' vs ');
            if (sheetGladiators.has(gladiator1) && sheetGladiators.has(gladiator2)) {
                let techniquesGladiator1 = sheetGladiators.get(gladiator1);
                let techniquesGladiator2 = sheetGladiators.get(gladiator2);
                let theSameTechnique = false;
                for (let i = 0; i < techniquesGladiator1.length; i++) {
                    for (let y = 0; y < techniquesGladiator2.length; y++) {
                        if (techniquesGladiator1[i][0] === techniquesGladiator2[y][0]) {
                            theSameTechnique = true;
                            break;
                        }
                    }
                    if (theSameTechnique === true) {
                        break;
                    }
                }
                if (theSameTechnique) {
                    let totalSkillGladiator1 = 0;
                    let totalSkillGladiator2 = 0;
                    for (let i = 0; i < techniquesGladiator1.length; i++) {
                        totalSkillGladiator1 += techniquesGladiator1[i][1];
                    }
                    for (let i = 0; i < techniquesGladiator2.length; i++) {
                        totalSkillGladiator2 += techniquesGladiator2[i][1];
                    }
                    if (totalSkillGladiator1 > totalSkillGladiator2) {
                        sheetGladiators.delete(gladiator2);
                    } else if (totalSkillGladiator2 > totalSkillGladiator1) {
                        sheetGladiators.delete(gladiator1);
                    }
                }
 
            }
        } else {
            let gladiator = currentInput[0];
            let technique = currentInput[1];
            let skill = Number(currentInput[2]);
            if (sheetGladiators.has(gladiator)) {
                let techniques = sheetGladiators.get(gladiator);
                let techniqeexist = false;
                for (let indexTechnige in techniques) {
                    if (techniques[indexTechnige][0] === technique) {
                        if (techniques[indexTechnige][1] < skill) {
                            techniques[indexTechnige][1] = skill;
                        }
                        techniqeexist = true;
                        break;
                    }
                }
                if (techniqeexist === false) {
                    console.log(techniques)
                    techniques.push([technique, skill]);
                    sheetGladiators.set(gladiator, techniques);
                }
            } else {
                sheetGladiators.set(gladiator, [
                    [technique, skill]
                ]);
            }
        }
        currentInput = input.shift().split(' -> ');
    }
    let output = [...(sheetGladiators.entries())];
  
 
    for (curGladiator of output) {
        curGladiator[1].sort((a, b) => b[1] - a[1]);
    }
    output.sort(mySort)
 
    function mySort(a, b) {
        let totalSkillGladiatorA = 0;
        let totalSkillGladiatorB = 0;
        for (let i = 0; i < a[1].length; i++) {
            totalSkillGladiatorA += a[1][i][1];
        }
        for (let i = 0; i < b[1].length; i++) {
            totalSkillGladiatorB += b[1][i][1];
        }
        if (totalSkillGladiatorA < totalSkillGladiatorB) {
            return 1;
        } else if (totalSkillGladiatorA > totalSkillGladiatorB) {
            return -1;
        }
 
    }
 
    for (let curGladiator of output) {
        let totalSkillGladiator = 0
        for (let i = 0; i < curGladiator[1].length; i++) {
            totalSkillGladiator += curGladiator[1][i][1];
        }
        console.log(`${curGladiator[0]}: ${totalSkillGladiator} skill`);
        curGladiator[1].sort((a,b) => {
            if (a[1] == b[1]) {
                return a[0].localeCompare(b[0])
            }
        }).forEach(element => {
            console.log(`- ${element[0]} <!> ${element[1]}`);
        });
    }
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