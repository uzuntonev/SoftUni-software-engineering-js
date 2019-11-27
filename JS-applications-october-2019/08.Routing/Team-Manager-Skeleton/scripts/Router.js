import { homeController } from '../controllers/homeController.js';
import { userController } from '../controllers/userController.js';
import { catalogController } from '../controllers/catalogController.js';
import{ teamController } from '../controllers/teamController.js';

export default function Router(app){
    // Home Controller
    app.get('/', homeController.getHome);
    app.get('#/home', homeController.getHome);
    app.get('#/about', homeController.getAbout);

    // User Controller
    app.get('#/register', userController.getRegister);
    app.post('#/register', userController.postRegister);

    app.get('#/login', userController.getLogin);
    app.post('#/login', userController.postLogin);

    app.get('#/logout', userController.logout);

    // Catalog Controller
    app.get('#/catalog', catalogController.getCatalog);
    
    // Team Controller
    app.get('#/create', teamController.getCreateTeam);
    app.post('#/create', teamController.postCreateTeam);
    
    app.get('#/edit/:teamId', teamController.getEditTeam);
    app.post('#/edit/:teamId', teamController.postEditTeam);

    app.get('#/catalog/:id',teamController.getTeamInfo);

    app.get('#/join/:teamId', teamController.joinToTeam);

    app.get('#/leave/:teamId', teamController.leaveTeam);
}
