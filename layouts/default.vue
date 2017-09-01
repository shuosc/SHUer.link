<template>
  <div class="layout">
    <navbar></navbar>
    <mu-drawer right :docked="false" :open="this.$store.state.sidebarState"
               @close="toggleSidebar">
      <mu-appbar title="设置" />
      <sidebar></sidebar>
    </mu-drawer>
    <nuxt />
  </div>
</template>

<script type="text/ecmascript-6">
  import sidebar from '~/components/sidebar.vue'
  import navbar from '~/components/navbar.vue'
  
  export default {
    components: {
      sidebar,
      navbar
    },
    mounted: function () {
      this.$store.commit('detectDevice')
    },
    methods: {
      toggleSidebar: function () {
        this.$store.commit('changeSidebar')
      }
    }
  }
</script>

<style lang="stylus">
  html
    font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    height 100%
  
  *,
  *:before,
  *:after
    box-sizing: border-box
    margin: 0
  
  body
    width: 100%
    height: 100%
    margin: 0
    background-color #e6e6e6
  
  div.layout
    height 100%
  
  div#__nuxt
    height 100%
</style>
