function solve() {
    document.querySelector('#container button').addEventListener('click', convert);
    function convert() {
        const input = document.querySelector('#input');
        const result = document.querySelector('#result');
        if (menuTo.value === 'binary') {
            result.value = (Number(input.value)).toString(2);
        } else {
            result.value = (Number(input.value)).toString(16).toUpperCase();
        }
        input.value = '';
    }

    function createElement(el, value, content) {
        const newEL = document.createElement(el);
        newEL.innerHTML = content;
        newEL.value = value;
        return newEL;
    }
    const menuTo = document.querySelector('#selectMenuTo');

    const binary = createElement('option', 'binary', 'Binary');
    const hexadeicmal = createElement('option', 'hexadeicmal', 'Hexadeicmal');

    // menuTo.appendChild(binary);
    // menuTo.appendChild(hexadeicmal);
    menuTo.add(binary);
    menuTo.add(hexadeicmal);
}
