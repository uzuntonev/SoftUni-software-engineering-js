import { getSessionInfo, loadAllPartials } from '../scripts/helpers.js';


export const homeController ={
    getHome: function (ctx) {
        getSessionInfo(ctx);

        loadAllPartials(ctx)
            .partial('../templates/home.hbs');

    },
};
