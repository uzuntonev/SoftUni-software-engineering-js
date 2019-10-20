function acceptance() {
    const btn = document.querySelector('#acceptance');
    const fields = document.querySelector('#fields').children;
    const warehouse = document.querySelector('#warehouse');
    const company = fields[0].children[0];
    const product = fields[1].children[0];
    const quantity = fields[2].children[0];
    const scrape = fields[3].children[0];

    function handler() {
        if (company.value !== '' &&
            product.value !== '' &&
            !isNaN(quantity.value) &&
            !isNaN(scrape.value) &&
            quantity.value !== '' &&
            scrape.value !== '') {

            const availableQuantity = Number(quantity.value) - Number(scrape.value);
            if (availableQuantity <= 0) {
                company.value = '';
                product.value = '';
                quantity.value = '';
                scrape.value = '';
                return;
            }
            const div = document.createElement('div');
            const p = document.createElement('p');
            const button = document.createElement('button');
            p.innerHTML = `[${company.value}] ${product.value} - ${availableQuantity} pieces`;
            button.type = 'button';
            button.innerHTML = 'Out of stock';
            div.appendChild(p);
            div.appendChild(button);
            warehouse.appendChild(div);

            button.addEventListener('click',(ev)=>{
                ev.target.parentNode.remove();
            });
        }

        company.value = '';
        product.value = '';
        quantity.value = '';
        scrape.value = '';
    }


    btn.addEventListener('click', handler);
}

