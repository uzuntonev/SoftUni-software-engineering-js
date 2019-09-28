function solve(input) {
    return [ ...input ]
        .sort((a, b) => a.localeCompare(b))
        .sort((a, b) => a.length - b.length)
        .join('\n');
}

console.log(solve([
    'alpha',
    'beta',
    'gamma' ]));
// solve([
//     'Isacc',
//     'Theodor',
//     'Jack',
//     'Harrison',
//     'George' ]);
