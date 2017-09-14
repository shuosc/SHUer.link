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
                     icon=":iconfont icon-account" :maxLength="8" v-model="student.card_id" type="string" />
      <div id="password">
        <mu-text-field label="密码" :type="passwordVisible?'text':'password'" labelFloat v-model="student.password"
                       icon=":iconfont icon-password" />
        <mu-checkbox uncheckIcon=":iconfont icon-invisible" checkedIcon=":iconfont icon-visible"
                     v-model="passwordVisible" />
      </div>
      <div class="center">
        <mu-checkbox label="记住我" v-model="rememberMe" />
        <mu-raised-button label="登录" icon=":iconfont icon-login" secondary @click="login" />
      </div>
    </mu-drawer>
  </div>
</template>

<script type="text/ecmascript-6">
  import axios from 'axios'

  export default {
    name: 'login',
    data: function () {
      return {
        student: {
          card_id: '',
          password: ''
        },
        inputErrorText: '',
        rememberMe: false,
        passwordVisible: false,
        errorVisible: true,
        errorText: '密码错误'
      }
    },
    methods: {
      toggleSidebar: function () {
        this.$store.commit('changeSidebar')
      },
      inputError: function (isOverflow) {
        this.inputErrorText = isOverflow ? '请输入正确的一卡通账号' : ''
      },
      login: function () {
        axios.post('/api/v1/users/login/', this.student)
          .then((response) => {
            if (response.request.readyState === 4 && response.request.status === 200) {
              if (this.rememberMe === true) {
                console.log(response)
              }
              this.$store.commit('login')
            }
          })
          .catch(() => {
            this.inputErrorText = '一卡通账号或密码错误'
          })
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
