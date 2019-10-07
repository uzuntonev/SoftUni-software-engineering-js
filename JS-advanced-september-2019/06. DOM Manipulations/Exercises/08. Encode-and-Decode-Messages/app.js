function encodeAndDecodeMessages() {
    const encodeBtn = document.querySelectorAll('button')[0];
    const decodeBtn = document.querySelectorAll('button')[1];
    const sendArea = encodeBtn.parentNode.querySelector('textarea');
    const receiveArea = decodeBtn.parentNode.querySelector('textarea');

    function encode() {
        receiveArea.value = sendArea.value
            .split('')
            .map(char => char.charCodeAt() + 1)
            .map(ascii => String.fromCharCode(ascii))
            .join('');
        sendArea.value = '';
    }
    function decode() {
        receiveArea.value = receiveArea.value
            .split('')
            .map(char => char.charCodeAt() - 1)
            .map(ascii => String.fromCharCode(ascii))
            .join('');
    }
    encodeBtn.addEventListener('click', encode);
    decodeBtn.addEventListener('click', decode);
}
