function attachEvents() {
    const phonebookList = document.querySelector('#phonebook');
    const btnLoad = document.querySelector('#btnLoad');
    const btnCreate = document.querySelector('#btnCreate');
    const person = document.querySelector('#person');
    const phone = document.querySelector('#phone');
    const url = (id = '') => `https://phonebook-ef107.firebaseio.com/phonebook/${id}.json`;

    function loadContacts() {
        cleaner();

        fetch(url())
            .then(handlerError)
            .then(res => res.json())
            .then(loadHTML)
            .catch(err => console.log(err));
    }

    function createContact() {
        if(person.value === '' || phone.value === ''){
            alert('Please fill input fields!');
            return;
        }
        const headers = {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ person: person.value, phone: phone.value }),
        };

        fetch(url(), headers)
            .then(handlerError)
            .then(loadContacts)
            .then(cleaner)
            .catch(err => console.log(err));
    }

    function deleteContact() {
        const headers = { method: 'DELETE' };
        const id = this.getAttribute('data-id');

        fetch(url(id), headers)
            .then(handlerError)
            .then(loadContacts)
            .then(cleaner)
            .catch(err => console.log(err));
    }

    function loadHTML(data) {
        Object.entries(data).forEach(([ contactID, contact ]) => {
            const li = document.createElement('li');
            const btnDelete = document.createElement('button');
            const span = document.createElement('span');
            btnDelete.textContent = 'Delete';
            btnDelete.setAttribute('data-id', contactID);
            span.textContent = `${contact.person}: ${contact.phone}`;
            li.appendChild(span);
            li.appendChild(btnDelete);
            phonebookList.appendChild(li);
            btnDelete.addEventListener('click', deleteContact);
        });
    }

    function cleaner() {
        person.value = '';
        phone.value = '';
        phonebookList.innerHTML = '';
    }

    function handlerError(res){
        if (!res.ok) {
            throw new Error(`Something went wrong! Status: ${res.status}, Status text: ${res.statusText}`);
        }
        return res;
    }

    btnCreate.addEventListener('click', createContact);
    btnLoad.addEventListener('click', loadContacts);
}

attachEvents();
