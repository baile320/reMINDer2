const dotenv = require('dotenv');

dotenv.config();

const url = process.env.URI || 'localhost';
const apiPort = process.env.PORT || process.env.API_PORT;
const hostPort = process.env.PORT || process.env.HOST_PORT;
const clientId = process.env.CLIENT_ID || 'usLDsrjOBiuUsEi1TV2Crh93Xn7kHhXv';
const authDomain = process.env.AUTH_DOMAIN || 'dev-vxw7uzlp';

module.exports.authConfig = {
  domain: authDomain,
  fullDomain: `${authDomain}.auth0.com`,
  clientId,
  redirectUri: `http://${url}:${hostPort}/callback`,
  aud: `http://${url}:${apiPort}/api/`,
  logoutUri: `http://${url}:${hostPort}/logout`,
};
