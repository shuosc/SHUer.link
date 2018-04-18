<template lang="pug">
  div
    my-card.card
      div(slot="title") 登录
      div(slot="content")
        vs-input(
          vs-label-placeholder="请输入一卡通账号",
          v-model="cardID",
          :vs-color="error"                
          style="margin:40px auto; width:40%")
        vs-input(
          :vs-label-placeholder="tip",
          v-model="password",
          vs-type="password",
          :vs-color="error",
          ref="input",
          style="margin:40px auto; width:40%")
        div.center(style="margin: 10px;")
          vs-button(
            @click="login",
            vs-type="primary-gradient") 登录
</template>

<script>
  import MyCard from "./Card";
  export default {
    name: "Login",
    components: { MyCard },
    mounted() {
      this.$store.commit("navbar/changeNavItem", { nav: "login" });
    },
    methods: {
      login() {
        this.$http
          .post("api/user/login", {
            cardId: this.cardID,
            password: this.password
          })
          .then(res => {
            this.$store.commit("user/login", {
              cardID: this.cardID,
              settings: res.data
            });
            this.$router.push("/center");
          })
          .catch(err => {
            console.log(err);
            this.error = "danger";
            this.$refs.input.$el.getElementsByTagName("input")[0].focus();
            this.tip = "一卡通账号或密码错误";
          });
      }
    },
    data() {
      return {
        cardID: "",
        password: "",
        error: "",
        tip: "请输入一卡通密码"
      };
    }
  };
</script>

<style lang="stylus">
  .card {
    margin: 180px 40px auto;
  }
</style>
