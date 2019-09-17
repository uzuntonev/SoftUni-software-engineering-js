function solve(first, second, operator) {
    const sum = () => first + second;
    const substract = () => first - second;
    const multiple = () => first * second;
    const divide = () => first / second;

    const obj = {
        '+': sum(),
        '-': substract(),
        '*': multiple(),
        '/': divide(),
    };
    console.log(obj[operator]);  
}

solve(3, 5, '*');
