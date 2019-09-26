function solve() {
    const option = document.querySelector('#selectMenuTo option');
    const menuTo = document.querySelector('#selectMenuTo');
    const input = document.querySelector('#input');
    const result = document.querySelector('#result');
    const btn = document.querySelector('#container button').addEventListener('click',calc);

    function createOption(el, value, content){
        const newEL = el.cloneNode();
        newEL.innerHTML = content;
        newEL.value = value;
        return newEL; 
    }

    const binary = createOption(option, 'binary', 'Binary');
    const hexadeicmal = createOption(option, 'hexadeicmal', 'Hexadeicmal');

    menuTo.appendChild(binary);
    menuTo.appendChild(hexadeicmal);
    menuTo.add(binary);
    menuTo.add(hexadeicmal);

    function calc() {
        if(menuTo.value === 'binary'){
            result.value = (Number(input.value)).toString(2);
        }else {
            result.value = (Number(input.value)).toString(16).toUpperCase();
        }
        input.value = '';
    }
}
