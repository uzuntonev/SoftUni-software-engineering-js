const operatorsMap = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '/': (a, b) => a / b,
    '*': (a, b) => a * b,
};

function solve(operator, ...rest) {
    return rest.reduce((a, b) => operatorsMap[operator](a, b), rest.shift());
    
}

console.log(solve('*', 2, -2, -2));

