const express = require('express');
const handlebars = require('express-handlebars');
const app = express();
const bodyParser = require('body-parser');
const config = require('./config/config');
const router = require('./controllers/router')
app.engine('hbs', handlebars({
    defaultLayout: 'main',
    extname: '.hbs'
}));

app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static('./public'));

router(app);



app.listen(config.port, () => console.log(`Listening on port ${config.port}`)); 