function subtract() {
    const first = document.querySelector('#firstNumber');
    const second = document.querySelector('#secondNumber');
    const result = document.querySelector('#result');
    if (first === null || second === null || result === null){
        throw new Error('No elements....');
    }
    if (first.value && second.value){
        result.innerHTML = Number(first.value) - Number(second.value);
    }
}
