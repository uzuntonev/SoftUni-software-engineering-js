function solve(input) {
    const rotation = Number(input.pop());
    for (let i = 0; i < rotation; i++) {
        input.unshift(input.pop());
    }
    return input.join(' ');
}

solve([
    '1',
    '2',
    '3',
    '4',
    '2' ]);
solve([
    'Banana',
    'Orange',
    'Coconut',
    'Apple',
    '15' ]);
