const operatorsMap = {
    '+': (array) => array.reduce((a, b) => a + b, 0),
    '-': (array) => array.reduce((a, b) => a - b, array.shift()),
    '/': (array) => array.reduce((a, b) => a / b, array.shift()),
    '*': (array) => array.reduce((a, b) => a * b, array.shift()),
};

function solve(operator, ...rest) {
    // return [ ...rest ].reduce((a, b) => eval(`${a} ${operator} ${b}`));
    return operatorsMap[operator](rest);

}

console.log(solve('+', -2, -2, -2));

// switch (operator) {
//     case '+':
//         result = first + second;
//         break;
//     case '-':
//         result = first - second;
//         break;
//     case '*':
//         result = first * second;
//         break;
//     case '/':
//         result = first / second;
//         break;
//     case '%':
//         result = first % second;
//         break;
//     case '**':
//         result = first ** second;
//         break;

//     default:
//         break;
//     }
//     console.log(result); 
