function addItem() {
    const input = document.querySelector('#newItemText');
    const li = document.createElement('li');
    li.innerHTML = input.value; 
    document.querySelector('#items').appendChild(li);
    input.value = '';
}
