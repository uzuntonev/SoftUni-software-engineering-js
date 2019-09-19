function solve(input) {
    const obj = {};

    for (const line of input) {
        const [ town, item, salse ] = line.split(' -> ');
        const price = salse
            .split(' : ')
            .map(Number)
            .reduce((a, b) => a * b, 1);

        if (!(town in obj)) {
            obj[town] = [ [ item, price ] ];
        } else {
            obj[town].push([ item, price ]);
        }
    }

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`Town - ${key}`);
            obj[key].forEach(e => {
                console.log(`$$$${e[0]} : ${e[1]}`);
            });
        }
    }
    // console.log(obj) 
}

solve([
    'Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3' ]);
