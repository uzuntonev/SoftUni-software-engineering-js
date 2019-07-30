function solve(input) {
    const list = {};
    const areas = {};

    function add(name, food, area) {
        food = Number(food);
        if (!(name in list)) {
            list[name] = [food, area]
        } else {
            list[name][0] += food;
        }
    }

    function feed(name, food, area) {
        food = Number(food);
        if (name in list) {
            list[name][0] -= food;
            if (list[name][0] <= 0) {
                delete list[name];
                console.log(`${name} was successfully fed`)
            }
        }

    }

    function sortedAnimals(list) {
        return Object.entries(list)
            .sort((a, b) => a[0].localeCompare(b[0]))
            .sort((a, b) => b[1][0] - a[1][0])
    }

    function printAnimals(list) {
        console.log(`Animals:`)
        list.forEach(e => console.log(`${e[0]} -> ${e[1][0]}g`))
    }

    function countAreas(list) {
        Object.values(list).forEach(e => {
            if (!(e[1] in areas)) {
                areas[e[1]] = 1;
            } else {
                areas[e[1]]++;
            }
        });
    }

    function printAreas(areas) {
        console.log(`Areas with hungry animals:`)
        Object.entries(areas)
            .sort((a, b) => b[1] - a[1])
            .forEach(e => console.log(`${e[0]} : ${e[1]}`));
    }

    for (const line of input) {
        if (line === 'Last Info') {
            break;
        }
        let [command, name, food, area] = line.split(':');
        if (command === 'Add') {
            add(name, food, area);
        } else if (command === 'Feed') {
            feed(name, food, area);
        }
    }
    printAnimals(sortedAnimals(list));
    countAreas(list);
    printAreas(areas);
}

// solve([
//     'Add:Maya:7600:WaterfallArea',
//     'Add:Bobbie:6570:DeepWoodsArea',
//     'Add:Adam:4500:ByTheCreek',
//     'Add:Jamie:1290:RiverArea',
//     'Add:Gem:8730:WaterfallArea',
//     'Add:Maya:1230:WaterfallArea',
//     'Add:Jamie:560:RiverArea',
//     'Feed:Bobbie:6300:DeepWoodsArea',
//     'Feed:Adam:4650:ByTheCreek',
//     'Feed:Jamie:2000:RiverArea',
//     'Last Info']
// );
solve([
    'Add:Bonie:3490:RiverArea',
    'Add:Sam:5430:DeepWoodsArea',
    'Add:Bonie:200:RiverArea',
    'Add:Maya:4560:ByTheCreek',
    'Feed:Maya:2390:ByTheCreek',
    'Feed:Bonie:3500:RiverArea',
    'Feed:Johny:3400:WaterFall',
    'Feed:Sam:5500:DeepWoodsArea',
    'Last Info']
);