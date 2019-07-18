function solve(input) {
    const arrOfDict = input.shift().split(' | ');
    const arrOfWord = input.shift().split(' | ')
    const dictionary = {};
    const command = input.shift();

    for (const line of arrOfDict) {
        const [key, value] = line.split(': ');
        if (!(key in dictionary)) {
            dictionary[key] = [value]

        } else {
            dictionary[key].push(value)
        }
    }
    if (command === 'End') {
        for (const word of arrOfWord) {
            if (word in dictionary) {
                console.log(word)
                console.log(` -${dictionary[word].sort((a, b) => b.length - a.length).join('\n -')}`)
            }
        }
    }else {
        console.log(`${Object.keys(dictionary).sort().join(' ')}`)
    }
}

solve([
    'programmer: an animal, which turns coffee into code | developer: a magician',
    'Pesho | Gosho',
    'List']
);
solve([
    'tackle: the equipment required for a task or sport | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle: make determined efforts to deal with a problem | bit: a short time or distance',
    'bit | code | tackle',
    'List'])
