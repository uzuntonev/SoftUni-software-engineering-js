function solve(input) {
    let pattern = /^([#$%*&])[A-Za-z]+\1=[\d]+!![A-Za-z0-9\w\d!@#$%^&*\]\[()']+$/g;
    for (const line of input) {
        if (line.match(pattern)) {
            let name = line.split('=')[0];
            name = name.match(/[A-Za-z]/g).join('');
            let length = line
                .split('!!')[0]
                .split('=')[1];
            let geohashcode = line.substring(line.indexOf('!!') + 2);
            if (length == geohashcode.length) {
             let result = ''
                for (let i = 0; i < geohashcode.length; i++) {
                    let charCode = geohashcode[i].charCodeAt() + Number(length);
                    result +=  String.fromCharCode(charCode);
                }
                console.log(`Coordinates found! ${name} -> ${result}`);
                break;
            } else {
                console.log(`Nothing found!`);
            }
        } else {
            console.log(`Nothing found!`);
        }
    }
}

solve([
    '%GiacomoAgostini%=7!!hbqw',
    '&GeoffDuke*=6!!vjh]zi',
    'JoeyDunlop=10!!lkd,rwazdr',
    'Mike??Hailwood=5!![pliu',
    '#SteveHislop#=16!!df%TU[Tj(h!!TT[S']
);
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
solve([ 
'Ian6Hutchinson=7!!\\(58ycb4',
'#MikeHailwood#!!\'gfzxgu6768=11',
'slop%16!!plkdek/.8x11ddkc',
'$Steve$=9Hhffjh',
'*DavMolyneux*=15!!efgk#\'_$&UYV%h%',
'RichardQ^uayle=16!!fr5de5kd' ]
)