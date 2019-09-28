function solve(input) {
    let rotation = Number(input.pop()) % input.length;
    // for (let i = 0; i < rotation; i++) {
    //     input.unshift(input.pop());
    // }
    // return input.join(' ');

    return input.reduceRight((acc, curr)=>{
        if(rotation){
            acc = [ curr, ...acc.slice(0, acc.length - 1) ];
            rotation--;
        }
        return acc;
    },[ ...input ]).join(' ');
}

console.log(solve([
    '1',
    '2',
    '3',
    '4',
    '2' ]));
solve([
    'Banana',
    'Orange',
    'Coconut',
    'Apple',
    '15' ]);
