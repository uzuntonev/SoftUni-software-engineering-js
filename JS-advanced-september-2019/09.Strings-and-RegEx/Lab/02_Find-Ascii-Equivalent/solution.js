function solve() {
    const input = document.querySelector('#text');
    const result = document.querySelector('#result');

    function convert(string) {
        let word = '';
        string.split(' ').forEach(element => {
            if (Number(element)) {
                word += String.fromCharCode(element);
            } else {
                const p = document.createElement('p');
                p.innerHTML = element.split('')
                    .map(x => x.charCodeAt())
                    .join(' ');
                result.appendChild(p);
            }
        });
        const p = document.createElement('p');
        p.innerHTML = word;
        result.appendChild(p);
    }

    convert(input.value);
    input.value = '';

    // Code below 66/100 Judge !!!

    // function createElementP(value) {
    //     const p = document.createElement('p');
    //     p.innerHTML = value;
    //     return p;
    // }

    // function asciiToChar(string) {
    //     return string
    //         .match(/\d+/g)
    //         .map(x => String.fromCharCode(Number(x)))
    //         .join('');
    // }

    // function charToAscii(string) {
    //     return string
    //         .match(/[^\d ]+/g)
    //         .map(x => x
    //             .split('')
    //             .map(e => e.charCodeAt())
    //             .join(' '));
    // }

    // charToAscii(input.value).forEach(e => result.appendChild(createElementP(e)));

    // result.appendChild(createElementP(asciiToChar(input.value)));
    
}
