const path = require('path');
const Koa = require('koa');
const staticCache  = require('koa-static-cache');
const views = require('koa-views');
const router = require('./routes/route')

const app = new Koa();

app.use(staticCache(path.join(__dirname, 'public'), {
  maxAge: 365 * 24 * 60 * 60
}));
app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000);