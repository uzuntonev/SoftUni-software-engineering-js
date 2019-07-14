function solve(input) {
    input.pop();
    let list = {};
    for (const line of input) {
        let [command, road, racer, nextRoad] = line.split('->');
        if (command == 'Add' && !(road in list)) {
            list[road] = [racer];
        } else if (command == 'Add' && (road in list)) {
            list[road].push(racer)
        }
        if (command == 'Move' && (road in list) && list[road].includes(racer)) {
            list[road].splice(list[road].indexOf(racer), 1);
            if (nextRoad in list) {
                list[nextRoad].push(racer);
            } else {
                list[nextRoad] = [racer];
            }
        }
        if (command == 'Close' && (road in list)) {
            delete list[road];
        }
    }
    console.log(`Practice sessions:`)
   Object.entries(list)
        .sort((a, b) => {
            if (a[0] > b[0]) {
                return 1
            } else if (a[0] < b[0]) {
                return -1
            }
        })
        .sort((a, b) => b[1].length - a[1].length)
        .forEach( e => {
            console.log(e[0]);
            e[1].forEach( e => console.log(`++${e}`))

         })
}

solve([
    'Add->Glencrutchery Road->Giacomo Agostini',
    'Add->Braddan->Geoff Duke',
    'Add->Peel road->Mike Hailwood',
    'Add->Glencrutchery Road->Guy Martin',
    'Move->Glencrutchery Road->Giacomo Agostini->Peel road',
    'Close->Braddan',
    'END']
);
console.log(`>>>>>>>>>>>>>>>>>>>>>>>>>>>`)
solve([ 'Add->Glen Vine->Steve Hislop',
'Add->Ramsey road->John McGuinness ',
'Add->Glen Vine->Ian Hutchinson',
'Add->Ramsey road->Dave Molyneux',
'Move->Ramsey road->Hugh Earnsson->Glen Vine',
'Add->A18 Snaefell mountain road->Mike Hailwood',
'Add->Braddan->Geoff Duke',
'Move->A18 Snaefell mountain road->Mike Hailwood->Braddan',
'Move->Braddan->John McGuinness->Glen Vine',
'Close->A18 Snaefell mountain road',
'END' ]
)