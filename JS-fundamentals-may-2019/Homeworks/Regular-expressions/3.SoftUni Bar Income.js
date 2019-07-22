function solve(input) {
    const pattern = /%(?<name>[A-Z][a-z]+)%[^\|$%\.]*<(?<item>[\w]+)>[^\|$%\.]*\|(?<quantity>[0-9]+)\|([^\d\|$%\.]*)(?<price>[0-9\.]+)\$/g;
    let total = 0;


    for (const line of input) {
        if (line === 'end of shift') {
            break;
        }
        if (line.match(pattern)) {
            let result = pattern.exec(line);
            const productsPrice = +result.groups.quantity * +result.groups.price
            total += productsPrice;
            console.log(`${result.groups.name}: ${result.groups.item} - ${productsPrice.toFixed(2)}`)
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
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift']
);