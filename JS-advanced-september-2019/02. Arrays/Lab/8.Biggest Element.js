function solve(input) {
    return Math.max(...input.reduce((a,b) => [ ...a, ...b ]));
}

console.log(solve([
    [ 20, 50, 10 ],
    [ 8, 33, 145 ],
]));
