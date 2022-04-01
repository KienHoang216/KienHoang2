class NewsController {
    
    // [GET] /news
    index(req, res){
        res.render('home');
    }

    //[GET]
    search(req, res) {
        res.send('search');
    }
}

module.exports = new NewsController