function addItem() {
    const input = document.querySelector('#newText');

    const eventDelete = (ev) => {
        ev.target.parentElement.parentElement.removeChild(ev.target.parentElement);
    };
    function createElementA(el, text, attribute, event, func) {
        const element = document.createElement(el);
        element.innerHTML = text;
        element[attribute.name] = attribute.value;
        element.addEventListener(event, func);
        return element;
    }
    const a = createElementA ('a', '[Delete]' , { name: 'href', value: '#' },'click', eventDelete);
    
    const li = document.createElement('li');
    li.innerHTML = input.value;

    document.querySelector('#items').appendChild(li).appendChild(a);
    input.value = '';
}
