import { getSessionInfo, loadAllPartials } from '../scripts/helpers.js';
import { get, post, put, del } from '../scripts/requester.js';
import { displayError, displaySuccess } from '../scripts/notifications.js';


export const offersController = {
    getCreate: function (ctx) {
        getSessionInfo(ctx);
        loadAllPartials(ctx)
            .partial('../templates/offers/create.hbs');
    },

    postCreate: function (ctx) {
        const { product, description, price, pictureUrl } = ctx.params;
        if (product === '' || description === '' || price === '' || pictureUrl === '') {
            displayError('All inputs must be field.');
            return;
        }

        if (!pictureUrl.startsWith('http://') && !pictureUrl.startsWith('https://')) {
            displayError('Picture URL must be link.');
            return;
        }
        const offer = {
            product,
            description,
            price,
            pictureUrl,
        };
        post('appdata', 'offers', offer, 'Kinvey')
            .then(() => {
                ctx.redirect('#/dashboard');
                displaySuccess('Created successfully');
            })
            .catch(console.error);
    },

    getDetails: function (ctx) {
        getSessionInfo(ctx);
        const id = ctx.params.id;
        get('appdata', `offers/${id}`, 'Kinvey')
            .then(offer => {
                ctx.offer = offer;
                loadAllPartials(ctx)
                    .partial('../templates/offers/details.hbs');
            });
    },

    getEdit: function (ctx) {
        getSessionInfo(ctx);
        const id = ctx.params.id;

        get('appdata', `offers/${id}`, 'Kinvey')
            .then(offer => {
                for (const key in offer) {
                    if (offer.hasOwnProperty(key)) {
                        ctx[key] = offer[key];
                    }
                }
                loadAllPartials(ctx)
                    .partial('../templates/offers/edit.hbs');
            });
    },

    postEdit: function (ctx) {
        const id = ctx.partial.id;
        const { product, description, price, pictureUrl, index } = ctx.params;
        if (product === '' || description === '' || price === '' || pictureUrl === '') {
            displayError('All inputs must be field.');
            return;
        }

        if (!pictureUrl.startsWith('http://') && !pictureUrl.startsWith('https://')) {
            displayError('Picture URL must be link.');
            return;
        }
        const offer = {
            product,
            description,
            price,
            pictureUrl,
            index,
        };

        put('appdata', `offers/${id}`, offer, 'Kinvey')
            .then(() => {
                ctx.redirect('#/dashboard');
                displaySuccess('Edited successfully');
            })
            .catch(console.error);
    },

    getDelete: function (ctx) {
        getSessionInfo(ctx);
        const id = ctx.params.id;

        get('appdata', `offers/${id}`, 'Kinvey')
            .then(offer => {
                for (const key in offer) {
                    if (offer.hasOwnProperty(key)) {
                        ctx[key] = offer[key];
                    }
                }
                loadAllPartials(ctx)
                    .partial('../templates/offers/delete.hbs');
            });
    },

    deleteOffer: function (ctx) {
        const id = ctx.params.id;
        del('appdata', `offers/${id}`, 'Kinvey')
            .then(() => {
                ctx.redirect('#/dashboard');
                displaySuccess('Deleted successfully');
            });
    },

    buyOffer: function (ctx) {
        getSessionInfo(ctx);
        get('user', ctx.userId, 'Kinvey')
            .then(user => {
                user.bought === undefined 
                    ? user.bought = 0
                    : user.bought++;
                return put('user', ctx.userId, user, 'Kinvey');

            })
            .then(() => {
                ctx.redirect('#/dashboard');
            })
            .catch(console.error);

            
    },

    getDashboard: function (ctx) {
        getSessionInfo(ctx);

        get('appdata', 'offers', 'Kinvey')
            .then(offers => {
                offers.forEach((x, i) => {
                    x.index = i;
                    x.isCreator = x._acl.creator === ctx.userId;
                });
                ctx.offers = offers;
                loadAllPartials(ctx)
                    .partial('../templates/offers/dashboard.hbs');
            })
            .catch(console.error);
    },

};
