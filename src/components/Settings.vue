<template lang="pug">
  mu-drawer(right,
            :docked="false",
            :open="$store.state.settings.sidebarState",
            @close="$store.commit('settings/toggleSidebar')")
    mu-appbar(title="设置")
</template>

<script>
  export default {
    name: "Settings"
  };
</script>

<style lang="stylus" scoped>
</style>
