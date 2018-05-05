<template lang="pug">
    mu-drawer(right,
            :docked="false",
            :open="$store.state.settings.sidebarState",
            @close="$store.commit('settings/toggleSidebar')",
            :width="300")
      mu-appbar(title="登录",style="text-align:center;")
      .center(style="margin-top:30px")
        h3 登录
        mu-avatar(:size="80")
      mu-text-field(label="一卡通账号",
                    @textOverflow="inputError",
                    :errorText="inputErrorText",
                    :labelFloat="true",
                    icon=":iconfont icon-account",
                    :maxLength="8",
                    v-model="student.card_id",
                    type="string")
      mu-text-field(label="密码",
                      :type="passwordVisible?'text':'password'",
                      :labelFloat="true",
                      v-model="student.password",
                      icon=":iconfont icon-password")
      mu-checkbox(uncheckIcon=":iconfont icon-invisible",   
                    checkedIcon=":iconfont icon-visible",v-model="passwordVisible" )
      .center
        mu-checkbox(label="记住我",v-model="rememberMe")
      .center
        mu-raised-button(label="登录",
                        icon=":iconfont icon-login",
                        primary,@click="login",
                        style="width:200px;margin-top:20px")
</template>

<script>
  export default {
    name: "Login",
    methods: {
      inputError(isOverflow) {
        this.inputErrorText = isOverflow ? "请输入正确的一卡通账号" : "";
      },
      login() {
        if (this.student.card_id === "" || this.student.password === "") {
          this.inputErrorText = "请填写完整的登陆信息";
          return;
        }
        if (!this.student.card_id.match(/^\d{8}$/)) {
          this.inputErrorText = "请输入正确的一卡通账号";
          return;
        }
        this.$http
          .post("/api/v1/users/login/", this.student)
          .then(res => {
            console.log(res);
            this.$store.commit("user/login", {
              card_id: this.student.card_id,
              password: this.student.password,
              name: res.data.name,
              nickname: res.data.nickname,
              token: res.data.token,
              avatar: res.data.avatar
            });
            if (!JSON.parse(res.data.custom).shuerlink) {
              this.$store.dispatch("user/saveChanges");
            } else {
              let settings = JSON.parse(res.data.custom).shuerlink;
              this.$store.commit("user/initSettings", settings);
            }
            // if (this.rememberMe === true) {
            //   let user = JSON.stringify(this.$store.state.user);
            //   localStorage.setItem("user", user);
            // }
          })
          .catch(() => {
            this.inputErrorText = "一卡通账号或密码错误";
          });
      }
    },
    data() {
      return {
        student: {
          card_id: "",
          password: ""
        },
        inputErrorText: "",
        rememberMe: false,
        passwordVisible: false
      };
    }
  };
</script>

<style lang="stylus" scoped>
  .center {
    text-align: center;
  }
</style>
