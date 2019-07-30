function solve(input) {
    const dictionary = {};
    const wordsAndDefinitions = input.shift().split(' | ');
    const wordsLookigFor = input.shift().split(' | ')
    const listOrEnd = input.shift();

    function makeDictionary(array) {
        for (const line of array) {
            const [word, definitions] = line.split(': ')
            if (!(word in dictionary)) {
                dictionary[word] = [definitions];
            } else {
                dictionary[word].push(definitions);
            }
        }
    }

    function checkWordsIsInDictionary(array) {
        array.forEach(word => {
            if (word in dictionary) {
                console.log(word);
                dictionary[word]
                    .sort((a, b) => b.length - a.length)
                    .forEach(e => console.log(` -${e}`));
            }
        })
    }

    function isListOrEnd(param) {
        if (param === 'List') {
            let output = Object.keys(dictionary)
                .sort((a, b) => a.localeCompare(b))
                .join(' ');
            console.log(output)
        } 
    }

    makeDictionary(wordsAndDefinitions);
    checkWordsIsInDictionary(wordsLookigFor);
    isListOrEnd(listOrEnd);
}

solve([
    'programmer: an animal, which turns coffee into code | developer: a magician',
    'Pesho | Gosho',
    'List']
);
// solve([
//     'tackle: the equipment required for a task or sport | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle: make determined efforts to deal with a problem | bit: a short time or distance',
//     'bit | code | tackle',
//     'End'])