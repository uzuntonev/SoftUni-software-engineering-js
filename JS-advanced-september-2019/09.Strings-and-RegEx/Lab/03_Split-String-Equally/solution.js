function solve() {
    const text = document.querySelector('#text');
    const number = document.querySelector('#number');
    const result = document.querySelector('#result');

    function stringEqually(string, n) {
        return string
            .padEnd(Math.ceil(string.length / n) * n, string)
            .match(new RegExp('.'.repeat(n), 'g'))
            .join(' ');
    }

    result.textContent = stringEqually(text.value, number.value);
}

