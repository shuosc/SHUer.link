<template>
  <div class="sidebar">
    <mu-drawer right :docked="false" :open="this.$store.state.sidebarState"
               @close="toggleSidebar">
      <mu-appbar title="设置" />
      <div>已经登陆</div>
    </mu-drawer>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'sidebar',
    methods: {
      toggleSidebar: function () {
        this.$store.commit('changeSidebar')
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .sidebar
    display flex
    flex-direction column
    flex-wrap wrap
    align-items center
    justify-content flex-start
</style>
