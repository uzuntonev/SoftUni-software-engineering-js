function solve(arr) {
    const list = arr.shift().split(' ').map(Number);
    while (true) {
        let [command, paitingNum, changedNum] = arr.shift(' ').split(' ');
        if (command === 'END') {
            break;
        }
        paitingNum = Number(paitingNum);
        changedNum = Number(changedNum);
        if (command === 'Change') {
            if (list.includes(paitingNum)) {
                const index = list.indexOf(paitingNum);
                list[index] = changedNum;
            }
        } else if (command === 'Hide') {
            if (list.includes(paitingNum)) {
                const index = list.indexOf(paitingNum);
                list.splice(index, 1);
            }
        } else if (command === 'Switch') {
            if (list.includes(paitingNum) && list.includes(changedNum)) {
                let firstIndex = list.indexOf(paitingNum);
                let secondIndex = list.indexOf(changedNum);
                let temp = list[firstIndex];
                list[firstIndex] = list[secondIndex];
                list[secondIndex] = temp;
            }
        }else if (command === 'Insert'){
            if (paitingNum < list.length && paitingNum >= 0){
                list.splice(paitingNum + 1, 0, changedNum);
            }
        }else if (command === 'Reverse'){
            list.reverse();
        }
    }
    console.log(list.join(' '))
}

solve(['115 115 101 114 73 111 116 75',
    'Insert 5 114',
    'Switch 116 73',
    'Hide 75',
    'Reverse ',
    'Change 73 70',
    'Insert 10 85',
    'END']
);
solve(['77 120 115 101 101 97 78 88 112 111 108 101 111 110',
    'Insert 5 32',
    'Switch 97 78',
    'Hide 88',
    'Change 120 117',
    'END'
    ]);