function solve(input) {
    let arr = input
        .split(' ')
        .filter(el => el.length);
    let result = 0;
    let getNumber = (word) => {
        return match = word.match(new RegExp(/[0-9]+/, 'g'));
    }
    let calculateWordSum = (word) => {
        let number = Number(getNumber(word));
        word = word
            .replace(new RegExp(/[0-9]+/, 'g'), '')
        let sum = 0;

        let firstLetter = word[0];
        let secondLetter = word[1];

        if (firstLetter == firstLetter.toUpperCase()) {
            sum += number / (firstLetter.charCodeAt() - 64);
        } else if (firstLetter == firstLetter.toLowerCase()) {
            sum += number * (firstLetter.charCodeAt() - 96);
        }
        if (secondLetter == secondLetter.toUpperCase()) {
            sum -= (secondLetter.charCodeAt() - 64);
        } else if (secondLetter == secondLetter.toLowerCase()) {
            sum += (secondLetter.charCodeAt() - 96);
        }

        return sum;
    }

    for (let i = 0; i < arr.length; i++) {
        result += calculateWordSum(arr[i]);
    }
    console.log(result.toFixed(2))
}

solve('A12b s17G');
solve('a1A');
solve('P34562Z q2576f   H456z');