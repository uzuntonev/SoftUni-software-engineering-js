function solve(input) {
    let sum = input[0].reduce((a, b) => a + b, 0);
    let isEqual = Boolean;
    for (let i = 0; i < input.length; i++) {
        let current = input[i];
        let rowSum = 0
        for (let j = 0; j < current.length; j++) {
            rowSum += current[j];
        }
        if (sum === rowSum) {
            isEqual = true
        } else {
            isEqual = false;
            break;
        }
    }

    for (let i = 0; i < input.length; i++) {
        let columnSum = 0;
        for (let j = 0; j < input.length; j++) {
            columnSum += input[j][i];
        }
        if (sum === columnSum) {
            isEqual = true
        } else {
            isEqual = false;
            break;
        }
    }
    console.log(isEqual)
}

solve(
    [[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]);
solve([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]);