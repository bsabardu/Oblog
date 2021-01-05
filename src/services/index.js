const article = require('../../data/article.json');

const services = {
    showHome(req,res){
        res.render('index', {articles : article});
    },
    
    showArticle(req,res){
        let articleFound = article.find(article => article.id === parseInt(req.params.id, 10));
        res.render('article', {article : articleFound});
    }
}

module.exports = services;