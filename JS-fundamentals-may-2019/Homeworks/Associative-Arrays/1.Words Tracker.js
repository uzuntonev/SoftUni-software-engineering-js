function solve(input) {
    let wordsLooking = input.shift().split(' ');
    let obj = {};
    for (const line of wordsLooking) {
        obj[line] = 0;
    }
    for (const line of input) {
        if(line in obj){
            obj[line]++;
        }
    }
    Object.entries(obj).sort((a, b) => b[1] - a[1])
                       .forEach(e => console.log(`${e[0]} - ${e[1]}`))
}

solve([
    'this sentence',
    'In','this','sentence','you','have','to','count','the','occurances','of','the'
    ,'words','this','and','sentence','because','this','is','your','task'
    ]);