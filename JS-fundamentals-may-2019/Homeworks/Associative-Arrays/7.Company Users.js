function solve(input) {
    let list = {};

    for (const line of input) {
        let [company, id] = line.split(' -> ');
        if (!(company in list)) {
            list[company] = [id];
        } else if (company in list) {
            if (!list[company].includes(id))
                list[company].push(id)
        }
    }
    let sorted = Object.entries(list)
        .sort((a, b) => a[0].localeCompare(b[0]))
    for (const line of sorted) {
        console.log(line[0]);
        line[1].forEach(e => console.log(`-- ${e}`))
    }
}

solve([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]);
solve([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]
)