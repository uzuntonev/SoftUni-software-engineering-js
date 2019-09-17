function solve(arg) {
    const type = typeof arg;
    type === 'number' 
        ? console.log((Math.PI * (arg ** 2)).toFixed(2))
        : console.log(`We can not calculate the circle area, because we receive a ${typeof arg}.`); 
}

solve(5);
