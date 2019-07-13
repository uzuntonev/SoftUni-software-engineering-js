function solve(input) {
    let arr = input[0].split('&');
    const validLinePattern = /^[\w\d]+$/g;
    const output = []
    for (const line of arr) {
        if (line.match(validLinePattern) && (line.length == 16 || line.length == 25)) {
            if (line.length == 16) {
                let arrOfLine = line.split('');
                let newArr = [];
                for (let i = 0; i < arrOfLine.length; i++) {
                    if (i % 4 == 0 && i != 0) {
                        newArr.push('-');
                        newArr.push(arrOfLine[i])
                    } else {
                        newArr.push(arrOfLine[i])
                    }
                }
                let key = newArr
                    .map(e => e.toUpperCase());
                key = isNum(key).join('')
                output.push(key)
            } else if (line.length == 25) {
                let arrOfLine = line.split('');
                let newArr = [];
                for (let i = 0; i < arrOfLine.length; i++) {
                    if (i % 5 == 0 && i != 0) {
                        newArr.push('-');
                        newArr.push(arrOfLine[i])
                    } else {
                        newArr.push(arrOfLine[i])
                    }
                }
                let key = newArr
                    .map(e => e.toUpperCase());
                key = isNum(key).join('')
                output.push(key)
            }

        }
    }
    console.log(output.join(', '))
    function isNum(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == Number(arr[i])) {
                arr[i] = Math.abs(arr[i] - 9)
            }
        }
        return arr;
    }
}

solve([ 'xPt8VYhUDalilWLvb6uMSGEEf&KWQ{R.@/HZCbbV++1o]V+oG@@fF^93&y6fT5EGFgZHqlFiS' ]);
solve(['t1kjZU764zIME6Dl9ryD0g1U8&-P4*(`Q>:x8\\yE1{({X/Hoq!gR.&rg93bXgkmILW188m&KroGf1prUdxdA4ln&U3WH9kXPY0SncCfs']);