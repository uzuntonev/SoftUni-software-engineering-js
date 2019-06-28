function solve(sequence, bombAndNum) {
    let bomb = bombAndNum[0];
    let power = bombAndNum[1];
    let indexOfBomb = 0;
    let startIndex = 0
    let finishIndex = 0;
    while (sequence.includes(bomb)) {

        indexOfBomb = sequence.indexOf(bomb);

        if ((indexOfBomb - power) > 0) {
            startIndex = indexOfBomb - power;
        }
        if ((indexOfBomb + power) >= sequence.length - 1) {
            finishIndex = sequence.length - startIndex;
        } else {
            finishIndex = power * 2 + 1;
        }
        sequence.splice(startIndex, finishIndex);
    }

    if (sequence.length > 0) {
        let result = sequence.reduce((a, b) => a + b);
        console.log(result);
    } else {
        console.log(0)
    }

}

solve([1, 4, 4, 2, 8, 9, 1],
    [9, 3]

);
// solve([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
//     [2, 1]
//     )