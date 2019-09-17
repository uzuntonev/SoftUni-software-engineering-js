function solve(input) {
    let startingPoint = Number(input.shift());
    const operations = {
        chop: (value) => startingPoint = value / 2,
        dice: (value) => startingPoint = Math.sqrt(value),
        spice: (value) => startingPoint = value + 1,
        bake: (value) => startingPoint = value * 3,
        fillet: (value) => startingPoint = value * 0.8,
    };

    for (const element of input) {
        console.log(operations[element](startingPoint)); 
    }
}

solve([ '9', 'dice', 'spice', 'chop', 'bake', 'fillet' ]);
