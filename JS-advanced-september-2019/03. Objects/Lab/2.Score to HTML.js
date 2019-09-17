function solve(input) {
    let output = ''
    const arr = JSON.parse(input);
    const keys = Object.keys(arr[0]);
    output += `<table>
    <tr><th>${keys[0]}</th><th>${keys[1]}</th></tr>
    `

    for (const element of arr) {
        output += `<tr><td>${replaceSymbol(element.name)}</td><td>${element.score}</td></tr>\n`
    }
    output += '</table>'
    console.log(output)

    function replaceSymbol(str) {
        let string = str.replace(/&/g, '&amp;')
            .replace(/>/g, '&gt;')
            .replace(/</g, '&lt;')
            .replace(/'/g, '&#39;')
            .replace(/"/g, '&quot;')
        return string;
    }
}

// solve(['[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]']);
solve(['[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]'])
