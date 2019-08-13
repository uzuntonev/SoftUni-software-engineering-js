function solve(input) {
    let text = input.shift();

    const change = (char, replancement) => {
        text = text.replace(new RegExp(char, 'g'), replancement);
        console.log(text)
    }

    const includes = (string) => {
        if (text.includes(string)) {
            console.log('True')
        } else {
            console.log('False')
        }
    }

    const end = (string) => {
        if (text.endsWith(string)) {
            console.log('True')
        } else {
            console.log('False')
        }
    }

    const uppercase = () => {
        text = text.toUpperCase()
        console.log(text)
    }

    const findIndex = (char) => {
        let index = text.indexOf(char);
        console.log(index)
    }

    const cut = (start, length) => {
        let substring = text.substr(start, length);
        console.log(substring);
    }

    for (const line of input) {
        if (line === 'Done') {
            break;
        }
        let [command, firstParam, secondParam] = line.split(' ');
        if (command === 'Change') {
            change(firstParam, secondParam);
        } else if (command === 'Includes') {
            includes(firstParam);
        } else if (command === 'End') {
            end(firstParam);
        } else if (command === 'Uppercase') {
            uppercase();
        } else if (command === 'FindIndex') {
            findIndex(firstParam);
        } else if (command === 'Cut') {
            cut(firstParam, secondParam)
        }
    }
}

solve([
    '//Th1s 1s my str1ng!//',
    'Change 1 i',
    'Includes string',
    'End my',
    'Uppercase',
    'FindIndex I',
    'Cut 5 5',
    'Done']
);