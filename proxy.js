require('./index');

const httpProxy = require('http-proxy');
const { port } = require('./config');

const proxy = {
    localhost: `http://localhost:${port + 1}`,
    development: `http://api.xiangrenya.com`
};

const target = proxy['localhost'];

httpProxy.createProxyServer({ target }).listen(port);

console.log(`Proxy server started: http://localhost:${port} => ${target}`);
