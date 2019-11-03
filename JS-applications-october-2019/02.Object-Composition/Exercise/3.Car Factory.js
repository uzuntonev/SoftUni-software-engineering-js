function solve(input) {
    const engines = [
        { power: 90, volume: 1800 },
        { power: 120, volume: 2400 },
        { power: 200, volume: 3500 },
    ];

    return {
        model: input.model,
        engine: engines.find(x => x.power >= input.power),
        carriage: {
            type: input.carriage,
            color: input.color,
        },
        wheels: input.wheelsize % 2 === 0
            ? new Array(4).fill(input.wheelsize - 1)
            : new Array(4).fill(input.wheelsize),
    };
}

// console.log(solve({
//     model: 'VW Golf II',
//     power: 90,
//     color: 'blue',
//     carriage: 'hatchback',
//     wheelsize: 14,
// })); 

console.log(solve({
    model: 'Ferrari',
    power: 200,
    color: 'red',
    carriage: 'coupe',
    wheelsize: 21,
})); 
