function solve(input) {
    const output = [];
    for (let i = 0; i < input.length; i++) {
        i % 2 == 0 ? output.push(input[i]) : void(0);
    }
    console.log(output.join(' ')) 
}

solve(['20', '30', '40']);