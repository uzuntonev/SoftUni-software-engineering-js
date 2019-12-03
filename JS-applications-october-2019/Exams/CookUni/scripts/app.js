import { homeController } from '../controllers/homeController.js';
import { userController } from '../controllers/userController.js';
import { recipeController } from '../controllers/recipeController.js';

const app = Sammy('#rooter', function () {

    this.use('Handlebars', 'hbs');

    // Home Controller
    this.get('#/', homeController.getHome);

    // User Controller
    this.get('#/register', userController.getRegister);
    this.post('#/register', userController.postRegister);

    this.get('#/login', userController.getLogin);
    this.post('#/login', userController.postLogin);

    this.get('#/logout', userController.logout);

    // Recipe Controller

    this.get('#/create', recipeController.getCreate);
    this.post('#/create', recipeController.postCreate);

    this.get('#/details/:id', recipeController.getDetails);

    this.get('#/edit/:id', recipeController.getEdit);
    this.post('#/edit/:id', recipeController.postEdit);

    this.get('#/delete/:id', recipeController.deleteRecipe);

    this.get('#/like/:id', recipeController.likeRecipe);
});

app.run();
