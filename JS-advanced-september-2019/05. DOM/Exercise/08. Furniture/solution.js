function solve() {
    const data = {
        cart: [],
        total: 0,
        decFact: 0,
    };
    document.querySelector('tbody tr input').disabled = false;

    function createElement(type, content, attr) {
        const el = document.createElement(type);
        if (content) {
            el.innerHTML = content;
        }
        if (attr) {
            el[attr.name] = attr.value;
        }
        return el;
    }

    function append(parent, child){
        return parent.appendChild(child);
    }

    function createRow(el) {

        const tr = document.createElement('tr');
        const img = createElement('img', undefined, { name: 'src', value: el.img });
        const name = createElement('p', el.name);
        const price = createElement('p', el.price);
        const decFactor = createElement('p', el.decFactor);
        const input = createElement('input', undefined, { name: 'type', value: 'checkbox' });
        
        append(tr, createElement('td')).appendChild(img);
        append(tr, createElement('td')).appendChild(name);
        append(tr, createElement('td')).appendChild(price);
        append(tr, createElement('td')).appendChild(decFactor);
        append(tr, createElement('td')).appendChild(input);
        append(document.querySelector('tbody'), tr);
    }

    function buy(el, data) {
        const [ name, price, decFactor ] = [ ...el.querySelectorAll('p') ];
        data.cart.push(name.innerHTML);
        data.total += Number(price.innerHTML);
        data.decFact += Number(decFactor.innerHTML);
    }

    function checkOut(data) {
        const output = document.querySelectorAll('textarea')[1];
        output.value = '';
        output.value = `Bought furniture: ${data.cart.join(', ')}
Total price: ${data.total.toFixed(2)}
Average decoration factor: ${data.decFact / data.cart.length}`;
    }

    function handlerGenerate() {
        const value = JSON.parse(document.querySelectorAll('textarea')[0].value);
        value.forEach(e => {
            createRow(e);
        });
    }

    function handlerCheckOut() {
        [ ...document.querySelectorAll('tbody tr input') ].forEach(e => {
            if (e.checked) {
                buy(e.parentElement.parentElement, data);
                e.checked = false;
            }
        });
        checkOut(data);
    }

    document.querySelectorAll('button')[0].addEventListener('click', handlerGenerate);
    document.querySelectorAll('button')[1].addEventListener('click', handlerCheckOut);
}
