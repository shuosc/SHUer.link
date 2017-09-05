<template>
  <div class="login">
    <mu-drawer right :docked="false" :open="this.$store.state.sidebarState"
               @close="toggleSidebar" :width="300">
      <mu-appbar title="登录" />
      <div class="center">
        <h3>登录</h3>
        <mu-avatar :size="80" />
      </div>
      <mu-text-field label="一卡通账号" @textOverflow="inputError" :errorText="inputErrorText" labelFloat
                     icon=":iconfont icon-account" :maxLength="8" type="number" />
      <div id="password">
        <mu-text-field label="密码" :type="[passwordVisible?'text':'password']" labelFloat
                       icon=":iconfont icon-password" />
        <mu-checkbox uncheckIcon=":iconfont icon-invisible" checkedIcon=":iconfont icon-visible"
                     v-model="passwordVisible" />
      </div>
      <div class="center">
        <mu-checkbox label="记住我" v-model="rememberMe" />
        <mu-raised-button label="登录" icon=":iconfont icon-login" secondary />
      </div>
    </mu-drawer>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'login',
    data: function () {
      return {
        inputErrorText: '',
        rememberMe: false,
        passwordVisible: false
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
  .center
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
