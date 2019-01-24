const Koa = require('koa');
const serve = require('koa-static');
const koaBody = require('koa-body');
const logger = require('koa-logger');
const { router } = require('./router');

const app = new Koa();

app.use(serve(`${__dirname}/public`));

app.use(
    koaBody({
        multipart: true
    })
);
app.use(logger());
app.use(router.routes());

const port = 4000;
app.listen(port);

console.log(`Mock server started: http://localhost:${port}`);
