import { getSessionInfo, loadAllPartials } from '../scripts/helpers.js';


export const homeController ={
    getHome: function (ctx) {
        getSessionInfo(ctx);
        loadAllPartials(ctx)
            .partial('../templates/home/home.hbs');
    },
    getAbout: function (ctx) {
        getSessionInfo(ctx);
        loadAllPartials(ctx)
            .partial('../templates/about/about.hbs');
    },
};
