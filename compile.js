require('@babel/register')({
    plugins: [
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        '@babel/plugin-proposal-object-rest-spread'
    ]
});
require('./proxy.js');
