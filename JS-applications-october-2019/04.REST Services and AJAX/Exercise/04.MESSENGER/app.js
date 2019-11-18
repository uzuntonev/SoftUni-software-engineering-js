function attachEvents() {
    const btnSubmit = document.querySelector('#submit');
    const btnRefresh = document.querySelector('#refresh');
    const btnClear = document.querySelector('#clear');
    const btnDelete = document.querySelector('#delete');
    const inputAuthor = document.querySelector('#author');
    const inputContent = document.querySelector('#content');
    const textarea = document.querySelector('#messages');
    let keys;
    const url = (x = '') => `https://fir-eb382.firebaseio.com/messanger/${x}.json`;

    function sendMessage() {
        if(inputAuthor.value === '' || inputContent.value === ''){
            alert('Please fill input fields!');
            throw new Error('Input fields are empty!');
        }

        const headers = {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: { author: inputAuthor.value, content: inputContent.value },
        };

        fetch(url(), headers)
            .then(handlerError)
            .then(res => res.json())
            .then(clearMessages)
            .catch(console.error);
    }

    function displayMessages() {
        fetch(url())
            .then(handlerError)
            .then(res => res.json())
            .then(data => {
                if(data === null){
                    textarea.value = 'There is no more messages!';
                    throw new Error ('DB is empty !');
                } 
                keys = Object.keys(data);
                const messages = Object.values(data)
                    .map(msg => `${msg.author}: ${msg.content}`)
                    .join('\n');
                textarea.value = messages;
            })
            .catch(console.error);
    }

    function deleteMessage() {
        if(keys === undefined || keys.length === 0){
            textarea.value = 'There is no more messages!';
            throw new Error ('DB is empty !');
        }
        const headers = { method: 'DELETE' };
        const lastMsg = keys.pop();

        fetch(url(lastMsg), headers)
            .then(handlerError)
            .then(displayMessages)
            .catch(console.error);
    }

    function handlerError(res){
        if (!res.ok) {
            throw new Error(`Something went wrong! Status: ${res.status}, Status text: ${res.statusText}`);
        }
        return res;
    }

    function clearMessages() {
        textarea.value = '';
        inputAuthor.value = '';
        inputContent.value = '';
    }

    btnDelete.addEventListener('click', deleteMessage);
    btnClear.addEventListener('click', clearMessages);
    btnRefresh.addEventListener('click', displayMessages);
    btnSubmit.addEventListener('click', sendMessage);
}

attachEvents();
