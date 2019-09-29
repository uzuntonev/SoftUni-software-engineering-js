function deleteByEmail() {
    const result = document.querySelector('#result');
    const input = document.querySelector('input');
    const found = [ ...document.querySelectorAll('tbody tr') ]
        .find(e => e.children[1].innerHTML === input.value);
    if (found) {
        found.parentElement.removeChild(found);
        result.innerHTML = 'Deleted';
        input.value = '';
    } else {
        result.innerHTML = 'Not found.';
        input.value = '';
    }
}
