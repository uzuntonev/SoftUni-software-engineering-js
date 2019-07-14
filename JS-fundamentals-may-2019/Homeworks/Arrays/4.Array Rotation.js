function solve(arr, num) {
    for (let i = 0; i < num; i++) {
        arr.push(arr.shift());   
    }
    console.log(arr.join(' '))
}

solve([51, 47, 32, 61, 21],
    2
    );