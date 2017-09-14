import Koa from 'koa'
import { Nuxt, Builder } from 'nuxt'
import proxy from 'koa-proxy'

const app = new Koa()
const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 3000
// 导入Nuxt.js设置
let config = require('../nuxt.config.js')
config.dev = !(app.env === 'production')

// 实例化 nuxt.js
const nuxt = new Nuxt(config)
// 开发模式设置
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build().catch(e => {
    console.error(e) // eslint-disable-line no-console
    process.exit(1)
  })
}

app.use(proxy({
  host: 'https://www.shuhelper.cn',
  match: /^\/api\//
}))

// app.use(proxy.when({
//   url: '/api'
// }))

app.use(
  ctx => {
    ctx.status = 200 // koa 的默认状态码为404
    return new Promise((resolve, reject) => {
      ctx.res.on('close', resolve)
      ctx.res.on('finish', resolve)
      nuxt.render(ctx.req, ctx.res, promise => {
        promise.then(resolve).catch(reject)
      })
    })
  }
)

app.listen(port, host)
console.log('Server listening on ' + host + ':' + port)
