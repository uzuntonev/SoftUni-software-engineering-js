function solve(input) {
    const methods = {
        counter: 1,
        add: 'push',
        remove: 'pop',
    };
    return input.reduce((acc, curr) => {
        acc[methods[curr]](methods.counter++);
        return acc;
    }, [])
        .join('\n') || 'Empty'; 
}

function solve2(input) {
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

// console.log(solve([
//     'add',
//     'add',
//     'add',
//     'add' ]));

// solve([ 'add', 
//     'add', 
//     'remove', 
//     'add', 
//     'add' ]);

console.log(solve([
    'remove',
    'remove',
    'remove' ]));
