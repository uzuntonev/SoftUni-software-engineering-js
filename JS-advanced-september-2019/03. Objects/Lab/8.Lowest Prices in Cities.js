function solve(input) {
    const obj = {};
    for (const line of input) {
        let [ town, product, price ] = line.split(' | ');
        price = Number(price);

        if (!(product in obj)) {
            obj[product] = { [town]: price };
        } else {
            obj[product][town] = price;
        }
    }

    const products = Object.entries(obj);

    for (const [ key, value ] of products) {
        const lowest = Object.entries(value).sort((a, b) => a[1] - b[1])[0];
        console.log(`${key} -> ${lowest[1]} (${lowest[0]})`); 
    }
}


solve([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10' ]);
