const corsProxy = require('cors-anywhere');

const host = '0.0.0.0';
const port = process.env.PORT || 8080;

corsProxy.createServer({
  originWhitelist: [],
  requireHeader: ['origin', 'x-requested-with'],
  removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, () => {
  console.log(`CORS Anywhere is running on ${host}:${port}`);
});
