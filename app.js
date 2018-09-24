const path = require('path');
const Koa = require('koa');
const serve = require('koa-static');
const views = require('koa-views');

const app = new Koa();
const router = require('./routes/route')
app.use(serve(path.join(__dirname, 'public')));
app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000);