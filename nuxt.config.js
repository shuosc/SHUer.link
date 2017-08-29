module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'SHUer.link',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no'
      },
      { hid: 'description', name: 'description', content: 'SHUer navigation' },
      { name: 'render', content: 'webkit' }, // 强制国产双核浏览器使用Webkit内核渲染
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://at.alicdn.com/t/font_395504_hwpd00jfot5ljtt9.css' }
    ],
    script: [
      { src: 'https://cdn.bootcss.com/device.js/0.2.7/device.min.js' }
    ]
  },
  // css: ['muse-ui/dist/muse-ui.css', 'muse-ui/dist/theme-carbon.css'],
  plugins: [
    { src: '~plugins/muse-ui', ssr: true }
  ],
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#FF5252' },
  /*
   ** Build configuration
   */
  build: {
    vendor: ['axios', 'muse-ui'],
    /*
     ** Run ESLINT on save
     */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
