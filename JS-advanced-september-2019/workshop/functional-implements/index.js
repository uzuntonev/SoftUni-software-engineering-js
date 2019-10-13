/* eslint-disable operator-linebreak */
/* eslint-disable no-undefined */
/* eslint-disable indent */
import { MOCK } from './MOCK_DATA.js';

(function (data) {
    const keys = Object.keys(data[0]);

    function createElement(tag, content) {
        return `<${tag}>
        ${Array.isArray(content)
                ? content.join('')
                : content}
    </${tag}>`;
    }

    function singleTag(tag, prop, value) {
        return `<${tag} ${prop}='${value}'/>`;
    }

    const renderTable = createElement.bind(undefined, 'table');
    const renderThead = createElement.bind(undefined, 'thead');
    const renderTbody = createElement.bind(undefined, 'tbody');
    const renderTh = createElement.bind(undefined, 'th');
    const renderTr = createElement.bind(undefined, 'tr');
    const renderTd = createElement.bind(undefined, 'td');
    const renderUl = createElement.bind(undefined, 'ul');
    const renderLi = createElement.bind(undefined, 'li');

    function mapCellValue(map, defaultFunc, key, content) {
        if (typeof map[key] === 'function') {
            return defaultFunc(map[key](content));
        }
        return defaultFunc(content);
    }
    const mapCells = {
        avatar: x => singleTag('img', 'src', x),
        friends: x => renderUl(x.map(({ first_name, last_name }) => renderLi(`${first_name} ${last_name}`))),
        email: '',
    }


    const defaultTd = mapCellValue.bind(undefined, mapCells, renderTd);


    const result = renderTable(
        renderThead(renderTr(keys.map(key => renderTh(key)).join('')))
        +
        renderTbody(data.map(row => renderTr(keys.map(cell => defaultTd(cell, row[cell])))).join('')));



    document.getElementById('app').innerHTML = result;
}(MOCK.slice(0, 20)));
