function lockedProfile() {
    function handler(ev){
        const lock = ev.target.parentNode.children[2].checked;
        const unlock = ev.target.parentNode.children[4].checked;
        const additionInfo = ev.target.parentNode.children[9];
        if (unlock && (ev.target.innerHTML === 'Show more')){
            additionInfo.style.display = 'block';
            ev.target.innerHTML = 'Hide it';
        }else if (unlock && (ev.target.innerHTML === 'Hide it')){
            additionInfo.style.display = 'none';
            ev.target.innerHTML = 'Show more';
        }
        if(lock && additionInfo.style.display === 'block'){
            return;
        }
    }
    Array.from(document.querySelectorAll('button'))
        .forEach(e => e.addEventListener('click', handler));
}
