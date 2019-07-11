function solve(input) {
    let firstStr = input.shift();
    let secondStr = input.shift();
    let word = input.shift();
    let output = firstStr + secondStr;
    let arrOfOutputLetters = output.split('');
    let arrOfWordLetters = word.split('');
    let vowelsLetters = ['a', 'e', 'i', 'o', 'u'];
    let a = arrOfOutputLetters
    let index = 0;
    for (let i = 0; i < arrOfOutputLetters.length; i++) {

        if (vowelsLetters.includes(arrOfOutputLetters[i])) {

            arrOfOutputLetters[i] = arrOfWordLetters[index].toUpperCase();

            index++;

            if (index >= arrOfWordLetters.length) {
                index = 0;

            }
        }
    }
    let password = arrOfOutputLetters.reverse().join('')
    console.log(`Your generated password is ${password}`)

}
solve([
    'ilovepizza', 'ihatevegetables',
    'orange'
]
);
solve([
    'easymoneyeazylife', 'atleasttencharacters', 'absolute'
]

);
solve([
    'areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed'
]
)