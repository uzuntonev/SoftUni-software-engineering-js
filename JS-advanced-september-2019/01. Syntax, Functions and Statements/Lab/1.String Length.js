function solve(a, b, c) {
    const sum = [ ...arguments ].reduce((acc, curr) => acc + curr.length, 0);
    const avg = Math.floor(sum / arguments.length);
    console.log(sum);
    console.log(avg);
}

solve('chocolate', 'ice cream', 'cake');
// solve('pasta', '5', '22.3');
