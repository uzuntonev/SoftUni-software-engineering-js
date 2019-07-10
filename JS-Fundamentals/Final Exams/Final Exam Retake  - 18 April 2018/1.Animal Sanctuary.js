function solve(input) {
    input.shift();
    let totalWeight = 0;

    let calculateWeight = (name, kind) => {
        let patternNameAndKind = /[A-Za-z]+/g;
        let patternNameAndKindDigits = /[0-9]/g;
        let nameLetters = name.match(patternNameAndKind);
        let nameDigits = name.match(patternNameAndKindDigits);
        let kindLetters = kind.match(patternNameAndKind);
        let kindDigits = kind.match(patternNameAndKindDigits);
        let obj = { name: '', kind: '', sum: 0 };

        if (nameLetters != null) {
            obj.name = nameLetters.join('')
        }

        if (nameDigits != null) {
            obj.sum += nameDigits.map(Number).reduce((a, b) => a + b);
        }

        if (kindLetters != null) {
            obj.kind = kindLetters.join('')
        }

        if (kindDigits != null) {
            obj.sum += kindDigits.map(Number).reduce((a, b) => a + b);
        }
        return obj
    }

    for (const line of input) {
        let pattern = /^n:[^;]+;t:[^;]+;c--[A-Za-z\s]+$/g;
        let [name, kind, country] = line.split(';');

        if (line.match(pattern)) {
            name = name.split('n:')[1];
            kind = kind.split('t:')[1];
            country = country.split('c--')[1];
            let objAnimal = calculateWeight(name, kind);
            totalWeight += objAnimal.sum;
            console.log(`${objAnimal.name} is a ${objAnimal.kind} from ${country.split('').join('')}`);
        }
    }
    console.log(`Total weight of animals: ${totalWeight}KG`)
}

// solve([
//     '3',
//     'n:M5%ar4#le@y;t:B3#e!!a2#2r;c--Australia',
//     'n:G3e%6org43e;t:C€$at2%;c--Africa',
//     'n:AlicE:Won;c-India']
// );
solve(['4',
    'n:Bo^%4b35454bie#$;t:Ele5ph#$34a%nt;c--Africa',
    'n:Honey;t:Ti^^5ger;c--India',
    'bla;t:1234a;c--America',
    'n:A#$@545n;t:Cat241$@#23;cGermany'])
