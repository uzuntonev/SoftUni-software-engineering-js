// function solve(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == +arr[i].toString().split('').reverse().join('')) {
//             console.log('true')
//         } else {
//             console.log('false')
//         }
//     }
// }
// solve([32,2,232,1010]);

function solve(arr) {
    function isPalindrom(num) {
        return num == +num.toString().split('').reverse().join('');
    }
    
    for (let element of arr) {
        console.log(isPalindrom(element))
    }
}

solve([32,2,232,1010]);
