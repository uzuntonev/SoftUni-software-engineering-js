function solve(input) {
    return input
        .slice(0, -1)
        .join(input[input.length - 1]);
}

console.log(solve([
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    '-' ]));
