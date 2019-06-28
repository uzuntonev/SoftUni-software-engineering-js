const express = require('express');
const handlebars = require('express-handlebars');
const app = express();
const bodyParser = require('body-parser');
const config = require('./config/config')
const articlesControler = require('./controllers/articles-controller')
app.engine('hbs', handlebars({
    defaultLayout: 'main',
    extname: '.hbs'
}));

app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static('./public'));

app.get('/', articlesControler.getIndex);

app.get('/articles/create', articlesControler.getCreate);

app.post('/articles/create', articlesControler.postCreate);

app.get('/articles', articlesControler.getArticels);




app.listen(config.port, () => console.log(`Listening on port ${config.port}`)); 