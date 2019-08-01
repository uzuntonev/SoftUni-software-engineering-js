function solve(input) {
    let total = 0;
    function printValidLine(line) {
        const pattern = /^%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>[0-9]+)\|([^|$%.0-9]*)(?<price>[0-9.]+)\$$/g;
        const matched = pattern.exec(line)
        if (matched) {
            const name = matched.groups.name;
            const product = matched.groups.product;
            const count = Number(matched.groups.count);
            const price = Number(matched.groups.price);
            const totalPrice = count * price;
            console.log(`${name}: ${product} - ${totalPrice.toFixed(2)}`)
            total += totalPrice;
        }
    }
    for (const line of input) {
        if (line === 'end of shift') {
            break;
        }
        printValidLine(line)
    }

    console.log(`Total income: ${total.toFixed(2)}`)
}

solve([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']
);
// solve([
//     '%InvalidName%<Croissant>|2|10.3$',
//     '%Peter%<Gum>1.3$',
//     '%Maria%<Cola>|1|2.4',
//     '%Valid%<Valid>valid|10|valid20$',
//     'end of shift'])
