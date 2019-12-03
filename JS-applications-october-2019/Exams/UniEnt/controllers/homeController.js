import { getSessionInfo, loadAllPartials } from '../scripts/helpers.js';
import { get } from '../scripts/requester.js';


export const homeController ={
    getHome: function (ctx) {
        getSessionInfo(ctx);
        const partials = {
            singleEvent: '../templates/partials/single-event.hbs',
            anonymous: '../templates/partials/anonymous-home.hbs',
        }; 
        if(ctx.loggedIn){
            get('appdata', 'events/?query={}&sort={"interested":-1}','Kinvey')
                .then(events =>{
                    ctx.events = events;
                    loadAllPartials(ctx, partials)
                        .partial('../templates/home.hbs');
                });
        }else {
            loadAllPartials(ctx, partials)
                .partial('../templates/home.hbs');
        }
    },
};
