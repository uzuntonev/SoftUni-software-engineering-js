// function solve(arr) {
// let a = [...new Set(arr)]
//         console.log(a.join(' '))
// }

function solve(input) {
    let newArr = input.filter((value, index) => {
        return input.indexOf(value) === index;
    });
   
    console.log(newArr.join(' '))
}


solve([7, 8, 9, 7, 2, 3, 4, 1, 2]);