const path = require('path');
const Koa = require('koa');
const serve = require('koa-static');
const views = require('koa-views');
const router = require('./routes/route')

const app = new Koa();

app.use(serve(path.join(__dirname, 'public'), {
  maxage: 365 * 24 * 60 * 60 * 1000
}));
app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000);