// function solve(num) {

// }

// solve(6);


function checkPerfectNumber(num) {
    let half_total = 0;
    let i = 0;
    while (num / 2 >= i) {
        i++;
        if (num % i === 0)
            half_total = half_total + i;
    }
    if (num == half_total) {
        return 'We have a perfect number!'
    } else {
        return `It's not so perfect.`
    }
}
console.log(checkPerfectNumber(1236498))