import { getSessionInfo, loadAllPartials } from '../scripts/helpers.js';
import { get } from '../scripts/requester.js';

export const catalogController = {
    getCatalog: function (ctx) {
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

                const partials = { team: '../templates/catalog/team.hbs' };
                loadAllPartials(ctx, partials)
                    .partial('../templates/catalog/teamCatalog.hbs');
            });
    },

};
