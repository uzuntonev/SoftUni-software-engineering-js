function solve(input) {
    input.pop()
    let list = input.shift().split('&');
    for (let line of input) {
        let [command, name, newName] = line.split(' ');

        if (command === 'Bad' && !list.includes(name)) {
                list.unshift(name);
        } else if (command === 'Good' && list.includes(name)) {
                let index = list.indexOf(name);
                list.splice(index, 1);
        } else if (command === 'Rename' && list.includes(name)) {
                let index = list.indexOf(name);
                list[index] = newName;
        } else if (command === 'Rearrange' && list.includes(name)) {
                let index = list.indexOf(name);
                list.splice(index, 1);
                list.push(name);
        }
    }
    console.log(list.join(', '))
}

solve(['Joshua&Aaron&Walt&Dustin&William',
    'Good Walt',
    'Bad Jon',
    'Rename Aaron Paul',
    'Rearrange Jon',
    'Rename Peter George',
    'Finished!'

]);