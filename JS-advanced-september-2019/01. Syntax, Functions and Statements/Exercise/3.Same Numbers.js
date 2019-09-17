function solve(input) {
    const str = input.toString();
    let isEqual = true;
    for (let i = 0; i < str.length; i++) {
        if ((str[i] !== str[i + 1]) && str[i] !== str[str.length - 1]) {
            isEqual = false;
            break;
        }
    }
    console.log(isEqual);
    console.log(str.split('').reduce((a, b) => +a + +b , 0)); 
}

solve(2222222);
