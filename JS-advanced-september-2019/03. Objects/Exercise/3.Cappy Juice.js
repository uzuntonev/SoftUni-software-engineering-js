function solve(input) {
    const obj = {};
    const output = {};
    for (const line of input) {
        let [ juice, quanity ] = line.split(' => ');
        quanity = Number(quanity);
        if (!(juice in obj)) {
            obj[juice] = quanity;
        } else {
            obj[juice] += quanity;
        }
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (obj[key] >= 1000) {
                    output[key] = parseInt(obj[key] / 1000);
                }
            }
        }
    }

    Object.entries(output).forEach(e => console.log(`${e[0]} => ${parseInt(e[1])}`));
}

// solve([
//     'Orange => 2000',
//     'Peach => 1432',
//     'Banana => 450',
//     'Peach => 600',
//     'Strawberry => 549']);

solve([ 'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789' ]);
