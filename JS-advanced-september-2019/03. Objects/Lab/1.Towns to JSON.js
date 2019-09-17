function solve(input) {
    let obj = {};
    const output = [];
    const header = input
        .shift()
        .split('|')
        .map(e => e.trim())
        .filter(e => e.length)

    for (const element of input) {
        let arr = element
            .split('|')
            .map(e => e.trim())
            .filter(e => e.length)
            .forEach((e, i) => {
                if (!isNaN(e)) {
                    e = Number(e);
                }
                obj[header[i]] = e;
            });

        output.push(obj);
        obj = {}
    }
    console.log(JSON.stringify(output))
}

solve([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);