function solve(input) {
    let couter = 0;
    for (let i = 0; i < input.length; i++) {
        let current = input[i];
        for (let j = 0; j < current.length; j++) {
            if (input[i + 1] != undefined) {
                if (current[j] === input[i + 1][j]) {
                    couter++
                }
            }
        }
    }
    for (let i = 0; i < input.length; i++) {
        let current = input[i];
        for (let j = 0; j < current.length; j++) {
            if (current[j] === current[j + 1]) {
                couter++;
            }
        }
    }
    console.log(couter)
}

solve([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
]);
solve([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
]);
solve(
    [['2', '2', '5', '7', '4'],
    ['4', '0', '5', '3', '4'],
    ['2', '5', '5', '4', '2']]);