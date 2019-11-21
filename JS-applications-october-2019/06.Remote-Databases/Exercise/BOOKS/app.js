import { get, post, put, del } from '../requester.js';

const html = {
    createForm: {
        formElement: () => document.querySelector('#create-form'),
        title: () => document.querySelector('#title'),
        author: () => document.querySelector('#author'),
        isbn: () => document.querySelector('#isbn'),
    },
    editForm: {
        formElement: () => document.querySelector('#edit-form'),
        title: () => document.querySelector('#edit-title'),
        author: () => document.querySelector('#edit-author'),
        isbn: () => document.querySelector('#edit-isbn'),
        id: () => document.querySelector('#edit-id'),
    },
    loadBooks: () => document.querySelector('#loadBooks'),
    btnSubmit: () => document.querySelector('form button'),
    tableBody: () => document.querySelector('table tbody'),
};

const actions = {
    loadBooks: loadBooks,
    createBook: createBook,
    editBook: editBook,
    deleteBtn: deleteListener,
    editBtn: editListener,
};

async function loadBooks() {
    let books;
    try {
        books = await get('appdata', 'books');
    } catch (err) {
        console.error(err);
        alert(err);
    }
    html.tableBody().innerHTML = '';
    html.tableBody().append(...books.map(builtBookRow));
}

async function createBook() {
    const data = getInputData('createForm');
    try {
        await post('appdata', 'books', data);
        await actions.loadBooks();
    } catch (err) {
        console.error(err);
        alert(err);
    }
}

async function editBook() {
    html.createForm.formElement().style.display = 'block';
    html.editForm.formElement().style.display = 'none';

    const data = getInputData('editForm');
    try {
        await put('appdata', `books/${data.id}`, data);
        await actions.loadBooks();
    } catch (err) {
        console.error(err);
        alert(err);
    }
}

async function deleteListener(ev) {
    const id = ev.target.parentNode.dataset.id;
    if(confirm('Are you sure ?')){
        await del('appdata', `books/${id}`);
        await actions.loadBooks();
    }
}

function editListener(ev) {
    html.createForm.formElement().style.display = 'none';
    html.editForm.formElement().style.display = 'block';

    const [ title, author, isbn, id ] = [ ...ev.target.parentNode.parentNode.children ];

    const book = {
        title: title.textContent,
        author: author.textContent,
        isbn: isbn.textContent,
        id: id.dataset.id,
    };

    Object.keys(html.editForm).forEach(key => {
        html.editForm[key]().value = book[key];
    });
}

function getInputData(form) {
    return Object.keys(html[form]).reduce((acc, curr) => {
        acc[curr] = html[form][curr]().value;
        html[form][curr]().value = '';
        return acc;
    }, {});
}

function builtBookRow(book) {
    const { title, author, isbn, _id } = book;
    const tr = document.createElement('tr');
    const tdTitle = document.createElement('td');
    const tdAuthor = document.createElement('td');
    const tdIsbn = document.createElement('td');
    const tdBtns = document.createElement('td');
    const btnEdit = document.createElement('button');
    const btnDelete = document.createElement('button');

    tdTitle.textContent = title;
    tdAuthor.textContent = author;
    tdIsbn.textContent = isbn;
    btnEdit.textContent = 'Edit';
    btnDelete.textContent = 'Delete';
    tdBtns.setAttribute('data-id', _id);
    btnEdit.id = 'editBtn';
    btnDelete.id = 'deleteBtn';

    tdBtns.append(btnEdit, btnDelete);
    tr.append(tdTitle, tdAuthor, tdIsbn, tdBtns);

    return tr;
}

async function handler(ev) {
    ev.preventDefault();
    if (typeof actions[ev.target.id] === 'function') {
        await actions[ev.target.id](ev);
    }
}

document.addEventListener('click', handler);

