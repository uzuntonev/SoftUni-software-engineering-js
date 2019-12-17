import { getSessionInfo, loadAllPartials } from '../scripts/helpers.js';
import { get } from '../scripts/requester.js';


export const homeController ={
    getHome: function (ctx) {
        getSessionInfo(ctx);
        const partials = { 
            anonymous: '../templates/partials/anonymous.hbs',
            singleTrek: '../templates/partials/single-trek.hbs',
        };
        
        if(ctx.loggedIn){
            get('appdata', 'treks', 'Kinvey')
                .then(treks => {
                    const sorted = treks.sort((a, b) => b.likes - a.likes);
                    ctx.treks = sorted;
                    loadAllPartials(ctx, partials)
                        .partial('../templates/home.hbs');
                });
        }else{
            loadAllPartials(ctx, partials)
                .partial('../templates/home.hbs');
        }
    },
};
