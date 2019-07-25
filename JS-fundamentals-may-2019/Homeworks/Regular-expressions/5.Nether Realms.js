function solve(input) {
    const patternHealth = /[^0-9+-.*/]/g;
    const patterDamage = /[-]*[0-9.]+|[+]*[0-9.]+/g;
    const patterMultipDivid = /[*/]/g;
    const arr = input
        .shift()
        .split(',')
        .map(e => e.trim())
        .sort();
    for (const line of arr) {
        let health = 0;
        let damage = 0;

        if (line.match(patternHealth)) {
            line
                .match(patternHealth)
                .forEach(e => {
                    health += e.charCodeAt(0);
                });
        }

        if (line.match(patterDamage)) {
            damage = line
                .match(patterDamage)
                .map(Number)
                .reduce((acc, curr) => acc + curr, 0)
        }

        if (line.match(patterMultipDivid)) {
            const dividerAndMultiplyerArr = line.match(patterMultipDivid);
            for (const line of dividerAndMultiplyerArr) {
                if (line === '*') {
                    damage *= 2;
                } else if (line === '/') {
                    damage /= 2;
                }
            }
        }

        console.log(`${line} - ${health} health, ${damage.toFixed(2)} damage`)
    }
}

// solve(['M3ph-0.5s-0.5t0.0**']);
solve(['M3ph1st0**, Azazel']);
