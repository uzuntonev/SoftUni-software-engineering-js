function solve(input) {
    let biggestNum = input[0];
    const arr = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] >= biggestNum) {
            biggestNum = input[i];
            arr.push(biggestNum);
        }
    }
    return arr.join('\n');
}

console.log(solve([
    1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24 ]));

solve([
    20,
    3,
    2,
    15,
    6,
    1 ]);
