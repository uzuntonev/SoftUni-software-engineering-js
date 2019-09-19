function solve(input) {
    const obj = {};
    for (let i = 0; i < input.length; i += 2) {
        const key = input[i];
        const value = input[i + 1];
        if (!(key in obj)) {
            obj[key] = Number(value);
        } else {
            obj[key] += Number(value);
        }
    }
    console.log(JSON.stringify(obj));
}

solve([ 'Sofia',
    '20',
    'Varna',
    '3',
    'Sofia',
    '5',
    'Varna',
    '4' ]);
