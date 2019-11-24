import { homeController } from '../controllers/homeController.js';
import { userController } from '../controllers/userController.js';
import { catalogController } from '../controllers/catalogController.js';
import{ teamController } from '../controllers/teamController.js';

const app = Sammy('#main', function () {

    this.use('Handlebars', 'hbs');

    // Home Controller
    this.get('#/', homeController.renderHome);

    this.get('#/home', homeController.renderHome);

    this.get('#/about', homeController.renderAbout);

    // User Controller
    this.get('#/register', userController.renderRegister);

    this.post('#/register', userController.postRegister);

    this.get('#/login', userController.renderLogin);

    this.post('#/login', userController.postLogin);

    this.get('#/logout', userController.logout);

    // Catalog Controller
    this.get('#/catalog', catalogController.renderCatalogPage);
    
    this.get('#/create', catalogController.renderCreateForm);

    this.post('#/create', catalogController.postCreateForm);
    
    // Team Controller
    this.get('#/catalog/:id',teamController.renderTeamInfo);

    this.get('#/join/:teamId', teamController.joinToTeam);

    this.get('#/edit/:teamId', teamController.renderEditTeamForm);

    this.post('#/edit/:teamId', teamController.postEditForm);

    this.get('#/leave/:teamId', teamController.leaveTeam);
});


app.run();


