// function solve(wordsSearching, sentance) {
//     let arrSentance = sentance.split(' ');
//     let arr = wordsSearching.split(', ');
//     let result = sentance;
//     for (const word of arrSentance) {
//         let searchingWord = word;
//         if (searchingWord[0] === '*') {
//             let wordLength = searchingWord.length;
//             for (const line of arr) {
//                 if (wordLength === line.length) {
//                     result = result.replace(searchingWord, line)
//                 }
//             }
//         }
//     }
//     console.log(result)
// }

function solve(words, sentance) {
    let pattern = /\*+/g;
    let match = sentance.match(pattern);
    let output = sentance;
    let arrOfwords = words.split(', ')
    for (const line of match) {
        for (const word of arrOfwords) {
            if (line.length === word.length) {
                output = output.replace(line, word);
            }
        }
    }
    console.log(output)
}


solve('great',
    'softuni is ***** place for learning new programming languages'
);
solve('great, learning',
    'softuni is ***** place for ******** new programming languages'
)