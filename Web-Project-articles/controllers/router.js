const articlesControler = require('./articles-controller');

function router (app) {
    
    app.get('/', articlesControler.getIndex);

    app.get('/articles/create', articlesControler.getCreate);

    app.post('/articles/create', articlesControler.postCreate);

    app.get('/articles', articlesControler.getArticels);

}
module.exports = router;