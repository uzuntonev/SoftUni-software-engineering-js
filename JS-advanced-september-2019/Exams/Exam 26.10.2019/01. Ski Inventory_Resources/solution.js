function solve() {
    const availableProducts = document.querySelector('#products > ul');
    const [ name, quantity, price ] = Array.from(document.querySelectorAll('#add-new input'));
    const totalPrice = document.querySelectorAll('h1')[1];
    const btnBuy = document.querySelector('#myProducts > button');
    const myProducts = document.querySelector('#myProducts > ul');
    const [ _, filterInput, filterBtn ] = document.querySelector('div.filter').children;

    document.querySelector('#add-new button').addEventListener('click', (ev) => {
        ev.preventDefault();
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = name.value;
        const strong = document.createElement('strong');
        strong.textContent = `Available: ${quantity.value}`;
        const div = document.createElement('div');
        const strongPrice = document.createElement('strong');
        strongPrice.textContent = Number(price.value).toFixed(2);
        const btnAddToList = document.createElement('button');
        btnAddToList.textContent = 'Add to Client\'s List';

        btnAddToList.addEventListener('click', (ev) => {
            const available = ev.target.parentNode.parentNode.children[1];
            const arr = available.textContent.split(' ');
            if (Number(arr[1]) === 1) { 
                ev.target.parentNode.parentNode.remove();
            }
            arr[1] = Number(arr[1]) - 1;
            available.textContent = arr.join(' ');
            const liChildren = Array.from(ev.target.parentNode.parentNode.children);
            const productLi = liChildren[0];
            const priceLi = liChildren[2].children[0];

            const li = document.createElement('li');
            li.textContent = productLi.textContent;
            const strongMyProductPrice = document.createElement('strong');
            strongMyProductPrice.textContent = priceLi.textContent;
            li.appendChild(strongMyProductPrice);
            myProducts.appendChild(li);

            const arrTotalPrice = totalPrice.textContent.split(' ');
            arrTotalPrice[2] = (Number(arrTotalPrice[2]) + Number(priceLi.textContent)).toFixed(2);
            totalPrice.textContent = arrTotalPrice.join(' ');
        });

        li.appendChild(span);
        li.appendChild(strong);

        div.appendChild(strongPrice);
        div.appendChild(btnAddToList);
        li.appendChild(div);
        availableProducts.appendChild(li);
    });

    filterBtn.addEventListener('click', () => {
        const filterValue = filterInput.value;
        Array.from(availableProducts.children).forEach(li => {
            if(!li.children[0].textContent.includes(filterValue)){
                li.style.display = 'none'; 
            }
        });

    });

    btnBuy.addEventListener('click', (ev) => {
        const ul = ev.target.parentNode.children[1];
        ul.innerHTML = '';
        totalPrice.textContent = 'Total Price: 0.00';
    });
}
