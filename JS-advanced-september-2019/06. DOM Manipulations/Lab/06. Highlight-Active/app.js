function focus() {
    Array.from(document.querySelectorAll('input'))
        .forEach(e => e.addEventListener('focus', (ev) => {
            ev.target.parentNode.classList.add('focused');
        }));
    Array.from(document.querySelectorAll('input'))
        .forEach(e => e.addEventListener('blur', (ev) => {
            ev.target.parentNode.classList.remove('focused');
        }));
}
