function solve(input) {
    const arr = [];
    for (let i = 0; i < input.length; i++) {
        if (i % 2 !== 0) {
            arr.push(input[i] * 2);
        }
    }
    console.log(arr.reverse().join(' ')) 
}

solve([3, 0, 10, 4, 7, 3]);