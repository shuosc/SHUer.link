<template lang="pug">
  mu-drawer(left,
            :docked="false",
            :open="$store.state.settings.searchState",
            @close="$store.commit('settings/toggleSearch')")
    mu-appbar(title="搜索引擎",
              style="text-align:center;")
    mu-list
      mu-list-item(title="SHUerLink聚合搜索",@click="$router.push('/result')")
        mu-icon(slot="left",value=":iconfont icon-SHUerLink")
      mu-list-item(title="校内搜索",@click="$router.push('/schoolsearch')")
        mu-icon(slot="left",value=":iconfont icon-SHUerLink")
      mu-list-item(v-for="item in searchEngines",:key="item.value",:title="item.title",@click="search(item)")
        mu-icon(slot="left",:value="item.icon")
</template>

<script>
  export default {
    name: "Search",
    data() {
      return {};
    },
    methods: {
      // this.$router.push("/result");
      // this.$router.push("/?src=//www.baidu.com");
      search(searchEngine) {
        const queryString = this.$store.state.search.searchString;
        const unsupportFrame = [
          "Google",
          "CNKI",
          "GoogleScholar",
          "Wikipedia",
          "Zhihu",
          "Music",
          "Douban",
          "Wechat",
          "Weibo",
          "GitHub",
          "StackOverflow"
        ];
        if (unsupportFrame.indexOf(searchEngine.value) === -1) {
          const path = "/?src=" + searchEngine.desktop + queryString;
          this.$router.push(path);
        } else {
          window.open(searchEngine.desktop + queryString);
        }
      }
    },
    computed: {
      searchEngines() {
        return this.$store.state.search.searchEngines;
      }
    }
  };
</script>

<style lang="stylus" scoped>
</style>
