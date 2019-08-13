function solve(input) {
    const n = Number(input.shift());

    for (let i = 0; i < n; i++) {
        const pattern = /([*@])(?<tag>[A-Z][a-z]{3,})\1: (?<first>\[[A-Za-z]\]\|\[[A-Za-z]\]\|\[[A-Za-z]\])\|/g;
        const secondPattern = /([*@])(?<tag>[A-Z][a-z]{3,})\1: (?<first>\[[A-Za-z]\]\|\[[A-Za-z]\]\|\[[A-Za-z]\])\|/g;
        let line = input[i];
        let result;
        let matched = line.match(pattern)


        if (result = pattern.exec(line)) {
            let tag = result.groups.tag;
            let letters = result.groups.first.split('|')
            let charCode = letters.map(e => {
                return e[1].charCodeAt(0)
            });
            if (line.endsWith(matched)){
                console.log(`${tag}: ${charCode.join(' ')}`)
            }else {
                console.log('Valid message not found!')
            }
        }else {
            console.log('Valid message not found!')
        }
    }
}

solve([
    '3',
    '*Request*: [I]|[s]|[i]|',
    '*Taggy@: [73]|[73]|[73]|',
    'Should be valid @Taggy@: [v]|[a]|[l]|']
);
// solve([
// '3',
// '@Taggy@: [i]|[n]|[v]|[a]|[l]|[i]|[d]| this shouldn�t be valid',
// '*tAGged*: [i][i][i]|',
// 'Should be invalid @Taggy@: [v]|[a]|[l]|[l]|[l]|' ]
// )