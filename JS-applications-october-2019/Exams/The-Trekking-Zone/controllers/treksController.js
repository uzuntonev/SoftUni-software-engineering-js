import { getSessionInfo, loadAllPartials } from '../scripts/helpers.js';
import { get, post, put, del } from '../scripts/requester.js';
import { displayError, displaySuccess } from '../scripts/notifications.js';


export const treksController = {
    getCreate: function (ctx) {
        getSessionInfo(ctx);
        loadAllPartials(ctx)
            .partial('../templates/treks/create.hbs');
    },

    postCreate: function (ctx) {
        getSessionInfo(ctx);
        const { location, dateTime, description, imageURL } = ctx.params;

        if (location.length < 6) {
            displayError('The trek name should be at least 6 characters long');
            return;
        }
        if (description.length < 10) {
            displayError('The description should be at least 10 characters long.');
            return;
        }

        const trek = {
            location,
            dateTime,
            description,
            imageURL,
            organizer: ctx.username,
            likes: 0,
        };

        post('appdata', 'treks', trek, 'Kinvey')
            .then(() => {
                ctx.redirect('#/');
                displaySuccess('Trek created successfully.');
            }).catch(console.error);
    },

    getDetails: function (ctx) {
        getSessionInfo(ctx);
        const id = ctx.params.id;

        get('appdata', `treks/${id}`, 'Kinvey')
            .then(trek => {
                for (const key in trek) {
                    if (trek.hasOwnProperty(key)) {
                        ctx[key] = trek[key];
                    }
                }
                ctx.isOrganizer = ctx.organizer === ctx.username;
                loadAllPartials(ctx)
                    .partial('../templates/treks/details.hbs');
            })
            .catch(console.error);
    },

    getEdit: function (ctx) {
        getSessionInfo(ctx);
        const id = ctx.params.id;
        get('appdata', `treks/${id}`, 'Kinvey')
            .then(trek => {
                for (const key in trek) {
                    if (trek.hasOwnProperty(key)) {
                        ctx[key] = trek[key];
                    }
                }

                loadAllPartials(ctx)
                    .partial('../templates/treks/edit.hbs');
            });
    },

    postEdit: function (ctx) {
        getSessionInfo(ctx);
        const id = ctx.params.id;
        const { location, dateTime, description, imageURL, organizer, likes } = ctx.params;

        if (location.length < 6) {
            displayError('The trek name should be at least 6 characters long');
            return;
        }
        if (description.length < 10) {
            displayError('The description should be at least 10 characters long.');
            return;
        }

        const trek = {
            location,
            dateTime,
            description,
            imageURL,
            organizer,
            likes,
        };

        put('appdata', `treks/${id}`, trek, 'Kinvey')
            .then(() => {
                ctx.redirect('#/');
                displaySuccess('Trek edited successfully.');
            }).catch(console.error);
    },

    getDelete: function (ctx) {
        const id = ctx.params.id;
        alert('Are you sure ?');
        del('appdata', `treks/${id}`, 'Kinvey') 
            .then(() => {
                ctx.redirect('#/');
                displaySuccess('You closed the trek successfully.');
            });
    },

    getLikes: function (ctx) {
        const id = ctx.params.id;
        get('appdata', `treks/${id}`, 'Kinvey')
            .then(trek => {
                trek.likes++;
                return put('appdata',`treks/${id}`, trek, 'Kinvey');
            })
            .then(() => {
                ctx.redirect(`#/details/${id}`);
                displaySuccess('You liked the trek successfully.');
            });
    },

};
