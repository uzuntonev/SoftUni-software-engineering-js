// function solve(firstInt, secondInt) {
//     let arr = [];
//     let firstFactorial = (a) => {
//         if (a == 0 || a == 1)
//             return 1;
//         if (arr[a] > 0)
//             return arr[a];

//         return arr[a] = firstFactorial(a - 1) * a;
//     }
//     let secondFactorial = (a) => {
//         if (a == 0 || a == 1)
//             return 1;
//         if (arr[a] > 0)
//             return arr[a];
            
//         return arr[a] = secondFactorial(a - 1) * a;
//     }
// console.log((firstFactorial(firstInt) / secondFactorial(secondInt)).toFixed(2))
// }

// solve(6, 2);

function solve(first, second) {
    let firstFactoial = a => {
        if (a == 1){
            return 1;
        }
        return a * firstFactoial(a - 1);
    }

let secondFactorial = a => {
    if (a == 1) {
        return 1;
    }
    return a * secondFactorial(a - 1);
}
console.log((firstFactoial(first) / secondFactorial(second)).toFixed(2))

}

solve(6,2);