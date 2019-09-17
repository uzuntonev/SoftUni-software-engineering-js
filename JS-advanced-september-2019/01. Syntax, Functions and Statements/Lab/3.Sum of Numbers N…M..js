function solve(n, m) {
    const first = Number(n);
    const second = Number(m);
    let result = 0;

    for (let i = first; i <= second; i++) {
        result += i;
    }
    console.log(result); 
}

solve('-8', '20');


function sum(n, m) {
    if (n === m) {
        return m;
    } 
    return n + sum(n + 1, m);
}


console.log(sum(1, 3));
