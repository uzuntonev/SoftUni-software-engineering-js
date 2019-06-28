const express = require('express');
const handlebars = require('express-handlebars');
const app = express();

app.engine('hbs', handlebars({
    defaultLayout: 'main',
    extname: '.hbs'
}));
app.set('view engine', 'hbs');


app.use(express.static('./public'));

app.get('/', (req,res) => {
    res.render('home/index');
});


app.listen(3000, () => console.log(`Listening on port 3000`)); 