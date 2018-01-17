<template lang="pug">
  div.error-page.window-width.bg-light.column.items-center.no-wrap
    div.error-code.bg-primary.flex.items-center.content-center.justify-center
      | 404
    div.error-card.shadow-4.bg-white.column.items-center.justify-center.no-wrap
      q-icon(name='error_outline', color='grey-5')
      p.caption.text-center 找不到你要的页面啦ヽ(｀Д´)ﾉ
        p.text-center.group
          q-btn(v-if='canGoBack', color='primary', push='', @click='goBack', icon='keyboard_arrow_left')
            | 返回前页
          q-btn(color='primary', push='', @click="$router.replace('/')", icon-right='home')
            | 回到首页
</template>

<script>
  export default {
    name: 'Error404',
    data() {
      return {
        canGoBack: window.history.length > 1
      }
    },
    methods: {
      goBack() {
        window.history.go(-1)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .error-page
    height calc(100vh - 50px)
    .error-code
      height 50vh
      width 100%
      padding-top 0

      @media (orientation: landscape)
        font-size 30vw

      @media (orientation: portrait)
        font-size 30vh

        color rgba(255, 255, 255, 0.2)
        overflow hidden

    .error-card
      border-radius 2px
      margin-top -50px
      width 80vw
      max-width 600px
      padding 10px

      > i
        font-size 5rem
</style>
