import { getSessionInfo, loadAllPartials, displayError, displaySuccess } from '../scripts/helpers.js';
import { get, post, put, del } from '../scripts/requester.js';


export const eventsController = {
    getCreate: function (ctx) {
        getSessionInfo(ctx);
        loadAllPartials(ctx)
            .partial('../templates/events/create.hbs');
    },

    postCreate: function (ctx) {
        getSessionInfo(ctx);
        // TODO: Validate inputs !!!
        const { imageURL, name, description, dateTime } = ctx.params;
        const event = {
            imageURL,
            name,
            description,
            dateTime,
            interested: 0,
            creator: ctx.username,
        };

        post('appdata', 'events', event, 'Kinvey')
            .then(() => {
                displaySuccess('Event created successfully.');
                ctx.redirect('#/');
            })
            .catch(console.error);
    },

    getDetails: function (ctx) {
        getSessionInfo(ctx);
        const id = ctx.params.id;
        
        get('appdata', `events/${id}`,'Kinvey')
            .then(event =>{
                for (const key in event) {
                    if (event.hasOwnProperty(key)) {
                        ctx[key] = event[key];
                    }
                }

                ctx.isCreator = event._acl.creator === ctx.userId;
                loadAllPartials(ctx)
                    .partial('../templates/events/details.hbs');
            })
            .catch(console.error);
    },

    getEdit: function (ctx) {
        getSessionInfo(ctx);
        const id = ctx.params.id;

        get('appdata', `events/${id}`,'Kinvey')
            .then(event =>{
                for (const key in event) {
                    if (event.hasOwnProperty(key)) {
                        ctx[key] = event[key];
                    }
                }
                loadAllPartials(ctx)
                    .partial('../templates/events/edit.hbs');
            })
            .catch(console.error);

    },

    postEdit: function (ctx) {
        getSessionInfo(ctx);
        const id = ctx.params.id;
        // TODO Validate inputs !!!
        const { imageURL, name, description, dateTime, interested, creator } = ctx.params;

        const event = {
            imageURL,
            name,
            description,
            dateTime,
            interested,
            creator,
        };

        put('appdata', `events/${id}`, event, 'Kinvey')
            .then(() => {
                displaySuccess('Event edited successfully.');
                ctx.redirect('#/');
            })
            .catch(console.error);
    },

    deleteEvent: function (ctx){
        const id = ctx.params.id;
        del('appdata', `events/${id}`, 'Kinvey')
            .then(() => {
                displaySuccess('Event closed successfully.');
                ctx.redirect('#/');
            });
    },

    joinEvent: function (ctx){
        getSessionInfo(ctx);
        const id = ctx.params.id;

        get('appdata', `events/${id}`,'Kinvey')
            .then(event =>{
                event.interested++;
                return put('appdata', `events/${id}`, event, 'Kinvey');
            })
            .then(() => {
                ctx.redirect('#/');
            })
            .catch(console.error);
    },
};
