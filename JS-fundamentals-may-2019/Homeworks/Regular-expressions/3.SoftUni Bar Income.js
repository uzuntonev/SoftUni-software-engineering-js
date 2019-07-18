function solve(input) {
    const pattern = /\%[A-Z][a-z]+\%([^\|$%\.]*)\<[A-Za-z]+\>([^\|$%\.]*)\|[0-9]+\|([^\|$%\.]*)[0-9\.]+\$/g;
    let total = 0;
    for (const line of input) {
        if (line === 'end of shift') {
            break;
        }
        if (line.match(pattern)) {
            const patternName = /%[A-Z][a-z]+%/g;
            const patternItem = /<[A-Za-z]+>/g;
            const patternQuantity = /\|[0-9]+\|/g;
            const patternPrice = /[0-9\.]+\$/g;
            const name = line
                .match(patternName)[0]
                .split('%')
                .filter(e => e.length)[0];
            const item = line
                .match(patternItem)[0]
                .split(/[<>]/g)
                .filter(e => e.length)[0];
            const qunatity = Number(line
                .match(patternQuantity)[0]
                .split('|')
                .filter(e => e.length)[0]);
            const price = Number(line
                .match(patternPrice)[0]
                .split('$')
                .filter(e => e.length)[0]);
            total += qunatity * price;
            console.log(`${name}: ${item} - ${(price * qunatity).toFixed(2)}`)
        }
    }
    console.log(`Total income: ${total.toFixed(2)}`)
}

solve([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']
);
solve([
    '%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>vali42d|10|val424id20$',
    'end of shift']
);