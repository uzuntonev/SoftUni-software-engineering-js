import { getSessionInfo, loadAllPartials } from '../scripts/helpers.js';
import { get } from '../scripts/requester.js';


export const homeController ={
    getHome: function (ctx) {
        getSessionInfo(ctx);
        if(ctx.loggedIn){
            get('appdata','recipe','Kinvey')
                .then(data => {
                    ctx.allRecipes = data;
                    const partials = { singleRecipe: '../templates/recipe/single-recipe.hbs' };
                    loadAllPartials(ctx, partials)
                        .partial('../templates/home.hbs');
                });
        }else {
            const partials = { singleRecipe: '../templates/recipe/single-recipe.hbs' };
            loadAllPartials(ctx, partials)
                .partial('../templates/home.hbs');
        }


    },

};
