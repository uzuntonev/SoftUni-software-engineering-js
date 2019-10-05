function create(words) {
    const output = document.querySelector('#content');
    function creatDiv(value){
        const div = document.createElement('div');
        const p = document.createElement('p');
        p.style.display = 'none';
        p.innerHTML = value;
        div.appendChild(p);
        return div;
    }
    words.forEach(e => {
        output.appendChild(creatDiv(e));
    });

    Array.from(document.querySelectorAll('div'))
        .forEach(e => e.addEventListener('click', (ev) => {
            ev.target.children[0].style.display = 'block'; 
        }));
}
