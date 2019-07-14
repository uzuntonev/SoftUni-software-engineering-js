function solve(input) {
    const list = input.shift().split(' ');
    for (const line of input) {
        let [command, firstWordOrIndex, secondWordOrIndex] = line.split(' ');
        if (command === 'Stop') {
            break;
        }
        if (command === 'Delete' && firstWordOrIndex >= 0 && Number(firstWordOrIndex) + 1 < list.length ) {
            firstWordOrIndex = Number(firstWordOrIndex)
            list.splice(firstWordOrIndex + 1, 1);
        } else if (command === 'Swap' && list.includes(firstWordOrIndex) && list.includes(secondWordOrIndex)) {
            let firstIndex = list.indexOf(firstWordOrIndex);
            let secondIndex = list.indexOf(secondWordOrIndex);
            list[firstIndex] = secondWordOrIndex;
            list[secondIndex] = firstWordOrIndex;
        } else if (command === 'Put' && Number(secondWordOrIndex) - 1 >= 0 && secondWordOrIndex <= list.length + 1) {
            secondWordOrIndex = Number(secondWordOrIndex);
            list.splice(secondWordOrIndex - 1, 0, firstWordOrIndex);
        } else if (command === 'Sort') {
            list.sort()
            list.reverse()
        } else if (command === 'Replace' && list.includes(secondWordOrIndex)) {
            let secondIndex = list.indexOf(secondWordOrIndex);
            list[secondIndex] = firstWordOrIndex;
        }
    }
    console.log(list.join(' '))
}

solve([
    'Congratulations! You last also through the have challenge!',
    'Swap have last',
    'Replace made have',
    'Delete 2',
    'Put it 4',
    'Stop',
    '']);
    solve(['This the my quest! final',
        'Put is 2',
        'Swap final quest!',
        'Delete 2',
        'Stop',
        ])