function solve(first, second) {
    const arr = [];

    for (let i = 1; i <= 9; i++) {
        if ((first % i === 0) && (second % i === 0)) {
            arr.push(i);
        }
    }

    const max = Math.max(...arr);
    console.log(max);
}

solve(2154, 458);
