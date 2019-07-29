function solve(input) {
    const list = {};
    function add(road, racer) {
        if (!(road in list)) {
            list[road] = [racer];
        } else {
            list[road].push(racer);
        }
    }

    function move(currentRoad, racer, nextRoad) {
        let index = list[currentRoad].indexOf(racer)
        if ((currentRoad in list) && index >= 0) {
            list[currentRoad].splice(index, 1);
        }
        if ((nextRoad in list) && index >= 0) {
            list[nextRoad].push(racer)
        }
    }

    function close(road) {
        if (road in list) {
            delete list[road];
        }
    }

    function sorted(list) {
        return Object.entries(list)
            .sort((a, b) => a[0].localeCompare(b[0]))
            .sort((a, b) => b[1].length - a[1].length);
    }

    function print(list){
        console.log('Practice sessions:')
        list.forEach(element => {
            console.log(element[0]);
            element[1].forEach(e => console.log(`++${e}`));
        });
    }
    
    for (const line of input) {
        if (line === 'END') {
            break;
        }
        let [command, road, racer, nextRoad] = line.split('->');
        if (command === 'Add') {
            add(road, racer);
        } else if (command === 'Move') {
            move(road, racer, nextRoad);
        } else if (command === 'Close') {
            close(road);
        }
    }
    print(sorted(list))
}

// solve([
//     'Add->Glencrutchery Road->Giacomo Agostini',
//     'Add->Braddan->Geoff Duke',
//     'Add->Peel road->Mike Hailwood',
//     'Add->Glencrutchery Road->Guy Martin',
//     'Move->Glencrutchery Road->Giacomo Agostini->Peel road',
//     'Close->Braddan',
//     'END']
// );
solve([
    'Add->Glen Vine->Steve Hislop',
    'Add->Ramsey road->John McGuinness ',
    'Add->Glen Vine->Ian Hutchinson',
    'Add->Ramsey road->Dave Molyneux',
    'Move->Ramsey road->Hugh Earnsson->Glen Vine',
    'Add->A18 Snaefell mountain road->Mike Hailwood',
    'Add->Braddan->Geoff Duke',
    'Move->A18 Snaefell mountain road->Mike Hailwood->Braddan',
    'Move->Braddan->John McGuinness->Glen Vine',
    'Close->A18 Snaefell mountain road',
    'END']
);