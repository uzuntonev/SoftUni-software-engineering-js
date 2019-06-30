const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const config = require('./config/config');
const router = require('./controllers/router');
const db = require('./config/database');

db(config);

app.use(express.static('./public'));

app.engine('hbs', handlebars({
    defaultLayout: 'main',
    extname: '.hbs'
}));
app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({
    extended: true
}));


router(app);



app.listen(config.port, () => console.log(`Listening on port ${config.port}`)); 