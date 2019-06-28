function solve(arr) {
    let listGifts = arr.shift().split(' ');
    let inputCommand = arr.shift();

    while (inputCommand !== 'No Money') {
        let [command, item, index] = inputCommand.split(' ');

        if (command === 'OutOfStock') {
            while (listGifts.includes(item)) {
                // listGifts = listGifts.toString();
                // listGifts = listGifts.replace(item, 'None');
                let currentIndex = listGifts.indexOf(item);
                listGifts[currentIndex] = 'None';
            }
        } else if (command === 'Required') {
            if (index < listGifts.length) { 
             //   listGifts = listGifts.split(',');
                listGifts.splice(index, 1, item)
            }
        } else if (command === 'JustInCase') {
          listGifts.pop();
          listGifts.push(item)
            //  listGifts.splice(listGifts.length - 1, 1, item);
        }
        inputCommand = arr.shift();
    }
    let newListGifts = [];
    listGifts.forEach(e => {
        if (e !== 'None') {
            newListGifts.push(e);
        }
    });
    console.log(newListGifts.join(' '))
}


solve([
    'Sweets Cozonac Clothes Flowers Wine Clothes Eggs Clothes',
    'Required Paper 8',
    'OutOfStock Clothes',
    'Required Chocolate 2',
    'JustInCase Hat',
    'OutOfStock Cable',
    'No Money'
]);