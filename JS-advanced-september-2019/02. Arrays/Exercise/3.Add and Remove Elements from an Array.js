function solve(input) {
    let init = 0;
    const arr = [];

    const methods = {
        add(){
            arr.push(++init);
        },
        remove(){
            init++;
            arr.pop();
        },
    };
    input.forEach(e => {
        methods[e]();
    });

    return arr.length > 0 
        ? arr.join('\n')
        : 'Empty';
}

console.log(solve([
    'add',
    'add',
    'add',
    'add' ]));

// solve([ 'add', 
//     'add', 
//     'remove', 
//     'add', 
//     'add' ]);

solve([
    'remove',
    'remove',
    'remove' ]);
