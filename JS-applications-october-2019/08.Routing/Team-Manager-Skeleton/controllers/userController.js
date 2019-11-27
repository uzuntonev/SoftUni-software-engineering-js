import { passwordCheck, checkInput, loadAllPartials, setSessionInfo } from '../scripts/helpers.js';
import { post } from '../scripts/requester.js';

export const userController = {
    getRegister: function (ctx) {
        const partials = { registerForm: '../templates/register/registerForm.hbs' };
        loadAllPartials(ctx, partials)
            .partial('../templates/register/registerPage.hbs');
    },

    postRegister: function (ctx) {
        const { username, password, repeatPassword } = ctx.params;
        
        if (checkInput(username, password, repeatPassword)){
            alert('All inputs must field!'); 
        }
        if (passwordCheck(password, repeatPassword)) {
            post('user', '', { username, password }, 'Basic')
                .then(userInfo => {
                    setSessionInfo(userInfo);
                    ctx.redirect('#/home');
                })
                .catch(console.error);
        }
    },

    getLogin: function (ctx) {
        const partials = { loginForm: '../templates/login/loginForm.hbs' };
        loadAllPartials(ctx, partials)
            .partial('../templates/login/loginPage.hbs');
        // this.loadPartials(partials)
        //     .then(function () {
        //         this.partial('../templates/login/loginPage.hbs');
        //     });
    },

    postLogin: function (ctx) {
        const { username, password } = ctx.params;
        if (checkInput(username, password)){
            alert('All inputs must be field!'); 
            return;
        }
        post('user', 'login', { username, password }, 'Basic')
            .then(userInfo => {
                setSessionInfo(userInfo);
                ctx.redirect('#/home');
            })
            .catch(err => {
                alert('Wrong username or password! Pleas try again.');
                console.error(err);
            });
    },

    logout: function (ctx) {
        post('user', '_logout', {}, 'Kinvey')
            .then(() => {
                sessionStorage.clear();
                ctx.redirect('#/home');
            })
            .catch(console.error);
    },
};

