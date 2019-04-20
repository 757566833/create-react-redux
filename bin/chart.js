const path = require('path');
const fs = require('fs');
// koa相关
const Koa = require('koa');
const serve = require('koa-static');
const views = require('koa-views');
const Router = require('koa-router');
const bodyparser = require('koa-bodyparser');

// redis相关
// const redis = require('redis');
// const client = redis.createClient(6379, 'localhost')


// 设定路由
const router = new Router();

// koa服务
const app = new Koa();

app.use(serve(path.join(__dirname, 'public'), {
    maxage: 365 * 24 * 60 * 60 * 1000
}));
app.use(views(__dirname + '/views', {
    extension: 'ejs'
}))
app.use(bodyparser());
router.get('/fileList', async (ctx) => {
    // 获取表单提交的数据
    let arr = fs.readdirSync('./redux-data/config')
    let indexindex = arr.findIndex((n) => n == 'index.js')
    arr.splice(indexindex, 1)
    ctx.body = {
        code: 0,
        data: arr,
        msg: 'success'
    }
});
router.get('/getdata', async (ctx) => {
    // 获取表单提交的数据
    let {
        name
    } = ctx.request.query;
    console.log(name)
    const data = require(`./redux-data/config/${name}`);
    console.log(name)
    // let indexindex = arr.findIndex((n) => n == 'index.js')
    // arr.splice(indexindex, 1)
    ctx.body={
        code:0,
        data:data,
        msg:'success'
    }
});
router.get('/', async (ctx) => {
    await ctx.render('app')
})
router.get('/**', async (ctx) => {
    await ctx.render('app')
})
app.use(router.routes()).use(router.allowedMethods())

app.listen(7654,()=>{
    console.log('localhost:7654')
});