function solve(input) {
    let energy = 100;
    let coins = 100;
    let flag = true;
    const arr = input.shift().split('|');
    for (const line of arr) {
        let [command, num] = line.split('-');
        num = Number(num)
        if (command === 'rest') {
            if (energy <= 100) {
                if ((energy + num) > 100){
                    num = 100 - energy;
                    energy = 100;
                }else {
                    energy += num;
                }
                console.log(`You gained ${num} energy.`)
                console.log(`Current energy: ${energy}.`)
            } 
           
        } else if (command === 'order') {
            energy -= 30;
            if (energy >= 0) {
                coins += num;
                console.log(`You earned ${num} coins.`);
            } else {
                energy += 80;
                console.log(`You had to rest!`);
            }
        } else {
            coins -= num;
            if (!(coins <= 0)) {
                console.log(`You bought ${command}.`);
               
            } else {
                console.log(`Closed! Cannot afford ${command}.`);
                flag = false;
                break;
            }
        }
    }
    if (flag)
        console.log(`Day completed!\nCoins: ${coins}\nEnergy: ${energy}`)
}

// solve(['rest-2|order-10|eggs-100|rest-10']);
solve([`order-10|order-10|order-10|flour-100|order-100|oven-100|order-1000`])