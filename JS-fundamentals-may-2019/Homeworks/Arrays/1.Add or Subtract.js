function solve(arr) {
    let newArr = [];
    let sumFirstArr = 0;
    let sumSecondArr = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            newArr.push(arr[i] + i);
        } else {
            newArr.push(arr[i] - i);
        }
    }
    arr.forEach(e => {
        sumFirstArr += Number(e)
    });
    newArr.forEach(e => {
        sumSecondArr += Number(e)
    });
    
    console.log(newArr);
    console.log(sumFirstArr);
    console.log(sumSecondArr);
}

solve([5, 15, 23, 56, 35]);