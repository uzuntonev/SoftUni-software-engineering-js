function solve(input) {
    let output = [];
    for (let line of input) {
        let [direction, number] = line.split(', ');
        if (direction === 'IN') {
            if (!output.includes(number)) {
                output.push(number);

            }
        } else if (direction === 'OUT') {
            if (output.includes(number)) {
                let index = output.indexOf(number);
                output.splice(index, 1);
            }
        }
    }
    if (output.length > 0) {
        output.sort((a, b) => a.localeCompare(b))
            .forEach(e => console.log(e));
    } else {
        console.log(`Parking Lot is Empty`)
    }
}
solve([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
);