function solve(input) {
    const output = [];
    for (let i = 0; i < input.length; i+=2) {
        output.push(input[i]);
    }
    console.log(output.join(' ')); 
}

solve([ '20', '30', '40' ]);
