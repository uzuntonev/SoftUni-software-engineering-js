// import { renderTemplate } from '../helpers.js';

const html = { root: () => document.querySelector('#allCats') };

function doesElementExist(element){
    if(element === null) {
        throw new Error('Missing HTML element!');
    }
}
const actions = { showBtn: showInfo };

function showInfo(target) {
    const statusDiv = target.closest('li').querySelector('.status');
    doesElementExist(statusDiv);
    statusDiv.style.display = statusDiv.style.display === 'none' 
        ? 'block'
        : 'none';
}

fetch('cat-template.hbs')
    .then(res => res.text())
    .then(src => {
        const template = Handlebars.compile(src);
        doesElementExist(html.root());
        html.root().innerHTML = template({ cats: window.cats });
    });

// root.innerHTML = await renderTemplate('cat-template.hbs', { cats: window.cats });

function handler(ev){
    if(typeof actions[ev.target.className] === 'function'){
        actions[ev.target.className](ev.target);
    }
}

document.addEventListener('click', handler);


