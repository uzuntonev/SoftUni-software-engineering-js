import { monkeys } from './monkeys.js';

const html = { root: () => document.querySelector('#root') };

const actions = { BUTTON: showInfo };

function doesElementExist(element){
    if(element === null) {
        throw new Error('Missing HTML element!');
    }
}

fetch('template.hbs')
    .then(res => res.text())
    .then(src => {
        const template = Handlebars.compile(src);
        doesElementExist(html.root());
        html.root().innerHTML = template({ monkeys });
    });

function showInfo(target){
    const infoElement = target.closest('div.monkey').querySelector('p');
    doesElementExist(infoElement);
    infoElement.style.display = infoElement.style.display === 'none' 
        ? 'block'
        : 'none';
}

function handler(ev){
    if(typeof actions[ev.target.nodeName] === 'function'){
        actions[ev.target.nodeName](ev.target);
    }
}
    
document.addEventListener('click', handler);
    
