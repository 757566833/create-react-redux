const Router = require('koa-router');
const router = new Router();

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