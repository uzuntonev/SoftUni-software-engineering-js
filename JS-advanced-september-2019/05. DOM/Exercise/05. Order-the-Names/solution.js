function solve() {
    document.querySelector('#exercise button').addEventListener('click', () => {
        const name = document.querySelector('#exercise input');
        const list = document.querySelectorAll('ol li');
        const char = name.value
            .toUpperCase()[0];
        const index = char
            .charCodeAt() - 65;
        const formatedName = char + name.value.substr(1).toLowerCase();
        list[index].innerHTML 
            ? list[index].innerHTML += ', ' + formatedName
            : list[index].innerHTML = formatedName;
        name.value = '';
    });
}
