function solve(input) {
    input.pop();
    let list = input.shift().split(', ');
   
    for (let line of input) {
        let [command, quest] = line.split(' - ');
        if (command === 'Start' && !list.includes(quest)) {
            list.push(quest);
        } else if (command === 'Complete' && list.includes(quest)) {
            let index = list.indexOf(quest);
            list.splice(index, 1);
        } else if (command === 'Side Quest') {
            let sideQuest = quest.split(':');
            quest = sideQuest[0];
            sideQuest = sideQuest[1];
            if (list.includes(quest) && !list.includes(sideQuest)) {
                let index = list.indexOf(quest);
                list.splice(index + 1, 0, `${sideQuest}`);
            }
        } else if (command === 'Renew' && list.includes(quest)) {
            let index = list.indexOf(quest);
            list.push(list[index]);
            list.splice(index, 1);
        }
    }
    console.log(list.join(', '))
}

solve(['Hello World, For loop, If else',
    'Start - While loop',
    'Complete - For loop',
    'Retire!']);
    solve(['Hello World, If else',
        'Complete - Homework',
        'Side Quest - If else:Switch',
        'Renew - Hello World',
        'Retire!'
        ])