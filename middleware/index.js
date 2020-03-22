const bodyParser = require('koa-bodyparser');
const cors = require('koa2-cors');

const miSend = require('./mi-send');
const miLog = require('./mi-log');

module.exports = (app) => {
    app.use(miLog());
    app.use(bodyParser());
    // cors
    app.use(cors({
        origin: (ctx) => {
            let allowedOrigins = [
                'http://localhost:3000'
            ];

            let realOrigin = ctx.request.header.origin;
            let someMatch = allowedOrigins.some((origin) => {
                return realOrigin === origin;
            });

            if (someMatch) {
                return realOrigin;
            } else {
                return false;
            }
        },
        maxAge: 5
    }));
    // ctx.send
    app.use(miSend());
};
