function solve(arr) {
    let arrOfNums = arr.map(Number);
    arrOfNums.sort((a, b) => a - b)
    let dailySum = 0;
    let output = [];

    while (arrOfNums[0] < 30) {
        for (let i = 0; i < arrOfNums.length; i++) {
            if (arrOfNums[i] < 30) {
                dailySum += 195;
                arrOfNums[i] += 1;
            }
        }
        output.push(dailySum);
        dailySum = 0;
    }
    let sum = output.reduce((a, b) => a + b);
    console.log(output.join(', '));
    console.log(`${sum * 1900} pesos`);
}

solve([21, 25, 28]);