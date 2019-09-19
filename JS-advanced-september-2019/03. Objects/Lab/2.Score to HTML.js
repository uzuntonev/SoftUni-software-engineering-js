function solve(input) {

    function replaceSymbol(str) {
        const string = str.replace(/&/g, '&amp;')
            .replace(/>/g, '&gt;')
            .replace(/</g, '&lt;')
            .replace(/'/g, '&#39;')
            .replace(/"/g, '&quot;');
        return string;
    }

    function processing(arr, objectKeys) {
        let output = `<table>
        <tr><th>${objectKeys[0]}</th><th>${objectKeys[1]}</th></tr>
        `;
        output = arr.reduce((acc, curr) => {
            acc += `<tr><td>${replaceSymbol(curr.name)}</td><td>${curr.score}</td></tr>\n`;
            return acc;
        }, output);
    
        return output += '</table>';
    }

    const array = JSON.parse(input);
    const keys = Object.keys(array[0]);
    
    console.log(processing(array, keys));
}

// solve(['[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]']);
solve([ '[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]' ]);
