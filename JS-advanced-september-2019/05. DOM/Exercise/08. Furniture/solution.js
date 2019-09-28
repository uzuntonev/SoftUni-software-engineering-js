function solve() {
    const bought = [];
    let total = 0;
    let decFact = 0;

    const output = document.querySelectorAll('textarea')[1];
    document.querySelector('tbody tr input').disabled = false;

    function createRow(el) {

        const tr = document.createElement('tr');
        const img = document.createElement('img');
        const pName = document.createElement('p');
        const pPrice = document.createElement('p');
        const pDecFactor = document.createElement('p');
        const input = document.createElement('input');
        input.type = 'checkbox';
    
        img.src = el.img;
        pName.innerHTML = el.name;
        pPrice.innerHTML = el.price;
        pDecFactor.innerHTML = el.decFactor;
        tr
            .appendChild(document.createElement('td'))
            .appendChild(img);
        tr
            .appendChild(document.createElement('td'))
            .appendChild(pName);
        tr
            .appendChild(document.createElement('td'))
            .appendChild(pPrice);
        tr
            .appendChild(document.createElement('td'))
            .appendChild(pDecFactor);
        tr
            .appendChild(document.createElement('td'))
            .appendChild(input);
        document.querySelector('tbody').appendChild(tr);
    }

    function buy(el) {
        const name = el.querySelectorAll('p')[0];
        const price = el.querySelectorAll('p')[1];
        const decFactor = el.querySelectorAll('p')[2];
        bought.push(name.innerHTML);
        total += Number(price.innerHTML);
        decFact += Number(decFactor.innerHTML);
    }

    document.querySelectorAll('button')[0].addEventListener('click', () => {
        const value = JSON.parse(document.querySelectorAll('textarea')[0].value);
        value.forEach(e => {
            createRow(e);
        });
    });

    document.querySelectorAll('button')[1].addEventListener('click', () => {
        [ ...document.querySelectorAll('tbody tr input') ].forEach(e => {
            if (e.checked) {
                buy(e.parentElement.parentElement);
                e.checked = false;
            }
        });
        output.value += `Bought furniture: ${bought.join(', ')}\n`; 
        output.value += `Total price: ${total.toFixed(2)}\n`; 
        output.value += `Average decoration factor: ${decFact / bought.length}`; 
    });
}
