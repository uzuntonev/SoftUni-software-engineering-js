function solve(n, k) {
    const arr = [ 1 ];
    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = 0; j < k; j++) {
            const current = arr[arr.length - 1 - j];
            current !== undefined 
                ? sum += current 
                : void(0);
        }
        arr.push(sum);
    }
    arr.pop();
    console.log(arr.join(' ')); 
}
solve(6, 3);
