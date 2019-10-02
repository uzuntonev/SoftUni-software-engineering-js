const solution = (function test() {
    let sum = 0;
    return function add(n) {
        sum += n;
        add.toString = () => sum;
        return add;
    };
}());

console.log(solution(1)(2)(3).toString()); 

// function solve(input) {
//     let result = input;
//     return function add(n) {
//         result += n;
//         add.toString = () => result;
//         return add;
//     };
// }

// console.log(solve(1)(6)(-3).toString());

// let result = 0;
// const demo = (param) => {
//     result += param;
//     demo.toString = () => result;
//     return demo;
// };

// console.log(demo(5)(10).toString());
