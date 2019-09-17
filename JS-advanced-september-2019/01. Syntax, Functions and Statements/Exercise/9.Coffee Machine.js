function solve(input) {
    let totalIncome = 0;

    function calcPrice(arr) {
        let price = 0;
        const typeDrink = arr[0];
        if (typeDrink === 'coffee') {
            if (arr[1] === 'caffeine') {
                price += 0.8;
            } else {
                price += 0.9;
            }
            if (Number(arr.pop()) !== 0) {
                price += 0.1;
            }
        } else if (typeDrink === 'tea') {
            price += 0.8;
            if (Number(arr.pop()) !== 0) {
                price += 0.1;
            }
        }
        if (arr.includes('milk')) {
            price += Number((price * 0.1).toFixed(1));
        }
        return price;
    }

    function isEnoughMoney(inserted, needed) {
        if (inserted >= needed) {
            return {
                isEnough: true,
                change: Number((inserted - needed).toFixed(2)),
                price: needed,
            };
        }
        return {
            isEnough: false,
            change: Number(Math.abs(inserted - needed).toFixed(2)),
            price: needed,
        };

    }

    for (const line of input) {
        const arr = line.split(', ');
        const insertCoins = Number(arr.shift());
        const drink = arr[0];

        const output = isEnoughMoney(insertCoins, calcPrice(arr));

        if (output.isEnough) {
            totalIncome += output.price;
            console.log(`You ordered ${drink}. Price: $${output.price.toFixed(2)} Change: $${output.change.toFixed(2)}`);
        }else {
            console.log(`Not enough money for ${drink}. Need $${output.change.toFixed(2)} more.`);
        }
    }

    console.log(`Income Report: $${totalIncome.toFixed(2)}`);
}

solve([
    '1.00, coffee, caffeine, milk, 4',
    '0.40, tea, milk, 2',
    '1.00, coffee, decaf, 0' ]);
// solve([
//     '8.00, coffee, decaf, 4',
//     '1.00, tea, 2'])
