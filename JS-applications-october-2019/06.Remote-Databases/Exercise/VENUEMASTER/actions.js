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
        const venuesDate = allIds.map(id => get('appdata', `venues/${id}`));

        const context = { venues: await Promise.all(venuesDate) };

        await partialRegistration('moreInfo', 'templates/more-info-temp.hbs');

        html.root().innerHTML = template(context);
    }

    function displayMoreInfo(ev) {
        const divMoreInfo = ev.target.parentNode.parentNode.querySelector('.venue-details');

        [ ...html.root().children ].forEach(div => {
            div.querySelector('.venue-details').style.display = 'none';
        });

        if (divMoreInfo.style.display === 'none') {
            divMoreInfo.style.display = 'block';
            state.name = ev.target.parentNode.textContent;
            state.id = ev.target.parentNode.parentNode.id;
        } else {
            divMoreInfo.style.display = 'none';
        }
    }

    async function displayConfirmation(ev) {
        state.price = parseInt(ev.target.parentNode.parentNode.querySelector('.venue-price').textContent);
        state.qty = ev.target.parentNode.parentNode.querySelector('.quantity').value;

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
