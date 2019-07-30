function solve(input) {
    let string = input.shift();
    let [lookingChar, newChar] = input.shift().split(' ');
    const pattern = /^[d-z{}|#]+$/g;

    function decryptString(string) {
        let result = '';
        for (const char of string) {

            result += String.fromCharCode(char.charCodeAt(0) - 3);
        }
        return result;
    }

    function replaceChars(string, lookingChar, newChar) {
        return string.replace(new RegExp(lookingChar, 'g'), newChar);
    }
    if (string.match(pattern)){
        const output = replaceChars(decryptString(string), lookingChar, newChar);
        console.log(output);
    }else{
        console.log(`This is not the book you are looking for.`)
    }    
}

// solve([
//     'wkhfn#|rx#jhqfkr#phf#exw#|rxu#uholf#lv#khfgohg#lq#hfrwkhu#sohfhw',
//     'ec an']
// );
solve([
    'arx#vkdww#qrw#sdvv',
    't l']
)