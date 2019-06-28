function solve(input) {
    let [days, players, energy, water, food, ...arrOfenergyLoss] = input
    let counter = 0;
    let groupWater = water * players * days;
    let groupFood = food * players * days;

    for (const line of arrOfenergyLoss) {
        counter++;
        energy -= line;
        if(energy <= 0){
            break;
        }
        if (counter % 2 == 0) {
            energy *= 1.05;
            groupWater *= 0.7;
        }
        if (counter % 3 == 0) {
            groupFood -= groupFood / players;
            energy *= 1.10;
        }
    }
    if (energy > 0 ) {
        console.log(`You are ready for the quest. You will be left with - ${energy.toFixed(2)} energy!`);

    } else {
        console.log(`You will run out of energy. You will be left with ${groupFood.toFixed(2)} food and ${groupWater.toFixed(2)} water.`);
    }
}

solve([12,
    6,
    4430,
    9.8,
    5.5,
    620.3,
    840.2,
    960.1,
    220,
    340,
    674,
    365,
    345.5,
    212,
    412.12,
    258,
    496
    
]);