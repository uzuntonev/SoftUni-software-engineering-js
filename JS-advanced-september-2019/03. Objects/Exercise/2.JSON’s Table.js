function solve(input) {
   
    let html = input
        .map(e => JSON.parse(e))
        .reduce((acc, curr) => {
            acc += ` <tr>\n  <td>${curr.name}</td>\n  <td>${curr.position}</td>\n  <td>${curr.salary}</td>\n </tr>\n`;
            return acc;
        }, '<table>\n');

    html += '</table>';
    console.log(html);
}
solve([
    '{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}' ]);
