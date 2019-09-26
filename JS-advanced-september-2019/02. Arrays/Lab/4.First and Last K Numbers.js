function solve(input) {
    const [ k, ...array ] = input;

    const firstK = array.slice(0, k);
    const lastK = array.slice(array.length - k);
    return [ firstK, lastK ];
}

console.log(solve([ 2, 7, 8, 9 ]));
// solve([ 3, 6, 7, 8, 9 ]);
