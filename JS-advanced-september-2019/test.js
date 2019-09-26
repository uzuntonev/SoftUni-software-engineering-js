// steps = (stepsCount, footprintLength, speed) => {
 
//     const distance = stepsCount * footprintLength;
//     const tens = (n) => n > 9 ? n : '0' + n;
//     time = (((distance / 1000) / speed) * 60 + Math.floor(distance / 500));
//     const hours = Math.floor(time / 60);
//     const mins = Math.floor(time);
//     const secs = Math.round((Math.ceil(((time % mins) * 100)) / 100) * 60);
//     console.log(`${tens(hours)}:${tens(mins)}:${tens(secs)}`);

// };
// steps(7300, 0.60, 5);
// steps(2564, 0.70, 5.5);




// one = input => {
//     const result = [];
//     input.forEach(elem => {
//         let [ name, level, items ] = elem.split(' / ');
//         items ? (items = items.split(', ')) : items = [];
//         level = Number(level);
//         result.push({ name, level, items });
//     });
//     console.log(JSON.stringify(result));
// };







// two = (input) => {
//     let result = '';
//     input.forEach(e => {
//         const {
//             name,
//             position,
//             salary,
//         } = JSON.parse(e);
//         result +=
//             `<tr>\n      <td>${name}</td>\n      <td>${position}</td>\n      <td>${salary}</td>\n   </tr>\n   `;
//     });
//     console.log(`<table>\n   ${result}</table>`);
// };




// six = ([ speed, area ]) => {
//     const areaLaws = {
//         city: 50,
//         motorway: 130,
//         interstate: 90,
//         residential: 20,
//     };
//     const speeding = (n) => {
//         toPrint = '';
//         if (n > 40) {
//             toPrint = 'reckless driving';
//         } else if (n > 20) {
//             toPrint = 'excessive speeding';
//         } else {
//             toPrint = 'speeding';
//         }
//         console.log(toPrint);
//     };
//     speed > areaLaws[area] ? speeding(speed - areaLaws[area]) : void(0);
// };


