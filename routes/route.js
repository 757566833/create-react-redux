const Router = require('koa-router');
const router = new Router();
router.get('/test', async (ctx) => {
    ctx.body = '<div>test</div>';
})
router.get('/hello', async (ctx) => {
    ctx.status = 500;
    ctx.body = 'serverHello!';
})
router.get('/login', async (ctx) => {
    await ctx.render('login')
})
router.get('/', async (ctx) => {
    await ctx.render('app')
})
router.get('/**', async (ctx) => {
    await ctx.render('app')
})

module.exports = router;