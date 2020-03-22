const log4js = require('log4js');
const methods = ['trace', 'debug', 'info', 'warn', 'error', 'fatal', 'mark'];

module.exports = () => {
    const contextLogger = {};
    const config = {
        appenders: {
            cheese: {
                type: 'dateFile',
                filename: 'logs/task',
                pattern: '-yyyy-MM-dd.log',
                alwaysIncludePattern: true
            }
        },
        categories: {
            default: {
                appenders: ['cheese'],
                level: 'info'
            }
        }
    };
    const logger = log4js.getLogger('cheese');

    return async (ctx, next) => {
        const start = Date.now();

        log4js.configure(config);
        methods.forEach((method, index) => {
            contextLogger[method] = (message) => {
                logger[method](message);
            }
        });
        ctx.log = contextLogger;

        await next();
        const responseTime = Date.now() - start;
        logger.info(`响应时间为${responseTime / 1000}s`);
    };
};
