import { get, post } from './requester.js';
import { getTemplate, partialRegistration } from './helpers.js';

export function actions(html) {
    const state = {};

    async function getVenues() {
        if (html.inputDate() === null || html.inputDate().value === '') {
            throw new Error('Wrong input !');
        }

        const template = await getTemplate('templates/all-venue-temp.hbs');
        let allIds;
        try {
            allIds = await post('rpc', `custom/calendar?query=${html.inputDate().value}`);
        } catch (err) {
            alert(err);
            console.error(err);
        }
        const allVenues = allIds.map(id => get('appdata', `venues/${id}`));

        const context = { venues: await Promise.all(allVenues) };

        await partialRegistration('moreInfo', 'templates/more-info-temp.hbs');

        html.root().innerHTML = template(context);
    }

    function displayMoreInfo(ev) {
        const id = ev.target.parentNode.parentNode.id;

        [ ...html.root().children ].forEach(div => {
            div.id === id
                ? div.querySelector('.venue-details').style.display = 'block'
                : div.querySelector('.venue-details').style.display = 'none';
        });
    }

    async function displayConfirmation(ev) {
        const currentElement = ev.target.closest('.venue');
        const id = currentElement.id;
        const price = parseInt(currentElement.querySelector('.venue-price').textContent);
        const name = currentElement.querySelector('.venue-name').textContent;
        const qty = currentElement.querySelector('.quantity').value;

        state.id = id;
        state.price = price;
        state.name = name;
        state.qty = qty;

        const template = await getTemplate('templates/confirm-temp.hbs');
        const context = { ...state };

        html.root().innerHTML = template(context);
    }

    async function displayConfirmedPurchase() {
        let temp;
        try {
            temp = await post('rpc', `custom/purchase?venue=${state.id}&qty=${state.qty} `);
        } catch (err) {
            alert(err);
            console.error(err);
        }
        html.root().innerHTML = temp.html;
    }

    return {
        getVenues: getVenues,
        info: displayMoreInfo,
        purchase: displayConfirmation,
        confirm: displayConfirmedPurchase,
    };
}
