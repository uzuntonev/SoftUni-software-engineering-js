function solve(input) {
    const obj = {};
    let isInclude = true;
    for (const line of input) {
        let [ car, model, produce ] = line.split(' | ');
        produce = Number(produce);
        if (!(car in obj)) {
            obj[car] = [ [ model, produce ] ];
        } else {
            isInclude = true;
            for (const element of obj[car]) {
                if (element.includes(model)) {
                    element[1] += produce;
                    isInclude = false;
                }
            }
            if (isInclude) {
                obj[car].push([ model, produce ]);
            }
        }
    }
    Object.entries(obj).forEach(car => {
        console.log(car[0]);
        car[1].forEach(model => console.log(`###${model[0]} -> ${model[1]}`));
    });
}

// solve([
//     'Audi | Q7 | 1000',
//     'Audi | Q6 | 100',
//     'BMW | X5 | 1000',
//     'BMW | X6 | 100',
//     'Citroen | C4 | 123',
//     'Volga | GAZ-24 | 1000000',
//     'Lada | Niva | 1000000',
//     'Lada | Jigula | 1000000',
//     'Citroen | C4 | 22',
//     'Citroen | C5 | 10']);
solve([
    'Mercedes-Benz | 50PS | 123',
    'Mini | Clubman | 20000',
    'Mini | Convertible | 1000',
    'Mercedes-Benz | 60PS | 3000',
    'Hyunday | Elantra GT | 20000',
    'Mini | Countryman | 100',
    'Mercedes-Benz | W210 | 100',
    'Mini | Clubman | 1000',
    'Mercedes-Benz | W163 | 200' ]);
