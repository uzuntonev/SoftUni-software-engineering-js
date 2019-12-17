import { homeController } from '../controllers/homeController.js';
import { userController } from '../controllers/userController.js';
import { treksController } from '../controllers/treksController.js';

// DO NOT FORGET TO CHANGE ROOT ELEMENT ID !!!!!

const app = Sammy('#root', function () {

    this.use('Handlebars', 'hbs');

    // Home Controller
    this.get('#/', homeController.getHome);

    // User Controller
    this.get('#/register', userController.getRegister);
    this.post('#/register', userController.postRegister);

    this.get('#/login', userController.getLogin);
    this.post('#/login', userController.postLogin);

    this.get('#/logout', userController.logout);

    this.get('#/profile', userController.getProfile);

    // Treks Controller

    this.get('#/create', treksController.getCreate);
    this.post('#/create', treksController.postCreate);

    this.get('#/details/:id', treksController.getDetails);

    this.get('#/edit/:id', treksController.getEdit);
    this.post('#/edit/:id', treksController.postEdit);

    this.get('#/delete/:id', treksController.getDelete);

    this.get('#/likes/:id', treksController.getLikes);

});

app.run('#/');
