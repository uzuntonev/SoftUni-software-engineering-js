const Articel = require('../model/article');

module.exports = {
    
    getCreate: function (req, res) {
        res.render('articles/create');
    },

    postCreate: function (req, res) {
        let article = new Articel({
            title: req.body.title,
            content: req.body.content,
            author: req.body.author
        });
        article.save((err, dbArticle) => {

           res.redirect('/articles'); 
        });
    },
    index (req, res) {
        Articel.find({})
        .then(function (articles){
            res.render('articles/index', {articles})
        })
    },
    getIndex: function (req, res) {

        res.render('home/index');
    },

    getByAuthor (req,res) {
        Articel.find({author: req.params.name})
        .then(function (data){
            res.render('articles/index', {articles: data} )
        })
    }
}