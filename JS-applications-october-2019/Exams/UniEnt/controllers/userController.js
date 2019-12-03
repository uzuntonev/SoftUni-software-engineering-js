import { loadAllPartials, setSessionInfo, displayError, displaySuccess, validateRegisterForm, getSessionInfo } from '../scripts/helpers.js';
import { post, get } from '../scripts/requester.js';

export const userController = {
    getRegister: function (ctx) {
        loadAllPartials(ctx)
            .partial('../templates/auth/register.hbs');
    },

    postRegister: function (ctx) {
        const { username, password, repeatPassword } = ctx.params;
        if (validateRegisterForm(username, password, repeatPassword)) {
            post('user', '', { username, password }, 'Basic')
                .then(userInfo => {
                    setSessionInfo(userInfo);
                    displaySuccess('Register successfully');
                    ctx.redirect('#/');
                })
                .catch(err => {
                    const statusText = JSON.parse(err.message.split('Error: ')[1]).statusText;
                    if (statusText === 'Conflict') {
                        displayError('Username is already used. Please try again.');
                    }
                });
        }
    },

    getLogin: function (ctx) {
        loadAllPartials(ctx)
            .partial('../templates/auth/login.hbs');
    },

    postLogin: function (ctx) {
        const { username, password } = ctx.params;
        if (username.trim() !== '' && password.trim() !== '') {
            post('user', 'login', { username, password }, 'Basic')
                .then(userInfo => {
                    setSessionInfo(userInfo);
                    displaySuccess('Login successfully.');
                    ctx.redirect('#/');
                })
                .catch((err) => {
                    const statusText = JSON.parse(err.message.split('Error: ')[1]).statusText;
                    if (statusText === 'Unauthorized') {
                        displayError('Wrong username or password. Please try again.');
                    }
                });
        } else {
            displayError('All fields must be field!');
        }
    },

    logout: function (ctx) {
        post('user', '_logout', {}, 'Kinvey')
            .then(() => {
                sessionStorage.clear();
                displaySuccess('Logout successful.');
                ctx.redirect('#/');
            })
            .catch(console.error);
    },

    getProfile: function (ctx) {
        getSessionInfo(ctx);

        get('appdata', `events/?query={"_acl":{"creator":"${ctx.userId}"}}`, 'Kinvey')
            .then(res => {
                ctx.count = res.length;
                ctx.events = res.map(x => x.name);
 
                loadAllPartials(ctx)
                    .partial('../templates/profile.hbs');
            });
    },
};

