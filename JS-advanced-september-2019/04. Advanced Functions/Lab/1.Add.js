function solve(n) {
    const result = n;
    return function (m) {
        return result + m;
    };
}
const add = solve(7);
console.log(add(2)); 
console.log(add(3)); 
