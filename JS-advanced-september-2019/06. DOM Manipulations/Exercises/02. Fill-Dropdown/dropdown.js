function addItem() {
    const selectMenu = document.querySelector('#menu');
    const value = document.querySelector('#newItemValue');
    const text = document.querySelector('#newItemText');
    function createOption(value, text){
        const option = document.createElement('option');
        option.innerHTML = text.value;
        option.value = value.value;
        return option;
    }
    selectMenu.appendChild(createOption(value, text));
    value.value = '';
    text.value = '';
}
