const createRoute = require("../../util/createRoute");
const indexAction = (req, res) => {
    res.send('This is about page');
};

module.exports = [
    createRoute('get', '/about', indexAction),
];