function solve(input) {
    let list = input.shift().split(' ');
    for (const line of input) {
        let [command, name, index] = line.split(' ');
        index = Number(index);
        if (command === 'Join' && !list.includes(name)) {
            list.push(name);
        } else if (command == 'Jump' && index >= 0 && index < list.length) {
            list.splice(index, 0, name);
        } else if (command === 'Dive' && Number(name) >= 0 && Number(name) < list.length) {
            name = Number(name);
            list.splice(name, 1);
        } else if (command === 'First') {
            name = Number(name);
            let result = list.slice(0, name);
            console.log(result.join(' '))
        } else if (command === 'Last') {
            let result = list.reverse()
                .slice(0, name);
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


// solve([
//     'Blake Muggy Kishko',
//     'Join Kvachko',
//     'Dive 0',
//     'First 10',
//     'Print Reversed']);

    solve([ 'A B C D E F',
    'Join G',
    'Jump Q 3',
    'Last 3',
    'Dive 2',
    'Print Normal' ]
  )