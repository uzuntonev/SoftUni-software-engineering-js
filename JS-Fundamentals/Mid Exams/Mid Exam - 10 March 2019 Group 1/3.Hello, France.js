function solve(input) {
    let budget = Number(input.pop());
    const list = input.shift().split('|');
    const listWithNewPrice = [];
    let sum = 0;
    for (let line of list) {
        let [item, price] = line.split('->');
        price = Number(price);
        if(budget < price){
            continue;
        }
        if (item === 'Clothes' && price <= 50) {
            if (budget >= price) {
                budget -= price;
                sum += price
                listWithNewPrice.push((price * 1.4).toFixed(2))
            }
        } else if (item === 'Shoes' && price <= 35) {
            if (budget >= price) {
                budget -= price;
                sum += price
                listWithNewPrice.push((price * 1.4).toFixed(2))
            }
        } else if (item === 'Accessories' && price <= 20.5) {
            if (budget >= price) {
                budget -= price;
                sum += price
                listWithNewPrice.push((price * 1.4).toFixed(2))
            }
        }
    }
    let profit = listWithNewPrice.map(Number).reduce((a, b) => a + b) - sum;

    console.log(listWithNewPrice.join(' '));
    console.log(`Profit: ${profit.toFixed(2)}`);
    
    let newBudget = budget + listWithNewPrice.map(Number).reduce((a, b) => a + b);
    if (newBudget >= 150) {
        console.log(`Hello, France!`);
    } else {
        console.log(`Time to go.`)
    }
}

solve(['Clothes->43.30|Shoes->25.25|Clothes->36.52|Clothes->20.90|Accessories->15.60',
    '120']);
// solve(['Shoes->41.20|Clothes->20.30|Accessories->40|Shoes->15.60|Shoes->33.30|Clothes->48.60',
//     '90'
// ]);