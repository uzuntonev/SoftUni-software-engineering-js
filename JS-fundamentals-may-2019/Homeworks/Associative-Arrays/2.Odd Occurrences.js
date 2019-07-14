function solve(str) {
    let arr = str.split(' ');
    let obj = {};
    for (let line of arr) {
        line = line.toLowerCase()
        if(!(line in obj)){
            obj[line] = 1;
        }else {
            obj[line]++;
        }
    }
    let result = [];
    Object.entries(obj).filter(e => e[1] % 2 !== 0).forEach(e => result.push(e[0]));
    console.log(result.join(' '));
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');