function solve() {
    const content = document.querySelector('#input').textContent;
    const output = document.querySelector('#output');
    function formater(text) {
        const array = text
            .split(' ')
            .filter(e => e.length)
            .join(' ').split('. ');
        return array;
    }

    const data = formater(content);
    const sentences = [];

    while (data.length > 0) {
        const curr = data.splice(0, 3).join('. ');
        sentences.push(curr);
    }
    sentences.forEach(e => output.innerHTML += `<p> ${e} </p>`);
}
