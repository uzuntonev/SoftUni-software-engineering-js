function attachEvents() {
    const phonebookList = document.querySelector('#phonebook');
    const btnLoad = document.querySelector('#btnLoad');
    const btnCreate = document.querySelector('#btnCreate');
    const person = document.querySelector('#person');
    const phone = document.querySelector('#phone');
    const url = 'https://phonebook-ef107.firebaseio.com/phonebook/';

    function loadContacts() {
        fetch(url + '.json')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Something went wrong!');
                }
                return res.json();
            })
            .then(data => {
                Object.entries(data).forEach(([ contactID, contact ]) => {
                    const li = document.createElement('li');
                    const btnDelete = document.createElement('button');
                    const span = document.createElement('span');
                    btnDelete.textContent = 'Delete';
                    btnDelete.id = contactID;
                    span.textContent = `${contact.person}: ${contact.phone}`;
                    li.appendChild(span);
                    li.appendChild(btnDelete);
                    phonebookList.appendChild(li);

                    btnDelete.addEventListener('click', deleteContact);
                });
            });
    }

    function createContact() {
        const headers = {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ person: person.value, phone: phone.value }),
        };

        fetch(url + '.json', headers)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Something went wrong!');
                }
                return res;
            })
            .then(() => {
                loadContacts();
                person.value = '';
                phone.value = '';
                phonebookList.innerHTML = '';
            });
    }

    function deleteContact() {
        const headers = { method: 'DELETE' };
        
        fetch(url + `${this.id}.json`, headers)
            .then(() => {
                phonebookList.innerHTML = '';
                loadContacts();
            });
    }

    btnCreate.addEventListener('click', createContact);
    btnLoad.addEventListener('click', loadContacts);
}

attachEvents();
