import { homeController } from '../controllers/homeController.js';
import { userController } from '../controllers/userController.js';
import { offersController } from '../controllers/offersController.js';

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

    // Offers Controller

    this.get('#/create', offersController.getCreate);
    this.post('#/create', offersController.postCreate);

    this.get('#/details/:id', offersController.getDetails);

    this.get('#/edit/:id', offersController.getEdit);
    this.post('#/edit/:id', offersController.postEdit);

    this.get('#/delete/:id', offersController.getDelete);
    this.post('#/delete/:id', offersController.deleteOffer);

    this.get('#/buy/:id', offersController.buyOffer);

    this.get('#/dashboard', offersController.getDashboard);

});

app.run('#/');
