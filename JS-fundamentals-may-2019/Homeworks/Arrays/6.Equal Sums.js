function solve(arr) {
    let currentIndex = -1;
    for (let i = 0; i < arr.length; i++) {
        let leftSum = 0;
        let rightSum = 0;

        for (let j = i - 1; j >= 0; j--) {
            leftSum += Number(arr[j]);
        }
        for (let j = i + 1; j < arr.length; j++) {
            rightSum += Number(arr[j]);
        }

        if (rightSum == leftSum) {
            currentIndex = i;
        }

    }
    console.log(currentIndex != -1 ? currentIndex : 'no')
}

solve([1,2]);