<template>
  <div class="error">
    <div v-if="error.statusCode === 404">
      <p>页面不存在</p>
      <p>404 - Not Found</p>
    </div>
    <div v-else-if="error.statusCode===500">
      <p>服务器错误</p>
      <p>请<a href="mailto:adrianduan@shuhelper.cn">联系管理员</a>排除故障</p></div>
    <div v-else>应用程序错误</div>
    <br>

  </div>
</template>

<script>
  export default {
    props: [ 'error' ],
    layout: 'default'
  }
</script>

<style lang="stylus" scoped>
  .error
    display flex
    flex-direction column
    align-items center
    justify-content center
    font-size 10vmin
    padding-top 30vmin
    text-align center

  div.layout
    height 100%

  div#__nuxt
    height 100%
</style>
