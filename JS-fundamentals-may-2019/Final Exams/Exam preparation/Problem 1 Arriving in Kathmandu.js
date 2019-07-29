function solve(input) {

    function isValidLine(line) {
        const pattern = /^([\w\d!@#$?]+)=([0-9]+)<<([\w\d\s]+)$/g
        const arr = [];
        let match;
        if (match = pattern.exec(line)) {
            match[2] == match[3].length ? arr.push(line) : void 0;
        }
        return arr;
    }
    function nameAndHashCode(line) {
        const pattern = /^([\w\d!@#$?]+)=(\d+)<<([\w\d\s]+)$/g;
        const patternName = /[A-Za-z0-9]/g;
        const arr = [];
        let match = pattern.exec(line);
        let name = match[1].match(patternName).join('');
        let hashCode = match[3];
        arr.push(name, hashCode);

        return arr;
    }
    
    for (const line of input) {
        if (line === 'Last note') {
            break;
        }
        let valid = isValidLine(line)
        if (valid.length > 0) {
               const output = nameAndHashCode(valid[0]);
               const name = output[0];
               const hashCode = output[1]
               console.log(`Coordinates found! ${name} -> ${hashCode}`);
        }else{
            console.log(`Nothing found!`)
        }
    }
}

solve([
    '!@Ma?na?sl!u@=7<<tv58ycb4845',
    'E!ve?rest=.6<<tuvz26',
    '!K@2.,##$=4<<tvnd',
    '!Shiha@pan@gma##9<<tgfgegu67',
    '!###Anna@pur@na##=16<<tv5dekdz8x11ddkc',
    'Nan??ga#Par!ba!t?=16<<twm03q2rx5hpmyr6',
    'Last note']
);
// solve([
//     'Ka?!#nch@@en@ju##nga@=3<<thfbghvn',
//     '=9Cho?@#Oyu<<thvb7ydht',
//     'Nan??ga#Par!ba!t?=16<<twm03q2rx5hpmyr6',
//     'Dhau??la#gi@ri?!#=3<<bvnfhrtiuy',
//     'Last note']
// );

function solve(input) {

    function isValidLine(line) {
        const pattern = /^([!@#$%^&*?\w\d]+)=([0-9]+)<<([\w\d\s]+)$/g
        const arr = [];
        let match;
        if (match = pattern.exec(line)) {
            match[2] == match[3].length ? arr.push(line) : void 0;
        }
        return arr;
    }
    function nameAndHashCode(line) {
        const pattern = /^([\w\d!@#$?]+)=(\d+)<<([\W\w\D\d]+)$/g;
        const patternName = /[A-Za-z0-9]/g;
        const arr = [];
        let match = pattern.exec(line);
        let name = match[1].match(patternName).join('');
        let hashCode = match[3];
        arr.push(name, hashCode);

        return arr;
    }
    
    for (const line of input) {
        if (line === 'Last note') {
            break;
        }
        let valid = isValidLine(line)
        if (valid.length > 0) {
               const output = nameAndHashCode(valid[0]);
               const name = output[0];
               const hashCode = output[1]
               console.log(`Coordinates found! ${name} -> ${hashCode}`);
        }else{
            console.log(`Nothing found!`)
        }
    }
}