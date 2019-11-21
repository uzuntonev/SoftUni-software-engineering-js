import { get, post } from '../requester.js';

const html = {
    formInputs: {
        firstName: () => document.querySelector('#firstName'),
        lastName: () => document.querySelector('#lastName'),
        facultyNumber: () => document.querySelector('#facultyNumber'),
        grade: () => document.querySelector('#grade'),
    },
    tbody: () => document.querySelector('#table-body'),
    select: () => document.querySelector('#inlineFormCustomSelectPref'),
};

const actions = {
    addStudent: createStudent,
    displayStudents: displayStudent,
    sortStudents: sortStudents,
};

async function createStudent() {
    const data = Object.keys(html.formInputs).reduce((acc, curr) => {
        acc[curr] = html.formInputs[curr]().value;
        html.formInputs[curr]().value = '';
        return acc;
    }, {});
    const students = await get('appdata', 'students');
    data.id = students.length + 1;

    try {
        await post('appdata', 'students', data);
    } catch (err) {
        console.error(err);
        alert(err);
    }
    actions.displayStudents();
}

async function displayStudent() {
    let allStudents;
    try {
        allStudents = await get('appdata', 'students');
    } catch (err) {
        console.error(err);
        alert(err);
    }
    html.tbody().innerHTML = '';
    html.tbody().append(...allStudents.map(builtHTMLRowStudent));
}

async function sortStudents() {
    let allStudents;
    try {
        allStudents = await get('appdata', 'students');
    } catch (err) {
        console.error(err);
        alert(err);
    }
    const sorted = allStudents.sort((a, b) => {
        const sortBy = html.select().value;
        if (sortBy === 'firstName' || sortBy === 'lastName'){
            return a[sortBy].localeCompare(b[sortBy]);
        }
        return a[sortBy] - b[sortBy];
    });

    html.tbody().innerHTML = '';
    html.tbody().append(...sorted.map(builtHTMLRowStudent)); 
}

function builtHTMLRowStudent(student) {
    const { firstName, lastName, facultyNumber, grade, id } = student;
    const tr = document.createElement('tr');
    const tdId = document.createElement('td');
    const tdFirstName = document.createElement('td');
    const tdLastName = document.createElement('td');
    const tdFacultyNumber = document.createElement('td');
    const tdGrade = document.createElement('td');
    tdId.textContent = id;
    tdFirstName.textContent = firstName;
    tdLastName.textContent = lastName;
    tdFacultyNumber.textContent = facultyNumber;
    tdGrade.textContent = grade;
    tr.append(tdId, tdFirstName, tdLastName, tdFacultyNumber, tdGrade);

    return tr;
}

async function handler(ev) {
    ev.preventDefault();
    if (typeof actions[ev.target.id] === 'function') {
        await actions[ev.target.id]();
    }
}

document.addEventListener('click', handler);

