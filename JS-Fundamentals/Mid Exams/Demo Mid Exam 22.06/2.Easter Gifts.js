function solve(arr) {
    let list = arr.shift().split(' ');
    let input = arr.shift();
    while (input != 'No Money') {
        let [command, item, indexRequired] = input.split(' ')
        if (command === 'OutOfStock') {
            while (list.includes(item)) {
                let index = list.indexOf(item);
                list[index] = 'None';
            }
        } else if (command === 'Required') {
            if (indexRequired < list.length && indexRequired >= 0) {
                list[indexRequired] = item;
            }
        } else if (command === 'JustInCase') {
            list[list.length - 1] = item;
        }

        input = arr.shift();
    }

    console.log(list.filter(e => e != 'None').join(' '));
}

// solve([
//     'Eggs StuffedAnimal Cozonac Sweets EasterBunny Eggs Clothes',
//     'OutOfStock Eggs',
//     'Required Spoon 2',
//     'JustInCase ChocolateEgg',
//     'No Money']);

    solve(['Sweets Cozonac Clothes Flowers Wine Clothes Eggs Clothes',
        'Required Paper 8',
        'OutOfStock Clothes',
        'Required Chocolate 2',
        'JustInCase Hat',
        'OutOfStock Cable',
        'No Money'
        ])