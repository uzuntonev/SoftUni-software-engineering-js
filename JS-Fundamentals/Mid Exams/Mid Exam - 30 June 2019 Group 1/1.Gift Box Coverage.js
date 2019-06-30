function solve(input) {
    let sizeOfSide = Number(input.shift());
    let sheetsOfPaper = Number(input.shift());
    let areaSingleSheet = Number(input.shift());

    let areaNeeded = sizeOfSide * sizeOfSide * 6;
    let areaHave = areaSingleSheet * sheetsOfPaper;
    let a = 0
    let b = 0
    for (let sheet = 1; sheet <= sheetsOfPaper; sheet++) {
        if (areaHave <= 0) {
            break;
        }
        if (sheet % 3 === 0) {
            a++
        }else {
            b++
        }

    }
    a = a * areaSingleSheet * 0.25;
    b = b * areaSingleSheet
 let totalCovered = a + b;

let result = totalCovered / areaNeeded * 100;
    console.log(`You can cover ${result.toFixed(2)}% of the box.`)

}

solve(['5', '30', '4']);
solve(['2.5',
    '32',
    '4.25'
    ])