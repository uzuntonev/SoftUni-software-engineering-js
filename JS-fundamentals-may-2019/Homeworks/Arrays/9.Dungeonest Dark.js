function solve(input) {
    let rooms = input[0].split('|');
    let health = 100;
    let coins = 0;
    let isFinish = true;
    for (let i = 0; i < rooms.length; i++) {
        let room = rooms[i].split(' ');;

        if (room[0] === 'potion') {
            if (health <= 100) {
                if (health + Number(room[1]) > 100) {
                    room[1] = 100 - health;
                    health = 100;
                } else {
                    health += Number(room[1]);
                }
                console.log(`You healed for ${room[1]} hp.`);
                console.log(`Current health: ${health} hp.`)
            }
        } else if (room[0] === 'chest') {
            console.log(`You found ${room[1]} coins.`)
            coins += Number(room[1]);
        } else {
            health -= room[1];
            if (health > 0) {
                console.log(`You slayed ${room[0]}.`);
            } else {
                console.log(`You died! Killed by ${room[0]}.`);
                console.log(`Best room: ${i + 1}`);
                isFinish = false;
                break;
            }
        }
    }
    if (isFinish) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`)
    }
}
solve(['rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000']);