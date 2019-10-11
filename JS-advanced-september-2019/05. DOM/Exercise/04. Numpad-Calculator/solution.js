function solve() {
    const patternExp = /[\d.]+ [+\-*\/] [\d.]+/g;
    const patternDelimiter = /[+\-*\/]/g;
    const operators = [ '+', '-', '*', '/' ];
    
    const input = document.querySelector('#expressionOutput');
    const output = document.querySelector('#resultOutput');

    function calculate(string) {
        const delimiter = string.match(patternDelimiter);
        const [ a, b ] = string
            .split(delimiter);
        const calc = {
            '+': (a, b) => a + b,
            '-': (a, b) => a - b,
            '*': (a, b) => a * b,
            '/': (a, b) => a / b,
        };
        return calc[delimiter](Number(a), Number(b));
    }

    function handler(ev) {
        if (ev.target.nodeName === 'BUTTON'){
            if (ev.target.value === 'Clear') {
                input.innerHTML = '';
                output.innerHTML = '';
                return;
            }
            if (ev.target.value === '=') {
                output.innerHTML = input.innerHTML.match(patternExp) 
                    ? calculate(input.innerHTML)
                    : 'NaN';
            } else {
                input.innerHTML += operators.includes(ev.target.value) 
                    ? ' ' + ev.target.value + ' '
                    : ev.target.value;
            }
        }
    }

    document.addEventListener('click', handler);
}
