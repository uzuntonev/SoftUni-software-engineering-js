function solve(input) {
    let size = input.shift();
    let days = input.shift();
    let coins  = 0;
  
    for (let i = 1; i <= days; i++) {
        if (i % 10 === 0){
            size -= 2;
        }
        if (i % 15 === 0){
            size += 5
        }
        coins += 50;
        coins -= 2 * size;
        if (i % 3 === 0){
            coins -= 3 * size;
        }
        if (i % 5 === 0){
            coins += size * 20;
            if (i % 3 === 0){
                coins -= size * 2;
            }
        }
    }
    console.log(`${size} companions received ${Math.floor(coins/size)} coins each.`)
}

solve([15,30]);