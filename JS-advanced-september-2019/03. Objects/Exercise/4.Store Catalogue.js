function solve(input) {
    const obj = {};
    const set = new Set();
    for (const line of input) {
        const [ product, price ] = line.split(' : ');
        obj[product] = price;
    }
    const sorted = Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]));
    for (const line of sorted) {
        set.add(line[0][0]);
    }

    const letters = [ ...set ];
    for (const letter of letters) {
        console.log(letter);
        for (const [ product, price ] of sorted) {
            if(product[0] === letter){
                console.log(` ${product}: ${price}`); 
            }
        } 
    }
    // console.log(sorted) 
    // console.log(set) 
}

solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10' ]);
