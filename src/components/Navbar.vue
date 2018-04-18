<template lang="pug">
  nav.navbar
    mu-appbar
      img(src="../assets/logo.svg",slot="left",@click="$store.commit('settings/toggleSearch')")
      mu-flat-button(color="white",label="搜索",slot="left",to="/")
      mu-flat-button(color="white",label="发现",slot="left",to="/discover")
      mu-flat-button(color="white",label="关于",slot="left",to="/about")
      mu-icon-button(icon=":iconfont icon-setting" slot="right" @click="$store.commit('settings/toggleSidebar')")
</template>

<script>
  export default {
    name: "Navbar",
    methods: {
    }
  };
</script>

<style lang="stylus" scoped>
  img {
    height: 25px;
    margin: 0 40px;
    cursor: pointer;

    @media only screen and (max-width: 500px) {
      display: none;
    }
  }
</style>
