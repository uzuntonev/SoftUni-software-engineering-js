function solve(input) {
    input.pop();
    const list = {};
    const objArea = {};
    for (const line of input) {
        let [command, name, food, area] = line.split(':');
        food = Number(food);
        if (command == 'Add' && !(name in list)) {
            list[name] = [food, area];
        } else if (command == 'Add' && (name in list)) {
            list[name][0] += food;
        } else if (command == 'Feed' && (name in list)) {
            list[name][0] -= food;
            if (list[name][0] <= 0) {
                delete list[name];
                console.log(`${name} was successfully fed`);
            }
        }
    }
    console.log(`Animals:`)
    let result = Object.entries(list);
    let output = Object.entries(list)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .sort((a, b) => b[1][0] - a[1][0]);
    output
        .forEach(e => console.log(`${e[0]} -> ${e[1][0]}g`));

    console.log(`Areas with hungry animals:`);
   

    for (const line of result) {
        let area = line[1][1];
        if (!(area in objArea)) {
            objArea[area] = 1;
        } else {
            objArea[area]++;
        }
    }
    Object.entries(objArea)
        .sort((a, b) => b[1] - a[1])
        .forEach(e => {
            if (e[1] > 0) {
                console.log(`${e[0]} : ${e[1]}`)
            }
        })
}

solve([
    'Add:Maya:7600:WaterfallArea',
    'Add:Bobbie:6570:DeepWoodsArea',
    'Add:Adam:4500:ByTheCreek',
    'Add:Jamie:1290:RiverArea',
    'Add:Gem:8730:WaterfallArea',
    'Add:Maya:1230:WaterfallArea',
    'Add:Jamie:560:RiverArea',
    'Feed:Bobbie:6300:DeepWoodsArea',
    'Feed:Adam:4650:ByTheCreek',
    'Feed:Jamie:2000:RiverArea',
    'Last Info']
);
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>');

solve(['Add:Bonie:3490:RiverArea',
    'Add:Sam:5430:DeepWoodsArea',
    'Add:Bonie:200:RiverArea',
    'Add:Maya:4560:ByTheCreek',
    'Feed:Maya:2390:ByTheCreek',
    'Feed:Bonie:3500:RiverArea',
    'Feed:Johny:3400:WaterFall',
    'Feed:Sam:5500:DeepWoodsArea',
    'Last Info']
)


function feedTheAnimals(arr) {
    let hungryAnimalsObj = {};
    let areasObj = {};
    arr.forEach((element) => {
        let [command, animalName, dailyFoodLimit, area] = element.split(':');
        dailyFoodLimit = Number(dailyFoodLimit);
        switch (command) {
            case 'Add':
                if (!hungryAnimalsObj.hasOwnProperty(animalName)) {
                    hungryAnimalsObj[animalName] = dailyFoodLimit;
                    if (!areasObj.hasOwnProperty(area)) {
                        areasObj[area] = [animalName];
                    } else {
                        areasObj[area].push(animalName);
                    }
                } else {
                    hungryAnimalsObj[animalName] += dailyFoodLimit
                }
                break;
            case 'Feed':
                if (hungryAnimalsObj.hasOwnProperty(animalName)) {
                    if (hungryAnimalsObj[animalName] <= dailyFoodLimit) {
                        delete hungryAnimalsObj[animalName];
                        areasObj[area].splice(areasObj[area].indexOf(animalName), 1);
                        console.log(`${animalName} was successfully fed`);
                    } else {
                        hungryAnimalsObj[animalName] -= dailyFoodLimit;
                    }
                }
                break;
            case 'Last Info':
                printResult(hungryAnimalsObj, areasObj);
                break;
        }
    });

    function printResult(obj1, obj2) {
        console.log('Animals:');
        Object.entries(obj1)
            .sort((a, b) => a[1] === b[1] ? a[0].localeCompare(b[0]) : b[1] - a[1])
            .forEach(element => console.log(`${element[0]} -> ${element[1]}g`));

        console.log('Areas with hungry animals:');
        Object.entries(obj2)
            .sort((a, b) => b[1].length - a[1].length)
            .forEach(element => {
                if (element[1].length > 0) {
                    console.log(`${element[0]} : ${element[1].length}`);
                }
            });
    }
}
// feedTheAnimals(['Add:Bonie:3490:RiverArea',
//     'Add:Sam:5430:DeepWoodsArea',
//     'Add:Bonie:200:RiverArea',
//     'Add:Maya:4560:ByTheCreek',
//     'Feed:Maya:2390:ByTheCreek',
//     'Feed:Bonie:3500:RiverArea',
//     'Feed:Johny:3400:WaterFall',
//     'Feed:Sam:5500:DeepWoodsArea',
//     'Last Info']
// )