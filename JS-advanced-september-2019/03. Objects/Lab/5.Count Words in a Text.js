function solve(input) {
    const pattern = /\w+/g;
    const words = input[0].match(pattern);
    const obj = {};
    for (const element of words) {
        if (!(element in obj)) {
            obj[element] = 1;
        }else {
            obj[element]++
        }
    }
    console.log(JSON.stringify(obj)) 
}



solve(["Far too slow, you're far too slow."]);