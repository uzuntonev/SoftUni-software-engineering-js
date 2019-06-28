const articlesController = require('./articles-controller');
const authorController = require('./authors-controller')

function router (app) {
    
    app.get('/', articlesController.getIndex);

    app.get('/articles/create', articlesController.getCreate);

    app.post('/articles/create', articlesController.postCreate);

    app.get('/articles', articlesController.index);

    app.get('/authors', authorController.index);

    app.get('/authors/:name/articles', articlesController.getByAuthor)

}
module.exports = router;