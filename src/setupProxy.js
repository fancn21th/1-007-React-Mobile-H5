const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: process.env.REACT_APP_PROXY_URL,
      changeOrigin: true,
      // it is really sad that i can not find the config
      // neither from 'https://create-react-app.dev/docs/proxying-api-requests-in-development#configuring-the-proxy-manually'
      // nor https://github.com/chimurai/http-proxy-middleware#http-proxy-options
      logLevel: "debug", // however it works anyway
      pathRewrite: { "^/api": "" },
    })
  );
};
