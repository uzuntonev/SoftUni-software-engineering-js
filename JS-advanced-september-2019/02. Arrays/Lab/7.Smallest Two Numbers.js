function solve(input) {
    const output = input
        .sort((a, b) => a - b)
        .splice(0, 2)
        .join(' ');
    console.log(output)
}

solve([30, 15, 50, 5]);