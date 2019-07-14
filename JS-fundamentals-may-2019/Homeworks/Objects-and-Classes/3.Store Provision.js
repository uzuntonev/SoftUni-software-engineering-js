function solve(firstArr, secondArr) {
    let objOfProducts = {};
    for (let i = 0; i < firstArr.length; i++) {
        if(i % 2 == 0){
        objOfProducts[firstArr[i]] = Number(firstArr[i + 1]);
    }
    }
    for (let i = 0; i < secondArr.length; i ++) {
        if (i % 2 == 0){
            if (objOfProducts.hasOwnProperty(secondArr[i])){
                objOfProducts[secondArr[i]] += Number(secondArr[i + 1]);
            }else {
                objOfProducts[secondArr[i]] = secondArr[i + 1]
            }
        }
    }
    let entries = Object.entries(objOfProducts)
    for (const [key, value] of entries) {
        console.log(`${key} -> ${value}`)
    }
}

solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
);