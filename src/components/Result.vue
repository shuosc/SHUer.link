<template lang="pug">
  div
    km-search-input
    .webpage(v-for="item in webpages")
      km-card-webpage(:title="item.title",
                  :searchEngine="item.searchEngine",
                  :score="item.score",
                  :description="item.description",
                  @click.native="show(item.url)")
</template>

<script>
  import KmSearchInput from "./SearchInput";
  import KmCardWebpage from "./CardWebpage";
  export default {
    name: "Result",
    components: {
      KmSearchInput,
      KmCardWebpage
    },
    methods: {
      show(url) {
        console.log(url);
      }
    },
    mounted() {
      this.$http
        .get("search/webpage", {
          params: {
            keyword: "可达鸭"
          }
        })
        .then(res => {
          this.webpages = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    data() {
      return {
        webpages: []
      };
    }
  };
</script>

<style lang="stylus">
  .webpage {
    width: 60%;
    margin: 10px auto;
  }
</style>

