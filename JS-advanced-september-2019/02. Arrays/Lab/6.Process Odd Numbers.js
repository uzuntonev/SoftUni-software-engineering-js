function solve(input) {
    return input.reduce((acc, curr, i, arr) => {
        i % 2 !== 0 
            ? acc.push(curr * 2) 
            : void(0);
        return acc;
    }, [])
        .reverse()
        .join(' ');
}

console.log(solve([ 3, 0, 10, 4, 7, 3 ]));
