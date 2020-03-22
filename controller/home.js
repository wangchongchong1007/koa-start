const HomeService = require('../service/home');

module.exports = {
    home: async (ctx, next) => {
        ctx.response.body = 'home page';
    }
}
