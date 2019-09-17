function solve(input) {
    let output = [];
    for (const element of input) {
      output =  output.concat(element)
    }
    console.log(Math.max(...output)) 
}

solve([
    [20, 50, 10],
    [8, 33, 145]
]);