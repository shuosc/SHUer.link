<template lang="pug">
  mu-drawer(left,
            :docked="false",
            :open="$store.state.settings.searchState",
            @close="$store.commit('settings/toggleSearch')")
    mu-appbar(title="搜索引擎",
              style="text-align:center;")
    mu-list
      mu-list-item(title="SHUerLink聚合搜索")
      mu-list-item(title="Google")
      mu-list-item(title="Baidu")
      mu-list-item(title="Bing")
</template>

<script>
  export default {
    name: "Search"
  };
</script>

<style lang="stylus" scoped>
</style>
