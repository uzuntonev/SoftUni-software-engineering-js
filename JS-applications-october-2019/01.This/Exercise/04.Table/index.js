function solve(){
    const tbody = document.querySelector('table > tbody');
    tbody.addEventListener('click', function (ev){
        const trBackground = ev.target.parentNode.style;
        if(!trBackground.backgroundColor){
            Array.from(this.children).forEach(e => e.style.backgroundColor = '');
            trBackground.backgroundColor = '#413f5e';
        }else {
            trBackground.backgroundColor = '';
        }
    });
}
