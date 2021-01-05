const articles = require('../../data/article.json');

const services = {
    showHome(req,res){
        res.render('index', {articles : articles});
    },
    
    showArticle(req,res){
        let articleFound = articles.find(article => article.id === parseInt(req.params.id, 10));
        res.render('article', {article : articleFound});
    },

    showCategory(req,res){
        let articlesCategory = articles.filter(article => article.category === req.params.category);
        res.render('category', {articles : articlesCategory, category : req.params.category})
    }
}

module.exports = services;