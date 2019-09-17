function solve() {
    const args = [ ...arguments ];
    const types = {};
    for (const element of args) {
        if (!(typeof element in types)) {
            types[typeof element] = 1;
        } else {
            types[typeof element]++;
        }
    }

    args.forEach(e => {

        console.log(`${typeof e}: ${e}`);

    });

    const typesArr = Object.entries(types).sort((a, b) => b[1] - a[1]);
    for (const [ key, value ] of typesArr) {
        
        console.log(`${key} = ${value}`);
        
    }
}

solve(
    { name: 'bob' }
    , 3.333, 9.999
);


