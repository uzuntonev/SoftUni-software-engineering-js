function solve(arr) {
    let seqMaxLenght = 0;
    let biggestElement = -1;
    for (let i = 0; i < arr.length; i++) {
        let currentEl = arr[i];
        let currentLenght = 1;
        for (let j = i + 1; j < arr.length; j++) {
            let nextEl = arr[j];
            if (currentEl != nextEl) {
                break;
            }
            currentLenght++
        }
        if (currentLenght > seqMaxLenght) {
            seqMaxLenght = currentLenght;
            biggestElement = arr[i];
        }
    }
    
    console.log(`${biggestElement} `.repeat(seqMaxLenght))

}

//solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
solve([0, 1, 1, 5, 2, 2, 6, 3, 3])