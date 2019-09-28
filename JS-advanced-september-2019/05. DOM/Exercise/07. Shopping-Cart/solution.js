function solve() {
    const textArea = document.querySelector('textarea');
    let total = 0;
    const products = new Set();
    let isCheckout = false ;
    document.querySelector('.checkout').addEventListener('click', () => {
        if (isCheckout){
            return;
        }
        textArea.value += `You bought ${[ ...products ].join(', ')} for ${total.toFixed(2)}.`;
        isCheckout = true;
    });
    [ ...document.querySelectorAll('.add-product') ].forEach(e => e.addEventListener('click', (ev) => {
        if (isCheckout){
            return;
        }
        const price = ev.target.parentElement.parentElement.querySelector('.product-line-price').innerHTML;
        const product = ev.target.parentElement.parentElement.querySelector('.product-title').innerHTML;
        textArea.value += `Added ${product} for ${price} to the cart.\n`;
        total += Number(price);
        products.add(product);
    }));
}
