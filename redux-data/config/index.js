const aaa = require('./aaa');
const app = require('./app');
const bbb = require('./bbb');
const login = require('./login');
module.exports = { ...aaa, ...app, ...bbb, ...login,}