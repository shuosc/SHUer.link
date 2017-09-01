<template>
  <div class="error">
    <p v-if="error.statusCode === 404">页面不存在</p>
    <p v-else-if="error.statusCode===500">服务器错误</p>
    <p v-else>应用程序错误</p>
    <br>
    <p>请<a href="mailto:adrianduan@shuhelper.cn">联系管理员</a>排除故障</p>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'default'
  }
</script>

<style lang="stylus" scoped>
  .error
    display flex
    flex-direction column
    align-items center
    justify-content center
    font-size 5vmin
    margin-top 30vmin
    
</style>
