function solve(input) {

    function isValid(line) {
        const pattern = /([#$%*&])(?<name>[\w]+)\1=(?<length>\d+)\!\!(?<code>.*)/g;
        let match;
        if (match = pattern.exec(line)) {
            if (match.groups.length == match.groups.code.length) {
                return obj = {
                    name: match.groups.name,
                    length: match.groups.length,
                    hashCode: match.groups.code
                };
            }
        }
        return null;
    }

    function decrypting(code, length) {
        let result = '';
        for (const char of code) {
            result += String.fromCharCode(char.charCodeAt(0) + Number(length));
        }
        return result;
    }

    for (const line of input) {
        const racer = isValid(line);
        if (racer != null) {
            let decrypedCode = decrypting(racer.hashCode, racer.length);
            console.log(`Coordinates found! ${racer.name} -> ${decrypedCode}`)
            break;
        } else {
            console.log('Nothing found!')
        }
    }
}

// solve([
//     '%GiacomoAgostini%=7!!hbqw',
//     '&GeoffDuke*=6!!vjh]zi',
//     'JoeyDunlop=10!!lkd,rwazdr',
//     'Mike??Hailwood=5!![pliu',
//     '#SteveHislop#=16!!df%TU[Tj(h!!TT[S']
// );
// console.log('>>>>>>>>>>')
solve([ 
'Ian6Hutchinson=7!!\\(58ycb4',
'#MikeHailwood#!!\'gfzxgu6768=11',
'slop%16!!plkdek/.8x11ddkc',
'$Steve$=9Hhffjh',
'*DavMolyneux*=15!!efgk#\'_$&UYV%h%',
'RichardQ^uayle=16!!fr5de5kd' ]
);