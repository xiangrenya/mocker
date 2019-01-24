const Router = require('koa-router');
const glob = require('glob');
const path = require('path');

const router = new Router({
    prefix: '/api'
});

// 装饰器
function route(method, path) {
    return function(target, property, descriptor) {
        router[method](path, target[property]);
    };
}

['get', 'post', 'put', 'del'].forEach(method => {
    exports[method] = path => route(method, path);
});

// 注册路由
glob.sync(path.join(`${__dirname}/api/**/*.api.js`)).forEach(item =>
    require(item)
);

exports.router = router;
