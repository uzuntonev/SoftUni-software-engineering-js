function solve(arr) {
    let listShops = arr.shift().split(' ');
    let n = Number(arr.shift());
    let input = arr.shift();

    for (let i = 1; i <= n; i++) {
        let arrOfcommands = input.split(' ');
        if (arrOfcommands[0] == 'Include') {
            listShops.push(arrOfcommands[1]);
        } else if (arrOfcommands[0] == 'Visit' && arrOfcommands[2] < listShops.length) {
            if (arrOfcommands[1] == 'first') {
                for (let j = 1; j <= arrOfcommands[2]; j++) {
                    listShops.shift();
                }
            } else if (arrOfcommands[1] == 'last') {
                for (let j = 1; j <= arrOfcommands[2]; j++) {
                    listShops.pop();
                }
            }
        } else if (arrOfcommands[0] == 'Prefer' && arrOfcommands[1] < listShops.length && arrOfcommands[2] < listShops.length) {
            let currentElement = listShops[Number(arrOfcommands[1])];
            let currentElement2 = listShops[Number(arrOfcommands[2])];
            listShops[arrOfcommands[1]] = currentElement2;
            listShops[arrOfcommands[2]] = currentElement;
        }else if (arrOfcommands[0] == 'Place' && arrOfcommands[2] < listShops.length){
            let index = Number(arrOfcommands[2]) + 1;
            listShops.splice(index, 0, arrOfcommands[1]);
        }
        input = arr.shift();
    }
    console.log('Shops left:');
    console.log(listShops.join(' '));
}



solve([
    'Bershka CandyStore ThriftShop Armani Groceries ToyStore PeakStore',
    '5',
    'Include HM',
    'Visit first 2',
    'Visit last 1',
    'Prefer 3 1',
    'Place Library 2'

]);