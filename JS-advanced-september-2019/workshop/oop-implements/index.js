import { MOCK } from './MOCK_DATA.js';

class DomElement {
    _tag;
    _content;
    static _domFactory;

    constructor(tag, content) {
        this._tag = tag;
        this._content = content;
    }

    static get domFactory() {
        return DomElement._domFactory;
    }

    static set domFactory(value) {
        DomElement._domFactory = value;
    }

    generateDomElement() {
        return DomElement.domFactory(this._tag);
    }

    render() {
        const instance = this.generateDomElement();
        if (Array.isArray(this._content)) {
            this._content.forEach(x => {
                if (x instanceof DomElement) {
                    instance.appendChild(x.render());
                } else if (x instanceof HTMLElement) {
                    instance.appendChild(x);
                } else {
                    instance.innerHTML = x.toString();
                }
            });
        } else {
            if (this._content instanceof DomElement) {
                instance.appendChild(this._content.render());
            } else if (this._content instanceof HTMLElement) {
                instance.appendChild(this._content);
            } else {
                instance.innerHTML = this._content.toString();
            }
        }
        return instance;
    }
}
class DomTable extends DomElement {
    constructor(content) {
        super('table', content);
    }
}
class DomThead extends DomElement {
    constructor(content) {
        super('thead', content);
    }
}
class DomTbody extends DomElement {
    constructor(content) {
        super('tbody', content);
    }
}
class DomTr extends DomElement {
    constructor(content) {
        super('tr', content);
    }
}
class DomTh extends DomElement {
    constructor(content) {
        super('th', content);
    }
}
class DomTd extends DomElement {
    constructor(content) {
        super('td', content);
    }
}
class DomUl extends DomElement {
    constructor(content) {
        super('ul', content
            .reduce((acc, curr) => [ ...acc, Object.values(curr) ], [])
            .map(e => new DomLi(e)));
    }
}
class DomLi extends DomElement {
    constructor(content) {
        super('li', content);
    }
}
class DomImg extends DomElement {
    src;
    constructor(src) {
        super('img', '');
        this.src = src;
    }

    render() {
        const img = this.generateDomElement();
        img.src = this.src;
        return img;
    }
}
class DomA extends DomElement {
    constructor(content, href, props) {
        super('a', content);
        this.href = href;
        this.props = props;
    }

    render() {
        const a = super.render();
        a.href = this.href;
        if(this.props){
            const prps = Object.entries(this.props)[0];
            a.dataset[prps[0]] = prps[1];
        }

        return a;
    }
}
class MailLink extends DomA{
    constructor(content) {
        super(content, `mailto:${content}`);
    }
}


class GenericFactory {
    _registry = new Map()

    register(key, classRef) {
        if (!this._registry.has(key)) {
            this._registry.set(key, classRef);
        }
    }

    create(key, ...params) {
        if (!this._registry.has(key)) {
            return null;
        }
        const classRef = this._registry.get(key);
        return new classRef(...params);
    }
}

class Grid {
    keys = [];
    data = [];
    dict;
    wrapper;
    elements;
    cellTemplates = {
        avatar: 'img',
        friends: 'ul',
        email: 'mail',
    };

    constructor(data, wrapper, elements, dict) {
        this.data = data;
        this.keys = Object.keys(this.data[0]);
        this.wrapper = wrapper;
        this.elements = elements;
        this.dict = dict;

        this.wrapper.addEventListener('click', this);
    }

    handleEvent(ev) {
        if (ev.target.dataset.sortBy) {
            this.sortBy(ev.target.dataset.sortBy);
            this.render();
        }
    }

    sortBy(prop) {
        this.data = this.data.sort((a, b) => {
            if (!isNaN(a[prop])) {
                return Number(a[prop]) - Number(b[prop]);
            }
            return a[prop].localeCompare(b[prop]);

        });
    }

    cleanHTML(){
        while(this.wrapper.firstElementChild !== null){
            this.wrapper.removeChild(this.wrapper.firstElementChild);
        }
    }

    render() {
        this.cleanHTML();
        return this.wrapper.appendChild(this.buildTable(this.buildContent()).render());
    }

    buildTable(content) {
        return this.elements.create('table', content);
    }

    buildContent() {
        return [
            this.buildHead(),
            this.buildBody(),
        ];
    }

    buildHead() {
        return this.elements.create('thead', this.buildTr(this.buildHeadCells(this.keys, 'th')));
    }

    buildBody() {
        return this.elements.create(
            'tbody',
            this.data.map(row => this.buildTr(this.keys.map(cell => this.buildCell('td', this.buildCellBody(cell, row[cell])))))
        );
    }

    buildTr(content) {
        return this.elements.create('tr', content);
    }

    buildCell(type, content) {
        return this.elements.create(type, content);
    }

    buildCells(arr, type) {
        return arr.map(e => this.buildCell(type, e));
    }

    buildLink(key, content) {
        return this.elements.create('a', content, 'javascript:;', { sortBy: key });
    }

    buildHeadCell(type, content) {

        return this.elements.create(type, this.buildLink(content, this.dict[content] || content));
    }

    buildHeadCells(arr, type) {
        return arr.map(e => this.buildHeadCell(type, e));
    }

    buildCellBody(type, content) {
        return this.elements.create(this.cellTemplates[type], content) || content;
    }
}

class Main {
    handleEvent(e) {
        DomElement.domFactory = document.createElement.bind(document);
        const DomElementsFactory = new GenericFactory();
        DomElementsFactory.register('table', DomTable);
        DomElementsFactory.register('thead', DomThead);
        DomElementsFactory.register('tbody', DomTbody);
        DomElementsFactory.register('tr', DomTr);
        DomElementsFactory.register('th', DomTh);
        DomElementsFactory.register('td', DomTd);
        DomElementsFactory.register('img', DomImg);
        DomElementsFactory.register('ul', DomUl);
        DomElementsFactory.register('li', DomLi);
        DomElementsFactory.register('a', DomA);
        DomElementsFactory.register('mail', MailLink);

        new Grid(
            MOCK.slice(0, 10),
            document.all.app,
            DomElementsFactory,
            {
                id: 'Идент.',
                email: 'Мейл',
                gender: 'Пол',
                ip_address: 'IP',
                first_name: 'Име',
                avatar: 'Картинка',
                friends: 'Приятели',
                last_name: 'Фамилия',
            }
        ).render();
    }
}

window.addEventListener('DOMContentLoaded', new Main());
