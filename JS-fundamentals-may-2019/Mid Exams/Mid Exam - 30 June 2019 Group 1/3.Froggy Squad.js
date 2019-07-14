function solve(input) {
    let list = input.shift().split(' ');
    for (const line of input) {
        let [command, nameOrIndex, index] = line.split(' ');
        index = Number(index);
        if (command === 'Join' && !list.includes(nameOrIndex)) {
            list.push(nameOrIndex);
        } else if (command == 'Jump' && index >= 0 && index < list.length) {
            list.splice(index, 0, nameOrIndex);
        } else if (command === 'Dive' && Number(nameOrIndex) >= 0 && Number(nameOrIndex) < list.length) {
            list.splice(nameOrIndex, 1);
        } else if (command === 'First') {
            let count = Number(nameOrIndex);
            let result = list.slice(0, count);
            console.log(result.join(' '))
        } else if (command === 'Last') {
            let count = Number(nameOrIndex)
            let result = list.reverse()
                             .slice(0, count);
            result.reverse();
            list.reverse();
            console.log(result.join(' '));
        } else if (line === 'Print Reversed') {
            list.reverse();
            console.log(`Frogs: ${list.join(' ')}`);
        } else if (line === 'Print Normal')
            console.log(`Frogs: ${list.join(' ')}`);
    }
}


solve([
    'Blake Muggy Kishko',
    'Join Kvachko',
    'Dive 0',
    'First 10',
    'Print Reversed']);

//     solve([ 'A B C D E F',
//     'Join G',
//     'Jump Q 3',
//     'Last 3',
//     'Dive 2',
//     'Print Normal' ]
//   )