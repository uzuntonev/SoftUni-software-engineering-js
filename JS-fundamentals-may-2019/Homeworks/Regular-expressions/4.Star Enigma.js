function solve(input) {
    const patterCout = /[star]/gi;
    const n = input.shift();
    const attackPlanets = [];
    const destructionPlanets = [];
    const pattern = /\@([a-zA-Z]+)[^@\-!:>]*\:([0-9]+)[^@\-!:>]*\!(A|D)\![^@\-!:>]*\-\>[0-9]+/g;
    for (let i = 0; i < n; i++) {
        const line = input[i];
        let count = 0;
        if (line.match(patterCout)) {
            count = line.match(patterCout).length;
        }
        const newLine = line
            .split('')
            .map(e => {
                return e = String.fromCharCode(e.charCodeAt() - count)
            })
            .join('')
        if (newLine.match(pattern)) {
            let planet = newLine
                .match(/@[A-Za-z]+/g);
            const population = newLine
                .match(/:[0-9]+/g);
            const attackOrDestruction = newLine
                .match(/![AD]+!/g);
            const soldierCount = newLine
                .match(/->[0-9]+/g);


            if (attackOrDestruction[0] === '!A!') {
                planet = planet[0].split('@')[1]
                attackPlanets.push(planet)
            } else if (attackOrDestruction[0] === '!D!') {
                planet = planet[0].split('@')[1];
                destructionPlanets.push(planet);
            }
        }

    }
    console.log(`Attacked planets: ${attackPlanets.length}`)
    attackPlanets
        .sort((a, b) => a.localeCompare(b))
        .forEach(e => console.log(`-> ${e}`));
    console.log(`Destroyed planets: ${destructionPlanets.length}`);
    destructionPlanets
        .sort((a, b) => a.localeCompare(b))
        .forEach(e => console.log(`-> ${e}`))
}

solve([
    '2',
    'STCDoghudd4=63333$D$0A53333',
    'EHfsytsnhf?8555&I&2C9555SR']
);
console.log('>>>>>>>>>>>>>>>>>')
solve([
    '3',
    'tt(\'\'DGsvywgerx>6444444444%H%1B9444',
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR']
);