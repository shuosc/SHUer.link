<template>
  <div>
    <header>
      <mu-appbar title="SHUer.link">
        <mu-flat-button color="white" label="主  页" slot="right" to="/" />
        <mu-flat-button color="white" label="常用导航" slot="right" to="links" />
        <mu-icon-button icon="settings" slot="right" @click="toggle()" />
      </mu-appbar>
    </header>
    <mu-drawer right :docked="false" :open="open" @close="toggle()">
      <mu-appbar title="设置" />
      <sidebar></sidebar>
    </mu-drawer>
    <nuxt />
  </div>
</template>

<script type="text/ecmascript-6">
  import sidebar from '~/pages/sidebar.vue'
  
  export default {
    data: function () {
      return {
        open: false
      }
    },
    methods: {
      toggle () {
        this.open = !this.open
      }
    },
    components: {
      sidebar
    }
//    mounted: function () {
//    },
//    computed: {
//      themes () {
//        return this.$store.state.themes
//      },
//      theme () {
//        return this.$store.state.theme
//      }
//    }
  }
</script>

<style lang="stylus">
  @font-face
    font-family 'Material Icons'
    font-style normal
    font-weight 400
    src: local('Material Icons'),
      local('MaterialIcons-Regular'),
      url("https://cdn.bootcss.com/material-design-icons/3.0.1/iconfont/MaterialIcons-Regular.ttf") format('truetype'),
      url("https://cdn.bootcss.com/material-design-icons/3.0.1/iconfont/MaterialIcons-Regular.woff2") format('woff2'),
      url("https://cdn.bootcss.com/material-design-icons/3.0.1/iconfont/MaterialIcons-Regular.woff") format('woff')
  
  .material-icons
    font-family 'Material Icons'
    font-weight normal
    font-style normal
    font-size 20px
    display inline-block
    line-height 1
    margin 0
    text-transform none
    letter-spacing normal
    word-wrap normal
    white-space nowrap
    direction ltr
    -webkit-font-smoothing antialiased /* Support for all WebKit browsers. */
    text-rendering optimizeLegibility /* Support for Safari and Chrome. */
    -moz-osx-font-smoothing grayscale /* Support for Firefox. */
    font-feature-settings 'liga'
  
  /* Support for IE. */
  
  html
    font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    height 100%
  
  *,
  *:before,
  *:after
    box-sizing: border-box;
    margin: 0;
  
  body
    width: 100%;
    height: 100%;
    margin: 0;
  
  button
    .mu-flat-button
      min-width 40vmin
</style>
