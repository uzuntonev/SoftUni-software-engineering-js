function solve(arr) {
    let [budget, FlourPrice] = [Number(arr.shift()), Number(arr.shift())];

    let eggsPrice = FlourPrice * 0.75;
    let litterMilkPrice = FlourPrice * 1.25;
    let priceCozonac = eggsPrice + FlourPrice + litterMilkPrice / 4;
    let counterCozonacs = 0;
    let coloredEggs = 0;

    while (budget >= priceCozonac) {
        counterCozonacs++;
        budget -= priceCozonac;

        if (counterCozonacs % 3 == 0) {
            coloredEggs = coloredEggs - (counterCozonacs - 2);
        }
        coloredEggs += 3;
    }

    console.log(`You made ${counterCozonacs} cozonacs! Now you have ${coloredEggs} eggs and ${budget.toFixed(2)}BGN left.`)

}

solve([20.50, 1.25]);