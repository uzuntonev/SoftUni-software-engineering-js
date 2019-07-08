function solve(input) {
    let list = new Map;
    for (const line of input) {
        let [garage, car] = line.split(' - ');
        garage = Number(garage)
        if (!list.has(garage)) {
           list.set(garage, [car])
        } else {
    list.get(garage).push(car)
        }
    }
[...list.entries()]
        .forEach(e => {
            console.log(`Garage № ${e[0]}`);
            e[1].forEach(e => console.log(`--- ${e.split(': ').join(' - ')}`))
        });
}

solve([
    '1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);