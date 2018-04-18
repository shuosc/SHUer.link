<template lang="pug">
    mu-drawer(right,
            :docked="false",
            :open="$store.state.settings.sidebarState",
            @close="$store.commit('settings/toggleSidebar')")
      mu-appbar(title="登录")
</template>

<script>
  export default {
    name: "Login"
  };
</script>

<style lang="stylus" scoped>
</style>
