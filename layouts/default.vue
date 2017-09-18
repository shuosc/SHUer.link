<template>
  <div class="layout">
    <navbar></navbar>
    <sidebar v-if="this.$store.state.loginState"></sidebar>
    <login v-else></login>
    <nuxt />
  </div>
</template>
<script type="text/ecmascript-6">
  import sidebar from '~/components/sidebar.vue'
  import navbar from '~/components/navbar.vue'
  import login from '~/components/login.vue'

  export default {
    components: {
      sidebar,
      navbar,
      login
    },
    mounted: function () {
      this.$store.commit('detectDevice')
      let wallpaperNumber = Math.ceil(21 * Math.random())
      document.body.style.backgroundImage = `url("https://static.shuhelper.cn/background/SHU/bg${wallpaperNumber}.jpg?imageslim")`
    },
    methods: {
      toggleSidebar: function () {
        this.$store.commit('changeSidebar')
      }
    }
  }
</script>
<style lang="stylus">
  html
    font-family "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
    font-size 16px
    word-spacing 1px
    -ms-text-size-adjust 100%
    -webkit-text-size-adjust 100%
    -moz-osx-font-smoothing grayscale
    -webkit-font-smoothing antialiased
    box-sizing border-box
    height 100%

  *,
  *:before,
  *:after
    box-sizing border-box
    margin 0

  body
    width 100%
    height 100%
    margin 0
    background-repeat no-repeat
    background-size cover
    background-position bottom
    color #fff

  div.layout
    height 100%

  div#__nuxt
    height 100%

  .navbar
    width 100%
    position fixed
    padding-top 0
    z-index 2

  input.mu-text-field-input.input-text
    color #fff !important
    background-color rgba(0, 0, 0, 0.7)
    margin-bottom 0.5vmin
    height 2.4rem
    border-radius 3px
    padding-left 2vmin

  div.mu-text-field-label.float
    padding-left 15px
    padding-bottom 0.5vmin
    color #fff !important
    .inputLabel
      color #fff !important
</style>
