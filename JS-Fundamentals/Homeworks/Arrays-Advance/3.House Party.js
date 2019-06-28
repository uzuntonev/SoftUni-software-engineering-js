function solve(input) {
    let list = [];
    // let pattern = /\b(\w*not going\w*)\b/
    for (let i = 0; i < input.length; i++) {
        let splitedInput = input[i].split(' is ');
        let name = splitedInput[0];
        let command = splitedInput[1];

        if (command == 'going!') {
            if (!list.includes(name)) {
                list.push(name);
            }else{
                console.log(`${name} is already in the list!`)
            }

        } else {
            if (list.includes(name)) {
                let index = list.indexOf(name);
                list.splice(index, 1);
            }else{
                console.log(`${name} is not in the list!`)
            }
        }
    }
    console.log(list.join('\n'))
}

solve(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']

);