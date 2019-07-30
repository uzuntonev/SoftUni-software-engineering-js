function solve(input) {
    const n = Number(input.shift());

    function makeAnimal(line) {
        let array = line.split(';')
        const pattern = /[A-Za-z\s]/g;
        const arr = [];
        let name = array[0].match(pattern).join('').replace('n', '');
        let kind = array[1].match(pattern).join('').replace('t', '');
        let country = array[2].match(pattern).join('').replace('c', '');
        arr.push(name);
        arr.push(kind);
        arr.push(country);
        return arr
    }

    function getAnimalWeight(line) {
        const pattern = /[0-9]/g;
        if (line.match(pattern)) {
            const numbers = line
                .match(pattern)
                .map(Number)
                .reduce((acc, curr) => acc + curr, 0);
            return numbers;
        }
        return 0;

    }

    let totalWeight = 0;
    for (let i = 0; i < n; i++) {
        const pattern = /^n:(?<name>[^;]+);t:(?<kind>[^;]+);c--(?<country>[A-Za-z\s]+)$/g;

        const line = input[i];
        if (line.match(pattern)) {
            const animal = makeAnimal(line);
            console.log(`${animal[0]} is a ${animal[1]} from ${animal[2]}`)
            totalWeight += getAnimalWeight(line);
        }
    }
    console.log(`Total weight of animals: ${totalWeight}KG`)
}

// Last test fail !! 
function solve(input) {
    const n = Number(input.shift());
    const pattern = /^n:(?<name>[^;]+);t:(?<kind>[^;]+);c--(?<country>[A-Za-z\s]+)$/g;

    function makeAnimal(line) {
        const pattern = /^n:(?<name>[^;]+);t:(?<kind>[^;]+);c--(?<country>[A-Za-z\s]+)$/g;
        const patternName = /[A-Za-z ]+/g;
        const patternKind = /[A-Za-z ]+/g;
        let result;
        const arr = [];

        while (result = pattern.exec(line)) {
            let name = result.groups.name.match(patternName).join('');
            let kind = result.groups.kind.match(patternKind).join('');
            arr.push(name);
            arr.push(kind);
            arr.push(result.groups.country);
        }
        return arr
    }

    function getAnimalWeight(line) {
        const pattern = /[0-9]/g;
        if (line.match(pattern)) {
            const numbers = line
                .match(pattern)
                .map(Number)
                .reduce((acc, curr) => acc + curr, 0);
            return numbers;
        }
        return 0;
    }
 
    let totalWeight = 0;
    for (let i = 0; i < n; i++) {
        const line = input[i];
        if (line.match(pattern)) {
            const animal = makeAnimal(line);
            console.log(`${animal[0]} is a ${animal[1]} from ${animal[2]}`)
            totalWeight += getAnimalWeight(line);
        }
    }
    console.log(`Total weight of animals: ${totalWeight}KG`)
}

// solve([
//     '3',
//     'n:M5%ar4#le@y;t:B3#e!!a2#2r;c--Australia',
//     'n:G3e%6org43e;t:C€$at2%;c--Africa',
//     'n:AlicE:Won;c-India']
// );
solve([
    '4',
    'n:Bo^%4b35454bie#$;t:Ele5ph#$34a%nt;c--Africa',
    'n:Honey;t:Ti^^5ger;c--India',
    'bla;t:1234a;c--America',
    'n:A#$@545n;t:Cat241$@#23;cGermany',
]
);