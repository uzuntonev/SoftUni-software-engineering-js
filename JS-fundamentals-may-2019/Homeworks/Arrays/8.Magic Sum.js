function solve(arr, sum) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let result = Number(arr[i]) + Number(arr[j]);
            if (result === sum) {
                console.log(`${arr[i]} ${arr[j]}`)
            }
        }
    }
}

solve([1, 7, 6, 2, 19, 23],
    8
    );