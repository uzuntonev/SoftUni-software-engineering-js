function solve(input) {
    let health = 100;
    let coins = 0;
    let counter = 0;
    let isAlive = true;
    let arr = input.shift().split('|');
    for(let line of arr) {
        counter++;
        let [commandOrMonster, number] = line.split(' ');
        number = Number(number)
        if (commandOrMonster === 'potion') {
            if ((health + number) >= 100) {
                number = 100 - health;
                health = 100;
            } else {
                health += number;
            }
            console.log(`You healed for ${number} hp.`);
            console.log(`Current health: ${health} hp.`)
        } else if (commandOrMonster === 'chest') {
            coins += number;
            console.log(`You found ${number} coins.`)
        } else {
            if ((health - number) > 0) {
                health -= number
                console.log(`You slayed ${commandOrMonster}.`);
            }else {
                console.log(`You died! Killed by ${commandOrMonster}.`);
                console.log(`Best room: ${counter}`)
                isAlive = false; 
                break;  
            }
        }
    }
    if (isAlive){
        console.log(`You've made it!\nCoins: ${coins}\nHealth: ${health}`)
    }
}

solve(['rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000']);
// solve(['cat 10|potion 30|orc 10|chest 10|snake 25|chest 110'])