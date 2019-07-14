function solve(word, sentance) {
    let arr = sentance
        .toLowerCase()
        .split(' ');
    let isBreak = true;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === word) {
            console.log(word);
            isBreak = false;
            break;
        }
    }
    if (isBreak) {
        console.log(`${word} not found!`)
    }
}

solve('javascript',
    'JavaScript is the best programming language'
);
solve('python',
    'JavaScript is the best programming language'
)