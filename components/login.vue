<template>
  <div class="login">
    <mu-drawer right :docked="false" :open="this.$store.state.sidebarState"
               @close="toggleSidebar" :width="300">
      <mu-appbar title="登录" />
      <div class="container">
        <h3>登录</h3>
        <mu-avatar :size="80" />
        <mu-text-field label="一卡通账号" @textOverflow="inputError" :errorText="inputErrorText" labelFloat
                       icon=":iconfont icon-account" :maxLength="8" />
        <mu-text-field label="密码" type="password" labelFloat icon=":iconfont icon-password" />
        <mu-checkbox label="记住我" />
        <mu-raised-button label="登录" icon=":iconfont icon-login" secondary />
        <br />
      </div>
    </mu-drawer>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'login',
    data: function () {
      return {
        inputErrorText: ''
      }
    },
    methods: {
      toggleSidebar: function () {
        this.$store.commit('changeSidebar')
      },
      inputError: function (isOverflow) {
        this.inputErrorText = isOverflow ? '请输入正确的一卡通账号' : ''
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .container
    display flex
    flex-direction column
    flex-wrap wrap
    align-items center
    justify-content flex-start
    text-align center
  
  h3
    margin 5vh
  
  .mu-raised-button
    margin 5vh
</style>
