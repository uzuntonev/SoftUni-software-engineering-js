function attachGradientEvents() {
    const output = document.querySelector('#result');
    document.querySelector('#gradient').addEventListener('mousemove', (ev) => {
        output.innerHTML = `${Math.floor(ev.offsetX / 3)}%`;
    });
    document.querySelector('#gradient').addEventListener('mouseleave', () => {
        output.innerHTML = '';
    });
}
