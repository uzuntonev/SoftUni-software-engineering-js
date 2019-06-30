function solve(input) {
    input.pop();
    let list = input.shift()
        .split(' ')
        .map(Number);

    for (const line of input) {
        let [command, index, time] = line.split(' ');
        index = Number(index);
        time = Number(time);
        if (command === 'Complete' && index >= 0 && index < list.length) {
            list[index] = 0;
        } else if (command === 'Change' && index >= 0 && index < list.length) {
            list[index] = time;
        } else if (command === 'Drop' && index >= 0 && index <= list.length) {
            list[index] = -1;
        } else if (line === 'Count Completed') {
            let completed = list.filter(e => e == 0);
            console.log(completed.length)
        } else if (line === 'Count Incomplete') {
            let incomplete = list.filter(e => e > 0);
            console.log(incomplete.length)
        } else if (line === 'Count Dropped') {
            let dropped = list.filter(e => e < 0);
            console.log(dropped.length)
        }
    }
    let result = list.filter(e => e > 0);
    console.log(result.join(' '))
}

// solve(['1 -1 2 3 4 5',
//     'Complete 4',
//     'Change 0 4',
//     'Drop 3',
//     'Count Dropped',
//     'End']);
solve([ '1 2 3 4 5 4 0 3 2 1',
'Complete 0',
'Complete 1',
'Complete 2',
'Drop 3',
'Change 4 1',
'Count Completed',
'End' ]
)