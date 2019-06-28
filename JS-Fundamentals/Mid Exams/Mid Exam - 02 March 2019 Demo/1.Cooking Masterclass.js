function solve(input) {
    let budget = input.shift();
    let students = input.shift();
    let flour = input.shift();
    let egg = input.shift();
    let apron = input.shift();
    let freePackages = Math.floor(students / 5);
    let neededItems = apron * Math.ceil(students * 1.2) + egg * 10 * students + flour * (students - freePackages)
    if (neededItems <= budget){
        console.log(`Items purchased for ${neededItems.toFixed(2)}$.`)
    }else {
        console.log(`${(neededItems - budget).toFixed(2)}$ more needed.`)
    }
}

solve([
    50,
    2,
    1.0,
    0.10,
    10.0,
]);
solve([
    100,
    25,
    4.0,
    1.0,
    6.0,
]);