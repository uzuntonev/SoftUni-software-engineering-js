function solve(input) {
    let rotation = Number(input.pop())
    for (let i = 0; i < rotation; i++) {
        input.unshift(input.pop());
    }
    console.log(input.join(' '))
}

solve([
    '1',
    '2',
    '3',
    '4',
    '2']);
solve([
    'Banana',
    'Orange',
    'Coconut',
    'Apple',
    '15']);