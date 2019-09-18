function solve() {
    const recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
    };

    const store = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    };


    return function processing(...params) {
        let output = '';
        for (const line of params) {
            let [ command, item, quantity ] = line.split(' ');
            quantity = Number(quantity);
            if (command === 'restock') {
                store[item] += quantity;
                output = 'Success';
            }
            if (command === 'prepare') {
                // if .find() return value in missingProduct variable is truthy !
                const currentRecipe = recipes[item];
                const missingProduct = Object.entries(currentRecipe)
                    .find(([ product, requiredQuantity ]) => store[product] < requiredQuantity * quantity);
                if (missingProduct) {
                    output = `Error: not enough ${missingProduct[0]} in stock`;
                } else {
                    output = 'Success';
                    for (const key in currentRecipe) {
                        if (store.hasOwnProperty(key)) {
                            store[key] -= currentRecipe[key] * quantity;
                        }
                    }
                }
            }
            if (command === 'report') {
                output = Object.entries(store)
                    .map(tupel => tupel.join('='))
                    .join(' ');
            }
        }
        console.log(output);
        return output;
    };
}

const manager = solve();

console.log(manager(
    'restock carbohydrate 10',
    'restock flavour 10',
    'prepare apple 1',
    'restock fat 10',
    'prepare burger 1',
    'report',
));

// solve(
//     'prepare turkey 1',
//     'restock protein 10',
//     'prepare turkey 1',
//     'restock carbohydrate 10',
//     'prepare turkey 1',
//     'restock fat 10',
//     'prepare turkey 1',
//     'restock flavour 10',
//     'prepare turkey 1',
//     'report',
// );
