import { getSessionInfo, loadAllPartials, checkInput } from '../scripts/helpers.js';
import { get, post, put } from '../scripts/requester.js';


export const teamController = {
    getTeamInfo: function (ctx) {
        getSessionInfo(ctx);

        const id = ctx.params.id;
        get('appdata', `teams/${id}`, 'Kinvey')
            .then(teamInfo => {
                const { name, comment, members, author, _id, _acl } = teamInfo;
                ctx.team = {
                    name,
                    comment,
                    members,
                    author,
                    _id,
                };

                if (_acl.creator === ctx.userId) {
                    ctx.isAuthor = true;
                }

                if (members.find(x => x.username === ctx.username)) {
                    ctx.isOnTeam = true;
                }

                const partials = {
                    teamMember: '../templates/catalog/teamMember.hbs',
                    teamControls: '../templates/catalog/teamControls.hbs',
                };
                loadAllPartials(ctx, partials)
                    .partial('../templates/catalog/details.hbs');
            });
    },

    joinToTeam: function (ctx) {
        getSessionInfo(ctx);

        const id = ctx.params.teamId;

        get('appdata', `teams/${id}`, 'Kinvey')
            .then(teamInfo => {
                teamInfo.members.push({ username: ctx.username });

                return put('appdata', `teams/${id}`, teamInfo, 'Kinvey');
            })
            .then(() => {
                ctx.redirect(`#/catalog/${id}`);
            });
    },

    getCreateTeam: function (ctx) {
        getSessionInfo(ctx);
        const partials = { createForm: '../templates/create/createForm.hbs' };
        loadAllPartials(ctx, partials)
            .partial('../templates/create/createPage.hbs');
    },

    postCreateTeam: function (ctx) {
        getSessionInfo(ctx);

        const { name, comment } = ctx.params;
        const members = [
            { username: ctx.username },
        ];
        if (checkInput(name, comment)) {
            alert('All inputs must be field!');
            return;
        }
        post('appdata', 'teams', { name, comment, members }, 'Kinvey')
            .then(() => {
                ctx.redirect('#/catalog');
            })
            .catch(console.error);
    },

    getEditTeam: function (ctx) {
        getSessionInfo(ctx);
        ctx.teamId = ctx.params.teamId;

        const partials = { editForm: '../templates/edit/editForm.hbs' };

        loadAllPartials(ctx, partials)
            .partial('../templates/edit/editPage.hbs');
        // this.loadPartials(partials)
        //     .then(function () {
        //         this.partial('../templates/edit/editPage.hbs');
        //     });
    },

    postEditTeam: function (ctx) {
        const { name, comment, teamId } = ctx.params;

        get('appdata', `teams/${teamId}`, 'Kinvey')
            .then(teamInfo => {
                teamInfo.name = name;
                teamInfo.comment = comment;

                put('appdata', `teams/${teamId}`, teamInfo, 'Kinvey')
                    .then(res => {
                        ctx.redirect(`#/catalog/${teamId}`);
                    });
            });

    },

    leaveTeam: function (ctx) {
        getSessionInfo(ctx);
        const { teamId } = ctx.params;

        get('appdata', `teams/${teamId}`, 'Kinvey')
            .then(teamInfo => {
                const { members } = teamInfo;

                teamInfo.members = members.filter(x => x.username !== ctx.username);

                put('appdata', `teams/${teamId}`, teamInfo, 'Kinvey')
                    .then(() => {
                        ctx.redirect(`#/catalog/${teamId}`);
                    })
                    .catch(console.error);
            });
    },
};
