function solve(input) {
    let sum = 0;
    console.log(`Bought furniture:`)

    for (const line of input) {
        if (line === 'Purchase') {
            break;
        }

        const pattern = />>(?<name>[A-Za-z]+)<<(?<price>[0-9\.]+)!(?<quantity>[0-9]{1,})/gi
        if (line.match(pattern)) {
            // const [furniture, price, quntity] = line.split(/[>><<!]/g).filter(e => e.length);
            const list = pattern.exec(line);

            sum += list.groups.price * list.groups.quantity
            console.log(`${list.groups.name}`)

        }
    }
    console.log(`Total money spend: ${sum.toFixed(2)}`)
}

solve(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase']
);
