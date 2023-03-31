const createRoute = require("../../util/createRoute");
const indexAction = (req, res) => {
    res.send('This is index action of blog');
};

module.exports = [
    createRoute('get', '/blog', indexAction),
];