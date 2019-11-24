import { getSessionInfo, loadAllPartials } from '../scripts/helpers.js';
import { get, post } from '../scripts/requester.js';

export const catalogController = {
    renderCatalogPage: function (ctx) {
        getSessionInfo(ctx);

        get('appdata', 'teams', 'Kinvey')
            .then(allTeams => {
                ctx.hasNoTeam = true;
                allTeams.forEach(team => {
                    if(team.members.find(x => x.username === ctx.username)){
                        ctx.hasNoTeam = false;
                    }
                });
              
                ctx.teams = allTeams;

                const partials = loadAllPartials({ team: '../templates/catalog/team.hbs' });

                this.loadPartials(partials)
                    .then(function () {
                        this.partial('../templates/catalog/teamCatalog.hbs');
                    });
            });
    },

    renderCreateForm: function (ctx) {
        getSessionInfo(ctx);

        const partials = loadAllPartials({ createForm: '../templates/create/createForm.hbs' });

        this.loadPartials(partials)
            .then(function () {
                this.partial('../templates/create/createPage.hbs');
            });
    },

    postCreateForm: function (ctx) {
        getSessionInfo(ctx);
        // TODO Validation data !
        const { name, comment } = ctx.params;
        const author = ctx.username;
        const members = [
            { username: ctx.username },
        ];

        post('appdata', 'teams', { name, comment, members, author }, 'Kinvey')
            .then(res => {
                ctx.redirect('#/catalog');
            })
            .catch(console.error);
    },
};
