function solve(input) {
    let sizeOfSide = Number(input.shift());
    let sheetsOfPaper = Number(input.shift());
    let areaSingleSheet = Number(input.shift());

    let areaNeeded = sizeOfSide * sizeOfSide * 6;
    let everyThirdSheetCount = 0
    let sheetsCount = 0
    for (let sheet = 1; sheet <= sheetsOfPaper; sheet++) {
        if (sheet % 3 === 0) {
            everyThirdSheetCount++
        } else {
            sheetsCount++
        }
    }
    everyThirdSheetCount *= areaSingleSheet * 0.25;
    sheetsCount *= areaSingleSheet
    let totalCovered = everyThirdSheetCount + sheetsCount;
    let result = totalCovered / areaNeeded * 100;
    console.log(`You can cover ${result.toFixed(2)}% of the box.`)
}

solve(['5', '30', '4']);
// solve(['2.5',
//     '32',
//     '4.25'
//     ])