function notify(message) {
    const notifyField = document.querySelector('#notification');
    notifyField.innerHTML = message;
    notifyField.style.display = 'block';
    setTimeout(()=>{
        notifyField.style.display = 'none';
    },2000);
}
