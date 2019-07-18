function solve(input) {
    const pattern = /^[d-z\{\|\}\#]+$/g;
    const text = input.shift()
    const [first, second] = input.shift().split(' ');
    if (text.match(pattern)) {
        const string = text
            .split('')
            .map(e => String.fromCharCode(e.charCodeAt() - 3))
            .join('');
        const result = string.replace(new RegExp(first, 'g'), second);
        console.log(result);
    } else {
        console.log(`This is not the book you are looking for.`)
    }
}

solve([
    'wkhfn#|rx#jhqfkr#phf#exw#|rxu#uholf#lv#khfgohg#lq#hfrwkhu#sohfhw',
    'ec an']
);
solve(['arx#vkdww#qrw#sdvv', 't l']
)