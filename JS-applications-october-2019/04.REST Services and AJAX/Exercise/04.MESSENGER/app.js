function attachEvents() {
    const btnSubmit = document.querySelector('#submit');
    const btnRefresh = document.querySelector('#refresh');
    const btnClear = document.querySelector('#clear');
    const btnDelete = document.querySelector('#delete');
    const inputAuthor = document.querySelector('#author');
    const inputContent = document.querySelector('#content');
    const textarea = document.querySelector('#messages');
    let keys;
    const url = 'https://fir-eb382.firebaseio.com/messanger/.json';

    function sendMessage() {
        if(inputAuthor.value === '' || inputContent === ''){
            alert('Please fill input fields!');
            throw new Error('Input fields are empty!');
        }
        const headers = {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ author: inputAuthor.value, content: inputContent.value }),
        };

        fetch(url, headers)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Something went wrong!');
                }
                return res.json();
            })
            .then(() => {
                clearMessages();
            });
    }

    function displayMessages() {
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Something went wrong!');
                }
                return res.json();
            })
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
            });
    }

    function clearMessages() {
        textarea.value = '';
        inputAuthor.value = '';
        inputContent.value = '';
    }

    function deleteMessage() {
        if(keys === undefined || keys.length === 0){
            textarea.value = 'There is no more messages!';
            throw new Error ('DB is empty !');
        }
        const deleteUrl = url.slice(0, -5) + keys.pop() + '.json';
        fetch(deleteUrl, { method: 'DELETE' })
            .then(()=>{

                displayMessages();
            });
    }

    btnDelete.addEventListener('click', deleteMessage);
    btnClear.addEventListener('click', clearMessages);
    btnRefresh.addEventListener('click', displayMessages);
    btnSubmit.addEventListener('click', sendMessage);
}

attachEvents();
