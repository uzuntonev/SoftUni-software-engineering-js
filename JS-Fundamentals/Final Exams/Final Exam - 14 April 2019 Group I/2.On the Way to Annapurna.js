function solve(input) {
    input.pop();
    let obj = {};

    for (const line of input) {

        let [command, store, item] = line.split('->');
        if (command === 'Add' && !(store in obj)) {
            obj[store] = item.split(',')
        } else if (command === 'Add' && (store in obj)) {
            obj[store].push(...item.split(','))
        } else if (command === 'Remove') {
            if (store in obj) {
                delete obj[store];
            }
        }
    }
    console.log('Stores list:');
    Object.entries(obj)
        .sort((a, b) => {
            if (a[1].length == b[1].length) {
                if (a[0] > b[0]) {
                    return -1;
                } else if (a[0] < b[0]) {
                    return 1
                }
            }
            return -1
        })
        .forEach(e => {
            console.log(`${e[0]}`)
            e[1].forEach(e => console.log(`<<${e}>>`))
        });
}

solve([
    'Add->PeakSports->Map,Navigation,Compass',
    'Add->Paragon->Sunscreen',
    'Add->Groceries->Dried-fruit,Nuts',
    'Add->Groceries->Nuts',
    'Add->Paragon->Tent',
    'Remove->Paragon',
    'Add->Pharmacy->Pain-killers',
    'END']);



    // .sort((a, b) => a[0].localeCompare(b[0]))
        // .sort((a,b) => b[1].length - a[1].length )
        // Object.entries(obj)
        //     .sort((a, b) => {
        //         if (a[1].length > b[1].length) {
        //             return -1;
        //         } else if (a[1].length < b[1].length) {
        //             return 1;
        //         } else {
        //             if (a[0] > b[0]) {
        //                 return -1;
        //             } else if (a[0] < b[0]) {
        //                 return 1
        //             }
        //         }
        //     })