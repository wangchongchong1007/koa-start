const router = require('koa-router')();
const HomeController = require('./controller/home');

module.exports = (app) => {
    router.get('/home', HomeController.home);

    app.use(router.routes())
        .use(router.allowedMethods());
};
