function solve(input) {
    function sum(arr) {
        return arr.reduce((a, b) => a + b, 0);
    }

    function inverse(arr) {
        let result = 0;
        for (const element of arr) {
            result += 1 / element;
        }

        return result;
    }

    function concat(arr) {
        return arr.join('');
    }

    console.log(sum(input));
    console.log(inverse(input));
    console.log(concat(input));
}

// solve([ 2, 4, 8, 16 ]);


function aggregator(arr, initVal, func) {
    let result = initVal;
    for (let i = 0; i < arr.length; i++) {
        result = func(result, arr[i]);
    }
    
    return result;
}

console.log(aggregator([ 1, 2, 3, 4 ], 0, (a, b) => a * b, 0)); 
