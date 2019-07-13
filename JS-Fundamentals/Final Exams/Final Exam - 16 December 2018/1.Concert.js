function solve(input) {
    let list = {};
    let timeObj = {};
    let lastBandName = input.pop();

    for (const line of input) {
        let [command, bandName, membersOrTime] = line.split('; ');
        if (line == 'start of concert') {
            let totalTime = 0;
            Object.entries(timeObj).forEach(e => {
                let time = e[1]
                return totalTime += Number(time);
            });
            console.log(`Total time: ${totalTime}`);
            Object.entries(timeObj)
                .sort((a, b) => a[0].localeCompare(b[0]))
                .sort((a, b) => b[1] - a[1])
                .forEach(e => console.log(`${e[0]} -> ${e[1]}`));
            console.log(lastBandName);
            let output = list[lastBandName]
                .forEach(e => console.log(`=> ${e}`));
            break;
        }
        if (command === 'Add' && !(bandName in list)) {
            let members = membersOrTime.split(', ');
            list[bandName] = members;
        } else if (command === 'Add' && (bandName in list)) {
            let members = membersOrTime.split(', ')
            for (const member of members) {
                if(!list[bandName].includes(member))
                list[bandName].push(member);
            }
        } else if (command === 'Play' && (bandName in timeObj)) {
            timeObj[bandName] += Number(membersOrTime)
        } else if (command == 'Play' && !(bandName in timeObj)) {
            timeObj[bandName] = Number(membersOrTime);
        }
    }
}

solve([
    'Play; The Beatles; 2584',
    'Add; The Beatles; John Lennon, Paul McCartney, George Harrison, Ringo Starr',
    'Add; Eagles; Glenn Frey, Don Henley, Bernie Leadon, Randy Meisner',
    'Play; Eagles; 1869',
    'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards',
    'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Charlie Watts, Ian Stewart',
    'Play; The Rolling Stones; 4239',
    'start of concert',
    'The Rolling Stones']
);
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>')
solve(['Add; The Beatles; John Lennon, Paul McCartney',
    'Add; The Beatles; Paul McCartney, George Harrison',
    'Add; The Beatles; George Harrison, Ringo Starr',
    'Play; The Beatles; 3698',
    'Play; The Beatles; 3828',
    'start of concert',
    'The Beatles']
);

//unique element in array
function uniqueElements(value, index, arr) {
    return arr.indexOf(value) === index;
}