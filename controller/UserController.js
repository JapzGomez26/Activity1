const print = {
    index:(req, res) => {
        res.render('index');
    },
    about:(req, res) => {
        res.render('about');
    },
    contact:(req, res) => {
        res.render('contact');
    },
    services:(req, res) => {
        res.render('services');
    },
    shop:(req, res) => {
        res.render('shop');
    }
};

module.exports = print;