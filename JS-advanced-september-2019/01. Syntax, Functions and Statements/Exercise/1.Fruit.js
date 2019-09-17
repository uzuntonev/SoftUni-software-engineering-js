function solve(fruit, weight, price) {
    const weightInKg = weight / 1000;
    const money = price * weightInKg;
    console.log(`I need $${money.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`); 
}

solve('apple', 1563, 2.35);
