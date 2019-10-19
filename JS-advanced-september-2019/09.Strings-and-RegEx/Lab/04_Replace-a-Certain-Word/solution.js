function solve() {
    const result = document.querySelector('#result');
    const text = document.querySelector('#text');
    const word = document.querySelector('#word');
    function replaceWord(str, arr) {
        arr = JSON.parse(arr);
        const lookingWord = arr[0].split(' ')[2];
        return arr
            .map(x => x.replace(new RegExp(lookingWord, 'gim'), str))
            .map(x => `<p>${x}</p>`)
            .join('');
    }
    result.innerHTML = replaceWord(word.value, text.value);
}

