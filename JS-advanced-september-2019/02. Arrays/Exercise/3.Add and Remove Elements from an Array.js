function solve(input) {
    let init = 0;
    let arr = [];

    const add = () => {
        arr.push(++init)
    }

    const remove = () => {
        init++
        arr.pop()
    }

    for (const element of input) {
        if (element == 'add') {
            add()
        } else if (element == 'remove') {
            remove()
        }
    }
    arr.length > 0 ? arr.forEach(e => console.log(e)) : console.log('Empty')
}

// solve([
//     'add',
//     'add',
//     'add',
//     'add']
// );

// solve(['add', 
// 'add', 
// 'remove', 
// 'add', 
// 'add']
// )

solve([
    'remove',
    'remove',
    'remove']);
