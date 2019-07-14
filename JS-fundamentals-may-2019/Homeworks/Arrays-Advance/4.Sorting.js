function solve(input) {
    let newArr = [];
    let length = input.length;
    for (let i = 0; i < length; i++) {
        if (i % 2 == 0) {
            newArr.push(input.splice(input.indexOf(Math.max(...input)), 1));
        } else {
            newArr.push(input.splice(input.indexOf(Math.min(...input)), 1));
        }

    }
    console.log(newArr.join(' '))
}

solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);