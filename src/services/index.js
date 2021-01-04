const article = require('../../data/article.json');

const services = {
    showHome: function(req,res){
        res.render('index', {articles : article});
    } 
}

module.exports = services;