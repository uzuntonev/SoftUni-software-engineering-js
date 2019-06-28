function solve(input) {
    // input.sort();
    // input.sort((a,b) => a.length > b.length);
    
    // console.log(input.join('\n'))

    let sortFunc = (a, b) => {
        let result = a.length - b.length;

        if (result === 0){
            return a.localeCompare(b);
        }
        return result;
    }
    console.log(input.sort(sortFunc).join('\n'))
}

solve(['test',
    'Deny',
    'omen',
    'Default']);