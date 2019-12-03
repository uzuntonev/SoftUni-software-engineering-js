import { homeController } from '../controllers/homeController.js';
import { userController } from '../controllers/userController.js';
import { eventsController } from '../controllers/eventsController.js';

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

    // Events Controller

    this.get('#/create', eventsController.getCreate);
    this.post('#/create', eventsController.postCreate);

    this.get('#/details/:id', eventsController.getDetails);

    this.get('#/edit/:id', eventsController.getEdit);
    this.post('#/edit/:id', eventsController.postEdit);

    this.get('#/delete/:id', eventsController.deleteEvent);
    this.get('#/join/:id', eventsController.joinEvent);

});

app.run('#/');
