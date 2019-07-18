function solve(input) {
    let sum = 0;
    console.log(`Bought furniture:`)

    for (const line of input) {
        if (line === 'Purchase') {
            break;
        }

        const pattern = />>(?<name>.*)<<(?<price>[0-9]+|[0-9]+\.[0-9]+)!(?<quantity>[0-9]{1,})/gi
        if (line.match(pattern)) {
            // const [furniture, price, quntity] = line.split(/[>><<!]/g).filter(e => e.length);
            let list = pattern.exec(line);

            sum += list.groups.price * list.groups.quantity
            console.log(`${list.groups.name}`)

        }
    }
    console.log(`Total money spend: ${sum.toFixed(2)}`)

}

solve(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase']
);



// furn = (arr) => {
//     arr.pop()
//     let total = 0

//     let regex = />>(?<name>.*)<<(?<price>[0-9]+|[0-9]+\.[0-9]+)!(?<quantity>[0-9]{1,})/gi
//     console.log(`Bought furniture:`)
//     arr.forEach(element => {
//         if (element.match(regex)) {

//             let obj = regex.exec(element)

//             let price = obj.groups.price;
//             let quantity = obj.groups.quantity;
//             total += quantity * price
//             console.log(obj.groups.name)
//         }
//     });
//     console.log(`Total money spend: ${total.toFixed(2)}`)
// }
// furn(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase'])