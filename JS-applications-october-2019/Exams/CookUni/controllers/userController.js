import { passwordCheck, checkInput, loadAllPartials, setSessionInfo, displayError } from '../scripts/helpers.js';
import { post } from '../scripts/requester.js';

export const userController = {
    getRegister: function (ctx) {
        loadAllPartials(ctx)
            .partial('../templates/auth/register.hbs');
    },

    postRegister: function (ctx) {
        const { username, password, repeatPassword, firstName, lastName } = ctx.params;

        if (checkInput(username, password, repeatPassword, firstName, lastName)) {
            displayError('All inputs must be field!');
            return;
        }

        if (passwordCheck(password, repeatPassword)) {
            post('user', '', { username, password, firstName, lastName }, 'Basic')
                .then(userInfo => {
                    setSessionInfo(userInfo);
                    ctx.redirect('#/');
                })
                .catch(console.error);
        }
    },

    getLogin: function (ctx) {
        loadAllPartials(ctx)
            .partial('../templates/auth/login.hbs');
    },

    postLogin: function (ctx) {
        const { username, password } = ctx.params;
        if (checkInput(username, password)){
            displayError('All inputs must be field!');
            return;
        }
        post('user', 'login', { username, password }, 'Basic')
            .then(userInfo => {
                setSessionInfo(userInfo);
                ctx.redirect('#/');
            })
            .catch(err => {
                displayError('Wrong username or password! Please try again.');
                console.error(err);
            });
        
    },

    logout: function (ctx) {
        post('user', '_logout', {}, 'Kinvey')
            .then(() => {
                sessionStorage.clear();
                ctx.redirect('#/');
            })
            .catch(console.error);
    },
};

