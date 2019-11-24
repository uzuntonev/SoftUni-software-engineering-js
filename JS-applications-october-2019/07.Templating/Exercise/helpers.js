export async function renderTemplate(src, context) {
    const source = await fetch(src)
        .then(res => res.text());
    const template = Handlebars.compile(source);
    return template(context);
}

export function doesElementExist(element){
    if(element === null) {
        throw new Error('Missing HTML element!');
    }
}

