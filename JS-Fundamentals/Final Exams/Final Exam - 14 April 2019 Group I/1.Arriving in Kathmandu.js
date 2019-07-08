function solve(input) {
    input.pop();
    let patternMountainAndGeohashcode = /[A-Za-z0-9<]+/g;
    let lenghtPattern = /[=][0-9]+/g;

    for (const line of input) {
     
        let b = line.match(lenghtPattern);
        result = line.replace(b, '')
        let a = result.match(patternMountainAndGeohashcode).join('')
        let [mountain, geohashcode] = a.split('<<');
        console.log(mountain, geohashcode)
        // console.log(mountain, geohashcode)
    }
}

solve([
    '!@Ma?na?sl!u@=7<<tv58ycb4845',
    'E!ve?rest=.6<<tuvz26',
    '!K@2.,##$=4<<tvnd',
    '!Shiha@pan@gma##9<<tgfgegu67',
    '!###Anna@pur@na##=16<<tv5dekdz8x11ddkc',
    'Last note']);