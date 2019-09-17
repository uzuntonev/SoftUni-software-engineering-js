function solve(input) {
    const calculator = {
        sum: (array) => array.reduce((acc, curr) => acc + curr, 0),
        min: (array) => Math.min(...array),
        max: (array) => Math.max(...array),
        product: (array) => array.reduce((acc, curr) => acc * curr, 1),
        join: (array) => array.join(''),
    };
    console.log(`Sum = ${calculator.sum(input)}`);
    console.log(`Min = ${calculator.min(input)}`);
    console.log(`Max = ${calculator.max(input)}`);
    console.log(`Product = ${calculator.product(input)}`);
    console.log(`Join = ${calculator.join(input)}`);
}
solve([ 2, 3, 10, 5 ]);
