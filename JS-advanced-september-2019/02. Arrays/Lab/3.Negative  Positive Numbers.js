function solve(input) {
    const methods = {
        true: 'push',
        false: 'unshift',
    };
    const output = [];
    input.forEach(e => {
        output[methods[e >= 0]](e);
    });
    return output;
}

console.log(solve([ 3, -2, 0, -1 ]));
