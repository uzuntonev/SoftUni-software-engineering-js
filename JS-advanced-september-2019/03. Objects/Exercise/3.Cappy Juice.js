function solve(input) {
    const obj = {};
    const bottles = {};
    const makeBottle = (data) => data >= 1000 ? Math.trunc(data / 1000) : void (0);

    for (const line of input) {
        let [ juice, quantity ] = line.split(' => ');
        quantity = Number(quantity);
        if (!(juice in obj)) {
            obj[juice] = quantity;
        } else {
            obj[juice] += quantity;
        }
        if (obj[juice] >= 1000) {
            bottles[juice] = makeBottle(obj[juice]);
        }
    }
    for (const bottle in bottles) {
        if (bottles.hasOwnProperty(bottle)) {
            console.log(`${bottle} => ${bottles[bottle]}`); 
        }
    }
}

// solve([
//     'Orange => 2000',
//     'Peach => 1432',
//     'Banana => 450',
//     'Peach => 600',
//     'Strawberry => 549' ]);

solve([ 'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789' ]);
