function solve(input) {
    let sorted = input
        .sort((a, b) => a.localeCompare(b))
        .sort((a, b) => a.length - b.length);
    sorted.forEach(e => console.log(e) );
}

solve([
    'alpha',
    'beta',
    'gamma']
);
solve([
    'Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']);