function solve(input) {
    let result = 0;
    for (let i = 0; i < input.length - 1; i++) {
        result += input[i].filter((el, index) => el === input[i + 1][index]).length;
    }
    for (let i = 0; i < input.length; i++) {
        result += input[i].filter((el, index, arr) => el === arr[index + 1]).length;
    }
    return result;
}

function solve2(params) {
    let counter = 0;
    for (let i = 0; i < input.length; i++) {
        const current = input[i];
        for (let j = 0; j < current.length; j++) {
            if (input[i + 1] != undefined) {
                if (current[j] === input[i + 1][j]) {
                    counter++;
                }
            }
        }
    }

    for (let i = 0; i < input.length; i++) {
        const current = input[i];
        for (let j = 0; j < current.length; j++) {
            if (current[j] === current[j + 1]) {
                counter++;
            }
        }
    }
    console.log(counter);
}


// console.log(solve([
//     [ '2', '3', '4', '7', '0' ],
//     [ '4', '0', '5', '3', '4' ],
//     [ '2', '3', '5', '4', '2' ],
//     [ '9', '8', '7', '5', '4' ],
// ]));
// solve([
//     [ 'test', 'yes', 'yo', 'ho' ],
//     [ 'well', 'done', 'yo', '6' ],
//     [ 'not', 'done', 'yet', '5' ],
// ]);
console.log(solve([
    [ '2', '2', '5', '7', '4' ],
    [ '4', '0', '5', '3', '4' ],
    [ '2', '5', '5', '4', '2' ] ]));
