function solve(input) {
    const fires = input.shift().split('#');
    let water = Number(input.shift());
    let effort = 0;
    let totalFire = 0;
    console.log('Cells:')
    for (const line of fires) {
        let [typeFire, level] = line.split(' = ');
        level = Number(level);
        if (water >= level) {
            if (typeFire === 'High' && level >= 81 && level <= 125) {
                water -= level;
                totalFire += level;
                effort += level * 0.25;
                console.log(` - ${level}`);
            } else if (typeFire === 'Medium' && level >= 51 && level <= 80) {
                water -= level;
                totalFire += level;
                effort += level * 0.25;
                console.log(` - ${level}`);
            } else if (typeFire === 'Low' && level >= 1 && level <= 50) {
                water -= level;
                totalFire += level;
                effort += level * 0.25;
                console.log(` - ${level}`);
            }
        }
    }
    console.log(`Effort: ${effort.toFixed(2)}`)
    console.log(`Total Fire: ${totalFire}`)
}

// solve(['High = 89#Low = 28#Medium = 77#Low = 23', '1250']);
solve(['High = 150#Low = 55#Medium = 86#Low = 40#High = 110#Medium = 77', '220'])