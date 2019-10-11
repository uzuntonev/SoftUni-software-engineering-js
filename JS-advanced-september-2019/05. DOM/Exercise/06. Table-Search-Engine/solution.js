function solve() {
    function handler() {
        const input = document.querySelector('#searchField');
        const rows = Array.from(document.querySelectorAll('tbody tr'));
        rows.forEach(row => row.classList.remove('select'));
        if (input.value !== '' && input !== null) {
            rows.forEach(row => {
                if (row.textContent.toLowerCase().includes(input.value.toLowerCase())) {
                    row.classList.add('select');
                }
            });
        }
        input.value = '';
    }

    document.querySelector('#searchBtn').addEventListener('click', handler);
}

