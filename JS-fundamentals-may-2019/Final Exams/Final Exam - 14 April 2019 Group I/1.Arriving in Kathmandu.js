function solve(input) {
    input.pop();
    let pattern = /^[!@#$%^&*?\w\d]+=[0-9]+<<[\w\d\s]+$/g
    for (const line of input) {
        if (line.match(pattern)) {
            let name = line.split('=')[0];
            let length = line
                .split('<<')[0]
                .split('=')[1];
            let geohashcode = line.split('<<')[1];
            if (length == geohashcode.length) {
                let namePattern = /[\w]+/g;
                name = name.match(namePattern).join('')
                console.log(`Coordinates found! ${name} -> ${geohashcode}`)
            } else {
                console.log('Nothing found!')
            }
        } else {
            console.log('Nothing found!')
        }
    }
}

solve([
    '!@Ma?na?sl!u@=7<<tv58ycb4845',
    'E!ve?rest=.6<<tuvz26',
    '!K@2.,##$=4<<tvnd',
    '!Shiha@pan@gma##9<<tgfgegu67',
    '!###Anna@pur@na##=16<<tv5dekdz8x11ddkc',
    'Last note']);

solve([
    'Ka?!#nch@@en@ju##nga@=3<<thfbghvn',
    '=9Cho?@#Oyu<<thvb7ydht',
    'Nan??ga#Par!ba!t?=16<<twm03q2rx5hpmyr6',
    'Dhau??la#gi@ri?!#=3<<bvnfhrtiuy',
    'Last note'
    
]);