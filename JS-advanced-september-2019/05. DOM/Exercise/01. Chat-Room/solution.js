function solve() {
    const input = document.querySelector('#chat_input');
    document.querySelector('#send').addEventListener('click', () => {
        const newMassage = document.createElement('div');
        newMassage.classList = 'message my-message';
        newMassage.innerHTML = input.value;
        document.querySelector('#chat_messages').appendChild(newMassage);
        input.value = '';
    });
}


