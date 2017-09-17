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
        <mu-raised-button label="登录" icon=":iconfont icon-login" primary @click="login" />
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
        passwordVisible: false
      }
    },
    mounted: function () {
      if (localStorage.user) {
        let user = JSON.parse(localStorage.user)
        this.student.card_id = user.card_id
        this.student.password = user.password
        axios.post('/api/v1/users/login/', this.student)
          .then((response) => {
            this.$store.commit({
              type: 'login',
              card_id: this.student.card_id,
              password: this.student.password,
              name: response.data.name,
              nickname: response.data.nickname,
              token: response.data.token,
              avatar: response.data.avatar
            })
          })
          .catch(() => {
            this.$store.commit('logout')
          })
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
        if (this.student.card_id === '' || this.student.password === '') {
          this.inputErrorText = '请填写完整的登陆信息'
          return
        }
        if (!this.student.card_id.match(/^\d{8}$/)) {
          this.inputErrorText = '请输入正确的一卡通账号'
          return
        }
        axios.post('/api/v1/users/login/', this.student)
          .then((response) => {
            this.$store.commit({
              type: 'login',
              card_id: this.student.card_id,
              password: this.student.password,
              name: response.data.name,
              nickname: response.data.nickname,
              token: response.data.token,
              avatar: response.data.avatar
            })
            if (this.rememberMe === true) {
              let user = JSON.stringify(this.$store.state.user)
              localStorage.setItem('user', user)
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
