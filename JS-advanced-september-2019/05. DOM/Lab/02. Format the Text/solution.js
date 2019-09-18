function solve() {
    const content = document.querySelector('#input').textContent;
    
    // const paragraph = document.createElement('p');

    function formater(text) {
        const array = text
            .split(' ')
            .filter(e => e.length)
            .join(' ').split('. ');
        return array;
    }

    const data = formater(content);

 
}
