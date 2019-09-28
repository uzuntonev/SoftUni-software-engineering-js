function solve(input) {
    const sum = input[0].reduce((a, b) => a + b, 0);
    return input.reduce((acc, curr, index, arr) => {
        const row = curr.reduce((a, b) => a + b, 0);
        const column = arr.map(e => e[index]).reduce((a, b) => a + b, 0);
        acc.push(row !== sum || column !== sum
            ? false
            : true);
        return acc;
    },[]).includes(false) 
        ? false 
        : true;
}

function solve2(input) {
    const sum = input[0].reduce((a, b) => a + b, 0);
    let isEqual = true;
    for (let i = 0; i < input.length; i++) {
        const row = input[i].reduce((a, b) => a + b, 0);
        const column = input.map(e => e[i]).reduce((a, b) => a + b, 0);
        // for (let j = 0; j < input.length; j++) {
        //     column += input[i][j];
        // }
        if (row !== sum || column !== sum) {
            isEqual = false;
            break;
        }
    }
    return isEqual;
}
console.log(solve([ [ 4, 5, 6 ],
    [ 6, 5, 4 ],
    [ 5, 5, 5 ] ]));
// console.log(solve([ [ 11, 32, 45 ],
//     [ 21, 0, 1 ],
//     [ 21, 1, 1 ] ]));
