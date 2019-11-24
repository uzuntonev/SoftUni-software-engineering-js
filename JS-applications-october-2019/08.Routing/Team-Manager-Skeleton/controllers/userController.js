import { passwordCheck, loadAllPartials } from '../scripts/helpers.js';
import { post } from '../scripts/requester.js';

export const userController = {
    renderRegister: function (ctx) {
        const partials = loadAllPartials({ registerForm: '../templates/register/registerForm.hbs' });

        this.loadPartials(partials)
            .then(function (){
                this.partial('../templates/register/registerPage.hbs');
            });
    },

    postRegister: function (ctx){
        const { username, password, repeatPassword } = ctx.params;

        if (passwordCheck(password, repeatPassword)){
            post('user', '', { username, password }, 'Basic')
                .then(res => {
                    ctx.redirect('#/login');
                })
                .catch(console.error);
        }
    },

    renderLogin: function (ctx){
        const partials = loadAllPartials({ loginForm: '../templates/login/loginForm.hbs' });
 
        this.loadPartials(partials)
            .then(function () {
                this.partial('../templates/login/loginPage.hbs');
            });
    },

    postLogin: function (ctx) {
        const { username, password } = ctx.params;

        post('user','login', { username, password }, 'Basic')
            .then(userInfo =>{
                sessionStorage.setItem('loggedIn', true);
                sessionStorage.setItem('userId',userInfo._id);
                sessionStorage.setItem('username',userInfo.username);
                sessionStorage.setItem('authtoken', userInfo._kmd.authtoken);
                ctx.redirect('#/home'); 
            })
            .catch(err => {
                alert('Wrong username or password! Pleas try again.');
                console.error(err); 
            });
    },
    
    logout: function (ctx){
        sessionStorage.clear();
        ctx.redirect('#/home');
    },
};

