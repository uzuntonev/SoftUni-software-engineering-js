function solve(input) {
    const list = [];

    function compare(firstArr, secondArr) {
        if (firstArr.length !== secondArr.length) {
            return false;
        } 
        for (let i = 0; i < firstArr.length; i++) {
            if (firstArr[i] !== secondArr[i]) {
                return false;
            }
        }
        return true; 
    }
    
    for (const line of input) {
        const array = JSON.parse(line).map(Number).sort((a, b) => b - a);
        list.push(array);
    }

    for (let i = 0; i < list.length; i++) {
        for (let j = i + 1; j < list.length; j++) {
            if (compare(list[i], list[j])) {
                list.splice(j, 1);
                j--;
            }
        }
    }

    list.sort((a, b) => a.length - b.length)
        .forEach(e => console.log(`[${e.join(', ')}]`));

}


solve([
    '[-3, -2, -1, 0, 1, 2, 3, 4]',
    '[10, 1, -17, 0, 2, 13]',
    '[4, -3, 3, -2, 2, -1, 1, 0]' ]);

// solve(["[7.14, 7.180, 7.339, 80.099]",
//     "[7.339, 80.0990, 7.140000, 7.18]",
//     "[7.339, 7.180, 7.14, 80.099]"]);
