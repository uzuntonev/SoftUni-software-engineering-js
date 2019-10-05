function solve() {
    const input = document.querySelector('#searchField');
    const rows = Array.from(document.querySelectorAll('tr'));
    document.querySelector('#searchBtn').addEventListener('click', () => {
        rows.forEach(e => e.className = '');
        if (input.value !== '') {
            for (let i = 2; i < rows.length; i++) {
                Array.from(rows[i].children).forEach(e => {
                    if (e.innerHTML.toLowerCase().includes((input.value).toLowerCase())) {
                        rows[i].className = 'select';
                    }
                });
            }
        }
        input.value = '';
    });
}

