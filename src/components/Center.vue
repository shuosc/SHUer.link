<template lang="pug">
  div.settings
    my-card
      div(slot="title")
        span(style="padding-left:60px") 设置
        span#logout(@click="logout") 退出登录
      div.center(slot="content")
        div {{$store.state.user.settings.name}}
        avatar(:src="avatarURL", :size="80")
        div(style="font-weight:normal;padding:10px")
          span 自动补全搜索
          vs-switch(
            vs-type="primary",
            v-model="autoComplete")

</template>

<script>
  import Avatar from "./Avatar";
  import MyCard from "./Card";
  export default {
    name: "Center",
    components: {
      MyCard,
      Avatar
    },
    methods: {
      logout() {
        this.$store.commit("user/logout");
        this.$router.push("/login");
      }
    },
    mounted() {
      this.$store.commit("navbar/changeNavItem", { nav: "center" });
    },
    computed: {
      avatarURL() {
        return `https://static.shuhelper.cn/${
          this.$store.state.user.settings.avatar
        }?imageslim`;
      },
      autoComplete: {
        get() {
          return this.$store.state.user.settings.autoComplete;
        },
        set(val) {
          console.log(val);
        }
      }
    }
  };
</script>

<style lang="stylus">
  .settings {
    padding-top: 50px;
  }

  #logout {
    float: right;
    padding-top: 12px;
    font-size: 15px;
    cursor: pointer;
  }

  label {
    display: inline-block;
  }

  .con-switch {
    width: 50px;
  }
</style>
