<template lang="pug">
  div.error-page.window-height.window-width.bg-light.column.items-center.no-wrap
    div.error-code.bg-primary.flex.items-center.content-center.justify-center 404
    div
      div.error-card.shadow-4.bg-white.column.items-center.justify-center.no-wrap
        q-icon(name='error_outline', color='grey-5')
        p.caption.text-center 您访问的页面似乎被吃掉了(╯&gt;д&lt;)╯
        p.text-center.group
          q-btn(v-if='canGoBack', color='primary', push, @click='goBack', icon='keyboard_arrow_left') 返回前页
          q-btn(color='primary', push, @click="$router.replace('/')", icon-right='home') 返回主页
</template>

<script>
  export default {
    name: '404Error',
    methods: {
      goBack() {
        window.history.go(-1)
      }
    },
    data() {
      return {
        canGoBack: window.history.length > 1
      }
    }
  }
</script>

<style lang="stylus">
  .error-page {
    .error-code {
      height: 50vh;
      width: 100%;
      padding-top: 15vh;

      @media (orientation: landscape) {
        font-size: 30vw;
      }

      @media (orientation: portrait) {
        font-size: 30vh;
      }

      color: rgba(255, 255, 255, 0.2);
      overflow: hidden;
    }

    .error-card {
      border-radius: 2px;
      margin-top: -50px;
      width: 80vw;
      max-width: 600px;
      padding: 25px;

      > i {
        font-size: 5rem;
      }
    }
  }
</style>
