function solve(input) {
    input.pop();
    let listOfBreads = []
    for (const line of input) {
        let currentBreadList = line
            .split('#')
            .map(Number)
        listOfBreads.push(currentBreadList)
    }
    let avg = (arr) => arr.reduce((a, b) => a + b) / arr.length;

    let sortedByQuality = listOfBreads.sort((a, b) => b.reduce((a, b) => a + b) - a.reduce((a, b) => a + b))
        .filter(e => e.reduce((a, b) => a + b) == listOfBreads[0].reduce((a, b) => a + b))
    let sortedAvgAndLength = sortedByQuality.sort((a, b) => avg(b) - avg(a))
        .filter(e => avg(e) == avg(sortedByQuality[0]))
        .sort((a, b) => a.length - b.length);

    console.log(`Best Batch quality: ${sortedAvgAndLength[0].reduce((a, b) => a + b)}`);
    console.log(sortedAvgAndLength[0].join(' '))
}

// solve(['5#4#10#-2', '10#5#2#3#2', 'Bake It!']);
solve(['5#3#2', '10#2#-2#1#-1', '4#2#1', 'Bake It!']);