function solve() {
    const input = document.querySelector('#searchField');
    const rows = document.querySelectorAll('tr');
    document.querySelector('#searchBtn').addEventListener('click', () => {
        rows.forEach(e => e.className = '');
        for (let i = 2; i < rows.length; i++) {
            [ ...rows[i].children ].forEach(e => {
                if (e.innerHTML.includes(input.value)) {
                    rows[i].className = 'select';
                }
            });
        }
        input.value = '';
    });
}

// Judge 16/100 !
