/* eslint-disable consistent-return */
function solve(input) {    
    function findIndex(array) {
        for (const line of array) {
            if (line.includes('vs')){
                return array.indexOf(line);
            }
        }
    }
    
    function gladiators(array){
        return array
            .map(e => e.split(' -> '))
            .reduce((acc, curr) => {
                let [ name, technique, skill ] = curr;
                skill = Number(skill);
                if (acc[name] === undefined) {
                    acc[name] = { [technique]: skill };
                    acc[name].totalSkill = skill;
                }else{
                    if (acc[name][technique] === undefined){
                        acc[name][technique] = skill;
                        acc[name].totalSkill += skill;
                    }else if (acc[name][technique] < skill){
                        acc[name][technique] = skill;
                        acc[name].totalSkill = acc[name][technique] - skill;
                    } 
                }
                return acc;
            }, {});
    }
    
    function battles(array, obj) {
        return array
            .map(e => e.split(' vs '))
            .reduce((acc, curr) => {
                const [ first, second ] = curr;
                if (acc[first] !== undefined && acc[second] !== undefined){
                    for (const key in acc[first]) {
                        if (acc[first].hasOwnProperty(key)) {
                            if ((key in acc[second]) && 
                            acc[first].totalSkill > acc[second].totalSkill && 
                            key !== 'totalSkill'){
                                delete acc[second];
                                break;
                            }else if ((key in acc[second]) && 
                            acc[first].totalSkill < acc[second].totalSkill && 
                            key !== 'totalSkill'){
                                delete acc[first];
                                break;
                            }
                        }
                    }
                }
                return acc;
            }, obj);
    }
    function sortAndPrint(obj){
        return Object.entries(obj)
            .sort((a, b) => a[0].localeCompare(b[0]))
            .sort((a, b) => b[1].totalSkill - a[1].totalSkill)
        
            .forEach(e => {
                console.log(`${e[0]}: ${e[1].totalSkill} skill`);
                delete e[1].totalSkill;

                Object.entries(e[1])
                    .sort((a, b) => a[0].localeCompare(b[0]))
                    .sort((a,b) => b[1] - a[1])
                    .forEach(el => console.log(`- ${el[0]} <!> ${el[1]}`));
            });
    }


    const end = input.pop();
    const gladiatorsList = input.slice(0, findIndex(input));
    const battlesList = input.slice(findIndex(input));
    const result = battles(battlesList, gladiators(gladiatorsList));

    sortAndPrint(result);
}
// solve([
//     'Pesho -> BattleCry -> 400',
//     'Gosho -> PowerPunch -> 300',
//     'Stamat -> Duck -> 200',
//     'Stamat -> Tiger -> 250',
//     'Ave Cesar',
// ]);

solve ([
    'Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Pesho vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Gosho',
    'Ave Cesar',
]);
