const path = require('path');
const Koa = require('koa');
const logger = require('koa-logger');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const webpack = require('webpack');
const config = require('./webpack.config');
const compiler = webpack(config);
const fsp = require('fs.promised');
const fs = require('fs');
const app = new Koa();
const router = new Router();

const compose = require('koa-compose');
const webpackMiddleware = require('koa-webpack');
const render = require('./util/render.js');

const webpackDevOptions = {
  noInfo: true,
  historyApiFallback: true,
  publicPath: config.output.publicPath,
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
};

app.use(logger());

app.use(bodyParser());
// 提示：'webpack-hot-client: `entry` Object values must be an Array or Function. Please check your webpack config.'
// 同时执行了npm run prod，这样就不需要启动2次
app.use(webpackMiddleware({
  compiler: compiler,
  config: config,
  dev: webpackDevOptions,
  hot: compiler
}));


router.get('/', async ctx => {
  ctx.body = await render('membership.html', {
    pageTitle: '会员订阅'
  })
});

router.get('/index', async ctx => {
  ctx.body = await render('index.html', {
    pageTitle: '登录'
  })
});

router.get('/signup', async ctx => {
  ctx.body = await render('signup.html', {
    pageTitle: '注册'
  })
});


router.get('/jsonData',(ctx, next)=>{
    ctx.body = fs.readFileSync('./data.json');
});

router.get('/memberData',(ctx, next)=>{
    ctx.body = fs.readFileSync('./client/api/data.json');
});

// 这里是为什么不能的读取到
router.get('/jsonDataa',(ctx, next)=>{
    ctx.type = 'json';
    ctx.body = fs.readFileSync('./package.json');
});
app.use(router.routes())
   .use(router.allowedMethods());

app.listen(9000, 'localhost', err => {
  if (err) {
    console.log('err'+err);
    return;
  }
  console.log('Listening at http://localhost:9000');
});
