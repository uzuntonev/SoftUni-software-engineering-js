function solve(input) {
    let [k, ...array] = input;

    const firstK = array.slice(0, k)
    const lastK = array.slice(array.length - k)
    console.log(firstK) 
    console.log(lastK) 
}

solve([2, 7, 8, 9]);
solve([3,
    6, 7, 8, 9]
   )