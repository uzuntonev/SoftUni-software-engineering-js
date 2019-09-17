function solve(input) {
   
    let html = '<table>\n';
    for (const line of input) {
        const data = JSON.parse(line);
        html += ` <tr>\n  <td>${data.name}</td>\n  <td>${data.position}</td>\n  <td>${data.salary}</td>\n </tr>\n`;
    }
    html += '</table>';
    console.log(html);
}
solve([
    '{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}' ]);
