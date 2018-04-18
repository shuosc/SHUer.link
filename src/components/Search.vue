<template lang="pug">
  mu-drawer(left,
            :docked="false",
            :open="$store.state.settings.searchState",
            @close="$store.commit('settings/toggleSearch')")
    mu-appbar(title="搜索引擎",
              style="text-align:center;")
</template>

<script>
  export default {
    name: "Search"
  };
</script>

<style lang="stylus" scoped>
</style>
