function attachEvents() {
    const btnSubmit = document.querySelector('#submit');
    const btnRefresh = document.querySelector('#refresh');
    const btnClear = document.querySelector('#clear');
    const inputAuthor = document.querySelector('#author');
    const inputContent = document.querySelector('#content');
    const textarea = document.querySelector('#messages');

    const url = 'https://fir-eb382.firebaseio.com/messanger/.json';

    function sendMessage() {
        const headers = {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ author: inputAuthor.value, content: inputContent.value }),
        };

        fetch(url, headers)
            .then(res => {
                if(!res.ok){
                    throw new Error('Something went wrong!');
                }
                return res.json();
            })
            .then(() => {
                inputAuthor.value = '';
                inputContent.value = '';
            });
    }

    function displayMessages(){
        fetch(url)
            .then(res => {
                if(!res.ok){
                    throw new Error('Something went wrong!');
                }
                return res.json();
            })
            .then(data => {
                const messages = Object.values(data)
                    .map(msg => `${msg.author}: ${msg.content}`)
                    .join('\n');
                textarea.value = messages;
            });
    }

    function clearMessages() {
        textarea.value = '';
    }
    
    btnClear.addEventListener('click', clearMessages);
    btnRefresh.addEventListener('click', displayMessages);
    btnSubmit.addEventListener('click', sendMessage);
}

attachEvents();
