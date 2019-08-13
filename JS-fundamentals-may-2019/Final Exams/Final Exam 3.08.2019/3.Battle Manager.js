function solve(input) {
    const list = {};

    function add(name, health, energy) {
        health = Number(health);
        energy = Number(energy);
        if (!(name in list)) {
            list[name] = [health, energy];
        } else {
            list[name][0] += health;
        }
    }

    function attack(attackerName, defenderName, damage) {
        if ((attackerName in list) && (defenderName in list)) {
            list[attackerName][1] -= 1;
            list[defenderName][0] -= damage;
            if (list[defenderName][0] <= 0) {
                console.log(`${defenderName} was disqualified!`)
                delete list[defenderName];
            }
            if (list[attackerName][1] <= 0) {
                console.log(`${attackerName} was disqualified!`);
                delete list[attackerName];
            }
        }
    }

    function deleteUser(username) {
        if (username === 'All') {
            for (const key in list) {
                if (list.hasOwnProperty(key)) {
                    delete list[key];
                }
            }
        } else {
            delete list[username];
        }
    }

    for (let line of input) {
        let [command, name, healthOrSecondName, energyOrDamage] = line.split(':');
        if (command === 'Add') {
            add(name, healthOrSecondName, energyOrDamage);
        } else if (command === 'Attack') {
            attack(name, healthOrSecondName, energyOrDamage);
        } else if (command === 'Delete') {
            deleteUser(name);
        }
    }

    let peopleCount = Object.entries(list).length;

    console.log(`People count: ${peopleCount}`);

    Object.entries(list)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .sort((a, b) => b[1][0] - a[1][0])
        .forEach(e => console.log(`${e[0]} - ${e[1][0]} - ${e[1][1]}`))
}

// solve([
//     'Add:Mark:1000:5',
//     'Add:Clark:1000:3',
//     'Attack:Clark:Mark:500',
//     'Add:Allison:2500:5',
//     'Attack:Clark:Mark:300',
//     'Add:Charlie:4000:10',
//     'Attack:Clark:Mark:500',
//     'Results']
// );
solve([
    'Add:Bonnie:3000:5',
    'Add:Johny:4000:10',
    'Delete:All',
    'Add:Bonnie:3333:3',
    'Results']
)