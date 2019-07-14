function solve(input) {
    let [days, budget, people, fuelPrice, food, roomPrice, ...arrOfDistancePerDay ] = input;
    let totalHotelPrice = people * roomPrice * days;
    let totalFoodExpense = people * food * days;
    if (people > 10) {
        totalHotelPrice *= 0.75;
    }
    let totalEpenses = totalHotelPrice + totalFoodExpense;
    let dailyExpensesFuel = 0;
    let counter = 0;

   for (let distencePerDay of arrOfDistancePerDay){
        counter++;
        dailyExpensesFuel = distencePerDay * fuelPrice;
        totalEpenses += dailyExpensesFuel
        if (counter % 3 == 0 || counter % 5 == 0) {
            totalEpenses += totalEpenses * 0.4;
        }
        if (counter % 7 == 0) {
            totalEpenses -= totalEpenses / people;
        }
        if (totalEpenses > budget) {
            break;
        }
    }
    if (budget - totalEpenses >= 0) {
        console.log(`You have reached the destination. You have ${(budget - totalEpenses).toFixed(2)}$ budget left.`)
    } else {
        console.log(`Not enough money to continue the trip. You need ${Math.abs(budget - totalEpenses).toFixed(2)}$ more.`)
    }
}

solve(
    [10,
        20500,
        11,
        1.2,
        8,
        13,
        100,
        150,
        500,
        400,
        600,
        130,
        300,
        350,
        200,
        300

    ]

);