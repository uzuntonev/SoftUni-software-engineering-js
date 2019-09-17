function solve(input) {
    const output = [];
    for (const element of input) {
        element >= 0 ? output.push(element) : output.unshift(element);
    }
    console.log(output) 
}

solve([3, -2, 0, -1]);