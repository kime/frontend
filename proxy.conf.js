'use strict';

const HttpsProxyAgent = require('https-proxy-agent');

/*
 * API proxy configuration.
 * This helps avoid CORS issues while running a local server during development.
 */
const proxyConfig = [
  {
    context: '/api',
    pathRewrite: { '^https://api.kime.me/api': '' },
    target: 'http://0.0.0.0:3780/api',
    changeOrigin: true,
    secure: false
  },
  {
    context: '/auth',
    pathRewrite: { '^https://api.kime.me/auth': '' },
    target: 'http://0.0.0.0:3780/auth',
    changeOrigin: true,
    secure: false
  }
];

/*
 * Configures a corporate proxy agent for the API proxy if needed.
 */
function setupForCorporateProxy(proxyConfig) {
  if (!Array.isArray(proxyConfig)) {
    proxyConfig = [proxyConfig];
  }

  const proxyServer = process.env.http_proxy || process.env.HTTP_PROXY;
  let agent = null;

  if (proxyServer) {
    console.log(`Using corporate proxy server: ${proxyServer}`);
    agent = new HttpsProxyAgent(proxyServer);
    proxyConfig.forEach(entry => { entry.agent = agent; });
  }

  return proxyConfig;
}

module.exports = setupForCorporateProxy(proxyConfig);
