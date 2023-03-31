const applyRoutes = require('../util/applyRoutes');
const fg = require('glob');
const path = require('path');

module.exports = app => {
    fg.sync('./src/controllers/**/*.js').forEach(file => {
        const controllerPath = path.resolve( file );
        applyRoutes(app, require(controllerPath))
    });
    // applyRoutes(app, require('../controllers/landing/indexController'));
    // applyRoutes(app, require('../controllers/landing/blogController'));
};