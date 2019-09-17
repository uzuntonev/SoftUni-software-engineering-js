function solve(input) {
    const obj = {};
    for (let i = 0; i < input.length; i += 2) {
        if (!(input[i] in obj)) {
            obj[input[i]] = Number(input[i + 1]);
        } else {
            obj[input[i]] += Number(input[i + 1]);
        }

    }
    console.log(JSON.stringify(obj))
}

solve(['Sofia',
    '20',
    'Varna',
    '3',
    'Sofia',
    '5',
    'Varna',
    '4']
);