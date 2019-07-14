function solve(num) {
    let arr = [];

    for (let i = 0; i < num / 10; i++) {
        arr.push('%');
    }
    for (let i = arr.length; i < 10; i++) {
        arr.push(".")
    }
    if (num == 100) {
        console.log(`${num}% Complete!`);
        console.log(`[${arr.join('')}]`)

    } else {
        console.log(`${num}% [${arr.join('')}]`);
        console.log('Still loading...')
    }
}

solve(100);