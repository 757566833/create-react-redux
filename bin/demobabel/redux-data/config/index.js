const app = require('./app');
const login = require('./login');
module.exports = { ...app, ...login };