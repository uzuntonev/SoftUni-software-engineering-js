function solve() {
    const inputs = document.querySelectorAll('form > input');
    const book = inputs[0];
    const year = inputs[1];
    const price = inputs[2];
    const output = document.querySelector('#outputs').children;
    const oldBooksSection = output[0].querySelector('.bookShelf');
    const newBooksSection = output[1].querySelector('.bookShelf');
    const profit = document.querySelectorAll('h1')[1];

    function createBook(b, y, pr) {
        pr = (y >= 2000 
            ? Number(pr) 
            : Number(pr) * 0.85).toFixed(2);

        const div = document.createElement('div');
        div.classList.add('book');
        const p = document.createElement('p');
        p.innerHTML = `${b} [${y}]`;
        const btnBuy = document.createElement('button');
        btnBuy.innerHTML = `Buy it only for ${pr} BGN`;
        
        div.appendChild(p);
        div.appendChild(btnBuy);

        btnBuy.addEventListener('click', (ev) => {
            const arr = profit.innerHTML.split(' ');
            arr[3] = Number(arr[3]) + Number(pr);
            profit.innerHTML = arr.join(' ');
            ev.target.parentNode.remove();
        });

        if(y >= 2000){
            const btnMove = document.createElement('button');
            btnMove.innerHTML = 'Move to old section';
            div.appendChild(btnMove);
            btnMove.addEventListener('click', (ev) => {
                pr = (Number(pr) * 0.85).toFixed(2);
                const arr = ev.target.parentNode.children[1].innerHTML.split(' ');
                arr[4] =(Number(arr[4]) * 0.85).toFixed(2);
                ev.target.parentNode.children[1].innerHTML = arr.join(' ');
                oldBooksSection.appendChild(ev.target.parentNode);
                ev.target.remove();
            });
        }
        return div;
    }

    function handler(ev) {
        ev.preventDefault();
        if (book.value !== '' &&
            year.value > 0 &&
            price.value > 0) {
            if (year.value >= 2000) {
                newBooksSection.appendChild(createBook(book.value, year.value, price.value));
            }else {
                oldBooksSection.appendChild(createBook(book.value, year.value, price.value));
            }
        }
    }
    document.querySelector('form > button').addEventListener('click', handler);
}
