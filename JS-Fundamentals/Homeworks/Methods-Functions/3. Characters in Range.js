function solve(firstChar, secondChar) {
    let output = (a, b) => {
        let arr = [];
        if (firstChar.charCodeAt() < secondChar.charCodeAt()) {
            for (let i = firstChar.charCodeAt() + 1; i < secondChar.charCodeAt(); i++) {
                arr.push(String.fromCharCode(i));
            }
        } else {
            for (let i = firstChar.charCodeAt() - 1; i > secondChar.charCodeAt(); i--) {
                arr.push(String.fromCharCode(i));

            }
            arr.reverse();
        }
        return arr.join(' ');
    }
console.log(output(firstChar,secondChar))
}

solve('C',
    '#'

);