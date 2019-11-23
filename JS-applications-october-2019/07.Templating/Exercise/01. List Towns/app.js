const html = {
    towns: () => document.querySelector('#towns'),
    root: () => document.querySelector('#root'),
};

const actions = { btnLoadTowns: getInput };

function doesExistElement(element){
    if(element === null) {
        throw new Error('Missing HTML element!');
    }
}

async function getInput() {
    doesExistElement(html.towns());
    
    const towns = html.towns().value.split(', ');

    const src = await fetch('template.hbs')
        .then(res => res.text());
    const template = Handlebars.compile(src);
    html.root().innerHTML = template({ towns });
    html.towns().value = '';
}

function handler(ev) {
    if (typeof actions[ev.target.id] === 'function') {
        ev.preventDefault();
        actions[ev.target.id]();
    }
}

document.addEventListener('click', handler);
