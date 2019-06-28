const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: String
});
const Article = mongoose.model('Article', articleSchema);

module.exports = Article;