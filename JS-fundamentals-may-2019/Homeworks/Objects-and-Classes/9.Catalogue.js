function solve(arr) {
    let catalogue = {};
    for (let el of arr) {
        let splitedEl = el.split(' : ');
        catalogue[splitedEl[0]] = splitedEl[1];
    }
    let orderedCatalogue = {};
    Object.keys(catalogue).sort((a, b) => a.localeCompare(b)).forEach(function (key) {
        orderedCatalogue[key] = catalogue[key];
    });
    let keys = Object.keys(orderedCatalogue);
    for (let i = 0; i < keys.length; i++) {
        if (i - 1 >= 0) {
            if (keys[i][0] != keys[i - 1][0]) {
                console.log(`${keys[i][0]}`);
            }
        }else{
            console.log(`${keys[i][0]}`)
        }
        console.log(`${keys[i]}: ${orderedCatalogue[keys[i]]}`);
    }
}

solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
);