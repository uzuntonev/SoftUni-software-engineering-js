// function solve(input) {
//     const pattern = /([\s]{1})(?<emoji>[:][a-z]{4,}[:])(?=[\s,.!?]{1})/g
//     let power = 0;
//     let code = input[1]
//         .split(':')
//         .map(Number)
//         .map(e => e = String.fromCharCode(e))
//         .join('');

//     let emojis = [];

//     let output;
//     while (output = pattern.exec(input[0])) {
//         emojis.push(output.groups.emoji)
//     }
//     for (const line of emojis) {
//        let a = line
//             .split(':')
//             .filter(e => e.length);

//             a[0].split('')
//             .forEach(e => power += e.charCodeAt(0));

//     }

//     if (emojis.includes(`:${code}:`)) {
//         power *= 2;
//     }
//     if (emojis.length > 0) {
//         console.log(`Emojis found: ${emojis.join(', ')}`);
//         console.log(`Total Emoji Power: ${power}`)
//     } else {
//         console.log(`Total Emoji Power: ${power}`)

//     }
// }

solve([
    'Hello I am Mark from :England: and I am :one: :seven: years old, I have a :hamster: as pet.',
    '115:101:118:101:110']
);
// solve([
//     'In the Sofia Zoo there are many animals, such as :ti ger:, :elephan:t, :monk3y:, :goriLLa:, :fox:.',
//     '97:101:117:114']
// )
// /\w:[a-z]{4,}:[\w|,.!?]$/g
function solve(input) {
const pattern = /[\.,!? ]:(?<emoji>[a-z]{4,}):(?=[\.,!? ]{1})/g
    let power = 0;
    let code = input[1]
        .split(':')
        .map(Number)
        .map(e => e = String.fromCharCode(e))
        .join('');

    let emojis = [];

    let output;
    while (output = pattern.exec(input[0])) {
        emojis.push(output.groups.emoji)
    }
    for (const line of emojis) {
        line
            .split('')
            .forEach(e => power += e.charCodeAt(0));
    }

    if (emojis.includes(code)) {
        power *= 2;
    }

    emojis = emojis.map(e => e = ':' + e + ':')
    if (emojis.length > 0) {
        console.log(`Emojis found: ${emojis.join(', ')}`);
        console.log(`Total Emoji Power: ${power}`)
    } else {
        console.log(`Total Emoji Power: ${power}`)
    }
}