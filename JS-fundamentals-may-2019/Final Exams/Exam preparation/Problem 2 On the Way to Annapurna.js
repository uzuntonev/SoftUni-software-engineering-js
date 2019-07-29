function solve(input) {
    const list = {};

    function add(store, items) {
        items = items.split(',')
        if (!(store in list)) {
            list[store] = items;
        } else {
            list[store].push(...items);
        }
    }

    function remove(store) {
        if (store in list) {
            delete list[store];
        }
    }

    function sorted(list){
       const sortedArray = Object.entries(list)
       .sort((a,b) => b[1].length - a[1].length || b[0].localeCompare(a[0]));
       return sortedArray
    }

    function print(list){
        console.log('Stores list:')
        list.forEach(element => {
            console.log(element[0]);
            element[1].forEach(e => console.log(`<<${e}>>`))
        });
    }

    for (const line of input) {
        if (line === 'END') {
            break;
        }
        let [command, store, items] = line.split('->');

        if (command === 'Add') {
            add(store, items)
        } else if (command === 'Remove') {
            remove(store)
        }
    }
   print(sorted(list))
}

// solve([
//     'Add->PeakSports->Map,Navigation,Compass',
//     'Add->Paragon->Sunscreen',
//     'Add->Groceries->Dried-fruit,Nuts',
//     'Add->Groceries->Nuts',
//     'Add->Paragon->Tent',
//     'Remove->Paragon',
//     'Add->Pharmacy->Pain-killers',
//     'END']
// );
// console.log('>>>>>>>>>>>>')
solve([
'Add->Peak->Waterproof,Umbrella',
'Add->Groceries->Water,Juice,Food',
'Add->Peak->Tent',
'Add->Peak->Sleeping-Bag',
'Add->Peak->Jacket',
'Add->Groceries->Lighter',
'Remove->Groceries',
'Remove->Store',
'END' ]
);