function solve() {
    const dropdown = document.querySelector('#dropdown');
    const ul = document.querySelector('#dropdown-ul');
    const box = document.querySelector('#box');
    dropdown.addEventListener('click', () => {
        if(ul.style.display === 'block'){
            box.style.backgroundColor = 'black';
            box.style.color = 'white';
            ul.style.display = 'none';
        }else {
            ul.style.display = 'block';
        }
    });

    ul.addEventListener('click', function (ev){
        if(ev.target.className.includes('deep')){
            box.style.backgroundColor = ev.target.textContent; 
            box.style.color = 'black';
        }
    });
}
