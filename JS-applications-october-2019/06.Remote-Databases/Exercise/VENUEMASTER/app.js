import { actions } from './actions.js';

const html = {
    root: () => document.querySelector('#venue-info'),
    inputDate: () => document.querySelector('#venueDate'),
};

const actionsStorage = actions(html);

function handler(ev) {
    if (typeof actionsStorage[ev.target.id] === 'function') {
        actionsStorage[ev.target.id](ev);
    }
    if (typeof actionsStorage[ev.target.className] === 'function') {
        actionsStorage[ev.target.className](ev);
    }
}

document.addEventListener('click', handler);
