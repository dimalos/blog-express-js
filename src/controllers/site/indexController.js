const createRoute = require('../../util/createRoute');

const indexAction = (req, res) => {
    res.render('home');
    // res.send(responseContent);
};

module.exports = [
    createRoute('get', '/', indexAction),
];