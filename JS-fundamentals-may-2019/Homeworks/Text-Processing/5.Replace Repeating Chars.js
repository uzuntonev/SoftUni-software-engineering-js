function solve(input) {
    let arr = input.split('');
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i - 1] != arr[i]){
            result.push(arr[i])
        }
        
    }
    console.log(result.join(''))
}

solve('aaaaabbbbbcdddeeeedssaa');