function solve() {
    const args = [ ...arguments ];
    const types = args.reduce((acc, curr) => {
        if (!(typeof curr in acc)) {
            acc[typeof curr] = 0;
        }
        acc[typeof curr]++;
        return acc;
    }, {});

    args.forEach(e => {
        console.log(`${typeof e}: ${e}`);
    });

    Object.entries(types)
        .sort((a, b) => b[1] - a[1])
        .forEach(e => console.log(`${e[0]} = ${e[1]}`));
}

// function solve2() {
//     const args = [ ...arguments ];
//     const types = args.reduce((acc, curr) => {
//         if (!(typeof curr in acc)) {
//             acc[typeof curr] = 0;
//         }
//         acc[typeof curr]++;

//         return acc;
//     }, {});

//     const mapArgs = args.map(e => `${typeof e}: ${e}`);

//     const typesArr = Object.entries(types)
//         .sort((a, b) => b[1] - a[1])
//         .map(e => `${e[0]} = ${e[1]}`);

//     return [ ...mapArgs, ...typesArr ].join('\n');
// }

console.log(solve(
    { name: 'bob' }
    , 3.333, 9.999
));



