const articlesController = require('./articles-controller');
const authorsController = require('./authors-controller')

function router (app) {
    
    app.get('/', articlesController.getIndex);

    app.get('/articles/create', articlesController.getCreate);

    app.post('/articles/create', articlesController.postCreate);

    app.get('/articles', articlesController.index);

    app.post('/articles', articlesController.postDelete);


    app.get('/authors', authorsController.index);

    app.get('/authors/:name/articles', articlesController.getByAuthor)

}
module.exports = router;