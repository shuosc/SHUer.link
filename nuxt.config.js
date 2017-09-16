module.exports = {
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
      { rel: 'stylesheet', href: 'https://at.alicdn.com/t/font_395504_6rjoalrk4y8hbyb9.css' }
    ],
    script: [
      { src: 'https://cdn.bootcss.com/device.js/0.2.7/device.min.js' }
    ]
  },
  plugins: [
    { src: '~plugins/muse-ui', ssr: true },
    { src: '~plugins/googleAnalysis', ssr: false }
  ],
  loading: {
    color: 'rgb(104,232,104)',
    height: '3px',
    failedColor: '#FF5252'
  },
  generate: {
    dir: 'dist',
    minify: {
      collapseBooleanAttributes: true,
      collapseWhitespace: true,
      decodeEntities: true,
      minifyCSS: true,
      minifyJS: true,
      processConditionalComments: true,
      removeAttributeQuotes: false,
      removeComments: true,
      removeEmptyAttributes: false,
      removeOptionalTags: false,
      removeRedundantAttributes: false,
      removeScriptTypeAttributes: false,
      removeStyleLinkTypeAttributes: false,
      removeTagWhitespace: false,
      sortAttributes: true,
      sortClassName: true,
      trimCustomFragments: true,
      useShortDoctype: true
    }
  },
  build: {
    vendor: [ 'axios', 'muse-ui' ],
    /*
     ** Run ESLINT on save
     */
    extend: (config, ctx) => {
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
