<template>
  <div class="navbar">
    <nav>
      <mu-appbar>
        <mu-flat-button color="white" label="主页" slot="right" to="/" />
        <mu-flat-button color="white" label="常用导航" slot="right" to="links" />
        <mu-flat-button color="white" label="关于" slot="right" to="about" />
        <mu-icon-button icon=":iconfont icon-setting" slot="right" @click="toggleSidebar" />
      </mu-appbar>
    </nav>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'navbar',
    methods: {
      toggleSidebar: function () {
        this.$store.commit('changeSidebar')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .mu-appbar-title
    padding 0 6px 0
</style>
