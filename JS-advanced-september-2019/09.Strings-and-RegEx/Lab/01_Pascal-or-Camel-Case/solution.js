function solve() {
    const inputDate = document.querySelector('#text');
    const convention = document.querySelector('#naming-convention');
    const result = document.querySelector('#result');

    function transformString(str) {
        return str
            .toLocaleLowerCase()
            .split(' ')
            .map(parseFirstToUpperCase)
            .join('');
    }

    function parseFirstLetter(func, str) {
        return `${str[0][func]() + str.substr(1)}`;
    }

    const parseFirstToUpperCase = parseFirstLetter.bind(undefined, 'toLocaleUpperCase');
    const parseFirstToLowerCase = parseFirstLetter.bind(undefined, 'toLocaleLowerCase');

    const map = {
        'Pascal Case': x => transformString(x),
        'Camel Case': x => parseFirstToLowerCase(transformString(x)),
    };
    function parseString(string, currentCase) {
        if (map[currentCase] === undefined) {
            return 'Error!';
        }
        return map[currentCase](string);
    }

    result.innerHTML = parseString(inputDate.value, convention.value);
    inputDate.value = '';
    convention.value = '';
}

