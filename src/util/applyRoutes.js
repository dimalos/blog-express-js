module.exports = (app, controllerConfig) => {
    for (const {method, route, action} of controllerConfig) {
        app[method](route, action);
    }
}