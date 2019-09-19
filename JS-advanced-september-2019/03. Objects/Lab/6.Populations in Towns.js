function solve(input) {
    const obj = {};
    for (const element of input) {
        let [ town, population ] = element.split(' <-> ');
        population = Number(population);
        if (!(town in obj)) {
            obj[town] = population;
        } else {
            obj[town] += population;
        }
    }
    Object.entries(obj).forEach(e => {
        console.log(`${e[0]} : ${e[1]}`); 
    });
}

solve([ 'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000' ]);
