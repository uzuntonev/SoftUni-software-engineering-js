function solve() {
    const array = document.querySelector('#array');
    const result = document.querySelector('#result');

    function replaceWord(word) {
        word = word.replace(/!/g, 1);
        word = word.replace(/%/g, 2);
        word = word.replace(/#/g, 3);
        word = word.replace(/\$/g, 4);
        return word.toLowerCase();
    }
    const arr = JSON.parse(array.value);
    const specialKey = arr.shift();
    const pattern = new RegExp(`(\\s|^)(${specialKey}\\s+)([!#$%A-Z]{8,})(\\.|,|\\s|$)`, 'gim');

    arr.forEach(element => {
        while (word = pattern.exec(element)) {
            if (word[3].toUpperCase() === word[3]) {
                element = element.replace(word[3], replaceWord(word[3]));
            }
        }
        const p = document.createElement('p');
        p.innerHTML = element;
        result.appendChild(p);
    });
}
