function solve() {
    const content = document.querySelector('#input').textContent;
    const output = document.querySelector('#output');
    const paragraph = document.createElement('p');

    function formater(text) {
        const array = text
            .split(' ')
            .filter(e => e.length)
            .join(' ').split('. ');
        return array;
    }

    const data = formater(content);
    const result = [];

    while(data.length > 0) {
        const curr = data.splice(0,3).join('. ');

        result.push(curr);
    }
    console.log(result); 
    for (const el of result) {
        paragraph.textContent = el;
        output.appendChild(paragraph);
    }



 
}
