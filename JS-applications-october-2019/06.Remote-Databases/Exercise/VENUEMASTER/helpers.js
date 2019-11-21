export async function getTemplate(source) {
    const src = await fetch(source)
        .then(res => res.text());
    return Handlebars.compile(src);
}
export async function partialRegistration(name, source) {
    const partialSource = await fetch(source)
        .then(res => res.text());
    Handlebars.registerPartial(name, partialSource);
}
