function solve(arr) {
    let newArr = [];
    let lastNumIsBigges = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(Math.max(...arr)) == arr.length - 1) {
            newArr.push(arr[arr.length - 1]);
            lastNumIsBigges = true;
            break;
        }
        if (arr[i] > arr[i + 1]) {
            newArr.push(arr[i]);
        }

    }
    if(!lastNumIsBigges){
        newArr.push(arr.pop())
    }
    console.log(newArr.join(' '))
}

solve([27, 19, 42, 2, 13, 45, 48]);