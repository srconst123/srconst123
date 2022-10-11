const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://srconst.000webhostapp.com',
      changeOrigin: true,
    })
  );
};