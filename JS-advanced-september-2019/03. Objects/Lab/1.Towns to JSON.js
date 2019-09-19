/* eslint-disable multiline-ternary */
/* eslint-disable no-loop-func */
function solve(input) {

    function processInput(str) {
        return str
            .split('|')
            .filter(e => e.length)
            .map(e => e.trim())
            .map(e => Number(e) ? Math.floor(Number(e) * 100) / 100 : e);
    }
    const keys = processInput(input.shift());

    const output = input
        .map(processInput)
        .map(e => e.reduce((acc, curr, index) => {
            acc[keys[index]] = curr;
            return acc;
        }, {}));

    console.log(JSON.stringify(output)); 
}

console.log(solve([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |' ]));


// function solve(input) {
//     let obj = {};
//     const output = [];
//     const header = input
//         .shift()
//         .split('|')
//         .map(e => e.trim())
//         .filter(e => e.length)
    
//     for (const element of input) {
//         let arr = element
//             .split('|')
//             .map(e => e.trim())
//             .filter(e => e.length)
//             .forEach((e, i) => {
//                 if (!isNaN(e)) {
//                     e = Number(e);
//                 }
//                 obj[header[i]] = e;
//             });
    
//         output.push(obj);
//         obj = {}
//     }
//     console.log(JSON.stringify(output))
// }
