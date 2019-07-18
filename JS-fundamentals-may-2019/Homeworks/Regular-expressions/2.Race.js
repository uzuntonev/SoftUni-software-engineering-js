function solve(input) {
    const list = {};
    const racers = input
        .shift()
        .split(', ')
        .forEach(element => {
            list[element] = 0;
        });
    const patternName = /[A-Za-z]+/g;
    const patternDistance = /[0-9]/g;
    for (const line of input) {
        if (line === 'end of race') {
            break;
        }
        const name = line.match(patternName).join('');
        const distance = line.match(patternDistance).map(Number).reduce((a, b) => a + b);
        if (name in list) {
            list[name] += distance
        }
    }
    const sorted = Object.entries(list).sort((a, b) => b[1] - a[1])

    console.log(`1st place: ${sorted[0][0]}\n2nd place: ${sorted[1][0]}\n3rd place: ${sorted[2][0]}`)
}

solve([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']
);