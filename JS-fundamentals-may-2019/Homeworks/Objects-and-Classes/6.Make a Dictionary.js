function solve(arr) {
    let dictionary = {};
    const parsed = arr.map(e => JSON.parse(e));
    parsed.forEach(element => {
        const tupel = Object.entries(element);
        const key = tupel[0][0];
        const value = tupel[0][1];
        dictionary[key] = value;
    });
    let sortedDictionary = Object.keys(dictionary)
        .sort((a, b) => a.localeCompare(b));
    for (let key of sortedDictionary) {
        console.log(`Term: ${key} => Definition: ${dictionary[key]}`)
    }
}

solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]
);